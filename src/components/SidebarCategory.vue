<template>
  <div class="category-list">
    <div 
      v-for="(item, index) in categories" 
      :key="index"
      class="category-card"
      @click="goToPage(item.link)"
    >
      <img :src="item.image" class="category-img" />
      <div class="category-title">{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarCategory",
  props: {
    categories: {
      type: Array,
      required: true
    }
  },
  methods: {
    goToPage(link) {
      this.$router.push(link);
    }
  }
};
</script>

<style scoped>
.category-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.category-card {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  height: 125px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.category-card:hover {
  background-color: #007bff;
}

.category-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
}

.category-card:hover .category-img {
  opacity: 0.7;
}

.category-title {
  position: absolute;
  color: white;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-shadow: 0px 2px 4px rgba(0,0,0,0.7);
  z-index: 2;
}

/* Responsive */
@media (max-width: 992px) {
  .category-card { height: 140px; }
}

@media (max-width: 768px) {
  .category-card { height: 150px; }
}

@media (max-width: 480px) {
  .category-card { height: 130px; }
  .category-title { font-size: 14px; }
}
</style>
