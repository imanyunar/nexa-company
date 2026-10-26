<template>
  <header 
    class="sticky top-0 z-50 w-full backdrop-blur-md border-b transition-colors duration-300"
    :class="isDark 
      ? 'bg-[#111417]/90 border-[#2a2d31] text-[#f4f0ea]' 
      : 'bg-white/90 border-slate-200 text-[#161c24] shadow-[0_1px_8px_rgba(0,0,0,0.03)]'"
  >
    <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      
      <!-- Brand Logo -->
      <div class="flex items-center gap-10">
        <router-link to="/" class="inline-flex items-center gap-3 hover:opacity-90 transition-opacity" aria-label="Nexa Digital Agency Beranda">
          <img 
            src="/assets/logo.png" 
            alt="Nexa Logo" 
            class="h-9 w-auto object-contain drop-shadow-[0_0_12px_rgba(194,57,216,0.35)]" 
          />
          <span 
            class="font-headline font-bold text-2xl tracking-tight transition-colors"
            :class="isDark ? 'text-white' : 'text-[#161c24]'"
          >
            nexa<span :class="isDark ? 'text-stitch-magenta-light' : 'text-violet-600'">.</span>
          </span>
        </router-link>

        <!-- Desktop Nav Links -->
        <nav class="hidden md:flex items-center gap-8 text-sm font-medium">
          <router-link 
            to="/" 
            class="transition-colors"
            :class="$route.path === '/' 
              ? (isDark ? 'text-white font-semibold' : 'text-[#161c24] font-semibold') 
              : (isDark ? 'text-on-surface-variant hover:text-white' : 'text-[#44474a] hover:text-[#161c24]')"
          >
            Beranda
          </router-link>
          <router-link 
            to="/portofolio" 
            class="transition-colors"
            :class="$route.path === '/portofolio' 
              ? (isDark ? 'text-white font-semibold' : 'text-[#161c24] font-semibold') 
              : (isDark ? 'text-on-surface-variant hover:text-white' : 'text-[#44474a] hover:text-[#161c24]')"
          >
            Karya
          </router-link>
          <router-link 
            to="/layanan" 
            class="transition-colors"
            :class="$route.path === '/layanan' 
              ? (isDark ? 'text-white font-semibold' : 'text-[#161c24] font-semibold') 
              : (isDark ? 'text-on-surface-variant hover:text-white' : 'text-[#44474a] hover:text-[#161c24]')"
          >
            Layanan
          </router-link>
          <router-link 
            to="/kegiatan" 
            class="transition-colors"
            :class="$route.path.startsWith('/kegiatan') 
              ? (isDark ? 'text-white font-semibold' : 'text-[#161c24] font-semibold') 
              : (isDark ? 'text-on-surface-variant hover:text-white' : 'text-[#44474a] hover:text-[#161c24]')"
          >
            Kegiatan
          </router-link>
          <router-link 
            to="/tentang" 
            class="transition-colors"
            :class="$route.path === '/tentang' 
              ? (isDark ? 'text-white font-semibold' : 'text-[#161c24] font-semibold') 
              : (isDark ? 'text-on-surface-variant hover:text-white' : 'text-[#44474a] hover:text-[#161c24]')"
          >
            Proses
          </router-link>
          <router-link 
            to="/kontak" 
            class="transition-colors"
            :class="$route.path === '/kontak' 
              ? (isDark ? 'text-white font-semibold' : 'text-[#161c24] font-semibold') 
              : (isDark ? 'text-on-surface-variant hover:text-white' : 'text-[#44474a] hover:text-[#161c24]')"
          >
            Kontak
          </router-link>
        </nav>
      </div>

      <!-- Right Action CTA & Theme Switcher -->
      <div class="hidden md:flex items-center gap-4">
        <!-- Theme Toggle Button (Desktop) -->
        <button
          @click="toggleTheme"
          type="button"
          class="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border focus:outline-none"
          :class="isDark 
            ? 'bg-[#191c1f] border-[#2a2d31] text-stitch-amber hover:bg-[#272a2d]' 
            : 'bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200'"
          :title="isDark ? 'Beralih ke Light Mode' : 'Beralih ke Dark Mode'"
          :aria-label="isDark ? 'Beralih ke Light Mode' : 'Beralih ke Dark Mode'"
        >
          <span v-if="isDark" class="material-symbols-outlined text-[20px] transition-transform duration-300 hover:rotate-45">light_mode</span>
          <span v-else class="material-symbols-outlined text-[20px] transition-transform duration-300 hover:-rotate-12">dark_mode</span>
        </button>

        <router-link 
          to="/kontak" 
          class="btn-stitch-primary px-5 py-2.5 text-xs uppercase tracking-wider font-bold shadow-sm"
        >
          Mulai Diskusi
        </router-link>
      </div>

      <!-- Mobile Actions (Theme Switcher + Hamburger) -->
      <div class="md:hidden flex items-center gap-2">
        <button
          @click="toggleTheme"
          type="button"
          class="p-2 rounded-full flex items-center justify-center transition-colors border"
          :class="isDark 
            ? 'bg-[#191c1f] border-[#2a2d31] text-stitch-amber' 
            : 'bg-slate-100 border-slate-200 text-slate-800'"
          :aria-label="isDark ? 'Beralih ke Light Mode' : 'Beralih ke Dark Mode'"
        >
          <span v-if="isDark" class="material-symbols-outlined text-[20px]">light_mode</span>
          <span v-else class="material-symbols-outlined text-[20px]">dark_mode</span>
        </button>

        <!-- Mobile Hamburger Button -->
        <button 
          @click="toggleMenu" 
          class="p-2 rounded-lg transition-colors flex items-center justify-center"
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
        class="md:hidden border-b px-6 py-5 space-y-2 transition-colors"
        :class="isDark 
          ? 'bg-[#111417] border-[#2a2d31] text-[#f4f0ea]' 
          : 'bg-white border-slate-200 text-[#161c24] shadow-xl'"
      >
        <router-link 
          @click="closeMenu" 
          to="/" 
          class="block text-base font-medium py-2.5 px-3 rounded-lg transition-colors" 
          :class="$route.path === '/' 
            ? (isDark ? 'text-white bg-white/10 font-semibold' : 'text-[#111417] bg-slate-100 font-semibold') 
            : (isDark ? 'text-on-surface-variant hover:bg-white/5' : 'text-[#44474a] hover:bg-slate-50')"
        >
          Beranda
        </router-link>
        <router-link 
          @click="closeMenu" 
          to="/portofolio" 
          class="block text-base font-medium py-2.5 px-3 rounded-lg transition-colors" 
          :class="$route.path === '/portofolio' 
            ? (isDark ? 'text-white bg-white/10 font-semibold' : 'text-[#111417] bg-slate-100 font-semibold') 
            : (isDark ? 'text-on-surface-variant hover:bg-white/5' : 'text-[#44474a] hover:bg-slate-50')"
        >
          Karya (Portofolio)
        </router-link>
        <router-link 
          @click="closeMenu" 
          to="/layanan" 
          class="block text-base font-medium py-2.5 px-3 rounded-lg transition-colors" 
          :class="$route.path === '/layanan' 
            ? (isDark ? 'text-white bg-white/10 font-semibold' : 'text-[#111417] bg-slate-100 font-semibold') 
            : (isDark ? 'text-on-surface-variant hover:bg-white/5' : 'text-[#44474a] hover:bg-slate-50')"
        >
          Layanan
        </router-link>
        <router-link 
          @click="closeMenu" 
          to="/kegiatan" 
          class="block text-base font-medium py-2.5 px-3 rounded-lg transition-colors" 
          :class="$route.path.startsWith('/kegiatan') 
            ? (isDark ? 'text-white bg-white/10 font-semibold' : 'text-[#111417] bg-slate-100 font-semibold') 
            : (isDark ? 'text-on-surface-variant hover:bg-white/5' : 'text-[#44474a] hover:bg-slate-50')"
        >
          Kegiatan
        </router-link>
        <router-link 
          @click="closeMenu" 
          to="/tentang" 
          class="block text-base font-medium py-2.5 px-3 rounded-lg transition-colors" 
          :class="$route.path === '/tentang' 
            ? (isDark ? 'text-white bg-white/10 font-semibold' : 'text-[#111417] bg-slate-100 font-semibold') 
            : (isDark ? 'text-on-surface-variant hover:bg-white/5' : 'text-[#44474a] hover:bg-slate-50')"
        >
          Proses &amp; Nilai
        </router-link>
        <router-link 
          @click="closeMenu" 
          to="/kontak" 
          class="block text-base font-medium py-2.5 px-3 rounded-lg transition-colors" 
          :class="$route.path === '/kontak' 
            ? (isDark ? 'text-white bg-white/10 font-semibold' : 'text-[#111417] bg-slate-100 font-semibold') 
            : (isDark ? 'text-on-surface-variant hover:bg-white/5' : 'text-[#44474a] hover:bg-slate-50')"
        >
          Kontak
        </router-link>

        <div class="pt-4 flex flex-col gap-3 border-t mt-3" :class="isDark ? 'border-[#2a2d31]' : 'border-slate-200'">
          <router-link 
            @click="closeMenu" 
            to="/kontak" 
            class="w-full text-center text-xs font-bold uppercase tracking-wider py-3.5 rounded-full"
            :class="isDark 
              ? 'text-[#111417] bg-white' 
              : 'text-white bg-[#111417]'"
          >
            Mulai Diskusi
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
