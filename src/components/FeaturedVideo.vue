<template>
  <div class="authors-slider container my-5">
    <transition-group name="fade" tag="div" class="row g-3">
      <div
        v-for="item in paginatedItems"
        :key="item.id"
        :class="layout === 'grid' ? 'col-md-4' : 'col-md-6'"
      >
        <div class="card h-100 shadow-sm article-card">
          <div class="img-wrapper">
            <img :src="item.image" class="card-img-top" alt="image" />
          </div>
          <div class="card-body">
            <div class="d-flex align-items-center mb-2">
              <span class="badge category-badge me-2">{{ item.tag }}</span>
              <small class="text-muted">{{ $t("by") }} {{ item.author }}</small>
            </div>
            <h6 class="card-title mt-1">
              <router-link :to="`/post/${item.id}`">{{ $t(`${item.title}`) }}</router-link>
            </h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p class="text-muted small mb-0">
              📅 <span>{{ $t(`dates.${item.date}`) }}</span>
 • ⏱ {{ item.readTime }} {{ $t("time") }}
            </p>
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
import { usePostStore } from "@/stores/postStore";

export default {
  name: "AuthorsSlider",
  props: {
    layout: { type: String, default: "slider" },
    itemsPerPage: { type: Number, default: 4 },
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  computed: {
    postStore() {
      return usePostStore(); 
    },
    totalPages() {
      return Math.ceil(this.postStore.posts.length / this.itemsPerPage);
    },
    paginatedItems() {
      if (this.layout === "grid") return this.postStore.posts;
      const start = (this.currentPage - 1) * this.itemsPerPage;
      return this.postStore.posts.slice(start, start + this.itemsPerPage);
    },
  },
  methods: {
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
  },
};
</script>

<style scoped>
.article-card {
  background: #ffffff;
  border: none;
  border-radius: 15px;
  width: 100%;
  height: auto;
  transition: transform 0.3s, box-shadow 0.3s;
}
.article-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.15);
}

.img-wrapper {
  width: 100%;
  height: 230px;
  overflow: hidden;
  border-radius: 12px;
  margin-bottom: 12px;
}
.img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}
.img-wrapper img:hover {
  transform: scale(1.05);
}

.card-body {
  padding: 15px 12px;
}

.category-badge {
  background: #f0f0f0;
  color: #000;
  padding: 5px 10px;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 500;
  transition: all 0.3s;
}
.category-badge:hover {
  background-color: #007bff;
  color: #fff;
}

.card-title a {
  text-decoration: none;
  color: #222;
  font-size: 1rem;
  font-weight: 600;
}
.card-title a:hover {
  color: #007bff;
}

.card-body p {
  font-size: 0.8rem;
  color: #555;
}

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
