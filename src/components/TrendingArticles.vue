<template>
  <div class="container py-5">
    <h2 class="mb-4">{{ $t("trend") }}</h2>
    <div class="row gy-4">
      <div v-for="post in postStore.posts" :key="post.id" class="col-12 col-md-6">
        <!-- Router link ilə card -->
        <router-link
          :to="`/post/${post.id}`"
          class="trending-card text-decoration-none text-dark"
        >
          <!-- Şəkil -->
          <img :src="post.image" alt="post image" class="card-img" />

          <!-- Məqalə məlumatı -->
          <div class="card-body">
            <div class="d-flex align-items-center mb-2 flex-wrap justify-content-center justify-content-md-start">
              <!-- Tag -->
              <span class="badge bg-light text-dark me-2 mb-1">
              
                {{ $t(`tags.${post.tag}`) }}
              </span>
              <!-- Tarix -->
              <small class="text-muted mb-1">
          📅 <span>{{ $t(`dates.${post.date}`) }}</span>
              </small>
            </div>
            <!-- Başlıq -->
            <h5 class="card-title">{{ $t(`${post.title}`) }}</h5>
            <p class="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nihil.
            </p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { usePostStore } from "@/stores/postStore";

export default {
  name: "TrendingArticles",
  setup() {
    const postStore = usePostStore(); // Pinia store instance
    return { postStore };
  },
};
</script>

<style scoped>
.trending-card {
  display: flex;
  flex-direction: row;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.trending-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Şəkil */
.card-img {
  width: 250px;
  height: 125px;
  object-fit: cover;
  flex-shrink: 0;
  transition: transform 0.4s ease;
}

.trending-card:hover .card-img {
  transform: scale(1.05);
}

/* Yazı hissəsi */
.card-body {
  padding: 12px;
  margin-left: 12px;
  flex: 1;
}

.card-title {
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.4;
  transition: color 0.3s ease;
}

.card-title:hover {
  color: #007bff;
}

.card-text {
  font-size: 0.9rem;
  color: #555;
}

.card-body .badge {
  transition: all 0.3s;
}

.card-body .badge:hover {
  background-color: #007bff !important;
  color: #fff !important;
}

/* --- RESPONSIVE: 1200px-dən kiçik olanda --- */
@media (max-width: 1200px) {
  .trending-card {
    flex-direction: column;
    text-align: left;
  }

  .card-img {
    width: 100%;
    height: 220px;
  }

  .card-body {
    margin-left: 0;
    padding: 15px;
  }
}
</style>
