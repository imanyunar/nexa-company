<template>
  <footer class="bg-surface border-t border-muted-border py-12 mt-auto">
    <div class="max-w-6xl mx-auto px-6">
      <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        
        <!-- Brand & Tagline -->
        <div class="flex items-center gap-3.5">
          <img 
            src="/assets/logo.png" 
            alt="Nexa Logo" 
            class="w-8 h-8 object-contain"
          />
          <div>
            <div class="font-display font-bold text-lg text-ink">NEXA</div>
            <div class="text-xs text-muted">Web Development · Data Analysis · Game Development</div>
          </div>
        </div>

        <!-- Page Links -->
        <div class="flex flex-wrap items-center gap-6 text-sm text-muted font-medium">
          <router-link to="/" class="hover:text-blue transition-colors">Beranda</router-link>
          <router-link to="/layanan" class="hover:text-blue transition-colors">Layanan</router-link>
          <router-link to="/portofolio" class="hover:text-blue transition-colors">Portofolio</router-link>
          <router-link to="/tentang" class="hover:text-blue transition-colors">Tentang Kami</router-link>
          <router-link to="/kontak" class="hover:text-blue transition-colors">Kontak</router-link>
        </div>

        <!-- Copyright -->
        <div class="text-xs text-muted">
          &copy; {{ new Date().getFullYear() }} Nexa Agency. Hak cipta dilindungi.
        </div>

      </div>
    </div>
  </footer>
</template>
