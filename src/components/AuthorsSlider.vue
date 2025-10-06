<template>
  <div class="authors-slider container my-5">
    <!-- Header -->
    <div
      v-if="layout === 'slider'"
      class="section-header d-flex justify-content-between align-items-center py-3 mb-4"
    >
      <h4 class="fw-bold mb-0">{{ $t("authors") }}</h4>
      <div>
        <button
          class="btn btn-light me-2"
          @click="prevPage"
          :disabled="currentPage === 1"
        >
          ←
        </button>
        <button
          class="btn btn-light"
          @click="nextPage"
          :disabled="currentPage === totalPages"
        >
          →
        </button>
      </div>
    </div>

    <!-- Cards -->
    <transition-group name="fade" tag="div" class="row g-3">
      <div
        v-for="item in displayedItems"
        :key="item.id"
        class="col-12 col-sm-6"
      >
        <div class="card h-100 shadow-sm article-card">
          <router-link :to="`/post/${item.id}`" class="img-wrapper">
            <img :src="item.image" alt="image" />
          </router-link>

          <div class="card-body text-start">
            <div class="d-flex justify-content-start align-items-center mb-2">
              <span class="badge category-badge me-2">{{ item.tag }}</span>
              <small class="text-muted">{{ $t("by") }} {{ item.author }}</small>
            </div>

            <h6 class="card-title mb-2">
              <router-link :to="`/post/${item.id}`">{{ $t(`${item.title}`) }}</router-link>
            </h6>

            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
              iste, explicabo officia unde possimus reiciendis?
            </p>

            <p class="text-muted small mb-0">
            📅 <span>{{ $t(`dates.${item.date}`) }}</span> • ⏱ {{ item.readTime }} {{ $t("time") }}
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
  props: { layout: { type: String, default: "slider" } },
  data() {
    return {
      currentPage: 1,
      itemsPerPage: 4,
    };
  },
  computed: {
    postStore() {
      return usePostStore(); // Pinia store instance
    },
    totalPages() {
      return Math.ceil(this.postStore.posts.length / this.itemsPerPage);
    },
    displayedItems() {
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
  background: #f9f9f9;
  border: none;
  border-radius: 12px;
  transition: transform 0.3s ease;
}
.article-card:hover {
  transform: scale(1.03);
}

.img-wrapper {
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 10px;
}
.img-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}
.img-wrapper img:hover {
  transform: scale(1.1);
}

.card-body {
  padding: 15px;
}

.card-body .d-flex {
  justify-content: flex-start;
  align-items: center;
}

.card-title a {
  text-decoration: none;
  color: #000;
  transition: color 0.3s;
}
.card-title a:hover {
  color: #007bff;
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

.fade-enter-active,
.fade-leave-active {
  transition: all 0.6s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateX(30px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.col-sm-6 {
  flex: 0 0 50%;
  max-width: 50%;
}
@media (max-width: 480px) {
  .col-sm-6 {
    flex: 0 0 100%;
    max-width: 100%;
  }
}
</style>
