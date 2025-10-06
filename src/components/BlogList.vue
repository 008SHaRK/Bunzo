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
            :key="post.id"
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
import { usePostStore } from "@/stores/postStore";

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
      currentPage: 1,
      postsPerPage: 4
    };
  },
  computed: {
    postStore() {
      return usePostStore(); // Pinia store instance
    },
    totalPages() {
      return Math.ceil(this.postStore.posts.length / this.postsPerPage);
    },
    paginatedPosts() {
      const start = (this.currentPage - 1) * this.postsPerPage;
      return this.postStore.posts.slice(start, start + this.postsPerPage);
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

@media (max-width: 768px) {
  .blog-grid { grid-template-columns: 1fr; }
}
</style>
