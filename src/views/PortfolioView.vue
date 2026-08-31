<template>
  <div class="bg-base text-white py-20 sm:py-24">
    <div class="max-w-5xl mx-auto px-6 space-y-16">

      <div class="text-center max-w-2xl mx-auto space-y-4">
        <div class="text-xs font-mono t-cyan uppercase tracking-widest">SHOWCASE KARYA NYATA</div>
        <h1 class="text-4xl sm:text-5xl font-display font-light text-white">Portofolio Produksi</h1>
        <p class="t-muted text-base sm:text-lg leading-relaxed">Studi kasus proyek nyata yang telah beroperasi di lingkungan live production dengan performa tinggi.</p>
      </div>

      <div class="space-y-12">
        <!-- Lentera -->
        <div class="card-unified portfolio-item p-8 sm:p-10 space-y-8">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b b-subtle pb-4">
            <div class="flex items-center gap-2.5"><span class="w-2.5 h-2.5 rounded-full animate-pulse" style="background:#27C93F;"></span><span class="text-xs font-mono font-bold uppercase tracking-wider t-cyan">PLATFORM PEMERINTAHAN & PWA</span></div>
            <span class="text-xs font-mono t-faint">LIVE PRODUCTION</span>
          </div>
          <!-- Live Preview Window -->
          <div class="rounded-lg overflow-hidden border b-subtle" style="background:#0B0E2B;">
            <div class="px-4 py-2.5 flex items-center justify-between border-b b-subtle" style="background:#070920;">
              <div class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full" style="background:#FF5F56;"></span><span class="w-2.5 h-2.5 rounded-full" style="background:#FFBD2E;"></span><span class="w-2.5 h-2.5 rounded-full" style="background:#27C93F;"></span></div>
              <span class="text-xs font-mono t-muted">https://lentera.indramayukab.go.id/</span>
              <span class="text-xs font-mono font-bold" style="color:#D4AF37;">PWA LIVE</span>
            </div>
            <div class="relative w-full overflow-hidden" style="height: 420px; background:#0B0E2B;">
              <img 
                src="/assets/projects/lentera.png" 
                alt="Lentera Indramayu Live Preview" 
                class="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div class="lg:col-span-8 space-y-4">
              <h2 class="text-2xl sm:text-3xl font-display font-light text-white">LENTERA — Pemerintah Kabupaten Indramayu</h2>
              <p class="t-muted text-base leading-relaxed">Platform digital sentral Pemkab Indramayu yang memadukan layanan publik terpadu, keterbukaan informasi, dan sektor ekonomi kerakyatan ke dalam satu arsitektur Progressive Web App (PWA).</p>
              <div class="space-y-2.5 pt-2 text-sm text-white font-medium">
                <div class="flex items-center gap-2.5">
                  <CheckCircle2 class="w-4 h-4 text-cyan shrink-0" />
                  <span>Aksesibilitas layanan publik terpusat 24/7.</span>
                </div>
                <div class="flex items-center gap-2.5">
                  <CheckCircle2 class="w-4 h-4 text-cyan shrink-0" />
                  <span>Instalasi praktis sebagai aplikasi PWA di berbagai smartphone.</span>
                </div>
              </div>
            </div>
            <div class="lg:col-span-4 bg-elevated p-6 rounded-lg border b-subtle space-y-4">
              <div class="space-y-2 text-xs font-mono"><div class="t-faint">KLIEN:</div><div class="font-bold text-white text-sm">Pemkab Indramayu</div><div class="t-faint pt-2">TEKNOLOGI:</div><div class="font-medium text-white">Laravel, PWA, REST API</div></div>
              <div class="pt-2">
                <a href="https://lentera.indramayukab.go.id/" target="_blank" rel="noopener noreferrer" class="btn-pill-primary w-full text-center text-xs uppercase font-bold py-3 flex items-center justify-center gap-1.5">
                  <span>Buka Website</span>
                  <ArrowUpRight class="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Visit Gumiwang -->
        <div class="card-unified portfolio-item p-8 sm:p-10 space-y-8">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b b-subtle pb-4">
            <div class="flex items-center gap-2.5"><span class="w-2.5 h-2.5 rounded-full" style="background:#27C93F;"></span><span class="text-xs font-mono font-bold uppercase tracking-wider t-cyan">PORTAL DESA WISATA & UMKM</span></div>
            <span class="text-xs font-mono t-faint">LIVE PRODUCTION</span>
          </div>
          <!-- Live Preview Window -->
          <div class="rounded-lg overflow-hidden border b-subtle" style="background:#0B0E2B;">
            <div class="px-4 py-2.5 flex items-center justify-between border-b b-subtle" style="background:#070920;">
              <div class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full" style="background:#FF5F56;"></span><span class="w-2.5 h-2.5 rounded-full" style="background:#FFBD2E;"></span><span class="w-2.5 h-2.5 rounded-full" style="background:#27C93F;"></span></div>
              <span class="text-xs font-mono t-muted">https://visitgumiwang.web.id/</span>
              <span class="text-xs font-mono font-bold" style="color:#34D399;">DESA WISATA</span>
            </div>
            <div class="relative w-full overflow-hidden" style="height: 420px; background:#0B0E2B;">
              <img 
                src="/assets/projects/visitgumiwang.png" 
                alt="Visit Gumiwang Live Preview" 
                class="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div class="lg:col-span-8 space-y-4">
              <h2 class="text-2xl sm:text-3xl font-display font-light text-white">Visit Gumiwang — Pertanian, Perikanan & UMKM</h2>
              <p class="t-muted text-base leading-relaxed">Website promosi potensi lokal Desa Gumiwang. Menampilkan kekayaan agrikultur, perikanan, keindahan alam, serta etalase digital produk UMKM lokal.</p>
              <div class="space-y-2.5 pt-2 text-sm text-white font-medium">
                <div class="flex items-center gap-2.5">
                  <CheckCircle2 class="w-4 h-4 text-cyan shrink-0" />
                  <span>Katalog UMKM terstruktur dengan kontak pemesanan langsung.</span>
                </div>
                <div class="flex items-center gap-2.5">
                  <CheckCircle2 class="w-4 h-4 text-cyan shrink-0" />
                  <span>Tampilan visual responsif & ringan diakses di koneksi internet desa.</span>
                </div>
              </div>
            </div>
            <div class="lg:col-span-4 bg-elevated p-6 rounded-lg border b-subtle space-y-4">
              <div class="space-y-2 text-xs font-mono"><div class="t-faint">KLIEN:</div><div class="font-bold text-white text-sm">Desa Gumiwang</div><div class="t-faint pt-2">TEKNOLOGI:</div><div class="font-medium text-white">Vite, TailwindCSS, Responsive</div></div>
              <div class="pt-2">
                <a href="https://visitgumiwang.web.id/" target="_blank" rel="noopener noreferrer" class="btn-pill-primary w-full text-center text-xs uppercase font-bold py-3 flex items-center justify-center gap-1.5">
                  <span>Buka Website</span>
                  <ArrowUpRight class="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- CatatKas -->
        <div class="card-unified portfolio-item p-8 sm:p-10 space-y-8">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b b-subtle pb-4">
            <div class="flex items-center gap-2.5"><span class="w-2.5 h-2.5 rounded-full" style="background:#27C93F;"></span><span class="text-xs font-mono font-bold uppercase tracking-wider t-mag">APLIKASI FINANSIAL DIGITAL</span></div>
            <span class="text-xs font-mono t-faint">LIVE PRODUCTION</span>
          </div>
          <!-- Live Preview Window -->
          <div class="rounded-lg overflow-hidden border b-subtle" style="background:#0B0E2B;">
            <div class="px-4 py-2.5 flex items-center justify-between border-b b-subtle" style="background:#070920;">
              <div class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full" style="background:#FF5F56;"></span><span class="w-2.5 h-2.5 rounded-full" style="background:#FFBD2E;"></span><span class="w-2.5 h-2.5 rounded-full" style="background:#27C93F;"></span></div>
              <span class="text-xs font-mono t-muted">https://catatkas-web.vercel.app/</span>
              <span class="text-xs font-mono font-bold" style="color:#F472B6;">WEB APP</span>
            </div>
            <div class="relative w-full overflow-hidden" style="height: 420px; background:#0B0E2B;">
              <img 
                src="/assets/projects/catatkas.png" 
                alt="CatatKas UMKM Live Preview" 
                class="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div class="lg:col-span-8 space-y-4">
              <h2 class="text-2xl sm:text-3xl font-display font-light text-white">CatatKas — Pembukuan Keuangan Digital UMKM</h2>
              <p class="t-muted text-base leading-relaxed">Aplikasi web pembukuan kas harian bagi pelaku usaha mikro. Membantu pencatatan kas masuk/keluar secara instan, kalkulasi saldo otomatis, dan pembuatan laporan keuangan.</p>
              <div class="space-y-2.5 pt-2 text-sm text-white font-medium">
                <div class="flex items-center gap-2.5">
                  <CheckCircle2 class="w-4 h-4 text-pink-400 shrink-0" />
                  <span>Perhitungan mutasi kas dan laba rugi 100% otomatis.</span>
                </div>
                <div class="flex items-center gap-2.5">
                  <CheckCircle2 class="w-4 h-4 text-pink-400 shrink-0" />
                  <span>Antarmuka bersih yang ramah pengguna pemula.</span>
                </div>
              </div>
            </div>
            <div class="lg:col-span-4 bg-elevated p-6 rounded-lg border b-subtle space-y-4">
              <div class="space-y-2 text-xs font-mono"><div class="t-faint">KATEGORI:</div><div class="font-bold text-white text-sm">Productivity Web App</div><div class="t-faint pt-2">TEKNOLOGI:</div><div class="font-medium text-white">Single Page App, TailwindCSS</div></div>
              <div class="pt-2">
                <a href="https://catatkas-web.vercel.app/" target="_blank" rel="noopener noreferrer" class="btn-pill-action w-full text-center text-xs uppercase font-bold py-3 flex items-center justify-center gap-1.5">
                  <span>Buka Web App</span>
                  <ArrowUpRight class="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card-unified bg-elevated p-8 sm:p-10 text-center space-y-4">
        <h3 class="text-2xl font-display font-light text-white">Ingin Mewujudkan Solusi Serupa?</h3>
        <p class="t-muted text-sm max-w-md mx-auto leading-relaxed">Diskusikan kebutuhan proyek Anda bersama tim Nexa Digital Agency untuk mendapatkan solusi teknis terbaik.</p>
        <div class="pt-3"><router-link to="/kontak" class="btn-pill-primary text-xs uppercase font-bold py-3.5 px-8">Mulai Diskusi Proyek</router-link></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { CheckCircle2, ArrowUpRight } from 'lucide-vue-next'
import { animateStaggerFadeIn } from '../utils/animations'
onMounted(() => { animateStaggerFadeIn('.portfolio-item', { delay: 150, stagger: 150 }) })
</script>
