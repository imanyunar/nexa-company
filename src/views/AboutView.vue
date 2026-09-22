<template>
  <div class="bg-black text-white py-16 sm:py-24 border-b border-[rgba(241,241,239,0.12)]">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 space-y-16">

      <!-- Header -->
      <div class="text-center max-w-2xl mx-auto space-y-4">
        <div class="inline-flex items-center gap-2 px-3 py-1 bg-[#141418] border border-[rgba(241,241,239,0.14)] rounded-[2px] text-xs font-mono text-primary font-medium">
          <span>BE SEEN BE CHOSEN</span>
        </div>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-white tracking-[-1.5px]">
          Tentang Nexa
        </h1>
        <p class="text-[#999999] text-base sm:text-lg leading-relaxed">
          Agensi teknologi independen yang berfokus pada keunggulan arsitektur, transparansi komunikasi, dan solusi nyata berkinerja tinggi.
        </p>
      </div>

      <!-- Philosophy Manifesto Card -->
      <div class="card-dark about-block p-8 sm:p-12 space-y-6">
        <div class="flex items-center gap-3 border-b border-[rgba(241,241,239,0.1)] pb-4">
          <span class="px-2.5 py-1 rounded-[2px] bg-[#141418] border border-[rgba(241,241,239,0.12)] text-xs font-mono text-primary font-medium">FILOSOFI KAMI</span>
          <h2 class="text-2xl sm:text-3xl font-display font-medium text-white">Be Seen Be Chosen</h2>
        </div>
        <p class="text-[#999999] text-base leading-relaxed">
          Dalam lanskap persaingan digital yang sangat padat, memiliki website atau aplikasi fungsional saja tidak lagi mencukupi. Filosofi fundamental Nexa Digital Agency berakar pada prinsip <strong class="text-white font-medium">Be Seen Be Chosen</strong>: merancang dan membangun ekosistem digital yang tidak hanya memikat secara visual, tetapi secara terukur mampu menarik perhatian target audiens dan meyakinkan mereka untuk memilih brand Anda.
        </p>
        <p class="text-[#999999] text-base leading-relaxed">
          Pendekatan rekayasa kami mengutamakan <strong class="text-white font-medium">kecepatan tinggi</strong>, <strong class="text-white font-medium">antarmuka yang bersih dan intuitif</strong>, serta <strong class="text-white font-medium">arsitektur kode yang solid</strong> agar investasi digital Anda memberikan keunggulan kompetitif jangka panjang.
        </p>
      </div>

      <!-- 3 Core Principles -->
      <div class="space-y-8">
        <h2 class="text-2xl sm:text-3xl font-display font-medium text-white text-center">Prinsip Kerja Kami</h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          
          <div class="card-dark about-block p-6 space-y-4">
            <div class="w-12 h-12 rounded-[4px] flex items-center justify-center bg-[rgba(0,65,240,0.15)] border border-[rgba(0,65,240,0.3)]">
              <span class="material-symbols-outlined text-3xl text-primary">bolt</span>
            </div>
            <h3 class="font-medium text-lg text-white">Kecepatan &amp; Performa</h3>
            <p class="text-xs text-[#999999] leading-relaxed">
              Setiap baris kode dioptimasi agar ringan, cepat dibuka di koneksi apapun, dan memenuhi standar Core Web Vitals tertinggi.
            </p>
          </div>

          <div class="card-dark about-block p-6 space-y-4">
            <div class="w-12 h-12 rounded-[4px] flex items-center justify-center bg-[rgba(226,6,46,0.15)] border border-[rgba(226,6,46,0.3)]">
              <span class="material-symbols-outlined text-3xl text-secondary">track_changes</span>
            </div>
            <h3 class="font-medium text-lg text-white">Tepat Guna &amp; Terukur</h3>
            <p class="text-xs text-[#999999] leading-relaxed">
              Fokus mengembangkan fitur yang secara nyata menyelesaikan masalah operasional tanpa beban kompleksitas yang tidak perlu.
            </p>
          </div>

          <div class="card-dark about-block p-6 space-y-4">
            <div class="w-12 h-12 rounded-[4px] flex items-center justify-center bg-[rgba(166,0,255,0.15)] border border-[rgba(166,0,255,0.3)]">
              <span class="material-symbols-outlined text-3xl text-violet">verified_user</span>
            </div>
            <h3 class="font-medium text-lg text-white">Transparansi Terbuka</h3>
            <p class="text-xs text-[#999999] leading-relaxed">
              Pelaporan progres rutin, komunikasi lugas dan bersahabat, serta pendampingan teknis penuh pasca peluncuran.
            </p>
          </div>

        </div>
      </div>

      <!-- Collaboration CTA -->
      <div class="card-dark about-block p-8 sm:p-12 text-center space-y-6">
        <h2 class="text-2xl sm:text-3xl font-display font-medium text-white">Mari Berkolaborasi Bersama Kami</h2>
        <p class="text-[#999999] text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
          Diskusikan visi proyek dan tantangan teknologi bisnis Anda bersama tim teknis Nexa Digital Agency.
        </p>
        <div class="pt-2">
          <router-link to="/kontak" class="btn-primary text-xs uppercase font-medium py-3.5 px-8 group inline-flex items-center gap-2">
            <span>Hubungi Kami</span>
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
