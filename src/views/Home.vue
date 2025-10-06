<template>
  <div class="container blog-layout">
    <div class="row gx-3">
      <!-- Sidebar -->
      <div class="col-12 col-md-3 mb-4 mb-md-0">
        <SidebarCategory
          :categories="categories.map(c => ({
            ...c,
            title: $t(`tags.${c.title.toLowerCase()}`)
          }))"
        />
      </div>

      <!-- Bloglar -->
      <div class="col-12 col-md-9">
        <div class="post-list d-flex flex-column gap-3">
          <BlogCard
            v-for="post in paginatedPosts"
            :key="post.id"
            :post="{
              ...post,
              title: $t(post.title),
              tag: $t(`tags.${post.tag.toLowerCase()}`),
              date: $t(`dates.${post.date}`)
            }"
          />
        </div>

       
      </div>
    </div>

    <!-- Aşağıdakı komponentlər -->
    <TrendingArticles :title="$t('trend')" />
    <AuthorsSlider :title="$t('authors')" />
    <TrendingTopic :title="$t('trend')" />

    <div class="d-flex justify-content-between align-items-center mb-3 mt-5">
      <h3 class="mb-0 featured-title">{{ $t("featured_video") }}</h3>
      <router-link to="/all-posts" class="see-more d-flex align-items-center">
        <span>{{ $t("see_more") }}</span>
        <i class="bi bi-arrow-right ms-2"></i>
      </router-link>
    </div>

    <FeaturedVideo />
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { usePostStore } from "@/stores/postStore";
import { storeToRefs } from "pinia";

import SidebarCategory from "@/components/SidebarCategory.vue";
import BlogCard from "@/components/BlogCard.vue";
import TrendingArticles from "@/components/TrendingArticles.vue";
import AuthorsSlider from "@/components/AuthorsSlider.vue";
import TrendingTopic from "@/components/TrendingTopic.vue";
import FeaturedVideo from "@/components/FeaturedVideo.vue";

import img1 from "@/assets/img/1-2.jpg";
import img2 from "@/assets/img/2-1.jpg";

export default {
  name: "Home",
  components: {
    SidebarCategory,
    BlogCard,
    AuthorsSlider,
    TrendingArticles,
    TrendingTopic,
    FeaturedVideo,
  },
  setup() {
    const postStore = usePostStore();
    const { posts } = storeToRefs(postStore);

    const categories = [
      { title: "Design", image: img1, link: "/category/design" },
      { title: "Drupal", image: img2, link: "/category/drupal" },
      { title: "Javascript", image: img1, link: "/category/javascript" },
      { title: "Joomla", image: img2, link: "/category/joomla" },
    ];

    const currentPage = ref(1);
    const postsPerPage = ref(2);

    const totalPages = computed(() => Math.ceil(posts.value.length / postsPerPage.value));

    const paginatedPosts = computed(() => {
      const start = (currentPage.value - 1) * postsPerPage.value;
      return posts.value.slice(start, start + postsPerPage.value);
    });

    const prevPage = () => {
      if (currentPage.value > 1) currentPage.value--;
    };

    const nextPage = () => {
      if (currentPage.value < totalPages.value) currentPage.value++;
    };

    return {
      posts,
      categories,
      currentPage,
      postsPerPage,
      totalPages,
      paginatedPosts,
      prevPage,
      nextPage,
    };
  },
};
</script>

<style scoped>
.blog-layout {
  margin-top: 40px;
}

.post-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.featured-title {
  font-weight: 600;
  color: #222;
}

.see-more {
  font-size: 14px;
  font-weight: 500;
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s;
}

.see-more:hover {
  color: #0056b3;
}

.see-more i {
  font-size: 16px;
  transition: transform 0.3s;
}

.see-more:hover i {
  transform: translateX(3px);
}

.see-more span,
.see-more i {
  font-size: 14px;
  font-weight: 500;
  color: #000;
}

.pagination button {
  padding: 6px 12px;
  border: none;
  background: #007bff;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}

.pagination button:disabled {
  background: #ccc;
  cursor: not-allowed;
}
</style>
