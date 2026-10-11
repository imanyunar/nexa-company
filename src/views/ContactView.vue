<template>
  <div class="py-16 sm:py-24 transition-colors duration-300 min-h-[85vh]">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 space-y-14">

      <!-- Header -->
      <div class="text-center max-w-2xl mx-auto space-y-4">
        <div 
          class="inline-flex items-center px-4 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider font-mono shadow-sm"
          :class="isDark ? 'border-[#C239D8]/40 bg-[#191c1f] text-stitch-magenta-light' : 'border-fuchsia-200/90 bg-white/95 text-slate-800 shadow-[0_2px_12px_rgba(192,38,211,0.08)]'"
        >
          <span>Inisiasi Kemitraan Studio</span>
        </div>

        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-headline font-semibold tracking-tight">
          Hubungi Nexa Digital Agency
        </h1>
        <p class="text-on-surface-variant text-base sm:text-lg leading-relaxed">
          Diskusikan ide website, aplikasi mobile, sistem kas &amp; inventaris, atau integrasi AI bersama kami. Karena brand Anda layak mendapatkan lebih dari sekadar standar.
        </p>
      </div>

      <!-- Direct Contact Channels -->
      <div class="space-y-5">
        <div class="flex items-center justify-between pb-2 border-b border-outline-variant">
          <span class="text-xs uppercase font-mono tracking-wider font-semibold text-stitch-magenta">Saluran Langsung</span>
          <span class="text-xs text-on-surface-variant font-mono">Klik untuk terhubung instan</span>
        </div>

        <!-- Channel Cards Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          <!-- WhatsApp -->
          <a 
            href="https://wa.me/62895800286901?text=Halo%20Nexa%20Digital%20Agency,%20saya%20ingin%20konsultasi%20mengenai%20proyek%20digital." 
            target="_blank" 
            rel="noopener noreferrer" 
            class="p-5 rounded-xl border flex flex-col gap-4 group transition-all"
            :class="isDark 
              ? 'bg-[#191c1f] border-[#2a2d31] hover:border-emerald-500/60' 
              : 'bg-white/95 border-slate-200/90 hover:border-emerald-500/60 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_32px_rgba(16,185,129,0.08)]'"
            title="Buka WhatsApp Langsung"
          >
            <div class="flex items-center justify-between">
              <div 
                class="w-11 h-11 rounded-lg border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                :class="isDark ? 'bg-emerald-500/10 border-emerald-500/25 text-emerald-400' : 'bg-emerald-50 border-emerald-200 text-emerald-700'"
              >
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.301-.15-1.781-.879-2.057-.98-.277-.101-.478-.15-.679.15-.2.301-.778.98-.954 1.18-.176.2-.352.226-.653.076-.301-.15-1.272-.469-2.424-1.496-.896-.799-1.501-1.787-1.677-2.088-.176-.301-.019-.464.132-.614.136-.135.301-.352.452-.528.151-.176.201-.301.301-.502.1-.2.05-.376-.025-.527-.075-.15-.679-1.637-.93-2.242-.244-.589-.493-.509-.679-.519l-.578-.01c-.2 0-.527.075-.803.376s-1.054 1.03-1.054 2.511 1.079 2.912 1.23 3.113c.15.201 2.124 3.244 5.146 4.55.719.311 1.28.497 1.718.636.722.23 1.378.197 1.898.12.579-.087 1.781-.728 2.032-1.431.251-.703.251-1.305.176-1.431-.076-.126-.276-.201-.577-.352zm-5.467 7.618a9.92 9.92 0 0 1-5.064-1.385l-.363-.215-3.766.988 1.005-3.67-.236-.375a9.932 9.932 0 0 1-1.523-5.289c0-5.485 4.463-9.948 9.952-9.948 2.658 0 5.158 1.036 7.034 2.914a9.89 9.89 0 0 1 2.912 7.034c0 5.487-4.464 9.949-9.95 9.949zm8.441-18.39A11.905 11.905 0 0 0 12.005 0C5.385 0 0 5.385 0 12.005c0 2.113.552 4.177 1.6 6.002L0 24l6.165-1.617a11.97 11.97 0 0 0 5.84 1.513h.005c6.619 0 12.005-5.385 12.005-12.005 0-3.208-1.25-6.224-3.52-8.496z"/>
                </svg>
              </div>
            </div>
            <div>
              <div class="text-sm font-semibold group-hover:text-emerald-500 transition-colors">WhatsApp Official</div>
              <div class="text-xs text-on-surface-variant mt-1 font-mono">+62 895 8002 86901</div>
            </div>
            <div 
              class="mt-auto pt-3 border-t border-outline-variant/50 flex items-center justify-between text-xs font-mono"
              :class="isDark ? 'text-emerald-400' : 'text-emerald-700 font-bold'"
            >
              <span>Buka Chat</span>
              <span class="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </div>
          </a>

          <!-- Email -->
          <a 
            href="mailto:nexadigitalagency40@gmail.com?subject=Konsultasi%20Proyek%20-%20Nexa%20Digital%20Agency" 
            class="p-5 rounded-xl border flex flex-col gap-4 group transition-all"
            :class="isDark 
              ? 'bg-[#191c1f] border-[#2a2d31] hover:border-stitch-purple/60' 
              : 'bg-white/95 border-slate-200/90 hover:border-violet-500/60 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_32px_rgba(124,58,237,0.08)]'"
            title="Kirim Email Langsung"
          >
            <div class="flex items-center justify-between">
              <div 
                class="w-11 h-11 rounded-lg border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                :class="isDark ? 'bg-stitch-purple/10 border-stitch-purple/30 text-stitch-purple' : 'bg-violet-50 border-violet-200 text-violet-700'"
              >
                <span class="material-symbols-outlined text-xl">mail</span>
              </div>
            </div>
            <div>
              <div class="text-sm font-semibold group-hover:text-violet-600 transition-colors">Email Studio</div>
              <div class="text-xs text-on-surface-variant mt-1 font-mono truncate">nexadigitalagency40@gmail.com</div>
            </div>
            <div 
              class="mt-auto pt-3 border-t border-outline-variant/50 flex items-center justify-between text-xs font-mono"
              :class="isDark ? 'text-stitch-purple' : 'text-violet-700 font-bold'"
            >
              <span>Kirim Email</span>
              <span class="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </div>
          </a>

          <!-- Instagram -->
          <a 
            href="https://www.instagram.com/nexalife.id/" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="p-5 rounded-xl border flex flex-col gap-4 group transition-all"
            :class="isDark 
              ? 'bg-[#191c1f] border-[#2a2d31] hover:border-stitch-magenta/60' 
              : 'bg-white border-slate-200 hover:border-fuchsia-500/60 shadow-sm'"
            title="Buka Instagram Resmi"
          >
            <div class="flex items-center justify-between">
              <div 
                class="w-11 h-11 rounded-lg border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                :class="isDark ? 'bg-stitch-magenta/10 border-stitch-magenta/30 text-stitch-magenta' : 'bg-fuchsia-50 border-fuchsia-200 text-fuchsia-700'"
              >
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.441-1.44z"/>
                </svg>
              </div>
            </div>
            <div>
              <div class="text-sm font-semibold group-hover:text-fuchsia-600 transition-colors">Instagram Official</div>
              <div class="text-xs text-on-surface-variant mt-1 font-mono">@nexalife.id</div>
            </div>
            <div 
              class="mt-auto pt-3 border-t border-outline-variant/50 flex items-center justify-between text-xs font-mono"
              :class="isDark ? 'text-stitch-magenta' : 'text-fuchsia-700 font-bold'"
            >
              <span>Kunjungi Profil</span>
              <span class="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </div>
          </a>

          <!-- TikTok -->
          <a 
            href="https://www.tiktok.com/@nexalife.id" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="p-5 rounded-xl border flex flex-col gap-4 group transition-all"
            :class="isDark 
              ? 'bg-[#191c1f] border-[#2a2d31] hover:border-stitch-cyan/60' 
              : 'bg-white border-slate-200 hover:border-sky-500/60 shadow-sm'"
            title="Buka TikTok Resmi"
          >
            <div class="flex items-center justify-between">
              <div 
                class="w-11 h-11 rounded-lg border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                :class="isDark ? 'bg-stitch-cyan/10 border-stitch-cyan/30 text-stitch-cyan' : 'bg-sky-50 border-sky-200 text-sky-700'"
              >
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </div>
            </div>
            <div>
              <div class="text-sm font-semibold group-hover:text-sky-600 transition-colors">TikTok Official</div>
              <div class="text-xs text-on-surface-variant mt-1 font-mono">@nexalife.id</div>
            </div>
            <div 
              class="mt-auto pt-3 border-t border-outline-variant/50 flex items-center justify-between text-xs font-mono"
              :class="isDark ? 'text-stitch-cyan' : 'text-sky-700 font-bold'"
            >
              <span>Buka TikTok</span>
              <span class="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </div>
          </a>

          <!-- Telepon -->
          <a 
            href="tel:+62895800286901" 
            class="p-5 rounded-xl border flex flex-col gap-4 group transition-all"
            :class="isDark 
              ? 'bg-[#191c1f] border-[#2a2d31] hover:border-stitch-amber/60' 
              : 'bg-white border-slate-200 hover:border-amber-500/60 shadow-sm'"
            title="Telepon Langsung"
          >
            <div class="flex items-center justify-between">
              <div 
                class="w-11 h-11 rounded-lg border flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                :class="isDark ? 'bg-stitch-amber/10 border-stitch-amber/30 text-stitch-amber' : 'bg-amber-50 border-amber-200 text-amber-700'"
              >
                <span class="material-symbols-outlined text-xl">call</span>
              </div>
            </div>
            <div>
              <div class="text-sm font-semibold group-hover:text-amber-600 transition-colors">Panggilan Langsung</div>
              <div class="text-xs text-on-surface-variant mt-1 font-mono">+62 895 8002 86901</div>
            </div>
            <div 
              class="mt-auto pt-3 border-t border-outline-variant/50 flex items-center justify-between text-xs font-mono"
              :class="isDark ? 'text-stitch-amber' : 'text-amber-700 font-bold'"
            >
              <span>Panggil Sekarang</span>
              <span class="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </div>
          </a>

        </div>
      </div>

      <!-- Quick Message / Consultation Form -->
      <div 
        class="p-8 sm:p-12 rounded-2xl border space-y-8 transition-all"
        :class="isDark ? 'bg-[#191c1f] border-[#2a2d31]' : 'bg-white border-slate-200 shadow-sm'"
      >
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-outline-variant pb-5">
          <div>
            <span class="text-xs font-mono uppercase tracking-wider text-stitch-magenta font-semibold">Formulir Kolaborasi</span>
            <h2 class="text-2xl sm:text-3xl font-headline font-semibold mt-1">Kirim Kebutuhan Proyek</h2>
          </div>
          <span class="text-xs font-mono text-on-surface-variant">ESTIMASI KILAT 1x24 JAM</span>
        </div>

        <form @submit.prevent="sendWhatsAppDirect" class="space-y-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="block text-xs font-semibold uppercase tracking-wider font-mono text-on-surface-variant">
                Nama Lengkap / Bisnis *
              </label>
              <input 
                v-model="form.name"
                type="text" 
                required
                placeholder="Contoh: Budi Santoso / Kinetix Corp"
                class="w-full px-4 py-3 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-1 focus:ring-stitch-magenta"
                :class="isDark 
                  ? 'bg-[#111417] border-[#2a2d31] text-white placeholder-[#646a74]' 
                  : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-slate-700'"
              />
            </div>

            <div class="space-y-2">
              <label class="block text-xs font-semibold uppercase tracking-wider font-mono text-on-surface-variant">
                WhatsApp atau Email *
              </label>
              <input 
                v-model="form.contact"
                type="text" 
                required
                placeholder="08123456789 atau email@domain.com"
                class="w-full px-4 py-3 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-1 focus:ring-stitch-magenta"
                :class="isDark 
                  ? 'bg-[#111417] border-[#2a2d31] text-white placeholder-[#646a74]' 
                  : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-slate-700'"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label class="block text-xs font-semibold uppercase tracking-wider font-mono text-on-surface-variant">
                Jenis Solusi yang Dibutuhkan *
              </label>
              <select 
                v-model="form.service"
                class="w-full px-4 py-3 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-1 focus:ring-stitch-magenta"
                :class="isDark 
                  ? 'bg-[#111417] border-[#2a2d31] text-white' 
                  : 'bg-slate-50 border-slate-300 text-slate-900 focus:bg-white focus:border-slate-700'"
              >
                <option value="Website & Company Profile">Website &amp; Company Profile Bisnis</option>
                <option value="Aplikasi Mobile (Flutter / Native)">Aplikasi Mobile (iOS &amp; Android)</option>
                <option value="SaaS & Sistem Kas / Inventaris">SaaS &amp; Sistem Kas / Inventaris</option>
                <option value="Design System & Digital Branding">Design System &amp; Digital Branding</option>
                <option value="Cloud Infrastructure & Integrasi AI">Cloud Infrastructure &amp; Integrasi AI</option>
                <option value="Solusi Kustom Lainnya">Solusi Kustom Lainnya</option>
              </select>
            </div>

            <div class="space-y-2">
              <label class="block text-xs font-semibold uppercase tracking-wider font-mono text-on-surface-variant">
                Estimasi Anggaran Proyek
              </label>
              <select 
                v-model="form.budget"
                class="w-full px-4 py-3 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-1 focus:ring-stitch-magenta"
                :class="isDark 
                  ? 'bg-[#111417] border-[#2a2d31] text-white' 
                  : 'bg-slate-50 border-slate-300 text-slate-900 focus:bg-white focus:border-slate-700'"
              >
                <option value="Fleksibel / Sesuai Rekomendasi">Fleksibel / Sesuai Rekomendasi</option>
                <option value="Di bawah 5 Juta">Di bawah Rp 5.000.000 (Starter)</option>
                <option value="5 Juta - 15 Juta">Rp 5.000.000 - Rp 15.000.000 (Pertumbuhan)</option>
                <option value="Di atas 15 Juta">Di atas Rp 15.000.000 (Skala Penuh)</option>
              </select>
            </div>
          </div>

          <div class="space-y-2">
            <label class="block text-xs font-semibold uppercase tracking-wider font-mono text-on-surface-variant">
              Ringkasan Kebutuhan Proyek *
            </label>
            <textarea 
              v-model="form.message"
              required
              rows="4"
              placeholder="Ceritakan gambaran fitur, target pengguna, atau referensi desain yang Anda harapkan..."
              class="w-full px-4 py-3 rounded-lg border text-sm transition-colors focus:outline-none focus:ring-1 focus:ring-stitch-magenta"
              :class="isDark 
                ? 'bg-[#111417] border-[#2a2d31] text-white placeholder-[#646a74]' 
                : 'bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:bg-white focus:border-slate-700'"
            ></textarea>
          </div>

          <div class="pt-4 flex flex-col sm:flex-row items-center gap-4">
            <button 
              type="submit"
              class="btn-stitch-primary w-full sm:w-auto px-8 py-3.5 text-xs uppercase tracking-wider font-bold shadow-sm group"
            >
              <span>Kirim via WhatsApp</span>
              <span class="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>

            <button 
              type="button"
              @click="sendEmailDirect"
              class="btn-stitch-secondary w-full sm:w-auto px-8 py-3.5 text-xs uppercase tracking-wider font-medium"
            >
              <span class="material-symbols-outlined text-base">mail</span>
              <span>Kirim via Email</span>
            </button>
          </div>
        </form>
      </div>

    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { isDark } from '../utils/theme'

const form = reactive({
  name: '',
  contact: '',
  service: 'Website & Company Profile',
  budget: 'Fleksibel / Sesuai Rekomendasi',
  message: ''
})

function sendWhatsAppDirect() {
  const text = `Halo Nexa Digital Agency!

Nama / Brand: ${form.name}
Kontak: ${form.contact}
Kategori Layanan: ${form.service}
Estimasi Budget: ${form.budget}

Rincian Kebutuhan:
${form.message}

Mohon informasi estimasi jadwal dan arsitekturnya. Terima kasih!`

  const encoded = encodeURIComponent(text)
  window.open(`https://wa.me/62895800286901?text=${encoded}`, '_blank')
}

function sendEmailDirect() {
  const subject = encodeURIComponent(`Inisiasi Proyek ${form.service} - ${form.name}`)
  const body = encodeURIComponent(`Nama: ${form.name}\nKontak: ${form.contact}\nLayanan: ${form.service}\nBudget: ${form.budget}\n\nPesan:\n${form.message}`)
  window.location.href = `mailto:nexadigitalagency40@gmail.com?subject=${subject}&body=${body}`
}
</script>
