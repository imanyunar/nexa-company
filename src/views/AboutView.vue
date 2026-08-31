<template>
  <div class="bg-base text-white py-20 sm:py-24">
    <div class="max-w-4xl mx-auto px-6 space-y-16">

      <div class="text-center max-w-2xl mx-auto space-y-4">
        <div class="text-xs font-mono t-cyan uppercase tracking-widest">ABOUT US</div>
        <h1 class="text-4xl sm:text-5xl font-display font-light text-white">Tentang Nexa Digital Agency</h1>
        <p class="t-muted text-base sm:text-lg leading-relaxed">Agensi teknologi independen yang fokus pada kualitas pengerjaan, kejujuran komunikasi, dan solusi nyata.</p>
      </div>

      <div class="card-unified about-block p-8 sm:p-10 space-y-6">
        <h2 class="text-2xl sm:text-3xl font-display font-light text-white">Filosofi & Misi Kami</h2>
        <p class="t-muted text-base leading-relaxed">Nexa Digital Agency didirikan dengan satu keyakinan: kehadiran digital yang hebat tidak harus rumit atau membingungkan. Kami hadir untuk membantu bisnis, instansi pemerintahan, dan penggerak komunitas lokal mendapatkan platform digital yang handal.</p>
        <p class="t-muted text-base leading-relaxed">Pendekatan kami mengutamakan <strong class="text-white">performa tinggi</strong>, <strong class="text-white">antarmuka bersih yang mudah dipahami</strong>, dan <strong class="text-white">arsitektur kode yang rapi</strong> agar dapat terus berkembang seiring berjalannya waktu.</p>
      </div>

      <div class="space-y-8">
        <h2 class="text-2xl sm:text-3xl font-display font-light text-white text-center">Prinsip Kerja Kami</h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div class="card-unified about-block p-6 space-y-3">
            <div class="w-11 h-11 rounded-lg flex items-center justify-center" style="background:rgba(58,76,224,0.18); border:1px solid rgba(58,76,224,0.35);">
              <Zap class="w-5 h-5 text-cyan" />
            </div>
            <h3 class="font-bold text-base text-white">Kecepatan & Performa</h3>
            <p class="text-xs t-muted leading-relaxed">Website dan sistem dioptimasi agar ringan, cepat dibuka di seluruh perangkat dan koneksi internet.</p>
          </div>
          <div class="card-unified about-block p-6 space-y-3">
            <div class="w-11 h-11 rounded-lg flex items-center justify-center" style="background:rgba(23,195,242,0.18); border:1px solid rgba(23,195,242,0.35);">
              <Target class="w-5 h-5 text-cyan" />
            </div>
            <h3 class="font-bold text-base text-white">Tepat Guna</h3>
            <p class="text-xs t-muted leading-relaxed">Membangun fitur yang benar-benar dibutuhkan tanpa kompleksitas yang membebani pengguna.</p>
          </div>
          <div class="card-unified about-block p-6 space-y-3">
            <div class="w-11 h-11 rounded-lg flex items-center justify-center" style="background:rgba(230,32,197,0.18); border:1px solid rgba(230,32,197,0.35);">
              <ShieldCheck class="w-5 h-5 text-pink-400" />
            </div>
            <h3 class="font-bold text-base text-white">Transparan & Terbuka</h3>
            <p class="text-xs t-muted leading-relaxed">Komunikasi jujur, laporan progres berkala, dan pendampingan teknis yang ramah.</p>
          </div>
        </div>
      </div>

      <div class="bg-elevated text-white rounded-lg p-8 sm:p-10 text-center space-y-6 card-unified about-block">
        <h2 class="text-2xl sm:text-3xl font-display font-light text-white">Mari Berkolaborasi Bersama Kami</h2>
        <p class="t-muted text-sm max-w-lg mx-auto leading-relaxed">Diskusikan ide proyek Anda bersama tim teknis Nexa Digital Agency dan dapatkan rekomendasi terbaik.</p>
        <div class="pt-2"><router-link to="/kontak" class="btn-pill-primary text-xs uppercase font-bold py-3.5 px-8">Hubungi Kami</router-link></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { Zap, Target, ShieldCheck } from 'lucide-vue-next'
import { animateStaggerFadeIn } from '../utils/animations'
onMounted(() => { animateStaggerFadeIn('.about-block', { delay: 150, stagger: 120 }) })
</script>
