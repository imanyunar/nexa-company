<template>
  <section id="kontak" class="py-24 bg-paper border-t border-muted-border">
    <div class="max-w-7xl mx-auto px-6">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        <!-- Left: Direct Info -->
        <div class="lg:col-span-5 space-y-6">
          <h2 class="text-3xl sm:text-4xl font-display font-bold text-ink leading-tight">
            Mulai Diskusi Teknis Proyek Anda
          </h2>
          <p class="text-muted text-base leading-relaxed">
            Ceritakan kebutuhan spesifik Anda — dari arsitektur web, integrasi analitik data, hingga rancangan game. Kami memberikan estimasi transparan dan pendekatan arsitektur terbaik.
          </p>

          <!-- Contact Details List -->
          <div class="space-y-4 pt-4 text-sm">
            <div class="flex items-start gap-4">
              <div class="w-8 h-8 rounded-[2px] bg-surface border border-muted-border flex items-center justify-center text-blue font-mono font-bold text-xs shrink-0">
                WA
              </div>
              <div>
                <div class="font-semibold text-ink">WhatsApp Direct</div>
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" class="text-muted hover:text-blue transition-colors">
                  +62 812-3456-7890
                </a>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="w-8 h-8 rounded-[2px] bg-surface border border-muted-border flex items-center justify-center text-blue font-mono font-bold text-xs shrink-0">
                EM
              </div>
              <div>
                <div class="font-semibold text-ink">Email Inquiries</div>
                <a href="mailto:hello@nexa.agency" class="text-muted hover:text-blue transition-colors">
                  hello@nexa.agency
                </a>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="w-8 h-8 rounded-[2px] bg-surface border border-muted-border flex items-center justify-center text-blue font-mono font-bold text-xs shrink-0">
                HQ
              </div>
              <div>
                <div class="font-semibold text-ink">Lokasi Studio</div>
                <div class="text-muted">Indonesia (Remote-First Engineering Agency)</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Minimalist Form without generic 3D illustrations -->
        <div class="lg:col-span-7 bg-surface border border-muted-border rounded-[2px] p-8">
          <form @submit.prevent="handleSubmit" class="space-y-5">
            
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <!-- Name Field -->
              <div class="space-y-2">
                <label for="name" class="block text-xs font-mono text-ink uppercase tracking-wider">
                  Nama Lengkap / Organisasi *
                </label>
                <input 
                  id="name"
                  v-model="form.name"
                  type="text" 
                  required
                  placeholder="Contoh: Budi Santoso"
                  class="w-full bg-paper border border-muted-border rounded-[2px] px-4 py-3 text-sm text-ink focus:border-blue focus:bg-white transition-all outline-none"
                />
              </div>

              <!-- Email Field -->
              <div class="space-y-2">
                <label for="email" class="block text-xs font-mono text-ink uppercase tracking-wider">
                  Email Kontak *
                </label>
                <input 
                  id="email"
                  v-model="form.email"
                  type="email" 
                  required
                  placeholder="budi@perusahaan.com"
                  class="w-full bg-paper border border-muted-border rounded-[2px] px-4 py-3 text-sm text-ink focus:border-blue focus:bg-white transition-all outline-none"
                />
              </div>
            </div>

            <!-- Service Requirement Selector -->
            <div class="space-y-2">
              <label class="block text-xs font-mono text-ink uppercase tracking-wider">
                Kebutuhan Layanan *
              </label>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  v-for="svc in serviceOptions"
                  :key="svc"
                  @click="form.service = svc"
                  :class="form.service === svc ? 'border-blue bg-blue-soft text-blue font-semibold' : 'border-muted-border bg-paper text-muted hover:text-ink'"
                  class="border rounded-[2px] py-2.5 px-3 text-xs text-left transition-all"
                >
                  {{ svc }}
                </button>
              </div>
            </div>

            <!-- Project Details Message -->
            <div class="space-y-2">
              <label for="message" class="block text-xs font-mono text-ink uppercase tracking-wider">
                Ringkasan Kebutuhan Proyek *
              </label>
              <textarea 
                id="message"
                v-model="form.message"
                rows="4" 
                required
                placeholder="Jelaskan gambaran proyek, target waktu, atau spesifikasi teknologi yang dibutuhkan..."
                class="w-full bg-paper border border-muted-border rounded-[2px] px-4 py-3 text-sm text-ink focus:border-blue focus:bg-white transition-all outline-none resize-y"
              ></textarea>
            </div>

            <!-- Submission Actions -->
            <div class="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <button 
                type="submit" 
                class="w-full sm:w-auto bg-blue hover:bg-blue-hover text-white text-sm font-semibold px-8 py-3.5 rounded-[3px] transition-all hover:translate-y-[-1px] active:translate-y-[0px]"
              >
                Kirim via WhatsApp Direct
              </button>

              <button 
                type="button"
                @click="sendEmailDirect" 
                class="w-full sm:w-auto bg-surface hover:bg-paper text-ink text-sm font-semibold px-6 py-3.5 rounded-[3px] border border-muted-border transition-all"
              >
                Kirim via Email Client
              </button>
            </div>

            <!-- Success notification -->
            <p v-if="submitted" class="text-xs font-mono text-[#27C93F] pt-2">
              ✔ Pesan Anda siap dikirimkan. Menghubungkan langsung ke tim teknis Nexa...
            </p>
          </form>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const serviceOptions = [
  'Web Development',
  'Data Analysis',
  'Game Development'
]

const form = ref({
  name: '',
  email: '',
  service: 'Web Development',
  message: ''
})

const submitted = ref(false)

function handleSubmit() {
  submitted.value = true
  const text = `Halo Nexa Agency,\n\nNama: ${form.value.name}\nEmail: ${form.value.email}\nLayanan: ${form.value.service}\n\nPesan:\n${form.value.message}`
  const encoded = encodeURIComponent(text)
  window.open(`https://wa.me/6281234567890?text=${encoded}`, '_blank')
}

function sendEmailDirect() {
  const subject = encodeURIComponent(`Inquiry Proyek Nexa: ${form.value.service} - ${form.value.name}`)
  const body = encodeURIComponent(`Nama: ${form.value.name}\nEmail: ${form.value.email}\nLayanan: ${form.value.service}\n\nKebutuhan:\n${form.value.message}`)
  window.location.href = `mailto:hello@nexa.agency?subject=${subject}&body=${body}`
}
</script>
