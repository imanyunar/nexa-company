<template>
  <div class="py-16 sm:py-20 bg-paper">
    <div class="max-w-4xl mx-auto px-6 space-y-12">
      
      <!-- Header Page -->
      <div class="text-center max-w-2xl mx-auto space-y-4">
        <h1 class="text-3xl sm:text-4xl font-display font-bold text-ink">
          Hubungi Kami
        </h1>
        <p class="text-muted text-base sm:text-lg leading-relaxed">
          Punya ide proyek atau butuh bantuan teknis? Kirim pesan atau hubungi kami langsung via WhatsApp. Kami siap membantu.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        <!-- Kolom Info Kontak Cepat (Direct Channels) -->
        <div class="md:col-span-5 space-y-6">
          <div class="bg-surface border border-muted-border rounded-lg p-6 space-y-6">
            <h2 class="text-lg font-display font-bold text-ink">Kontak Langsung</h2>

            <!-- WhatsApp Direct Card -->
            <div class="space-y-2">
              <span class="text-xs font-semibold text-muted uppercase">WhatsApp Chat</span>
              <a 
                href="https://wa.me/6281234567890?text=Halo%20Nexa,%20saya%20ingin%20konsultasi%20mengenai%20proyek%20digital." 
                target="_blank" 
                rel="noopener noreferrer"
                class="flex items-center gap-3 p-3 bg-[#25D366]/10 border border-[#25D366]/30 rounded hover:bg-[#25D366]/20 transition-all text-[#128C7E] font-semibold text-sm"
              >
                <span>💬</span>
                <span>Chat via WhatsApp</span>
              </a>
              <p class="text-[11px] text-muted">Respon cepat setiap hari kerja (09.00 - 18.00 WIB)</p>
            </div>

            <!-- Email Direct Card -->
            <div class="space-y-2 pt-3 border-t border-muted-border">
              <span class="text-xs font-semibold text-muted uppercase">Email Resmi</span>
              <a 
                href="mailto:hello@nexa.agency" 
                class="flex items-center gap-3 p-3 bg-blue-soft border border-blue/20 rounded hover:bg-blue/15 transition-all text-blue font-semibold text-sm"
              >
                <span>✉️</span>
                <span>hello@nexa.agency</span>
              </a>
            </div>

            <!-- Lokasi & Jam Operasional -->
            <div class="space-y-1 pt-3 border-t border-muted-border text-xs text-muted">
              <div class="font-bold text-ink">Studio & Operasional</div>
              <div>Indonesia (Remote & On-Demand Meeting)</div>
            </div>
          </div>
        </div>

        <!-- Kolom Form Konsultasi Sederhana -->
        <div class="md:col-span-7 bg-surface border border-muted-border rounded-lg p-6 sm:p-8 space-y-6">
          <h2 class="text-lg font-display font-bold text-ink">Formulir Pesan</h2>
          
          <form @submit.prevent="submitForm" class="space-y-4">
            <!-- Nama -->
            <div class="space-y-1.5">
              <label for="nama" class="block text-xs font-semibold text-ink">
                Nama Lengkap / Instansi *
              </label>
              <input 
                id="nama"
                v-model="form.name"
                type="text" 
                required 
                placeholder="Contoh: Budi Santoso"
                class="w-full bg-paper border border-muted-border rounded px-3.5 py-2.5 text-sm text-ink focus:border-blue focus:bg-white outline-none transition-all"
              />
            </div>

            <!-- Kontak (No HP / Email) -->
            <div class="space-y-1.5">
              <label for="kontak_info" class="block text-xs font-semibold text-ink">
                Nomor WhatsApp atau Email *
              </label>
              <input 
                id="kontak_info"
                v-model="form.contact"
                type="text" 
                required 
                placeholder="0812xxxxxxx atau email@anda.com"
                class="w-full bg-paper border border-muted-border rounded px-3.5 py-2.5 text-sm text-ink focus:border-blue focus:bg-white outline-none transition-all"
              />
            </div>

            <!-- Pilihan Layanan -->
            <div class="space-y-1.5">
              <label class="block text-xs font-semibold text-ink">
                Layanan yang Dibutuhkan *
              </label>
              <select 
                v-model="form.service"
                class="w-full bg-paper border border-muted-border rounded px-3.5 py-2.5 text-sm text-ink focus:border-blue focus:bg-white outline-none transition-all"
              >
                <option value="Web Development">Web Development (Website / Web App)</option>
                <option value="Data Analysis">Data Analysis & Dashboard</option>
                <option value="Game Development">Game Development (2D/3D / Edukasi)</option>
                <option value="Lainnya">Lainnya / Diskusi Umum</option>
              </select>
            </div>

            <!-- Pesan / Catatan -->
            <div class="space-y-1.5">
              <label for="pesan" class="block text-xs font-semibold text-ink">
                Ceritakan Singkat Rencana Anda *
              </label>
              <textarea 
                id="pesan"
                v-model="form.message"
                rows="4" 
                required
                placeholder="Misal: Ingin membuat website company profile desa wisata dengan fitur katalog produk..."
                class="w-full bg-paper border border-muted-border rounded px-3.5 py-2.5 text-sm text-ink focus:border-blue focus:bg-white outline-none transition-all resize-y"
              ></textarea>
            </div>

            <!-- Tombol Kirim -->
            <div class="pt-2">
              <button 
                type="submit" 
                class="w-full bg-blue hover:bg-blue-hover text-white text-sm font-semibold py-3 px-6 rounded transition-all hover:translate-y-[-1px]"
              >
                Kirim via WhatsApp Langsung
              </button>
            </div>

            <p v-if="sent" class="text-xs text-[#27C93F] text-center pt-1 font-medium">
              ✔ Menyiapkan pesan ke WhatsApp Nexa...
            </p>
          </form>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  contact: '',
  service: 'Web Development',
  message: ''
})

const sent = ref(false)

function submitForm() {
  sent.value = true
  const text = `Halo Nexa Agency,\n\nNama: ${form.value.name}\nKontak: ${form.value.contact}\nLayanan: ${form.value.service}\n\nPesan/Kebutuhan:\n${form.value.message}`
  const encoded = encodeURIComponent(text)
  window.open(`https://wa.me/6281234567890?text=${encoded}`, '_blank')
}
</script>
