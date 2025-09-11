<template>
  <div class="container blog-layout">
    <div class="row gx-3">
      <!-- Sol tərəf: Kateqoriyalar -->
      <div class="col-md-3 mb-4 mb-md-0">
        <SidebarCategory :categories="categories" />
      </div>

      <!-- Sağ tərəf: Yazılar -->
      <div class="col-md-9">
        <div class="post-list">
          <BlogCard
            v-for="post in paginatedPosts"
            :key="post.link"
            :post="post"
          />
        </div>
      </div>
    </div>
    <TrendingArticles />
    
    <AuthorsSlider />
    <TrendingTopic />

    <div class="d-flex justify-content-between align-items-center mb-3">
      <!-- Solda başlıq -->
      <h3 class="mb-0 featured-title">Featured Video</h3>

      <!-- Sağda See more -->
      <a href="#" class="see-more d-flex align-items-center">
        <span>See more</span>
        <i class="bi bi-arrow-right ms-2"></i>
      </a>
    </div>


    <FeaturedVideo />
  </div>
</template>

<script>
import SidebarCategory from "@/components/SidebarCategory.vue";
import BlogCard from "@/components/BlogCard.vue";

import img1 from "@/assets/img/1-2.jpg";
import img2 from "@/assets/img/2-1.jpg";
import TrendingArticles from "@/components/TrendingArticles.vue";
import AuthorsSlider from "@/components/AuthorsSlider.vue";
import TrendingTopic from "@/components/TrendingTopic.vue";
import FeaturedVideo from "@/components/FeaturedVideo.vue";

export default {
  name: "Home",
  components: { SidebarCategory, BlogCard, AuthorsSlider, TrendingArticles, TrendingTopic, FeaturedVideo },
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
          title: "The best website template layout for your bus...",
          excerpt:
            "You need to be sure there isn’t anything embarrassing hidden in the middle of text",
          image: img1,
          tag: "Javascript",
          author: "Uzzal Hossain",
          date: "12 Apr, 2022",
          readTime: 3,
          link: "/post/1",
        },
        {
          title: "Make your store stand out from the others by ...",
          excerpt:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry has been",
          image: img2,
          tag: "Magento",
          author: "Uzzal Hossain",
          date: "12 Apr, 2022",
          readTime: 3,
          link: "/post/2",
        },
        {
          title: "Third post",
          excerpt: "Third post excerpt",
          image: img1,
          tag: "Design",
          author: "Uzzal Hossain",
          date: "13 Apr, 2022",
          readTime: 2,
          link: "/post/3",
        },
        {
          title: "Fourth post",
          excerpt: "Fourth post excerpt",
          image: img2,
          tag: "Drupal",
          author: "Uzzal Hossain",
          date: "14 Apr, 2022",
          readTime: 4,
          link: "/post/4",
        },
      ],
      currentPage: 1,
      postsPerPage: 2, // hər səhifədə 2 post
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

/* Sağ tərəf yazılar */
.post-list {
  display: flex;
  flex-direction: column;
  gap: 20px; /* postlar arası məsafə */
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