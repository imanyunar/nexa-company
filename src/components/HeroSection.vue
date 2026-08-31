<template>
  <section class="relative min-h-[85vh] flex items-center pt-8 pb-20 overflow-hidden bg-paper">
    <!-- Signature Diagonal Guide Line (SVG Drawn via Anime.js) -->
    <div class="absolute inset-0 pointer-events-none z-0">
      <svg 
        class="w-full h-full" 
        viewBox="0 0 1440 900" 
        fill="none" 
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="nexaHeroGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#17C3F2" stop-opacity="0.9" />
            <stop offset="35%" stop-color="#3A4CE0" stop-opacity="0.8" />
            <stop offset="70%" stop-color="#8A2BE2" stop-opacity="0.8" />
            <stop offset="100%" stop-color="#E620C5" stop-opacity="0.9" />
          </linearGradient>
          <linearGradient id="nexaArrowHeadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#8A2BE2" />
            <stop offset="100%" stop-color="#E620C5" />
          </linearGradient>
        </defs>

        <!-- Primary Diagonal Signature Line -->
        <path 
          ref="heroLine"
          d="M -100 850 L 520 480 L 1150 160 L 1500 -20" 
          stroke="url(#nexaHeroGrad)" 
          stroke-width="2.5" 
          stroke-linecap="round"
          class="opacity-90"
        />

        <!-- Secondary subtle parallel trajectory -->
        <path 
          d="M 100 920 L 720 550 L 1350 230" 
          stroke="rgba(58, 76, 224, 0.08)" 
          stroke-width="1" 
          stroke-dasharray="4 8"
        />
      </svg>
    </div>

    <div class="max-w-7xl mx-auto px-6 relative z-10 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        <!-- Left Content: Exact 3-line Headline -->
        <div class="lg:col-span-7 space-y-8">
          
          <!-- Badge status/clean indicator -->
          <div class="inline-flex items-center gap-2.5 px-3 py-1.5 bg-surface border border-muted-border rounded-[2px] text-xs font-mono text-ink">
            <span class="w-2 h-2 rounded-full bg-cyan animate-pulse"></span>
            <span>NEXA DIGITAL STUDIO — 2026</span>
          </div>

          <!-- Strict 3-line headline according to design.md -->
          <h1 class="text-4xl sm:text-5xl lg:text-[4rem] font-display font-extrabold text-ink leading-[1.06] tracking-tight">
            Kami bangun web,<br />
            baca data,<br />
            dan rancang game.
          </h1>

          <!-- 1 explanatory sentence -->
          <p class="text-lg text-muted max-w-xl leading-relaxed font-normal">
            Nexa adalah studio teknologi yang membantu bisnis memperkuat kehadiran digital dan mengambil keputusan berbasis data nyata melalui sistem web modern, analisis presisi, dan pengalaman interaktif.
          </p>

          <!-- CTAs -->
          <div class="flex flex-wrap items-center gap-4 pt-2">
            <a 
              href="#kontak" 
              class="bg-blue hover:bg-blue-hover text-white text-base font-semibold px-7 py-3.5 rounded-[3px] transition-all hover:translate-y-[-1px] active:translate-y-[0px]"
            >
              Mulai proyek
            </a>
            <a 
              href="#portofolio" 
              class="bg-surface hover:bg-white text-ink text-base font-semibold px-7 py-3.5 rounded-[3px] border border-muted-border hover:border-ink/20 transition-all hover:translate-y-[-1px]"
            >
              Lihat portofolio
            </a>
          </div>

          <!-- Quick Metrics Bar in IBM Plex Mono -->
          <div class="pt-8 border-t border-muted-border grid grid-cols-3 gap-6 max-w-lg">
            <div>
              <div class="font-mono text-2xl font-bold text-ink">45+</div>
              <div class="text-xs text-muted mt-0.5">Proyek Selesai</div>
            </div>
            <div>
              <div class="font-mono text-2xl font-bold text-ink">99.8%</div>
              <div class="text-xs text-muted mt-0.5">SLA Uptime</div>
            </div>
            <div>
              <div class="font-mono text-2xl font-bold text-ink">&lt;0.8s</div>
              <div class="text-xs text-muted mt-0.5">Rata-rata Load Speed</div>
            </div>
          </div>
        </div>

        <!-- Right Visual: Clean Technical Logomark Display with Interactive Code Inspection -->
        <div class="lg:col-span-5 flex justify-center lg:justify-end">
          <div class="w-full max-w-md bg-surface border border-muted-border rounded-[4px] p-6 space-y-5 relative">
            <!-- Window header -->
            <div class="flex items-center justify-between border-b border-muted-border pb-3">
              <div class="flex items-center gap-1.5">
                <span class="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-slate-300"></span>
              </div>
              <span class="font-mono text-[11px] text-muted">nexa-core-engine.v3</span>
            </div>

            <!-- Central Logo Focus -->
            <div class="relative py-8 px-4 flex items-center justify-center bg-paper/60 rounded-[2px] overflow-hidden border border-muted-border/60">
              <img 
                src="/assets/logo.png" 
                alt="Nexa Identity" 
                class="w-44 h-44 object-contain filter drop-shadow-sm transition-transform hover:scale-105 duration-300"
              />
            </div>

            <!-- Live Technical Specification Box -->
            <div class="space-y-2 font-mono text-xs">
              <div class="flex justify-between py-1 border-b border-muted-border/40">
                <span class="text-muted">Domain</span>
                <span class="text-ink font-semibold">Web · Data · Engine</span>
              </div>
              <div class="flex justify-between py-1 border-b border-muted-border/40">
                <span class="text-muted">Primary Stack</span>
                <span class="text-ink font-semibold">Vue 3, Laravel, Unity</span>
              </div>
              <div class="flex justify-between py-1">
                <span class="text-muted">Delivery Cycle</span>
                <span class="text-blue font-semibold">Rapid & Agile</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import anime from 'animejs'

const heroLine = ref(null)

onMounted(() => {
  // Check user prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (!prefersReducedMotion && heroLine.value) {
    // Calculate total stroke length
    const pathLength = heroLine.value.getTotalLength ? heroLine.value.getTotalLength() : 2000
    heroLine.value.style.strokeDasharray = pathLength
    heroLine.value.style.strokeDashoffset = pathLength

    // Single intentional stroke drawing animation on load via Anime.js
    anime({
      targets: heroLine.value,
      strokeDashoffset: [pathLength, 0],
      easing: 'easeInOutQuad',
      duration: 1600,
      delay: 200,
      complete: () => {
        // Animation finished once, stops cleanly
      }
    })
  }
})
</script>
