<template>
  <header class="sticky top-0 z-50 backdrop-blur-xl border-b border-[rgba(241,241,239,0.12)] text-white" style="background-color: rgba(0, 0, 0, 0.88);">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 h-[72px] flex items-center justify-between">
      
      <!-- Brand Logo -->
      <router-link to="/" class="flex items-center gap-3 group focus:outline-none" aria-label="Nexa Digital Agency Beranda">
        <div class="relative flex items-center justify-center">
          <img src="/assets/logo.png" alt="Nexa Logo" class="w-8 h-8 sm:w-9 sm:h-9 object-contain transition-transform duration-300 group-hover:scale-105" />
          <span class="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-primary ring-2 ring-black"></span>
        </div>
        <div class="flex flex-col">
          <span class="font-display font-medium text-lg sm:text-xl tracking-tight text-white leading-none">NEXA</span>
          <span class="text-[9px] tracking-[0.2em] text-[#999999] group-hover:text-primary transition-colors uppercase font-mono font-medium mt-0.5">Be Seen Be Chosen</span>
        </div>
      </router-link>

      <!-- Desktop Nav Links -->
      <nav class="hidden md:flex items-center gap-8 text-[14px] font-medium">
        <router-link 
          to="/" 
          class="transition-colors py-2 relative" 
          :class="$route.path === '/' ? 'text-white font-semibold' : 'text-[#999999] hover:text-white'"
        >
          Beranda
          <span v-if="$route.path === '/'" class="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"></span>
        </router-link>
        <router-link 
          to="/layanan" 
          class="transition-colors py-2 relative" 
          :class="$route.path === '/layanan' ? 'text-white font-semibold' : 'text-[#999999] hover:text-white'"
        >
          Layanan
          <span v-if="$route.path === '/layanan'" class="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"></span>
        </router-link>
        <router-link 
          to="/portofolio" 
          class="transition-colors py-2 relative" 
          :class="$route.path === '/portofolio' ? 'text-white font-semibold' : 'text-[#999999] hover:text-white'"
        >
          Portofolio
          <span v-if="$route.path === '/portofolio'" class="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"></span>
        </router-link>
        <router-link 
          to="/tentang" 
          class="transition-colors py-2 relative" 
          :class="$route.path === '/tentang' ? 'text-white font-semibold' : 'text-[#999999] hover:text-white'"
        >
          Tentang Kami
          <span v-if="$route.path === '/tentang'" class="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"></span>
        </router-link>
        <router-link 
          to="/kontak" 
          class="transition-colors py-2 relative" 
          :class="$route.path === '/kontak' ? 'text-white font-semibold' : 'text-[#999999] hover:text-white'"
        >
          Kontak
          <span v-if="$route.path === '/kontak'" class="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"></span>
        </router-link>
      </nav>

      <!-- Right Action CTA -->
      <div class="hidden md:flex items-center gap-3">
        <router-link to="/kontak" class="btn-primary text-xs font-medium uppercase tracking-wider py-2.5 px-6 group flex items-center gap-2">
          <span>Konsultasi Proyek</span>
          <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </router-link>
      </div>

      <!-- Mobile Hamburger Button -->
      <button 
        @click="toggleMenu" 
        class="md:hidden p-2 text-white rounded-[4px] hover:bg-white/10 active:bg-white/20 transition-colors flex items-center justify-center" 
        :aria-expanded="isOpen" 
        aria-label="Toggle Menu"
      >
        <span v-if="!isOpen" class="material-symbols-outlined text-2xl">menu</span>
        <span v-else class="material-symbols-outlined text-2xl">close</span>
      </button>
    </div>

    <!-- Mobile Menu with Transition -->
    <transition name="mobile-menu">
      <div v-if="isOpen" class="md:hidden bg-[#0c0c0e] border-b border-[rgba(241,241,239,0.14)] px-4 sm:px-6 py-5 space-y-1">
        <router-link 
          @click="closeMenu" 
          to="/" 
          class="block text-base font-medium py-3 px-3 rounded-[4px] transition-colors" 
          :class="$route.path === '/' ? 'text-primary bg-white/5 font-semibold' : 'text-white hover:bg-white/5'"
        >
          Beranda
        </router-link>
        <router-link 
          @click="closeMenu" 
          to="/layanan" 
          class="block text-base font-medium py-3 px-3 rounded-[4px] transition-colors" 
          :class="$route.path === '/layanan' ? 'text-primary bg-white/5 font-semibold' : 'text-white hover:bg-white/5'"
        >
          Layanan
        </router-link>
        <router-link 
          @click="closeMenu" 
          to="/portofolio" 
          class="block text-base font-medium py-3 px-3 rounded-[4px] transition-colors" 
          :class="$route.path === '/portofolio' ? 'text-primary bg-white/5 font-semibold' : 'text-white hover:bg-white/5'"
        >
          Portofolio
        </router-link>
        <router-link 
          @click="closeMenu" 
          to="/tentang" 
          class="block text-base font-medium py-3 px-3 rounded-[4px] transition-colors" 
          :class="$route.path === '/tentang' ? 'text-primary bg-white/5 font-semibold' : 'text-white hover:bg-white/5'"
        >
          Tentang Kami
        </router-link>
        <router-link 
          @click="closeMenu" 
          to="/kontak" 
          class="block text-base font-medium py-3 px-3 rounded-[4px] transition-colors" 
          :class="$route.path === '/kontak' ? 'text-primary bg-white/5 font-semibold' : 'text-white hover:bg-white/5'"
        >
          Kontak
        </router-link>
        <div class="pt-3">
          <router-link 
            @click="closeMenu" 
            to="/kontak" 
            class="btn-primary w-full text-center text-xs font-semibold uppercase tracking-wider py-3.5"
          >
            Konsultasi Proyek
          </router-link>
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
