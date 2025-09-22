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
              title: $t(`title${post.id}`),
              tag: $t(`tags.${post.tag.toLowerCase()}`),
              date: $t(`dates.${post.dateKey}`)
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
    FeaturedVideo
  },
  data() {
    return {
      categories: [
        { title: "Design", image: img1, link: "/category/design" },
        { title: "Drupal", image: img2, link: "/category/drupal" },
        { title: "Javascript", image: img1, link: "/category/javascript" },
        { title: "Joomla", image: img2, link: "/category/joomla" },
      ],
      posts: [
        {
          id: 1,
          excerpt:
            "You need to be sure there isn’t anything embarrassing hidden in the middle of text",
          image: img1,
          tag: "javascript",
          author: "Uzzal Hossain",
          dateKey: "apr12",
          readTime: 3,
        },
        {
          id: 2,
          excerpt:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
          image: img2,
          tag: "drupal",
          author: "Uzzal Hossain",
          dateKey: "apr13",
          readTime: 3,
        },
        {
          id: 3,
          excerpt: "Third post excerpt",
          image: img1,
          tag: "design",
          author: "Uzzal Hossain",
          dateKey: "apr14",
          readTime: 2,
        },
        {
          id: 4,
          excerpt: "Fourth post excerpt",
          image: img2,
          tag: "drupal",
          author: "Uzzal Hossain",
          dateKey: "apr15",
          readTime: 4,
        },
      ],
      currentPage: 1,
      postsPerPage: 2,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.posts.length / this.postsPerPage);
    },
    paginatedPosts() {
      const start = (this.currentPage - 1) * this.postsPerPage;
      return this.posts.slice(start, start + this.postsPerPage);
    },
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
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
</style>