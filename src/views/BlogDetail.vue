<template>
  <div v-if="post" class="container my-5">
    <!-- Tabs / Breadcrumb -->
    <div class="tabs-container mb-4">
      <div class="tabs">
        <a href="/" class="tab-link">
          Home <span class="dot" v-if="false">●</span>
        </a>
        <a href="/all-posts" class="tab-link">
          Blog <span class="dot" v-if="false">●</span>
        </a>
        <span class="tab-link active">{{ post.title }}</span>
      </div>
    </div>

    <!-- Author, Date, ReadTime -->
    <div
      class="post-meta d-flex justify-content-center gap-3 mb-2 flex-wrap text-center"
    >
      <span>By {{ post.author }}</span>
      <span>📅 {{ post.date }}</span>
      <span>⏱ {{ post.readTime }} min read</span>
    </div>

    <!-- Title -->
    <h1 class="post-title mb-2 text-center">{{ post.title }}</h1>

    <!-- HTML -->
    <div class="tag-container mb-4">
      <span class="post-tag">{{ post.tag }}</span>
    </div>

    <!-- Image -->
    <img
      :src="post.image"
      alt="post image"
      class="img-fluid mb-4 mx-auto d-block"
    />

    <!-- Content paragraphs -->
    <p class="content-normal">
      There are many variations of passages of Lorem Ipsum available, but the
      majority have suffered alteration in some form, by injected humour, or
      randomised words which don’t look even slightly believable. If you are
      going to use a passage of Lorem Ipsum, you need to be sure there isn’t
      anything embarrassing hidden in the middle of text. All the Lorem Ipsum
      generators on the Internet tend to repeat predefined chunks as necessary,
      making this the first true generator on the Internet.
    </p>

    <p class="content-bold">
      Create beautiful designs that will help convert more customers
    </p>

    <p class="content-normal">
      Passages of Lorem Ipsum available, but the majority have suffered
      alteration in some form, by injected humour, or randomised words which
      don’t look even slightly believable. If you are going to use a passage of
      Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden
      in the middle of text.
      <br />
      you need to be sure there isn’t anything embarrassing hidden in the middle
      of text. All the Lorem Ipsum generators on the Internet tend to repeat
      predefined chunks as necessary
      <br />
      you need to be sure there isn’t anything embarrassing hidden in the middle
      of text. All the Lorem Ipsum embarrassing hidden in the middle of text.
      All the Lorem Ipsum generators on the Internet tend to repeat predefined
      <br />
      you need to be sure there isn’t anything embarrassing hidden in the middle
      of text. All the Lorem Ipsum generators on the Internet tend to repeat
      predefined chunks as necessary
    </p>
  </div>

  <div v-else class="container my-5 text-center">
    <h2>Post tapılmadı!</h2>
  </div>
</template>
<script>
import img1 from "@/assets/img/1-2.jpg";
import img2 from "@/assets/img/2-1.jpg";

export default {
  name: "BlogDetail",
  data() {
    return {
      post: null,
      posts: [
        {
          id: 1,
          title: "The best website template layout",
          content: "Full post content here...",
          tag: "Javascript", // <-- bunu əlavə et
          image: img1,
          author: "Uzzal Hossain",
          date: "12 Apr, 2022",
          readTime: 3,
        },
        {
          id: 2,
          title: "Make your store stand out",
          content: "Full post content here...",
          tag: "Magento", // <-- əlavə
          image: img2,
          author: "Uzzal Hossain",
          date: "12 Apr, 2022",
          readTime: 3,
        },
        {
          id: 3,
          title: "Third post",
          content: "Third post full content",
          tag: "Design", // <-- əlavə
          image: img1,
          author: "Uzzal Hossain",
          date: "13 Apr, 2022",
          readTime: 2,
        },
        {
          id: 4,
          title: "Fourth post",
          content: "Fourth post full content",
          tag: "Drupal", // <-- əlavə
          image: img2,
          author: "Uzzal Hossain",
          date: "14 Apr, 2022",
          readTime: 4,
        },
      ],
    };
  },
  created() {
    const postId = parseInt(this.$route.params.id);
    this.post = this.posts.find((p) => p.id === postId);
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
  display: flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
}

.tab-link.active {
  font-weight: 600;
  color: #000;
}

.dot {
  font-size: 10px;
  line-height: 0;
  color: #5f3dc4;
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

/* CSS */
.tag-container {
  display: flex;
  justify-content: center; /* mərkəzləşdirir */
}

.post-tag {
  display: inline-block; /* text boyu qutu */
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
.content-normal,
.content-bold {
  text-align: left; /* paragraphlar sola düzülmüş */
}

.content-normal {
  font-size: 16px;
  line-height: 1.8;
  color: #444;
  margin-bottom: 20px;
}

.content-bold {
  font-size: 18px;
  font-weight: 700;
  color: #222;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .post-title {
    font-size: 26px;
  }

  .content-normal,
  .content-bold {
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
