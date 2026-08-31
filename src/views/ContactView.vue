<template>
  <div class="bg-base text-white py-20 sm:py-24">
    <div class="max-w-4xl mx-auto px-6 space-y-16">

      <div class="text-center max-w-2xl mx-auto space-y-4">
        <div class="text-xs font-mono t-cyan uppercase tracking-widest">CONTACT & CONSULTATION</div>
        <h1 class="text-4xl sm:text-5xl font-display font-light text-white">Mulai Diskusi Proyek</h1>
        <p class="t-muted text-base sm:text-lg leading-relaxed">Hubungi kami melalui WhatsApp, Email, atau TikTok. Kami siap memberikan solusi arsitektur dan estimasi terbaik.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <!-- Sidebar Kontak -->
        <div class="md:col-span-5 space-y-6">
          <div class="card-unified contact-card p-7 space-y-6">
            <h2 class="text-xl font-display font-light text-white">Saluran Resmi</h2>
            
            <!-- WhatsApp -->
            <div class="space-y-2">
              <span class="text-xs font-mono t-cyan uppercase">WhatsApp Resmi</span>
              <a 
                href="https://wa.me/62895800286901?text=Halo%20Nexa%20Digital%20Agency,%20saya%20ingin%20konsultasi%20mengenai%20proyek%20digital." 
                target="_blank" 
                rel="noopener noreferrer" 
                class="flex items-center gap-3.5 p-3.5 rounded-lg font-semibold text-sm hover:scale-[1.02] transition-all" 
                style="background:rgba(37,211,102,0.15); border:1px solid rgba(37,211,102,0.3); color:#25D366;"
              >
                <!-- Official WhatsApp Vector Icon -->
                <svg class="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.301-.15-1.781-.879-2.057-.98-.277-.101-.478-.15-.679.15-.2.301-.778.98-.954 1.18-.176.2-.352.226-.653.076-.301-.15-1.272-.469-2.424-1.496-.896-.799-1.501-1.787-1.677-2.088-.176-.301-.019-.464.132-.614.136-.135.301-.352.452-.528.151-.176.201-.301.301-.502.1-.2.05-.376-.025-.527-.075-.15-.679-1.637-.93-2.242-.244-.589-.493-.509-.679-.519l-.578-.01c-.2 0-.527.075-.803.376s-1.054 1.03-1.054 2.511 1.079 2.912 1.23 3.113c.15.201 2.124 3.244 5.146 4.55.719.311 1.28.497 1.718.636.722.23 1.378.197 1.898.12.579-.087 1.781-.728 2.032-1.431.251-.703.251-1.305.176-1.431-.076-.126-.276-.201-.577-.352zm-5.467 7.618a9.92 9.92 0 0 1-5.064-1.385l-.363-.215-3.766.988 1.005-3.67-.236-.375a9.932 9.932 0 0 1-1.523-5.289c0-5.485 4.463-9.948 9.952-9.948 2.658 0 5.158 1.036 7.034 2.914a9.89 9.89 0 0 1 2.912 7.034c0 5.487-4.464 9.949-9.95 9.949zm8.441-18.39A11.905 11.905 0 0 0 12.005 0C5.385 0 0 5.385 0 12.005c0 2.113.552 4.177 1.6 6.002L0 24l6.165-1.617a11.97 11.97 0 0 0 5.84 1.513h.005c6.619 0 12.005-5.385 12.005-12.005 0-3.208-1.25-6.224-3.52-8.496z"/>
                </svg>
                <div class="flex flex-col">
                  <span>+62 895 8002 86901</span>
                  <span class="text-[10px] opacity-80 font-normal">Chat WhatsApp Langsung</span>
                </div>
              </a>
              <p class="text-[11px] t-faint">Respon cepat setiap hari kerja (09.00 - 18.00 WIB)</p>
            </div>

            <!-- Email -->
            <div class="space-y-2 pt-3 border-t b-subtle">
              <span class="text-xs font-mono t-cyan uppercase">Email Resmi</span>
              <a 
                href="mailto:nexadigitalagency40@gmail.com" 
                class="flex items-center gap-3.5 p-3.5 rounded-lg font-semibold text-xs sm:text-sm text-white hover:scale-[1.02] transition-all truncate" 
                style="background:rgba(58,76,224,0.2); border:1px solid rgba(58,76,224,0.3);"
              >
                <Mail class="w-5 h-5 text-cyan shrink-0" />
                <span class="truncate">nexadigitalagency40@gmail.com</span>
              </a>
            </div>

            <!-- TikTok -->
            <div class="space-y-2 pt-3 border-t b-subtle">
              <span class="text-xs font-mono t-cyan uppercase">Media Sosial</span>
              <a 
                href="https://www.tiktok.com/@nexa.digital.agen1?_r=1&_t=ZS-99LSlCbuCXA" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="flex items-center gap-3.5 p-3.5 rounded-lg font-semibold text-sm hover:scale-[1.02] transition-all" 
                style="background:rgba(230,32,197,0.15); border:1px solid rgba(230,32,197,0.3); color:#F472B6;"
              >
                <!-- Official TikTok Vector Icon -->
                <svg class="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
                <div class="flex flex-col">
                  <span>TikTok Official</span>
                  <span class="text-[10px] opacity-80 font-normal">@nexa.digital.agen1</span>
                </div>
              </a>
            </div>

            <div class="space-y-1 pt-3 border-t b-subtle text-xs t-faint font-mono">
              <div class="font-bold text-white">NEXA DIGITAL AGENCY</div>
              <div>Remote-First Digital Studio · Indonesia</div>
            </div>
          </div>
        </div>

        <!-- Form Konsultasi -->
        <div class="md:col-span-7 card-unified contact-card p-8 sm:p-10 space-y-6">
          <h2 class="text-xl font-display font-light text-white">Formulir Konsultasi Cepat</h2>
          <form @submit.prevent="submitForm" class="space-y-5">
            <div class="space-y-2">
              <label for="nama" class="block text-xs font-mono t-cyan uppercase tracking-wider">Nama Lengkap / Instansi *</label>
              <input id="nama" v-model="form.name" type="text" required placeholder="Contoh: Budi Santoso" class="w-full bg-base border b-subtle rounded-lg px-4 py-3 text-sm text-white outline-none transition-all placeholder:t-faint" style="border-color:rgba(255,255,255,0.12);" />
            </div>
            <div class="space-y-2">
              <label for="kontak_info" class="block text-xs font-mono t-cyan uppercase tracking-wider">Nomor WhatsApp atau Email Anda *</label>
              <input id="kontak_info" v-model="form.contact" type="text" required placeholder="0812xxxxxxx atau email@anda.com" class="w-full bg-base border b-subtle rounded-lg px-4 py-3 text-sm text-white outline-none transition-all placeholder:t-faint" style="border-color:rgba(255,255,255,0.12);" />
            </div>
            <div class="space-y-2">
              <label class="block text-xs font-mono t-cyan uppercase tracking-wider">Layanan yang Dibutuhkan *</label>
              <select v-model="form.service" class="w-full bg-base border b-subtle rounded-lg px-4 py-3 text-sm text-white outline-none transition-all" style="border-color:rgba(255,255,255,0.12);">
                <option style="background:#0B0E2B; color:#fff;" value="Web Development">Web Development (Website / Web App)</option>
                <option style="background:#0B0E2B; color:#fff;" value="Data Analysis">Data Analysis & Dashboard</option>
                <option style="background:#0B0E2B; color:#fff;" value="Game Development">Game Development (2D/3D / Edukasi)</option>
                <option style="background:#0B0E2B; color:#fff;" value="Lainnya">Lainnya / Diskusi Umum</option>
              </select>
            </div>
            <div class="space-y-2">
              <label for="pesan" class="block text-xs font-mono t-cyan uppercase tracking-wider">Ringkasan Kebutuhan Proyek *</label>
              <textarea id="pesan" v-model="form.message" rows="4" required placeholder="Ceritakan gambaran proyek, target waktu, atau kebutuhan..." class="w-full bg-base border b-subtle rounded-lg px-4 py-3 text-sm text-white outline-none transition-all resize-y placeholder:t-faint" style="border-color:rgba(255,255,255,0.12);"></textarea>
            </div>
            <div class="pt-3">
              <button type="submit" class="btn-pill-primary w-full text-xs font-bold uppercase tracking-wider py-4 flex items-center justify-center gap-2">
                <Send class="w-4 h-4" />
                <span>Kirim via WhatsApp Direct</span>
              </button>
            </div>
            <p v-if="sent" class="text-xs text-center pt-2 font-mono flex items-center justify-center gap-1.5" style="color:#27C93F;">
              <CheckCircle2 class="w-4 h-4" />
              <span>Menyiapkan pesan ke WhatsApp Nexa Digital Agency...</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Mail, Send, CheckCircle2 } from 'lucide-vue-next'
import { animateStaggerFadeIn } from '../utils/animations'

const form = ref({ name: '', contact: '', service: 'Web Development', message: '' })
const sent = ref(false)

onMounted(() => { animateStaggerFadeIn('.contact-card', { delay: 150, stagger: 120 }) })

function submitForm() {
  sent.value = true
  const text = `Halo Nexa Digital Agency,\n\nNama: ${form.value.name}\nKontak: ${form.value.contact}\nLayanan: ${form.value.service}\n\nPesan/Kebutuhan:\n${form.value.message}`
  window.open(`https://wa.me/62895800286901?text=${encodeURIComponent(text)}`, '_blank')
}
</script>
