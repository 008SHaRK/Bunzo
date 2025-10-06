<template>
  <div v-if="post" class="blog-detail container my-5">
    <!-- Breadcrumb / Tabs -->
    <div class="tabs-container mb-4">
      <div class="tabs">
        <router-link to="/" class="tab-link">{{ t("home") }}</router-link>
        <router-link to="/all-posts" class="tab-link">{{ t("blog") }}</router-link>
        <span class="tab-link active">{{ t(post.title) }}</span>
      </div>
    </div>

    <!-- Author, Date, ReadTime -->
    <div class="post-meta d-flex justify-content-center gap-3 mb-2 flex-wrap text-center">
      <span>{{ t("by") }} <strong>{{ post.author }}</strong></span>
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
    <img :src="post.image" alt="post image" class="img-fluid mb-4 mx-auto d-block" />

    <!-- Text & Intro Section -->
    <div class="text-section intro-text">
      <p>{{ $t("section1") }}</p>

      <h2 class="section-title font-bold text-xl mt-4 mb-2">{{ $t("title") }}</h2>

      <p>{{ $t("section2") }}</p>

      <ul class="bullet-list list-disc pl-6 mt-3 space-y-2">
        <li v-for="(item, index) in $tm('list')" :key="index">{{ item }}</li>
      </ul>
    </div>

    <!-- Share Buttons -->
    <div class="share-container mt-4 share-row">
      <span class="share-title share-left">{{ t("share") }}:</span>
      <div class="share-buttons share-right">
        <a v-for="(item, index) in socials" :key="index" :href="item.link" target="_blank" rel="noopener noreferrer" class="share-btn">
          <i :class="item.icon"></i>
        </a>
      </div>
    </div>

    <!-- CKEditor -->
    <div class="post-content mb-4">
      <ckeditor :editor="editor" v-model="editorData" :disabled="true"></ckeditor>
    </div>

<!-- Comments Section -->
<section class="comments">
  <!-- Başlıq -->
  <h3 class="comments-title">
    {{ $t('comments') }}
    <span class="count">({{ commentsStore.comments.length }})</span>
  </h3>

  <!-- Yüklənir göstəricisi -->
  <div v-if="commentsStore.loading" class="muted">{{ $t('loading') }}</div>

  <!-- Şərhlər listi -->
  <div v-else class="comments-list">
    <div
      v-for="comment in commentsStore.comments"
      :key="comment.id"
      class="comment-card"
    >
      <div class="comment-left">
        <div class="avatar">{{ comment.author.charAt(0).toUpperCase() }}</div>
      </div>
      <div class="comment-body">
        <div class="comment-head">
          <strong class="c-author">{{ comment.author }}</strong>
          <button
            class="delete-btn"
            @click="deleteComment(comment.id)"
            :title="$t('delete')"
          >
            {{ $t('delete') }}
          </button>
        </div>
        <p class="c-text">{{ comment.body }}</p>
      </div>
    </div>

    <!-- Hələ şərh yoxdur -->
    <div v-if="!commentsStore.comments.length" class="muted">
      {{ $t('noCommentsYet') }}
    </div>
  </div>

  <!-- Yeni şərh əlavə et -->
  <form class="comment-form" @submit.prevent="addNewComment">
    <div class="form-row">
      <input
        v-model="newAuthor"
        type="text"
        :placeholder="$t('name')"
        required
      />
    </div>
    <div class="form-row">
      <textarea
        v-model="newComment"
        rows="4"
        :placeholder="$t('startDiscussion')"
        required
      ></textarea>
    </div>
    <div class="form-row actions">
      <button type="submit" class="btn-primary">{{ $t('sendMessage') }}</button>
      <button type="button" class="btn-ghost" @click="resetForm">{{ $t('reset') }}</button>
    </div>
  </form>
</section>

  </div>

  <div v-else class="not-found container my-5 text-center">
    <h2>Post tapılmadı!</h2>
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-vue";
import { usePostStore } from "@/stores/postStore.js";
import { useCommentsStore } from "@/stores/commentsStore.js";

export default {
  name: "BlogDetail",
  components: { CKEditor },
  setup() {
    const route = useRoute();
    const { t } = useI18n({ useScope: "global" });

    const postStore = usePostStore();
    const commentsStore = useCommentsStore();

    const post = ref(null);

    const editor = ClassicEditor;
    const editorData = computed({
      get: () => (post.value ? t(`${post.value.title}_content`) : ""),
      set: () => {},
    });

    const socials = [
      { name: "facebook", icon: "fab fa-facebook-f", link: "https://facebook.com" },
      { name: "twitter", icon: "fab fa-twitter", link: "https://twitter.com" },
      { name: "linkedin", icon: "fab fa-linkedin-in", link: "https://linkedin.com" },
      { name: "skype", icon: "fab fa-skype", link: "https://skype.com" },
    ];

    const newAuthor = ref("");
    const newComment = ref("");

    const addNewComment = () => {
      if (!post.value) return;
      if (!newAuthor.value.trim() || !newComment.value.trim()) return;

      const comment = {
        postId: post.value.id,
        author: newAuthor.value.trim(),
        body: newComment.value.trim(),
      };
      commentsStore.addComment(comment);
      newAuthor.value = "";
      newComment.value = "";
    };

    const deleteComment = (id) => {
      commentsStore.deleteComment(id);
    };

    const resetForm = () => {
      newAuthor.value = "";
      newComment.value = "";
    };

    onMounted(async () => {
      const id = parseInt(route.params.id);
      post.value = await postStore.getPost(id);
      if (post.value) commentsStore.fetchCommentsByPostId(id);
    });

    return {
      post,
      editor,
      editorData,
      socials,
      commentsStore,
      newAuthor,
      newComment,
      addNewComment,
      deleteComment,
      resetForm,
      t,
    };
  },
};
</script>
<style scoped>

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
.post-meta span {
  font-size: 14px;
  color: #777;
}
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
img {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 25px;
}
.post-content {
  font-size: 16px;
  line-height: 1.8;
  color: #444;
  margin-bottom: 20px;
}
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
.post-content .ck-editor__editable_inline {
  min-height: 250px;
  padding: 15px;
  border-radius: 12px;
  border: 1px solid #e0e0e0;
  background: #fafafa;
  font-size: 16px;
  line-height: 1.8;
  color: #333;
  overflow-y: auto;
  max-height: 500px;
}
.post-content .ck-editor__top {
  display: none;
}
.post-content .ck-content p {
  margin-bottom: 16px;
}
.post-content .ck-content h1,
.post-content .ck-content h2,
.post-content .ck-content h3 {
  margin-top: 20px;
  margin-bottom: 12px;
  font-weight: 700;
  color: #222;
}
.post-content .ck-content a {
  color: #1a73e8;
  text-decoration: underline;
}
.post-content .ck-content blockquote {
  border-left: 3px solid #ccc;
  padding-left: 12px;
  color: #666;
  font-style: italic;
  margin: 12px 0;
}
/* Comments */
.comments { margin-top: 10px; }
.comments-title {
  margin: 0 0 12px;
  font-size: 18px;
  color: #111827;
}
.count { color: #6b7280; font-weight: 500; margin-left: 6px; }

/* Individual comment */
.comment-card {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  background: #ffffff;
  border: 1px solid #f1f5f9;
  padding: 12px;
  border-radius: 8px;
  margin-bottom: 12px;
}
.avatar {
  width: 44px;
  height: 44px;
  border-radius: 8px;
  background: linear-gradient(135deg,#eef2ff,#e8f7ff);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0f172a;
  font-weight: 700;
  font-size: 16px;
}
.comment-body { flex: 1; }
.comment-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}
.c-author { color: #0f172a; }
.c-text { margin: 8px 0 0; color: #374151; line-height: 1.6; }

/* Delete button */
.delete-btn {
  border: none;
  background: transparent;
  color: #ef4444;
  cursor: pointer;
  font-size: 13px;
  padding: 6px 8px;
  border-radius: 6px;
  transition: background .12s ease;
}
.delete-btn:hover { background: rgba(239,68,68,0.06); }

/* Comment form */
.comment-form {
  margin-top: 14px;
  background: #fbfbfd;
  border: 1px solid #eef2f7;
  padding: 14px;
  border-radius: 10px;
}
.comment-form .form-row { margin-bottom: 10px; }
.comment-form input,
.comment-form textarea {
  width: 100%;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #e6e9ef;
  font-size: 14px;
  color: #111827;
  background: #fff;
  box-sizing: border-box;
}
.actions {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  align-items: center;
}
.btn-primary {
  background: #0f172a;
  color: #fff;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
}
.btn-ghost {
  background: transparent;
  border: 1px solid #e6e9ef;
  color: #111827;
  padding: 8px 14px;
  border-radius: 8px;
  cursor: pointer;
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
