<template>
  <div class="container my-5">
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
          to="/categories"
          class="tab-link"
          :class="{
            active: $route.path === '/categories',
            'blog-active': $route.path.startsWith('/category'),
          }"
        >
          Categories
          <span
            v-if="$route.path === '/categories' || $route.path.startsWith('/category')"
            class="dot"
          >
            ●
          </span>
        </RouterLink>
      </div>
    </div>

    <!-- Category posts -->
    <div v-if="filteredPosts.length" class="row g-3 mt-4">
      <div
        v-for="item in filteredPosts"
        :key="item.id"
        class="col-md-6 col-lg-4"
      >
        <div class="card h-100 shadow-sm article-card" @click="goToPost(item)">
          <div class="img-wrapper small-img">
            <img :src="item.image" class="card-img-top" alt="image" />
          </div>
          <div class="card-body">
            <div class="d-flex align-items-center mb-2">
              <span class="badge category-badge me-2">{{ item.tag }}</span>
              <small class="text-muted">By {{ item.author }}</small>
            </div>
            <h6 class="card-title mt-1">{{ item.title }}</h6>
            <p class="text-muted small mb-0">
              📅 {{ item.date }} • ⏱ {{ item.readTime }} min read
            </p>
          </div>
        </div>
      </div>
    </div>

    <p v-else class="mt-3">No posts found for {{ categoryName }}</p>
  </div>
</template>

<script>
import posts from "@/data/posts.js";
import { useRouter } from "vue-router";

export default {
  setup() {
    const router = useRouter();

    const goToPost = (post) => {
      router.push(post.link);
    };

    return { goToPost };
  },
  computed: {
    categoryName() {
      return this.$route.params.name;
    },
    filteredPosts() {
      if (!this.categoryName) return posts;
      return posts.filter(
        (p) => p.category.toLowerCase() === this.categoryName.toLowerCase()
      );
    },
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

/* Article Card */
.article-card {
  background: #f9f9f9;
  border: none;
  border-radius: 12px;
  transition: transform 0.3s;
}
.article-card:hover {
  transform: translateY(-5px);
}
.img-wrapper.small-img {
  height: 120px;
  overflow: hidden;
  border-radius: 10px;
}
.img-wrapper.small-img img {
  height: 120px;
  width: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}
.img-wrapper.small-img img:hover {
  transform: scale(1.1);
}
.category-badge {
  background: #f1f1f1;
  color: #000;
  padding: 4px 8px;
  border-radius: 5px;
  font-size: 0.8rem;
  transition: all 0.3s;
}
.category-badge:hover {
  background: #007bff;
  color: #fff;
}
</style>
