<template>
  <div class="bg-black text-white py-16 sm:py-24 border-b border-[rgba(241,241,239,0.12)] min-h-[80vh]">
    <div class="max-w-5xl mx-auto px-4 sm:px-6 space-y-14">

      <!-- Header -->
      <div class="contact-header text-center max-w-2xl mx-auto space-y-4">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-display font-medium text-white tracking-[-1.9px]">
          Hubungi Kami
        </h1>
        <p class="text-[#999999] text-base sm:text-lg leading-relaxed">
          Pilih saluran di bawah ini untuk terhubung langsung, atau kirimkan ringkasan kebutuhan proyek Anda.
        </p>
      </div>

      <!-- Direct Contact Channels -->
      <div class="space-y-5">
        <div class="flex items-center justify-between pb-2 border-b border-[rgba(241,241,239,0.1)]">
          <span class="text-xs font-mono text-primary uppercase font-medium tracking-wider">SALURAN LANGSUNG</span>
          <span class="text-xs font-mono text-[#666666]">KLIK UNTUK TERHUBUNG</span>
        </div>

        <!-- Channel Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

          <!-- WhatsApp -->
          <a 
            href="https://wa.me/62895800286901?text=Halo%20Nexa%20Digital%20Agency,%20saya%20ingin%20konsultasi%20mengenai%20proyek%20digital." 
            target="_blank" 
            rel="noopener noreferrer" 
            class="contact-card card-dark p-5 flex flex-col gap-4 group hover:border-emerald-500/60"
            title="Buka WhatsApp Langsung"
          >
            <div class="flex items-center justify-between">
              <div class="w-11 h-11 rounded-[4px] bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.301-.15-1.781-.879-2.057-.98-.277-.101-.478-.15-.679.15-.2.301-.778.98-.954 1.18-.176.2-.352.226-.653.076-.301-.15-1.272-.469-2.424-1.496-.896-.799-1.501-1.787-1.677-2.088-.176-.301-.019-.464.132-.614.136-.135.301-.352.452-.528.151-.176.201-.301.301-.502.1-.2.05-.376-.025-.527-.075-.15-.679-1.637-.93-2.242-.244-.589-.493-.509-.679-.519l-.578-.01c-.2 0-.527.075-.803.376s-1.054 1.03-1.054 2.511 1.079 2.912 1.23 3.113c.15.201 2.124 3.244 5.146 4.55.719.311 1.28.497 1.718.636.722.23 1.378.197 1.898.12.579-.087 1.781-.728 2.032-1.431.251-.703.251-1.305.176-1.431-.076-.126-.276-.201-.577-.352zm-5.467 7.618a9.92 9.92 0 0 1-5.064-1.385l-.363-.215-3.766.988 1.005-3.67-.236-.375a9.932 9.932 0 0 1-1.523-5.289c0-5.485 4.463-9.948 9.952-9.948 2.658 0 5.158 1.036 7.034 2.914a9.89 9.89 0 0 1 2.912 7.034c0 5.487-4.464 9.949-9.95 9.949zm8.441-18.39A11.905 11.905 0 0 0 12.005 0C5.385 0 0 5.385 0 12.005c0 2.113.552 4.177 1.6 6.002L0 24l6.165-1.617a11.97 11.97 0 0 0 5.84 1.513h.005c6.619 0 12.005-5.385 12.005-12.005 0-3.208-1.25-6.224-3.52-8.496z"/>
                </svg>
              </div>
              <span class="text-[9px] font-mono font-semibold px-2 py-0.5 rounded-[2px] bg-emerald-500/15 text-emerald-400">FAST RESPONSE</span>
            </div>
            <div>
              <div class="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors duration-300">WhatsApp Official</div>
              <div class="text-xs font-mono text-[#999999] mt-1">+62 895 8002 86901</div>
            </div>
            <div class="mt-auto pt-3 border-t border-[rgba(241,241,239,0.08)] flex items-center justify-between text-xs font-mono text-emerald-400">
              <span>Buka Chat</span>
              <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform duration-300">arrow_forward</span>
            </div>
          </a>

          <!-- Phone -->
          <a 
            href="tel:+62895800286901" 
            class="contact-card card-dark p-5 flex flex-col gap-4 group hover:border-primary/60"
            title="Telepon Langsung"
          >
            <div class="flex items-center justify-between">
              <div class="w-11 h-11 rounded-[4px] bg-[rgba(0,65,240,0.15)] border border-[rgba(0,65,240,0.3)] text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <span class="material-symbols-outlined text-xl">call</span>
              </div>
              <span class="text-[9px] font-mono font-semibold px-2 py-0.5 rounded-[2px] bg-[rgba(0,65,240,0.15)] text-primary">DIRECT CALL</span>
            </div>
            <div>
              <div class="text-sm font-semibold text-white group-hover:text-primary transition-colors duration-300">Panggilan Langsung</div>
              <div class="text-xs font-mono text-[#999999] mt-1">+62 895 8002 86901</div>
            </div>
            <div class="mt-auto pt-3 border-t border-[rgba(241,241,239,0.08)] flex items-center justify-between text-xs font-mono text-primary">
              <span>Panggil Sekarang</span>
              <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform duration-300">arrow_forward</span>
            </div>
          </a>

          <!-- Email -->
          <a 
            href="mailto:nexadigitalagency40@gmail.com?subject=Konsultasi%20Proyek%20—%20Nexa%20Digital%20Agency" 
            class="contact-card card-dark p-5 flex flex-col gap-4 group hover:border-primary/60"
            title="Kirim Email Langsung"
          >
            <div class="flex items-center justify-between">
              <div class="w-11 h-11 rounded-[4px] bg-[rgba(0,65,240,0.15)] border border-[rgba(0,65,240,0.3)] text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <span class="material-symbols-outlined text-xl">mail</span>
              </div>
              <span class="text-[9px] font-mono font-semibold px-2 py-0.5 rounded-[2px] bg-[rgba(0,65,240,0.15)] text-primary">RFP &amp; INQUIRY</span>
            </div>
            <div>
              <div class="text-sm font-semibold text-white group-hover:text-primary transition-colors duration-300">Email Resmi</div>
              <div class="text-xs font-mono text-[#999999] mt-1 truncate">nexadigitalagency40@gmail.com</div>
            </div>
            <div class="mt-auto pt-3 border-t border-[rgba(241,241,239,0.08)] flex items-center justify-between text-xs font-mono text-primary">
              <span>Kirim Email</span>
              <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform duration-300">arrow_forward</span>
            </div>
          </a>

          <!-- Instagram -->
          <a 
            href="https://www.instagram.com/nexadigitalagency40/" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="contact-card card-dark p-5 flex flex-col gap-4 group hover:border-violet/60"
            title="Buka Instagram Resmi"
          >
            <div class="flex items-center justify-between">
              <div class="w-11 h-11 rounded-[4px] bg-[rgba(166,0,255,0.15)] border border-[rgba(166,0,255,0.3)] text-violet flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.441-1.44z"/>
                </svg>
              </div>
              <span class="text-[9px] font-mono font-semibold px-2 py-0.5 rounded-[2px] bg-[rgba(166,0,255,0.15)] text-violet">SOCIAL</span>
            </div>
            <div>
              <div class="text-sm font-semibold text-white group-hover:text-violet transition-colors duration-300">Instagram Official</div>
              <div class="text-xs font-mono text-[#999999] mt-1">@nexadigitalagency40</div>
            </div>
            <div class="mt-auto pt-3 border-t border-[rgba(241,241,239,0.08)] flex items-center justify-between text-xs font-mono text-violet">
              <span>Kunjungi</span>
              <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform duration-300">arrow_forward</span>
            </div>
          </a>

          <!-- TikTok -->
          <a 
            href="https://www.tiktok.com/@nexa.digital.agen1?_r=1&_t=ZS-99LSlCbuCXA" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="contact-card card-dark p-5 flex flex-col gap-4 group hover:border-secondary/60 sm:col-span-2 lg:col-span-1"
            title="Buka TikTok Resmi"
          >
            <div class="flex items-center justify-between">
              <div class="w-11 h-11 rounded-[4px] bg-[rgba(226,6,46,0.15)] border border-[rgba(226,6,46,0.3)] text-secondary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </div>
              <span class="text-[9px] font-mono font-semibold px-2 py-0.5 rounded-[2px] bg-[rgba(226,6,46,0.15)] text-secondary">CREATIVE</span>
            </div>
            <div>
              <div class="text-sm font-semibold text-white group-hover:text-secondary transition-colors duration-300">TikTok Official</div>
              <div class="text-xs font-mono text-[#999999] mt-1">@nexa.digital.agen1</div>
            </div>
            <div class="mt-auto pt-3 border-t border-[rgba(241,241,239,0.08)] flex items-center justify-between text-xs font-mono text-secondary">
              <span>Buka TikTok</span>
              <span class="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform duration-300">arrow_forward</span>
            </div>
          </a>

        </div>
      </div>

      <!-- Quick Message Form -->
      <div id="contact-form" class="contact-form card-dark p-6 sm:p-10 space-y-8">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[rgba(241,241,239,0.1)] pb-5">
          <div>
            <div class="text-xs font-mono text-primary uppercase font-semibold tracking-wider">FORMULIR PESAN CEPAT</div>
            <h2 class="text-2xl font-display font-medium text-white mt-1">Kirim Ringkasan Kebutuhan Proyek</h2>
          </div>
          <span class="text-xs font-mono text-[#999999]">LANGSUNG DITERIMA TIM TEKNIS</span>
        </div>

        <form @submit.prevent="sendWhatsAppDirect" class="space-y-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="space-y-2">
              <label for="client-name" class="block text-xs font-mono text-[#cccccc] uppercase tracking-wider">Nama Anda / Perusahaan *</label>
              <input 
                id="client-name" 
                v-model="form.name" 
                type="text" 
                required 
                placeholder="Contoh: Budi Santoso (PT Inovasi)" 
                class="w-full bg-[#141418] border border-[rgba(241,241,239,0.12)] rounded-[4px] px-4 py-3 text-sm text-white focus:border-primary focus:bg-[#18181f] transition-all duration-300 outline-none"
              />
            </div>
            <div class="space-y-2">
              <label for="client-service" class="block text-xs font-mono text-[#cccccc] uppercase tracking-wider">Layanan yang Dibutuhkan *</label>
              <select 
                id="client-service" 
                v-model="form.service" 
                class="w-full bg-[#141418] border border-[rgba(241,241,239,0.12)] rounded-[4px] px-4 py-3 text-sm text-white focus:border-primary focus:bg-[#18181f] transition-all duration-300 outline-none cursor-pointer"
              >
                <option value="Web Development">Web Development (Website, Portal, Dashboard)</option>
                <option value="Data Analysis">Data Analysis &amp; Visualisasi BI</option>
                <option value="Game Development">Game Development &amp; Gamifikasi</option>
                <option value="Mobile Apps">Mobile Apps (Flutter Android &amp; iOS)</option>
                <option value="Konsultasi Arsitektur Digital">Konsultasi Arsitektur Digital Umum</option>
              </select>
            </div>
          </div>

          <div class="space-y-2">
            <label for="client-message" class="block text-xs font-mono text-[#cccccc] uppercase tracking-wider">Deskripsi Singkat Proyek / Pertanyaan *</label>
            <textarea 
              id="client-message" 
              v-model="form.message" 
              rows="4" 
              required 
              placeholder="Ceritakan gambaran sistem, target waktu pengerjaan, atau perkiraan anggaran yang Anda rencanakan..." 
              class="w-full bg-[#141418] border border-[rgba(241,241,239,0.12)] rounded-[4px] px-4 py-3 text-sm text-white focus:border-primary focus:bg-[#18181f] transition-all duration-300 outline-none resize-y"
            ></textarea>
          </div>

          <!-- Submit Actions -->
          <div class="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <button 
              type="submit" 
              class="btn-primary w-full sm:w-auto uppercase tracking-wider font-semibold text-xs py-3.5 px-8 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Hubungi via WhatsApp</span>
              <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>

            <button 
              type="button" 
              @click="sendEmailDirect" 
              class="btn-secondary w-full sm:w-auto uppercase tracking-wider font-semibold text-xs py-3.5 px-8 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Kirim via Email</span>
              <span class="material-symbols-outlined text-[18px]">mail</span>
            </button>
          </div>
        </form>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { observeScrollReveal, animateSectionHeader } from '../utils/animations'

const route = useRoute()

const validServices = [
  'Web Development',
  'Data Analysis',
  'Game Development',
  'Mobile Apps',
  'Konsultasi Arsitektur Digital'
]

const initialService = validServices.includes(route.query.service)
  ? route.query.service
  : 'Web Development'

const form = ref({
  name: '',
  service: initialService,
  message: ''
})

onMounted(() => {
  animateSectionHeader('.contact-header')
  observeScrollReveal('.contact-card', { stagger: 80, distance: 30 })
  observeScrollReveal('.contact-form', { stagger: 0, distance: 40 })

  if (route.query.service) {
    setTimeout(() => {
      const formEl = document.getElementById('contact-form')
      if (formEl) {
        formEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 200)
  }
})

function sendWhatsAppDirect() {
  const text = `Halo Nexa Digital Agency,\n\nNama/Perusahaan: ${form.value.name || 'Klien Baru'}\nKebutuhan Layanan: ${form.value.service}\n\nDetail Proyek:\n${form.value.message || 'Saya ingin berdiskusi mengenai proyek digital.'}`
  const encoded = encodeURIComponent(text)
  window.open(`https://wa.me/62895800286901?text=${encoded}`, '_blank')
}

function sendEmailDirect() {
  const subject = encodeURIComponent(`Inquiry Proyek: ${form.value.service} - ${form.value.name || 'Klien Baru'}`)
  const body = encodeURIComponent(`Nama/Perusahaan: ${form.value.name || '-'}\nLayanan: ${form.value.service}\n\nKebutuhan:\n${form.value.message || '-'}`)
  window.location.href = `mailto:nexadigitalagency40@gmail.com?subject=${subject}&body=${body}`
}
</script>
