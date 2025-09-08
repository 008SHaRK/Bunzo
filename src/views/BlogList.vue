l<template>
  <div class="container blog-layout">
    <div class="row">
      <!-- Sol tərəf: Kateqoriyalar -->
      <div class="col-md-4">
        <SidebarCategory :categories="categories" />
      </div>

      <!-- Sağ tərəf: Yazılar -->
      <div class="col-md-8">
        <div class="post-list">
          <BlogCard 
            v-for="(post, index) in posts" 
            :key="index" 
            :post="post" 
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarCategory from "@/components/SidebarCategory.vue";
import BlogCard from "@/components/BlogCard.vue";

export default {
  name: "BlogList",
  components: {
    SidebarCategory,
    BlogCard
  },
  data() {
    return {
      categories: [
        { title: "Design", image: "/img/design.jpg", link: "/category/design" },
        { title: "Drupal", image: "/img/drupal.jpg", link: "/category/drupal" },
        { title: "Javascript", image: "/img/javascript.jpg", link: "/category/javascript" },
        { title: "Joomla", image: "/img/joomla.jpg", link: "/category/joomla" }
      ],
      posts: [
        {
          title: "The best website template layout for your bus...",
          excerpt: "You need to be sure there isn’t anything embarrassing hidden in the middle of text",
          image: "/img/post1.jpg",
          tag: "Javascript",
          author: "Uzzal Hossain",
          date: "12 Apr, 2022",
          readTime: 3,
          link: "/post/1"
        },
        {
          title: "Make your store stand out from the others by ...",
          excerpt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry has been",
          image: "/img/post2.jpg",
          tag: "Magento",
          author: "Uzzal Hossain",
          date: "12 Apr, 2022",
          readTime: 3,
          link: "/post/2"
        }
      ]
    };
  }
};
</script>

<style scoped>
.blog-layout {
  margin-top: 40px;
}

.post-list {
  display: flex;
  flex-direction: column;
  gap: 25px;
}
</style>
