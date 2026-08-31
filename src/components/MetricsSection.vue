<template>
  <section id="metrik" class="py-20 bg-ink text-white relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-6">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <!-- Left Title -->
        <div class="lg:col-span-4 space-y-3">
          <div class="text-xs font-mono text-cyan">STANDAR KINERJA</div>
          <h2 class="text-2xl sm:text-3xl font-display font-bold text-white leading-tight">
            Metrik Teknis & Akuntabilitas
          </h2>
          <p class="text-slate-400 text-sm leading-relaxed">
            Setiap baris kode, kueri database, dan aset game diukur berdasarkan efisiensi dan reliabilitas di lingkungan produksi.
          </p>
        </div>

        <!-- Right 4 Metrics in IBM Plex Mono -->
        <div class="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-10">
          
          <div class="space-y-1">
            <div class="font-mono text-3xl sm:text-4xl font-bold text-white tracking-tight">&lt; 0.8s</div>
            <div class="text-xs text-slate-400 pt-1">Target First Contentful Paint (FCP) pada web</div>
          </div>

          <div class="space-y-1">
            <div class="font-mono text-3xl sm:text-4xl font-bold text-cyan tracking-tight">99.8%</div>
            <div class="text-xs text-slate-400 pt-1">Rata-rata uptime pipeline & API produksi</div>
          </div>

          <div class="space-y-1">
            <div class="font-mono text-3xl sm:text-4xl font-bold text-white tracking-tight">60 FPS</div>
            <div class="text-xs text-slate-400 pt-1">Frame rate stabil pada build WebGL & Unity</div>
          </div>

          <div class="space-y-1">
            <div class="font-mono text-3xl sm:text-4xl font-bold text-magenta tracking-tight">100%</div>
            <div class="text-xs text-slate-400 pt-1">Kode terdokumentasi & kepemilikan aset klien</div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>
