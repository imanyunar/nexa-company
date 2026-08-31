import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServicesView from '../views/ServicesView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Nexa — Web Profile Agency' }
  },
  {
    path: '/layanan',
    name: 'services',
    component: ServicesView,
    meta: { title: 'Layanan — Nexa' }
  },
  {
    path: '/portofolio',
    name: 'portfolio',
    component: PortfolioView,
    meta: { title: 'Portofolio — Nexa' }
  },
  {
    path: '/tentang',
    name: 'about',
    component: AboutView,
    meta: { title: 'Tentang Kami — Nexa' }
  },
  {
    path: '/kontak',
    name: 'contact',
    component: ContactView,
    meta: { title: 'Kontak — Nexa' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

router.afterEach((to) => {
  document.title = to.meta.title || 'Nexa — Web Profile Agency'
})

export default router
