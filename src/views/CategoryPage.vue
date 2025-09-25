<template>
  <div class="container my-5">
    <!-- Tabs -->
    <div class="tabs-container">
      <div class="tabs">
        <!-- Home Tab -->
        <RouterLink to="/" class="tab-link" :class="{ active: !categoryName }">
          {{ $t("home") }}
        </RouterLink>

        <!-- Categories Tab -->
        <RouterLink
          to="/categories"
          class="tab-link"
          :class="{ active: categoryName === 'categories' }"
        >
          {{ $t("categories") }}
          <span v-if="categoryName === 'categories'" class="dot">●</span>
        </RouterLink>

        <!-- Selected Tag Tab -->
        <RouterLink
          v-if="categoryName && categoryName !== 'categories'"
          :to="`/category/${categoryName}`"
          class="tab-link"
          :class="{ active: true }"
        >
          {{ $t(`tags.${categoryName.toLowerCase()}`) }}
          <span class="dot">●</span>
        </RouterLink>
      </div>
    </div>

    <!-- Posts -->
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
              <!-- Tag dynamically translated -->
              <span class="badge category-badge me-2">{{
                $t(`tags.${item.tag.toLowerCase()}`)
              }}</span>
              <small class="text-muted">{{ $t("by") }} {{ item.author }}</small>
            </div>
            <!-- Title dynamically translated if exists in i18n -->
            <h6 class="card-title mt-1">
              {{ $t(item.titleKey || item.title) }}
            </h6>
            <p class="text-muted small mb-0">
              📅 {{ item.date }} • ⏱ {{ item.readTime }} {{ $t("time") }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <p v-else class="mt-3">
      {{ $t("no_posts_for") }}
      {{
        categoryName ? $t(`tags.${categoryName.toLowerCase()}`) : $t("allpost")
      }}
    </p>
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
      if (!this.categoryName || this.categoryName === "categories")
        return posts;
      return posts.filter(
        (p) => p.tag.toLowerCase() === this.categoryName.toLowerCase()
      );
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
