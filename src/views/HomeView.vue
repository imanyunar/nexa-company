<template>
  <div class="bg-black text-white">

    <!-- HERO SECTION (Inspired by "Together We Reinvented" by Accenture) -->
    <section class="py-20 sm:py-28 lg:py-32 border-b border-[rgba(241,241,239,0.12)] relative overflow-hidden">
      <!-- Dynamic Reinvention Angled Trajectory Lines -->
      <div class="absolute inset-0 pointer-events-none z-0">
        <svg class="w-full h-full" viewBox="0 0 1440 900" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="reinventedLineGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#0041f0" stop-opacity="0.8" />
              <stop offset="45%" stop-color="#a600ff" stop-opacity="0.7" />
              <stop offset="85%" stop-color="#e2062e" stop-opacity="0.85" />
            </linearGradient>
            <linearGradient id="reinventedGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#0041f0" stop-opacity="0.12" />
              <stop offset="100%" stop-color="#e2062e" stop-opacity="0.04" />
            </linearGradient>
          </defs>
          <!-- Dynamic Angled Trajectory Vector -->
          <path ref="heroLine" d="M -100 820 L 520 440 L 1120 180 L 1520 -20" stroke="url(#reinventedLineGrad)" stroke-width="2" stroke-linecap="round" class="opacity-80" />
          <path d="M 80 900 L 700 520 L 1300 260" stroke="rgba(241, 241, 239, 0.05)" stroke-width="1" stroke-dasharray="6 10" />
        </svg>
        <div class="absolute top-1/4 right-10 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(0,65,240,0.15)_0%,transparent_70%)] blur-3xl pointer-events-none"></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <!-- Headline & Narrative -->
          <div class="lg:col-span-7 space-y-8">
            
            <!-- Category Badge -->
            <div class="inline-flex items-center gap-2.5 px-3 py-1.5 bg-[#141418] border border-[rgba(241,241,239,0.14)] rounded-[2px] text-xs font-mono text-white">
              <span class="w-2 h-2 rounded-full bg-primary"></span>
              <span class="tracking-wider uppercase">NEXA DIGITAL STUDIO — 2026</span>
            </div>

            <!-- Display Headline with Graphik 500 & Tight Tracking -->
            <h1 ref="heroHeadline" class="text-4xl sm:text-6xl lg:text-[4.2rem] font-display font-medium text-white leading-[1.08] tracking-[-1.9px]">
              Membangun Solusi Web, Analisis Data, &amp; Media Interaktif.
            </h1>

            <p ref="heroSubtitle" class="text-[#999999] text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              Nexa Digital Agency adalah agensi teknologi independen yang membantu bisnis, instansi, dan UMKM menghadirkan pengalaman digital tangguh dengan arsitektur modern dan eksekusi bersih.
            </p>

            <!-- CTAs -->
            <div ref="heroCtas" class="flex flex-wrap items-center gap-4 pt-2">
              <router-link to="/kontak" class="btn-primary text-sm font-medium uppercase tracking-wider py-3.5 px-8 group">
                <span>Mulai Proyek</span>
                <span class="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </router-link>
              <router-link to="/portofolio" class="btn-secondary text-sm font-medium py-3.5 px-8">
                <span>Lihat Portofolio</span>
              </router-link>
            </div>
          </div>

          <!-- Right Showcase Card -->
          <div ref="heroVisual" class="lg:col-span-5 flex justify-center lg:justify-end">
            <div class="w-full max-w-md bg-[#0e0e11] border border-[rgba(241,241,239,0.14)] rounded-[4px] p-6 space-y-6 shadow-2xl relative">
              
              <!-- Window Header -->
              <div class="flex items-center justify-between border-b border-[rgba(241,241,239,0.1)] pb-3">
                <div class="flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-[#333333]"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-[#333333]"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-[#333333]"></span>
                </div>
                <span class="font-mono text-[11px] text-[#999999]">nexa-core-engine.v3</span>
              </div>

              <!-- Central Logomark Preview -->
              <div class="relative py-10 px-4 flex items-center justify-center bg-[#070709] rounded-[2px] border border-[rgba(241,241,239,0.06)] overflow-hidden">
                <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,65,240,0.18)_0%,transparent_65%)]"></div>
                <img 
                  src="/assets/logo.png" 
                  alt="Nexa Identity" 
                  class="w-36 h-36 object-contain relative z-10 filter drop-shadow transition-transform hover:scale-105 duration-300"
                />
              </div>

              <!-- Metadata Specifications -->
              <div class="space-y-2.5 font-mono text-xs">
                <div class="flex justify-between py-1.5 border-b border-[rgba(241,241,239,0.08)]">
                  <span class="text-[#999999]">Kategori</span>
                  <span class="text-white font-medium">Enterprise Tech Studio</span>
                </div>
                <div class="flex justify-between py-1.5 border-b border-[rgba(241,241,239,0.08)]">
                  <span class="text-[#999999]">Teknologi Utama</span>
                  <span class="text-white font-medium">Vue 3, Laravel, Flutter, Unity</span>
                </div>
                <div class="flex justify-between py-1.5">
                  <span class="text-[#999999]">Status Operasional</span>
                  <span class="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                    100% Active Production
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- SECTION: LAYANAN SPESIALIS (4 Consulting Pillars) -->
    <section class="bg-[#09090b] py-20 sm:py-28 border-b border-[rgba(241,241,239,0.12)] relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        
        <div class="section-header flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div class="max-w-2xl space-y-3">
            <div class="text-xs font-mono text-primary uppercase tracking-widest font-semibold">KEAHLIAN UTAMA</div>
            <h2 class="text-3xl sm:text-4xl font-display font-medium text-white">Empat Layanan Spesialis</h2>
            <p class="text-[#999999] text-base leading-relaxed">Fokus kemampuan terarah untuk menghadirkan keunggulan kompetitif bagi produk Anda.</p>
          </div>
          <router-link to="/layanan" class="btn-secondary text-xs font-medium py-2.5 px-6 self-start sm:self-auto flex items-center gap-2 group">
            <span>Semua Layanan</span>
            <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </router-link>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <!-- Web Development -->
          <div class="card-dark service-card p-8 sm:p-10 flex flex-col justify-between space-y-8 group">
            <div class="space-y-5">
              <div class="flex items-center justify-between">
                <div class="w-12 h-12 rounded-[4px] flex items-center justify-center bg-[rgba(0,65,240,0.15)] border border-[rgba(0,65,240,0.3)]">
                  <span class="material-symbols-outlined text-2xl text-primary">language</span>
                </div>
                <span class="text-xs font-mono text-[#999999]">01 / WEB</span>
              </div>
              <h3 class="text-2xl font-display font-medium text-white group-hover:text-primary transition-colors">Web Development</h3>
              <p class="text-[#999999] text-sm leading-relaxed">
                Pembuatan website company profile modern, landing page berkonversi tinggi, dashboard bisnis interaktif, dan arsitektur aplikasi web berkinerja tinggi.
              </p>
            </div>
            <div class="pt-5 border-t border-[rgba(241,241,239,0.1)] flex items-center justify-between">
              <span class="text-xs font-mono text-[#666666]">Vue 3 · Laravel · Tailwind</span>
              <router-link to="/layanan" class="text-xs font-semibold text-primary hover:underline uppercase tracking-wider flex items-center gap-1.5 group/link">
                <span>Pelajari Detail</span>
                <span class="material-symbols-outlined text-[16px] group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
              </router-link>
            </div>
          </div>

          <!-- Data Analysis -->
          <div class="card-dark service-card p-8 sm:p-10 flex flex-col justify-between space-y-8 group">
            <div class="space-y-5">
              <div class="flex items-center justify-between">
                <div class="w-12 h-12 rounded-[4px] flex items-center justify-center bg-[rgba(0,77,255,0.15)] border border-[rgba(0,77,255,0.3)]">
                  <span class="material-symbols-outlined text-2xl text-[#004dff]">analytics</span>
                </div>
                <span class="text-xs font-mono text-[#999999]">02 / DATA</span>
              </div>
              <h3 class="text-2xl font-display font-medium text-white group-hover:text-primary transition-colors">Data Analysis</h3>
              <p class="text-[#999999] text-sm leading-relaxed">
                Pengolahan dan visualisasi data bisnis ke dalam dashboard interaktif untuk memandu pengambilan keputusan strategis berbasis data aktual.
              </p>
            </div>
            <div class="pt-5 border-t border-[rgba(241,241,239,0.1)] flex items-center justify-between">
              <span class="text-xs font-mono text-[#666666]">Python · SQL · BI Dashboard</span>
              <router-link to="/layanan" class="text-xs font-semibold text-primary hover:underline uppercase tracking-wider flex items-center gap-1.5 group/link">
                <span>Pelajari Detail</span>
                <span class="material-symbols-outlined text-[16px] group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
              </router-link>
            </div>
          </div>

          <!-- Game Development -->
          <div class="card-dark service-card p-8 sm:p-10 flex flex-col justify-between space-y-8 group">
            <div class="space-y-5">
              <div class="flex items-center justify-between">
                <div class="w-12 h-12 rounded-[4px] flex items-center justify-center bg-[rgba(226,6,46,0.15)] border border-[rgba(226,6,46,0.3)]">
                  <span class="material-symbols-outlined text-2xl text-secondary">sports_esports</span>
                </div>
                <span class="text-xs font-mono text-[#999999]">03 / INTERACTIVE</span>
              </div>
              <h3 class="text-2xl font-display font-medium text-white group-hover:text-secondary transition-colors">Game Development</h3>
              <p class="text-[#999999] text-sm leading-relaxed">
                Perancangan game 2D/3D untuk kampanye promosi brand melalui gamifikasi interaktif, simulasi edukatif, maupun pengalaman browser WebGL.
              </p>
            </div>
            <div class="pt-5 border-t border-[rgba(241,241,239,0.1)] flex items-center justify-between">
              <span class="text-xs font-mono text-[#666666]">Unity · C# · WebGL</span>
              <router-link to="/layanan" class="text-xs font-semibold text-secondary hover:underline uppercase tracking-wider flex items-center gap-1.5 group/link">
                <span>Pelajari Detail</span>
                <span class="material-symbols-outlined text-[16px] group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
              </router-link>
            </div>
          </div>

          <!-- Mobile Apps -->
          <div class="card-dark service-card p-8 sm:p-10 flex flex-col justify-between space-y-8 group">
            <div class="space-y-5">
              <div class="flex items-center justify-between">
                <div class="w-12 h-12 rounded-[4px] flex items-center justify-center bg-[rgba(166,0,255,0.15)] border border-[rgba(166,0,255,0.3)]">
                  <span class="material-symbols-outlined text-2xl text-violet">smartphone</span>
                </div>
                <span class="text-xs font-mono text-[#999999]">04 / MOBILE</span>
              </div>
              <h3 class="text-2xl font-display font-medium text-white group-hover:text-violet transition-colors">Mobile Apps</h3>
              <p class="text-[#999999] text-sm leading-relaxed">
                Pengembangan aplikasi mobile lintas platform dengan Flutter untuk Android dan iOS, menghasilkan kinerja native dan efisiensi satu basis kode.
              </p>
            </div>
            <div class="pt-5 border-t border-[rgba(241,241,239,0.1)] flex items-center justify-between">
              <span class="text-xs font-mono text-[#666666]">Flutter · Dart · Firebase</span>
              <router-link to="/layanan" class="text-xs font-semibold text-primary hover:underline uppercase tracking-wider flex items-center gap-1.5 group/link">
                <span>Pelajari Detail</span>
                <span class="material-symbols-outlined text-[16px] group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
              </router-link>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- SECTION: SHOWCASE PORTOFOLIO (Live Browser Mockups) -->
    <section class="py-20 sm:py-28 border-b border-[rgba(241,241,239,0.12)]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        
        <div class="section-header flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div class="max-w-2xl space-y-3">
            <div class="text-xs font-mono text-primary uppercase tracking-widest font-semibold">SHOWCASE KARYA NYATA</div>
            <h2 class="text-3xl sm:text-4xl font-display font-medium text-white">Preview Website &amp; Aplikasi</h2>
            <p class="text-[#999999] text-base leading-relaxed">Tampilan live nyata dari sistem yang telah kami rilis dan beroperasi di lingkungan produksi publik.</p>
          </div>
          <router-link to="/portofolio" class="btn-secondary text-xs font-medium py-2.5 px-6 self-start sm:self-auto flex items-center gap-2 group">
            <span>Semua Studi Kasus</span>
            <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </router-link>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <!-- PixelCraft Studio (Featured Flagship Release) -->
          <div class="card-dark project-tile p-6 sm:p-8 flex flex-col md:flex-row gap-8 items-center justify-between group border-[rgba(166,0,255,0.3)] hover:border-violet/60 transition-colors md:col-span-2">
            <div class="w-full md:w-1/2 space-y-4">
              <div class="flex items-center gap-2.5 flex-wrap">
                <span class="w-2.5 h-2.5 rounded-full bg-violet"></span>
                <span class="text-xs font-mono font-semibold uppercase tracking-wider text-violet">AI IMAGE ENHANCER &amp; WEB TOOLKIT</span>
                <span class="text-[9px] font-mono font-bold text-white bg-violet px-2 py-0.5 rounded-[2px]">FEATURED NEW RELEASE</span>
              </div>
              <h3 class="text-2xl sm:text-3xl font-display font-medium text-white group-hover:text-violet transition-colors">PixelCraft Studio</h3>
              <p class="text-[#999999] text-sm leading-relaxed">
                Studio pemrosesan citra digital AI dengan privasi 100% di sisi klien browser (zero cloud dependency). Dilengkapi algoritma Laplacian 3x3 sharpening, denoise bilateral, konversi WebP/PNG, dan live RGB histogram.
              </p>
              <div class="space-y-2 pt-1 text-xs text-white font-medium">
                <div class="flex items-center gap-2">
                  <span class="material-symbols-outlined text-[16px] text-violet shrink-0">check_circle</span>
                  <span>100% Client-Side Privacy: berkas foto diproses lokal di peramban pengguna.</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="material-symbols-outlined text-[16px] text-violet shrink-0">check_circle</span>
                  <span>Akselerasi GPU/WebGL dengan fitur Pro Color Grading &amp; Retro Pixel Quantizer.</span>
                </div>
              </div>
              <div class="pt-3 flex flex-wrap items-center gap-3">
                <a href="https://pixelcraft-psi-blue.vercel.app/" target="_blank" rel="noopener noreferrer" class="btn-primary text-xs uppercase font-medium py-3 px-6 group/btn inline-flex items-center gap-2 bg-violet hover:bg-violet/85 border-violet">
                  <span>Buka Aplikasi Live</span>
                  <span class="material-symbols-outlined text-[16px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                </a>
                <router-link to="/portofolio#pixelcraft" class="btn-secondary text-xs uppercase font-medium py-3 px-6 inline-flex items-center gap-1.5">
                  <span>Lihat Studi Kasus</span>
                </router-link>
              </div>
            </div>

            <div class="w-full md:w-1/2">
              <div class="rounded-[4px] overflow-hidden border border-[rgba(241,241,239,0.14)] bg-black flex flex-col shadow-xl">
                <div class="px-3.5 py-2.5 flex items-center justify-between border-b border-[rgba(241,241,239,0.1)] bg-[#0a0a0c]">
                  <div class="flex items-center gap-1.5">
                    <span class="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
                    <span class="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
                  </div>
                  <span class="text-[11px] font-mono text-[#999999] truncate max-w-[200px]">pixelcraft-psi-blue.vercel.app</span>
                  <span class="text-[9px] font-mono font-bold text-violet bg-violet/10 px-2 py-0.5 rounded-[2px]">WEBGL &amp; AI</span>
                </div>
                <div class="relative w-full overflow-hidden h-[200px] sm:h-[260px] bg-black">
                  <img 
                    src="/assets/projects/pixelcraft.png" 
                    alt="PixelCraft Studio AI Live App Preview" 
                    class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Lentera -->
          <div class="card-dark project-tile p-5 flex flex-col justify-between space-y-5 group">
            <div class="rounded-[4px] overflow-hidden border border-[rgba(241,241,239,0.14)] bg-black flex flex-col">
              <div class="px-3.5 py-2.5 flex items-center justify-between border-b border-[rgba(241,241,239,0.1)] bg-[#0a0a0c]">
                <div class="flex items-center gap-1.5">
                  <span class="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
                </div>
                <span class="text-[11px] font-mono text-[#999999] truncate max-w-[180px]">lentera.indramayukab.go.id</span>
                <span class="text-[9px] font-mono font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-[2px]">PWA LIVE</span>
              </div>
              <div class="relative w-full overflow-hidden h-[170px] sm:h-[230px] bg-black">
                <img 
                  src="/assets/projects/lentera.png" 
                  alt="Lentera Indramayu Live Website Preview" 
                  class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
            </div>
            <div class="space-y-2">
              <div class="flex items-center justify-between text-xs font-mono text-primary">
                <span>PEMKAB INDRAMAYU</span>
                <span class="text-emerald-400 font-bold">100% ONLINE</span>
              </div>
              <h3 class="text-xl font-display font-medium text-white group-hover:text-primary transition-colors">LENTERA Indramayu</h3>
              <p class="text-[#999999] text-xs leading-relaxed">Platform digital terpadu pelayanan publik dan pemberdayaan ekonomi kerakyatan berbasis Progressive Web App (PWA).</p>
            </div>
            <div class="pt-3 border-t border-[rgba(241,241,239,0.1)] flex items-center justify-between">
              <span class="text-xs font-mono text-[#666666]">Laravel · PWA Architecture</span>
              <a href="https://lentera.indramayukab.go.id/" target="_blank" rel="noopener noreferrer" class="text-xs font-semibold text-primary hover:underline flex items-center gap-1 group/link">
                <span>Buka Website</span>
                <span class="material-symbols-outlined text-[16px] group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
          </div>

          <!-- Portal Desa Tempursari -->
          <div class="card-dark project-tile p-5 flex flex-col justify-between space-y-5 group">
            <div class="rounded-[4px] overflow-hidden border border-[rgba(241,241,239,0.14)] bg-black flex flex-col">
              <div class="px-3.5 py-2.5 flex items-center justify-between border-b border-[rgba(241,241,239,0.1)] bg-[#0a0a0c]">
                <div class="flex items-center gap-1.5">
                  <span class="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
                </div>
                <span class="text-[11px] font-mono text-[#999999] truncate max-w-[180px]">portal-desa-tempursari.app</span>
                <span class="text-[9px] font-mono font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-[2px]">PORTAL</span>
              </div>
              <div class="relative w-full overflow-hidden h-[170px] sm:h-[230px] bg-black">
                <img 
                  src="/assets/projects/tempursari.png" 
                  alt="Portal Desa Tempursari Live Website Preview" 
                  class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
            </div>
            <div class="space-y-2">
              <div class="flex items-center justify-between text-xs font-mono text-primary">
                <span>PEMERINTAH DESA</span>
                <span class="text-emerald-400 font-bold">100% ONLINE</span>
              </div>
              <h3 class="text-xl font-display font-medium text-white group-hover:text-primary transition-colors">Portal Desa Tempursari</h3>
              <p class="text-[#999999] text-xs leading-relaxed">Portal informasi digital terintegrasi yang menyajikan profil wilayah, infografis statistik kependudukan, kesenian daerah, dan peta interaktif.</p>
            </div>
            <div class="pt-3 border-t border-[rgba(241,241,239,0.1)] flex items-center justify-between">
              <span class="text-xs font-mono text-[#666666]">Next.js · Tailwind · Interactive Maps</span>
              <a href="https://portal-desa-tempursari-six.vercel.app/" target="_blank" rel="noopener noreferrer" class="text-xs font-semibold text-primary hover:underline flex items-center gap-1 group/link">
                <span>Buka Website</span>
                <span class="material-symbols-outlined text-[16px] group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
          </div>

          <!-- Visit Gumiwang -->
          <div class="card-dark project-tile p-5 flex flex-col justify-between space-y-5 group">
            <div class="rounded-[4px] overflow-hidden border border-[rgba(241,241,239,0.14)] bg-black flex flex-col">
              <div class="px-3.5 py-2.5 flex items-center justify-between border-b border-[rgba(241,241,239,0.1)] bg-[#0a0a0c]">
                <div class="flex items-center gap-1.5">
                  <span class="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
                </div>
                <span class="text-[11px] font-mono text-[#999999] truncate max-w-[180px]">visitgumiwang.web.id</span>
                <span class="text-[9px] font-mono font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-[2px]">DESA WISATA</span>
              </div>
              <div class="relative w-full overflow-hidden h-[170px] sm:h-[230px] bg-black">
                <img 
                  src="/assets/projects/visitgumiwang.png" 
                  alt="Visit Gumiwang Live Website Preview" 
                  class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
            </div>
            <div class="space-y-2">
              <div class="flex items-center justify-between text-xs font-mono text-primary">
                <span>DESA WISATA &amp; UMKM</span>
                <span class="text-emerald-400 font-bold">100% ONLINE</span>
              </div>
              <h3 class="text-xl font-display font-medium text-white group-hover:text-primary transition-colors">Visit Gumiwang</h3>
              <p class="text-[#999999] text-xs leading-relaxed">Portal promosi potensi wisata alam, agrikultur, perikanan, dan etalase digital produk UMKM lokal Desa Gumiwang.</p>
            </div>
            <div class="pt-3 border-t border-[rgba(241,241,239,0.1)] flex items-center justify-between">
              <span class="text-xs font-mono text-[#666666]">Vite · TailwindCSS · Fast CDN</span>
              <a href="https://visitgumiwang.web.id/" target="_blank" rel="noopener noreferrer" class="text-xs font-semibold text-primary hover:underline flex items-center gap-1 group/link">
                <span>Buka Website</span>
                <span class="material-symbols-outlined text-[16px] group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
          </div>

          <!-- CatatKas -->
          <div class="card-dark project-tile p-5 flex flex-col justify-between space-y-5 group">
            <div class="rounded-[4px] overflow-hidden border border-[rgba(241,241,239,0.14)] bg-black flex flex-col">
              <div class="px-3.5 py-2.5 flex items-center justify-between border-b border-[rgba(241,241,239,0.1)] bg-[#0a0a0c]">
                <div class="flex items-center gap-1.5">
                  <span class="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
                  <span class="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
                </div>
                <span class="text-[11px] font-mono text-[#999999] truncate max-w-[180px]">catatkas-web.vercel.app</span>
                <span class="text-[9px] font-mono font-bold text-secondary bg-secondary/10 px-2 py-0.5 rounded-[2px]">FULL FLUTTER</span>
              </div>
              <div class="relative w-full overflow-hidden h-[170px] sm:h-[230px] bg-black">
                <img 
                  src="/assets/projects/catatkas.png" 
                  alt="CatatKas UMKM Live App Preview" 
                  class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
            </div>
            <div class="space-y-2">
              <div class="flex items-center justify-between text-xs font-mono text-secondary">
                <span>FULL FLUTTER CROSS-PLATFORM</span>
                <span class="text-emerald-400 font-bold">100% ONLINE</span>
              </div>
              <h3 class="text-xl font-display font-medium text-white group-hover:text-secondary transition-colors">CatatKas UMKM</h3>
              <p class="text-[#999999] text-xs leading-relaxed">Aplikasi pencatatan keuangan bisnis instan bagi UMKM untuk mencatat mutasi transaksi harian dan kalkulasi laba rugi otomatis.</p>
            </div>
            <div class="pt-3 border-t border-[rgba(241,241,239,0.1)] flex items-center justify-between">
              <span class="text-xs font-mono text-[#666666]">Flutter · Dart · Web &amp; Mobile</span>
              <a href="https://catatkas-web.vercel.app/" target="_blank" rel="noopener noreferrer" class="text-xs font-semibold text-secondary hover:underline flex items-center gap-1 group/link">
                <span>Buka Aplikasi</span>
                <span class="material-symbols-outlined text-[16px] group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- SECTION: NEWS & TECH ANNOUNCEMENTS (Accenture Newsroom Style) -->
    <section class="bg-[#09090b] py-20 sm:py-28 border-b border-[rgba(241,241,239,0.12)] relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
        
        <div class="section-header flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div class="max-w-2xl space-y-3">
            <div class="text-xs font-mono text-primary uppercase tracking-widest font-semibold">NEWSROOM &amp; ANNOUNCEMENTS</div>
            <h2 class="text-3xl sm:text-4xl font-display font-medium text-white">Warta Resmi &amp; Pengumuman Rilis</h2>
            <p class="text-[#999999] text-base leading-relaxed">Pemberitahuan resmi peluncuran produk digital baru, riset rekayasa software, dan wawasan arsitektur dari tim Nexa.</p>
          </div>
          <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-[#141418] border border-[rgba(241,241,239,0.14)] rounded-[2px] text-xs font-mono text-[#999999] self-start sm:self-auto">
            <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>PRESS RELEASES 2026</span>
          </div>
        </div>

        <!-- Featured Major Announcement: PixelCraft Studio -->
        <div class="reveal-item card-dark p-6 sm:p-10 border-[rgba(166,0,255,0.35)] hover:border-violet/60 transition-all duration-300 space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[rgba(241,241,239,0.1)] pb-5">
            <div class="flex items-center gap-3 flex-wrap">
              <span class="px-2.5 py-1 rounded-[2px] bg-violet/20 border border-violet/40 text-violet text-xs font-mono font-semibold">PENGUMUMAN RILIS RESMI</span>
              <span class="text-xs font-mono text-[#666666]">22 September 2026</span>
            </div>
            <div class="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>LIVE PRODUCTION DEPLOYED</span>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div class="lg:col-span-8 space-y-4">
              <h3 class="text-2xl sm:text-3xl font-display font-medium text-white leading-snug">
                Nexa Digital Agency Mengumumkan Perilisan Publik <span class="text-violet">PixelCraft Studio</span>: Rangkaian AI Photo Enhancer &amp; Color Editor 100% Client-Side Privacy
              </h3>
              <p class="text-[#999999] text-sm sm:text-base leading-relaxed">
                Hari ini, tim rekayasa perangkat lunak Nexa resmi merilis <strong>PixelCraft Studio</strong> ke lingkungan publik. Menjawab tantangan keamanan data dan privasi visual di era cloud, PixelCraft Studio mengeksekusi seluruh pipeline komputasi citra (termasuk penajaman matriks Laplacian 3x3, pengurangan noise spasial bilateral, penghitungan spektrum histogram RGB, kompresi multi-format WebP/PNG/JPG, hingga kuantisasi retro pixel art) secara lokal di peramban browser pengguna dengan akselerasi GPU &amp; WebGL tanpa dependensi API eksternal.
              </p>
              <div class="flex flex-wrap gap-2 pt-1 text-xs font-mono text-[#cccccc]">
                <span class="px-2.5 py-1 bg-[#141418] border border-[rgba(241,241,239,0.08)] rounded-[2px]">#ClientSideAI</span>
                <span class="px-2.5 py-1 bg-[#141418] border border-[rgba(241,241,239,0.08)] rounded-[2px]">#PrivacyFirst</span>
                <span class="px-2.5 py-1 bg-[#141418] border border-[rgba(241,241,239,0.08)] rounded-[2px]">#WebGLShaders</span>
                <span class="px-2.5 py-1 bg-[#141418] border border-[rgba(241,241,239,0.08)] rounded-[2px]">#WebPCompression</span>
              </div>
            </div>

            <div class="lg:col-span-4 bg-[#141418] p-6 rounded-[4px] border border-[rgba(241,241,239,0.1)] space-y-4 flex flex-col justify-between">
              <div class="space-y-2 text-xs font-mono">
                <div class="text-[#666666]">STATUS RILIS:</div>
                <div class="font-medium text-white text-sm">Tersedia untuk Umum (Gratis)</div>
                <div class="text-[#666666] pt-2">TAUTAN SISTEM:</div>
                <div class="font-medium text-violet break-all text-xs">pixelcraft-psi-blue.vercel.app</div>
              </div>
              <div class="pt-3 space-y-2.5">
                <a href="https://pixelcraft-psi-blue.vercel.app/" target="_blank" rel="noopener noreferrer" class="btn-primary w-full text-center text-xs uppercase font-medium py-3 flex items-center justify-center gap-2 group bg-violet hover:bg-violet/85 border-violet">
                  <span>Coba PixelCraft Studio</span>
                  <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </a>
                <router-link to="/portofolio#pixelcraft" class="btn-secondary w-full text-center text-xs uppercase font-medium py-2.5 flex items-center justify-center gap-1.5 text-white">
                  <span>Detail Studi Kasus</span>
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- 2 Secondary Tech Notes / Articles -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="reveal-item card-dark p-6 sm:p-8 space-y-4 flex flex-col justify-between">
            <div class="space-y-3">
              <div class="flex items-center justify-between text-xs font-mono text-[#666666]">
                <span class="text-primary font-medium">STUDI ARSITEKTUR</span>
                <span>MARET 2026</span>
              </div>
              <h4 class="text-xl font-display font-medium text-white hover:text-primary transition-colors">
                Membangun Progressive Web App Skala Pemerintah: Pembelajaran dari LENTERA Indramayu
              </h4>
              <p class="text-[#999999] text-xs leading-relaxed">
                Bagaimana integrasi Service Worker, caching terdistribusi, dan desain responsif memungkinkan ribuan masyarakat mengakses layanan administratif publik secara andal.
              </p>
            </div>
            <div class="pt-3 border-t border-[rgba(241,241,239,0.08)] flex items-center justify-between">
              <span class="text-xs font-mono text-[#666666]">PWA · Laravel · MySQL</span>
              <router-link to="/portofolio" class="text-xs font-semibold text-primary hover:underline flex items-center gap-1">
                <span>Baca Ringkasan</span>
                <span class="material-symbols-outlined text-[15px]">arrow_forward</span>
              </router-link>
            </div>
          </div>

          <div class="reveal-item card-dark p-6 sm:p-8 space-y-4 flex flex-col justify-between">
            <div class="space-y-3">
              <div class="flex items-center justify-between text-xs font-mono text-[#666666]">
                <span class="text-secondary font-medium">STRATEGI REKAYASA</span>
                <span>FEBRUARI 2026</span>
              </div>
              <h4 class="text-xl font-display font-medium text-white hover:text-secondary transition-colors">
                Efisiensi Arsitektur Single Codebase: Dari CatatKas Menuju Transformasi Finansial UMKM
              </h4>
              <p class="text-[#999999] text-xs leading-relaxed">
                Eksplorasi penggunaan Flutter multiplatform untuk merilis produk digital Android, iOS, dan Web secara simultan dengan satu basis kode yang efisien dan minim overhead pemeliharaan.
              </p>
            </div>
            <div class="pt-3 border-t border-[rgba(241,241,239,0.08)] flex items-center justify-between">
              <span class="text-xs font-mono text-[#666666]">Flutter · Multiplatform · Dart</span>
              <router-link to="/portofolio" class="text-xs font-semibold text-secondary hover:underline flex items-center gap-1">
                <span>Baca Ringkasan</span>
                <span class="material-symbols-outlined text-[15px]">arrow_forward</span>
              </router-link>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- BOTTOM CTA BAND (High Contrast Reinvented Callout) -->
    <section class="bg-black py-20 sm:py-28 relative overflow-hidden">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,65,240,0.12)_0%,transparent_70%)] pointer-events-none"></div>
      <div class="reveal-item max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 relative z-10">
        <div class="text-xs font-mono text-primary uppercase tracking-[0.25em] font-semibold">BE SEEN BE CHOSEN</div>
        <h2 class="text-3xl sm:text-5xl font-display font-medium text-white leading-tight tracking-[-1px]">
          Siap Merevolusi Solusi Digital Anda?
        </h2>
        <p class="text-[#999999] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Konsultasikan kebutuhan website, arsitektur data, atau aplikasi interaktif Anda bersama kami. Wujudkan sistem digital yang unggul dan dipilih oleh pengguna Anda.
        </p>
        <div class="pt-4">
          <router-link to="/kontak" class="btn-primary text-sm font-medium uppercase tracking-wider py-4 px-10 group inline-flex items-center gap-2">
            <span>Konsultasi Sekarang</span>
            <span class="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </router-link>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { animateStrokeDraw, animateHeroEntrance, observeScrollReveal, animateSectionHeader } from '../utils/animations'

const heroLine = ref(null)
const heroHeadline = ref(null)
const heroSubtitle = ref(null)
const heroCtas = ref(null)
const heroVisual = ref(null)

onMounted(() => {
  // Hero entrance
  if (heroLine.value) { animateStrokeDraw(heroLine.value, 1600) }
  animateHeroEntrance({ headline: [heroHeadline.value], subtitle: heroSubtitle.value, cta: heroCtas.value, visual: heroVisual.value })

  // Scroll-triggered reveals
  animateSectionHeader('.section-header')
  observeScrollReveal('.service-card', { stagger: 120, distance: 50 })
  observeScrollReveal('.project-tile', { stagger: 120, distance: 50 })
  observeScrollReveal('.reveal-item', { stagger: 80, distance: 30 })
})
</script>
