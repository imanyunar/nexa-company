<template>
  <footer class="bg-paper border-t border-muted-border py-12">
    <div class="max-w-7xl mx-auto px-6">
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

        <!-- 3 Service Links -->
        <div class="flex flex-wrap items-center gap-6 text-sm text-muted font-medium">
          <a href="#layanan" class="hover:text-ink transition-colors">Web Development</a>
          <a href="#layanan" class="hover:text-ink transition-colors">Data Analysis</a>
          <a href="#layanan" class="hover:text-ink transition-colors">Game Development</a>
          <a href="#kontak" class="hover:text-ink transition-colors">Hubungi Kami</a>
        </div>

        <!-- Copyright & License -->
        <div class="text-xs font-mono text-muted">
          &copy; {{ new Date().getFullYear() }} Nexa Studio. MIT License.
        </div>

      </div>
    </div>
  </footer>
</template>
