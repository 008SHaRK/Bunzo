<template>
  <div class="blog-card" @click="goToPost(post.id)">
    <div class="blog-img-wrapper">
      <img :src="post.image" alt="post image" class="blog-img"/>
    </div>
    <div class="blog-content">
      <div class="info">
        <span class="tag">{{ $t(`tags.${post.tag.toLowerCase()}`) }}</span>
        <span class="author">{{ $t('by') }} admin</span>
      </div>
      <h3 class="title">{{ $t(post.title) }}</h3>
      <p class="excerpt">{{ post.excerpt }}</p>
      <div class="meta">
        <span>📅 {{ $t(`dates.${post.dateKey}`) }}</span>
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

/* Image wrapper */
.blog-img-wrapper {
  width: 100%;
  max-width: 530px;
  height: 265px; /* Maksimum ölçü */
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 12px;
  position: relative;
}

.blog-img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Stretch və düzgün nisbət */
  display: block;
  transition: transform 0.4s ease, opacity 0.4s ease;
}

.blog-card:hover .blog-img {
  transform: scale(1.08);
  opacity: 0.95;
}

/* Content */
.blog-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  max-width: 500px;
}

/* Info, tag, title, excerpt, meta */
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
