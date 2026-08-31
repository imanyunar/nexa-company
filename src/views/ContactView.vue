<template>
  <div class="bg-theme-base text-white py-20 sm:py-24">
    <div class="max-w-4xl mx-auto px-6 space-y-16">
      
      <!-- Editorial Page Top -->
      <div class="text-center max-w-2xl mx-auto space-y-4">
        <div class="text-xs font-mono text-cyan uppercase tracking-widest">CONTACT & CONSULTATION</div>
        <h1 class="text-4xl sm:text-5xl font-display font-light text-white">
          Mulai Diskusi Proyek
        </h1>
        <p class="text-theme-text-muted text-base sm:text-lg leading-relaxed">
          Hubungi kami melalui formulir atau langsung via WhatsApp. Kami siap memberikan masukan arsitektur dan estimasi terbaik.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        <!-- Kolom Info Kontak Cepat (Unified Card) -->
        <div class="md:col-span-5 space-y-6">
          <div class="card-unified contact-card p-7 space-y-6">
            <h2 class="text-xl font-display font-light text-white">Kontak Langsung</h2>

            <!-- WhatsApp Direct Card -->
            <div class="space-y-2">
              <span class="text-xs font-mono text-cyan uppercase">WhatsApp Chat</span>
              <a 
                href="https://wa.me/6281234567890?text=Halo%20Nexa,%20saya%20ingin%20konsultasi%20mengenai%20proyek%20digital." 
                target="_blank" 
                rel="noopener noreferrer"
                class="flex items-center gap-3 p-3.5 bg-[#25D366]/15 border border-[#25D366]/30 rounded-lg hover:bg-[#25D366]/25 transition-all text-[#25D366] font-semibold text-sm hover:scale-[1.02]"
              >
                <span>💬</span>
                <span>Chat WhatsApp Direct</span>
              </a>
              <p class="text-[11px] text-theme-text-faint">Respon cepat setiap hari kerja (09.00 - 18.00 WIB)</p>
            </div>

            <!-- Email Direct Card -->
            <div class="space-y-2 pt-3 border-t border-theme-border">
              <span class="text-xs font-mono text-cyan uppercase">Email Resmi</span>
              <a 
                href="mailto:hello@nexa.agency" 
                class="flex items-center gap-3 p-3.5 bg-primary/20 border border-primary/30 rounded-lg hover:bg-primary/30 transition-all text-white font-semibold text-sm hover:scale-[1.02]"
              >
                <span>✉️</span>
                <span>hello@nexa.agency</span>
              </a>
            </div>

            <!-- Lokasi & Jam Operasional -->
            <div class="space-y-1 pt-3 border-t border-theme-border text-xs text-theme-text-faint font-mono">
              <div class="font-bold text-white">STUDIO // INDONESIA</div>
              <div>Remote-First Digital Studio</div>
            </div>
          </div>
        </div>

        <!-- Kolom Form Konsultasi Sederhana (Unified Card) -->
        <div class="md:col-span-7 card-unified contact-card p-8 sm:p-10 space-y-6">
          <h2 class="text-xl font-display font-light text-white">Formulir Konsultasi</h2>
          
          <form @submit.prevent="submitForm" class="space-y-5">
            <!-- Nama -->
            <div class="space-y-2">
              <label for="nama" class="block text-xs font-mono text-cyan uppercase tracking-wider">
                Nama Lengkap / Instansi *
              </label>
              <input 
                id="nama"
                v-model="form.name"
                type="text" 
                required 
                placeholder="Contoh: Budi Santoso"
                class="w-full bg-theme-base/80 border border-theme-border rounded-lg px-4 py-3 text-sm text-white focus:border-cyan focus:bg-theme-base outline-none transition-all placeholder:text-white/30"
              />
            </div>

            <!-- Kontak (No HP / Email) -->
            <div class="space-y-2">
              <label for="kontak_info" class="block text-xs font-mono text-cyan uppercase tracking-wider">
                Nomor WhatsApp atau Email *
              </label>
              <input 
                id="kontak_info"
                v-model="form.contact"
                type="text" 
                required 
                placeholder="0812xxxxxxx atau email@anda.com"
                class="w-full bg-theme-base/80 border border-theme-border rounded-lg px-4 py-3 text-sm text-white focus:border-cyan focus:bg-theme-base outline-none transition-all placeholder:text-white/30"
              />
            </div>

            <!-- Pilihan Layanan -->
            <div class="space-y-2">
              <label class="block text-xs font-mono text-cyan uppercase tracking-wider">
                Layanan yang Dibutuhkan *
              </label>
              <select 
                v-model="form.service"
                class="w-full bg-theme-base/80 border border-theme-border rounded-lg px-4 py-3 text-sm text-white focus:border-cyan focus:bg-theme-base outline-none transition-all"
              >
                <option class="bg-theme-base text-white" value="Web Development">Web Development (Website / Web App)</option>
                <option class="bg-theme-base text-white" value="Data Analysis">Data Analysis & Dashboard</option>
                <option class="bg-theme-base text-white" value="Game Development">Game Development (2D/3D / Edukasi)</option>
                <option class="bg-theme-base text-white" value="Lainnya">Lainnya / Diskusi Umum</option>
              </select>
            </div>

            <!-- Pesan / Catatan -->
            <div class="space-y-2">
              <label for="pesan" class="block text-xs font-mono text-cyan uppercase tracking-wider">
                Ringkasan Kebutuhan Proyek *
              </label>
              <textarea 
                id="pesan"
                v-model="form.message"
                rows="4" 
                required
                placeholder="Ceritakan gambaran proyek, target waktu, atau kebutuhan yang ingin dicapai..."
                class="w-full bg-theme-base/80 border border-theme-border rounded-lg px-4 py-3 text-sm text-white focus:border-cyan focus:bg-theme-base outline-none transition-all resize-y placeholder:text-white/30"
              ></textarea>
            </div>

            <!-- Tombol Kirim: Pill Button -->
            <div class="pt-3">
              <button 
                type="submit" 
                class="btn-pill-primary w-full text-xs font-bold uppercase tracking-wider py-4"
              >
                Kirim via WhatsApp Direct
              </button>
            </div>

            <p v-if="sent" class="text-xs text-[#27C93F] text-center pt-2 font-mono">
              ✔ Menyiapkan pesan ke WhatsApp Nexa...
            </p>
          </form>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { animateStaggerFadeIn } from '../utils/animations'

const form = ref({
  name: '',
  contact: '',
  service: 'Web Development',
  message: ''
})

const sent = ref(false)

onMounted(() => {
  animateStaggerFadeIn('.contact-card', { delay: 150, stagger: 120 })
})

function submitForm() {
  sent.value = true
  const text = `Halo Nexa Agency,\n\nNama: ${form.value.name}\nKontak: ${form.value.contact}\nLayanan: ${form.value.service}\n\nPesan/Kebutuhan:\n${form.value.message}`
  const encoded = encodeURIComponent(text)
  window.open(`https://wa.me/6281234567890?text=${encoded}`, '_blank')
}
</script>
