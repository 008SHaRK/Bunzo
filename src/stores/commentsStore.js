import { defineStore } from "pinia";
import comments from "@/data/comments.js";

export const useCommentsStore = defineStore("comments", {
  state: () => ({
    comments: [],
    loading: false,
    error: null,
  }),

  actions: {
    fetchCommentsByPostId(postId) {
      this.loading = true;
      try {
        this.comments = comments.filter((c) => c.postId === parseInt(postId));
        this.error = null;
      } catch (err) {
        this.error = "Şərhlər yüklənərkən xəta baş verdi.";
      } finally {
        this.loading = false;
      }
    },

    addComment(newComment) {
      if (!newComment.postId || !newComment.author || !newComment.body) return;

      newComment.id = Date.now();
      comments.push(newComment);
      this.comments.push(newComment);
    },

    deleteComment(id) {
      this.comments = this.comments.filter((c) => c.id !== id);
    },
  },
});
