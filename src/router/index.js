import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServicesView from '../views/ServicesView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import EventsView from '../views/EventsView.vue'
import AdminEventsView from '../views/AdminEventsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Nexa Digital Agency — Your brand deserves better than "basic"' }
  },
  {
    path: '/layanan',
    name: 'services',
    component: ServicesView,
    meta: { title: 'Layanan — Nexa Digital Agency' }
  },
  {
    path: '/portofolio',
    name: 'portfolio',
    component: PortfolioView,
    meta: { title: 'Portofolio — Nexa Digital Agency' }
  },
  {
    path: '/kegiatan',
    alias: '/kalender',
    name: 'events',
    component: EventsView,
    meta: { title: 'Kalender Kegiatan — Nexa Digital Agency' }
  },
  {
    path: '/tentang',
    name: 'about',
    component: AboutView,
    meta: { title: 'Tentang Kami — Nexa Digital Agency' }
  },
  {
    path: '/kontak',
    name: 'contact',
    component: ContactView,
    meta: { title: 'Kontak — Nexa Digital Agency' }
  },
  {
    path: '/admin/kalender',
    alias: '/admin/kegiatan',
    name: 'admin-events',
    component: AdminEventsView,
    meta: { title: 'Pengelola Kalender — Nexa Digital Agency' }
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
  document.title = to.meta.title || 'Nexa Digital Agency — Your brand deserves better than "basic"'
})

export default router
