<template>
  <div class="container my-5">
    <h3 class="mb-4">{{ t("allpost") }}: "{{ searchQuery }}"</h3>

    <div v-if="filteredItems.length > 0" class="row g-3">
      <div
        v-for="item in filteredItems"
        :key="item.id"
        class="col-12 col-sm-6 col-lg-4"
      >
        <div class="card h-100 shadow-sm">
          <router-link :to="`/post/${item.id}`" class="img-wrapper">
            <img :src="item.image" alt="image" />
          </router-link>
          <div class="card-body">
            <h6 class="card-title">
              <router-link :to="`/post/${item.id}`">
                {{ t(item.titleKey) }}
              </router-link>
            </h6>
            <p class="text-muted small mb-0">
              📅 {{ t(`dates.${item.date}`) }} • ⏱ {{ item.readTime }}
              {{ t("time") }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <p v-else class="text-muted">{{ t("no_posts_for") }} "{{ searchQuery }}"</p>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";

// i18n
const { t } = useI18n();

// Route və reactive query
const route = useRoute();
const searchQuery = ref(route.query.q || "");

// Nümunə postlar
import img1 from "@/assets/img/1-2.jpg";
import img2 from "@/assets/img/2-1.jpg";
import img3 from "@/assets/img/6-1.jpg";
import img4 from "@/assets/img/9.jpg";
import img5 from "@/assets/img/14-1.jpg";
import img6 from "@/assets/img/16.jpg";

const items = ref([
  { id: 1, titleKey: "title1", image: img1, date: "apr12", readTime: 3 },
  { id: 2, titleKey: "title2", image: img2, date: "apr13", readTime: 4 },
  { id: 3, titleKey: "title3", image: img3, date: "apr14", readTime: 2 },
  { id: 4, titleKey: "title4", image: img4, date: "apr15", readTime: 5 },
  { id: 5, titleKey: "title5", image: img5, date: "apr15", readTime: 5 },
  { id: 6, titleKey: "title6", image: img6, date: "apr15", readTime: 1 },
  { id: 7, titleKey: "title7", image: img1, date: "apr15", readTime: 3 },
  { id: 8, titleKey: "title8", image: img2, date: "apr15", readTime: 4 },
]);

// Filtered items computed
const filteredItems = computed(() => {
  const q = searchQuery.value.toLowerCase();
  return items.value.filter((item) =>
    t(item.titleKey).toLowerCase().includes(q)
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
.img-wrapper {
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 10px;
}
.img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card-title a {
  text-decoration: none;
  color: #000;
}
.card-title a:hover {
  color: #007bff;
}
</style>
