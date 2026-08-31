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
      <div class="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs t-faint font-mono">
        <div>&copy; {{ new Date().getFullYear() }} Nexa Digital Agency. Hak cipta dilindungi.</div>
        <div class="flex items-center gap-4">
          <span>Indonesia</span><span>·</span><span>MIT License</span>
        </div>
      </div>
    </div>
  </footer>
</template>
