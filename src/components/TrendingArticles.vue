<template>
  <div class="container py-5">
    <h2 class="mb-4">Trending Articles</h2>
    <div class="row gy-4">
      <div 
        v-for="post in posts" 
        :key="post.id" 
        class="col-md-6"
      >
        <!-- Router link ilə card -->
        <router-link 
          :to="`/post/${post.id}`" 
          class="trending-card text-decoration-none text-dark"
        >
          <!-- Şəkil -->
          <img :src="post.image" alt="post image" class="card-img" />

          <!-- Məqalə məlumatı -->
          <div class="card-body">
            <div class="d-flex align-items-center mb-2 flex-wrap">
              <span class="badge bg-light text-dark me-2">
                {{ $t(`tags.${post.tag}`) }}
              </span>
              <small class="text-muted">
                <i class="bi bi-calendar-event me-1"></i> {{ $t(`dates.${post.date}`) }}
              </small>
            </div>
            <h5 class="card-title">{{ $t(`posts.${post.title}`) }}</h5>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import img1 from "@/assets/img/1-2.jpg";
import img2 from "@/assets/img/2-1.jpg";

export default {
  name: "TrendingArticles",
  data() {
    return {
      posts: [
        { id: 1, image: img1, tag: "javascript", title: "title1", date: "apr12" },
        { id: 2, image: img2, tag: "drupal", title: "title2", date: "apr13" },
        { id: 3, image: img1, tag: "design", title: "title3", date: "apr14" },
        { id: 4, image: img2, tag: "design", title: "title4", date: "apr15" },
        { id: 5, image: img1, tag: "wordpress", title: "title5", date: "apr16" },
        { id: 6, image: img2, tag: "wordpress", title: "title6", date: "apr17" },
      ],
    };
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
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  transition: box-shadow 0.3s ease;
}

.trending-card:hover {
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
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

/* --- RESPONSIVE DÜZƏLİŞ --- */
@media (max-width: 768px) {
  .trending-card {
    flex-direction: column;
    text-align: center;
  }

  .card-img {
    width: 100%;
    height: 180px;
  }

  .card-body {
    margin-left: 0;
    padding: 15px;
  }
}
</style>
