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
                <!-- SVG WhatsApp Vector Icon -->
                <svg class="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.076-1.579-.297-1.127-.446-1.89-1.578-1.947-1.654-.055-.077-.45-0.598-.45-1.141 0-.543.285-.809.387-.92.102-.112.222-.14.296-.14.075 0 .15 0 .216.004.07.003.164-.026.256.195.096.23.328.799.356.857.029.058.048.126.01.202-.038.077-.058.125-.116.192-.058.067-.123.15-.175.202-.058.057-.118.12-.051.236.068.115.301.496.646.804.444.396.818.52 0.933.578.116.057.184.05.253-.03.07-.078.298-.348.377-.468.08-.12.16-.1.27-.059.11.041.697.329.817.389.12.06.2.09.23.14.03.05.03.29-.114.695z"/>
                </svg>
                <div class="flex flex-col">
                  <span>+62 895-8002-86901</span>
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
                <!-- SVG TikTok Vector Icon -->
                <svg class="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.86 4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.04-4.52z"/>
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
