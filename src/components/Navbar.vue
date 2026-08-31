<template>
  <header class="sticky top-0 z-50 bg-paper/95 backdrop-blur-md border-b border-muted-border">
    <div class="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
      
      <!-- Brand Logo & Name -->
      <router-link to="/" class="flex items-center gap-3.5 group focus:outline-none" aria-label="Nexa Beranda">
        <img 
          src="/assets/logo.png" 
          alt="Nexa Logo" 
          class="w-9 h-9 object-contain transition-transform group-hover:scale-105"
        />
        <div class="flex flex-col">
          <span class="font-display font-bold text-xl tracking-tight text-ink leading-none">NEXA</span>
          <span class="text-[11px] tracking-wider text-muted font-medium mt-0.5">Digital Agency</span>
        </div>
      </router-link>

      <!-- Desktop Navigation (Multi-page links) -->
      <nav class="hidden md:flex items-center gap-7 text-sm font-medium">
        <router-link 
          to="/" 
          class="transition-colors pb-1 border-b-2"
          :class="$route.path === '/' ? 'text-blue border-blue font-semibold' : 'text-muted hover:text-ink border-transparent'"
        >
          Beranda
        </router-link>
        <router-link 
          to="/layanan" 
          class="transition-colors pb-1 border-b-2"
          :class="$route.path === '/layanan' ? 'text-blue border-blue font-semibold' : 'text-muted hover:text-ink border-transparent'"
        >
          Layanan
        </router-link>
        <router-link 
          to="/portofolio" 
          class="transition-colors pb-1 border-b-2"
          :class="$route.path === '/portofolio' ? 'text-blue border-blue font-semibold' : 'text-muted hover:text-ink border-transparent'"
        >
          Portofolio
        </router-link>
        <router-link 
          to="/tentang" 
          class="transition-colors pb-1 border-b-2"
          :class="$route.path === '/tentang' ? 'text-blue border-blue font-semibold' : 'text-muted hover:text-ink border-transparent'"
        >
          Tentang Kami
        </router-link>
        <router-link 
          to="/kontak" 
          class="transition-colors pb-1 border-b-2"
          :class="$route.path === '/kontak' ? 'text-blue border-blue font-semibold' : 'text-muted hover:text-ink border-transparent'"
        >
          Kontak
        </router-link>
      </nav>

      <!-- Action Button -->
      <div class="hidden md:flex items-center">
        <router-link 
          to="/kontak" 
          class="bg-blue hover:bg-blue-hover text-white text-sm font-semibold px-5 py-2.5 rounded-[4px] transition-all hover:translate-y-[-1px]"
        >
          Konsultasi Gratis
        </router-link>
      </div>

      <!-- Mobile Menu Button -->
      <button 
        @click="isOpen = !isOpen"
        class="md:hidden p-2 text-ink rounded focus:ring-2 focus:ring-blue"
        :aria-expanded="isOpen"
        aria-label="Toggle Menu"
      >
        <svg v-if="!isOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Nav Menu Dropdown -->
    <div v-if="isOpen" class="md:hidden bg-surface border-b border-muted-border px-6 py-5 space-y-3">
      <router-link 
        @click="isOpen = false" 
        to="/" 
        class="block text-base font-medium py-1.5"
        :class="$route.path === '/' ? 'text-blue font-semibold' : 'text-ink'"
      >
        Beranda
      </router-link>
      <router-link 
        @click="isOpen = false" 
        to="/layanan" 
        class="block text-base font-medium py-1.5"
        :class="$route.path === '/layanan' ? 'text-blue font-semibold' : 'text-ink'"
      >
        Layanan
      </router-link>
      <router-link 
        @click="isOpen = false" 
        to="/portofolio" 
        class="block text-base font-medium py-1.5"
        :class="$route.path === '/portofolio' ? 'text-blue font-semibold' : 'text-ink'"
      >
        Portofolio
      </router-link>
      <router-link 
        @click="isOpen = false" 
        to="/tentang" 
        class="block text-base font-medium py-1.5"
        :class="$route.path === '/tentang' ? 'text-blue font-semibold' : 'text-ink'"
      >
        Tentang Kami
      </router-link>
      <router-link 
        @click="isOpen = false" 
        to="/kontak" 
        class="block text-base font-medium py-1.5"
        :class="$route.path === '/kontak' ? 'text-blue font-semibold' : 'text-ink'"
      >
        Kontak
      </router-link>
      <div class="pt-3">
        <router-link 
          @click="isOpen = false"
          to="/kontak" 
          class="block text-center bg-blue text-white text-sm font-semibold py-3 rounded-[4px]"
        >
          Konsultasi Gratis
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>
