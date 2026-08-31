<template>
  <header class="sticky top-0 z-50 backdrop-blur-md border-b b-subtle text-white" style="background-color: rgba(11, 14, 27, 0.95);">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-20 flex items-center justify-between">
      
      <router-link to="/" class="flex items-center gap-2.5 sm:gap-3.5 group focus:outline-none" aria-label="Nexa Digital Agency Beranda">
        <img src="/assets/logo.png" alt="Nexa Logo" class="w-8 h-8 sm:w-9 sm:h-9 object-contain transition-transform group-hover:scale-105" />
        <div class="flex flex-col">
          <span class="font-display font-light text-lg sm:text-xl tracking-tight text-white leading-none">NEXA</span>
          <span class="text-[8px] sm:text-[9px] tracking-widest t-cyan uppercase font-mono font-semibold mt-0.5">Be Seen Be Chosen</span>
        </div>
      </router-link>

      <nav class="hidden md:flex items-center gap-8 text-sm font-medium">
        <router-link to="/" class="transition-colors pb-1 border-b-2" :class="$route.path === '/' ? 'text-cyan border-cyan font-semibold' : 't-muted hover:text-white border-transparent'">Beranda</router-link>
        <router-link to="/layanan" class="transition-colors pb-1 border-b-2" :class="$route.path === '/layanan' ? 'text-cyan border-cyan font-semibold' : 't-muted hover:text-white border-transparent'">Layanan</router-link>
        <router-link to="/portofolio" class="transition-colors pb-1 border-b-2" :class="$route.path === '/portofolio' ? 'text-cyan border-cyan font-semibold' : 't-muted hover:text-white border-transparent'">Portofolio</router-link>
        <router-link to="/tentang" class="transition-colors pb-1 border-b-2" :class="$route.path === '/tentang' ? 'text-cyan border-cyan font-semibold' : 't-muted hover:text-white border-transparent'">Tentang Kami</router-link>
        <router-link to="/kontak" class="transition-colors pb-1 border-b-2" :class="$route.path === '/kontak' ? 'text-cyan border-cyan font-semibold' : 't-muted hover:text-white border-transparent'">Kontak</router-link>
      </nav>

      <div class="hidden md:flex items-center">
        <router-link to="/kontak" class="btn-pill-primary text-xs font-bold uppercase tracking-wider py-2.5 px-6">Konsultasi</router-link>
      </div>

      <button @click="toggleMenu" class="md:hidden p-2 text-white rounded-lg active:bg-white/10 transition-colors" :aria-expanded="isOpen" aria-label="Toggle Menu">
        <svg v-if="!isOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
    </div>

    <!-- Mobile Menu with Transition -->
    <transition name="mobile-menu">
      <div v-if="isOpen" class="md:hidden bg-elevated border-b b-subtle px-4 sm:px-6 py-5 space-y-1">
        <router-link @click="closeMenu" to="/" class="block text-base font-medium py-3 px-3 rounded-lg transition-colors" :class="$route.path === '/' ? 'text-cyan bg-white/5 font-semibold' : 'text-white hover:bg-white/5'">Beranda</router-link>
        <router-link @click="closeMenu" to="/layanan" class="block text-base font-medium py-3 px-3 rounded-lg transition-colors" :class="$route.path === '/layanan' ? 'text-cyan bg-white/5 font-semibold' : 'text-white hover:bg-white/5'">Layanan</router-link>
        <router-link @click="closeMenu" to="/portofolio" class="block text-base font-medium py-3 px-3 rounded-lg transition-colors" :class="$route.path === '/portofolio' ? 'text-cyan bg-white/5 font-semibold' : 'text-white hover:bg-white/5'">Portofolio</router-link>
        <router-link @click="closeMenu" to="/tentang" class="block text-base font-medium py-3 px-3 rounded-lg transition-colors" :class="$route.path === '/tentang' ? 'text-cyan bg-white/5 font-semibold' : 'text-white hover:bg-white/5'">Tentang Kami</router-link>
        <router-link @click="closeMenu" to="/kontak" class="block text-base font-medium py-3 px-3 rounded-lg transition-colors" :class="$route.path === '/kontak' ? 'text-cyan bg-white/5 font-semibold' : 'text-white hover:bg-white/5'">Kontak</router-link>
        <div class="pt-3">
          <router-link @click="closeMenu" to="/kontak" class="btn-pill-primary w-full text-center text-xs font-bold uppercase tracking-wider py-3.5">Konsultasi Gratis</router-link>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, watch, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'

const isOpen = ref(false)
const route = useRoute()

function toggleMenu() {
  isOpen.value = !isOpen.value
  document.body.style.overflow = isOpen.value ? 'hidden' : ''
}

function closeMenu() {
  isOpen.value = false
  document.body.style.overflow = ''
}

// Auto-close on route change
watch(() => route.path, () => closeMenu())

// Cleanup on unmount
onBeforeUnmount(() => { document.body.style.overflow = '' })
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.25s ease;
  transform-origin: top;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>

