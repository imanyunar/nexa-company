<template>
  <div class="py-16 sm:py-24 border-b border-[rgba(241,241,239,0.12)] transition-colors duration-300">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 space-y-16 sm:space-y-20">

      <!-- Header -->
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <div class="inline-flex items-center gap-2 px-3 py-1 bg-[#141418] border border-[rgba(241,241,239,0.14)] rounded-[2px] text-xs font-mono text-primary font-semibold">
          <span>LAYANAN NEXA AGENCY</span>
        </div>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-display font-medium tracking-[-1.5px]">
          Solusi Custom &amp; Berkarakter Kuat
        </h1>
        <p class="text-[#999999] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          Mulai dari website company profile, personal branding, gamifikasi, hingga pemanfaatan teknologi AI untuk meningkatkan fungsi dan pengalaman pengguna.
        </p>
        <div class="pt-1">
          <span class="inline-block text-xs font-mono text-primary font-semibold px-3 py-1 rounded-[2px] bg-primary/10 border border-primary/20">
            Your brand deserves better than "basic".
          </span>
        </div>
      </div>

      <!-- 1. Website & Company Profile -->
      <div class="card-dark service-block p-8 sm:p-12 space-y-8">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[rgba(241,241,239,0.1)] pb-6">
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 rounded-[4px] flex items-center justify-center bg-[rgba(0,65,240,0.15)] border border-[rgba(0,65,240,0.3)]">
              <span class="material-symbols-outlined text-3xl text-primary">language</span>
            </div>
            <div>
              <div class="text-xs font-mono text-primary uppercase tracking-wider font-semibold">PILLAR 01 · WEB SOLUTIONS</div>
              <h2 class="text-2xl sm:text-3xl font-display font-medium">Website &amp; Company Profile</h2>
            </div>
          </div>
          <span class="text-xs font-mono text-[#999999]">CUSTOM BUSINESS WEBSITES</span>
        </div>

        <p class="text-[#999999] text-base leading-relaxed">
          Kami merancang website profesional dan company profile untuk UMKM, bisnis, dan organisasi. Setiap elemen dibangun secara custom—bukan sekadar template yang sama untuk semua kebutuhan—agar merepresentasikan identitas brand secara autentik dan kredibel.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div class="bg-[#141418] p-6 rounded-[4px] border border-[rgba(241,241,239,0.1)] space-y-2">
            <div class="flex items-center gap-2.5">
              <span class="material-symbols-outlined text-[18px] text-primary">storefront</span>
              <h3 class="font-medium text-base">Website UMKM &amp; Bisnis</h3>
            </div>
            <p class="text-xs text-[#999999] leading-relaxed">
              Katalog produk digital, etalase UMKM, dan landing page berkinerja tinggi yang mempermudah calon pelanggan mengenal dan mempercayai bisnis Anda.
            </p>
          </div>
          <div class="bg-[#141418] p-6 rounded-[4px] border border-[rgba(241,241,239,0.1)] space-y-2">
            <div class="flex items-center gap-2.5">
              <span class="material-symbols-outlined text-[18px] text-primary">apartment</span>
              <h3 class="font-medium text-base">Company Profile Korporat &amp; Instansi</h3>
            </div>
            <p class="text-xs text-[#999999] leading-relaxed">
              Website resmi dengan tata kelola informasi yang rapi, arsitektur PWA terpadu, dan kecepatan akses prima untuk instansi maupun korporasi.
            </p>
          </div>
        </div>

        <div class="pt-4 border-t border-[rgba(241,241,239,0.1)] flex flex-wrap items-center justify-between gap-4">
          <div class="text-xs text-[#999999] font-mono">
            Karakter: <span class="text-primary font-medium">Desain Custom, Responsif Mobile, SEO-Ready, Cepat Dibuka</span>
          </div>
          <router-link :to="{ path: '/kontak', query: { service: 'Website & Company Profile' } }" class="btn-primary text-xs font-medium uppercase tracking-wider py-2.5 px-6 group flex items-center gap-2">
            <span>Konsultasi Website</span>
            <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </router-link>
        </div>
      </div>

      <!-- 2. Personal Website & Branding -->
      <div class="card-dark service-block p-8 sm:p-12 space-y-8">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[rgba(241,241,239,0.1)] pb-6">
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 rounded-[4px] flex items-center justify-center bg-[rgba(0,77,255,0.15)] border border-[rgba(0,77,255,0.3)]">
              <span class="material-symbols-outlined text-3xl text-[#004dff]">badge</span>
            </div>
            <div>
              <div class="text-xs font-mono text-primary uppercase tracking-wider font-semibold">PILLAR 02 · PERSONAL IDENTITY</div>
              <h2 class="text-2xl sm:text-3xl font-display font-medium">Personal Website &amp; Branding</h2>
            </div>
          </div>
          <span class="text-xs font-mono text-[#999999]">PORTFOLIO &amp; REPUTATION</span>
        </div>

        <p class="text-[#999999] text-base leading-relaxed">
          Di era digital, kehadiran personal branding yang kuat adalah aset bernilai tinggi. Kami membantu profesional, konsultan, kreator, dan figur publik membangun ruang digital mandiri yang menonjolkan karya dan kepribadian autentik Anda.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div class="bg-[#141418] p-6 rounded-[4px] border border-[rgba(241,241,239,0.1)] space-y-2">
            <div class="flex items-center gap-2.5">
              <span class="material-symbols-outlined text-[18px] text-[#004dff]">auto_stories</span>
              <h3 class="font-medium text-base">Portofolio Interaktif &amp; Karya</h3>
            </div>
            <p class="text-xs text-[#999999] leading-relaxed">
              Showcase proyek dengan tata letak visual menawan, interaksi dinamis, dan narasi studi kasus yang membuktikan kapabilitas keahlian Anda.
            </p>
          </div>
          <div class="bg-[#141418] p-6 rounded-[4px] border border-[rgba(241,241,239,0.1)] space-y-2">
            <div class="flex items-center gap-2.5">
              <span class="material-symbols-outlined text-[18px] text-[#004dff]">hub</span>
              <h3 class="font-medium text-base">Pusat Tautan &amp; Kredibilitas Mandiri</h3>
            </div>
            <p class="text-xs text-[#999999] leading-relaxed">
              Alternatif mandiri yang jauh lebih profesional dibanding agregator link standar, terhubung langsung ke domain pribadi Anda sendiri.
            </p>
          </div>
        </div>

        <div class="pt-4 border-t border-[rgba(241,241,239,0.1)] flex flex-wrap items-center justify-between gap-4">
          <div class="text-xs text-[#999999] font-mono">
            Karakter: <span class="text-primary font-medium">Bercerita Kuat, Tipografi Elegan, Kredibilitas Tinggi</span>
          </div>
          <router-link :to="{ path: '/kontak', query: { service: 'Personal Branding' } }" class="btn-primary text-xs font-medium uppercase tracking-wider py-2.5 px-6 group flex items-center gap-2">
            <span>Konsultasi Personal</span>
            <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </router-link>
        </div>
      </div>

      <!-- 3. Gamifikasi & Media Interaktif -->
      <div class="card-dark service-block p-8 sm:p-12 space-y-8">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[rgba(241,241,239,0.1)] pb-6">
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 rounded-[4px] flex items-center justify-center bg-[rgba(226,6,46,0.15)] border border-[rgba(226,6,46,0.3)]">
              <span class="material-symbols-outlined text-3xl text-secondary">sports_esports</span>
            </div>
            <div>
              <div class="text-xs font-mono text-secondary uppercase tracking-wider font-semibold">PILLAR 03 · INTERACTIVE MEDIA</div>
              <h2 class="text-2xl sm:text-3xl font-display font-medium">Gamifikasi &amp; Pengalaman Interaktif</h2>
            </div>
          </div>
          <span class="text-xs font-mono text-[#999999]">ENGAGEMENT &amp; PLAY</span>
        </div>

        <p class="text-[#999999] text-base leading-relaxed">
          Mengubah interaksi pasif pengunjung menjadi pengalaman yang aktif dan menyenangkan. Gamifikasi dan elemen interaktif membantu brand Anda diingat lebih lama dan meningkatkan durasi kunjungan pengguna.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div class="bg-[#141418] p-6 rounded-[4px] border border-[rgba(241,241,239,0.1)] space-y-2">
            <div class="flex items-center gap-2.5">
              <span class="material-symbols-outlined text-[18px] text-secondary">celebration</span>
              <h3 class="font-medium text-base">Gamifikasi Promosi &amp; Aktivasi Brand</h3>
            </div>
            <p class="text-xs text-[#999999] leading-relaxed">
              Mini game web instan tanpa perlu unduh aplikasi untuk menyemarakkan peluncuran produk baru atau kampanye promosi berhadiah.
            </p>
          </div>
          <div class="bg-[#141418] p-6 rounded-[4px] border border-[rgba(241,241,239,0.1)] space-y-2">
            <div class="flex items-center gap-2.5">
              <span class="material-symbols-outlined text-[18px] text-secondary">interactive_space</span>
              <h3 class="font-medium text-base">Micro-Interactions &amp; Visual Dinamis</h3>
            </div>
            <p class="text-xs text-[#999999] leading-relaxed">
              Pengalaman antarmuka dinamis dengan animasi kanvas, efek hover responsif, dan interaktivitas yang menghidupkan halaman web Anda.
            </p>
          </div>
        </div>

        <div class="pt-4 border-t border-[rgba(241,241,239,0.1)] flex flex-wrap items-center justify-between gap-4">
          <div class="text-xs text-[#999999] font-mono">
            Karakter: <span class="text-secondary font-medium">Canvas 2D/3D, Gamified Mechanics, WebGL Interactive</span>
          </div>
          <router-link :to="{ path: '/kontak', query: { service: 'Gamifikasi' } }" class="btn-accent text-xs font-medium uppercase tracking-wider py-2.5 px-6 group flex items-center gap-2">
            <span>Konsultasi Gamifikasi</span>
            <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </router-link>
        </div>
      </div>

      <!-- 4. Pemanfaatan AI (Artificial Intelligence) -->
      <div class="card-dark service-block p-8 sm:p-12 space-y-8">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[rgba(241,241,239,0.1)] pb-6">
          <div class="flex items-center gap-4">
            <div class="w-14 h-14 rounded-[4px] flex items-center justify-center bg-[rgba(166,0,255,0.15)] border border-[rgba(166,0,255,0.3)]">
              <span class="material-symbols-outlined text-3xl text-violet">psychology</span>
            </div>
            <div>
              <div class="text-xs font-mono text-violet uppercase tracking-wider font-semibold">PILLAR 04 · INTELLIGENT TECH</div>
              <h2 class="text-2xl sm:text-3xl font-display font-medium">Integrasi Artificial Intelligence (AI)</h2>
            </div>
          </div>
          <span class="text-xs font-mono text-[#999999]">SMART ENHANCEMENTS</span>
        </div>

        <p class="text-[#999999] text-base leading-relaxed">
          Kami memanfaatkan teknologi kecerdasan buatan ketika dibutuhkan untuk meningkatkan efisiensi dan memperkaya fungsi produk digital—bukan sekadar gimmick, melainkan alat yang nyata membantu pengguna dan operasional Anda.
        </p>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div class="bg-[#141418] p-6 rounded-[4px] border border-[rgba(241,241,239,0.1)] space-y-2">
            <div class="flex items-center gap-2.5">
              <span class="material-symbols-outlined text-[18px] text-violet">smart_toy</span>
              <h3 class="font-medium text-base">Asisten Digital &amp; Customer Service Cerdas</h3>
            </div>
            <p class="text-xs text-[#999999] leading-relaxed">
              Integrasi chatbot AI yang memahami konteks basis pengetahuan brand Anda untuk menjawab pertanyaan pelanggan 24/7 dengan ramah dan presisi.
            </p>
          </div>
          <div class="bg-[#141418] p-6 rounded-[4px] border border-[rgba(241,241,239,0.1)] space-y-2">
            <div class="flex items-center gap-2.5">
              <span class="material-symbols-outlined text-[18px] text-violet">auto_fix_high</span>
              <h3 class="font-medium text-base">Automasi Alur Kerja &amp; Personalisasi</h3>
            </div>
            <p class="text-xs text-[#999999] leading-relaxed">
              Pemrosesan data cerdas, personalisasi rekomendasi konten, dan automasi tugas repetitif untuk mempercepat proses bisnis harian.
            </p>
          </div>
        </div>

        <div class="pt-4 border-t border-[rgba(241,241,239,0.1)] flex flex-wrap items-center justify-between gap-4">
          <div class="text-xs text-[#999999] font-mono">
            Karakter: <span class="text-violet font-medium">Pragmatis, Tepat Guna, Berbasis Model Terkini &amp; API Modern</span>
          </div>
          <router-link :to="{ path: '/kontak', query: { service: 'AI Integration' } }" class="btn-primary text-xs font-medium uppercase tracking-wider py-2.5 px-6 group flex items-center gap-2">
            <span>Konsultasi AI</span>
            <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </router-link>
        </div>
      </div>

      <!-- ALUR PENGERJAAN KOLABORATIF -->
      <div class="card-dark p-8 sm:p-12 space-y-10">
        <div class="text-center max-w-2xl mx-auto space-y-3">
          <div class="text-xs font-mono text-primary uppercase tracking-widest font-semibold">PENDEKATAN KERJA</div>
          <h2 class="text-2xl sm:text-3xl font-display font-medium">Alur Kolaboratif &amp; Komunikasi Lugas</h2>
          <p class="text-xs sm:text-sm text-[#999999]">Proses kerja yang transparan dan mudah dipahami dari perumusan ide hingga peluncuran live.</p>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-[#141418] p-6 rounded-[4px] border border-[rgba(241,241,239,0.08)] space-y-3">
            <div class="text-primary font-mono font-bold text-2xl">01</div>
            <h3 class="font-medium text-base">Diskusi Cerita Brand</h3>
            <p class="text-xs text-[#999999] leading-relaxed">Mendengarkan visi, target audiens, dan karakter unik brand Anda agar solusi yang dibuat tepat sasaran.</p>
          </div>
          <div class="bg-[#141418] p-6 rounded-[4px] border border-[rgba(241,241,239,0.08)] space-y-3">
            <div class="text-primary font-mono font-bold text-2xl">02</div>
            <h3 class="font-medium text-base">Konsep &amp; Desain Custom</h3>
            <p class="text-xs text-[#999999] leading-relaxed">Menyusun rancangan visual dan arsitektur yang orisinal, bukan sekadar menggunakan template yang seragam.</p>
          </div>
          <div class="bg-[#141418] p-6 rounded-[4px] border border-[rgba(241,241,239,0.08)] space-y-3">
            <div class="text-primary font-mono font-bold text-2xl">03</div>
            <h3 class="font-medium text-base">Eksekusi &amp; Interaktivitas</h3>
            <p class="text-xs text-[#999999] leading-relaxed">Membangun kode yang bersih, responsif, cepat diakses, dan menambahkan gamifikasi/AI jika diperlukan.</p>
          </div>
          <div class="bg-[#141418] p-6 rounded-[4px] border border-[rgba(241,241,239,0.08)] space-y-3">
            <div class="text-primary font-mono font-bold text-2xl">04</div>
            <h3 class="font-medium text-base">Serah Terima &amp; Support</h3>
            <p class="text-xs text-[#999999] leading-relaxed">Peluncuran ke domain publik, panduan pengelolaan yang jelas, serta pendampingan teknis yang berkelanjutan.</p>
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
