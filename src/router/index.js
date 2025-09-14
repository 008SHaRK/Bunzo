import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import FAQ from '../views/FAQ.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import Terms from '../views/Terms.vue'
import AllPosts from '../views/AllPosts.vue'
import CategoryPage from "@/views/CategoryPage.vue";
import Categories from '../views/Categories.vue' // Statik categories səhifəsi
import BlogDetail from '../views/BlogDetail.vue' // 🔹 Yeni əlavə


const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/faq', component: FAQ },
  { path: '/privacy', component: PrivacyPolicy },
  { path: '/terms', component: Terms },
  { path: '/all-posts', component: AllPosts },

  // Statik categories page
  { path: '/categories', component: Categories, name: 'Categories' },

  // Dinamik category page
  {
    path: '/category/:name',
    component: CategoryPage,
    name: 'CategoryPage',
    props: true,
  },
    // 🔹 Dinamik blog detail səhifəsi
  {
    path: '/post/:id',
    name: 'BlogDetail',
    component: BlogDetail,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
