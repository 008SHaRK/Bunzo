<template>
  <div class="blog-card" @click="goToPost(post.id)">
    <div class="blog-img-wrapper">
      <img :src="post.image" alt="post image" class="blog-img" />
    </div>
    <div class="blog-content">
      <div class="info">
        <span class="tag">{{ $t(`${post.tag}`) }}</span>
        <span class="author">{{ $t(`${post.author}`) }}</span>
      </div>
      <h3 class="title">{{ $t(`${post.title}`) }}</h3>
      <p class="excerpt">{{ $t(`excerpts.${post.excerpt}`) }}</p>
    <div class="meta">
  <span>📅 {{ $t(`${post.date}`) }}</span>
  <span>⏱ {{ post.readTime }} {{ $t('time') }}</span>
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
  flex-wrap: wrap;
}
.blog-img-wrapper {
  width: 100%;
  max-width: 530px;
  height: 265px;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 12px;
  position: relative;
}
.blog-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.4s ease, opacity 0.4s ease;
}
.blog-card:hover .blog-img {
  transform: scale(1.08);
  opacity: 0.95;
}
.blog-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  max-width: 500px;
}
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
  font-size: 13px;
margin-left: 5px;
margin-top: 5px;
  text-align: center;
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

.author:hover {
  background-color: #5138ee;
  color: #f0f0f0;
  border-radius: 30px;
  width: 90px;
  text-align: center;
}
.tag:hover{
  background-color: #5138ee;
  color: #f0f0f0;
  border-radius: 30px;
}



.title:hover,
.excerpt:hover,
.meta span:hover {
  color: #5138ee;
}
@media (max-width: 992px) {
  .blog-card {
    flex-direction: column;
    gap: 15px;
  }
  .blog-img-wrapper {
    max-width: 100%;
    height: 220px;
  }
  .blog-content {
    max-width: 100%;
  }
}
@media (max-width: 768px) {
  .blog-img-wrapper {
    height: 200px;
  }
}
@media (max-width: 480px) {
  .blog-img-wrapper {
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
