<template>
  <div class="bg-base text-white py-20 sm:py-24">
    <div class="max-w-5xl mx-auto px-6 space-y-16">

      <div class="text-center max-w-2xl mx-auto space-y-4">
        <div class="text-xs font-mono t-cyan uppercase tracking-widest">CAPABILITIES</div>
        <h1 class="text-4xl sm:text-5xl font-display font-light text-white">Layanan Spesialis</h1>
        <p class="t-muted text-base sm:text-lg leading-relaxed">Tiga pilar layanan teknis yang kami kembangkan untuk memberikan dampak nyata bagi bisnis, instansi, dan pengguna Anda.</p>
      </div>

      <!-- Web Development -->
      <div class="card-unified service-block p-8 sm:p-10 space-y-6">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 rounded-lg flex items-center justify-center" style="background:rgba(58,76,224,0.18); border:1px solid rgba(58,76,224,0.35);">
            <Globe class="w-6 h-6 text-cyan" />
          </div>
          <div>
            <h2 class="text-2xl sm:text-3xl font-display font-light text-white">Web Development</h2>
            <p class="text-xs t-faint font-mono">Company Profile · Web Application · High Performance</p>
          </div>
        </div>
        <p class="t-muted text-base leading-relaxed">Kami merancang dan membangun platform web yang cepat, responsif di seluruh layar, serta memiliki struktur kode yang bersih untuk kemudahan pemeliharaan jangka panjang.</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div class="bg-elevated p-5 rounded-lg border b-subtle">
            <div class="flex items-center gap-2 mb-1.5">
              <Code2 class="w-4 h-4 text-cyan" />
              <h3 class="font-bold text-sm text-white">Company Profile & Landing Page</h3>
            </div>
            <p class="text-xs t-muted leading-relaxed">Website perkenalan perusahaan atau instansi yang elegan untuk membangun reputasi dan kredibilitas.</p>
          </div>
          <div class="bg-elevated p-5 rounded-lg border b-subtle">
            <div class="flex items-center gap-2 mb-1.5">
              <Layers class="w-4 h-4 text-cyan" />
              <h3 class="font-bold text-sm text-white">Sistem & Web Application Custom</h3>
            </div>
            <p class="text-xs t-muted leading-relaxed">Platform web kustom untuk manajemen data, alur operasional internal, maupun portal interaktif pengguna.</p>
          </div>
        </div>
        <div class="pt-4 border-t b-subtle flex flex-wrap items-center justify-between gap-4">
          <div class="text-xs t-muted font-mono">Stack: <span class="text-white font-semibold">Vue 3, Laravel, TailwindCSS, PWA</span></div>
          <router-link to="/kontak" class="btn-pill-primary text-xs uppercase font-bold py-2.5 px-6">Konsultasi Web</router-link>
        </div>
      </div>

      <!-- Data Analysis -->
      <div class="card-unified service-block p-8 sm:p-10 space-y-6">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 rounded-lg flex items-center justify-center" style="background:rgba(23,195,242,0.18); border:1px solid rgba(23,195,242,0.35);">
            <BarChart3 class="w-6 h-6 text-cyan" />
          </div>
          <div>
            <h2 class="text-2xl sm:text-3xl font-display font-light text-white">Data Analysis</h2>
            <p class="text-xs t-faint font-mono">Data Pipeline · Business Intelligence · Dashboards</p>
          </div>
        </div>
        <p class="t-muted text-base leading-relaxed">Mengolah kumpulan data mentah menjadi wawasan bisnis yang tajam. Kami membangun dashboard interaktif dan visualisasi data yang mempermudah evaluasi kinerja harian.</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div class="bg-elevated p-5 rounded-lg border b-subtle">
            <div class="flex items-center gap-2 mb-1.5">
              <Database class="w-4 h-4 text-cyan" />
              <h3 class="font-bold text-sm text-white">Dashboard Visualisasi Interaktif</h3>
            </div>
            <p class="text-xs t-muted leading-relaxed">Penyajian grafik metrik, tren penjualan, dan evaluasi operasional secara visual yang mudah dipahami.</p>
          </div>
          <div class="bg-elevated p-5 rounded-lg border b-subtle">
            <div class="flex items-center gap-2 mb-1.5">
              <TrendingUp class="w-4 h-4 text-cyan" />
              <h3 class="font-bold text-sm text-white">Laporan & Insight Strategis</h3>
            </div>
            <p class="text-xs t-muted leading-relaxed">Analisis pola data, retensi konsumen, dan estimasi proyeksi untuk mendukung keputusan berbasis data.</p>
          </div>
        </div>
        <div class="pt-4 border-t b-subtle flex flex-wrap items-center justify-between gap-4">
          <div class="text-xs t-muted font-mono">Tools: <span class="text-white font-semibold">Python, SQL, PowerBI, Tableau</span></div>
          <router-link to="/kontak" class="btn-pill-primary text-xs uppercase font-bold py-2.5 px-6">Konsultasi Data</router-link>
        </div>
      </div>

      <!-- Game Development -->
      <div class="card-unified service-block p-8 sm:p-10 space-y-6">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 rounded-lg flex items-center justify-center" style="background:rgba(230,32,197,0.18); border:1px solid rgba(230,32,197,0.35);">
            <Gamepad2 class="w-6 h-6 text-pink-400" />
          </div>
          <div>
            <h2 class="text-2xl sm:text-3xl font-display font-light text-white">Game Development</h2>
            <p class="text-xs t-faint font-mono">Interactive Media · Gamification · 2D/3D</p>
          </div>
        </div>
        <p class="t-muted text-base leading-relaxed">Menciptakan pengalaman interaktif yang imersif. Cocok untuk meningkatkan antusiasme pelanggan melalui gamifikasi campaign promosi brand maupun simulasi edukatif.</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div class="bg-elevated p-5 rounded-lg border b-subtle">
            <div class="flex items-center gap-2 mb-1.5">
              <Sparkles class="w-4 h-4 text-pink-400" />
              <h3 class="font-bold text-sm text-white">Gamifikasi Promosi Brand</h3>
            </div>
            <p class="text-xs t-muted leading-relaxed">Game mini berbasis web yang interaktif untuk menarik interaksi pelanggan dan memperkuat brand awareness.</p>
          </div>
          <div class="bg-elevated p-5 rounded-lg border b-subtle">
            <div class="flex items-center gap-2 mb-1.5">
              <Activity class="w-4 h-4 text-pink-400" />
              <h3 class="font-bold text-sm text-white">Game Edukasi & Simulasi</h3>
            </div>
            <p class="text-xs t-muted leading-relaxed">Media pembelajaran interaktif berbasis grafis untuk institusi pendidikan maupun pelatihan organisasi.</p>
          </div>
        </div>
        <div class="pt-4 border-t b-subtle flex flex-wrap items-center justify-between gap-4">
          <div class="text-xs t-muted font-mono">Engine: <span class="text-white font-semibold">Unity (2D/3D), C#, WebGL/WebGPU</span></div>
          <router-link to="/kontak" class="btn-pill-primary text-xs uppercase font-bold py-2.5 px-6">Konsultasi Game</router-link>
        </div>
      </div>

      <!-- Alur Pengerjaan -->
      <div class="card-unified bg-elevated p-8 sm:p-10 space-y-8">
        <div class="text-center max-w-xl mx-auto space-y-2">
          <h2 class="text-2xl sm:text-3xl font-display font-light text-white">Alur Pengerjaan</h2>
          <p class="text-xs sm:text-sm t-muted">Proses kolaborasi transparan dan terukur dari awal hingga serah terima.</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-4 gap-6">
          <div class="space-y-2"><div class="t-cyan font-mono font-bold text-xl">01</div><h3 class="font-bold text-sm text-white">Konsultasi</h3><p class="text-xs t-muted leading-relaxed">Mendengarkan tujuan proyek, spesifikasi fitur, dan target waktu.</p></div>
          <div class="space-y-2"><div class="t-cyan font-mono font-bold text-xl">02</div><h3 class="font-bold text-sm text-white">Perancangan</h3><p class="text-xs t-muted leading-relaxed">Menyusun arsitektur sistem, wireframe, dan prototype visual.</p></div>
          <div class="space-y-2"><div class="t-cyan font-mono font-bold text-xl">03</div><h3 class="font-bold text-sm text-white">Pengembangan</h3><p class="text-xs t-muted leading-relaxed">Penulisan kode yang rapi, pengujian performa, dan integrasi data.</p></div>
          <div class="space-y-2"><div class="t-cyan font-mono font-bold text-xl">04</div><h3 class="font-bold text-sm text-white">Peluncuran</h3><p class="text-xs t-muted leading-relaxed">Deployment ke server produksi dan pendampingan teknis.</p></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { Globe, BarChart3, Gamepad2, Code2, Layers, Database, TrendingUp, Sparkles, Activity } from 'lucide-vue-next'
import { animateStaggerFadeIn } from '../utils/animations'
onMounted(() => { animateStaggerFadeIn('.service-block', { delay: 150, stagger: 150 }) })
</script>
