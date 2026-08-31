<template>
  <section id="portofolio" class="py-24 bg-paper border-t border-muted-border">
    <div class="max-w-7xl mx-auto px-6 space-y-12">
      
      <!-- Section Title & Filter Tabs -->
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div class="max-w-xl">
          <h2 class="text-3xl sm:text-4xl font-display font-bold text-ink leading-tight">
            Studi Kasus Terpilih
          </h2>
          <p class="text-muted text-base mt-2">
            Proyek dengan dampak nyata dan metrik performa yang dapat diuji.
          </p>
        </div>

        <!-- Filter category -->
        <div class="flex items-center gap-2">
          <button
            v-for="cat in categories"
            :key="cat.id"
            @click="activeCategory = cat.id"
            :class="activeCategory === cat.id ? 'bg-ink text-white' : 'bg-surface text-muted hover:text-ink border border-muted-border'"
            class="px-4 py-2 text-xs font-mono font-medium rounded-[2px] transition-all"
          >
            {{ cat.label }}
          </button>
        </div>
      </div>

      <!-- Asymmetrical Portfolio Grid: 1 Large Column + 2 Stacked Columns -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        <!-- Large Primary Case Study (Col Span 7) -->
        <div class="lg:col-span-7 bg-surface border border-muted-border rounded-[2px] p-8 flex flex-col justify-between group hover:border-ink/20 transition-all">
          <div class="space-y-6">
            <!-- Header Info -->
            <div class="flex items-center justify-between border-b border-muted-border pb-4">
              <span class="text-xs font-mono text-blue font-semibold">WEB DEVELOPMENT & SCALING</span>
              <span class="text-xs font-mono text-muted">2025</span>
            </div>

            <!-- Graphic Preview Representation -->
            <div class="h-60 bg-ink rounded-[2px] p-6 text-white relative overflow-hidden flex flex-col justify-between">
              <div class="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>PROJECT // FINTECH_CORE</span>
                <span class="text-cyan">LIVE ARCHITECTURE</span>
              </div>
              <div class="space-y-2">
                <div class="text-2xl font-display font-bold tracking-tight">Finova Ecosystem</div>
                <p class="text-sm text-slate-300 max-w-md">
                  Redesain core platform transaksi perbankan dengan microfrontend Vue 3 dan API Laravel berkinerja tinggi.
                </p>
              </div>
              <div class="flex items-center gap-4 text-xs font-mono pt-2 border-t border-white/10">
                <span class="text-cyan">LATENCY: 42ms</span>
                <span class="text-magenta">CONCURRENCY: 25K REQ/S</span>
              </div>
            </div>

            <!-- Title & Description -->
            <div class="space-y-2 pt-2">
              <h3 class="text-2xl font-display font-bold text-ink">
                Transformasi Arsitektur Digital Finova
              </h3>
              <p class="text-muted text-sm leading-relaxed">
                Migrasi sistem monolitik legasi ke decoupled headless architecture dengan pipeline CI/CD otomatis. Menghilangkan bottleneck transaksi pada jam sibuk.
              </p>
            </div>
          </div>

          <!-- Measurable Result Line (Strict Rule from design.md) -->
          <div class="pt-6 mt-6 border-t border-muted-border flex items-center justify-between">
            <div>
              <span class="text-xs font-mono text-muted block">Hasil Terukur:</span>
              <span class="text-base font-mono font-bold text-blue">Load time turun 58% & transaksi meningkat 3.2x</span>
            </div>
            <a href="#kontak" class="text-sm font-semibold text-ink hover:text-blue border-b border-ink/40 hover:border-blue pb-0.5 transition-colors">
              Detail studi kasus
            </a>
          </div>
        </div>

        <!-- Two Smaller Stacked Cards (Col Span 5) -->
        <div class="lg:col-span-5 flex flex-col gap-8">
          
          <!-- Small Card 1: Data Analysis -->
          <div class="bg-surface border border-muted-border rounded-[2px] p-6 flex flex-col justify-between flex-1 group hover:border-ink/20 transition-all">
            <div class="space-y-4">
              <div class="flex items-center justify-between border-b border-muted-border pb-3">
                <span class="text-xs font-mono text-cyan-dark font-semibold">DATA ANALYSIS</span>
                <span class="text-xs font-mono text-muted">2025</span>
              </div>
              <h3 class="text-lg font-display font-bold text-ink">
                Predictive Churn Engine untuk RetailChain
              </h3>
              <p class="text-muted text-xs leading-relaxed">
                Pengembangan dashboard prediktif berbasis machine learning untuk memetakan risiko penurunan retensi konsumen ritel secara real-time.
              </p>
            </div>
            <div class="pt-4 mt-4 border-t border-muted-border">
              <span class="text-[11px] font-mono text-muted block">Hasil Terukur:</span>
              <span class="text-sm font-mono font-bold text-ink">Akurasi prediksi 94.2% & retensi naik 22%</span>
            </div>
          </div>

          <!-- Small Card 2: Game Development -->
          <div class="bg-surface border border-muted-border rounded-[2px] p-6 flex flex-col justify-between flex-1 group hover:border-ink/20 transition-all">
            <div class="space-y-4">
              <div class="flex items-center justify-between border-b border-muted-border pb-3">
                <span class="text-xs font-mono text-magenta font-semibold">GAME DEVELOPMENT</span>
                <span class="text-xs font-mono text-muted">2026</span>
              </div>
              <h3 class="text-lg font-display font-bold text-ink">
                EduPlay Science: 2D WebGL Interactive Lab
              </h3>
              <p class="text-muted text-xs leading-relaxed">
                Game simulasi fisika interaktif berbasis browser untuk platform edutech, dioptimasi untuk berjalan mulus di perangkat spesifikasi rendah.
              </p>
            </div>
            <div class="pt-4 mt-4 border-t border-muted-border">
              <span class="text-[11px] font-mono text-muted block">Hasil Terukur:</span>
              <span class="text-sm font-mono font-bold text-ink">120.000+ sesi bermain aktif tanpa drop FPS</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activeCategory = ref('all')
const categories = [
  { id: 'all', label: 'SEMUA BIDANG' },
  { id: 'web', label: 'WEB' },
  { id: 'data', label: 'DATA' },
  { id: 'game', label: 'GAME' }
]
</script>
