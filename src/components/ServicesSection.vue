<template>
  <section id="layanan" class="py-24 bg-paper relative border-t border-muted-border">
    <div class="max-w-7xl mx-auto px-6 space-y-24">
      
      <!-- Section Title (Clean, direct, no eyebrow label) -->
      <div class="max-w-2xl">
        <h2 class="text-3xl sm:text-4xl font-display font-bold text-ink leading-tight">
          Layanan Spesialis Nexa
        </h2>
        <p class="text-muted text-base sm:text-lg mt-3">
          Tiga pilar keahlian teknis terintegrasi untuk membangun solusi digital yang tangguh, terukur, dan berdampak.
        </p>
      </div>

      <!-- SERVICE 1: WEB DEVELOPMENT (Left Text, Right Visual 4° Tilted Browser Frame) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <!-- Text Left (Sharp 2px border radius) -->
        <div class="lg:col-span-6 space-y-6">
          <div class="inline-flex items-center gap-2 text-xs font-mono text-blue bg-blue-soft px-2.5 py-1 rounded-[2px]">
            <span>ENGINEERING</span>
          </div>
          <h3 class="text-2xl sm:text-3xl font-display font-bold text-ink">
            Web Development & Custom Platforms
          </h3>
          <p class="text-muted text-base leading-relaxed">
            Membangun website company profile, landing page berkonversi tinggi, dashboard interaktif, hingga web application berskala besar dengan arsitektur bersih dan kecepatan optimal.
          </p>
          <ul class="space-y-2.5 text-sm text-ink font-medium">
            <li class="flex items-center gap-3">
              <span class="w-1.5 h-1.5 bg-blue rounded-full"></span>
              Single Page Applications (Vue 3, React, Vite)
            </li>
            <li class="flex items-center gap-3">
              <span class="w-1.5 h-1.5 bg-blue rounded-full"></span>
              Robust Backend & REST APIs (Laravel, PHP, MySQL)
            </li>
            <li class="flex items-center gap-3">
              <span class="w-1.5 h-1.5 bg-blue rounded-full"></span>
              Responsif mobile-first, aksesibilitas tinggi, dan optimasi Core Web Vitals
            </li>
          </ul>
          <div class="pt-2">
            <a 
              href="#kontak" 
              class="inline-flex items-center text-sm font-semibold text-blue hover:text-blue-hover border-b border-blue pb-0.5"
            >
              Konsultasi web development
            </a>
          </div>
        </div>

        <!-- Visual Right: Browser Frame Miring 4° -->
        <div class="lg:col-span-6">
          <div class="tilt-card bg-surface border border-muted-border rounded-[2px] p-5 shadow-sm">
            <!-- Browser top bar -->
            <div class="flex items-center justify-between pb-4 border-b border-muted-border mb-4">
              <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-[#FF5F56]"></span>
                <span class="w-3 h-3 rounded-full bg-[#FFBD2E]"></span>
                <span class="w-3 h-3 rounded-full bg-[#27C93F]"></span>
              </div>
              <div class="bg-paper px-4 py-1 rounded-[2px] text-[11px] font-mono text-muted border border-muted-border">
                https://nexa.agency/production-preview
              </div>
              <span class="text-[11px] font-mono text-cyan font-semibold">200 OK</span>
            </div>

            <!-- Code/UI Interactive View -->
            <div class="bg-ink rounded-[2px] p-5 font-mono text-xs text-slate-300 space-y-2 overflow-x-auto">
              <div class="text-muted-light">// Vue 3 + Laravel Reactive Pipeline</div>
              <div>
                <span class="text-magenta font-semibold">import</span> { createApp } <span class="text-magenta font-semibold">from</span> <span class="text-cyan">'vue'</span>
              </div>
              <div>
                <span class="text-magenta font-semibold">const</span> app = createApp({
              </div>
              <div class="pl-4">
                data: () => ({ status: <span class="text-cyan">'ultra-fast'</span>, uptime: <span class="text-cyan">'99.98%'</span> }),
              </div>
              <div class="pl-4">
                performanceScore: <span class="text-[#27C93F] font-bold">100</span>,
              </div>
              <div>})</div>
              <div class="pt-2 text-cyan">
                $ curl -X POST https://api.nexa.agency/v1/deploy
              </div>
              <div class="text-[#27C93F]">
                ✔ Build completed in 420ms (0 errors)
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- SERVICE 2: DATA ANALYSIS (Left Visual Data Chart, Right Text) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8 border-t border-muted-border/60">
        <!-- Visual Left: Real Graphic Data / Line Chart & Metrics -->
        <div class="lg:col-span-6 order-2 lg:order-1">
          <div class="bg-surface border border-muted-border rounded-[2px] p-6 space-y-6">
            <div class="flex items-center justify-between border-b border-muted-border pb-3">
              <div>
                <div class="text-xs font-mono text-muted">DATA PIPELINE INSIGHT</div>
                <div class="text-sm font-bold text-ink font-mono">Conversion Velocity & Retention</div>
              </div>
              <div class="flex items-center gap-2">
                <button 
                  v-for="timeframe in ['7D', '30D', '90D']" 
                  :key="timeframe"
                  @click="activeTimeframe = timeframe"
                  :class="activeTimeframe === timeframe ? 'bg-blue text-white' : 'bg-paper text-muted hover:text-ink'"
                  class="px-2 py-1 text-xs font-mono rounded-[2px] transition-colors"
                >
                  {{ timeframe }}
                </button>
              </div>
            </div>

            <!-- SVG Line Chart with real coordinate nodes -->
            <div class="relative h-44 w-full">
              <svg class="w-full h-full" viewBox="0 0 400 150" fill="none" preserveAspectRatio="none">
                <!-- Grid Lines -->
                <line x1="0" y1="30" x2="400" y2="30" stroke="rgba(11,14,43,0.06)" stroke-dasharray="2 2" />
                <line x1="0" y1="75" x2="400" y2="75" stroke="rgba(11,14,43,0.06)" stroke-dasharray="2 2" />
                <line x1="0" y1="120" x2="400" y2="120" stroke="rgba(11,14,43,0.06)" stroke-dasharray="2 2" />

                <!-- Gradient Fill -->
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="#3A4CE0" stop-opacity="0.25" />
                    <stop offset="100%" stop-color="#3A4CE0" stop-opacity="0.0" />
                  </linearGradient>
                </defs>

                <!-- Area Fill -->
                <path 
                  d="M 0 130 L 40 100 L 90 110 L 150 70 L 220 85 L 290 40 L 350 50 L 400 20 L 400 150 L 0 150 Z" 
                  fill="url(#chartGrad)" 
                />

                <!-- Active Line -->
                <path 
                  d="M 0 130 L 40 100 L 90 110 L 150 70 L 220 85 L 290 40 L 350 50 L 400 20" 
                  stroke="#3A4CE0" 
                  stroke-width="2.5" 
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <!-- Data Nodes -->
                <circle cx="150" cy="70" r="4" fill="#3A4CE0" class="hover:r-6 cursor-pointer" />
                <circle cx="290" cy="40" r="4" fill="#3A4CE0" class="hover:r-6 cursor-pointer" />
                <circle cx="400" cy="20" r="5" fill="#E620C5" />
              </svg>
            </div>

            <!-- Key Insight Numbers in IBM Plex Mono -->
            <div class="grid grid-cols-3 gap-4 pt-3 border-t border-muted-border font-mono">
              <div>
                <div class="text-[11px] text-muted">Akurasi Model</div>
                <div class="text-lg font-bold text-ink">99.4%</div>
              </div>
              <div>
                <div class="text-[11px] text-muted">Data Throughput</div>
                <div class="text-lg font-bold text-ink">1.2M/day</div>
              </div>
              <div>
                <div class="text-[11px] text-muted">Efisiensi Biaya</div>
                <div class="text-lg font-bold text-blue">+38.5%</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Text Right -->
        <div class="lg:col-span-6 order-1 lg:order-2 space-y-6">
          <div class="inline-flex items-center gap-2 text-xs font-mono text-cyan-dark bg-cyan/10 px-2.5 py-1 rounded-[2px]">
            <span>INTELLIGENCE</span>
          </div>
          <h3 class="text-2xl sm:text-3xl font-display font-bold text-ink">
            Data Analysis & Business Intelligence
          </h3>
          <p class="text-muted text-base leading-relaxed">
            Mengolah data mentah menjadi wawasan bisnis yang tajam. Kami membangun dashboard interaktif, otomasi pipeline data, dan analisis prediktif untuk memandu keputusan strategis.
          </p>
          <ul class="space-y-2.5 text-sm text-ink font-medium">
            <li class="flex items-center gap-3">
              <span class="w-1.5 h-1.5 bg-cyan rounded-full"></span>
              Pembersihan, pemodelan, dan visualisasi data bisnis
            </li>
            <li class="flex items-center gap-3">
              <span class="w-1.5 h-1.5 bg-cyan rounded-full"></span>
              Pembuatan dashboard kustom (PowerBI, Tableau, Python, SQL)
            </li>
            <li class="flex items-center gap-3">
              <span class="w-1.5 h-1.5 bg-cyan rounded-full"></span>
              Analisis kohort, retensi pengguna, dan proyeksi finansial terukur
            </li>
          </ul>
          <div class="pt-2">
            <a 
              href="#kontak" 
              class="inline-flex items-center text-sm font-semibold text-blue hover:text-blue-hover border-b border-blue pb-0.5"
            >
              Konsultasi analisis data
            </a>
          </div>
        </div>
      </div>

      <!-- SERVICE 3: GAME DEVELOPMENT (Left Text, Right Interactive Game/Sprite Preview, Softer 8px Radius) -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8 border-t border-muted-border/60">
        <!-- Text Left -->
        <div class="lg:col-span-6 space-y-6">
          <div class="inline-flex items-center gap-2 text-xs font-mono text-magenta bg-magenta-soft px-2.5 py-1 rounded-[2px]">
            <span>IMMERSIVE</span>
          </div>
          <h3 class="text-2xl sm:text-3xl font-display font-bold text-ink">
            Game Development & Interactive Media
          </h3>
          <p class="text-muted text-base leading-relaxed">
            Merancang game 2D/3D untuk kebutuhan hiburan komersial, gamifikasi promosi brand, serta simulasi edukasi interaktif menggunakan engine modern Unity dan WebGL/WebGPU.
          </p>
          <ul class="space-y-2.5 text-sm text-ink font-medium">
            <li class="flex items-center gap-3">
              <span class="w-1.5 h-1.5 bg-magenta rounded-full"></span>
              Pengembangan game multiplatform (PC, Mobile, WebGL)
            </li>
            <li class="flex items-center gap-3">
              <span class="w-1.5 h-1.5 bg-magenta rounded-full"></span>
              Gamifikasi campaign marketing & interactive brand experience
            </li>
            <li class="flex items-center gap-3">
              <span class="w-1.5 h-1.5 bg-magenta rounded-full"></span>
              Mekanik gameplay presisi, optimasi frame rate 60 FPS
            </li>
          </ul>
          <div class="pt-2">
            <a 
              href="#kontak" 
              class="inline-flex items-center text-sm font-semibold text-blue hover:text-blue-hover border-b border-blue pb-0.5"
            >
              Konsultasi game development
            </a>
          </div>
        </div>

        <!-- Visual Right: Softer 8px Border Radius for Game Character -->
        <div class="lg:col-span-6">
          <div class="bg-ink text-white rounded-lg p-6 border border-muted-borderDark space-y-5 relative overflow-hidden">
            <!-- Game HUD -->
            <div class="flex items-center justify-between border-b border-white/10 pb-3">
              <div class="flex items-center gap-3 font-mono text-xs">
                <span class="text-magenta font-bold">NEXA_ENGINE</span>
                <span class="text-slate-400">FPS: 60</span>
              </div>
              <div class="font-mono text-xs text-cyan">SCORE: {{ gameScore }}</div>
            </div>

            <!-- Mini Interactive Game Canvas -->
            <div 
              @click="handleCanvasClick"
              class="h-48 bg-slate-950 rounded-md border border-white/10 relative flex items-center justify-center cursor-crosshair overflow-hidden group select-none"
            >
              <!-- Target Sprite -->
              <div 
                class="absolute transition-all duration-200 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
                :style="{ left: spriteX + '%', top: spriteY + '%' }"
              >
                <div class="w-10 h-10 bg-gradient-to-tr from-cyan via-blue to-magenta rounded-md flex items-center justify-center text-white shadow-lg animate-bounce">
                  ⚡
                </div>
                <span class="text-[10px] font-mono text-slate-300 mt-1">Player 1</span>
              </div>

              <!-- Click trigger hint -->
              <div class="absolute bottom-3 text-[11px] font-mono text-slate-400 bg-black/60 px-3 py-1 rounded">
                Klik canvas untuk mengarahkan player
              </div>
            </div>

            <!-- Engine Specs in IBM Plex Mono -->
            <div class="flex items-center justify-between text-xs font-mono text-slate-400 pt-1">
              <span>Engine: Unity / WebGL</span>
              <span>Renderer: Universal Render Pipeline</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const activeTimeframe = ref('30D')
const gameScore = ref(1280)
const spriteX = ref(50)
const spriteY = ref(50)

function handleCanvasClick(event) {
  const rect = event.currentTarget.getBoundingClientRect()
  const clickX = ((event.clientX - rect.left) / rect.width) * 100
  const clickY = ((event.clientY - rect.top) / rect.height) * 100
  
  spriteX.value = Math.max(10, Math.min(90, Math.round(clickX)))
  spriteY.value = Math.max(15, Math.min(85, Math.round(clickY)))
  gameScore.value += 100
}
</script>
