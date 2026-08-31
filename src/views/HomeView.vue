<template>
  <div class="bg-theme-base text-white">
    <!-- SECTION 1: HERO (Dark Studio Hero with Anime.js SVG Drawing) -->
    <section class="py-24 sm:py-32 border-b border-theme-border relative overflow-hidden">
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
            <div ref="heroBadge" class="inline-flex items-center gap-2 px-3.5 py-1.5 bg-theme-elevated border border-theme-border rounded-full text-xs font-mono text-cyan">
              <span class="w-2 h-2 rounded-full bg-cyan animate-pulse"></span>
              NEXA DIGITAL STUDIO
            </div>

            <!-- Light weight 300 headline -->
            <h1 ref="heroHeadline" class="text-4xl sm:text-5xl lg:text-[3.5rem] font-display font-light text-white leading-[1.15] tracking-tight">
              Membangun Solusi Web, Analisis Data, dan Media Interaktif.
            </h1>

            <p ref="heroSubtitle" class="text-theme-text-muted text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              Nexa adalah studio teknologi independen yang membantu bisnis, instansi, dan UMKM menghadirkan pengalaman digital tangguh dengan eksekusi bersih.
            </p>

            <div ref="heroCtas" class="flex flex-wrap items-center gap-4 pt-2">
              <router-link 
                to="/portofolio" 
                class="btn-pill-primary text-sm font-bold uppercase tracking-wider py-3.5 px-8"
              >
                Lihat Portofolio
              </router-link>
              <router-link 
                to="/kontak" 
                class="btn-pill-secondary text-sm font-semibold py-3.5 px-8"
              >
                Mulai Proyek
              </router-link>
            </div>
          </div>

          <!-- Visual Showcase Frame -->
          <div ref="heroVisual" class="lg:col-span-5 flex justify-center lg:justify-end">
            <div class="w-full max-w-sm card-unified p-8 text-center space-y-6">
              <div class="py-6 flex items-center justify-center">
                <img 
                  src="/assets/logo.png" 
                  alt="Nexa Identity" 
                  class="w-36 h-36 object-contain filter drop-shadow transition-transform hover:scale-110 duration-300"
                />
              </div>
              <div class="space-y-1 border-t border-theme-border pt-6">
                <div class="font-display font-light text-xl text-white">Nexa Agency</div>
                <div class="text-xs text-theme-text-faint font-mono">Web · Data · Game</div>
              </div>
              <div class="grid grid-cols-2 gap-4 pt-2 text-left font-mono text-xs text-theme-text-muted border-t border-theme-border">
                <div>
                  <span class="text-theme-text-faint block text-[10px]">PRODUCTION</span>
                  <span class="text-cyan font-bold">100% LIVE</span>
                </div>
                <div>
                  <span class="text-theme-text-faint block text-[10px]">STANDAR</span>
                  <span class="text-white font-bold">HIGH SPEED</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- SECTION 2: TIGA LAYANAN (Seamless Dark Elevated Canvas) -->
    <section class="bg-theme-elevated py-24 sm:py-28 border-b border-theme-border">
      <div class="max-w-6xl mx-auto px-6 space-y-16">
        
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div class="max-w-2xl space-y-3">
            <div class="text-xs font-mono text-cyan uppercase tracking-widest">KEAHLIAN UTAMA</div>
            <h2 class="text-3xl sm:text-4xl font-display font-light text-white">
              Tiga Layanan Spesialis
            </h2>
            <p class="text-theme-text-muted text-base sm:text-lg leading-relaxed">
              Fokus keahlian terarah untuk mendukung pertumbuhan digital Anda.
            </p>
          </div>
          <router-link to="/layanan" class="btn-pill-secondary text-xs font-semibold py-2.5 px-6 self-start sm:self-auto">
            Semua Layanan
          </router-link>
        </div>

        <!-- 3-up Card Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <!-- Card 1: Web Dev -->
          <div class="card-unified service-card p-8 flex flex-col justify-between space-y-6">
            <div class="space-y-4">
              <div class="w-12 h-12 rounded-lg bg-primary/15 text-cyan flex items-center justify-center text-xl font-bold border border-primary/20">
                🌐
              </div>
              <h3 class="text-2xl font-display font-light text-white">Web Development</h3>
              <p class="text-theme-text-muted text-sm leading-relaxed">
                Pembuatan website company profile, landing page berkonversi tinggi, dashboard interaktif, dan web app kustom yang cepat serta responsif.
              </p>
            </div>
            <div class="pt-4 border-t border-theme-border">
              <router-link to="/layanan" class="text-xs font-bold text-cyan hover:underline uppercase tracking-wider">
                Pelajari Detail
              </router-link>
            </div>
          </div>

          <!-- Card 2: Data Analysis -->
          <div class="card-unified service-card p-8 flex flex-col justify-between space-y-6">
            <div class="space-y-4">
              <div class="w-12 h-12 rounded-lg bg-cyan/15 text-cyan flex items-center justify-center text-xl font-bold border border-cyan/20">
                📊
              </div>
              <h3 class="text-2xl font-display font-light text-white">Data Analysis</h3>
              <p class="text-theme-text-muted text-sm leading-relaxed">
                Pengolahan dan visualisasi data bisnis ke dalam dashboard interaktif untuk memandu pengambilan keputusan strategis berbasis fakta.
              </p>
            </div>
            <div class="pt-4 border-t border-theme-border">
              <router-link to="/layanan" class="text-xs font-bold text-cyan hover:underline uppercase tracking-wider">
                Pelajari Detail
              </router-link>
            </div>
          </div>

          <!-- Card 3: Game Development -->
          <div class="card-unified service-card p-8 flex flex-col justify-between space-y-6">
            <div class="space-y-4">
              <div class="w-12 h-12 rounded-lg bg-magenta/15 text-magenta flex items-center justify-center text-xl font-bold border border-magenta/20">
                🎮
              </div>
              <h3 class="text-2xl font-display font-light text-white">Game Development</h3>
              <p class="text-theme-text-muted text-sm leading-relaxed">
                Perancangan game 2D/3D untuk kebutuhan promosi brand, simulasi edukatif, maupun pengalaman interaktif berbasis browser.
              </p>
            </div>
            <div class="pt-4 border-t border-theme-border">
              <router-link to="/layanan" class="text-xs font-bold text-magenta hover:underline uppercase tracking-wider">
                Pelajari Detail
              </router-link>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- SECTION 3: SHOWCASE PORTOFOLIO (Consistent Dark Canvas with Real Mockups) -->
    <section class="py-24 sm:py-28 border-b border-theme-border">
      <div class="max-w-6xl mx-auto px-6 space-y-16">
        
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div class="max-w-2xl space-y-3">
            <div class="text-xs font-mono text-cyan uppercase tracking-widest">SHOWCASE KARYA NYATA</div>
            <h2 class="text-3xl sm:text-4xl font-display font-light text-white">
              Preview Website & Aplikasi
            </h2>
            <p class="text-theme-text-muted text-base sm:text-lg leading-relaxed">
              Tampilan langsung dari beberapa proyek yang telah kami bangun dan beroperasi secara live.
            </p>
          </div>
          <router-link to="/portofolio" class="btn-pill-secondary text-xs font-semibold py-2.5 px-6 self-start sm:self-auto">
            Semua Studi Kasus
          </router-link>
        </div>

        <!-- 3-up Project Cards with Website Visual Previews -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <!-- Card 1: Lentera Indramayu -->
          <div class="card-unified project-tile p-6 flex flex-col justify-between space-y-5">
            <!-- Browser Mockup Window -->
            <div class="rounded-lg overflow-hidden border border-white/15 bg-[#0A2647] flex flex-col shadow-lg">
              <!-- Window Top Bar -->
              <div class="bg-[#071D36] px-3 py-2 flex items-center justify-between border-b border-white/10">
                <div class="flex items-center gap-1.5">
                  <span class="w-2 h-2 rounded-full bg-[#FF5F56]"></span>
                  <span class="w-2 h-2 rounded-full bg-[#FFBD2E]"></span>
                  <span class="w-2 h-2 rounded-full bg-[#27C93F]"></span>
                </div>
                <span class="text-[10px] font-mono text-white/70 truncate max-w-[140px]">lentera.indramayukab.go.id</span>
                <span class="text-[9px] font-mono text-[#D4AF37] font-bold">PWA</span>
              </div>
              
              <!-- Website Preview Body -->
              <div class="p-4 space-y-3 bg-gradient-to-b from-[#0A2647] to-[#0D325E]">
                <div class="flex items-center gap-2">
                  <div class="w-6 h-6 rounded bg-[#D4AF37] text-black font-bold text-[10px] flex items-center justify-center">
                    L
                  </div>
                  <div>
                    <div class="text-xs font-bold text-[#D4AF37] tracking-wider leading-none">LENTERA INDRAMAYU</div>
                    <div class="text-[9px] text-white/70">Pelayanan & Ekonomi Kerakyatan</div>
                  </div>
                </div>

                <div class="grid grid-cols-3 gap-1.5 pt-1">
                  <div class="bg-white/10 rounded p-1.5 text-center">
                    <div class="text-[8px] text-white/60">Layanan</div>
                    <div class="text-[10px] font-bold text-white">Publik</div>
                  </div>
                  <div class="bg-white/10 rounded p-1.5 text-center">
                    <div class="text-[8px] text-white/60">Katalog</div>
                    <div class="text-[10px] font-bold text-[#D4AF37]">UMKM</div>
                  </div>
                  <div class="bg-white/10 rounded p-1.5 text-center">
                    <div class="text-[8px] text-white/60">Portal</div>
                    <div class="text-[10px] font-bold text-[#27C93F]">Data</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Card Info -->
            <div class="space-y-2">
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
              <p class="text-theme-text-muted text-xs leading-relaxed">
                Platform digital resmi pelayanan publik dan ekonomi kerakyatan berbasis Progressive Web App (PWA).
              </p>
            </div>

            <!-- Link -->
            <div class="pt-3 border-t border-theme-border flex items-center justify-between">
              <span class="text-[11px] font-mono text-theme-text-faint">Laravel · PWA</span>
              <a 
                href="https://lentera.indramayukab.go.id/" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-xs font-bold text-cyan hover:underline flex items-center gap-1"
              >
                Kunjungi Website
              </a>
            </div>
          </div>

          <!-- Card 2: Visit Gumiwang -->
          <div class="card-unified project-tile p-6 flex flex-col justify-between space-y-5">
            <!-- Browser Mockup Window -->
            <div class="rounded-lg overflow-hidden border border-white/15 bg-[#064E3B] flex flex-col shadow-lg">
              <!-- Window Top Bar -->
              <div class="bg-[#043C2E] px-3 py-2 flex items-center justify-between border-b border-white/10">
                <div class="flex items-center gap-1.5">
                  <span class="w-2 h-2 rounded-full bg-[#FF5F56]"></span>
                  <span class="w-2 h-2 rounded-full bg-[#FFBD2E]"></span>
                  <span class="w-2 h-2 rounded-full bg-[#27C93F]"></span>
                </div>
                <span class="text-[10px] font-mono text-white/70 truncate max-w-[140px]">visitgumiwang.web.id</span>
                <span class="text-[9px] font-mono text-[#34D399] font-bold">DESA</span>
              </div>
              
              <!-- Website Preview Body -->
              <div class="p-4 space-y-3 bg-gradient-to-b from-[#064E3B] to-[#0A3D30]">
                <div class="flex items-center gap-2">
                  <div class="w-6 h-6 rounded bg-[#34D399] text-black font-bold text-[10px] flex items-center justify-center">
                    🌿
                  </div>
                  <div>
                    <div class="text-xs font-bold text-[#34D399] tracking-wider leading-none">VISIT GUMIWANG</div>
                    <div class="text-[9px] text-white/70">Pertanian, Perikanan & UMKM</div>
                  </div>
                </div>

                <div class="grid grid-cols-3 gap-1.5 pt-1">
                  <div class="bg-white/10 rounded p-1.5 text-center">
                    <div class="text-[8px] text-white/60">Potensi</div>
                    <div class="text-[10px] font-bold text-white">🌾 Tani</div>
                  </div>
                  <div class="bg-white/10 rounded p-1.5 text-center">
                    <div class="text-[8px] text-white/60">Budidaya</div>
                    <div class="text-[10px] font-bold text-[#38BDF8]">🐟 Ikan</div>
                  </div>
                  <div class="bg-white/10 rounded p-1.5 text-center">
                    <div class="text-[8px] text-white/60">Produk</div>
                    <div class="text-[10px] font-bold text-[#FBBF24]">🛍️ UMKM</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Card Info -->
            <div class="space-y-2">
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
              <p class="text-theme-text-muted text-xs leading-relaxed">
                Portal promosi potensi wisata alam, agrikultur, dan katalog produk UMKM Desa Gumiwang.
              </p>
            </div>

            <!-- Link -->
            <div class="pt-3 border-t border-theme-border flex items-center justify-between">
              <span class="text-[11px] font-mono text-theme-text-faint">Vite · Tailwind</span>
              <a 
                href="https://visitgumiwang.web.id/" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-xs font-bold text-cyan hover:underline flex items-center gap-1"
              >
                Kunjungi Website
              </a>
            </div>
          </div>

          <!-- Card 3: CatatKas -->
          <div class="card-unified project-tile p-6 flex flex-col justify-between space-y-5">
            <!-- Browser Mockup Window -->
            <div class="rounded-lg overflow-hidden border border-white/15 bg-[#312E81] flex flex-col shadow-lg">
              <!-- Window Top Bar -->
              <div class="bg-[#242168] px-3 py-2 flex items-center justify-between border-b border-white/10">
                <div class="flex items-center gap-1.5">
                  <span class="w-2 h-2 rounded-full bg-[#FF5F56]"></span>
                  <span class="w-2 h-2 rounded-full bg-[#FFBD2E]"></span>
                  <span class="w-2 h-2 rounded-full bg-[#27C93F]"></span>
                </div>
                <span class="text-[10px] font-mono text-white/60 truncate max-w-[140px]">catatkas-web.vercel.app</span>
                <span class="text-[9px] font-mono text-[#F472B6] font-bold">APP</span>
              </div>
              
              <!-- Website Preview Body -->
              <div class="p-4 space-y-3 bg-gradient-to-b from-[#312E81] to-[#1E1B4B]">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-2">
                    <div class="w-6 h-6 rounded bg-magenta text-white font-bold text-[10px] flex items-center justify-center">
                      💰
                    </div>
                    <div>
                      <div class="text-xs font-bold text-white tracking-wider leading-none">CATATKAS UMKM</div>
                      <div class="text-[9px] text-white/70">Pembukuan Keuangan Digital</div>
                    </div>
                  </div>
                </div>

                <div class="bg-black/30 rounded p-2 flex items-center justify-between font-mono text-[10px]">
                  <div>
                    <div class="text-[8px] text-white/50">Total Saldo Kas</div>
                    <div class="font-bold text-[#34D399]">Rp 14.850.000</div>
                  </div>
                  <div class="text-right">
                    <div class="text-[8px] text-white/50">Status</div>
                    <div class="text-cyan font-bold">Surplus</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Card Info -->
            <div class="space-y-2">
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
              <p class="text-theme-text-muted text-xs leading-relaxed">
                Aplikasi pencatatan keuangan digital instan untuk mencatat transaksi dan laporan laba rugi usaha mikro.
              </p>
            </div>

            <!-- Link -->
            <div class="pt-3 border-t border-theme-border flex items-center justify-between">
              <span class="text-[11px] font-mono text-theme-text-faint">Single Page App</span>
              <a 
                href="https://catatkas-web.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-xs font-bold text-magenta hover:underline flex items-center gap-1"
              >
                Kunjungi Web App
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>

    <!-- SECTION 4: NEXA CALL TO ACTION (Unified Dark Studio Band) -->
    <section class="bg-theme-elevated py-20 sm:py-24 border-b border-theme-border relative overflow-hidden">
      <div class="max-w-4xl mx-auto px-6 text-center space-y-6 relative z-10">
        <h2 class="text-3xl sm:text-4xl font-display font-light text-white leading-tight">
          Siap Memulai Proyek Digital Anda?
        </h2>
        <p class="text-theme-text-muted text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Konsultasikan kebutuhan website, pengolahan data, atau game Anda bersama tim kami. Dapatkan estimasi transparan dan pendekatan terbaik.
        </p>
        <div class="pt-4">
          <router-link 
            to="/kontak" 
            class="btn-pill-primary text-sm font-bold uppercase tracking-wider py-4 px-10"
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
