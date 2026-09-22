<template>
  <div class="bg-black text-white py-16 sm:py-24 border-b border-[rgba(241,241,239,0.12)]">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 space-y-16 sm:space-y-20">

      <!-- Header -->
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <div class="inline-flex items-center gap-2 px-3 py-1 bg-[#141418] border border-[rgba(241,241,239,0.14)] rounded-[2px] text-xs font-mono text-primary font-medium">
          <span>CAPABILITIES &amp; EXPERTISE</span>
        </div>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-white tracking-[-1.5px]">
          Layanan Spesialis
        </h1>
        <p class="text-[#999999] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          Empat pilar keahlian teknologi rekayasa digital yang kami rancang untuk mendorong pertumbuhan dan transformasi nyata bagi bisnis Anda.
        </p>
      </div>

      <!-- 1. Web Development -->
      <div class="card-dark service-block p-8 sm:p-12 space-y-8">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[rgba(241,241,239,0.1)] pb-6">
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 rounded-[4px] flex items-center justify-center bg-[rgba(0,65,240,0.15)] border border-[rgba(0,65,240,0.3)]">
              <span class="material-symbols-outlined text-3xl text-primary">language</span>
            </div>
            <div>
              <div class="text-xs font-mono text-primary uppercase tracking-wider">PILLAR 01</div>
              <h2 class="text-2xl sm:text-3xl font-display font-medium text-white">Web Development</h2>
            </div>
          </div>
          <span class="text-xs font-mono text-[#999999]">HIGH PERFORMANCE &amp; PWA</span>
        </div>

        <p class="text-[#999999] text-base leading-relaxed">
          Kami merancang dan mengembangkan platform web modern yang cepat dibuka, responsif di seluruh resolusi layar, serta memiliki struktur arsitektur kode yang bersih untuk kemudahan pemeliharaan dan skalabilitas jangka panjang.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div class="bg-[#141418] p-6 rounded-[4px] border border-[rgba(241,241,239,0.1)] space-y-2">
            <div class="flex items-center gap-2.5">
              <span class="material-symbols-outlined text-[18px] text-primary">code</span>
              <h3 class="font-medium text-base text-white">Company Profile &amp; Landing Page</h3>
            </div>
            <p class="text-xs text-[#999999] leading-relaxed">
              Website korporat dan halaman konversi berkecepatan tinggi yang dirancang khusus untuk membangun kredibilitas brand dan meningkatkan konversi pengunjung.
            </p>
          </div>
          <div class="bg-[#141418] p-6 rounded-[4px] border border-[rgba(241,241,239,0.1)] space-y-2">
            <div class="flex items-center gap-2.5">
              <span class="material-symbols-outlined text-[18px] text-primary">layers</span>
              <h3 class="font-medium text-base text-white">Web Application &amp; Custom Systems</h3>
            </div>
            <p class="text-xs text-[#999999] leading-relaxed">
              Sistem web terintegrasi untuk manajemen data, alur operasional bisnis internal, maupun platform portal interaktif bagi pengguna publik.
            </p>
          </div>
        </div>

        <div class="pt-4 border-t border-[rgba(241,241,239,0.1)] flex flex-wrap items-center justify-between gap-4">
          <div class="text-xs text-[#999999] font-mono">
            Stack: <span class="text-white font-medium">Vue 3, Laravel, TailwindCSS, REST API, PWA</span>
          </div>
          <router-link :to="{ path: '/kontak', query: { service: 'Web Development' } }" class="btn-primary text-xs font-medium uppercase tracking-wider py-2.5 px-6 group flex items-center gap-2">
            <span>Konsultasi Web</span>
            <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </router-link>
        </div>
      </div>

      <!-- 2. Data Analysis -->
      <div class="card-dark service-block p-8 sm:p-12 space-y-8">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[rgba(241,241,239,0.1)] pb-6">
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 rounded-[4px] flex items-center justify-center bg-[rgba(0,77,255,0.15)] border border-[rgba(0,77,255,0.3)]">
              <span class="material-symbols-outlined text-3xl text-[#004dff]">analytics</span>
            </div>
            <div>
              <div class="text-xs font-mono text-primary uppercase tracking-wider">PILLAR 02</div>
              <h2 class="text-2xl sm:text-3xl font-display font-medium text-white">Data Analysis</h2>
            </div>
          </div>
          <span class="text-xs font-mono text-[#999999]">BUSINESS INTELLIGENCE &amp; PIPELINES</span>
        </div>

        <p class="text-[#999999] text-base leading-relaxed">
          Mengubah tumpukan data mentah menjadi wawasan bisnis yang tajam. Kami membangun pipeline pengolahan data otomatis dan visualisasi dashboard interaktif yang mempermudah evaluasi kinerja operasional.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div class="bg-[#141418] p-6 rounded-[4px] border border-[rgba(241,241,239,0.1)] space-y-2">
            <div class="flex items-center gap-2.5">
              <span class="material-symbols-outlined text-[18px] text-[#004dff]">database</span>
              <h3 class="font-medium text-base text-white">Dashboard Visualisasi Interaktif</h3>
            </div>
            <p class="text-xs text-[#999999] leading-relaxed">
              Penyajian grafik metrik, tren penjualan, dan evaluasi KPI operasional secara real-time yang mudah dieksplorasi oleh pemangku kepentingan.
            </p>
          </div>
          <div class="bg-[#141418] p-6 rounded-[4px] border border-[rgba(241,241,239,0.1)] space-y-2">
            <div class="flex items-center gap-2.5">
              <span class="material-symbols-outlined text-[18px] text-[#004dff]">trending_up</span>
              <h3 class="font-medium text-base text-white">Laporan &amp; Insight Strategis</h3>
            </div>
            <p class="text-xs text-[#999999] leading-relaxed">
              Analisis pola perilaku konsumen, estimasi proyeksi, dan ringkasan eksekutif untuk mendukung pengambilan keputusan strategis berbasis fakta.
            </p>
          </div>
        </div>

        <div class="pt-4 border-t border-[rgba(241,241,239,0.1)] flex flex-wrap items-center justify-between gap-4">
          <div class="text-xs text-[#999999] font-mono">
            Tools: <span class="text-white font-medium">Python, SQL, Tableau, PowerBI, Automated ETL</span>
          </div>
          <router-link :to="{ path: '/kontak', query: { service: 'Data Analysis' } }" class="btn-primary text-xs font-medium uppercase tracking-wider py-2.5 px-6 group flex items-center gap-2">
            <span>Konsultasi Data</span>
            <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </router-link>
        </div>
      </div>

      <!-- 3. Game Development -->
      <div class="card-dark service-block p-8 sm:p-12 space-y-8">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[rgba(241,241,239,0.1)] pb-6">
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 rounded-[4px] flex items-center justify-center bg-[rgba(226,6,46,0.15)] border border-[rgba(226,6,46,0.3)]">
              <span class="material-symbols-outlined text-3xl text-secondary">sports_esports</span>
            </div>
            <div>
              <div class="text-xs font-mono text-secondary uppercase tracking-wider">PILLAR 03</div>
              <h2 class="text-2xl sm:text-3xl font-display font-medium text-white">Game Development</h2>
            </div>
          </div>
          <span class="text-xs font-mono text-[#999999]">2D/3D &amp; WEBGL INTERACTIVE</span>
        </div>

        <p class="text-[#999999] text-base leading-relaxed">
          Menciptakan pengalaman interaktif yang imersif dan menarik. Solusi ideal untuk meningkatkan keterlibatan pelanggan melalui gamifikasi campaign pemasaran digital maupun simulasi interaktif untuk pembelajaran.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div class="bg-[#141418] p-6 rounded-[4px] border border-[rgba(241,241,239,0.1)] space-y-2">
            <div class="flex items-center gap-2.5">
              <span class="material-symbols-outlined text-[18px] text-secondary">auto_awesome</span>
              <h3 class="font-medium text-base text-white">Gamifikasi Promosi Brand</h3>
            </div>
            <p class="text-xs text-[#999999] leading-relaxed">
              Mini game berbasis browser tanpa perlu download aplikasi untuk memikat perhatian audiens dan menyebarkan program kampanye promosi.
            </p>
          </div>
          <div class="bg-[#141418] p-6 rounded-[4px] border border-[rgba(241,241,239,0.1)] space-y-2">
            <div class="flex items-center gap-2.5">
              <span class="material-symbols-outlined text-[18px] text-secondary">precision_manufacturing</span>
              <h3 class="font-medium text-base text-white">Simulasi Edukatif &amp; Training</h3>
            </div>
            <p class="text-xs text-[#999999] leading-relaxed">
              Media simulasi interaktif berbasis grafis 2D/3D untuk lembaga pendidikan, pelatihan perusahaan, dan presentasi produk interaktif.
            </p>
          </div>
        </div>

        <div class="pt-4 border-t border-[rgba(241,241,239,0.1)] flex flex-wrap items-center justify-between gap-4">
          <div class="text-xs text-[#999999] font-mono">
            Engine: <span class="text-white font-medium">Unity (2D/3D), C#, WebGL, Shaders</span>
          </div>
          <router-link :to="{ path: '/kontak', query: { service: 'Game Development' } }" class="btn-accent text-xs font-medium uppercase tracking-wider py-2.5 px-6 group flex items-center gap-2">
            <span>Konsultasi Game</span>
            <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </router-link>
        </div>
      </div>

      <!-- 4. Mobile Apps -->
      <div class="card-dark service-block p-8 sm:p-12 space-y-8">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[rgba(241,241,239,0.1)] pb-6">
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 rounded-[4px] flex items-center justify-center bg-[rgba(166,0,255,0.15)] border border-[rgba(166,0,255,0.3)]">
              <span class="material-symbols-outlined text-3xl text-violet">smartphone</span>
            </div>
            <div>
              <div class="text-xs font-mono text-violet uppercase tracking-wider">PILLAR 04</div>
              <h2 class="text-2xl sm:text-3xl font-display font-medium text-white">Mobile Apps</h2>
            </div>
          </div>
          <span class="text-xs font-mono text-[#999999]">FLUTTER CROSS-PLATFORM</span>
        </div>

        <p class="text-[#999999] text-base leading-relaxed">
          Membangun aplikasi mobile lintas platform dengan Flutter, menghasilkan performa native di Android dan iOS dari satu basis kode yang efisien, kokoh, dan mudah diperbarui.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div class="bg-[#141418] p-6 rounded-[4px] border border-[rgba(241,241,239,0.1)] space-y-2">
            <div class="flex items-center gap-2.5">
              <span class="material-symbols-outlined text-[18px] text-violet">layers</span>
              <h3 class="font-medium text-base text-white">Aplikasi Bisnis &amp; Finansial</h3>
            </div>
            <p class="text-xs text-[#999999] leading-relaxed">
              Aplikasi pencatatan kas, manajemen operasional, POS, dan utilitas internal dengan performa mulus dan integrasi cloud.
            </p>
          </div>
          <div class="bg-[#141418] p-6 rounded-[4px] border border-[rgba(241,241,239,0.1)] space-y-2">
            <div class="flex items-center gap-2.5">
              <span class="material-symbols-outlined text-[18px] text-violet">smartphone</span>
              <h3 class="font-medium text-base text-white">Aplikasi Layanan Publik</h3>
            </div>
            <p class="text-xs text-[#999999] leading-relaxed">
              Aplikasi mobile untuk instansi pemerintah dan komunitas dengan antarmuka intuitif dan beban unduhan yang ringan bagi pengguna.
            </p>
          </div>
        </div>

        <div class="pt-4 border-t border-[rgba(241,241,239,0.1)] flex flex-wrap items-center justify-between gap-4">
          <div class="text-xs text-[#999999] font-mono">
            Stack: <span class="text-white font-medium">Flutter, Dart, Firebase, REST API, SQLite</span>
          </div>
          <router-link :to="{ path: '/kontak', query: { service: 'Mobile Apps' } }" class="btn-primary text-xs font-medium uppercase tracking-wider py-2.5 px-6 group flex items-center gap-2">
            <span>Konsultasi Mobile</span>
            <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </router-link>
        </div>
      </div>

      <!-- ALUR PENGERJAAN (4-Phase Consulting Methodology) -->
      <div class="card-dark p-8 sm:p-12 space-y-10">
        <div class="text-center max-w-2xl mx-auto space-y-3">
          <div class="text-xs font-mono text-primary uppercase tracking-widest font-semibold">METHODOLOGY</div>
          <h2 class="text-2xl sm:text-3xl font-display font-medium text-white">Alur Pengerjaan Sistematis</h2>
          <p class="text-xs sm:text-sm text-[#999999]">Proses rekayasa transparan dan terukur dari perumusan spesifikasi hingga serah terima produksi.</p>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-[#141418] p-6 rounded-[4px] border border-[rgba(241,241,239,0.08)] space-y-3">
            <div class="text-primary font-mono font-bold text-2xl">01</div>
            <h3 class="font-medium text-base text-white">Konsultasi Kebutuhan</h3>
            <p class="text-xs text-[#999999] leading-relaxed">Mendengarkan tujuan bisnis, menganalisis audiens sasaran, dan merumuskan spesifikasi teknis.</p>
          </div>
          <div class="bg-[#141418] p-6 rounded-[4px] border border-[rgba(241,241,239,0.08)] space-y-3">
            <div class="text-primary font-mono font-bold text-2xl">02</div>
            <h3 class="font-medium text-base text-white">Arsitektur &amp; Desain</h3>
            <p class="text-xs text-[#999999] leading-relaxed">Menyusun arsitektur sistem, skema basis data, rancangan visual antarmuka, dan prototype alur kerja.</p>
          </div>
          <div class="bg-[#141418] p-6 rounded-[4px] border border-[rgba(241,241,239,0.08)] space-y-3">
            <div class="text-primary font-mono font-bold text-2xl">03</div>
            <h3 class="font-medium text-base text-white">Pengembangan Kode</h3>
            <p class="text-xs text-[#999999] leading-relaxed">Implementasi kode bersih, pengujian performa mendalam, serta audit keamanan sistem secara berkala.</p>
          </div>
          <div class="bg-[#141418] p-6 rounded-[4px] border border-[rgba(241,241,239,0.08)] space-y-3">
            <div class="text-primary font-mono font-bold text-2xl">04</div>
            <h3 class="font-medium text-base text-white">Deployment Produksi</h3>
            <p class="text-xs text-[#999999] leading-relaxed">Peluncuran ke server live produksi, pendampingan uji operasional, dan garansi pemeliharaan teknis.</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { observeScrollReveal, animateSectionHeader } from '../utils/animations'

onMounted(() => {
  animateSectionHeader('.service-block')
  observeScrollReveal('.service-block', { stagger: 150, distance: 50 })
})
</script>
