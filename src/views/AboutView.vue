<template>
  <div class="py-16 sm:py-24 border-b border-[rgba(241,241,239,0.12)] transition-colors duration-300">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 space-y-16">

      <!-- Header -->
      <div class="text-center max-w-2xl mx-auto space-y-4">
        <p class="text-xs uppercase tracking-widest text-primary font-semibold">
          About Nexa Agency
        </p>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-display font-medium tracking-[-1.5px]">
          Mengenal Nexa Agency
        </h1>
        <p class="text-[#999999] text-base sm:text-lg leading-relaxed">
          Digital agency yang berfokus pada pengembangan website dan identitas digital untuk UMKM, bisnis, organisasi, maupun personal branding.
        </p>
      </div>

      <!-- Tagline Accent Banner -->
      <div class="card-dark about-block p-8 sm:p-10 border-l-4 border-l-primary text-center space-y-2 relative overflow-hidden bg-gradient-to-r from-primary/10 via-transparent to-violet/10">
        <p class="text-xs uppercase tracking-[0.2em] text-primary font-semibold">Filosofi Kami</p>
        <div class="text-2xl sm:text-3xl font-display font-semibold italic tracking-tight">
          &ldquo;Your brand deserves better than &quot;basic&quot;.&rdquo;
        </div>
        <p class="text-xs sm:text-sm text-[#999999] max-w-xl mx-auto pt-1">
          Setiap brand memiliki cerita unik. Kami hadir untuk memastikan karya digital Anda tampil orisinal, fungsional, dan berkarakter kuat.
        </p>
      </div>

      <!-- Core Story Card -->
      <div class="card-dark about-block p-8 sm:p-12 space-y-6">
        <div class="space-y-1 border-b border-[rgba(241,241,239,0.1)] pb-4">
          <p class="text-xs uppercase tracking-wider text-primary font-semibold">Identitas &amp; Misi</p>
          <h2 class="text-2xl sm:text-3xl font-display font-medium">Relevan, Fungsional &amp; Berkarakter Kuat</h2>
        </div>
        <p class="text-[#999999] text-base leading-relaxed">
          <strong class="text-primary font-semibold">Nexa Agency</strong> adalah digital agency yang berfokus pada pengembangan website dan identitas digital untuk UMKM, bisnis, organisasi, maupun personal branding. Kami membantu mengubah ide dan kebutuhan klien menjadi solusi digital yang relevan, fungsional, dan memiliki karakter yang kuat.
        </p>
        <p class="text-[#999999] text-base leading-relaxed">
          Layanan Nexa mencakup pengembangan website dan company profile, personal website, gamifikasi, hingga pengalaman digital yang lebih interaktif. Kami juga memanfaatkan teknologi modern seperti <strong class="text-primary font-semibold">Artificial Intelligence (AI)</strong> ketika dibutuhkan untuk meningkatkan fungsi dan pengalaman pengguna secara optimal.
        </p>
      </div>

      <!-- 3 Core Tenets -->
      <div class="space-y-8">
        <div class="text-center space-y-2">
          <p class="text-xs uppercase tracking-widest text-primary font-semibold">Nilai Utama Kami</p>
          <h2 class="text-2xl sm:text-3xl font-display font-medium">Mengapa Memilih Nexa Agency?</h2>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          
          <!-- Tenet 1: Custom Not Template -->
          <div class="card-dark about-block p-6 space-y-4">
            <div class="w-12 h-12 rounded-[4px] flex items-center justify-center bg-[rgba(0,65,240,0.15)] border border-[rgba(0,65,240,0.3)]">
              <span class="material-symbols-outlined text-3xl text-primary">brush</span>
            </div>
            <h3 class="font-medium text-lg">Solusi Custom</h3>
            <p class="text-xs text-[#999999] leading-relaxed">
              Kami percaya setiap brand memiliki karakter berbeda. Solusi kami dirancang custom, bukan sekadar menggunakan template yang sama untuk semua kebutuhan.
            </p>
          </div>

          <!-- Tenet 2: Orisinal & Scalable -->
          <div class="card-dark about-block p-6 space-y-4">
            <div class="w-12 h-12 rounded-[4px] flex items-center justify-center bg-[rgba(226,6,46,0.15)] border border-[rgba(226,6,46,0.3)]">
              <span class="material-symbols-outlined text-3xl text-secondary">verified</span>
            </div>
            <h3 class="font-medium text-lg">Orisinal &amp; Scalable</h3>
            <p class="text-xs text-[#999999] leading-relaxed">
              Menciptakan karya digital yang orisinal, mudah dikembangkan di masa depan, dan mampu merepresentasikan identitas brand Anda secara autentik.
            </p>
          </div>

          <!-- Tenet 3: Collaborative & Clear -->
          <div class="card-dark about-block p-6 space-y-4">
            <div class="w-12 h-12 rounded-[4px] flex items-center justify-center bg-[rgba(166,0,255,0.15)] border border-[rgba(166,0,255,0.3)]">
              <span class="material-symbols-outlined text-3xl text-violet">forum</span>
            </div>
            <h3 class="font-medium text-lg">Kolaboratif &amp; Lugas</h3>
            <p class="text-xs text-[#999999] leading-relaxed">
              Komunikasi yang mudah dipahami dan alur kerja kolaboratif agar visi brand Anda terwujud dengan transparan tanpa kebingungan teknis.
            </p>
          </div>

        </div>
      </div>

      <!-- Collaboration CTA -->
      <div class="card-dark about-block p-8 sm:p-12 text-center space-y-6">
        <h2 class="text-2xl sm:text-3xl font-display font-medium">Bangun Kehadiran Digital yang Lebih Kuat</h2>
        <p class="text-[#999999] text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
          Konsultasikan ide website, identitas digital, atau pengalaman interaktif brand Anda bersama tim Nexa Agency.
        </p>
        <div class="pt-2">
          <router-link to="/kontak" class="btn-primary text-xs uppercase font-medium py-3.5 px-8 group inline-flex items-center gap-2">
            <span>Mulai Diskusi Proyek</span>
            <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </router-link>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { animateStaggerFadeIn } from '../utils/animations'

onMounted(() => {
  animateStaggerFadeIn('.about-block', { delay: 150, stagger: 120 })
})
</script>
