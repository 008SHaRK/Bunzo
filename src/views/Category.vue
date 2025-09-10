<template>
  <div class="page">
    <h1>Category: {{ categoryName }}</h1>
    <p>Seçilmiş kateqoriyaya aid postlar və bölmələr aşağıda göstərilir.</p>

    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const categoryName = computed(() => route.params.name)

// Demo postlar (sonradan API ilə dəyişə bilərsən)
const posts = [
  { id: 1, title: `Post 1 for ${categoryName.value}` },
  { id: 2, title: `Post 2 for ${categoryName.value}` },
  { id: 3, title: `Post 3 for ${categoryName.value}` },
]
</script>

<style scoped>
.page { padding: 2rem; }
</style>
