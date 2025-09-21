<template>
  <div class="comment-box">
    <h4>{{ comments.length }} Comments</h4>
    <hr />

    <!-- Editor -->
    <div class="comment-editor">
      <div class="avatar">G</div>
      <div class="editor-area">
        <textarea
          v-model="comment"
          placeholder="Start the discussion..."
          @focus="expanded = true"
        ></textarea>

        <transition name="fade">
          <div v-if="expanded" class="editor-toolbar">
            <div class="toolbar-left">
              <button title="Bold">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M6 4h8a4 4 0 0 1 0 8H6V4zm0 10h9a4 4 0 0 1 0 8H6v-8z"
                  />
                </svg>
              </button>
              <button title="Italic">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M10 4h8v2h-3.5l-3 12H15v2h-8v-2h3.5l3-12H10V4z" />
                </svg>
              </button>
              <button title="Underline">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M5 4v8a7 7 0 0 0 14 0V4h-2v8a5 5 0 0 1-10 0V4H5zm-3 18v-2h20v2H2z"
                  />
                </svg>
              </button>
              <button title="Link">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M3.9 12a5 5 0 0 1 0-7.07l2.83-2.83a5 5 0 0 1 7.07 0l1.41 1.41-1.42 1.42-1.41-1.41a3 3 0 0 0-4.24 0L5.31 6.34a3 3 0 0 0 0 4.24l1.41 1.41-1.42 1.42L3.9 12zm16.2 0l-2.83 2.83a5 5 0 0 1-7.07 0l-1.41-1.41 1.42-1.42 1.41 1.41a3 3 0 0 0 4.24 0l2.83-2.83a3 3 0 0 0 0-4.24l-1.41-1.41 1.42-1.42 1.41 1.41a5 5 0 0 1 0 7.07z"
                  />
                </svg>
              </button>
              <button title="GIF">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path
                    d="M2 4h20v16H2V4zm2 2v12h16V6H4zm2 2h4v2H6V8zm0 4h8v2H6v-2zm0 4h6v2H6v-2z"
                  />
                </svg>
              </button>
            </div>
            <button class="comment-btn">Comment</button>
          </div>
        </transition>
      </div>
    </div>

    <!-- Login bölməsi -->
    <div class="login-section">
      <p>LOG IN WITH</p>
      <div class="social-icons">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2504/2504896.png"
          alt="disqus"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
          alt="facebook"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
          alt="x"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
          alt="google"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/732/732221.png"
          alt="microsoft"
        />
        <img
          src="https://cdn-icons-png.flaticon.com/512/179/179309.png"
          alt="apple"
        />
      </div>

      <input
        type="text"
        placeholder="Name"
        class="name-input"
        @focus="showExtraInputs = true"
      />

      <transition name="slide-fade">
        <div v-if="showExtraInputs" class="extra-inputs">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <!-- Paragraph əvvəl -->
          <p class="disqus-note">
            This comment platform is hosted by Disqus, Inc. I authorize Disqus
            and its affiliates to:
            <br />• Use, sell, and share my information to enable me to use its
            comment services and for marketing purposes. <br />• Contact me or
            enable others to contact me by email with offers for goods or
            services. <br />• Process any sensitive personal information that I
            submit in a comment.
              <!-- Checkbox-lar paragraph altına -->
          <div class="checkbox-group">
            <label>
              <input type="checkbox" v-model="acknowledge18" />
              Acknowledge I am 18 or older
            </label>
            <label>
              <input type="checkbox" v-model="postAsGuest" />
              I'd rather post as a guest
            </label>
          </div>
          </p>

        

          <!-- Comment button paragraph ilə eyni ölçüdə -->
          <button class="comment-btn">Comment</button>
        </div>
      </transition>
    </div>

    <!-- Footer -->
    <div class="comment-footer">
      <div class="left">
        <span>♡ 2</span>
        <span>• Share</span>
      </div>
      <div class="sort">
        <span
          :class="{ active: sortType === 'best' }"
          @click="sortType = 'best'"
          >Best</span
        >
        <span
          :class="{ active: sortType === 'newest' }"
          @click="sortType = 'newest'"
          >Newest</span
        >
        <span
          :class="{ active: sortType === 'oldest' }"
          @click="sortType = 'oldest'"
          >Oldest</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommentBox",
  data() {
    return {
      expanded: false,
      comment: "",
      showExtraInputs: false,
      sortType: "oldest",
      comments: [],
      acknowledge18: false,
      postAsGuest: false,
    };
  },
};
</script>

<style scoped>
.comment-box {
  font-family: "Inter", Arial, sans-serif;
  color: #333;
  max-width: 800px;
  margin: auto;
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

h4 {
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 18px;
}

hr {
  border: none;
  border-top: 1px solid #eee;
  margin-bottom: 15px;
}

.comment-editor {
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
}

.comment-editor .avatar {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: #666;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
}

.editor-area {
  flex: 1;
}

.comment-editor textarea {
  width: 100%;
  min-height: 70px;
  border: 1px solid #d8d8d8;
  border-radius: 10px;
  padding: 12px 14px;
  resize: none;
  font-size: 15px;
  outline: none;
  transition: all 0.2s;
}

.comment-editor textarea:focus {
  border-color: #444;
}

.editor-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -6px;
  padding: 6px 10px;
  border: 1px solid #e0e0e0;
  border-top: none;
  border-radius: 0 0 10px 10px;
  background: #f9f9f9;
}

.toolbar-left button {
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 6px;
  cursor: pointer;
  margin-right: 6px;
  font-size: 14px;
  padding: 2px 6px;
  transition: 0.2s;
}

.toolbar-left button:hover {
  background: #eee;
}

.toolbar-left svg {
  vertical-align: middle;
  fill: #333;
}

.comment-btn {
  background: #444;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 6px 14px;
  cursor: pointer;
  font-size: 14px;
  transition: 0.2s;
  margin-top: 10px;
}

.comment-btn:hover {
  background: #222;
}

.login-section {
  margin-top: 20px;
}

.login-section p {
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 8px;
}

.social-icons {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.social-icons img {
  width: 28px;
  height: 28px;
  margin-right: 8px;
  cursor: pointer;
  filter: grayscale(100%);
  transition: 0.2s;
}

.social-icons img:hover {
  filter: none;
  transform: scale(1.1);
}

.name-input,
.extra-inputs input {
  display: block;
  width: 100%;
  padding: 8px;
  border: 1px solid #d8d8d8;
  border-radius: 6px;
  margin-bottom: 8px;
  font-size: 14px;
  transition: border 0.2s;
}

.name-input:focus,
.extra-inputs input:focus {
  border-color: #444;
  outline: none;
}

.disqus-note {
  font-size: 14px;
  color: #666;
  background: #f5f5f5;
  padding: 10px;
  border-radius: 6px;
  line-height: 1.4;
  margin-top: 8px;
}

.checkbox-group {
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.checkbox-group label {
  font-size: 14px;
  color: #333;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  position: relative;
}

.checkbox-group input[type="checkbox"] {
  -webkit-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid #ccc;
  border-radius: 4px;
  background: #eee;
  cursor: pointer;
  position: relative;
  transition: all 0.2s;
}

.checkbox-group input[type="checkbox"]:checked {
  background: #444;
  border-color: #444;
}

.checkbox-group input[type="checkbox"]:checked::after {
  content: "✔";
  position: absolute;
  top: -1px;
  left: 2px;
  color: #fff;
  font-size: 14px;
}

.comment-footer {
  margin-top: 25px;
  font-size: 14px;
  color: #666;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.comment-footer .sort span {
  margin-left: 10px;
  cursor: pointer;
  padding-bottom: 2px;
  transition: 0.2s;
}

.comment-footer .sort span:hover {
  color: #000;
}

.comment-footer .sort .active {
  font-weight: bold;
  border-bottom: 2px solid #000;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
