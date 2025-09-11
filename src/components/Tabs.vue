<template>
  <div class="tabs-container mb-4">
    <div class="tabs">
      <!-- Home -->
      <RouterLink
        to="/"
        class="tab-link"
        :class="{ active: activeTab === 'home' }"
      >
        Home
      </RouterLink>

      <!-- Categories -->
      <RouterLink
        to="/categories"
        class="tab-link"
        :class="{ active: activeTab === 'categories' }"
      >
        Categories
      </RouterLink>

      <!-- Seçilmiş category (yalnız varsa) -->
      <span
        v-if="selectedCategory"
        class="tab-link blog-active"
      >
        • {{ selectedCategory }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    activeTab: {
      type: String,
      default: "categories", // varsayılan olaraq categories aktivdir
    },
    selectedCategory: {
      type: String,
      default: "",
    },
  },
};
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
  text-decoration: none;
  transition: color 0.3s, font-weight 0.3s;
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
</style>
