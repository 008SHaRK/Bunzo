<template>
  <div class="container py-5">
    <h2 class="mb-4">Trending Articles</h2>
    <div class="row gy-4">
      <div 
        v-for="(post, index) in posts" 
        :key="post.id" 
        class="col-md-6 d-flex"
      >
        <!-- Router link ilə card -->
        <router-link 
          :to="`/post/${post.id}`" 
          class="trending-card d-flex text-decoration-none text-dark"
        >
          <!-- Şəkil -->
          <img :src="post.image" alt="post image" class="card-img" />

          <!-- Məqalə məlumatı -->
          <div class="card-body">
            <div class="d-flex align-items-center mb-2">
              <span class="badge bg-light text-dark me-2">{{ post.tag }}</span>
              <small class="text-muted">
                <i class="bi bi-calendar-event me-1"></i> {{ post.date }}
              </small>
            </div>
            <h5 class="card-title">{{ post.title }}</h5>
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
        {
          id: 1,
          image: img1,
          tag: "Javascript",
          title: "The best website template layout for your business",
          date: "12 Apr, 2022",
        },
        {
          id: 2,
          image: img2,
          tag: "Joomla",
          title: "With WooLentor’s drag and drop interface for creating c...",
          date: "30 Mar, 2022",
        },
        {
          id: 3,
          image: img1,
          tag: "Design",
          title: "Create a custom checkout page in minutes and increase y...",
          date: "09 Apr, 2022",
        },
        {
          id: 4,
          image: img2,
          tag: "Design",
          title: "Customize your WooCommerce store with countless design ...",
          date: "29 Mar, 2022",
        },
        {
          id: 5,
          image: img1,
          tag: "Wordpress",
          title: "WooLentor is a powerful WP plugin for WooCommerce site",
          date: "12 Apr, 2022",
        },
        {
          id: 6,
          image: img2,
          tag: "Wordpress",
          title: "WooCommerce comes with an intuitive drag-and-drop inter...",
          date: "12 Apr, 2022",
        },
      ],
    };
  },
};
</script>

<style scoped>
.trending-card {
  display: flex;
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
  transform: scale(1.1);
}

/* Yazı hissəsi */
.card-body {
  padding: 12px;
  margin-left: 12px;
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
</style>
