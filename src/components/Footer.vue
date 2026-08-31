<template>
  <footer class="bg-elevated text-white py-14 border-t b-subtle mt-auto">
    <div class="max-w-6xl mx-auto px-6 space-y-10">
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b b-subtle">
        <div class="flex items-center gap-3.5">
          <img src="/assets/logo.png" alt="Nexa Logo" class="w-10 h-10 object-contain" />
          <div>
            <div class="font-display font-light text-2xl text-white tracking-tight">NEXA</div>
            <div class="text-xs t-muted">Web Development · Data Analysis · Game Development</div>
          </div>
        </div>
        <div class="flex flex-wrap items-center gap-7 text-sm t-muted font-medium">
          <router-link to="/" class="hover:text-cyan transition-colors">Beranda</router-link>
          <router-link to="/layanan" class="hover:text-cyan transition-colors">Layanan</router-link>
          <router-link to="/portofolio" class="hover:text-cyan transition-colors">Portofolio</router-link>
          <router-link to="/tentang" class="hover:text-cyan transition-colors">Tentang Kami</router-link>
          <router-link to="/kontak" class="hover:text-cyan transition-colors">Kontak</router-link>
        </div>
      </div>

      <!-- Social & Direct Contacts Strip -->
      <div class="flex flex-wrap items-center justify-between gap-6 text-xs t-muted font-mono">
        <div class="flex flex-wrap items-center gap-6">
          <a 
            href="https://wa.me/62895800286901" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="flex items-center gap-2 hover:text-cyan transition-colors"
          >
            <svg class="w-4 h-4 text-emerald-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.076-1.579-.297-1.127-.446-1.89-1.578-1.947-1.654-.055-.077-.45-0.598-.45-1.141 0-.543.285-.809.387-.92.102-.112.222-.14.296-.14.075 0 .15 0 .216.004.07.003.164-.026.256.195.096.23.328.799.356.857.029.058.048.126.01.202-.038.077-.058.125-.116.192-.058.067-.123.15-.175.202-.058.057-.118.12-.051.236.068.115.301.496.646.804.444.396.818.52 0.933.578.116.057.184.05.253-.03.07-.078.298-.348.377-.468.08-.12.16-.1.27-.059.11.041.697.329.817.389.12.06.2.09.23.14.03.05.03.29-.114.695z"/>
            </svg>
            <span>+62 895-8002-86901</span>
          </a>
          <a 
            href="mailto:nexadigitalagency40@gmail.com" 
            class="flex items-center gap-2 hover:text-cyan transition-colors"
          >
            <Mail class="w-4 h-4 text-cyan shrink-0" />
            <span>nexadigitalagency40@gmail.com</span>
          </a>
          <a 
            href="https://www.tiktok.com/@nexa.digital.agen1?_r=1&_t=ZS-99LSlCbuCXA" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="flex items-center gap-2 hover:text-pink-400 transition-colors"
          >
            <svg class="w-4 h-4 text-pink-400 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.86 4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.04-4.52z"/>
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

      <div class="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs t-faint font-mono pt-4 border-t b-subtle">
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
