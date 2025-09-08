<template>
  <div class="container blog-layout">
    <div class="row">
      <!-- Sol tərəf: Kateqoriyalar -->
      <div class="col-md-4 mb-4 mb-md-0">
        <SidebarCategory :categories="categories" />
      </div>

      <!-- Sağ tərəf: Blog Kartları -->
      <div class="col-md-8">
        <div class="blog-grid">
          <BlogCard
            v-for="post in paginatedPosts"
            :key="post.link"
            :post="post"
          />
        </div>

        <!-- Pagination -->
        <div class="pagination-section d-flex justify-content-between align-items-center mt-4">
          <h2 class="section-title">From Author's</h2>
          <div class="pagination-arrows">
            <button @click="prevPage" :disabled="currentPage === 1">←</button>
            <span>{{ currentPage }} / {{ totalPages }}</span>
            <button @click="nextPage" :disabled="currentPage === totalPages">→</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarCategory from "@/components/SidebarCategory.vue";
import BlogCard from "@/components/BlogCard.vue";

// Şəkillər
import img1 from "@/assets/img/1-2.jpg";
import img2 from "@/assets/img/2-1.jpg";
import img3 from "@/assets/img/14-1.jpg";
import img4 from "@/assets/img/13.jpg";

export default {
  name: "BlogList",
  components: { SidebarCategory, BlogCard },
  data() {
    return {
      categories: [
        { title: "Design", link: "/category/design" },
        { title: "Javascript", link: "/category/javascript" },
        { title: "Drupal", link: "/category/drupal" },
        { title: "Joomla", link: "/category/joomla" }
      ],
      posts: [
        { title: "Post 1", excerpt: "Lorem ipsum dolor sit amet", author: "John", date: "01 Jan", link: "/post/1", image: img1 },
        { title: "Post 2", excerpt: "Lorem ipsum dolor sit amet", author: "Jane", date: "02 Jan", link: "/post/2", image: img2 },
        { title: "Post 3", excerpt: "Lorem ipsum dolor sit amet", author: "Alice", date: "03 Jan", link: "/post/3", image: img3 },
        { title: "Post 4", excerpt: "Lorem ipsum dolor sit amet", author: "Bob", date: "04 Jan", link: "/post/4", image: img4 },
        { title: "Post 5", excerpt: "Lorem ipsum dolor sit amet", author: "Mary", date: "05 Jan", link: "/post/5", image: img1 },
        { title: "Post 6", excerpt: "Lorem ipsum dolor sit amet", author: "Tom", date: "06 Jan", link: "/post/6", image: img2 },
        { title: "Post 7", excerpt: "Lorem ipsum dolor sit amet", author: "Linda", date: "07 Jan", link: "/post/7", image: img3 },
        { title: "Post 8", excerpt: "Lorem ipsum dolor sit amet", author: "Sam", date: "08 Jan", link: "/post/8", image: img4 }
      ],
      currentPage: 1,
      postsPerPage: 4
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.posts.length / this.postsPerPage);
    },
    paginatedPosts() {
      const start = (this.currentPage - 1) * this.postsPerPage;
      return this.posts.slice(start, start + this.postsPerPage);
    }
  },
  methods: {
    prevPage() { if (this.currentPage > 1) this.currentPage--; },
    nextPage() { if (this.currentPage < this.totalPages) this.currentPage++; }
  }
};
</script>

<style scoped>
.blog-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

/* Pagination başlıqla eyni səviyyədə */
.pagination-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.pagination-arrows {
  display: flex;
  gap: 10px;
  align-items: center;
}

.pagination-arrows button {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid #ddd;
  background: #fff;
  cursor: pointer;
  transition: 0.3s;
}
.pagination-arrows button:hover:not(:disabled) {
  background: #f0f0f0;
}
.pagination-arrows button:disabled { opacity: 0.5; cursor: not-allowed; }

.section-title {
  font-size: 26px;
  font-weight: bold;
}

/* Responsive */
@media (max-width: 768px) {
  .blog-grid { grid-template-columns: 1fr; }
}
</style>
