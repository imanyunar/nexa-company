<template>
  <div class="py-16 sm:py-24 transition-colors duration-300">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 space-y-16 sm:space-y-20">

      <!-- Header with Stitch Overline -->
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <div 
          class="inline-flex items-center px-4 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider font-mono shadow-sm"
          :class="isDark ? 'border-[#C239D8]/40 bg-[#191c1f] text-stitch-magenta-light' : 'border-fuchsia-200/90 bg-white/95 text-slate-800 shadow-[0_2px_12px_rgba(192,38,211,0.08)]'"
        >
          <span>01 // Portofolio Pilihan</span>
        </div>
        
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-headline font-semibold tracking-tight">
          Karya &amp; Rekam Jejak Rekayasa
        </h1>
        <p class="text-on-surface-variant text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          Daftar platform web, sistem cloud, dan produk digital yang telah kami bangun secara kustom dengan presisi rekayasa dan standar visual berbobot tinggi.
        </p>
      </div>

      <div class="space-y-12 sm:space-y-16">
        
        <!-- 1. PixelCraft Studio (Featured GPU Web App) -->
        <div 
          id="pixelcraft" 
          class="p-6 sm:p-10 rounded-2xl border transition-all space-y-8"
          :class="isDark 
            ? 'bg-[#191c1f] border-[#C239D8]/30 hover:border-[#C239D8]/70 hover:shadow-[0_0_35px_rgba(194,57,216,0.18)]' 
            : 'bg-white/95 border-slate-200/90 hover:border-fuchsia-300 shadow-[0_4px_24px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_40px_rgba(192,38,211,0.09)]'"
        >
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-outline-variant pb-4">
            <div class="flex items-center gap-2.5 flex-wrap">
              <span 
                class="text-xs font-mono font-semibold uppercase tracking-wider"
                :class="isDark ? 'text-stitch-magenta-light' : 'text-fuchsia-800 font-bold'"
              >
                WEB APP &amp; CLIENT-SIDE GPU
              </span>
            </div>
            <span class="text-xs font-mono text-on-surface-variant">WEBGL &amp; IN-BROWSER GPU</span>
          </div>

          <!-- Live Preview Window -->
          <div 
            class="rounded-lg overflow-hidden border"
            :class="isDark ? 'bg-[#0b0e11] border-[#C239D8]/30' : 'bg-slate-50 border-slate-200 shadow-sm'"
          >
            <div 
              class="px-4 py-2.5 flex items-center justify-between border-b text-xs font-mono" 
              :class="isDark ? 'bg-[#111417] border-outline-variant text-on-surface-variant' : 'bg-slate-100 border-slate-200 text-slate-600'"
            >
              <span class="truncate max-w-[160px] sm:max-w-sm">https://pixelcraft-psi-blue.vercel.app/</span>
              <span :class="isDark ? 'text-stitch-magenta font-semibold' : 'text-slate-700 font-semibold bg-white px-2 py-0.5 rounded border border-slate-200'">WebGL &amp; AI</span>
            </div>
            <div class="relative w-full overflow-hidden h-[240px] sm:h-[420px] bg-black">
              <img 
                src="/assets/projects/pixelcraft.png" 
                alt="PixelCraft Studio AI Live Preview" 
                class="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div class="lg:col-span-8 space-y-4">
              <h2 class="text-2xl sm:text-3xl font-headline font-semibold">
                PixelCraft Studio: Editor Foto &amp; Grafis Berbasis WebGL
              </h2>
              <p class="text-on-surface-variant text-base leading-relaxed">
                Aplikasi web photo editor yang memproses gambar langsung di browser pengguna. Menawarkan fitur penajaman gambar, pengurangan noise spasial, kompresi multi-format WebP/PNG, live RGB histogram, dan efek retro pixel art tanpa perlu unggah file ke server eksternal sehingga privasi terjaga 100%.
              </p>
              <div class="space-y-2.5 pt-2 text-sm font-medium">
                <div class="flex items-center gap-2.5">
                  <span class="material-symbols-outlined text-[18px] text-stitch-magenta shrink-0">check_circle</span>
                  <span>Privasi 100% Terjaga: Seluruh komputasi visual diproses lokal di peramban pengguna menggunakan akselerasi GPU &amp; WebGL.</span>
                </div>
                <div class="flex items-center gap-2.5">
                  <span class="material-symbols-outlined text-[18px] text-stitch-magenta shrink-0">check_circle</span>
                  <span>Fitur Lengkap: Penajaman gambar, filter denoise, kompresi ukuran file, split before-after preview, dan color adjustment.</span>
                </div>
              </div>
            </div>

            <div 
              class="lg:col-span-4 p-6 rounded-xl border space-y-4"
              :class="isDark ? 'bg-[#111417] border-[#2a2d31]' : 'bg-slate-50 border-slate-200'"
            >
              <div class="space-y-2 text-xs font-mono">
                <div class="text-on-surface-variant">TIPE PRODUK:</div>
                <div class="font-medium text-sm">Web Application</div>
                <div class="text-on-surface-variant pt-2">TEKNOLOGI:</div>
                <div class="font-medium">WebGL, Canvas API, WASM, Tailwind, Vite</div>
              </div>
              <div class="pt-2">
                <a 
                  href="https://pixelcraft-psi-blue.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="btn-stitch-primary w-full text-center text-xs uppercase font-bold py-3 px-4 flex items-center justify-center gap-2 group transition-all"
                >
                  <span>Buka PixelCraft Studio</span>
                  <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- 2. CatatKas (Real SaaS Project) -->
        <div 
          id="catatkas"
          class="p-6 sm:p-10 rounded-2xl border transition-all space-y-8"
          :class="isDark 
            ? 'bg-[#191c1f] border-[#7B68EE]/30 hover:border-[#7B68EE]/70 hover:shadow-[0_0_35px_rgba(123,104,238,0.18)]' 
            : 'bg-white/95 border-slate-200/90 hover:border-violet-300 shadow-[0_4px_24px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_40px_rgba(124,58,237,0.09)]'"
        >
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-outline-variant pb-4">
            <div class="flex items-center gap-2.5">
              <span 
                class="text-xs font-mono font-semibold uppercase tracking-wider"
                :class="isDark ? 'text-stitch-purple-light' : 'text-violet-800 font-bold'"
              >
                SAAS FINANSIAL &amp; KAS UMKM
              </span>
            </div>
            <span class="text-xs font-mono text-on-surface-variant">PWA &amp; DISTRIBUTED SYNC</span>
          </div>

          <div 
            class="rounded-lg overflow-hidden border"
            :class="isDark ? 'bg-[#0b0e11] border-[#7B68EE]/30' : 'bg-slate-50/80 border-slate-200/90 shadow-sm'"
          >
            <div 
              class="px-4 py-2.5 flex items-center justify-between border-b text-xs font-mono" 
              :class="isDark ? 'bg-[#111417] border-outline-variant text-on-surface-variant' : 'bg-slate-100 border-slate-200 text-slate-600'"
            >
              <span class="text-on-surface-variant truncate max-w-[160px] sm:max-w-sm">catatkas.internal.v2</span>
              <span :class="isDark ? 'text-stitch-purple font-semibold' : 'text-slate-700 font-semibold bg-white px-2 py-0.5 rounded border border-slate-200'">+38% EFISIENSI ARUS KAS</span>
            </div>
            <div class="relative w-full overflow-hidden h-[240px] sm:h-[420px] bg-black">
              <img 
                src="/assets/projects/catatkas.png" 
                alt="CatatKas Live Preview" 
                class="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div class="lg:col-span-8 space-y-4">
              <h2 class="text-2xl sm:text-3xl font-headline font-semibold">
                CatatKas: Platform Manajemen Keuangan &amp; Arus Kas
              </h2>
              <p class="text-on-surface-variant text-base leading-relaxed">
                Solusi pencatatan kas cerdas bagi pelaku usaha ritel dan UMKM dengan dukungan multi-outlet, kalkulasi laba bersih otomatis, struk digital WhatsApp, dan rekonsiliasi kas harian yang akurat.
              </p>
              <div class="space-y-2.5 pt-2 text-sm font-medium">
                <div class="flex items-center gap-2.5">
                  <span 
                    class="material-symbols-outlined text-[18px] shrink-0"
                    :class="isDark ? 'text-stitch-purple' : 'text-violet-700'"
                  >check_circle</span>
                  <span>Sinkronisasi data multi-perangkat secara otomatis tanpa latency.</span>
                </div>
                <div class="flex items-center gap-2.5">
                  <span 
                    class="material-symbols-outlined text-[18px] shrink-0"
                    :class="isDark ? 'text-stitch-purple' : 'text-violet-700'"
                  >check_circle</span>
                  <span>Export laporan keuangan instan ke format PDF dan Excel.</span>
                </div>
              </div>
            </div>

            <div 
              class="lg:col-span-4 p-6 rounded-xl border space-y-4"
              :class="isDark ? 'bg-[#111417] border-[#2a2d31]' : 'bg-slate-50/90 border-slate-200/80'"
            >
              <div class="space-y-2 text-xs font-mono">
                <div class="text-on-surface-variant">KATEGORI:</div>
                <div class="font-medium text-sm">SaaS Application</div>
                <div class="text-on-surface-variant pt-2">TEKNOLOGI:</div>
                <div class="font-medium">Vue 3, Tailwind, IndexedDB, Node.js</div>
              </div>
              <div class="pt-2">
                <router-link 
                  to="/kontak" 
                  class="btn-stitch-primary w-full text-center text-xs uppercase font-bold py-3 px-4 flex items-center justify-center gap-2 group transition-all"
                >
                  <span>Konsultasi Proyek Serupa</span>
                  <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- 3. Lentera Indramayu -->
        <div 
          class="p-6 sm:p-10 rounded-2xl border transition-all space-y-8"
          :class="isDark 
            ? 'bg-[#191c1f] border-[#99D4FF]/30 hover:border-[#99D4FF]/70 hover:shadow-[0_0_35px_rgba(153,212,255,0.18)]' 
            : 'bg-white/95 border-slate-200/90 hover:border-sky-300 shadow-[0_4px_24px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_40px_rgba(2,132,199,0.09)]'"
        >
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-outline-variant pb-4">
            <div class="flex items-center gap-2.5">
              <span 
                class="text-xs font-mono font-semibold uppercase tracking-wider"
                :class="isDark ? 'text-stitch-cyan-light' : 'text-sky-800 font-bold'"
              >
                PLATFORM PEMERINTAHAN &amp; PWA
              </span>
            </div>
            <span class="text-xs font-mono text-on-surface-variant">PORTAL LAYANAN PUBLIK</span>
          </div>

          <div 
            class="rounded-lg overflow-hidden border"
            :class="isDark ? 'bg-[#0b0e11] border-[#99D4FF]/30' : 'bg-slate-50 border-slate-200 shadow-sm'"
          >
            <div 
              class="px-4 py-2.5 flex items-center justify-between border-b text-xs font-mono" 
              :class="isDark ? 'bg-[#111417] border-outline-variant text-on-surface-variant' : 'bg-slate-100 border-slate-200 text-slate-600'"
            >
              <span class="text-on-surface-variant truncate max-w-[160px] sm:max-w-sm">https://lentera.indramayukab.go.id/</span>
              <span :class="isDark ? 'text-stitch-cyan font-semibold' : 'text-slate-700 font-semibold bg-white px-2 py-0.5 rounded border border-slate-200'">PWA Live</span>
            </div>
            <div class="relative w-full overflow-hidden h-[240px] sm:h-[420px] bg-black">
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
              <h2 class="text-2xl sm:text-3xl font-headline font-semibold">
                LENTERA — Pemerintah Kabupaten Indramayu
              </h2>
              <p class="text-on-surface-variant text-base leading-relaxed">
                Platform digital sentral Pemkab Indramayu yang mengintegrasikan layanan administrasi publik, keterbukaan informasi pemerintah, dan sektor ekonomi kerakyatan ke dalam satu Progressive Web App (PWA) yang tangguh.
              </p>
              <div class="space-y-2.5 pt-2 text-sm font-medium">
                <div class="flex items-center gap-2.5">
                  <span 
                    class="material-symbols-outlined text-[18px] shrink-0"
                    :class="isDark ? 'text-stitch-cyan' : 'text-sky-700'"
                  >check_circle</span>
                  <span>Aksesibilitas layanan informasi publik terpusat 24/7.</span>
                </div>
                <div class="flex items-center gap-2.5">
                  <span 
                    class="material-symbols-outlined text-[18px] shrink-0"
                    :class="isDark ? 'text-stitch-cyan' : 'text-sky-700'"
                  >check_circle</span>
                  <span>Dukungan instalasi PWA praktis di perangkat smartphone tanpa perlu app store.</span>
                </div>
              </div>
            </div>

            <div 
              class="lg:col-span-4 p-6 rounded-xl border space-y-4"
              :class="isDark ? 'bg-[#111417] border-[#2a2d31]' : 'bg-slate-50 border-slate-200'"
            >
              <div class="space-y-2 text-xs font-mono">
                <div class="text-on-surface-variant">INSTANSI:</div>
                <div class="font-medium text-sm">Pemerintah Kabupaten Indramayu</div>
                <div class="text-on-surface-variant pt-2">TEKNOLOGI:</div>
                <div class="font-medium">Laravel, PWA, REST API, MySQL</div>
              </div>
              <div class="pt-2">
                <a 
                  href="https://lentera.indramayukab.go.id/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="btn-stitch-primary w-full text-center text-xs uppercase font-bold py-3 px-4 flex items-center justify-center gap-2 group transition-all"
                >
                  <span>Kunjungi Website Live</span>
                  <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- 4. Portal Desa Tempursari -->
        <div 
          class="p-6 sm:p-10 rounded-2xl border transition-all space-y-8"
          :class="isDark 
            ? 'bg-[#191c1f] border-[#2a2d31] hover:border-[#484740]' 
            : 'bg-white/95 border-slate-200/90 hover:border-amber-300 shadow-[0_4px_24px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_40px_rgba(217,119,6,0.09)]'"
        >
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-outline-variant pb-4">
            <div class="flex items-center gap-2.5">
              <span 
                class="text-xs font-mono font-semibold uppercase tracking-wider"
                :class="isDark ? 'text-stitch-amber' : 'text-amber-800 font-bold'"
              >
                PORTAL PEMERINTAH DESA &amp; PETA
              </span>
            </div>
            <span class="text-xs font-mono text-on-surface-variant">LIVE PRODUCTION ENVIRONMENT</span>
          </div>

          <div 
            class="rounded-lg overflow-hidden border"
            :class="isDark ? 'bg-[#0b0e11] border-outline-variant' : 'bg-slate-50/80 border-slate-200/90 shadow-sm'"
          >
            <div 
              class="px-4 py-2.5 flex items-center justify-between border-b text-xs font-mono" 
              :class="isDark ? 'bg-[#111417] border-outline-variant text-on-surface-variant' : 'bg-slate-100 border-slate-200 text-slate-600'"
            >
              <span class="text-on-surface-variant truncate max-w-[160px] sm:max-w-sm">https://portal-desa-tempursari-six.vercel.app/</span>
              <span :class="isDark ? 'text-stitch-amber font-semibold' : 'text-slate-700 font-semibold bg-white px-2 py-0.5 rounded border border-slate-200'">Portal Resmi</span>
            </div>
            <div class="relative w-full overflow-hidden h-[240px] sm:h-[420px] bg-black">
              <img 
                src="/assets/projects/tempursari.png" 
                alt="Portal Desa Tempursari Live Preview" 
                class="w-full h-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div class="lg:col-span-8 space-y-4">
              <h2 class="text-2xl sm:text-3xl font-headline font-semibold">
                Portal Desa Tempursari: Tata Kelola &amp; Peta Digital
              </h2>
              <p class="text-on-surface-variant text-base leading-relaxed">
                Website resmi Pemerintah Desa Tempursari yang dirancang untuk mewujudkan transparansi tata kelola wilayah, infografis data kependudukan, serta katalog kebudayaan dan potensi ekonomi desa.
              </p>
            </div>

            <div 
              class="lg:col-span-4 p-6 rounded-xl border space-y-4"
              :class="isDark ? 'bg-[#111417] border-[#2a2d31]' : 'bg-slate-50/90 border-slate-200/80'"
            >
              <div class="space-y-2 text-xs font-mono">
                <div class="text-on-surface-variant">INSTANSI:</div>
                <div class="font-medium text-sm">Pemerintah Desa Tempursari</div>
                <div class="text-on-surface-variant pt-2">TEKNOLOGI:</div>
                <div class="font-medium">Next.js, TailwindCSS, Interactive Maps</div>
              </div>
              <div class="pt-2">
                <a 
                  href="https://portal-desa-tempursari-six.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="btn-stitch-primary w-full text-center text-xs uppercase font-bold py-3 px-4 flex items-center justify-center gap-2 group transition-all"
                >
                  <span>Kunjungi Website Live</span>
                  <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- 5. Visit Gumiwang -->
        <div 
          class="p-6 sm:p-10 rounded-2xl border transition-all space-y-8"
          :class="isDark 
            ? 'bg-[#191c1f] border-[#2a2d31] hover:border-[#484740]' 
            : 'bg-white/95 border-slate-200/90 hover:border-emerald-300 shadow-[0_4px_24px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_40px_rgba(16,185,129,0.09)]'"
        >
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-outline-variant pb-4">
            <div class="flex items-center gap-2.5">
              <span 
                class="text-xs font-mono font-semibold uppercase tracking-wider"
                :class="isDark ? 'text-emerald-400' : 'text-emerald-800 font-bold'"
              >
                DESA WISATA &amp; UMKM
              </span>
            </div>
            <span class="text-xs font-mono text-on-surface-variant">PORTAL WISATA &amp; EKONOMI</span>
          </div>

          <div 
            class="rounded-lg overflow-hidden border"
            :class="isDark ? 'bg-[#0b0e11] border-outline-variant' : 'bg-slate-50/80 border-slate-200/90 shadow-sm'"
          >
            <div 
              class="px-4 py-2.5 flex items-center justify-between border-b text-xs font-mono" 
              :class="isDark ? 'bg-[#111417] border-outline-variant text-on-surface-variant' : 'bg-slate-100 border-slate-200 text-slate-600'"
            >
              <span class="text-on-surface-variant truncate max-w-[160px] sm:max-w-sm">https://visitgumiwang.web.id/</span>
              <span :class="isDark ? 'text-emerald-400 font-semibold' : 'text-slate-700 font-semibold bg-white px-2 py-0.5 rounded border border-slate-200'">Desa Wisata</span>
            </div>
            <div class="relative w-full overflow-hidden h-[240px] sm:h-[420px] bg-black">
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
              <h2 class="text-2xl sm:text-3xl font-headline font-semibold">
                Visit Gumiwang: Potensi Wisata &amp; Produk UMKM
              </h2>
              <p class="text-on-surface-variant text-base leading-relaxed">
                Website promosi potensi lokal Desa Gumiwang. Menampilkan kekayaan alam, sektor perikanan, agrikultur terpadu, dan etalase digital katalog produk UMKM setempat.
              </p>
            </div>

            <div 
              class="lg:col-span-4 p-6 rounded-xl border space-y-4"
              :class="isDark ? 'bg-[#111417] border-[#2a2d31]' : 'bg-slate-50/90 border-slate-200/80'"
            >
              <div class="space-y-2 text-xs font-mono">
                <div class="text-on-surface-variant">KLIEN:</div>
                <div class="font-medium text-sm">Pengelola Desa Wisata Gumiwang</div>
                <div class="text-on-surface-variant pt-2">TEKNOLOGI:</div>
                <div class="font-medium">Vue.js, Vite, TailwindCSS, SEO Engine</div>
              </div>
              <div class="pt-2">
                <a 
                  href="https://visitgumiwang.web.id/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="btn-stitch-primary w-full text-center text-xs uppercase font-bold py-3 px-4 flex items-center justify-center gap-2 group transition-all"
                >
                  <span>Kunjungi Website Live</span>
                  <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
import { isDark } from '../utils/theme'
</script>
