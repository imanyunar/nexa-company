<template>
  <div class="py-16 sm:py-24 transition-colors duration-300">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 space-y-16 sm:space-y-20">

      <!-- Header with Stitch Overline -->
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <div 
          class="inline-flex items-center px-4 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider font-mono shadow-sm"
          :class="isDark ? 'border-[#7B68EE]/40 bg-[#191c1f] text-stitch-purple-light' : 'border-violet-200/90 bg-white/95 text-slate-800 shadow-[0_2px_12px_rgba(124,58,237,0.08)]'"
        >
          <span>02 // Kapabilitas Studio</span>
        </div>
        
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-headline font-semibold tracking-tight">
          Layanan Rekayasa &amp; Desain Produk
        </h1>
        <p class="text-on-surface-variant text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          Mulai dari arsitektur platform web, sistem mobile, perancangan identitas visual fungsional, hingga integrasi cloud dan kecerdasan buatan.
        </p>
      </div>

      <!-- Services Grid (Stitch Detail Blocks) -->
      <div class="space-y-12 sm:space-y-16">
        
        <!-- Pillar 01: Web & SaaS Engineering -->
        <div 
          class="p-8 sm:p-12 rounded-2xl border transition-all space-y-8"
          :class="isDark 
            ? 'bg-[#191c1f] border-[#2a2d31] hover:border-stitch-magenta/50' 
            : 'bg-white/95 border-slate-200/90 hover:border-fuchsia-300 shadow-[0_4px_24px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_40px_rgba(192,38,211,0.08)]'"
        >
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-outline-variant pb-6">
            <div class="flex items-center gap-4">
              <div 
                class="w-14 h-14 rounded-xl flex items-center justify-center border"
                :class="isDark ? 'bg-[#272a2d] border-[#484740] text-stitch-magenta' : 'bg-fuchsia-50/90 border-fuchsia-200/80 text-fuchsia-700 shadow-sm'"
              >
                <span class="material-symbols-outlined text-3xl">devices</span>
              </div>
              <div>
                <div class="text-xs font-mono uppercase tracking-wider font-semibold" :class="isDark ? 'text-stitch-magenta' : 'text-fuchsia-800'">PILLAR 01 · WEB &amp; SAAS</div>
                <h2 class="text-2xl sm:text-3xl font-headline font-semibold">Web &amp; SaaS Engineering</h2>
              </div>
            </div>
            <span class="text-xs font-mono text-on-surface-variant">SCALABLE ARCHITECTURE</span>
          </div>

          <p class="text-on-surface-variant text-base leading-relaxed">
            Kami merancang platform web enterprise, aplikasi SaaS, dashboard operasional, dan website company profile yang mengedepankan kecepatan buka, tata kelola data bersih, dan maintainability jangka panjang.
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div 
              class="p-6 rounded-xl border space-y-2"
              :class="isDark ? 'bg-[#111417] border-[#2a2d31]' : 'bg-slate-50/90 border-slate-200/80'"
            >
              <div class="flex items-center gap-2.5">
                <span class="material-symbols-outlined text-lg text-stitch-magenta">storefront</span>
                <h3 class="font-semibold text-base">Website UMKM &amp; Bisnis Visioner</h3>
              </div>
              <p class="text-xs text-on-surface-variant leading-relaxed">
                Katalog produk digital, etalase UMKM, dan landing page performa tinggi yang mempermudah konversi pelanggan nyata.
              </p>
            </div>
            <div 
              class="p-6 rounded-xl border space-y-2"
              :class="isDark ? 'bg-[#111417] border-[#2a2d31]' : 'bg-slate-50/90 border-slate-200/80'"
            >
              <div class="flex items-center gap-2.5">
                <span class="material-symbols-outlined text-lg text-stitch-magenta">apartment</span>
                <h3 class="font-semibold text-base">SaaS &amp; Portal Korporat</h3>
              </div>
              <p class="text-xs text-on-surface-variant leading-relaxed">
                Platform cloud terpusat dengan manajemen hak akses aman, API terstruktur, dan arsitektur PWA multi-perangkat.
              </p>
            </div>
          </div>

          <div class="pt-4 border-t border-outline-variant flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-on-surface-variant">
            <div>Stack: <span class="font-medium" :class="isDark ? 'text-stitch-magenta-light' : 'text-fuchsia-800'">Vue 3, React, Next.js, Node.js, Go</span></div>
            <div>Standar: <span class="font-medium">SEO Ready · WCAG 2.1 · Fast LCP</span></div>
          </div>
        </div>

        <!-- Pillar 02: Mobile Applications (iOS & Android) -->
        <div 
          class="p-8 sm:p-12 rounded-2xl border transition-all space-y-8"
          :class="isDark 
            ? 'bg-[#191c1f] border-[#2a2d31] hover:border-stitch-purple/50' 
            : 'bg-white/95 border-slate-200/90 hover:border-violet-300 shadow-[0_4px_24px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_40px_rgba(124,58,237,0.08)]'"
        >
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-outline-variant pb-6">
            <div class="flex items-center gap-4">
              <div 
                class="w-14 h-14 rounded-xl flex items-center justify-center border"
                :class="isDark ? 'bg-[#272a2d] border-[#484740] text-stitch-purple' : 'bg-violet-50/90 border-violet-200/80 text-violet-700 shadow-sm'"
              >
                <span class="material-symbols-outlined text-3xl">phone_iphone</span>
              </div>
              <div>
                <div class="text-xs font-mono uppercase tracking-wider font-semibold" :class="isDark ? 'text-stitch-purple' : 'text-violet-800'">PILLAR 02 · MOBILE SOLUTIONS</div>
                <h2 class="text-2xl sm:text-3xl font-headline font-semibold">Mobile Applications (iOS &amp; Android)</h2>
              </div>
            </div>
            <span class="text-xs font-mono text-on-surface-variant">FLUTTER MULTIPLATFORM</span>
          </div>

          <p class="text-on-surface-variant text-base leading-relaxed">
            Pengembangan aplikasi mobile native-grade dengan Flutter dan React Native. Satu basis kode tangguh untuk Android dan iOS yang memangkas biaya operasional tanpa mengorbankan kelancaran animasi atau responsivitas gestur.
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div 
              class="p-6 rounded-xl border space-y-2"
              :class="isDark ? 'bg-[#111417] border-[#2a2d31]' : 'bg-slate-50/90 border-slate-200/80'"
            >
              <div class="flex items-center gap-2.5">
                <span class="material-symbols-outlined text-lg text-stitch-purple">offline_bolt</span>
                <h3 class="font-semibold text-base">Offline-First Engine</h3>
              </div>
              <p class="text-xs text-on-surface-variant leading-relaxed">
                Aplikasi tetap bekerja lancar walau tanpa koneksi internet, dengan sinkronisasi latar belakang saat jaringan kembali online.
              </p>
            </div>
            <div 
              class="p-6 rounded-xl border space-y-2"
              :class="isDark ? 'bg-[#111417] border-[#2a2d31]' : 'bg-slate-50/90 border-slate-200/80'"
            >
              <div class="flex items-center gap-2.5">
                <span class="material-symbols-outlined text-lg text-stitch-purple">touch_app</span>
                <h3 class="font-semibold text-base">Animasi &amp; Gesture Halus</h3>
              </div>
              <p class="text-xs text-on-surface-variant leading-relaxed">
                60-120 FPS frame rate dengan interaksi mikro responsif yang memberikan rasa aplikasi kelas dunia.
              </p>
            </div>
          </div>

          <div class="pt-4 border-t border-outline-variant flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-on-surface-variant">
            <div>Stack: <span class="font-medium" :class="isDark ? 'text-stitch-purple-light' : 'text-violet-800'">Flutter, Dart, React Native, REST / GraphQL</span></div>
            <div>Target: <span class="font-medium">Google Play Store &amp; Apple App Store</span></div>
          </div>
        </div>

        <!-- Pillar 03: Design Systems & Digital Branding -->
        <div 
          class="p-8 sm:p-12 rounded-2xl border transition-all space-y-8"
          :class="isDark 
            ? 'bg-[#191c1f] border-[#2a2d31] hover:border-stitch-cyan/50' 
            : 'bg-white/95 border-slate-200/90 hover:border-sky-300 shadow-[0_4px_24px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_40px_rgba(2,132,199,0.08)]'"
        >
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-outline-variant pb-6">
            <div class="flex items-center gap-4">
              <div 
                class="w-14 h-14 rounded-xl flex items-center justify-center border"
                :class="isDark ? 'bg-[#272a2d] border-[#484740] text-stitch-cyan' : 'bg-sky-50/90 border-sky-200/80 text-sky-700 shadow-sm'"
              >
                <span class="material-symbols-outlined text-3xl">auto_fix_high</span>
              </div>
              <div>
                <div class="text-xs font-mono uppercase tracking-wider font-semibold" :class="isDark ? 'text-stitch-cyan' : 'text-sky-800'">PILLAR 03 · BRAND &amp; IDENTITY</div>
                <h2 class="text-2xl sm:text-3xl font-headline font-semibold">Design Systems &amp; Digital Branding</h2>
              </div>
            </div>
            <span class="text-xs font-mono text-on-surface-variant">ATELIER CRAFT</span>
          </div>

          <p class="text-on-surface-variant text-base leading-relaxed">
            Perancangan identitas digital menyeluruh: logo, design tokens, typography rules, panduan warna, dan komponen UI yang konsisten agar brand Anda tampil memiliki diferensiasi kuat dari kompetitor biasa.
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div 
              class="p-6 rounded-xl border space-y-2"
              :class="isDark ? 'bg-[#111417] border-[#2a2d31]' : 'bg-slate-50/90 border-slate-200/80'"
            >
              <div class="flex items-center gap-2.5">
                <span class="material-symbols-outlined text-lg text-stitch-cyan">badge</span>
                <h3 class="font-semibold text-base">Identitas Brand Custom</h3>
              </div>
              <p class="text-xs text-on-surface-variant leading-relaxed">
                Karakter visual yang autentik dan bebas dari kesan template murahan, disesuaikan dengan nilai unik usaha Anda.
              </p>
            </div>
            <div 
              class="p-6 rounded-xl border space-y-2"
              :class="isDark ? 'bg-[#111417] border-[#2a2d31]' : 'bg-slate-50/90 border-slate-200/80'"
            >
              <div class="flex items-center gap-2.5">
                <span class="material-symbols-outlined text-lg text-stitch-cyan">palette</span>
                <h3 class="font-semibold text-base">Design Token Libraries</h3>
              </div>
              <p class="text-xs text-on-surface-variant leading-relaxed">
                Dokumentasi token desain yang siap diimplementasikan langsung oleh developer tanpa deviasi piksel.
              </p>
            </div>
          </div>

          <div class="pt-4 border-t border-outline-variant flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-on-surface-variant">
            <div>Fokus: <span class="font-medium" :class="isDark ? 'text-stitch-cyan' : 'text-sky-800'">Figma, Tokens Studio, Typography, Micro-animations</span></div>
            <div>Output: <span class="font-medium">Production-ready UI Kits &amp; Brand Guidelines</span></div>
          </div>
        </div>

        <!-- Pillar 04: Cloud & Integrasi AI -->
        <div 
          class="p-8 sm:p-12 rounded-2xl border transition-all space-y-8"
          :class="isDark 
            ? 'bg-[#191c1f] border-[#2a2d31] hover:border-stitch-amber/50' 
            : 'bg-white/95 border-slate-200/90 hover:border-amber-300 shadow-[0_4px_24px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_40px_rgba(217,119,6,0.08)]'"
        >
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-outline-variant pb-6">
            <div class="flex items-center gap-4">
              <div 
                class="w-14 h-14 rounded-xl flex items-center justify-center border"
                :class="isDark ? 'bg-[#272a2d] border-[#484740] text-stitch-amber' : 'bg-amber-50/90 border-amber-200/80 text-amber-700 shadow-sm'"
              >
                <span class="material-symbols-outlined text-3xl">cloud_sync</span>
              </div>
              <div>
                <div class="text-xs font-mono uppercase tracking-wider font-semibold" :class="isDark ? 'text-stitch-amber' : 'text-amber-800'">PILLAR 04 · CLOUD &amp; AI</div>
                <h2 class="text-2xl sm:text-3xl font-headline font-semibold">Cloud Infrastructure &amp; Integrasi AI</h2>
              </div>
            </div>
            <span class="text-xs font-mono text-on-surface-variant">INFRASTRUCTURE &amp; ML</span>
          </div>

          <p class="text-on-surface-variant text-base leading-relaxed">
            Deployment arsitektur modern berbiaya efisien, setup CI/CD pipeline otomatis, dan integrasi kecerdasan buatan (LLM / Computer Vision) untuk meningkatkan fungsionalitas produk bisnis Anda.
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div 
              class="p-6 rounded-xl border space-y-2"
              :class="isDark ? 'bg-[#111417] border-[#2a2d31]' : 'bg-slate-50/90 border-slate-200/80'"
            >
              <div class="flex items-center gap-2.5">
                <span class="material-symbols-outlined text-lg text-stitch-amber">psychology</span>
                <h3 class="font-semibold text-base">Otomatisasi &amp; AI Fungsional</h3>
              </div>
              <p class="text-xs text-on-surface-variant leading-relaxed">
                Chatbot cerdas internal, pemrosesan dokumen otomatis, dan fitur cerdas berbasis model AI terpercaya.
              </p>
            </div>
            <div 
              class="p-6 rounded-xl border space-y-2"
              :class="isDark ? 'bg-[#111417] border-[#2a2d31]' : 'bg-slate-50/90 border-slate-200/80'"
            >
              <div class="flex items-center gap-2.5">
                <span class="material-symbols-outlined text-lg text-stitch-amber">deployed_code</span>
                <h3 class="font-semibold text-base">Arsitektur Cloud Tangguh</h3>
              </div>
              <p class="text-xs text-on-surface-variant leading-relaxed">
                Infrastruktur Docker, serverless edge routing, dan monitoring uptime 24/7 dengan SLA 99.9%.
              </p>
            </div>
          </div>

          <div class="pt-4 border-t border-outline-variant flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-on-surface-variant">
            <div>Infra: <span class="font-medium" :class="isDark ? 'text-stitch-amber' : 'text-amber-800'">Docker, AWS, Cloudflare, Supabase, PostgreSQL</span></div>
            <div>AI Tooling: <span class="font-medium">OpenAI API, Anthropic Claude, LangChain</span></div>
          </div>
        </div>

      </div>

      <!-- Bottom Consultation CTA -->
      <div 
        class="p-8 sm:p-12 rounded-2xl border text-center space-y-6 relative overflow-hidden"
        :class="isDark ? 'bg-[#191c1f] border-[#2a2d31]' : 'bg-gradient-to-b from-white via-slate-50/90 to-purple-50/30 border-slate-200/90 shadow-[0_10px_30px_rgba(15,23,42,0.04)]'"
      >
        <div class="relative z-10 space-y-6">
          <span class="text-xs font-mono uppercase tracking-widest text-stitch-magenta font-semibold">Langkah Selanjutnya</span>
          <h2 class="text-3xl sm:text-4xl font-headline font-semibold">Siap Mendiskusikan Proyek Digital Anda?</h2>
          <p class="text-on-surface-variant max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Konsultasikan ide website, aplikasi mobile, atau kebutuhan sistem custom Anda bersama tim Nexa Digital Agency. Kami memberikan analisis arsitektur awal secara gratis.
          </p>
          <div class="pt-2">
            <router-link 
              to="/kontak" 
              class="btn-stitch-primary px-8 py-3.5 text-xs font-bold uppercase tracking-wider"
            >
              <span>Mulai Konsultasi</span>
              <span class="material-symbols-outlined text-base">arrow_forward</span>
            </router-link>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { isDark } from '../utils/theme'
</script>
