<template>
  <header class="sticky top-0 z-50 backdrop-blur-md border-b b-subtle text-white" style="background-color: rgba(11, 14, 27, 0.95);">
    <div class="max-w-6xl mx-auto px-6 h-16 sm:h-20 flex items-center justify-between">
      
      <router-link to="/" class="flex items-center gap-3.5 group focus:outline-none" aria-label="Nexa Digital Agency Beranda">
        <img src="/assets/logo.png" alt="Nexa Logo" class="w-9 h-9 object-contain transition-transform group-hover:scale-105" />
        <div class="flex flex-col">
          <span class="font-display font-light text-xl tracking-tight text-white leading-none">NEXA</span>
          <span class="text-[10px] tracking-widest t-faint uppercase font-medium mt-0.5">Digital Agency</span>
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

      <button @click="isOpen = !isOpen" class="md:hidden p-2 text-white rounded" :aria-expanded="isOpen" aria-label="Toggle Menu">
        <svg v-if="!isOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
    </div>

    <div v-if="isOpen" class="md:hidden bg-elevated border-b b-subtle px-6 py-5 space-y-3">
      <router-link @click="isOpen = false" to="/" class="block text-base font-medium py-1.5" :class="$route.path === '/' ? 'text-cyan font-semibold' : 'text-white'">Beranda</router-link>
      <router-link @click="isOpen = false" to="/layanan" class="block text-base font-medium py-1.5" :class="$route.path === '/layanan' ? 'text-cyan font-semibold' : 'text-white'">Layanan</router-link>
      <router-link @click="isOpen = false" to="/portofolio" class="block text-base font-medium py-1.5" :class="$route.path === '/portofolio' ? 'text-cyan font-semibold' : 'text-white'">Portofolio</router-link>
      <router-link @click="isOpen = false" to="/tentang" class="block text-base font-medium py-1.5" :class="$route.path === '/tentang' ? 'text-cyan font-semibold' : 'text-white'">Tentang Kami</router-link>
      <router-link @click="isOpen = false" to="/kontak" class="block text-base font-medium py-1.5" :class="$route.path === '/kontak' ? 'text-cyan font-semibold' : 'text-white'">Kontak</router-link>
      <div class="pt-3">
        <router-link @click="isOpen = false" to="/kontak" class="btn-pill-primary w-full text-center text-xs font-bold uppercase tracking-wider py-3">Konsultasi</router-link>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>
