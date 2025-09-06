import { createRouter, createWebHistory } from 'vue-router'

// Səhifələr
import Home from '../views/Home.vue'
import FAQ from '../views/FAQ.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import Terms from '../views/Terms.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/faq', name: 'FAQ', component: FAQ },
  { path: '/privacy-policy', name: 'PrivacyPolicy', component: PrivacyPolicy },
  { path: '/terms', name: 'Terms', component: Terms },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
