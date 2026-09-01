<template>
  <footer class="bg-elevated text-white py-10 sm:py-14 border-t b-subtle mt-auto">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-10">
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 sm:gap-8 pb-6 sm:pb-8 border-b b-subtle">
        <div class="flex items-center gap-3.5">
          <img src="/assets/logo.png" alt="Nexa Logo" class="w-10 h-10 object-contain" />
          <div>
            <div class="flex items-center gap-2.5">
              <span class="font-display font-light text-2xl text-white tracking-tight">NEXA</span>
              <span class="text-[9px] font-mono px-2 py-0.5 rounded bg-base border b-subtle t-cyan font-semibold">BE SEEN BE CHOSEN</span>
            </div>
            <div class="text-xs t-muted mt-0.5">Web Development · Data Analysis · Game Development</div>
          </div>
        </div>
        <!-- Nav Links: grid on mobile, flex on desktop -->
        <div class="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-x-6 gap-y-2 sm:gap-7 text-sm t-muted font-medium">
          <router-link to="/" class="hover:text-cyan transition-colors py-1">Beranda</router-link>
          <router-link to="/layanan" class="hover:text-cyan transition-colors py-1">Layanan</router-link>
          <router-link to="/portofolio" class="hover:text-cyan transition-colors py-1">Portofolio</router-link>
          <router-link to="/tentang" class="hover:text-cyan transition-colors py-1">Tentang Kami</router-link>
          <router-link to="/kontak" class="hover:text-cyan transition-colors py-1">Kontak</router-link>
        </div>
      </div>

      <!-- Social & Direct Contacts Strip -->
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 text-xs t-muted font-mono">
        <div class="flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-3 sm:gap-6">
          <a 
            href="https://wa.me/62895800286901" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="flex items-center gap-2 hover:text-cyan transition-colors py-1"
          >
            <svg class="w-4 h-4 text-emerald-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.301-.15-1.781-.879-2.057-.98-.277-.101-.478-.15-.679.15-.2.301-.778.98-.954 1.18-.176.2-.352.226-.653.076-.301-.15-1.272-.469-2.424-1.496-.896-.799-1.501-1.787-1.677-2.088-.176-.301-.019-.464.132-.614.136-.135.301-.352.452-.528.151-.176.201-.301.301-.502.1-.2.05-.376-.025-.527-.075-.15-.679-1.637-.93-2.242-.244-.589-.493-.509-.679-.519l-.578-.01c-.2 0-.527.075-.803.376s-1.054 1.03-1.054 2.511 1.079 2.912 1.23 3.113c.15.201 2.124 3.244 5.146 4.55.719.311 1.28.497 1.718.636.722.23 1.378.197 1.898.12.579-.087 1.781-.728 2.032-1.431.251-.703.251-1.305.176-1.431-.076-.126-.276-.201-.577-.352zm-5.467 7.618a9.92 9.92 0 0 1-5.064-1.385l-.363-.215-3.766.988 1.005-3.67-.236-.375a9.932 9.932 0 0 1-1.523-5.289c0-5.485 4.463-9.948 9.952-9.948 2.658 0 5.158 1.036 7.034 2.914a9.89 9.89 0 0 1 2.912 7.034c0 5.487-4.464 9.949-9.95 9.949zm8.441-18.39A11.905 11.905 0 0 0 12.005 0C5.385 0 0 5.385 0 12.005c0 2.113.552 4.177 1.6 6.002L0 24l6.165-1.617a11.97 11.97 0 0 0 5.84 1.513h.005c6.619 0 12.005-5.385 12.005-12.005 0-3.208-1.25-6.224-3.52-8.496z"/>
            </svg>
            <span>+62 895 8002 86901</span>
          </a>
          <a 
            href="mailto:nexadigitalagency40@gmail.com" 
            class="flex items-center gap-2 hover:text-cyan transition-colors py-1"
          >
            <Mail class="w-4 h-4 text-cyan shrink-0" />
            <span class="break-all sm:break-normal">nexadigitalagency40@gmail.com</span>
          </a>
          <a 
            href="https://www.instagram.com/nexadigitalagency40/" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="flex items-center gap-2 hover:text-purple-400 transition-colors py-1"
          >
            <svg class="w-4 h-4 text-purple-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>@nexadigitalagency40</span>
          </a>
          <a 
            href="https://www.tiktok.com/@nexa.digital.agen1?_r=1&_t=ZS-99LSlCbuCXA" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="flex items-center gap-2 hover:text-pink-400 transition-colors py-1"
          >
            <svg class="w-4 h-4 text-pink-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
            </svg>
            <span>@nexa.digital.agen1</span>
          </a>
        </div>
        <div class="flex items-center gap-4 t-faint">
          <span>Remote-First Studio</span>
          <span>·</span>
          <span>Indonesia</span>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs t-faint font-mono pt-4 border-t b-subtle">
        <div>&copy; {{ new Date().getFullYear() }} Nexa Digital Agency. Hak cipta dilindungi.</div>
        <div class="flex items-center gap-4">
          <span>Digital Agency Indonesia</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Mail } from 'lucide-vue-next'
</script>

