<template>
  <div v-if="post" class="container my-5">
    <!-- Tabs / Breadcrumb -->
    <div class="tabs-container mb-4">
      <div class="tabs">
        <router-link to="/" class="tab-link">{{ $t("home") }}</router-link>
        <router-link to="/all-posts" class="tab-link">{{ $t("blog") }}</router-link>
        <span class="tab-link active">{{ $t(post.title) }}</span>
      </div>
    </div>

    <!-- Author, Date, ReadTime -->
    <div
      class="post-meta d-flex justify-content-center gap-3 mb-2 flex-wrap text-center"
    >
      <span>{{ $t("by") }} {{ $t(post.author) }}</span>
      <span>📅 {{ $t(`dates.${post.date}`) }}</span>
      <span>⏱ {{ post.readTime }} {{ $t("time") }}</span>
    </div>

    <!-- Title -->
    <h1 class="post-title mb-2 text-center">{{ $t(post.title) }}</h1>

    <!-- Tag -->
    <div class="tag-container mb-4">
      <span class="post-tag">{{ $t(`tags.${post.tag.toLowerCase()}`) }}</span>
    </div>

    <!-- Image -->
    <img
      :src="post.image"
      alt="post image"
      class="img-fluid mb-4 mx-auto d-block"
    />

    <!-- Content -->
    <div class="post-content">
      <p v-html="post.content"></p>
    </div>

    <!-- Share Buttons -->
    <div class="share-container mt-4">
      <span class="share-title">{{ $t("share") }}:</span>
      <div class="share-buttons">
        <a
          v-for="(item, index) in socials"
          :key="index"
          :href="item.link"
          target="_blank"
          class="share-btn"
        >
          <i :class="item.icon"></i>
        </a>
      </div>
    </div>

    <!-- CKEditor -->
    <CommentBox />
  </div>

  <div v-else class="container my-5 text-center">
    <h2>Post tapılmadı!</h2>
  </div>
</template>

<script>
import img1 from "@/assets/img/1-2.jpg";
import img2 from "@/assets/img/2-1.jpg";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-vue";
import CommentBox from "@/components/CommentBox.vue";

export default {
  name: "BlogDetail",
  components: { CKEditor, CommentBox },
  data() {
    return {
      post: null,
      editor: ClassicEditor,
      editorData: "",

      posts: [
        {
          id: 1,
          title: "title1", // i18n açarı
          content: "<p>Full post content here...</p>",
          tag: "javascript",
          image: img1,
          author: "authors", // i18n açarı
          date: "apr12", // i18n dates içində açar
          readTime: 3,
        },
        {
          id: 2,
          title: "title2",
          content: "<p>Full post content here...</p>",
          tag: "magento",
          image: img2,
          author: "authors",
          date: "apr13",
          readTime: 5,
        },
      ],

      socials: [
        {
          name: "facebook",
          icon: "fab fa-facebook-f",
          link: "https://facebook.com",
        },
        {
          name: "twitter",
          icon: "fab fa-twitter",
          link: "https://twitter.com",
        },
        {
          name: "linkedin",
          icon: "fab fa-linkedin-in",
          link: "https://linkedin.com",
        },
        { name: "skype", icon: "fab fa-skype", link: "https://skype.com" },
      ],
    };
  },
  created() {
    const postId = parseInt(this.$route.params.id);
    this.post = this.posts.find((p) => p.id === postId);
    if (this.post) this.editorData = this.post.content;
  },
};
</script>

<style scoped>
/* Tabs */
.tabs-container {
  display: flex;
  justify-content: center;
  background: #f4f2fb;
  padding: 10px 20px;
  border-radius: 8px;
}
.tabs {
  display: flex;
  gap: 20px;
}
.tab-link {
  cursor: pointer;
  color: #555;
  font-size: 16px;
  transition: color 0.3s;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;
}
.tab-link.active {
  font-weight: 600;
  color: #000;
}

/* Post Meta */
.post-meta span {
  font-size: 14px;
  color: #777;
}

/* Title & Tag */
.post-title {
  font-weight: 800;
  font-size: 32px;
  color: #222;
}
.tag-container {
  display: flex;
  justify-content: center;
}
.post-tag {
  display: inline-block;
  background: #f0f0f0;
  padding: 4px 10px;
  border-radius: 6px;
  font-size: 14px;
  color: #333;
}

/* Image */
img {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 25px;
}

/* Content */
.post-content p {
  font-size: 16px;
  line-height: 1.8;
  color: #444;
  margin-bottom: 20px;
}

/* Share */
.share-container {
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 15px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Arial, sans-serif;
}
.share-title {
  font-weight: 600;
  color: #333;
}
.share-buttons {
  display: flex;
  gap: 8px;
}
.share-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: #f7f7f7;
  border-radius: 6px;
  color: #111;
  font-size: 16px;
  text-decoration: none;
  transition: background 0.2s ease;
}
.share-btn:hover {
  background: #e0e0e0;
}

@media (max-width: 768px) {
  .post-title {
    font-size: 26px;
  }
  .post-content p {
    font-size: 15px;
  }
  .tabs-container {
    padding: 8px 12px;
  }
  .tab-link {
    font-size: 14px;
  }
}
</style>
