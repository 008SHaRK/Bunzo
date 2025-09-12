<template>
  <div v-if="post" class="container my-5 text-center">
    <!-- Author, Date, ReadTime -->
    <div class="post-meta d-flex justify-content-center gap-3 mb-2 flex-wrap">
      <span>By {{ post.author }}</span>
      <span>📅 {{ post.date }}</span>
      <span>⏱ {{ post.readTime }} min read</span>
    </div>

    <!-- Title -->
    <h1 class="post-title mb-2">{{ post.title }}</h1>

    <!-- Tag -->
    <span class="post-tag mb-4">{{ post.tag }}</span>

    <!-- Image -->
    <img :src="post.image" alt="post image" class="img-fluid mb-4 mx-auto d-block" />

    <!-- Content paragraphs (sola düzülmüş) -->
    <p class="content-normal">
      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.
    </p>

    <p class="content-bold">
      Create beautiful designs that will help convert more customers
    </p>

    <p class="content-normal">
      Passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text.
      <br />
      you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary
      <br />
      you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined
      <br />
      you need to be sure there isn’t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary
    </p>
  </div>

  <div v-else class="container my-5 text-center">
    <h2>Post tapılmadı!</h2>
  </div>
</template>

<script>
import img1 from "@/assets/img/1-2.jpg";

export default {
  name: "BlogDetail",
  data() {
    return {
      post: {
        id: 1,
        title: "The best website template layout",
        tag: "Javascript",
        image: img1,
        author: "Uzzal Hossain",
        date: "12 Apr, 2022",
        readTime: 3,
      },
    };
  },
};
</script>

<style scoped>
.post-meta span {
  font-size: 14px;
  color: #777;
}

.post-title {
  font-weight: 800;
  font-size: 32px;
  color: #222;
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

.content-normal {
  font-size: 16px;
  line-height: 1.8;
  color: #444;
  margin-bottom: 20px;
  text-align: left; /* normal sola */
}

.content-bold {
  font-size: 18px;
  font-weight: 700;
  color: #222;
  margin-bottom: 20px;
  text-align: left; /* bold paragraph sola */
}

@media (max-width: 768px) {
  .post-title {
    font-size: 26px;
  }

  .content-normal,
  .content-bold {
    font-size: 15px;
  }
}
</style>
