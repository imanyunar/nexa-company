<template>
  <div class="bg-paper text-ink py-20 sm:py-24">
    <div class="max-w-4xl mx-auto px-6 space-y-16">
      
      <!-- Editorial Page Top -->
      <div class="text-center max-w-2xl mx-auto space-y-4">
        <div class="text-xs font-mono text-primary uppercase tracking-widest">ABOUT US</div>
        <h1 class="text-4xl sm:text-5xl font-display font-light text-ink">
          Tentang Nexa
        </h1>
        <p class="text-muted text-base sm:text-lg leading-relaxed">
          Agency teknologi independen yang fokus pada kualitas pengerjaan, kejujuran komunikasi, dan solusi nyata.
        </p>
      </div>

      <!-- Main Story (8px Card) -->
      <div class="card-8px about-block p-8 sm:p-10 space-y-6 hover:border-primary/50 transition-all duration-300">
        <h2 class="text-2xl sm:text-3xl font-display font-light text-ink">Filosofi & Misi Kami</h2>
        <p class="text-muted text-base leading-relaxed">
          Nexa didirikan dengan satu keyakinan: kehadiran digital yang hebat tidak harus rumit atau membingungkan. Kami hadir untuk membantu bisnis, instansi pemerintahan, dan penggerak komunitas lokal mendapatkan platform digital yang handal.
        </p>
        <p class="text-muted text-base leading-relaxed">
          Pendekatan kami mengutamakan <b>performa tinggi</b>, <b>antarmuka bersih yang mudah dipahami</b>, dan <b>arsitektur kode yang rapi</b> agar dapat terus berkembang seiring berjalannya waktu.
        </p>
      </div>

      <!-- 3 Principles Grid (8px Cards) -->
      <div class="space-y-8">
        <h2 class="text-2xl sm:text-3xl font-display font-light text-ink text-center">
          Prinsip Kerja Kami
        </h2>
        
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div class="card-8px about-block p-6 space-y-3 hover:border-primary hover:-translate-y-1 transition-all duration-300">
            <div class="w-10 h-10 rounded-lg bg-paper-soft text-primary flex items-center justify-center font-bold text-lg">
              ⚡
            </div>
            <h3 class="font-bold text-base text-ink">Kecepatan & Performa</h3>
            <p class="text-xs text-muted leading-relaxed">
              Website dan sistem dioptimasi agar ringan, cepat dibuka di seluruh perangkat dan koneksi internet.
            </p>
          </div>

          <div class="card-8px about-block p-6 space-y-3 hover:border-cyan hover:-translate-y-1 transition-all duration-300">
            <div class="w-10 h-10 rounded-lg bg-cyan/10 text-cyan-pressed flex items-center justify-center font-bold text-lg">
              🎯
            </div>
            <h3 class="font-bold text-base text-ink">Tepat Guna</h3>
            <p class="text-xs text-muted leading-relaxed">
              Membangun fitur yang benar-benar dibutuhkan tanpa kompleksitas yang membebani pengguna.
            </p>
          </div>

          <div class="card-8px about-block p-6 space-y-3 hover:border-magenta hover:-translate-y-1 transition-all duration-300">
            <div class="w-10 h-10 rounded-lg bg-magenta/10 text-magenta flex items-center justify-center font-bold text-lg">
              🤝
            </div>
            <h3 class="font-bold text-base text-ink">Transparan & Terbuka</h3>
            <p class="text-xs text-muted leading-relaxed">
              Komunikasi jujur, laporan progres berkala, dan pendampingan teknis yang ramah.
            </p>
          </div>
        </div>
      </div>

      <!-- Action Band -->
      <div class="bg-ink text-white rounded-lg p-8 sm:p-10 text-center space-y-6 card-8px-dark about-block">
        <h2 class="text-2xl sm:text-3xl font-display font-light text-white">Mari Berkolaborasi Bersama Kami</h2>
        <p class="text-white/70 text-sm max-w-lg mx-auto leading-relaxed">
          Diskusikan ide proyek Anda bersama tim teknis Nexa dan dapatkan rekomendasi terbaik.
        </p>
        <div class="pt-2">
          <router-link to="/kontak" class="btn-pill-primary text-xs uppercase font-bold py-3.5 px-8 transition-transform hover:scale-105 active:scale-95">
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
