<template>
  <div class="blog-card" @click="goToPost(post.link)">
    <div class="blog-img">
      <img :src="post.image" alt="post image" />
    </div>
    <div class="blog-content">
      <div class="info">
        <span class="tag">{{ post.tag }}</span>
        <span class="author">By {{ post.author }}</span>
      </div>
      <h3 class="title">{{ post.title }}</h3>
      <p class="excerpt">{{ post.excerpt }}</p>
      <div class="meta">
        <span>📅 {{ post.date }}</span>
        <span>⏱ {{ post.readTime }} min read</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogCard",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    goToPost(link) {
      this.$router.push(link);
    },
  },
};
</script>

<style scoped>
.blog-card {
  display: flex;
  gap: 20px;
  cursor: pointer;
  transition: transform 0.3s ease;
  margin-left: -60px;
}

.blog-img {
  width: 530px; /* böyük şəkil eni */
  height: 265px; /* böyük şəkil hündürlüyü */
  overflow: hidden;
  border-radius: 12px;
}

.blog-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

/* Hover effekti yalnız şəkilə */
.blog-card:hover .blog-img img {
  transform: scale(1.08);
}

.blog-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;
}

.tag {
  background: #f0f0f0;
  padding: 2px 8px;
  border-radius: 6px;
  margin-bottom: 6px;
  font-size: 14px;
  max-width: fit-content;
}
.info {
  display: flex;
  gap: 10px;
  font-size: 14px;
  color: #777;
  margin-bottom: 6px;
}

.tag:hover,
.author:hover {
  color: #007bff;
}
/* Yazının hover rəngi */
.title:hover,
.excerpt:hover,
.meta span:hover {
  color: #007bff;
}

.title {
  font-size: 20px;
  font-weight: bold;
  margin: 6px 0;
}

.excerpt {
  font-size: 15px;
  color: #555;
  margin-bottom: 10px;
}

.meta {
  font-size: 14px;
  color: #777;
  display: flex;
  gap: 15px;
}
@media (max-width: 768px) {
  .blog-card {
    flex-direction: column;
    gap: 10px;
  }

  .blog-img {
    width: 100%;
    height: 200px; /* mobil üçün daha qısa */
  }

  .blog-content {
    max-width: 100%;
  }

  .title {
    font-size: 18px;
  }

  .excerpt {
    font-size: 14px;
  }

  .meta span {
    font-size: 13px;
  }
}

</style>
