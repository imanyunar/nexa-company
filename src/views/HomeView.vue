<template>
  <div class="transition-colors duration-300">

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
            
            <!-- Category Overline -->
            <div class="flex items-center gap-2.5 text-xs uppercase tracking-widest text-primary font-semibold">
              <span class="w-2 h-2 rounded-full bg-primary"></span>
              <span>NEXA AGENCY · DIGITAL IDENTITY &amp; WEB STUDIO</span>
            </div>

            <!-- Display Headline with Tagline -->
            <h1 ref="heroHeadline" class="text-4xl sm:text-6xl lg:text-[4.2rem] font-display font-medium leading-[1.08] tracking-[-1.9px]">
              Your brand deserves better than &ldquo;basic&rdquo;.
            </h1>

            <p ref="heroSubtitle" class="text-[#999999] text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              Nexa Agency adalah digital agency yang membantu UMKM, bisnis, organisasi, dan personal branding membangun website relevan, fungsional, dan berkarakter kuat—dirancang custom dengan sentuhan interaktif dan teknologi AI.
            </p>

            <!-- CTAs -->
            <div ref="heroCtas" class="flex flex-wrap items-center gap-4 pt-2">
              <router-link to="/kontak" class="btn-primary text-sm font-medium uppercase tracking-wider py-3.5 px-8 group">
                <span>Mulai Proyek Custom</span>
                <span class="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </router-link>
              <router-link to="/portofolio" class="btn-secondary text-sm font-medium py-3.5 px-8">
                <span>Lihat Portofolio</span>
              </router-link>
            </div>
          </div>

          <!-- Right Showcase Card: Real Project Spotlight -->
          <div ref="heroVisual" class="lg:col-span-5 flex justify-center lg:justify-end">
            <div class="w-full max-w-md bg-[#0e0e11] border border-[rgba(241,241,239,0.14)] rounded-[4px] p-6 space-y-5 shadow-2xl relative">
              
              <!-- Spotlight Header -->
              <div class="flex items-center justify-between border-b border-[rgba(241,241,239,0.1)] pb-3">
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span class="font-mono text-xs font-semibold text-white">PROYEK TERBARU</span>
                </div>
                <span class="font-mono text-[11px] text-[#999999]">NEXA LABS</span>
              </div>

              <!-- Project Preview Screen -->
              <div class="relative rounded-[2px] overflow-hidden border border-[rgba(241,241,239,0.1)] bg-[#070709] group">
                <img 
                  src="/assets/projects/pixelcraft.png" 
                  alt="PixelCraft Studio Preview" 
                  class="w-full h-44 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex items-end p-4">
                  <div>
                    <div class="text-[11px] font-mono font-semibold text-violet">Web App · Client-Side GPU</div>
                    <div class="text-base font-display font-medium text-white">PixelCraft Studio</div>
                  </div>
                </div>
              </div>

              <!-- Real Highlights & Metrics -->
              <div class="grid grid-cols-3 gap-3 py-3 border-y border-[rgba(241,241,239,0.08)] text-center font-mono">
                <div>
                  <div class="text-base font-bold text-white">5+</div>
                  <div class="text-[10px] text-[#999999] uppercase">Proyek Rilis</div>
                </div>
                <div>
                  <div class="text-base font-bold text-emerald-400">100%</div>
                  <div class="text-[10px] text-[#999999] uppercase">Responsive</div>
                </div>
                <div>
                  <div class="text-base font-bold text-primary">&lt;1s</div>
                  <div class="text-[10px] text-[#999999] uppercase">Fast Load</div>
                </div>
              </div>

              <!-- Direct CTA inside showcase -->
              <div class="flex items-center justify-between text-xs font-mono pt-1">
                <a href="https://pixelcraft-psi-blue.vercel.app/" target="_blank" rel="noopener noreferrer" class="text-violet hover:underline flex items-center gap-1.5 font-medium">
                  <span>Buka Live Demo</span>
                  <span class="material-symbols-outlined text-[15px]">open_in_new</span>
                </a>
                <router-link to="/portofolio" class="text-[#999999] hover:text-white flex items-center gap-1">
                  <span>Semua Portofolio</span>
                  <span class="material-symbols-outlined text-[15px]">arrow_forward</span>
                </router-link>
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
            <div class="text-xs font-mono text-primary uppercase tracking-widest font-semibold">LAYANAN NEXA AGENCY</div>
            <h2 class="text-3xl sm:text-4xl font-display font-medium">Solusi Digital Berkarakter Kuat</h2>
            <p class="text-[#999999] text-base leading-relaxed">Dirancang secara custom—bukan sekadar template seragam—agar merepresentasikan identitas brand Anda secara autentik.</p>
          </div>
          <router-link to="/layanan" class="btn-secondary text-xs font-medium py-2.5 px-6 self-start sm:self-auto flex items-center gap-2 group">
            <span>Semua Layanan</span>
            <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </router-link>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <!-- 1. Website & Company Profile -->
          <div class="card-dark service-card p-8 sm:p-10 flex flex-col justify-between space-y-8 group">
            <div class="space-y-5">
              <div class="flex items-center justify-between">
                <div class="w-12 h-12 rounded-[4px] flex items-center justify-center bg-[rgba(0,65,240,0.15)] border border-[rgba(0,65,240,0.3)]">
                  <span class="material-symbols-outlined text-2xl text-primary">language</span>
                </div>
                <span class="text-xs font-mono text-[#999999]">WEBSITE &amp; BRAND PROFILE</span>
              </div>
              <h3 class="text-2xl font-display font-medium group-hover:text-primary transition-colors">Website &amp; Company Profile</h3>
              <p class="text-[#999999] text-sm leading-relaxed">
                Pembuatan website resmi, company profile elegan, dan landing page untuk UMKM, bisnis, dan organisasi. Cepat diakses, responsif, dan dirancang custom sesuai karakter brand Anda.
              </p>
            </div>
            <div class="pt-5 border-t border-[rgba(241,241,239,0.1)] flex items-center justify-between">
              <span class="text-xs font-mono text-[#666666]">Custom Design · PWA · Responsive</span>
              <router-link to="/layanan" class="text-xs font-semibold text-primary hover:underline uppercase tracking-wider flex items-center gap-1.5 group/link">
                <span>Pelajari Detail</span>
                <span class="material-symbols-outlined text-[16px] group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
              </router-link>
            </div>
          </div>

          <!-- 2. Personal Website & Branding -->
          <div class="card-dark service-card p-8 sm:p-10 flex flex-col justify-between space-y-8 group">
            <div class="space-y-5">
              <div class="flex items-center justify-between">
                <div class="w-12 h-12 rounded-[4px] flex items-center justify-center bg-[rgba(0,77,255,0.15)] border border-[rgba(0,77,255,0.3)]">
                  <span class="material-symbols-outlined text-2xl text-[#004dff]">badge</span>
                </div>
                <span class="text-xs font-mono text-[#999999]">PERSONAL IDENTITY</span>
              </div>
              <h3 class="text-2xl font-display font-medium group-hover:text-primary transition-colors">Personal Website &amp; Branding</h3>
              <p class="text-[#999999] text-sm leading-relaxed">
                Ruang digital khusus untuk profesional, kreator, dan figur publik guna menampilkan portofolio, karya, dan personal profile yang stand out, relevan, serta memiliki karakter kuat.
              </p>
            </div>
            <div class="pt-5 border-t border-[rgba(241,241,239,0.1)] flex items-center justify-between">
              <span class="text-xs font-mono text-[#666666]">Digital Portfolio · Bio Link · SEO</span>
              <router-link to="/layanan" class="text-xs font-semibold text-primary hover:underline uppercase tracking-wider flex items-center gap-1.5 group/link">
                <span>Pelajari Detail</span>
                <span class="material-symbols-outlined text-[16px] group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
              </router-link>
            </div>
          </div>

          <!-- 3. Gamifikasi & Media Interaktif -->
          <div class="card-dark service-card p-8 sm:p-10 flex flex-col justify-between space-y-8 group">
            <div class="space-y-5">
              <div class="flex items-center justify-between">
                <div class="w-12 h-12 rounded-[4px] flex items-center justify-center bg-[rgba(226,6,46,0.15)] border border-[rgba(226,6,46,0.3)]">
                  <span class="material-symbols-outlined text-2xl text-secondary">sports_esports</span>
                </div>
                <span class="text-xs font-mono text-[#999999]">GAMIFICATION</span>
              </div>
              <h3 class="text-2xl font-display font-medium group-hover:text-secondary transition-colors">Gamifikasi &amp; Pengalaman Interaktif</h3>
              <p class="text-[#999999] text-sm leading-relaxed">
                Menciptakan pengalaman digital yang lebih seru dan berkesan melalui gamifikasi, interaktivitas visual, mini-game web, dan micro-interactions untuk meningkatkan retensi pengguna.
              </p>
            </div>
            <div class="pt-5 border-t border-[rgba(241,241,239,0.1)] flex items-center justify-between">
              <span class="text-xs font-mono text-[#666666]">Interactive Web · Canvas · Micro-Interactions</span>
              <router-link to="/layanan" class="text-xs font-semibold text-secondary hover:underline uppercase tracking-wider flex items-center gap-1.5 group/link">
                <span>Pelajari Detail</span>
                <span class="material-symbols-outlined text-[16px] group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
              </router-link>
            </div>
          </div>

          <!-- 4. Pemanfaatan AI & Smart Solutions -->
          <div class="card-dark service-card p-8 sm:p-10 flex flex-col justify-between space-y-8 group">
            <div class="space-y-5">
              <div class="flex items-center justify-between">
                <div class="w-12 h-12 rounded-[4px] flex items-center justify-center bg-[rgba(166,0,255,0.15)] border border-[rgba(166,0,255,0.3)]">
                  <span class="material-symbols-outlined text-2xl text-violet">psychology</span>
                </div>
                <span class="text-xs font-mono text-[#999999]">AI INTEGRATION</span>
              </div>
              <h3 class="text-2xl font-display font-medium group-hover:text-violet transition-colors">Integrasi Artificial Intelligence (AI)</h3>
              <p class="text-[#999999] text-sm leading-relaxed">
                Pemanfaatan teknologi Artificial Intelligence ketika dibutuhkan untuk memperkuat fungsionalitas produk—seperti asisten cerdas, automasi interaksi, dan personalisasi pengalaman pengguna.
              </p>
            </div>
            <div class="pt-5 border-t border-[rgba(241,241,239,0.1)] flex items-center justify-between">
              <span class="text-xs font-mono text-[#666666]">AI Assistants · Smart Automation · API Integration</span>
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
                <span class="text-xs font-mono font-semibold uppercase tracking-wider text-violet">WEB APP &amp; CLIENT-SIDE GPU</span>
              </div>
              <h3 class="text-2xl sm:text-3xl font-display font-medium text-white group-hover:text-violet transition-colors">PixelCraft Studio</h3>
              <p class="text-[#999999] text-sm leading-relaxed">
                Editor citra digital berbasis web yang memproses gambar langsung di browser pengguna. Dilengkapi fitur penajaman gambar, pengurangan noise, kompresi multi-format WebP/PNG, dan live RGB histogram tanpa perlu mengunggah foto ke server luar.
              </p>
              <div class="space-y-2 pt-1 text-xs text-white font-medium">
                <div class="flex items-center gap-2">
                  <span class="material-symbols-outlined text-[16px] text-violet shrink-0">check_circle</span>
                  <span>Privasi 100% Terjaga: Foto tidak pernah dikirim ke server pihak ketiga.</span>
                </div>
                <div class="flex items-center gap-2">
                  <span class="material-symbols-outlined text-[16px] text-violet shrink-0">check_circle</span>
                  <span>Akselerasi GPU &amp; WebGL: Pemrosesan filter, color grading, dan kuantisasi pixel secara instan.</span>
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
                <div class="px-4 py-2.5 flex items-center justify-between border-b border-[rgba(241,241,239,0.1)] bg-[#0a0a0c]">
                  <span class="text-xs font-mono text-[#999999] truncate max-w-[200px]">pixelcraft-psi-blue.vercel.app</span>
                  <span class="text-[11px] font-mono font-medium text-violet shrink-0">WebGL &amp; AI</span>
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
              <div class="px-4 py-2.5 flex items-center justify-between border-b border-[rgba(241,241,239,0.1)] bg-[#0a0a0c]">
                <span class="text-xs font-mono text-[#999999] truncate max-w-[200px]">lentera.indramayukab.go.id</span>
                <span class="text-[11px] font-mono font-medium text-emerald-400 shrink-0">PWA Live</span>
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
              <div class="text-xs font-mono text-primary font-semibold">
                <span>LAYANAN PUBLIK &amp; PWA</span>
              </div>
              <h3 class="text-xl font-display font-medium text-white group-hover:text-primary transition-colors">LENTERA Indramayu</h3>
              <p class="text-[#999999] text-xs leading-relaxed">Portal terpadu Pemerintah Kabupaten Indramayu untuk keterbukaan informasi, pelayanan publik digital, dan penguatan ekonomi kerakyatan berbasis PWA.</p>
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
              <div class="px-4 py-2.5 flex items-center justify-between border-b border-[rgba(241,241,239,0.1)] bg-[#0a0a0c]">
                <span class="text-xs font-mono text-[#999999] truncate max-w-[200px]">portal-desa-tempursari.app</span>
                <span class="text-[11px] font-mono font-medium text-emerald-400 shrink-0">Portal Resmi</span>
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
              <div class="text-xs font-mono text-primary font-semibold">
                <span>PORTAL PEMERINTAH DESA</span>
              </div>
              <h3 class="text-xl font-display font-medium text-white group-hover:text-primary transition-colors">Portal Desa Tempursari</h3>
              <p class="text-[#999999] text-xs leading-relaxed">Portal informasi digital terintegrasi yang menyajikan profil wilayah, infografis data kependudukan, kesenian daerah, dan peta interaktif desa.</p>
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
              <div class="px-4 py-2.5 flex items-center justify-between border-b border-[rgba(241,241,239,0.1)] bg-[#0a0a0c]">
                <span class="text-xs font-mono text-[#999999] truncate max-w-[200px]">visitgumiwang.web.id</span>
                <span class="text-[11px] font-mono font-medium text-emerald-400 shrink-0">Desa Wisata</span>
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
              <div class="text-xs font-mono text-primary font-semibold">
                <span>DESA WISATA &amp; UMKM</span>
              </div>
              <h3 class="text-xl font-display font-medium text-white group-hover:text-primary transition-colors">Visit Gumiwang</h3>
              <p class="text-[#999999] text-xs leading-relaxed">Website promosi potensi wisata alam, agrikultur, perikanan, serta etalase katalog produk UMKM lokal Desa Gumiwang.</p>
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
              <div class="px-4 py-2.5 flex items-center justify-between border-b border-[rgba(241,241,239,0.1)] bg-[#0a0a0c]">
                <span class="text-xs font-mono text-[#999999] truncate max-w-[200px]">catatkas-web.vercel.app</span>
                <span class="text-[11px] font-mono font-medium text-secondary shrink-0">Flutter App</span>
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
              <div class="text-xs font-mono text-secondary font-semibold">
                <span>APLIKASI KEUANGAN UMKM</span>
              </div>
              <h3 class="text-xl font-display font-medium text-white group-hover:text-secondary transition-colors">CatatKas UMKM</h3>
              <p class="text-[#999999] text-xs leading-relaxed">Aplikasi pencatatan keuangan harian bagi UMKM untuk mencatat mutasi transaksi kas dan rekap kalkulasi laba rugi otomatis.</p>
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

    <!-- SECTION: ALUR KERJA (Transparent & Practical Workflow) -->
    <section class="bg-[#09090b] py-20 sm:py-28 border-b border-[rgba(241,241,239,0.12)] relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
        
        <div class="section-header flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div class="max-w-2xl space-y-3">
            <div class="text-xs font-mono text-primary uppercase tracking-widest font-semibold">CARA KAMI BEKERJA</div>
            <h2 class="text-3xl sm:text-4xl font-display font-medium text-white">Alur Kerja yang Jelas &amp; Terarah</h2>
            <p class="text-[#999999] text-base leading-relaxed">Komunikasi langsung tanpa birokrasi berbelit. Kami mendampingi proyek Anda dari rancangan awal hingga rilis produksi.</p>
          </div>
          <router-link to="/kontak" class="btn-secondary text-xs font-medium py-2.5 px-6 self-start sm:self-auto flex items-center gap-2 group">
            <span>Mulai Diskusi</span>
            <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </router-link>
        </div>

        <!-- 4 Step Process Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div class="reveal-item card-dark p-6 sm:p-7 space-y-4 flex flex-col justify-between">
            <div class="space-y-3">
              <span class="text-2xl font-mono font-bold text-primary">01</span>
              <h3 class="text-lg font-display font-medium text-white">Konsultasi &amp; Kebutuhan</h3>
              <p class="text-[#999999] text-xs leading-relaxed">
                Memetakan tujuan bisnis, target pengguna, dan fitur utama yang diperlukan. Kami berikan estimasi biaya dan waktu yang transparan.
              </p>
            </div>
            <div class="pt-3 border-t border-[rgba(241,241,239,0.08)] text-[11px] font-mono text-[#666666]">
              Scope · Target · Estimasi
            </div>
          </div>

          <div class="reveal-item card-dark p-6 sm:p-7 space-y-4 flex flex-col justify-between">
            <div class="space-y-3">
              <span class="text-2xl font-mono font-bold text-[#004dff]">02</span>
              <h3 class="text-lg font-display font-medium text-white">Perancangan &amp; Prototipe</h3>
              <p class="text-[#999999] text-xs leading-relaxed">
                Menyusun tata letak antarmuka (UI/UX) yang bersih, intuitif, dan responsif sebelum baris kode pertama ditulis.
              </p>
            </div>
            <div class="pt-3 border-t border-[rgba(241,241,239,0.08)] text-[11px] font-mono text-[#666666]">
              Wireframe · Desain UI · Validasi
            </div>
          </div>

          <div class="reveal-item card-dark p-6 sm:p-7 space-y-4 flex flex-col justify-between">
            <div class="space-y-3">
              <span class="text-2xl font-mono font-bold text-secondary">03</span>
              <h3 class="text-lg font-display font-medium text-white">Pengembangan &amp; Uji Mutu</h3>
              <p class="text-[#999999] text-xs leading-relaxed">
                Penulisan kode yang rapi dan terstruktur, pengujian performa Core Web Vitals, serta uji coba lintas perangkat smartphone &amp; desktop.
              </p>
            </div>
            <div class="pt-3 border-t border-[rgba(241,241,239,0.08)] text-[11px] font-mono text-[#666666]">
              Kode Bersih · Testing · Optimasi
            </div>
          </div>

          <div class="reveal-item card-dark p-6 sm:p-7 space-y-4 flex flex-col justify-between">
            <div class="space-y-3">
              <span class="text-2xl font-mono font-bold text-violet">04</span>
              <h3 class="text-lg font-display font-medium text-white">Peluncuran &amp; Garansi</h3>
              <p class="text-[#999999] text-xs leading-relaxed">
                Deployment sistem ke server produksi, panduan penggunaan, serta pendampingan teknis jika ada kendala pasca rilis.
              </p>
            </div>
            <div class="pt-3 border-t border-[rgba(241,241,239,0.08)] text-[11px] font-mono text-[#666666]">
              Deployment · Panduan · Support
            </div>
          </div>

        </div>

        <!-- Spotlight Inisiatif: PixelCraft Studio -->
        <div class="reveal-item card-dark p-6 sm:p-10 border-[rgba(166,0,255,0.3)] hover:border-violet/60 transition-colors space-y-6">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[rgba(241,241,239,0.1)] pb-5">
            <div class="flex items-center gap-3">
              <span class="text-xs uppercase tracking-wider text-violet font-semibold">Nexa Labs · Showcase Riset</span>
              <span class="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>ONLINE &amp; GRATIS</span>
              </span>
            </div>
            <span class="text-xs font-mono text-[#999999]">EKSPERIMEN WEBGL BROWSER</span>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div class="lg:col-span-8 space-y-4">
              <h3 class="text-2xl sm:text-3xl font-display font-medium text-white leading-snug">
                Eksperimen Studio: <span class="text-violet">PixelCraft Studio</span>
              </h3>
              <p class="text-[#999999] text-sm sm:text-base leading-relaxed">
                Kami mengembangkan PixelCraft Studio sebagai inisiatif internal untuk membuktikan bahwa pengolahan citra digital profesional (seperti penajaman gambar, filter denoise, kompresi WebP/PNG, dan live histogram) dapat berjalan langsung di browser pengguna dengan akselerasi GPU tanpa perlu mengunggah foto ke server pihak ketiga.
              </p>
              <div class="flex flex-wrap gap-x-5 gap-y-2 pt-1 text-xs text-[#cccccc]">
                <span>✓ Akselerasi GPU/WebGL</span>
                <span>✓ 100% Client-Side Privacy</span>
                <span>✓ Kompresi WebP &amp; PNG</span>
                <span>✓ Tanpa Perlu Instalasi</span>
              </div>
            </div>

            <div class="lg:col-span-4 bg-[#141418] p-6 rounded-[4px] border border-[rgba(241,241,239,0.1)] space-y-4 flex flex-col justify-between">
              <div class="space-y-2 text-xs font-mono">
                <div class="text-[#666666]">AKSES SISTEM:</div>
                <div class="font-medium text-white text-sm">Gratis untuk Publik</div>
                <div class="text-[#666666] pt-2">URL RESMI:</div>
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

      </div>
    </section>

    <!-- BOTTOM CTA BAND (Actionable Invitation with Tagline) -->
    <section class="py-20 sm:py-28 relative overflow-hidden border-t border-[rgba(241,241,239,0.1)]">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,65,240,0.12)_0%,transparent_70%)] pointer-events-none"></div>
      <div class="reveal-item max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 relative z-10">
        <p class="text-xs uppercase tracking-widest text-primary font-semibold">
          Your brand deserves better than &ldquo;basic&rdquo;
        </p>
        <h2 class="text-3xl sm:text-5xl font-display font-medium leading-tight tracking-[-1px]">
          Siap Membangun Kehadiran Digital yang Berkesan?
        </h2>
        <p class="text-[#999999] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Konsultasikan ide website, identitas brand, gamifikasi, atau integrasi AI Anda bersama Nexa Agency. Kami siap menciptakan karya custom yang orisinal, fungsional, dan bernilai tinggi.
        </p>
        <div class="pt-4">
          <router-link to="/kontak" class="btn-primary text-sm font-medium uppercase tracking-wider py-4 px-10 group inline-flex items-center gap-2">
            <span>Mulai Konsultasi Gratis</span>
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
