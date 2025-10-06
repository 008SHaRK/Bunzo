<template>
  <!-- Tabs -->
  <div class="tabs-container">
    <div class="tabs">
      <RouterLink
        to="/"
        class="tab-link"
        :class="{ active: $route.path === '/' }"
      >
        {{ $t("home") }}
      </RouterLink>

      <RouterLink
        to="/categories"
        class="tab-link"
        :class="{
          active: $route.path === '/categories',
          'blog-active': $route.path.startsWith('/category'),
        }"
      >
        {{ $t("categories") }}
        <span
          v-if="$route.path === '/categories' || $route.path.startsWith('/category')"
          class="dot"
        >
          ●
        </span>
      </RouterLink>
    </div>
  </div>

  <!-- Category grid -->
  <div class="category-page container my-5">
    <div class="grid-container">
      <div
        v-for="(item, index) in categories"
        :key="index"
        class="card"
        :style="{ backgroundImage: 'url(' + item.image + ')' }"
        @click="goToCategory(item.link)"
      >
        <div class="overlay"></div>
        <span>{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { useCategoryStore } from "@/stores/useCategoryStore";
import { computed } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "Category",
  setup() {
    const router = useRouter();
    const store = useCategoryStore();

    // reactive categories
    const categories = computed(() => store.categories);

    const goToCategory = (link) => {
      router.push(link);
    };

    return { categories, goToCategory };
  },
};
</script>

<style scoped>
/* Tabs */
.tabs-container {
  display: flex;
  justify-content: center;
  background: #f4f2fb;
  padding: 12px 24px;
  border-radius: 8px;
}
.tabs {
  display: flex;
  gap: 24px;
}
.tab-link {
  cursor: pointer;
  color: #555;
  font-size: 16px;
  transition: color 0.3s, font-weight 0.3s;
  display: flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
}
.tab-link:hover {
  color: #000;
}
.tab-link.active,
.tab-link.blog-active {
  font-weight: 600;
  color: #000;
}
.dot {
  font-size: 12px;
  line-height: 1;
  color: #9b30ff;
}

/* Grid */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.card {
  width: 100%;
  height: 150px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.3s ease;
}
.card:hover {
  transform: scale(1.05);
}
.card .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 123, 255, 0.4);
  opacity: 0;
  transition: opacity 0.3s ease;
}
.card:hover .overlay {
  opacity: 1;
}
.card span {
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.7);
  position: relative;
  z-index: 1;
}
</style>
