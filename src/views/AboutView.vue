<template>
  <div class="py-16 sm:py-24 transition-colors duration-300">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 space-y-16">

      <!-- Header -->
      <div class="text-center max-w-2xl mx-auto space-y-4">
        <div 
          class="inline-flex items-center px-4 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider font-mono shadow-sm"
          :class="isDark ? 'border-[#C239D8]/40 bg-[#191c1f] text-stitch-magenta-light' : 'border-fuchsia-200/90 bg-white/95 text-slate-800 shadow-[0_2px_12px_rgba(192,38,211,0.08)]'"
        >
          <span>Tentang Nexa Digital Agency</span>
        </div>

        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-headline font-semibold tracking-tight">
          Mengenal Nexa Digital Agency
        </h1>
        <p class="text-on-surface-variant text-base sm:text-lg leading-relaxed">
          Digital agency yang berfokus pada pengembangan produk digital berkualitas tinggi untuk UMKM, korporasi, organisasi, maupun personal branding visioner.
        </p>
      </div>

      <!-- Tagline Accent Banner -->
      <div 
        class="p-8 sm:p-10 rounded-2xl border text-center space-y-2 relative overflow-hidden transition-all"
        :class="isDark 
          ? 'bg-[#191c1f] border-stitch-magenta/40 shadow-[0_0_25px_rgba(194,57,216,0.15)]' 
          : 'bg-gradient-to-br from-white via-[#f8f9ff] to-[#f5f3ff] border-violet-200/80 shadow-[0_8px_30px_rgba(124,58,237,0.06)]'"
      >
        <div class="absolute top-0 left-0 right-0 h-[2px]" style="background: linear-gradient(90deg, #C239D8, #99D4FF);"></div>
        <p class="text-xs uppercase tracking-[0.2em] font-mono text-stitch-magenta font-semibold">Filosofi Kami</p>
        <div class="text-2xl sm:text-3xl font-headline font-bold italic tracking-tight">
          &ldquo;Your brand deserves better than &quot;basic&quot;.&rdquo;
        </div>
        <p class="text-xs sm:text-sm text-on-surface-variant max-w-xl mx-auto pt-1 leading-relaxed">
          Setiap brand memiliki cerita dan posisi pasar yang unik. Kami hadir untuk memastikan karya digital Anda tampil orisinal, berkarakter kuat, dan dapat diandalkan secara teknis.
        </p>
      </div>

      <!-- Core Story Card -->
      <div 
        class="p-8 sm:p-12 rounded-2xl border space-y-6 transition-all"
        :class="isDark ? 'bg-[#191c1f] border-[#2a2d31]' : 'bg-white/95 border-slate-200/90 shadow-[0_4px_24px_rgba(15,23,42,0.04)]'"
      >
        <div class="space-y-1 border-b border-outline-variant pb-4">
          <p class="text-xs uppercase tracking-wider font-mono text-stitch-cyan font-semibold">Identitas &amp; Misi</p>
          <h2 class="text-2xl sm:text-3xl font-headline font-semibold">Presisi Rekayasa &amp; Nilai Bisnis</h2>
        </div>
        <p class="text-on-surface-variant text-base leading-relaxed">
          <strong :class="isDark ? 'text-white' : 'text-[#161c24]'">Nexa Digital Agency</strong> adalah digital studio &amp; agency independen yang memadukan kepekaan desain berbobot editorial dengan standar rekayasa piranti lunak modern. Kami membantu mengubah ide, kebutuhan operasional, dan identitas brand klien menjadi solusi digital yang fungsional dan terukur.
        </p>
        <p class="text-on-surface-variant text-base leading-relaxed">
          Layanan kami mencakup arsitektur website resmi, aplikasi mobile multiplatform, sistem SaaS kas &amp; inventaris, hingga integrasi kecerdasan buatan (AI) ketika dibutuhkan. Kami menolak pendekatan template instan pasaran yang membuat identitas brand tampak generik.
        </p>
      </div>

      <!-- 3 Core Tenets -->
      <div class="space-y-8">
        <div class="text-center space-y-2">
          <p class="text-xs uppercase tracking-widest font-mono text-stitch-purple font-semibold">Nilai Utama</p>
          <h2 class="text-2xl sm:text-3xl font-headline font-semibold">Mengapa Memilih Nexa?</h2>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          
          <!-- Tenet 1 -->
          <div 
            class="p-6 rounded-xl border space-y-3 transition-all"
            :class="isDark ? 'bg-[#191c1f] border-[#2a2d31]' : 'bg-white/95 border-slate-200/90 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_32px_rgba(124,58,237,0.07)] hover:border-violet-200/90'"
          >
            <div 
              class="w-11 h-11 rounded-lg flex items-center justify-center border"
              :class="isDark ? 'bg-[#272a2d] border-[#484740] text-stitch-magenta' : 'bg-fuchsia-50 border border-fuchsia-100 text-fuchsia-700'"
            >
              <span class="material-symbols-outlined text-2xl">brush</span>
            </div>
            <h3 class="font-semibold text-lg">Solusi Custom</h3>
            <p class="text-xs text-on-surface-variant leading-relaxed">
              Setiap baris kode dan komponen visual dirancang spesifik untuk kebutuhan Anda, bukan sekadar mengganti teks pada template yang sama.
            </p>
          </div>

          <!-- Tenet 2 -->
          <div 
            class="p-6 rounded-xl border space-y-3 transition-all"
            :class="isDark ? 'bg-[#191c1f] border-[#2a2d31]' : 'bg-white/95 border-slate-200/90 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_32px_rgba(124,58,237,0.07)] hover:border-violet-200/90'"
          >
            <div 
              class="w-11 h-11 rounded-lg flex items-center justify-center border"
              :class="isDark ? 'bg-[#272a2d] border-[#484740] text-stitch-purple' : 'bg-violet-50 border border-violet-100 text-violet-700'"
            >
              <span class="material-symbols-outlined text-2xl">speed</span>
            </div>
            <h3 class="font-semibold text-lg">Kinerja Teruji</h3>
            <p class="text-xs text-on-surface-variant leading-relaxed">
              Arsitektur ringan, kecepatan render instan, aksesibilitas WCAG, dan optimasi SEO menyeluruh untuk performa digital jangka panjang.
            </p>
          </div>

          <!-- Tenet 3 -->
          <div 
            class="p-6 rounded-xl border space-y-3 transition-all"
            :class="isDark ? 'bg-[#191c1f] border-[#2a2d31]' : 'bg-white/95 border-slate-200/90 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_32px_rgba(124,58,237,0.07)] hover:border-violet-200/90'"
          >
            <div 
              class="w-11 h-11 rounded-lg flex items-center justify-center border"
              :class="isDark ? 'bg-[#272a2d] border-[#484740] text-stitch-cyan' : 'bg-sky-50 border border-sky-100 text-sky-700'"
            >
              <span class="material-symbols-outlined text-2xl">lock_open</span>
            </div>
            <h3 class="font-semibold text-lg">100% Hak Milik</h3>
            <p class="text-xs text-on-surface-variant leading-relaxed">
              Seluruh kode sumber, aset, dan lisensi adalah milik Anda tanpa ikatan vendor lock-in atau biaya tersembunyi.
            </p>
          </div>

        </div>
      </div>

      <!-- CTA -->
      <div class="text-center pt-4">
        <router-link 
          to="/kontak" 
          class="btn-stitch-primary px-8 py-3.5 text-xs font-bold uppercase tracking-wider"
        >
          <span>Mulai Diskusi Bersama Kami</span>
          <span class="material-symbols-outlined text-base">arrow_forward</span>
        </router-link>
      </div>

    </div>
  </div>
</template>

<script setup>
import { isDark } from '../utils/theme'
</script>
