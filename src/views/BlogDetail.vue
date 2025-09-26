<template>
  <div v-if="post" class="container my-5">
    <!-- Tabs / Breadcrumb -->
    <div class="tabs-container mb-4">
      <div class="tabs">
        <router-link to="/" class="tab-link">{{ t("home") }}</router-link>
        <router-link to="/all-posts" class="tab-link">{{
          t("blog")
        }}</router-link>
        <span class="tab-link active">{{ t(post.title) }}</span>
      </div>
    </div>

    <!-- Author, Date, ReadTime -->
    <div
      class="post-meta d-flex justify-content-center gap-3 mb-2 flex-wrap text-center"
    >
      <span>{{ t("by") }} {{ t(post.author) }}</span>
      <span>📅 {{ t(`dates.${post.date}`) }}</span>
      <span>⏱ {{ post.readTime }} {{ t("time") }}</span>
    </div>

    <!-- Title -->
    <h1 class="post-title mb-2 text-center">{{ t(post.title) }}</h1>

    <!-- Tag -->
    <div class="tag-container mb-4">
      <span class="post-tag">{{ t(`tags.${post.tag.toLowerCase()}`) }}</span>
    </div>

    <!-- Image -->
    <img
      :src="post.image"
      alt="post image"
      class="img-fluid mb-4 mx-auto d-block"
    />

    <div class="text-section">
      <p>{{ $t("section1") }}</p>

      <h2 class="font-bold text-xl mt-4 mb-2">
        {{ $t("title") }}
      </h2>

      <p>{{ $t("section2") }}</p>

      <!-- Burada artıq massivlə işləyirik -->
      <ul class="list-disc pl-6 mt-3 space-y-2">
        <li v-for="(item, index) in $tm('list')" :key="index">
          {{ item }}
        </li>
      </ul>
    </div>
    <!-- Share Buttons -->
    <div class="share-container mt-4">
      <span class="share-title">{{ t("share") }}:</span>
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
    <div class="post-content mb-4">
      <ckeditor
        :editor="editor"
        v-model="editorData"
        :disabled="true"
      ></ckeditor>
    </div>
  </div>

  <div v-else class="container my-5 text-center">
    <h2>Post tapılmadı!</h2>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import img1 from "@/assets/img/1-2.jpg";
import img2 from "@/assets/img/2-1.jpg";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-vue";

export default {
  name: "BlogDetail",
  components: { CKEditor },
  setup() {
    const route = useRoute();
    const { t } = useI18n({ useScope: "global" });

    const posts = [
      {
        id: 1,
        title: "title1",
        tag: "javascript",
        image: img1,
        author: "authors",
        date: "apr12",
        readTime: 3,
      },
      {
        id: 2,
        title: "title2",
        tag: "magento",
        image: img2,
        author: "authors",
        date: "apr13",
        readTime: 5,
      },
    ];

    const post = ref(posts.find((p) => p.id === parseInt(route.params.id)));
    const editor = ClassicEditor;

    // CKEditor məzmunu i18n açarına uyğun
    const editorData = computed({
      get: () => (post.value ? t(`${post.value.title}_content`) : ""),
      set: () => {},
    });

    const socials = [
      {
        name: "facebook",
        icon: "fab fa-facebook-f",
        link: "https://facebook.com",
      },
      { name: "twitter", icon: "fab fa-twitter", link: "https://twitter.com" },
      {
        name: "linkedin",
        icon: "fab fa-linkedin-in",
        link: "https://linkedin.com",
      },
      { name: "skype", icon: "fab fa-skype", link: "https://skype.com" },
    ];

    return { post, editor, editorData, socials, t };
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
.post-content {
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
  margin-bottom: 40px;
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

/* CKEditor Post Content */
.post-content .ck-editor__editable_inline {
  min-height: 250px; /* daha rahat oxumaq üçün */
  padding: 15px;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  background: #fafafa;
  font-size: 16px;
  line-height: 1.8;
  color: #333;
}

/* toolbar görünməsin (read-only üçün) */
.post-content .ck-editor__top {
  display: none;
}

/* scroll lazım olsa */
.post-content .ck-editor__editable_inline {
  overflow-y: auto;
  max-height: 500px;
}

/* paragraph spacing */
.post-content .ck-content p {
  margin-bottom: 16px;
}

/* headings */
.post-content .ck-content h1,
.post-content .ck-content h2,
.post-content .ck-content h3 {
  margin-top: 20px;
  margin-bottom: 12px;
  font-weight: 700;
  color: #222;
}

/* links */
.post-content .ck-content a {
  color: #1a73e8;
  text-decoration: underline;
}

/* blockquote */
.post-content .ck-content blockquote {
  border-left: 3px solid #ccc;
  padding-left: 12px;
  color: #666;
  font-style: italic;
  margin: 12px 0;
}

@media (max-width: 768px) {
  .post-title {
    font-size: 26px;
  }
  .post-content {
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
