<template>
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
import { useCategoryStore } from "@/stores/useCategoryStore";
import { usePostStore } from "@/stores/usePostStore";
import SidebarCategory from "@/components/SidebarCategory.vue";
import BlogCard from "@/components/BlogCard.vue";

export default {
  name: "BlogList",
  components: {
    SidebarCategory,
    BlogCard,
  },
  setup() {
    const categoryStore = useCategoryStore();
    const postStore = usePostStore();


    const categories = categoryStore.getCategories();
    const posts = postStore.getPosts();

    return { categories, posts };
  },
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
