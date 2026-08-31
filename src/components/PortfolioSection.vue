<template>
  <section id="portofolio" class="py-24 bg-paper border-t border-muted-border">
    <div class="max-w-7xl mx-auto px-6 space-y-12">
      
      <!-- Section Title & Context -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div class="max-w-2xl">
          <h2 class="text-3xl sm:text-4xl font-display font-bold text-ink leading-tight">
            Portofolio & Studi Kasus Nyata
          </h2>
          <p class="text-muted text-base mt-2">
            Solusi digital yang telah aktif di lingkungan produksi dengan metrik kinerja nyata.
          </p>
        </div>

        <div class="text-xs font-mono text-muted bg-surface px-3.5 py-2 border border-muted-border rounded-[2px]">
          3 PROYEK LIVE PRODUCTION
        </div>
      </div>

      <!-- Asymmetrical Portfolio Grid: 1 Large Primary Column + 2 Stacked Columns -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        <!-- Large Primary Case Study (Col Span 7): LENTERA Indramayu -->
        <div class="lg:col-span-7 bg-surface border border-muted-border rounded-[2px] p-8 flex flex-col justify-between group hover:border-ink/20 transition-all">
          <div class="space-y-6">
            <!-- Header Info -->
            <div class="flex items-center justify-between border-b border-muted-border pb-4">
              <span class="text-xs font-mono text-blue font-semibold uppercase tracking-wider">
                GOVERNMENT PLATFORM & PWA
              </span>
              <span class="text-xs font-mono text-[#27C93F] font-semibold flex items-center gap-1.5">
                <span class="w-2 h-2 rounded-full bg-[#27C93F] animate-pulse"></span>
                LIVE PRODUCTION
              </span>
            </div>

            <!-- Graphic Preview Frame -->
            <div class="h-64 bg-ink rounded-[2px] p-6 text-white relative overflow-hidden flex flex-col justify-between">
              <div class="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>DOM: lentera.indramayukab.go.id</span>
                <span class="text-cyan">PWA ENABLED</span>
              </div>
              
              <div class="space-y-2 relative z-10">
                <div class="text-2xl font-display font-bold tracking-tight text-white">
                  LENTERA Indramayu
                </div>
                <p class="text-sm text-slate-300 max-w-md line-clamp-2">
                  Portal terpadu pemerintah daerah untuk keterbukaan informasi, pelayanan publik, dan penguatan ekonomi kerakyatan.
                </p>
              </div>

              <div class="flex flex-wrap items-center gap-4 text-xs font-mono pt-3 border-t border-white/10 text-slate-400">
                <span>STACK: Laravel, PWA, REST API</span>
                <span class="text-cyan">RESPONSE: &lt;400ms</span>
              </div>
            </div>

            <!-- Title & Description -->
            <div class="space-y-2 pt-2">
              <h3 class="text-2xl font-display font-bold text-ink">
                LENTERA — Sistem Informasi & Layanan Terpadu Kab. Indramayu
              </h3>
              <p class="text-muted text-sm leading-relaxed">
                Platform digital resmi Pemerintah Kabupaten Indramayu yang mengintegrasikan layanan publik, keterbukaan informasi, dan sektor ekonomi kerakyatan ke dalam satu ekosistem berbasis Progressive Web App (PWA) yang cepat diakses dari berbagai perangkat.
              </p>
            </div>
          </div>

          <!-- Measurable Result & Live Link -->
          <div class="pt-6 mt-6 border-t border-muted-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span class="text-xs font-mono text-muted block">Hasil Terukur:</span>
              <span class="text-sm font-mono font-bold text-blue">Layanan publik terpusat 24/7 & integrasi lintas sektor</span>
            </div>
            <a 
              href="https://lentera.indramayukab.go.id/" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-flex items-center text-sm font-semibold text-ink hover:text-blue border-b border-ink/30 hover:border-blue pb-0.5 transition-colors self-start sm:self-auto"
            >
              Buka website live
            </a>
          </div>
        </div>

        <!-- Two Smaller Stacked Cards (Col Span 5) -->
        <div class="lg:col-span-5 flex flex-col gap-8">
          
          <!-- Small Card 1: Visit Gumiwang -->
          <div class="bg-surface border border-muted-border rounded-[2px] p-6 flex flex-col justify-between flex-1 group hover:border-ink/20 transition-all">
            <div class="space-y-4">
              <div class="flex items-center justify-between border-b border-muted-border pb-3">
                <span class="text-xs font-mono text-cyan-dark font-semibold uppercase tracking-wider">
                  DESA WISATA & UMKM PORTAL
                </span>
                <span class="text-xs font-mono text-[#27C93F] font-semibold">LIVE</span>
              </div>
              
              <h3 class="text-xl font-display font-bold text-ink">
                Visit Gumiwang — Pertanian, Perikanan & UMKM
              </h3>
              <p class="text-muted text-xs leading-relaxed">
                Portal promosi potensi pariwisata, agrikultur, dan katalog produk UMKM Desa Gumiwang dengan desain responsif mobile-first dan optimasi performa tinggi.
              </p>
            </div>

            <div class="pt-4 mt-4 border-t border-muted-border flex items-center justify-between">
              <div>
                <span class="text-[11px] font-mono text-muted block">Hasil Terukur:</span>
                <span class="text-xs font-mono font-bold text-ink">Katalog digital UMKM & promosi desa terpusat</span>
              </div>
              <a 
                href="https://visitgumiwang.web.id/" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-xs font-semibold text-blue hover:text-blue-hover border-b border-blue pb-0.5 transition-colors"
              >
                Buka website
              </a>
            </div>
          </div>

          <!-- Small Card 2: CatatKas UMKM -->
          <div class="bg-surface border border-muted-border rounded-[2px] p-6 flex flex-col justify-between flex-1 group hover:border-ink/20 transition-all">
            <div class="space-y-4">
              <div class="flex items-center justify-between border-b border-muted-border pb-3">
                <span class="text-xs font-mono text-magenta font-semibold uppercase tracking-wider">
                  FINANCIAL WEB APPLICATION
                </span>
                <span class="text-xs font-mono text-[#27C93F] font-semibold">LIVE</span>
              </div>
              
              <h3 class="text-xl font-display font-bold text-ink">
                CatatKas — Pembukuan Keuangan Digital UMKM
              </h3>
              <p class="text-muted text-xs leading-relaxed">
                Aplikasi web pencatatan keuangan harian untuk pelaku usaha mikro: mutasi kas masuk/keluar, kalkulasi laba rugi real-time, dan export ringkasan otomatis.
              </p>
            </div>

            <div class="pt-4 mt-4 border-t border-muted-border flex items-center justify-between">
              <div>
                <span class="text-[11px] font-mono text-muted block">Hasil Terukur:</span>
                <span class="text-xs font-mono font-bold text-ink">Otomasi pembukuan kas 100% tanpa rumus manual</span>
              </div>
              <a 
                href="https://catatkas-web.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                class="text-xs font-semibold text-magenta hover:text-ink border-b border-magenta pb-0.5 transition-colors"
              >
                Buka web app
              </a>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>
