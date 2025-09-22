<template>
  <div>
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
          to="/all-posts"
          class="tab-link"
          :class="{
            active: $route.path === '/all-posts',
            'blog-active': $route.path === '/all-posts',
          }"
        >
          {{ $t("allpost") }}
          <span v-if="$route.path === '/all-posts'" class="dot">●</span>
        </RouterLink>
      </div>
    </div>

    <!-- Blog kontent -->
    <div class="container my-5">
      <AuthorsSlider layout="grid" />
    </div>
  </div>
</template>

<script setup>
import { RouterLink, useRoute } from "vue-router";
import AuthorsSlider from "@/components/AuthorsSlider.vue";

const $route = useRoute();
</script>

<style scoped>
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
.tab-link.active {
  font-weight: 600;
  color: #000;
}
.tab-link.blog-active {
  font-weight: 600;
  color: #000;
}
.dot {
  font-size: 12px;
  line-height: 1;
  color: #9b30ff;
}
</style>
