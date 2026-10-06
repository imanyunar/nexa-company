<template>
  <header 
    class="sticky top-0 z-50 backdrop-blur-xl border-b transition-colors duration-300"
    :class="isDark 
      ? 'border-[rgba(241,241,239,0.12)] bg-black/85 text-white' 
      : 'border-slate-200/80 bg-white/85 text-slate-900 shadow-sm'"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 h-[72px] flex items-center justify-between">
      
      <!-- Brand Logo -->
      <router-link to="/" class="flex items-center gap-3 group focus:outline-none" aria-label="Nexa Digital Agency Beranda">
        <div class="relative flex items-center justify-center">
          <img 
            src="/assets/logo.png" 
            alt="Nexa Logo" 
            class="w-8 h-8 sm:w-9 sm:h-9 object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_8px_rgba(0,65,240,0.35)]" 
          />
          <span 
            class="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-primary"
            :class="isDark ? 'ring-2 ring-black' : 'ring-2 ring-white'"
          ></span>
        </div>
        <div class="flex flex-col">
          <span 
            class="font-display font-medium text-lg sm:text-xl tracking-tight leading-none transition-colors"
            :class="isDark ? 'text-white' : 'text-slate-900'"
          >
            NEXA
          </span>
          <span 
            class="text-[10px] tracking-[0.18em] uppercase font-mono font-medium mt-0.5 transition-colors group-hover:text-primary"
            :class="isDark ? 'text-[#999999]' : 'text-slate-500'"
          >
            Digital Agency
          </span>
        </div>
      </router-link>

      <!-- Desktop Nav Links -->
      <nav class="hidden md:flex items-center gap-8 text-[14px] font-medium">
        <router-link 
          to="/" 
          class="transition-colors py-2 relative" 
          :class="$route.path === '/' 
            ? 'text-primary font-semibold' 
            : (isDark ? 'text-[#999999] hover:text-white' : 'text-slate-600 hover:text-slate-900')"
        >
          Beranda
          <span v-if="$route.path === '/'" class="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"></span>
        </router-link>
        <router-link 
          to="/layanan" 
          class="transition-colors py-2 relative" 
          :class="$route.path === '/layanan' 
            ? 'text-primary font-semibold' 
            : (isDark ? 'text-[#999999] hover:text-white' : 'text-slate-600 hover:text-slate-900')"
        >
          Layanan
          <span v-if="$route.path === '/layanan'" class="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"></span>
        </router-link>
        <router-link 
          to="/portofolio" 
          class="transition-colors py-2 relative" 
          :class="$route.path === '/portofolio' 
            ? 'text-primary font-semibold' 
            : (isDark ? 'text-[#999999] hover:text-white' : 'text-slate-600 hover:text-slate-900')"
        >
          Portofolio
          <span v-if="$route.path === '/portofolio'" class="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"></span>
        </router-link>
        <router-link 
          to="/tentang" 
          class="transition-colors py-2 relative" 
          :class="$route.path === '/tentang' 
            ? 'text-primary font-semibold' 
            : (isDark ? 'text-[#999999] hover:text-white' : 'text-slate-600 hover:text-slate-900')"
        >
          Tentang Kami
          <span v-if="$route.path === '/tentang'" class="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"></span>
        </router-link>
        <router-link 
          to="/kontak" 
          class="transition-colors py-2 relative" 
          :class="$route.path === '/kontak' 
            ? 'text-primary font-semibold' 
            : (isDark ? 'text-[#999999] hover:text-white' : 'text-slate-600 hover:text-slate-900')"
        >
          Kontak
          <span v-if="$route.path === '/kontak'" class="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"></span>
        </router-link>
      </nav>

      <!-- Right Action CTA & Theme Switcher -->
      <div class="hidden md:flex items-center gap-3">
        <!-- Theme Toggle Button (Desktop) -->
        <button
          @click="toggleTheme"
          type="button"
          class="w-10 h-10 rounded-[4px] flex items-center justify-center transition-all duration-300 border focus:outline-none"
          :class="isDark 
            ? 'bg-[#141418] border-[rgba(241,241,239,0.14)] text-yellow-400 hover:bg-white/10 hover:border-yellow-400/50' 
            : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200 hover:text-primary'"
          :title="isDark ? 'Beralih ke Light Mode' : 'Beralih ke Dark Mode'"
          :aria-label="isDark ? 'Beralih ke Light Mode' : 'Beralih ke Dark Mode'"
        >
          <span v-if="isDark" class="material-symbols-outlined text-[20px] transition-transform duration-300 hover:rotate-45">light_mode</span>
          <span v-else class="material-symbols-outlined text-[20px] transition-transform duration-300 hover:-rotate-12">dark_mode</span>
        </button>

        <router-link to="/kontak" class="btn-primary text-xs font-medium uppercase tracking-wider py-2.5 px-6 group flex items-center gap-2">
          <span>Konsultasi Proyek</span>
          <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </router-link>
      </div>

      <!-- Mobile Actions (Theme Switcher + Hamburger) -->
      <div class="md:hidden flex items-center gap-2">
        <!-- Theme Toggle Button (Mobile) -->
        <button
          @click="toggleTheme"
          type="button"
          class="p-2 rounded-[4px] flex items-center justify-center transition-colors border"
          :class="isDark 
            ? 'bg-[#141418] border-[rgba(241,241,239,0.14)] text-yellow-400' 
            : 'bg-slate-100 border-slate-200 text-slate-700'"
          :aria-label="isDark ? 'Beralih ke Light Mode' : 'Beralih ke Dark Mode'"
        >
          <span v-if="isDark" class="material-symbols-outlined text-[20px]">light_mode</span>
          <span v-else class="material-symbols-outlined text-[20px]">dark_mode</span>
        </button>

        <!-- Mobile Hamburger Button -->
        <button 
          @click="toggleMenu" 
          class="p-2 rounded-[4px] transition-colors flex items-center justify-center"
          :class="isDark 
            ? 'text-white hover:bg-white/10 active:bg-white/20' 
            : 'text-slate-900 hover:bg-slate-100 active:bg-slate-200'"
          :aria-expanded="isOpen" 
          aria-label="Toggle Menu"
        >
          <span v-if="!isOpen" class="material-symbols-outlined text-2xl">menu</span>
          <span v-else class="material-symbols-outlined text-2xl">close</span>
        </button>
      </div>
    </div>

    <!-- Mobile Menu with Transition -->
    <transition name="mobile-menu">
      <div 
        v-if="isOpen" 
        class="md:hidden border-b px-4 sm:px-6 py-5 space-y-1 transition-colors"
        :class="isDark 
          ? 'bg-[#0c0c0e] border-[rgba(241,241,239,0.14)] text-white' 
          : 'bg-white border-slate-200 text-slate-900 shadow-xl'"
      >
        <router-link 
          @click="closeMenu" 
          to="/" 
          class="block text-base font-medium py-3 px-3 rounded-[4px] transition-colors" 
          :class="$route.path === '/' 
            ? 'text-primary bg-primary/10 font-semibold' 
            : (isDark ? 'text-white hover:bg-white/5' : 'text-slate-800 hover:bg-slate-100')"
        >
          Beranda
        </router-link>
        <router-link 
          @click="closeMenu" 
          to="/layanan" 
          class="block text-base font-medium py-3 px-3 rounded-[4px] transition-colors" 
          :class="$route.path === '/layanan' 
            ? 'text-primary bg-primary/10 font-semibold' 
            : (isDark ? 'text-white hover:bg-white/5' : 'text-slate-800 hover:bg-slate-100')"
        >
          Layanan
        </router-link>
        <router-link 
          @click="closeMenu" 
          to="/portofolio" 
          class="block text-base font-medium py-3 px-3 rounded-[4px] transition-colors" 
          :class="$route.path === '/portofolio' 
            ? 'text-primary bg-primary/10 font-semibold' 
            : (isDark ? 'text-white hover:bg-white/5' : 'text-slate-800 hover:bg-slate-100')"
        >
          Portofolio
        </router-link>
        <router-link 
          @click="closeMenu" 
          to="/tentang" 
          class="block text-base font-medium py-3 px-3 rounded-[4px] transition-colors" 
          :class="$route.path === '/tentang' 
            ? 'text-primary bg-primary/10 font-semibold' 
            : (isDark ? 'text-white hover:bg-white/5' : 'text-slate-800 hover:bg-slate-100')"
        >
          Tentang Kami
        </router-link>
        <router-link 
          @click="closeMenu" 
          to="/kontak" 
          class="block text-base font-medium py-3 px-3 rounded-[4px] transition-colors" 
          :class="$route.path === '/kontak' 
            ? 'text-primary bg-primary/10 font-semibold' 
            : (isDark ? 'text-white hover:bg-white/5' : 'text-slate-800 hover:bg-slate-100')"
        >
          Kontak
        </router-link>

        <div class="pt-4 flex flex-col gap-3 border-t mt-3" :class="isDark ? 'border-[rgba(241,241,239,0.08)]' : 'border-slate-200'">
          <div class="flex items-center justify-between px-3 py-2">
            <span class="text-sm font-medium" :class="isDark ? 'text-slate-400' : 'text-slate-600'">Mode Tampilan</span>
            <button
              @click="toggleTheme"
              type="button"
              class="inline-flex items-center gap-2 px-3 py-1.5 rounded-[4px] text-xs font-mono border"
              :class="isDark 
                ? 'bg-[#141418] border-[rgba(241,241,239,0.14)] text-yellow-400' 
                : 'bg-slate-100 border-slate-200 text-slate-800'"
            >
              <span class="material-symbols-outlined text-[16px]">{{ isDark ? 'light_mode' : 'dark_mode' }}</span>
              <span>{{ isDark ? 'Mode Terang' : 'Mode Gelap' }}</span>
            </button>
          </div>

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
import { isDark, toggleTheme } from '../utils/theme'

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
