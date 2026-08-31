<template>
  <div class="bg-theme-base text-white py-20 sm:py-24">
    <div class="max-w-4xl mx-auto px-6 space-y-16">
      
      <!-- Editorial Page Top -->
      <div class="text-center max-w-2xl mx-auto space-y-4">
        <div class="text-xs font-mono text-cyan uppercase tracking-widest">ABOUT US</div>
        <h1 class="text-4xl sm:text-5xl font-display font-light text-white">
          Tentang Nexa
        </h1>
        <p class="text-theme-text-muted text-base sm:text-lg leading-relaxed">
          Agency teknologi independen yang fokus pada kualitas pengerjaan, kejujuran komunikasi, dan solusi nyata.
        </p>
      </div>

      <!-- Main Story (Unified Card) -->
      <div class="card-unified about-block p-8 sm:p-10 space-y-6">
        <h2 class="text-2xl sm:text-3xl font-display font-light text-white">Filosofi & Misi Kami</h2>
        <p class="text-theme-text-muted text-base leading-relaxed">
          Nexa didirikan dengan satu keyakinan: kehadiran digital yang hebat tidak harus rumit atau membingungkan. Kami hadir untuk membantu bisnis, instansi pemerintahan, dan penggerak komunitas lokal mendapatkan platform digital yang handal.
        </p>
        <p class="text-theme-text-muted text-base leading-relaxed">
          Pendekatan kami mengutamakan <b>performa tinggi</b>, <b>antarmuka bersih yang mudah dipahami</b>, dan <b>arsitektur kode yang rapi</b> agar dapat terus berkembang seiring berjalannya waktu.
        </p>
      </div>

      <!-- 3 Principles Grid (Unified Cards) -->
      <div class="space-y-8">
        <h2 class="text-2xl sm:text-3xl font-display font-light text-white text-center">
          Prinsip Kerja Kami
        </h2>
        
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div class="card-unified about-block p-6 space-y-3">
            <div class="w-10 h-10 rounded-lg bg-primary/20 text-cyan flex items-center justify-center font-bold text-lg border border-primary/30">
              ⚡
            </div>
            <h3 class="font-bold text-base text-white">Kecepatan & Performa</h3>
            <p class="text-xs text-theme-text-muted leading-relaxed">
              Website dan sistem dioptimasi agar ringan, cepat dibuka di seluruh perangkat dan koneksi internet.
            </p>
          </div>

          <div class="card-unified about-block p-6 space-y-3">
            <div class="w-10 h-10 rounded-lg bg-cyan/20 text-cyan flex items-center justify-center font-bold text-lg border border-cyan/30">
              🎯
            </div>
            <h3 class="font-bold text-base text-white">Tepat Guna</h3>
            <p class="text-xs text-theme-text-muted leading-relaxed">
              Membangun fitur yang benar-benar dibutuhkan tanpa kompleksitas yang membebani pengguna.
            </p>
          </div>

          <div class="card-unified about-block p-6 space-y-3">
            <div class="w-10 h-10 rounded-lg bg-magenta/20 text-magenta flex items-center justify-center font-bold text-lg border border-magenta/30">
              🤝
            </div>
            <h3 class="font-bold text-base text-white">Transparan & Terbuka</h3>
            <p class="text-xs text-theme-text-muted leading-relaxed">
              Komunikasi jujur, laporan progres berkala, dan pendampingan teknis yang ramah.
            </p>
          </div>
        </div>
      </div>

      <!-- Action Band -->
      <div class="bg-theme-elevated text-white rounded-lg p-8 sm:p-10 text-center space-y-6 card-unified about-block">
        <h2 class="text-2xl sm:text-3xl font-display font-light text-white">Mari Berkolaborasi Bersama Kami</h2>
        <p class="text-theme-text-muted text-sm max-w-lg mx-auto leading-relaxed">
          Diskusikan ide proyek Anda bersama tim teknis Nexa dan dapatkan rekomendasi terbaik.
        </p>
        <div class="pt-2">
          <router-link to="/kontak" class="btn-pill-primary text-xs uppercase font-bold py-3.5 px-8">
            Hubungi Kami
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
