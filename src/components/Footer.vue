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
            class="flex items-center gap-1.5 hover:text-cyan transition-colors"
          >
            <span>💬</span><span>WhatsApp: +62 895-8002-86901</span>
          </a>
          <a 
            href="mailto:nexadigitalagency40@gmail.com" 
            class="flex items-center gap-1.5 hover:text-cyan transition-colors"
          >
            <span>✉️</span><span>nexadigitalagency40@gmail.com</span>
          </a>
          <a 
            href="https://www.tiktok.com/@nexa.digital.agen1?_r=1&_t=ZS-99LSlCbuCXA" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="flex items-center gap-1.5 hover:text-cyan transition-colors"
          >
            <span>🎵</span><span>TikTok: @nexa.digital.agen1</span>
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
