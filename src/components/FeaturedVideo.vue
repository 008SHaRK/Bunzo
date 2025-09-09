<template>
  <div class="authors-slider container my-5">
    <!-- Şəkillər -->
    <transition-group name="fade" tag="div" class="row g-3">
      <div v-for="item in paginatedItems" :key="item.id" class="col-md-6">
        <div class="card h-100 shadow-sm article-card">
          <div class="img-wrapper">
            <img :src="item.image" class="card-img-top" alt="image" />
          </div>
          <div class="card-body">
            <div class="d-flex align-items-center mb-2">
              <span class="badge category-badge me-2">{{ item.tag }}</span>
              <small class="text-muted">By admin</small>
            </div>
            <h6 class="card-title mt-1">
              <a :href="item.link">{{ item.title }}</a>
            </h6>
            <p class="text-muted small mb-0">
              📅 {{ item.date }} • ⏱ {{ item.readTime }} min read
            </p>
          </div>
        </div>
      </div>
    </transition-group>

  
  </div>
</template>

<script>
import img1 from "@/assets/img/1-2.jpg";
import img2 from "@/assets/img/2-1.jpg";

export default {
  name: "AuthorsSlider",
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 4,
      items: [
        { id: 1, title: "Create beautiful designs that will help convert more customers", tag: "Javascript", image: img1, date: "12 Apr, 2022", readTime: 3, link: "/post/1" },
        { id: 2, title: "WooLentor is a powerful WP plugin for WooCommerce site", tag: "Wordpress", image: img2, date: "12 Apr, 2022", readTime: 3, link: "/post/2" },
        { id: 3, title: "Design best practices you should know", tag: "Design", image: img1, date: "13 Apr, 2022", readTime: 4, link: "/post/3" },
        { id: 4, title: "Drupal modules you need in 2025", tag: "Drupal", image: img2, date: "14 Apr, 2022", readTime: 2, link: "/post/4" },
        { id: 5, title: "Next.js vs Vue.js which is better?", tag: "Javascript", image: img1, date: "15 Apr, 2022", readTime: 5, link: "/post/5" },
        { id: 6, title: "Modern UI trends to follow", tag: "Design", image: img2, date: "16 Apr, 2022", readTime: 3, link: "/post/6" },
        { id: 7, title: "SEO for developers", tag: "SEO", image: img1, date: "17 Apr, 2022", readTime: 4, link: "/post/7" },
        { id: 8, title: "Headless CMS explained", tag: "CMS", image: img2, date: "18 Apr, 2022", readTime: 2, link: "/post/8" },
      ],
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    paginatedItems() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.items.slice(start, start + this.itemsPerPage);
    },
  },
  methods: {
    nextPage() { if (this.currentPage < this.totalPages) this.currentPage++; },
    prevPage() { if (this.currentPage > 1) this.currentPage--; },
  },
};
</script>

<style scoped>
/* Card arxa fon və ölçülər */
/* Card arxa fon və kölgə */
.article-card {
  background: #ffffff; /* aydın fon */
  border: none;
  border-radius: 15px; /* yumşaq künclər */
  width: 100%;
  height: auto; /* hündürlük avtomatik */
  transition: transform 0.3s, box-shadow 0.3s;
}

.article-card:hover {
  transform: translateY(-5px); /* hover zamanı yüngül qalxma */
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
}

/* şəkil ölçüləri və künc radius */
.img-wrapper {
  width: 630px;
  height: 350px;
  overflow: hidden;
  border-radius: 12px;
  margin-bottom: 12px; /* şəkil ilə yazı arasına məsafə */
}

.img-wrapper img {
  width: 630px;
  height: 350px;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.img-wrapper img:hover {
  transform: scale(1.05);
}

/* Card-body padding və spacing */
.card-body {
  padding: 15px 12px;
}

/* kategoriya badge */
.category-badge {
  background: #f0f0f0;
  color: #000;
  padding: 5px 10px;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 500;
  margin-right: 8px;
}
.category-badge:hover {
  background: #007bff;
  color: #fff;
  cursor: pointer;
}

.card-body small {
  color: #888888;
  font-size: 0.7rem;
}

/* Başlıq */
.card-title a {
  text-decoration: none;
  color: #222222;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.4;
  transition: color 0.3s;
}

.card-title a:hover {
  color: #007bff;
}

/* Mətn */
.card-body p {
  font-size: 0.8rem;
  color: #555555;
  margin-top: 5px;
}

/* animasiya */
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>
