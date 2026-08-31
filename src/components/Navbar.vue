<template>
  <header class="sticky top-0 z-50 bg-paper/90 backdrop-blur-md border-b border-muted-border transition-all">
    <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <!-- Brand Logo -->
      <a href="#" class="flex items-center gap-3.5 group focus:outline-none" aria-label="Nexa Home">
        <img 
          src="/assets/logo.png" 
          alt="Nexa Logo" 
          class="w-10 h-10 object-contain transition-transform group-hover:scale-105"
        />
        <div class="flex flex-col">
          <span class="font-display font-bold text-xl tracking-tight text-ink leading-none">NEXA</span>
          <span class="text-[10px] tracking-widest text-muted uppercase font-medium mt-0.5">Technology Agency</span>
        </div>
      </a>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-ink">
        <a href="#layanan" class="text-muted hover:text-ink transition-colors">Layanan</a>
        <a href="#portofolio" class="text-muted hover:text-ink transition-colors">Portofolio</a>
        <a href="#metrik" class="text-muted hover:text-ink transition-colors">Metrik</a>
        <a href="#kontak" class="text-muted hover:text-ink transition-colors">Kontak</a>
      </nav>

      <!-- Action Button -->
      <div class="hidden md:flex items-center gap-4">
        <a 
          href="#kontak" 
          class="bg-blue hover:bg-blue-hover text-white text-sm font-semibold px-5 py-2.5 rounded-[3px] transition-all shadow-none hover:translate-y-[-1px] active:translate-y-[0px]"
        >
          Mulai proyek
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button 
        @click="isOpen = !isOpen"
        class="md:hidden p-2 text-ink rounded focus:ring-2 focus:ring-blue"
        :aria-expanded="isOpen"
        aria-label="Toggle Navigation Menu"
      >
        <svg v-if="!isOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Nav Dropdown -->
    <div v-if="isOpen" class="md:hidden bg-surface border-b border-muted-border px-6 py-5 space-y-4">
      <a @click="isOpen = false" href="#layanan" class="block text-base font-medium text-ink py-1">Layanan</a>
      <a @click="isOpen = false" href="#portofolio" class="block text-base font-medium text-ink py-1">Portofolio</a>
      <a @click="isOpen = false" href="#metrik" class="block text-base font-medium text-ink py-1">Metrik</a>
      <a @click="isOpen = false" href="#kontak" class="block text-base font-medium text-ink py-1">Kontak</a>
      <div class="pt-2">
        <a 
          @click="isOpen = false"
          href="#kontak" 
          class="block text-center bg-blue text-white text-sm font-semibold py-3 rounded-[3px]"
        >
          Mulai proyek
        </a>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>
