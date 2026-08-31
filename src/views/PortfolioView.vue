<template>
  <div class="bg-paper text-ink py-20 sm:py-24">
    <div class="max-w-5xl mx-auto px-6 space-y-16">
      
      <!-- Editorial Page Top -->
      <div class="text-center max-w-2xl mx-auto space-y-4">
        <div class="text-xs font-mono text-primary uppercase tracking-widest">SHOWCASE KARYA NYATA</div>
        <h1 class="text-4xl sm:text-5xl font-display font-light text-ink">
          Portofolio Produksi
        </h1>
        <p class="text-muted text-base sm:text-lg leading-relaxed">
          Studi kasus proyek nyata yang telah beroperasi di lingkungan live production dengan performa tinggi.
        </p>
      </div>

      <!-- Projects List in 8px Cards with Rich Visual Mockups -->
      <div class="space-y-12">
        
        <!-- Project 1: Lentera Indramayu -->
        <div class="card-8px portfolio-item p-8 sm:p-10 space-y-8 hover:border-primary hover:-translate-y-1 transition-all duration-300">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-hairline-light pb-4">
            <div class="flex items-center gap-2.5">
              <span class="w-2.5 h-2.5 rounded-full bg-[#27C93F] animate-pulse"></span>
              <span class="text-xs font-mono font-bold uppercase tracking-wider text-primary">
                PLATFORM PEMERINTAHAN & PWA
              </span>
            </div>
            <span class="text-xs font-mono text-muted">LIVE PRODUCTION</span>
          </div>

          <!-- Visual Browser Window Mockup -->
          <div class="rounded-lg overflow-hidden border border-hairline-light shadow-sm bg-[#0A2647] text-white">
            <!-- Browser Top Bar -->
            <div class="bg-[#071D36] px-4 py-2.5 flex items-center justify-between border-b border-white/10">
              <div class="flex items-center gap-1.5">
                <span class="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></span>
              </div>
              <span class="text-xs font-mono text-white/70">https://lentera.indramayukab.go.id/</span>
              <span class="text-xs font-mono text-[#D4AF37] font-bold">PWA LIVE</span>
            </div>
            
            <!-- Website Preview Hero -->
            <div class="p-6 sm:p-8 space-y-4 bg-gradient-to-r from-[#0A2647] to-[#0E3563]">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded bg-[#D4AF37] text-black font-bold text-xs flex items-center justify-center">
                  L
                </div>
                <div>
                  <div class="text-sm font-bold text-[#D4AF37] tracking-wider">LENTERA INDRAMAYU</div>
                  <div class="text-xs text-white/80">Mewujudkan Indramayu Religius & Ekonomi Kerakyatan</div>
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div class="bg-white/10 rounded-lg p-3">
                  <div class="text-xs text-white/60">Layanan</div>
                  <div class="text-sm font-bold text-white">Publik Terpadu</div>
                </div>
                <div class="bg-white/10 rounded-lg p-3">
                  <div class="text-xs text-white/60">Ekonomi</div>
                  <div class="text-sm font-bold text-[#D4AF37]">Katalog UMKM</div>
                </div>
                <div class="bg-white/10 rounded-lg p-3">
                  <div class="text-xs text-white/60">Transparansi</div>
                  <div class="text-sm font-bold text-[#27C93F]">Portal Data</div>
                </div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div class="lg:col-span-8 space-y-4">
              <h2 class="text-2xl sm:text-3xl font-display font-light text-ink">
                LENTERA — Pemerintah Kabupaten Indramayu
              </h2>
              <p class="text-muted text-base leading-relaxed">
                Platform digital sentral Pemkab Indramayu yang memadukan layanan publik terpadu, keterbukaan informasi, dan sektor ekonomi kerakyatan ke dalam satu arsitektur Progressive Web App (PWA) yang cepat diakses dari ponsel warga.
              </p>

              <div class="space-y-2 pt-2 text-sm text-ink font-medium">
                <div class="flex items-center gap-2">
                  <span class="text-primary font-bold">✔</span>
                  <span>Aksesibilitas layanan publik terpusat 24/7.</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-primary font-bold">✔</span>
                  <span>Instalasi praktis sebagai aplikasi PWA di berbagai smartphone.</span>
                </div>
              </div>
            </div>

            <div class="lg:col-span-4 bg-paper p-6 rounded-lg border border-hairline-light space-y-4">
              <div class="space-y-2 text-xs font-mono">
                <div class="text-muted">KLIEN:</div>
                <div class="font-bold text-ink text-sm">Pemkab Indramayu</div>
                <div class="text-muted pt-2">TEKNOLOGI:</div>
                <div class="font-medium text-ink">Laravel, PWA, REST API</div>
              </div>

              <div class="pt-2">
                <a 
                  href="https://lentera.indramayukab.go.id/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="btn-pill-primary w-full text-center text-xs uppercase font-bold py-3 transition-transform hover:scale-105 active:scale-95"
                >
                  Buka Website
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Project 2: Visit Gumiwang -->
        <div class="card-8px portfolio-item p-8 sm:p-10 space-y-8 hover:border-cyan transition-all duration-300">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-hairline-light pb-4">
            <div class="flex items-center gap-2.5">
              <span class="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></span>
              <span class="text-xs font-mono font-bold uppercase tracking-wider text-cyan-pressed">
                PORTAL DESA WISATA & UMKM
              </span>
            </div>
            <span class="text-xs font-mono text-muted">LIVE PRODUCTION</span>
          </div>

          <!-- Visual Browser Window Mockup -->
          <div class="rounded-lg overflow-hidden border border-hairline-light shadow-sm bg-[#064E3B] text-white">
            <!-- Browser Top Bar -->
            <div class="bg-[#043C2E] px-4 py-2.5 flex items-center justify-between border-b border-white/10">
              <div class="flex items-center gap-1.5">
                <span class="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></span>
              </div>
              <span class="text-xs font-mono text-white/70">https://visitgumiwang.web.id/</span>
              <span class="text-xs font-mono text-[#34D399] font-bold">DESA WISATA</span>
            </div>
            
            <!-- Website Preview Hero -->
            <div class="p-6 sm:p-8 space-y-4 bg-gradient-to-r from-[#064E3B] to-[#0A5C45]">
              <div class="flex items-center gap-3">
                <div class="w-8 h-8 rounded bg-[#34D399] text-black font-bold text-xs flex items-center justify-center">
                  🌿
                </div>
                <div>
                  <div class="text-sm font-bold text-[#34D399] tracking-wider">VISIT GUMIWANG</div>
                  <div class="text-xs text-white/80">Pertanian, Perikanan & Produk Unggulan UMKM</div>
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div class="bg-white/10 rounded-lg p-3">
                  <div class="text-xs text-white/60">Pertanian</div>
                  <div class="text-sm font-bold text-white">Padi & Kebun</div>
                </div>
                <div class="bg-white/10 rounded-lg p-3">
                  <div class="text-xs text-white/60">Perikanan</div>
                  <div class="text-sm font-bold text-[#38BDF8]">Budidaya Ikan</div>
                </div>
                <div class="bg-white/10 rounded-lg p-3">
                  <div class="text-xs text-white/60">Katalog</div>
                  <div class="text-sm font-bold text-[#FBBF24]">Produk UMKM</div>
                </div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div class="lg:col-span-8 space-y-4">
              <h2 class="text-2xl sm:text-3xl font-display font-light text-ink">
                Visit Gumiwang — Pertanian, Perikanan & UMKM
              </h2>
              <p class="text-muted text-base leading-relaxed">
                Website promosi potensi lokal Desa Gumiwang. Menampilkan kekayaan agrikultur, perikanan, keindahan alam, serta etalase digital produk UMKM lokal dengan kecepatan pemuatan instan.
              </p>

              <div class="space-y-2 pt-2 text-sm text-ink font-medium">
                <div class="flex items-center gap-2">
                  <span class="text-cyan-pressed font-bold">✔</span>
                  <span>Katalog UMKM terstruktur dengan kontak pemesanan langsung.</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-cyan-pressed font-bold">✔</span>
                  <span>Tampilan visual responsif & ringan diakses di koneksi internet desa.</span>
                </div>
              </div>
            </div>

            <div class="lg:col-span-4 bg-paper p-6 rounded-lg border border-hairline-light space-y-4">
              <div class="space-y-2 text-xs font-mono">
                <div class="text-muted">KLIEN:</div>
                <div class="font-bold text-ink text-sm">Desa Gumiwang</div>
                <div class="text-muted pt-2">TEKNOLOGI:</div>
                <div class="font-medium text-ink">Vite, TailwindCSS, Responsive</div>
              </div>

              <div class="pt-2">
                <a 
                  href="https://visitgumiwang.web.id/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="btn-pill-primary w-full text-center text-xs uppercase font-bold py-3 transition-transform hover:scale-105 active:scale-95"
                >
                  Buka Website
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Project 3: CatatKas UMKM -->
        <div class="card-8px portfolio-item p-8 sm:p-10 space-y-8 hover:border-magenta transition-all duration-300">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-hairline-light pb-4">
            <div class="flex items-center gap-2.5">
              <span class="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></span>
              <span class="text-xs font-mono font-bold uppercase tracking-wider text-magenta">
                APLIKASI FINANSIAL DIGITAL
              </span>
            </div>
            <span class="text-xs font-mono text-muted">LIVE PRODUCTION</span>
          </div>

          <!-- Visual Browser Window Mockup -->
          <div class="rounded-lg overflow-hidden border border-hairline-light shadow-sm bg-[#312E81] text-white">
            <!-- Browser Top Bar -->
            <div class="bg-[#242168] px-4 py-2.5 flex items-center justify-between border-b border-white/10">
              <div class="flex items-center gap-1.5">
                <span class="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></span>
              </div>
              <span class="text-xs font-mono text-white/70">https://catatkas-web.vercel.app/</span>
              <span class="text-xs font-mono text-[#F472B6] font-bold">WEB APP</span>
            </div>
            
            <!-- App Preview Hero -->
            <div class="p-6 sm:p-8 space-y-4 bg-gradient-to-r from-[#312E81] to-[#4338CA]">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <div class="w-8 h-8 rounded bg-magenta text-white font-bold text-xs flex items-center justify-center">
                    💰
                  </div>
                  <div>
                    <div class="text-sm font-bold text-white tracking-wider">CATATKAS UMKM</div>
                    <div class="text-xs text-white/80">Pembukuan Keuangan Digital Praktis</div>
                  </div>
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-mono">
                <div class="bg-black/30 rounded-lg p-3">
                  <div class="text-xs text-white/60">Saldo Kas</div>
                  <div class="text-sm font-bold text-[#34D399]">Rp 14.850.000</div>
                </div>
                <div class="bg-black/30 rounded-lg p-3">
                  <div class="text-xs text-white/60">Pemasukan</div>
                  <div class="text-sm font-bold text-cyan">+Rp 3.200.000</div>
                </div>
                <div class="bg-black/30 rounded-lg p-3">
                  <div class="text-xs text-white/60">Pengeluaran</div>
                  <div class="text-sm font-bold text-[#F43F5E]">-Rp 850.000</div>
                </div>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div class="lg:col-span-8 space-y-4">
              <h2 class="text-2xl sm:text-3xl font-display font-light text-ink">
                CatatKas — Pembukuan Keuangan Digital UMKM
              </h2>
              <p class="text-muted text-base leading-relaxed">
                Aplikasi web pembukuan kas harian bagi pelaku usaha mikro. Membantu pencatatan kas masuk/keluar secara instan, kalkulasi saldo otomatis, dan pembuatan laporan keuangan tanpa rumus spreadsheet manual.
              </p>

              <div class="space-y-2 pt-2 text-sm text-ink font-medium">
                <div class="flex items-center gap-2">
                  <span class="text-magenta font-bold">✔</span>
                  <span>Perhitungan mutasi kas dan laba rugi 100% otomatis.</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="text-magenta font-bold">✔</span>
                  <span>Antarmuka bersih yang ramah pengguna pemula.</span>
                </div>
              </div>
            </div>

            <div class="lg:col-span-4 bg-paper p-6 rounded-lg border border-hairline-light space-y-4">
              <div class="space-y-2 text-xs font-mono">
                <div class="text-muted">KATEGORI:</div>
                <div class="font-bold text-ink text-sm">Productivity Web App</div>
                <div class="text-muted pt-2">TEKNOLOGI:</div>
                <div class="font-medium text-ink">Single Page App, TailwindCSS</div>
              </div>

              <div class="pt-2">
                <a 
                  href="https://catatkas-web.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="btn-pill-action w-full text-center text-xs uppercase font-bold py-3 transition-transform hover:scale-105 active:scale-95"
                >
                  Buka Web App
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!-- Action Box -->
      <div class="card-8px p-8 sm:p-10 text-center space-y-4 bg-ink text-white">
        <h3 class="text-2xl font-display font-light text-white">Ingin Mewujudkan Solusi Serupa?</h3>
        <p class="text-white/70 text-sm max-w-md mx-auto leading-relaxed">Diskusikan kebutuhan proyek Anda bersama tim Nexa untuk mendapatkan solusi teknis terbaik.</p>
        <div class="pt-3">
          <router-link to="/kontak" class="btn-pill-primary text-xs uppercase font-bold py-3.5 px-8 transition-transform hover:scale-105 active:scale-95">
            Mulai Diskusi Proyek
          </router-link>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { animateStaggerFadeIn } from '../utils/animations'

onMounted(() => {
  animateStaggerFadeIn('.portfolio-item', { delay: 150, stagger: 150 })
})
</script>
