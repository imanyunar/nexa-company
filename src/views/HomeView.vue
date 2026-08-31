<template>
  <div>
    <!-- CHAPTER 1: DARK CANVAS HERO (Full-bleed #0B0E2B, Anime.js SVG Drawing) -->
    <section class="bg-ink text-white py-24 sm:py-32 border-b border-hairline-dark relative overflow-hidden">
      <!-- Background Signature Diagonal SVG Line -->
      <div class="absolute inset-0 pointer-events-none z-0">
        <svg 
          class="w-full h-full" 
          viewBox="0 0 1440 900" 
          fill="none" 
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="nexaHeroGradHome" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#17C3F2" stop-opacity="0.8" />
              <stop offset="35%" stop-color="#3A4CE0" stop-opacity="0.7" />
              <stop offset="70%" stop-color="#8A2BE2" stop-opacity="0.7" />
              <stop offset="100%" stop-color="#E620C5" stop-opacity="0.8" />
            </linearGradient>
          </defs>

          <!-- Primary Signature Drawn Path -->
          <path 
            ref="heroLine"
            d="M -80 820 L 480 460 L 1080 160 L 1520 -40" 
            stroke="url(#nexaHeroGradHome)" 
            stroke-width="2.5" 
            stroke-linecap="round"
            class="opacity-75"
          />
        </svg>
      </div>

      <div class="max-w-6xl mx-auto px-6 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <!-- Editorial Column -->
          <div class="lg:col-span-7 space-y-8">
            <div ref="heroBadge" class="inline-flex items-center gap-2 px-3.5 py-1 bg-ink-elevated border border-hairline-dark rounded-full text-xs font-mono text-cyan">
              <span class="w-2 h-2 rounded-full bg-cyan animate-pulse"></span>
              NEXA DIGITAL STUDIO
            </div>

            <!-- Light weight 300 headline (PlayStation aesthetic) -->
            <h1 ref="heroHeadline" class="text-4xl sm:text-5xl lg:text-[3.5rem] font-display font-light text-white leading-[1.15] tracking-tight">
              Membangun Solusi Web, Analisis Data, dan Media Interaktif.
            </h1>

            <p ref="heroSubtitle" class="text-white/70 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              Nexa adalah studio teknologi independen yang membantu bisnis, instansi, dan UMKM menghadirkan pengalaman digital tangguh dengan eksekusi bersih.
            </p>

            <div ref="heroCtas" class="flex flex-wrap items-center gap-4 pt-2">
              <router-link 
                to="/portofolio" 
                class="btn-pill-primary text-sm font-bold uppercase tracking-wider py-3.5 px-8 transition-transform hover:scale-105 active:scale-95"
              >
                Lihat Portofolio
              </router-link>
              <router-link 
                to="/kontak" 
                class="btn-pill-secondary-dark text-sm font-semibold py-3.5 px-8 transition-transform hover:scale-105 active:scale-95"
              >
                Mulai Proyek
              </router-link>
            </div>
          </div>

          <!-- Visual Showcase Frame (8px radius) with Anime.js subtle float -->
          <div ref="heroVisual" class="lg:col-span-5 flex justify-center lg:justify-end">
            <div class="w-full max-w-sm card-8px-dark p-8 text-center space-y-6 transform transition-all duration-300 hover:border-cyan/40">
              <div class="py-6 flex items-center justify-center">
                <img 
                  src="/assets/logo.png" 
                  alt="Nexa Identity" 
                  class="w-36 h-36 object-contain filter drop-shadow transition-transform hover:scale-110 duration-300"
                />
              </div>
              <div class="space-y-1 border-t border-hairline-dark pt-6">
                <div class="font-display font-light text-xl text-white">Nexa Agency</div>
                <div class="text-xs text-white/60 font-mono">Web · Data · Game</div>
              </div>
              <div class="grid grid-cols-2 gap-4 pt-2 text-left font-mono text-xs text-white/70 border-t border-hairline-dark">
                <div>
                  <span class="text-white/40 block text-[10px]">PRODUCTION</span>
                  <span class="text-cyan font-bold">100% LIVE</span>
                </div>
                <div>
                  <span class="text-white/40 block text-[10px]">STANDAR</span>
                  <span class="text-white font-bold">HIGH SPEED</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- CHAPTER 2: LIGHT CANVAS SHOWCASE (Full-bleed #F6F7FB, 8px Cards, 96px Spacing) -->
    <section class="bg-paper text-ink py-24 sm:py-28 border-b border-hairline-light">
      <div class="max-w-6xl mx-auto px-6 space-y-16">
        
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div class="max-w-2xl space-y-3">
            <h2 class="text-3xl sm:text-4xl font-display font-light text-ink">
              Tiga Layanan Spesialis
            </h2>
            <p class="text-muted text-base sm:text-lg leading-relaxed">
              Fokus keahlian terarah untuk mendukung pertumbuhan digital Anda.
            </p>
          </div>
          <router-link to="/layanan" class="btn-pill-secondary-light text-xs font-semibold py-2.5 px-6 self-start sm:self-auto hover:bg-paper-soft">
            Semua Layanan
          </router-link>
        </div>

        <!-- 3-up 8px Card Grid with Stagger Animation -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <!-- Card 1: Web Dev -->
          <div class="card-8px service-card p-8 flex flex-col justify-between space-y-6 hover:border-primary hover:-translate-y-1 transition-all duration-300">
            <div class="space-y-4">
              <div class="w-12 h-12 rounded-lg bg-paper-soft text-primary flex items-center justify-center text-xl font-bold">
                🌐
              </div>
              <h3 class="text-2xl font-display font-light text-ink">Web Development</h3>
              <p class="text-muted text-sm leading-relaxed">
                Pembuatan website company profile, landing page berkonversi tinggi, dashboard interaktif, dan web app kustom yang cepat serta responsif.
              </p>
            </div>
            <div class="pt-4 border-t border-hairline-light">
              <router-link to="/layanan" class="text-xs font-bold text-primary hover:underline uppercase tracking-wider">
                Pelajari Detail
              </router-link>
            </div>
          </div>

          <!-- Card 2: Data Analysis -->
          <div class="card-8px service-card p-8 flex flex-col justify-between space-y-6 hover:border-cyan hover:-translate-y-1 transition-all duration-300">
            <div class="space-y-4">
              <div class="w-12 h-12 rounded-lg bg-cyan/10 text-cyan-pressed flex items-center justify-center text-xl font-bold">
                📊
              </div>
              <h3 class="text-2xl font-display font-light text-ink">Data Analysis</h3>
              <p class="text-muted text-sm leading-relaxed">
                Pengolahan dan visualisasi data bisnis ke dalam dashboard interaktif untuk memandu pengambilan keputusan strategis berbasis fakta.
              </p>
            </div>
            <div class="pt-4 border-t border-hairline-light">
              <router-link to="/layanan" class="text-xs font-bold text-primary hover:underline uppercase tracking-wider">
                Pelajari Detail
              </router-link>
            </div>
          </div>

          <!-- Card 3: Game Development -->
          <div class="card-8px service-card p-8 flex flex-col justify-between space-y-6 hover:border-magenta hover:-translate-y-1 transition-all duration-300">
            <div class="space-y-4">
              <div class="w-12 h-12 rounded-lg bg-magenta/10 text-magenta flex items-center justify-center text-xl font-bold">
                🎮
              </div>
              <h3 class="text-2xl font-display font-light text-ink">Game Development</h3>
              <p class="text-muted text-sm leading-relaxed">
                Perancangan game 2D/3D untuk kebutuhan promosi brand, simulasi edukatif, maupun pengalaman interaktif berbasis browser.
              </p>
            </div>
            <div class="pt-4 border-t border-hairline-light">
              <router-link to="/layanan" class="text-xs font-bold text-primary hover:underline uppercase tracking-wider">
                Pelajari Detail
              </router-link>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- CHAPTER 3: DARK CASE STUDY RAIL (Full-bleed #07091D, 8px Dark Tiles) -->
    <section class="bg-ink-deep text-white py-24 sm:py-28 border-b border-hairline-dark">
      <div class="max-w-6xl mx-auto px-6 space-y-16">
        
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div class="max-w-2xl space-y-3">
            <div class="text-xs font-mono text-cyan uppercase tracking-widest">CASE STUDIES</div>
            <h2 class="text-3xl sm:text-4xl font-display font-light text-white">
              Studi Kasus Produksi
            </h2>
            <p class="text-white/70 text-base sm:text-lg leading-relaxed">
              Solusi digital yang telah kami bangun dan beroperasi secara langsung.
            </p>
          </div>
          <router-link to="/portofolio" class="btn-pill-secondary-dark text-xs font-semibold py-2.5 px-6 self-start sm:self-auto hover:bg-white/10">
            Semua Studi Kasus
          </router-link>
        </div>

        <!-- 3-up Project Rail with Stagger Animation -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <!-- Tile 1: Lentera -->
          <div class="card-8px-dark project-tile p-7 flex flex-col justify-between space-y-6 hover:border-cyan/50 hover:-translate-y-1 transition-all duration-300">
            <div class="space-y-4">
              <div class="flex items-center justify-between text-xs font-mono text-cyan">
                <span>PEMKAB INDRAMAYU</span>
                <span class="text-[#27C93F] font-bold flex items-center gap-1">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#27C93F] animate-ping"></span>
                  LIVE
                </span>
              </div>
              <h3 class="text-xl font-display font-light text-white">
                LENTERA Indramayu
              </h3>
              <p class="text-white/60 text-sm leading-relaxed">
                Platform digital resmi pelayanan publik dan ekonomi kerakyatan berbasis PWA terpadu.
              </p>
            </div>
            <div class="pt-4 border-t border-hairline-dark flex items-center justify-between">
              <span class="text-xs font-mono text-white/50">Laravel · PWA</span>
              <a 
                href="https://lentera.indramayukab.go.id/" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-xs font-bold text-cyan hover:underline"
              >
                Buka Website
              </a>
            </div>
          </div>

          <!-- Tile 2: Visit Gumiwang -->
          <div class="card-8px-dark project-tile p-7 flex flex-col justify-between space-y-6 hover:border-cyan/50 hover:-translate-y-1 transition-all duration-300">
            <div class="space-y-4">
              <div class="flex items-center justify-between text-xs font-mono text-cyan">
                <span>DESA WISATA & UMKM</span>
                <span class="text-[#27C93F] font-bold flex items-center gap-1">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#27C93F] animate-ping"></span>
                  LIVE
                </span>
              </div>
              <h3 class="text-xl font-display font-light text-white">
                Visit Gumiwang
              </h3>
              <p class="text-white/60 text-sm leading-relaxed">
                Portal promosi potensi wisata alam, agrikultur, dan katalog produk UMKM Desa Gumiwang.
              </p>
            </div>
            <div class="pt-4 border-t border-hairline-dark flex items-center justify-between">
              <span class="text-xs font-mono text-white/50">Vite · Tailwind</span>
              <a 
                href="https://visitgumiwang.web.id/" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-xs font-bold text-cyan hover:underline"
              >
                Buka Website
              </a>
            </div>
          </div>

          <!-- Tile 3: CatatKas -->
          <div class="card-8px-dark project-tile p-7 flex flex-col justify-between space-y-6 hover:border-magenta/50 hover:-translate-y-1 transition-all duration-300">
            <div class="space-y-4">
              <div class="flex items-center justify-between text-xs font-mono text-magenta">
                <span>FINANCIAL WEB APP</span>
                <span class="text-[#27C93F] font-bold flex items-center gap-1">
                  <span class="w-1.5 h-1.5 rounded-full bg-[#27C93F] animate-ping"></span>
                  LIVE
                </span>
              </div>
              <h3 class="text-xl font-display font-light text-white">
                CatatKas UMKM
              </h3>
              <p class="text-white/60 text-sm leading-relaxed">
                Aplikasi pencatatan keuangan digital instan untuk mencatat transaksi dan laporan laba rugi usaha mikro.
              </p>
            </div>
            <div class="pt-4 border-t border-hairline-dark flex items-center justify-between">
              <span class="text-xs font-mono text-white/50">Single Page App</span>
              <a 
                href="https://catatkas-web.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-xs font-bold text-magenta hover:underline"
              >
                Buka Web App
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- CHAPTER 4: NEXA BLUE ACTION BAND (Full-bleed #3A4CE0, White Pill Button) -->
    <section class="bg-primary text-white py-20 sm:py-24">
      <div class="max-w-4xl mx-auto px-6 text-center space-y-6">
        <h2 class="text-3xl sm:text-4xl font-display font-light text-white leading-tight">
          Siap Memulai Proyek Digital Anda?
        </h2>
        <p class="text-white/80 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Konsultasikan kebutuhan website, pengolahan data, atau game Anda bersama tim kami. Dapatkan estimasi dan pendekatan arsitektur terbaik.
        </p>
        <div class="pt-4">
          <router-link 
            to="/kontak" 
            class="inline-flex items-center justify-center bg-white text-primary hover:bg-paper font-bold text-sm uppercase tracking-wider py-4 px-10 rounded-full transition-all hover:scale-105 active:scale-95"
          >
            Konsultasi Sekarang
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { animateStrokeDraw, animateHeroEntrance, animateStaggerFadeIn } from '../utils/animations'

const heroLine = ref(null)
const heroBadge = ref(null)
const heroHeadline = ref(null)
const heroSubtitle = ref(null)
const heroCtas = ref(null)
const heroVisual = ref(null)

onMounted(() => {
  // Animate SVG stroke line draw with Anime.js
  if (heroLine.value) {
    animateStrokeDraw(heroLine.value, 1500)
  }

  // Hero entrance timeline
  animateHeroEntrance({
    headline: [heroBadge.value, heroHeadline.value],
    subtitle: heroSubtitle.value,
    cta: heroCtas.value,
    visual: heroVisual.value
  })

  // Stagger reveal for service cards and project tiles
  animateStaggerFadeIn('.service-card', { delay: 400, stagger: 120 })
  animateStaggerFadeIn('.project-tile', { delay: 600, stagger: 120 })
})
</script>
