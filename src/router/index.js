import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import FAQ from '../views/FAQ.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import Terms from '../views/Terms.vue'
import AllPosts from '../views/AllPosts.vue'
import Category from '../views/Category.vue' // Yeni

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/faq', component: FAQ },
  { path: '/privacy', component: PrivacyPolicy },
  { path: '/terms', component: Terms },
  { path: '/all-posts', component: AllPosts },
  { path: '/categories/:name', component: Category, name: 'category' }, // Dinamik route
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
