<template>
  <div class="transition-colors duration-300">

    <!-- HERO SECTION (Stitch Human Craft & Precision) -->
    <section class="max-w-7xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28">
      <div class="max-w-4xl">
        <!-- Stitch Category Badge -->
        <div 
          class="inline-flex items-center px-4 py-1.5 mb-8 rounded-full border shadow-sm transition-all"
          :class="isDark 
            ? 'border-stitch-magenta/40 bg-[#191c1f]/90 text-white shadow-[0_0_15px_rgba(194,57,216,0.15)]' 
            : 'border-fuchsia-200/90 bg-white/95 text-slate-800 shadow-[0_2px_14px_rgba(192,38,211,0.08)]'"
        >
          <span class="w-1.5 h-1.5 rounded-full mr-2.5" :class="isDark ? 'bg-stitch-magenta' : 'bg-fuchsia-600'"></span>
          <span 
            class="text-xs font-semibold tracking-wide"
            :style="isDark 
              ? 'background: linear-gradient(135deg, #ffd6fd, #c8e6ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent;' 
              : 'color: #0f172a;'"
          >
            Studio Rekayasa &amp; Desain Produk Digital
          </span>
        </div>

        <!-- Display Headline with Stitch Chromatic Gradients -->
        <h1 class="font-headline text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.12]">
          Membangun produk digital <span class="text-gradient-stitch">berkinerja tinggi</span> untuk brand &amp; <span class="text-gradient-cyan">bisnis visioner</span>.
        </h1>

        <!-- Narrative Subhead -->
        <p class="mt-8 text-lg sm:text-xl text-on-surface-variant leading-relaxed max-w-2xl font-normal">
          Kami memadukan disiplin rekayasa piranti lunak kelas industri dengan kepekaan desain berstandar global. Membangun platform web, arsitektur cloud, dan sistem mobile berdaya tahan nyata tanpa kompromi performa.
        </p>

        <!-- CTA Actions -->
        <div class="mt-10 flex flex-wrap items-center gap-4">
          <a 
            href="https://wa.me/62895800286901?text=Halo%20Nexa%20Digital%20Agency,%20saya%20ingin%20konsultasi%20mengenai%20proyek%20digital."
            target="_blank"
            rel="noopener noreferrer"
            class="btn-stitch-primary px-6 py-3.5 text-sm font-bold group"
          >
            <span>Konsultasi Proyek (WhatsApp)</span>
            <span class="material-symbols-outlined text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">arrow_outward</span>
          </a>

          <a 
            href="mailto:nexadigitalagency40@gmail.com" 
            class="btn-stitch-secondary px-6 py-3.5 text-sm font-medium"
          >
            <span class="material-symbols-outlined text-base" :class="isDark ? 'text-[#9d9fa6]' : 'text-[#44474a]'">mail</span>
            <span>nexadigitalagency40@gmail.com</span>
          </a>
        </div>
      </div>

      <!-- 3 Focus Cards (Hero Reel) -->
      <div class="mt-16 pt-8 border-t border-outline-variant grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Focus 1 -->
        <div 
          class="p-6 rounded-lg border relative overflow-hidden transition-all group flex flex-col justify-between"
          :class="isDark 
            ? 'bg-[#191c1f] border-[#2a2d31] hover:border-[#C239D8]/50 hover:shadow-[0_0_20px_rgba(194,57,216,0.15)]' 
            : 'bg-white/95 border-slate-200/90 hover:border-fuchsia-300 shadow-[0_4px_24px_rgba(15,23,42,0.04)] hover:shadow-[0_16px_36px_rgba(192,38,211,0.09)]'"
        >
          <div class="absolute top-0 left-0 right-0 h-[2px]" style="background: linear-gradient(90deg, #C239D8, transparent);"></div>
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs uppercase tracking-widest font-semibold" :style="isDark ? 'color: #faabff;' : 'color: #9d174d;'">Fokus 01</span>
              <div 
                class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border"
                :class="isDark ? 'bg-[#272a2d] border-[#484740] text-stitch-magenta' : 'bg-fuchsia-50 border-fuchsia-100 text-fuchsia-700'"
              >
                <span class="material-symbols-outlined text-[18px]">terminal</span>
              </div>
            </div>
            <div class="text-base font-semibold transition-colors" :class="isDark ? 'group-hover:text-stitch-magenta-light' : 'group-hover:text-fuchsia-800'">
              Engineering Presisi
            </div>
            <p class="mt-2 text-sm text-on-surface-variant leading-relaxed">
              Arsitektur terukur, pemrosesan deterministik, dan standar keamanan data tanpa ketergantungan library fiktif.
            </p>
          </div>
          <div class="mt-5 pt-3 border-t border-outline-variant/60 flex items-center gap-1.5 text-xs text-on-surface-variant font-mono">
            <span class="w-1.5 h-1.5 rounded-full" :class="isDark ? 'bg-stitch-magenta' : 'bg-fuchsia-600'"></span>
            <span>Zero Slop Architecture</span>
          </div>
        </div>

        <!-- Focus 2 -->
        <div 
          class="p-6 rounded-lg border relative overflow-hidden transition-all group flex flex-col justify-between"
          :class="isDark 
            ? 'bg-[#191c1f] border-[#2a2d31] hover:border-[#7B68EE]/50 hover:shadow-[0_0_20px_rgba(123,104,238,0.15)]' 
            : 'bg-white/95 border-slate-200/90 hover:border-violet-300 shadow-[0_4px_24px_rgba(15,23,42,0.04)] hover:shadow-[0_16px_36px_rgba(124,58,237,0.09)]'"
        >
          <div class="absolute top-0 left-0 right-0 h-[2px]" style="background: linear-gradient(90deg, #C239D8, #99D4FF);"></div>
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs uppercase tracking-widest font-semibold" :style="isDark ? 'color: #cabeff;' : 'color: #6d28d9;'">Fokus 02</span>
              <div 
                class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border"
                :class="isDark ? 'bg-[#272a2d] border-[#484740] text-stitch-purple' : 'bg-violet-50 border-violet-100 text-violet-700'"
              >
                <span class="material-symbols-outlined text-[18px]">draw</span>
              </div>
            </div>
            <div class="text-base font-semibold transition-colors" :class="isDark ? 'group-hover:text-stitch-purple-light' : 'group-hover:text-violet-800'">
              Hierarki &amp; Kejelasan
            </div>
            <p class="mt-2 text-sm text-on-surface-variant leading-relaxed">
              Desain visual berbobot editorial yang memprioritaskan fungsi, kenyamanan membaca, dan konversi bisnis nyata.
            </p>
          </div>
          <div class="mt-5 pt-3 border-t border-outline-variant/60 flex items-center gap-1.5 text-xs text-on-surface-variant font-mono">
            <span class="w-1.5 h-1.5 rounded-full" :class="isDark ? 'bg-stitch-purple' : 'bg-violet-600'"></span>
            <span>Swiss Editorial Standards</span>
          </div>
        </div>

        <!-- Focus 3 -->
        <div 
          class="p-6 rounded-lg border relative overflow-hidden transition-all group flex flex-col justify-between"
          :class="isDark 
            ? 'bg-[#191c1f] border-[#2a2d31] hover:border-[#99D4FF]/50 hover:shadow-[0_0_20px_rgba(153,212,255,0.15)]' 
            : 'bg-white/95 border-slate-200/90 hover:border-sky-300 shadow-[0_4px_24px_rgba(15,23,42,0.04)] hover:shadow-[0_16px_36px_rgba(2,132,199,0.09)]'"
        >
          <div class="absolute top-0 left-0 right-0 h-[2px]" style="background: linear-gradient(90deg, transparent, #99D4FF);"></div>
          <div>
            <div class="flex items-center justify-between mb-4">
              <span class="text-xs uppercase tracking-widest font-semibold" :style="isDark ? 'color: #92cdf8;' : 'color: #0369a1;'">Fokus 03</span>
              <div 
                class="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border"
                :class="isDark ? 'bg-[#272a2d] border-[#484740] text-stitch-cyan' : 'bg-sky-50 border-sky-100 text-sky-700'"
              >
                <span class="material-symbols-outlined text-[18px]">lock_open</span>
              </div>
            </div>
            <div class="text-base font-semibold transition-colors" :class="isDark ? 'group-hover:text-stitch-cyan-light' : 'group-hover:text-sky-800'">
              100% Kepemilikan Klien
            </div>
            <p class="mt-2 text-sm text-on-surface-variant leading-relaxed">
              Seluruh repositori, dokumentasi, dan aset adalah aset privat Anda tanpa biaya tersembunyi atau lock-in vendor.
            </p>
          </div>
          <div class="mt-5 pt-3 border-t border-outline-variant/60 flex items-center gap-1.5 text-xs text-on-surface-variant font-mono">
            <span class="w-1.5 h-1.5 rounded-full" :class="isDark ? 'bg-stitch-cyan' : 'bg-sky-600'"></span>
            <span>Bebas Migrasi Kapan Pun</span>
          </div>
        </div>
      </div>
    </section>

    <!-- TRUST LOGO BAR -->
    <section class="border-y py-8 transition-colors" :class="isDark ? 'bg-[#0b0e11] border-outline-variant' : 'bg-gradient-to-r from-slate-50/90 via-white to-slate-50/90 border-slate-200 shadow-[inset_0_1px_3px_rgba(0,0,0,0.02)]'">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <p class="text-xs uppercase tracking-widest text-on-surface-variant font-semibold shrink-0">
            Dipercaya oleh tim, UMKM &amp; bisnis modern
          </p>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center text-on-surface-variant opacity-80 font-headline font-semibold text-xs sm:text-sm tracking-wider">
            <span class="hover:text-stitch-magenta transition-colors">PIXELCRAFT LABS</span>
            <span class="hover:text-stitch-cyan transition-colors">CATATKAS SAAS</span>
            <span class="hover:text-stitch-purple transition-colors">LENTERA DIGITAL</span>
            <span class="hover:text-stitch-amber transition-colors">GUMIWANG MEDIA</span>
          </div>
        </div>
      </div>
    </section>

    <!-- SELECTED WORKS SECTION (Studi Kasus & Karya Nyata dengan Mockup Asli) -->
    <section class="max-w-7xl mx-auto px-6 py-20 md:py-28" id="karya">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-outline-variant gap-4">
        <div>
          <span class="text-xs uppercase tracking-widest text-on-surface-variant font-semibold">01 // Portofolio Pilihan</span>
          <h2 class="mt-3 font-headline text-3xl sm:text-4xl font-semibold tracking-tight">Studi Kasus &amp; Karya Nyata</h2>
        </div>
        <p class="text-sm text-on-surface-variant max-w-md leading-relaxed">
          Eksplorasi sistem perangkat lunak yang dirancang dan diproduksi untuk memecahkan tantangan operasional dan skala bisnis.
        </p>
      </div>

      <div class="space-y-16">
        
        <!-- Work 01: PixelCraft Studio (Real Project) -->
        <article 
          class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 md:p-12 rounded-xl border transition-all relative overflow-hidden"
          :class="isDark 
            ? 'bg-[#191c1f] border-[#C239D8]/30 hover:border-[#C239D8]/70 hover:shadow-[0_0_35px_rgba(194,57,216,0.18)]' 
            : 'bg-white/95 border-slate-200/90 hover:border-fuchsia-300 shadow-[0_4px_24px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_40px_rgba(192,38,211,0.09)]'"
        >
          <div class="lg:col-span-5 space-y-5">
            <div class="flex items-center gap-3 text-xs tracking-wider uppercase font-semibold">
              <span 
                class="px-2.5 py-0.5 rounded font-mono border"
                :class="isDark ? 'border-[#C239D8]/40 bg-[#C239D8]/10 text-stitch-magenta-light' : 'border-fuchsia-200 bg-fuchsia-50 text-fuchsia-800 font-semibold'"
              >
                Web App &amp; Client-Side GPU
              </span>
              <span>•</span>
              <span class="text-on-surface-variant font-mono">2024</span>
            </div>

            <h3 class="font-headline text-2xl sm:text-3xl font-semibold tracking-tight">
              PixelCraft Studio — Editor Foto &amp; Grafis Berbasis WebGL
            </h3>

            <p class="text-sm sm:text-base text-on-surface-variant leading-relaxed">
              Aplikasi web photo editor yang memproses komputasi citra langsung di browser pengguna dengan akselerasi WebGL &amp; GPU. Menawarkan penajaman gambar, filter denoise, kompresi multi-format WebP/PNG, dan live histogram tanpa upload ke server eksternal demi privasi 100%.
            </p>

            <div class="pt-2 flex flex-wrap gap-2 text-xs font-mono">
              <span class="px-2.5 py-1 rounded border" :class="isDark ? 'bg-[#1d2023] border-outline-variant text-on-surface-variant' : 'bg-slate-50/90 border-slate-200/80 text-slate-700'">WebGL GPU</span>
              <span class="px-2.5 py-1 rounded border" :class="isDark ? 'bg-[#1d2023] border-outline-variant text-on-surface-variant' : 'bg-slate-50/90 border-slate-200/80 text-slate-700'">Client-Side Privacy</span>
              <span class="px-2.5 py-1 rounded border" :class="isDark ? 'bg-[#1d2023] border-outline-variant text-on-surface-variant' : 'bg-slate-50/90 border-slate-200/80 text-slate-700'">WebP / PNG Engine</span>
            </div>

            <div class="pt-4 flex items-center gap-4">
              <a 
                href="https://pixelcraft-psi-blue.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="inline-flex items-center gap-2 text-sm font-semibold hover:underline group"
                :class="isDark ? 'text-stitch-cyan' : 'text-[#111417] hover:text-fuchsia-700 font-bold'"
              >
                <span>Buka PixelCraft Live</span>
                <span class="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </a>
              <router-link 
                to="/portofolio" 
                class="text-xs transition-colors"
                :class="isDark ? 'text-on-surface-variant hover:text-white' : 'text-[#44474a] hover:text-[#161c24] font-medium'"
              >
                Detail Studi Kasus
              </router-link>
            </div>
          </div>

          <div class="lg:col-span-7">
            <div 
              class="rounded-lg overflow-hidden border group relative"
              :class="isDark ? 'bg-[#0b0e11] border-[#C239D8]/30 shadow-md' : 'bg-slate-50/80 border-slate-200/90 shadow-sm'"
            >
              <div 
                class="px-4 py-2 border-b flex items-center justify-between text-xs font-mono" 
                :class="isDark ? 'bg-[#111417] border-outline-variant text-on-surface-variant' : 'bg-slate-100 border-slate-200 text-slate-600'"
              >
                <span class="truncate max-w-xs">https://pixelcraft-psi-blue.vercel.app/</span>
                <span :class="isDark ? 'text-stitch-magenta font-semibold' : 'text-slate-700 font-semibold bg-white px-2 py-0.5 rounded border border-slate-200'">WebGL &amp; AI</span>
              </div>
              <img 
                src="/assets/projects/pixelcraft.png" 
                alt="PixelCraft Studio Live App" 
                class="w-full h-72 sm:h-96 object-cover object-top opacity-95 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500" 
              />
            </div>
          </div>
        </article>

        <!-- Work 02: CatatKas (Real Project Adapted) -->
        <article 
          class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 md:p-12 rounded-xl border transition-all relative overflow-hidden"
          :class="isDark 
            ? 'bg-[#191c1f] border-[#7B68EE]/30 hover:border-[#7B68EE]/70 hover:shadow-[0_0_35px_rgba(123,104,238,0.18)]' 
            : 'bg-white/95 border-slate-200/90 hover:border-violet-300 shadow-[0_4px_24px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_40px_rgba(124,58,237,0.09)]'"
        >
          <div class="lg:col-span-7 order-2 lg:order-1">
            <div 
              class="rounded-lg overflow-hidden border group relative"
              :class="isDark ? 'bg-[#0b0e11] border-[#7B68EE]/30 shadow-md' : 'bg-slate-50/80 border-slate-200/90 shadow-sm'"
            >
              <div 
                class="px-4 py-2 border-b flex items-center justify-between text-xs font-mono" 
                :class="isDark ? 'bg-[#111417] border-outline-variant text-on-surface-variant' : 'bg-slate-100 border-slate-200 text-slate-600'"
              >
                <span class="font-mono">catatkas.internal.v2</span>
                <span :class="isDark ? 'text-stitch-purple font-semibold' : 'text-slate-700 font-semibold bg-white px-2 py-0.5 rounded border border-slate-200'">+38% EFISIENSI ARUS KAS</span>
              </div>
              <img 
                src="/assets/projects/catatkas.png" 
                alt="CatatKas SaaS App" 
                class="w-full h-72 sm:h-96 object-cover object-top opacity-95 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500" 
              />
            </div>
          </div>

          <div class="lg:col-span-5 order-1 lg:order-2 space-y-5">
            <div class="flex items-center gap-3 text-xs tracking-wider uppercase font-semibold">
              <span 
                class="px-2.5 py-0.5 rounded font-mono border"
                :class="isDark ? 'border-[#7B68EE]/40 bg-[#7B68EE]/10 text-stitch-purple-light' : 'border-violet-200 bg-violet-50 text-violet-800 font-semibold'"
              >
                SaaS &amp; Finansial UMKM
              </span>
              <span>•</span>
              <span class="text-on-surface-variant font-mono">2024</span>
            </div>

            <h3 class="font-headline text-2xl sm:text-3xl font-semibold tracking-tight">
              CatatKas — Sistem Pembukuan &amp; Arus Kas Terintegrasi
            </h3>

            <p class="text-sm sm:text-base text-on-surface-variant leading-relaxed">
              Sistem pencatatan kas dan pembukuan keuangan real-time untuk UMKM dan bisnis multi-outlet. Memangkas rekonsiliasi manual hingga 38% dengan sinkronisasi instan, pencetakan struk digital, dan visualisasi grafik laba rugi berkala.
            </p>

            <div class="pt-2 flex flex-wrap gap-2 text-xs font-mono">
              <span class="px-2.5 py-1 rounded border" :class="isDark ? 'bg-[#1d2023] border-outline-variant text-on-surface-variant' : 'bg-slate-50/90 border-slate-200/80 text-slate-700'">Cloud DB</span>
              <span class="px-2.5 py-1 rounded border" :class="isDark ? 'bg-[#1d2023] border-outline-variant text-on-surface-variant' : 'bg-slate-50/90 border-slate-200/80 text-slate-700'">Realtime Sync</span>
              <span class="px-2.5 py-1 rounded border" :class="isDark ? 'bg-[#1d2023] border-outline-variant text-on-surface-variant' : 'bg-slate-50/90 border-slate-200/80 text-slate-700'">PWA Mobile-First</span>
            </div>

            <div class="pt-4">
              <router-link 
                to="/portofolio" 
                class="inline-flex items-center gap-2 text-sm font-semibold hover:underline group"
                :class="isDark ? 'text-stitch-purple-light' : 'text-[#111417] hover:text-violet-700 font-bold'"
              >
                <span>Pelajari Studi Kasus</span>
                <span class="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </router-link>
            </div>
          </div>
        </article>

        <!-- Work 03: Lentera Digital (Real Project Adapted) -->
        <article 
          class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 md:p-12 rounded-xl border transition-all relative overflow-hidden"
          :class="isDark 
            ? 'bg-[#191c1f] border-[#99D4FF]/30 hover:border-[#99D4FF]/70 hover:shadow-[0_0_35px_rgba(153,212,255,0.18)]' 
            : 'bg-white/95 border-slate-200/90 hover:border-sky-300 shadow-[0_4px_24px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_40px_rgba(2,132,199,0.09)]'"
        >
          <div class="lg:col-span-5 space-y-5">
            <div class="flex items-center gap-3 text-xs tracking-wider uppercase font-semibold">
              <span 
                class="px-2.5 py-0.5 rounded font-mono border"
                :class="isDark ? 'border-[#99D4FF]/40 bg-[#99D4FF]/10 text-stitch-cyan-light' : 'border-sky-200 bg-sky-50 text-sky-800 font-semibold'"
              >
                Media &amp; Publikasi
              </span>
              <span>•</span>
              <span class="text-on-surface-variant font-mono">2025</span>
            </div>

            <h3 class="font-headline text-2xl sm:text-3xl font-semibold tracking-tight">
              Lentera Digital — Platform Media &amp; Informasi Edukasi Publik
            </h3>

            <p class="text-sm sm:text-base text-on-surface-variant leading-relaxed">
              Portal edukasi dan informasi publik dengan integrasi arsitektur headless modern dan edge caching. Menghasilkan skor 99+ di Google PageSpeed dengan waktu pemuatan di bawah 1 detik bahkan pada jaringan mobile terbatas.
            </p>

            <div class="pt-2 flex flex-wrap gap-2 text-xs font-mono">
              <span class="px-2.5 py-1 rounded border" :class="isDark ? 'bg-[#1d2023] border-outline-variant text-on-surface-variant' : 'bg-slate-50/90 border-slate-200/80 text-slate-700'">Headless Architecture</span>
              <span class="px-2.5 py-1 rounded border" :class="isDark ? 'bg-[#1d2023] border-outline-variant text-on-surface-variant' : 'bg-slate-50/90 border-slate-200/80 text-slate-700'">Edge CDN Caching</span>
              <span class="px-2.5 py-1 rounded border" :class="isDark ? 'bg-[#1d2023] border-outline-variant text-on-surface-variant' : 'bg-slate-50/90 border-slate-200/80 text-slate-700'">Zero Latency</span>
            </div>

            <div class="pt-4">
              <router-link 
                to="/portofolio" 
                class="inline-flex items-center gap-2 text-sm font-semibold hover:underline group"
                :class="isDark ? 'text-stitch-cyan' : 'text-[#111417] hover:text-sky-700 font-bold'"
              >
                <span>Pelajari Studi Kasus</span>
                <span class="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </router-link>
            </div>
          </div>

          <div class="lg:col-span-7">
            <div 
              class="rounded-lg overflow-hidden border group relative"
              :class="isDark ? 'bg-[#0b0e11] border-[#99D4FF]/30 shadow-md' : 'bg-slate-50/80 border-slate-200/90 shadow-sm'"
            >
              <div 
                class="px-4 py-2 border-b flex items-center justify-between text-xs font-mono" 
                :class="isDark ? 'bg-[#111417] border-outline-variant text-on-surface-variant' : 'bg-slate-100 border-slate-200 text-slate-600'"
              >
                <span class="font-mono">lentera.digital.hub</span>
                <span :class="isDark ? 'text-stitch-cyan font-semibold' : 'text-slate-700 font-semibold bg-white px-2 py-0.5 rounded border border-slate-200'">PAGESPEED 99+</span>
              </div>
              <img 
                src="/assets/projects/lentera.png" 
                alt="Lentera Digital Portal" 
                class="w-full h-72 sm:h-96 object-cover object-top opacity-95 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500" 
              />
            </div>
          </div>
        </article>

      </div>
    </section>

    <!-- 02 // KAPABILITAS STUDIO (Layanan Rekayasa & Desain Produk) -->
    <section class="border-t py-20 md:py-28 transition-colors" :class="isDark ? 'bg-[#0b0e11] border-outline-variant' : 'bg-gradient-to-b from-[#f8f9ff] via-[#eff4ff]/60 to-[#f8f9ff] border-slate-200/80'" id="layanan">
      <div class="max-w-7xl mx-auto px-6">
        <div class="max-w-2xl mb-16">
          <span class="text-xs uppercase tracking-widest text-on-surface-variant font-semibold">02 // Kapabilitas Studio</span>
          <h2 class="mt-3 font-headline text-3xl sm:text-4xl font-semibold tracking-tight">
            Layanan Rekayasa &amp; Desain Produk
          </h2>
          <p class="mt-3 text-sm sm:text-base text-on-surface-variant leading-relaxed">
            Kombinasi terpadu riset arsitektur perangkat lunak, eksekusi rekayasa presisi, dan desain antarmuka yang tahan terhadap perkembangan zaman.
          </p>
        </div>

        <!-- 2x2 Services Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <!-- Service 1 -->
          <div 
            class="p-8 rounded-xl border flex flex-col justify-between transition-all group"
            :class="isDark 
              ? 'bg-[#191c1f] border-[#2a2d31] hover:border-stitch-magenta/50' 
              : 'bg-white/95 border-slate-200/90 hover:border-fuchsia-300 shadow-[0_4px_24px_rgba(15,23,42,0.04)] hover:shadow-[0_16px_36px_rgba(192,38,211,0.08)]'"
          >
            <div>
              <div 
                class="w-12 h-12 rounded-lg flex items-center justify-center mb-6 border"
                :class="isDark ? 'bg-[#272a2d] border-[#484740] text-stitch-magenta' : 'bg-fuchsia-50/90 border-fuchsia-200/80 text-fuchsia-700 shadow-sm'"
              >
                <span class="material-symbols-outlined text-2xl text-stitch-magenta">devices</span>
              </div>
              <h3 class="font-headline text-xl font-semibold mb-3">
                Web &amp; SaaS Engineering
              </h3>
              <p class="text-sm text-on-surface-variant leading-relaxed">
                Pengembangan aplikasi web berskala enterprise, portal SaaS, dashboard analitik, dan arsitektur frontend performa tinggi dengan fokus pada render time kilat dan maintainability jangka panjang.
              </p>
            </div>
            <div class="mt-6 pt-4 border-t border-outline-variant/50 flex flex-wrap gap-2 text-xs font-mono text-on-surface-variant">
              <span class="px-2 py-0.5 rounded border" :class="isDark ? 'bg-[#111417] border-outline-variant' : 'bg-slate-50/90 border-slate-200/80 text-slate-700'">React / Vue 3</span>
              <span class="px-2 py-0.5 rounded border" :class="isDark ? 'bg-[#111417] border-outline-variant' : 'bg-slate-50/90 border-slate-200/80 text-slate-700'">Node &amp; Go</span>
              <span class="px-2 py-0.5 rounded border" :class="isDark ? 'bg-[#111417] border-outline-variant' : 'bg-slate-50/90 border-slate-200/80 text-slate-700'">High Concurrency</span>
            </div>
          </div>

          <!-- Service 2 -->
          <div 
            class="p-8 rounded-xl border flex flex-col justify-between transition-all group"
            :class="isDark 
              ? 'bg-[#191c1f] border-[#2a2d31] hover:border-stitch-purple/50' 
              : 'bg-white/95 border-slate-200/90 hover:border-violet-300 shadow-[0_4px_24px_rgba(15,23,42,0.04)] hover:shadow-[0_16px_36px_rgba(124,58,237,0.08)]'"
          >
            <div>
              <div 
                class="w-12 h-12 rounded-lg flex items-center justify-center mb-6 border"
                :class="isDark ? 'bg-[#272a2d] border-[#484740] text-stitch-purple' : 'bg-violet-50/90 border-violet-200/80 text-violet-700 shadow-sm'"
              >
                <span class="material-symbols-outlined text-2xl text-stitch-purple">phone_iphone</span>
              </div>
              <h3 class="font-headline text-xl font-semibold mb-3">
                Mobile Applications (iOS &amp; Android)
              </h3>
              <p class="text-sm text-on-surface-variant leading-relaxed">
                Aplikasi mobile multiplatform native-level yang halus dan stabil. Kami membangun ekosistem mobile dengan pemrosesan offline-first, sinkronisasi background, dan animasi gesture yang presisi.
              </p>
            </div>
            <div class="mt-6 pt-4 border-t border-outline-variant/50 flex flex-wrap gap-2 text-xs font-mono text-on-surface-variant">
              <span class="px-2 py-0.5 rounded border" :class="isDark ? 'bg-[#111417] border-outline-variant' : 'bg-slate-50/90 border-slate-200/80 text-slate-700'">Flutter Multiplatform</span>
              <span class="px-2 py-0.5 rounded border" :class="isDark ? 'bg-[#111417] border-outline-variant' : 'bg-slate-50/90 border-slate-200/80 text-slate-700'">Offline-First Engine</span>
              <span class="px-2 py-0.5 rounded border" :class="isDark ? 'bg-[#111417] border-outline-variant' : 'bg-slate-50/90 border-slate-200/80 text-slate-700'">Seamless Sync</span>
            </div>
          </div>

          <!-- Service 3 -->
          <div 
            class="p-8 rounded-xl border flex flex-col justify-between transition-all group"
            :class="isDark 
              ? 'bg-[#191c1f] border-[#2a2d31] hover:border-stitch-cyan/50' 
              : 'bg-white/95 border-slate-200/90 hover:border-sky-300 shadow-[0_4px_24px_rgba(15,23,42,0.04)] hover:shadow-[0_16px_36px_rgba(2,132,199,0.08)]'"
          >
            <div>
              <div 
                class="w-12 h-12 rounded-lg flex items-center justify-center mb-6 border"
                :class="isDark ? 'bg-[#272a2d] border-[#484740] text-stitch-cyan' : 'bg-sky-50/90 border-sky-200/80 text-sky-700 shadow-sm'"
              >
                <span class="material-symbols-outlined text-2xl text-stitch-cyan">auto_fix_high</span>
              </div>
              <h3 class="font-headline text-xl font-semibold mb-3">
                Design Systems &amp; Digital Branding
              </h3>
              <p class="text-sm text-on-surface-variant leading-relaxed">
                Perancangan identitas visual fungsional dan fondasi design token terpadu. Memungkinkan konsistensi antarmuka skala besar antar tim developer dan tim produk tanpa friksi implementasi.
              </p>
            </div>
            <div class="mt-6 pt-4 border-t border-outline-variant/50 flex flex-wrap gap-2 text-xs font-mono text-on-surface-variant">
              <span class="px-2 py-0.5 rounded border" :class="isDark ? 'bg-[#111417] border-outline-variant' : 'bg-slate-50/90 border-slate-200/80 text-slate-700'">Design Tokens</span>
              <span class="px-2 py-0.5 rounded border" :class="isDark ? 'bg-[#111417] border-outline-variant' : 'bg-slate-50/90 border-slate-200/80 text-slate-700'">Figma Components</span>
              <span class="px-2 py-0.5 rounded border" :class="isDark ? 'bg-[#111417] border-outline-variant' : 'bg-slate-50/90 border-slate-200/80 text-slate-700'">WCAG Accessible</span>
            </div>
          </div>

          <!-- Service 4 -->
          <div 
            class="p-8 rounded-xl border flex flex-col justify-between transition-all group"
            :class="isDark 
              ? 'bg-[#191c1f] border-[#2a2d31] hover:border-stitch-amber/50' 
              : 'bg-white/95 border-slate-200/90 hover:border-amber-300 shadow-[0_4px_24px_rgba(15,23,42,0.04)] hover:shadow-[0_16px_36px_rgba(217,119,6,0.08)]'"
          >
            <div>
              <div 
                class="w-12 h-12 rounded-lg flex items-center justify-center mb-6 border"
                :class="isDark ? 'bg-[#272a2d] border-[#484740] text-stitch-amber' : 'bg-amber-50/90 border-amber-200/80 text-amber-800 shadow-sm'"
              >
                <span class="material-symbols-outlined text-2xl text-stitch-amber">cloud_sync</span>
              </div>
              <h3 class="font-headline text-xl font-semibold mb-3">
                Cloud Infrastructure &amp; Integrasi AI
              </h3>
              <p class="text-sm text-on-surface-variant leading-relaxed">
                Perancangan arsitektur cloud serverless, containerized Docker/K8s, dan pipeline CI/CD otomatis. Kami mengintegrasikan teknologi AI/LLM ketika dibutuhkan untuk mengoptimasi alur kerja pengguna.
              </p>
            </div>
            <div class="mt-6 pt-4 border-t border-outline-variant/50 flex flex-wrap gap-2 text-xs font-mono text-on-surface-variant">
              <span class="px-2 py-0.5 rounded border" :class="isDark ? 'bg-[#111417] border-outline-variant' : 'bg-slate-50/90 border-slate-200/80 text-slate-700'">Automated CI/CD</span>
              <span class="px-2 py-0.5 rounded border" :class="isDark ? 'bg-[#111417] border-outline-variant' : 'bg-slate-50/90 border-slate-200/80 text-slate-700'">Docker &amp; Edge</span>
              <span class="px-2 py-0.5 rounded border" :class="isDark ? 'bg-[#111417] border-outline-variant' : 'bg-slate-50/90 border-slate-200/80 text-slate-700'">AI API Integration</span>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- METRIK & ANGKA KREDIBILITAS -->
    <section class="max-w-7xl mx-auto px-6 py-20 md:py-28">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          class="p-8 rounded-xl border flex flex-col items-start transition-all"
          :class="isDark ? 'bg-[#191c1f] border-[#2a2d31]' : 'bg-white/95 border-slate-200/90 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_28px_rgba(124,58,237,0.06)] hover:border-violet-200'"
        >
          <span class="font-headline text-4xl sm:text-5xl font-bold tracking-tight text-gradient-stitch">5+</span>
          <span class="font-semibold text-base mt-2">Produk Sukses Rilis</span>
          <span class="text-xs text-on-surface-variant mt-1">Platform web, SaaS, &amp; aplikasi mobile</span>
        </div>

        <div 
          class="p-8 rounded-xl border flex flex-col items-start transition-all"
          :class="isDark ? 'bg-[#191c1f] border-[#2a2d31]' : 'bg-white/95 border-slate-200/90 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_28px_rgba(124,58,237,0.06)] hover:border-violet-200'"
        >
          <span class="font-headline text-4xl sm:text-5xl font-bold tracking-tight text-gradient-cyan">100%</span>
          <span class="font-semibold text-base mt-2">Hak Milik Klien</span>
          <span class="text-xs text-on-surface-variant mt-1">Kode sumber &amp; lisensi aset independen</span>
        </div>

        <div 
          class="p-8 rounded-xl border flex flex-col items-start transition-all"
          :class="isDark ? 'bg-[#191c1f] border-[#2a2d31]' : 'bg-white/95 border-slate-200/90 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_28px_rgba(124,58,237,0.06)] hover:border-violet-200'"
        >
          <span class="font-headline text-4xl sm:text-5xl font-bold tracking-tight">99.9%</span>
          <span class="font-semibold text-base mt-2">Kesiapan Sistem</span>
          <span class="text-xs text-on-surface-variant mt-1">SLA rata-rata arsitektur produksi</span>
        </div>

        <div 
          class="p-8 rounded-xl border flex flex-col items-start transition-all"
          :class="isDark ? 'bg-[#191c1f] border-[#2a2d31]' : 'bg-white/95 border-slate-200/90 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_28px_rgba(124,58,237,0.06)] hover:border-violet-200'"
        >
          <span class="font-headline text-4xl sm:text-5xl font-bold tracking-tight" :class="isDark ? 'text-emerald-400' : 'text-emerald-700'">0%</span>
          <span class="font-semibold text-base mt-2">Vendor Lock-In</span>
          <span class="text-xs text-on-surface-variant mt-1">Bebas migrasi kapan pun Anda siap</span>
        </div>
      </div>
    </section>

    <!-- 03 // METODOLOGI KERJA (Pendekatan Rekayasa Transparan) -->
    <section class="border-t py-20 md:py-28 transition-colors" :class="isDark ? 'bg-[#0b0e11] border-outline-variant' : 'bg-gradient-to-b from-[#f8f9ff] via-[#eff4ff]/60 to-[#f8f9ff] border-slate-200/80'">
      <div class="max-w-7xl mx-auto px-6">
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span class="text-xs uppercase tracking-widest text-on-surface-variant font-semibold">03 // Metodologi Kerja</span>
            <h2 class="mt-3 font-headline text-3xl sm:text-4xl font-semibold tracking-tight">
              Pendekatan Rekayasa Transparan
            </h2>
          </div>
          <p class="text-sm text-on-surface-variant max-w-md leading-relaxed">
            Siklus kolaborasi yang mengedepankan kepastian jadwal, dokumentasi terbuka, dan uji reliabilitas di setiap iterasi.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Phase 1 -->
          <div 
            class="p-8 rounded-xl border flex flex-col justify-between transition-all"
            :class="isDark ? 'bg-[#191c1f] border-[#2a2d31]' : 'bg-white/95 border-slate-200/90 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_28px_rgba(124,58,237,0.06)] hover:border-violet-200'"
          >
            <div>
              <div class="flex items-center justify-between mb-6">
                <span class="font-headline text-2xl font-bold text-stitch-magenta">01</span>
                <span class="px-2.5 py-0.5 rounded text-xs uppercase font-mono" :class="isDark ? 'bg-[#272a2d] text-white' : 'bg-fuchsia-50 text-fuchsia-800 border border-fuchsia-200/80 font-semibold'">Fase Satu</span>
              </div>
              <h3 class="font-headline text-lg font-semibold mb-3">
                Eksplorasi Arsitektur &amp; Strategi
              </h3>
              <p class="text-sm text-on-surface-variant leading-relaxed">
                Membedah model bisnis, kalkulasi volume beban sistem, pemodelan skema basis data, dan pemilihan stack teknologi yang paling rasional untuk efisiensi biaya.
              </p>
            </div>
            <div class="mt-8 pt-4 border-t border-outline-variant/50 text-xs font-mono text-on-surface-variant">
              Deliverable: Architectural Blueprint &amp; SRS
            </div>
          </div>

          <!-- Phase 2 -->
          <div 
            class="p-8 rounded-xl border flex flex-col justify-between transition-all"
            :class="isDark ? 'bg-[#191c1f] border-[#2a2d31]' : 'bg-white/95 border-slate-200/90 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_28px_rgba(124,58,237,0.06)] hover:border-violet-200'"
          >
            <div>
              <div class="flex items-center justify-between mb-6">
                <span class="font-headline text-2xl font-bold text-stitch-purple">02</span>
                <span class="px-2.5 py-0.5 rounded text-xs uppercase font-mono" :class="isDark ? 'bg-[#272a2d] text-white' : 'bg-violet-50 text-violet-800 border border-violet-200/80 font-semibold'">Fase Dua</span>
              </div>
              <h3 class="font-headline text-lg font-semibold mb-3">
                Desain &amp; Rekayasa Terpadu
              </h3>
              <p class="text-sm text-on-surface-variant leading-relaxed">
                Sprint pengembangan aktif berbasis kode modular. Desainer dan engineer bekerja serempak untuk memastikan fidelitas desain terwujud 1:1 tanpa deviasi fungsional.
              </p>
            </div>
            <div class="mt-8 pt-4 border-t border-outline-variant/50 text-xs font-mono text-on-surface-variant">
              Deliverable: Bi-weekly Staging Build &amp; Review
            </div>
          </div>

          <!-- Phase 3 -->
          <div 
            class="p-8 rounded-xl border flex flex-col justify-between transition-all"
            :class="isDark ? 'bg-[#191c1f] border-[#2a2d31]' : 'bg-white/95 border-slate-200/90 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_28px_rgba(124,58,237,0.06)] hover:border-violet-200'"
          >
            <div>
              <div class="flex items-center justify-between mb-6">
                <span class="font-headline text-2xl font-bold text-stitch-cyan">03</span>
                <span class="px-2.5 py-0.5 rounded text-xs uppercase font-mono" :class="isDark ? 'bg-[#272a2d] text-white' : 'bg-sky-50 text-sky-800 border border-sky-200/80 font-semibold'">Fase Tiga</span>
              </div>
              <h3 class="font-headline text-lg font-semibold mb-3">
                Pengujian &amp; Peluncuran Stabil
              </h3>
              <p class="text-sm text-on-surface-variant leading-relaxed">
                Stress testing, audit kerentanan, verifikasi performa multi-device, hingga handover seluruh kunci akses, pipeline repositori, dan dokumentasi operasional mandiri.
              </p>
            </div>
            <div class="mt-8 pt-4 border-t border-outline-variant/50 text-xs font-mono text-on-surface-variant">
              Deliverable: Production Deployment &amp; Handover
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- CTA PENUTUP SECTION DENGAN WATERMARK LOGO NEXA -->
    <section class="max-w-7xl mx-auto px-6 pb-20 md:pb-28">
      <div 
        class="p-8 sm:p-16 rounded-2xl border relative overflow-hidden transition-all"
        :class="isDark 
          ? 'bg-[#191c1f] border-[#2a2d31]' 
          : 'bg-gradient-to-br from-white via-[#f8f9ff] to-[#f3e8ff] border-violet-200/80 shadow-[0_12px_40px_rgba(124,58,237,0.06)]'"
      >
        <!-- Subtle Brand Watermark Logo -->
        <div class="absolute -right-10 -bottom-10 pointer-events-none select-none transition-opacity" :class="isDark ? 'opacity-5' : 'opacity-10'">
          <img src="/assets/logo.png" alt="Nexa Digital Agency Watermark" class="w-80 h-80 object-contain" />
        </div>

        <div class="max-w-3xl relative z-10">
          <div class="flex items-center gap-3 mb-6">
            <img src="/assets/logo.png" alt="Nexa" class="h-6 w-auto object-contain" />
            <span class="text-xs uppercase tracking-widest font-mono text-stitch-magenta font-semibold">Inisiasi Kemitraan Studio</span>
          </div>

          <h2 class="font-headline text-3xl sm:text-5xl font-semibold tracking-tight leading-tight">
            Punya visi produk yang siap direalisasikan?
          </h2>

          <p class="mt-4 text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Kami siap mengkaji arsitektur perangkat lunak Anda, mengevaluasi potensi peningkatan teknis, atau membangun platform baru dari nol dengan standar rekayasa tertinggi.
          </p>

          <!-- Direct Contact Cards -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
            <!-- Direct WhatsApp -->
            <a 
              href="https://wa.me/62895800286901?text=Halo%20Nexa%20Digital%20Agency,%20saya%20tertarik%20untuk%20konsultasi%20proyek." 
              target="_blank" 
              rel="noopener noreferrer"
              class="p-5 rounded-xl border flex items-center justify-between group transition-all"
              :class="isDark ? 'bg-[#111417] border-[#2a2d31] hover:border-emerald-500/60' : 'bg-white/90 border-slate-200/90 hover:border-emerald-500/60 shadow-sm hover:shadow-md'"
            >
              <div class="flex items-center gap-4">
                <div 
                  class="w-10 h-10 rounded-lg flex items-center justify-center border transition-colors"
                  :class="isDark ? 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10' : 'text-emerald-700 border-emerald-200 bg-emerald-50'"
                >
                  <span class="material-symbols-outlined text-xl">chat</span>
                </div>
                <div class="flex flex-col">
                  <span class="text-xs uppercase font-mono text-on-surface-variant">WhatsApp Langsung</span>
                  <span class="font-semibold text-sm">+62 895 8002 86901</span>
                </div>
              </div>
              <span 
                class="material-symbols-outlined group-hover:translate-x-1 transition-transform"
                :class="isDark ? 'text-emerald-400' : 'text-emerald-700'"
              >
                arrow_forward
              </span>
            </a>

            <!-- Direct Email -->
            <a 
              href="mailto:nexadigitalagency40@gmail.com"
              class="p-5 rounded-xl border flex items-center justify-between group transition-all"
              :class="isDark ? 'bg-[#111417] border-[#2a2d31] hover:border-stitch-purple/60' : 'bg-white/90 border-slate-200/90 hover:border-violet-500/60 shadow-sm hover:shadow-md'"
            >
              <div class="flex items-center gap-4">
                <div 
                  class="w-10 h-10 rounded-lg flex items-center justify-center border transition-colors"
                  :class="isDark ? 'text-stitch-purple border-stitch-purple/30 bg-stitch-purple/10' : 'text-violet-700 border-violet-200 bg-violet-50'"
                >
                  <span class="material-symbols-outlined text-xl">mail</span>
                </div>
                <div class="flex flex-col">
                  <span class="text-xs uppercase font-mono text-on-surface-variant">Email Studio</span>
                  <span class="font-semibold text-sm truncate max-w-[170px]">nexadigitalagency40@gmail.com</span>
                </div>
              </div>
              <span 
                class="material-symbols-outlined group-hover:translate-x-1 transition-transform"
                :class="isDark ? 'text-stitch-purple' : 'text-violet-700'"
              >
                arrow_forward
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { isDark } from '../utils/theme'
</script>
