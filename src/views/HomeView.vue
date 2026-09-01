<template>
  <div class="bg-base text-white">

    <!-- HERO -->
    <section class="py-24 sm:py-32 border-b b-subtle relative overflow-hidden">
      <div class="absolute inset-0 pointer-events-none z-0">
        <svg class="w-full h-full" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="nexaHeroGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#17C3F2" stop-opacity="0.5" />
              <stop offset="35%" stop-color="#3A4CE0" stop-opacity="0.4" />
              <stop offset="70%" stop-color="#8A2BE2" stop-opacity="0.4" />
              <stop offset="100%" stop-color="#E620C5" stop-opacity="0.5" />
            </linearGradient>
          </defs>
          <path ref="heroLine" d="M -80 820 L 480 460 L 1080 160 L 1520 -40" stroke="url(#nexaHeroGrad)" stroke-width="1.5" stroke-linecap="round" class="opacity-25" />
        </svg>
      </div>

      <div class="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div class="lg:col-span-7 space-y-8">
            <h1 ref="heroHeadline" class="text-4xl sm:text-5xl lg:text-[3.5rem] font-display font-light text-white leading-[1.15] tracking-tight">
              Membangun Solusi Web, Analisis Data, dan Media Interaktif.
            </h1>

            <p ref="heroSubtitle" class="t-muted text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              Nexa Digital Agency adalah agensi teknologi independen yang membantu bisnis, instansi, dan UMKM menghadirkan pengalaman digital tangguh dengan eksekusi bersih.
            </p>

            <div ref="heroCtas" class="flex flex-wrap items-center gap-4 pt-2">
              <router-link to="/portofolio" class="btn-pill-primary text-sm font-bold uppercase tracking-wider py-3.5 px-8">Lihat Portofolio</router-link>
              <router-link to="/kontak" class="btn-pill-secondary text-sm font-semibold py-3.5 px-8">Mulai Proyek</router-link>
            </div>
          </div>

          <div ref="heroVisual" class="lg:col-span-5 flex justify-center lg:justify-end">
            <div class="w-full max-w-sm card-unified p-8 text-center space-y-6">
              <div class="py-6 flex items-center justify-center">
                <img src="/assets/logo.png" alt="Nexa Identity" class="w-36 h-36 object-contain filter drop-shadow transition-transform hover:scale-110 duration-300" />
              </div>
              <div class="space-y-1 border-t b-subtle pt-6">
                <div class="font-display font-light text-xl text-white">Nexa Digital Agency</div>
                <div class="text-xs t-cyan font-mono tracking-wider font-semibold">Be Seen Be Chosen</div>
              </div>
              <div class="grid grid-cols-2 gap-4 pt-2 text-left font-mono text-xs t-muted border-t b-subtle">
                <div>
                  <span class="t-faint block text-[10px]">PRODUCTION</span>
                  <span class="t-cyan font-bold">100% LIVE</span>
                </div>
                <div>
                  <span class="t-faint block text-[10px]">STANDAR</span>
                  <span class="text-white font-bold">HIGH SPEED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- LAYANAN -->
    <section class="bg-elevated py-24 sm:py-28 border-b b-subtle">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div class="max-w-2xl space-y-3">
            <div class="text-xs font-mono t-cyan uppercase tracking-widest">KEAHLIAN UTAMA</div>
            <h2 class="text-3xl sm:text-4xl font-display font-light text-white">Empat Layanan Spesialis</h2>
            <p class="t-muted text-base sm:text-lg leading-relaxed">Fokus keahlian terarah untuk mendukung pertumbuhan digital Anda.</p>
          </div>
          <router-link to="/layanan" class="btn-pill-secondary text-xs font-semibold py-2.5 px-6 self-start sm:self-auto flex items-center gap-1.5">
            <span>Semua Layanan</span>
            <ArrowUpRight class="w-3.5 h-3.5" />
          </router-link>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <!-- Web Dev -->
          <div class="card-unified service-card p-8 flex flex-col justify-between space-y-6">
            <div class="space-y-4">
              <div class="w-12 h-12 rounded-lg flex items-center justify-center" style="background: rgba(58,76,224,0.18); border: 1px solid rgba(58,76,224,0.35);">
                <Globe class="w-6 h-6 text-cyan" />
              </div>
              <h3 class="text-2xl font-display font-light text-white">Web Development</h3>
              <p class="t-muted text-sm leading-relaxed">Pembuatan website company profile, landing page berkonversi tinggi, dashboard interaktif, dan web app kustom yang cepat serta responsif.</p>
            </div>
            <div class="pt-4 border-t b-subtle">
              <router-link to="/layanan" class="text-xs font-bold t-cyan hover:underline uppercase tracking-wider flex items-center gap-1">
                <span>Pelajari Detail</span>
                <ArrowUpRight class="w-3.5 h-3.5" />
              </router-link>
            </div>
          </div>

          <!-- Data Analysis -->
          <div class="card-unified service-card p-8 flex flex-col justify-between space-y-6">
            <div class="space-y-4">
              <div class="w-12 h-12 rounded-lg flex items-center justify-center" style="background: rgba(23,195,242,0.18); border: 1px solid rgba(23,195,242,0.35);">
                <BarChart3 class="w-6 h-6 text-cyan" />
              </div>
              <h3 class="text-2xl font-display font-light text-white">Data Analysis</h3>
              <p class="t-muted text-sm leading-relaxed">Pengolahan dan visualisasi data bisnis ke dalam dashboard interaktif untuk memandu pengambilan keputusan strategis berbasis fakta.</p>
            </div>
            <div class="pt-4 border-t b-subtle">
              <router-link to="/layanan" class="text-xs font-bold t-cyan hover:underline uppercase tracking-wider flex items-center gap-1">
                <span>Pelajari Detail</span>
                <ArrowUpRight class="w-3.5 h-3.5" />
              </router-link>
            </div>
          </div>

          <!-- Game Dev -->
          <div class="card-unified service-card p-8 flex flex-col justify-between space-y-6">
            <div class="space-y-4">
              <div class="w-12 h-12 rounded-lg flex items-center justify-center" style="background: rgba(230,32,197,0.18); border: 1px solid rgba(230,32,197,0.35);">
                <Gamepad2 class="w-6 h-6 text-pink-400" />
              </div>
              <h3 class="text-2xl font-display font-light text-white">Game Development</h3>
              <p class="t-muted text-sm leading-relaxed">Perancangan game 2D/3D untuk kebutuhan promosi brand, simulasi edukatif, maupun pengalaman interaktif berbasis browser.</p>
            </div>
            <div class="pt-4 border-t b-subtle">
              <router-link to="/layanan" class="text-xs font-bold t-mag hover:underline uppercase tracking-wider flex items-center gap-1">
                <span>Pelajari Detail</span>
                <ArrowUpRight class="w-3.5 h-3.5" />
              </router-link>
            </div>
          </div>

          <!-- Mobile Apps -->
          <div class="card-unified service-card p-8 flex flex-col justify-between space-y-6">
            <div class="space-y-4">
              <div class="w-12 h-12 rounded-lg flex items-center justify-center" style="background: rgba(34,197,94,0.18); border: 1px solid rgba(34,197,94,0.35);">
                <Smartphone class="w-6 h-6 text-emerald-400" />
              </div>
              <h3 class="text-2xl font-display font-light text-white">Mobile Apps</h3>
              <p class="t-muted text-sm leading-relaxed">Pengembangan aplikasi mobile lintas platform menggunakan Flutter untuk Android dan iOS dengan performa native dan satu basis kode.</p>
            </div>
            <div class="pt-4 border-t b-subtle">
              <router-link to="/layanan" class="text-xs font-bold t-cyan hover:underline uppercase tracking-wider flex items-center gap-1">
                <span>Pelajari Detail</span>
                <ArrowUpRight class="w-3.5 h-3.5" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SHOWCASE PORTOFOLIO -->
    <section class="py-24 sm:py-28 border-b b-subtle">
      <div class="max-w-6xl mx-auto px-6 space-y-16">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div class="max-w-2xl space-y-3">
            <div class="text-xs font-mono t-cyan uppercase tracking-widest">SHOWCASE KARYA NYATA</div>
            <h2 class="text-3xl sm:text-4xl font-display font-light text-white">Preview Website & Aplikasi</h2>
            <p class="t-muted text-base sm:text-lg leading-relaxed">Tampilan live nyata dari proyek yang telah kami bangun dan beroperasi secara live production.</p>
          </div>
          <router-link to="/portofolio" class="btn-pill-secondary text-xs font-semibold py-2.5 px-6 self-start sm:self-auto flex items-center gap-1.5">
            <span>Semua Studi Kasus</span>
            <ArrowUpRight class="w-3.5 h-3.5" />
          </router-link>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Lentera -->
          <div class="card-unified project-tile p-5 flex flex-col justify-between space-y-4 group">
            <div class="rounded-lg overflow-hidden border b-subtle flex flex-col" style="background:#0B0E2B;">
              <div class="px-3 py-2 flex items-center justify-between border-b b-subtle" style="background:#070920;">
                <div class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full" style="background:#FF5F56;"></span><span class="w-2 h-2 rounded-full" style="background:#FFBD2E;"></span><span class="w-2 h-2 rounded-full" style="background:#27C93F;"></span></div>
                <span class="text-[10px] font-mono t-muted truncate max-w-[140px]">lentera.indramayukab.go.id</span>
                <span class="text-[9px] font-mono font-bold" style="color:#D4AF37;">PWA</span>
              </div>
              <div class="relative w-full overflow-hidden h-[160px] sm:h-[220px]" style="background:#0B0E2B;">
                <img 
                  src="/assets/projects/lentera.png" 
                  alt="Lentera Indramayu Live Website Preview" 
                  class="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
            <div class="space-y-2">
              <div class="flex items-center justify-between text-xs font-mono t-cyan">
                <span>PEMKAB INDRAMAYU</span>
                <span class="font-bold" style="color:#27C93F;">LIVE</span>
              </div>
              <h3 class="text-xl font-display font-light text-white">LENTERA Indramayu</h3>
              <p class="t-muted text-xs leading-relaxed">Platform digital resmi pelayanan publik dan ekonomi kerakyatan berbasis PWA.</p>
            </div>
            <div class="pt-3 border-t b-subtle flex items-center justify-between">
              <span class="text-[11px] font-mono t-faint">Laravel · PWA</span>
              <a href="https://lentera.indramayukab.go.id/" target="_blank" rel="noopener noreferrer" class="text-xs font-bold t-cyan hover:underline flex items-center gap-1">
                <span>Kunjungi</span>
                <ArrowUpRight class="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <!-- Portal Desa Tempursari -->
          <div class="card-unified project-tile p-5 flex flex-col justify-between space-y-4 group">
            <div class="rounded-lg overflow-hidden border b-subtle flex flex-col" style="background:#0B0E2B;">
              <div class="px-3 py-2 flex items-center justify-between border-b b-subtle" style="background:#070920;">
                <div class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full" style="background:#FF5F56;"></span><span class="w-2 h-2 rounded-full" style="background:#FFBD2E;"></span><span class="w-2 h-2 rounded-full" style="background:#27C93F;"></span></div>
                <span class="text-[10px] font-mono t-muted truncate max-w-[140px]">portal-desa-tempursari-six.vercel.app</span>
                <span class="text-[9px] font-mono font-bold" style="color:#10B981;">PORTAL</span>
              </div>
              <div class="relative w-full overflow-hidden h-[160px] sm:h-[220px]" style="background:#0B0E2B;">
                <img 
                  src="/assets/projects/tempursari.png" 
                  alt="Portal Desa Tempursari Live Website Preview" 
                  class="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
            <div class="space-y-2">
              <div class="flex items-center justify-between text-xs font-mono t-cyan">
                <span>PEMERINTAH DESA</span>
                <span class="font-bold" style="color:#27C93F;">LIVE</span>
              </div>
              <h3 class="text-xl font-display font-light text-white">Portal Desa Tempursari</h3>
              <p class="t-muted text-xs leading-relaxed">Portal informasi digital terintegrasi yang menyajikan profil wilayah, infografis statistik kependudukan, kesenian daerah, dan peta interaktif.</p>
            </div>
            <div class="pt-3 border-t b-subtle flex items-center justify-between">
              <span class="text-[11px] font-mono t-faint">Web Portal · Peta Interaktif</span>
              <a href="https://portal-desa-tempursari-six.vercel.app/" target="_blank" rel="noopener noreferrer" class="text-xs font-bold t-cyan hover:underline flex items-center gap-1">
                <span>Kunjungi</span>
                <ArrowUpRight class="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <!-- Visit Gumiwang -->
          <div class="card-unified project-tile p-5 flex flex-col justify-between space-y-4 group">
            <div class="rounded-lg overflow-hidden border b-subtle flex flex-col" style="background:#0B0E2B;">
              <div class="px-3 py-2 flex items-center justify-between border-b b-subtle" style="background:#070920;">
                <div class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full" style="background:#FF5F56;"></span><span class="w-2 h-2 rounded-full" style="background:#FFBD2E;"></span><span class="w-2 h-2 rounded-full" style="background:#27C93F;"></span></div>
                <span class="text-[10px] font-mono t-muted truncate max-w-[140px]">visitgumiwang.web.id</span>
                <span class="text-[9px] font-mono font-bold" style="color:#34D399;">DESA</span>
              </div>
              <div class="relative w-full overflow-hidden h-[160px] sm:h-[220px]" style="background:#0B0E2B;">
                <img 
                  src="/assets/projects/visitgumiwang.png" 
                  alt="Visit Gumiwang Live Website Preview" 
                  class="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
            <div class="space-y-2">
              <div class="flex items-center justify-between text-xs font-mono t-cyan">
                <span>DESA WISATA &amp; UMKM</span>
                <span class="font-bold" style="color:#27C93F;">LIVE</span>
              </div>
              <h3 class="text-xl font-display font-light text-white">Visit Gumiwang</h3>
              <p class="t-muted text-xs leading-relaxed">Portal promosi potensi wisata alam, agrikultur, dan katalog produk UMKM Desa Gumiwang.</p>
            </div>
            <div class="pt-3 border-t b-subtle flex items-center justify-between">
              <span class="text-[11px] font-mono t-faint">Vite · Tailwind</span>
              <a href="https://visitgumiwang.web.id/" target="_blank" rel="noopener noreferrer" class="text-xs font-bold t-cyan hover:underline flex items-center gap-1">
                <span>Kunjungi</span>
                <ArrowUpRight class="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <!-- CatatKas -->
          <div class="card-unified project-tile p-5 flex flex-col justify-between space-y-4 group">
            <div class="rounded-lg overflow-hidden border b-subtle flex flex-col" style="background:#0B0E2B;">
              <div class="px-3 py-2 flex items-center justify-between border-b b-subtle" style="background:#070920;">
                <div class="flex items-center gap-1.5"><span class="w-2 h-2 rounded-full" style="background:#FF5F56;"></span><span class="w-2 h-2 rounded-full" style="background:#FFBD2E;"></span><span class="w-2 h-2 rounded-full" style="background:#27C93F;"></span></div>
                <span class="text-[10px] font-mono t-muted truncate max-w-[140px]">catatkas-web.vercel.app</span>
                <span class="text-[9px] font-mono font-bold" style="color:#F472B6;">FLUTTER</span>
              </div>
              <div class="relative w-full overflow-hidden h-[160px] sm:h-[220px]" style="background:#0B0E2B;">
                <img 
                  src="/assets/projects/catatkas.png" 
                  alt="CatatKas UMKM Live App Preview" 
                  class="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>
            <div class="space-y-2">
              <div class="flex items-center justify-between text-xs font-mono t-mag">
                <span>FULL FLUTTER APP</span>
                <span class="font-bold" style="color:#27C93F;">LIVE</span>
              </div>
              <h3 class="text-xl font-display font-light text-white">CatatKas UMKM</h3>
              <p class="t-muted text-xs leading-relaxed">Aplikasi pencatatan keuangan digital instan berbasis Full Flutter untuk pencatatan mutasi transaksi dan laporan laba rugi.</p>
            </div>
            <div class="pt-3 border-t b-subtle flex items-center justify-between">
              <span class="text-[11px] font-mono t-faint">Full Flutter · Dart</span>
              <a href="https://catatkas-web.vercel.app/" target="_blank" rel="noopener noreferrer" class="text-xs font-bold t-mag hover:underline flex items-center gap-1">
                <span>Kunjungi</span>
                <ArrowUpRight class="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION NEWS & INSIGHTS -->
    <section class="bg-elevated py-24 sm:py-28 border-b b-subtle relative">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        <div class="text-center max-w-2xl mx-auto space-y-3">
          <div class="text-xs font-mono t-cyan uppercase tracking-widest font-semibold">INSIGHTS &amp; NEWS</div>
          <h2 class="text-3xl sm:text-4xl font-display font-light text-white">Wawasan &amp; Catatan Teknologi</h2>
          <p class="t-muted text-base sm:text-lg leading-relaxed">Artikel teknis, tren arsitektur software, dan inovasi digital terkini dari tim pengembang Nexa.</p>
        </div>

        <!-- Coming Soon Card -->
        <div class="card-unified p-10 sm:p-14 text-center space-y-4">
          <div class="text-xs font-mono t-cyan uppercase tracking-wider font-semibold">COMING SOON</div>
          <h3 class="text-2xl sm:text-3xl font-display font-light text-white">Segera Hadir</h3>
          <p class="t-muted text-sm sm:text-base max-w-md mx-auto leading-relaxed">
            Kami sedang menyiapkan artikel dan insight seputar teknologi web, digitalisasi, dan pengembangan aplikasi modern.
          </p>
        </div>
      </div>
    </section>

    <!-- CTA BAND -->
    <section class="bg-base py-20 sm:py-24 border-b b-subtle relative overflow-hidden">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 relative z-10">
        <div class="text-xs font-mono t-cyan uppercase tracking-[0.25em] font-semibold">BE SEEN BE CHOSEN</div>
        <h2 class="text-3xl sm:text-4xl font-display font-light text-white leading-tight">Siap Menghadirkan Solusi Digital Terbaik?</h2>
        <p class="t-muted text-base sm:text-lg max-w-xl mx-auto leading-relaxed">Konsultasikan kebutuhan website, pengolahan data, atau game Anda bersama tim kami. Dapatkan arsitektur terbaik agar brand Anda dilihat dan dipilih.</p>
        <div class="pt-4">
          <router-link to="/kontak" class="btn-pill-primary text-sm font-bold uppercase tracking-wider py-4 px-10">Konsultasi Sekarang</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Globe, BarChart3, Gamepad2, Smartphone, ArrowUpRight } from 'lucide-vue-next'
import { animateStrokeDraw, animateHeroEntrance, animateStaggerFadeIn } from '../utils/animations'

const heroLine = ref(null)
const heroHeadline = ref(null)
const heroSubtitle = ref(null)
const heroCtas = ref(null)
const heroVisual = ref(null)

onMounted(() => {
  if (heroLine.value) { animateStrokeDraw(heroLine.value, 1500) }
  animateHeroEntrance({ headline: [heroHeadline.value], subtitle: heroSubtitle.value, cta: heroCtas.value, visual: heroVisual.value })
  animateStaggerFadeIn('.service-card', { delay: 400, stagger: 120 })
  animateStaggerFadeIn('.project-tile', { delay: 600, stagger: 120 })
})
</script>

