<template>
      <!-- Tabs -->
    <div class="tabs-container">
      <div class="tabs">
        <RouterLink
          to="/"
          class="tab-link"
          :class="{ active: $route.path === '/' }"
        >
          Home
        </RouterLink>

        <RouterLink
          to="/categories/:name"
          class="tab-link"
          :class="{
            active: $route.path === '/categories/:name',
            'blog-active': $route.path === '/categories/:name',
          }"
        >
          Categories
          <span v-if="$route.path === '/categories/:name'" class="dot">●</span>
        </RouterLink>
      </div>
    </div>

  <div class="category-page container my-5">

    <!-- Grid görünüşü üçün sadəcə slider-track divini grid container kimi göstəririk -->
    <div class="grid-container">
      <div
        v-for="(item, index) in items"
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
import designImg from '@/assets/img/1-2.jpg';
import drupalImg from '@/assets/img/2-1.jpg';
import jsImg from '@/assets/img/14-1.jpg';
import joomlaImg from '@/assets/img/13.jpg';
import magentoImg from '@/assets/img/16.jpg';
import wpImg from '@/assets/img/6-1.jpg';
import { RouterLink, useRoute } from "vue-router";


const $route = useRoute();

export default {
  name: "Category",
  data() {
    return {
      items: [
        { title: "Design", image: designImg, link: "/category/design" },
        { title: "Drupal", image: drupalImg, link: "/category/drupal" },
        { title: "Javascript", image: jsImg, link: "/category/javascript" },
        { title: "Joomla", image: joomlaImg, link: "/category/joomla" },
        { title: "Magento", image: magentoImg, link: "/category/magento" },
        { title: "WordPress", image: wpImg, link: "/category/wordpress" },
      ],
    };
  },
  methods: {
    goToCategory(link) {
      this.$router.push(link);
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
.page-title {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
}

/* 3x3 grid üçün */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

/* Cardlar TrendingTopic.vue stilinə uyğun */
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
