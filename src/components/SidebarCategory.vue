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
  width: 250.5px;
  height: 125px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.category-card:hover {
  background-color: #007bff; /* hover zamanı mavı ton */
}

.category-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.3s ease;
}

.category-card:hover .category-img {
  opacity: 0.7; /* hover zamanı şəklin tonunu yüngülləşdir */
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
@media (max-width: 768px) {
  .blog-card {
    flex-direction: column;
    gap: 10px;
  }

  .blog-img {
    width: 100%;
    height: 200px; /* mobil üçün daha qısa */
  }

  .blog-content {
    max-width: 100%;
  }

  .title {
    font-size: 18px;
  }

  .excerpt {
    font-size: 14px;
  }

  .meta span {
    font-size: 13px;
  }
}


</style>