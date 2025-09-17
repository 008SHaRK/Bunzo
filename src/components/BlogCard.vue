<template>
  <div class="blog-card" @click="goToPost(post.id)">
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
  props: { post: { type: Object, required: true } },
  methods: {
    goToPost(id) {
      this.$router.push(`/post/${id}`);
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
  margin-bottom: 20px;
  max-width: 100%;
}

.blog-img {
  width: 100%;
  max-width: 530px;
  height: 265px;
  overflow: hidden;
  border-radius: 12px;
  flex-shrink: 0;
}

.blog-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.blog-card:hover .blog-img img {
  transform: scale(1.08);
}

.blog-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  max-width: 500px;
}

/* Tag, info, title, excerpt, meta */
.tag {
  background: #f0f0f0;
  padding: 2px 8px;
  border-radius: 6px;
  margin-bottom: 6px;
  font-size: 14px;
}
.info {
  display: flex;
  gap: 10px;
  font-size: 14px;
  color: #777;
  margin-bottom: 6px;
}
.author {
  border-radius: 5px;
  font-size: 13px;
  margin-bottom: 6px;
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

/* Hover effektlər */
.tag:hover,
.author:hover {
  background-color: #5138ee;
  color: #f0f0f0;
}
.title:hover,
.excerpt:hover,
.meta span:hover {
  color: #5138ee;
}

/* Responsive */
@media (max-width: 992px) {
  .blog-card {
    flex-direction: column;
    gap: 15px;
  }
  .blog-img {
    width: 100%;
    max-width: 100%;
    height: 220px;
  }
  .blog-content {
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .blog-img {
    height: 200px;
  }
  .blog-content {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .blog-img {
    height: 180px;
  }
  .title {
    font-size: 16px;
  }
  .excerpt {
    font-size: 13px;
  }
  .meta span {
    font-size: 12px;
  }
}
</style>
