<template>
  <div class="container my-4">
    <h3 class="mb-4">{{ t("allpost") }}: "{{ searchQuery }}"</h3>

    <!-- No results alert -->
    <div
      v-if="filteredItems.length === 0 && searchQuery"
      class="alert alert-warning"
    >
      {{ t("no_posts_for") }} "{{ searchQuery }}"
    </div>

    <!-- Results -->
    <transition-group name="fade" tag="div" class="d-flex flex-wrap gap-4">
      <BlogCard v-for="item in filteredItems" :key="item.id" :post="item" />
    </transition-group>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { usePostStore } from "@/stores/postStore";
import BlogCard from "@/components/BlogCard.vue";

// i18n
const { t } = useI18n();

// Route və reactive query
const route = useRoute();
const searchQuery = ref(route.query.q || "");

// Pinia store
const postStore = usePostStore();

// Filtered items computed
const filteredItems = computed(() => {
  const q = searchQuery.value.toLowerCase().trim();
  if (!q) return postStore.posts; // query boşdursa hamısı göstərilsin
  return postStore.posts.filter((item) =>
    t(item.title).toLowerCase().includes(q)
  );
});

// URL query dəyişəndə searchQuery yenilənsin
watch(
  () => route.query.q,
  (newQ) => {
    searchQuery.value = newQ || "";
  }
);
</script>

<style scoped>
/* Transition fade effekti */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Gap və responsive üçün */
.d-flex.flex-wrap.gap-4 {
  justify-content: flex-start;
}
</style>
