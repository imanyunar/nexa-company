<template>
  <div class="py-16 sm:py-24 transition-colors duration-300 min-h-[85vh]">
    <div class="max-w-5xl mx-auto px-4 sm:px-6">

      <!-- STATE 1: LOGIN CARD (When not authenticated) -->
      <div v-if="!isAuthenticated" class="max-w-md mx-auto space-y-6">
        <div class="text-center space-y-2">
          <div 
            class="inline-flex items-center px-3.5 py-1 rounded-full border text-xs font-mono font-semibold uppercase tracking-wider"
            :class="isDark ? 'border-stitch-magenta/40 bg-[#191c1f] text-stitch-magenta-light' : 'border-fuchsia-200 bg-white text-fuchsia-700 shadow-sm'"
          >
            <span class="material-symbols-outlined text-sm mr-1.5">admin_panel_settings</span>
            <span>Akses Khusus Internal</span>
          </div>
          <h1 class="text-3xl font-headline font-semibold">Login Pengelola Nexa</h1>
          <p class="text-xs text-on-surface-variant">
            Masukkan kredensial tim pengelola untuk mengakses dan mengisi modul kalender kegiatan.
          </p>
        </div>

        <form 
          @submit.prevent="handleLogin" 
          class="p-6 sm:p-8 rounded-2xl border space-y-5 transition-all shadow-xl"
          :class="isDark ? 'bg-[#191c1f] border-[#2a2d31]' : 'bg-white border-slate-200 shadow-sm'"
        >
          <!-- Error alert -->
          <div v-if="loginError" class="p-3.5 rounded-xl border text-xs flex items-center gap-2"
            :class="isDark ? 'bg-red-500/10 border-red-500/30 text-red-400' : 'bg-red-50 border-red-200 text-red-700'"
          >
            <span class="material-symbols-outlined text-base shrink-0">error</span>
            <span>{{ loginError }}</span>
          </div>

          <!-- Email Input -->
          <div class="space-y-1.5">
            <label class="block text-xs font-mono uppercase font-semibold text-on-surface">Email Pengelola</label>
            <input 
              v-model="loginForm.email"
              type="email" 
              required
              placeholder="admin@nexaagency.my.id"
              class="w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-stitch-magenta"
              :class="isDark ? 'bg-[#111417] border-[#2a2d31] text-white placeholder-[#646a74]' : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'"
            />
          </div>

          <!-- Password Input -->
          <div class="space-y-1.5">
            <label class="block text-xs font-mono uppercase font-semibold text-on-surface">Kata Sandi</label>
            <input 
              v-model="loginForm.password"
              type="password" 
              required
              placeholder="••••••••••••"
              class="w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 focus:ring-stitch-magenta"
              :class="isDark ? 'bg-[#111417] border-[#2a2d31] text-white placeholder-[#646a74]' : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'"
            />
          </div>

          <button 
            type="submit" 
            :disabled="loggingIn"
            class="btn-stitch-primary w-full py-3.5 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <span v-if="loggingIn" class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></span>
            <span>{{ loggingIn ? 'Memverifikasi...' : 'Masuk ke Dashboard' }}</span>
          </button>
        </form>

        <div class="text-center">
          <router-link to="/kegiatan" class="text-xs font-mono text-on-surface-variant hover:underline flex items-center justify-center gap-1">
            <span class="material-symbols-outlined text-sm">arrow_back</span>
            <span>Kembali ke Halaman Kalender Publik</span>
          </router-link>
        </div>
      </div>

      <!-- STATE 2: AUTHENTICATED ADMIN DASHBOARD -->
      <div v-else class="space-y-8">
        
        <!-- Top Action Bar -->
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-2xl border"
          :class="isDark ? 'bg-[#191c1f] border-[#2a2d31]' : 'bg-white border-slate-200 shadow-sm'"
        >
          <div class="space-y-1">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              <span class="text-xs font-mono uppercase font-semibold text-stitch-magenta">Sesi Terotentikasi</span>
            </div>
            <h1 class="text-2xl sm:text-3xl font-headline font-semibold">Kelola Kalender Kegiatan</h1>
            <p class="text-xs text-on-surface-variant font-mono">
              Admin: {{ currentAdmin?.name || 'Tim Nexa' }} ({{ currentAdmin?.email }})
            </p>
          </div>

          <div class="flex items-center gap-2.5 flex-wrap">
            <router-link 
              to="/kegiatan" 
              target="_blank"
              class="px-3.5 py-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all"
              :class="isDark ? 'bg-[#272a2d] border-[#484740] text-white hover:bg-[#323538]' : 'bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200'"
            >
              <span class="material-symbols-outlined text-[16px]">open_in_new</span>
              <span>Lihat Kalender Publik</span>
            </router-link>

            <button 
              @click="openCreateModal"
              class="btn-stitch-primary px-4 py-2 text-xs font-bold flex items-center gap-1.5"
            >
              <span class="material-symbols-outlined text-[16px]">add_circle</span>
              <span>Tambah Kegiatan</span>
            </button>

            <button 
              @click="handleLogout"
              class="px-3.5 py-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all"
              :class="isDark ? 'border-red-500/30 text-red-400 hover:bg-red-500/10' : 'border-red-200 text-red-600 hover:bg-red-50'"
            >
              <span class="material-symbols-outlined text-[16px]">logout</span>
              <span>Keluar</span>
            </button>
          </div>
        </div>

        <!-- Success/Error Notifications -->
        <div v-if="actionMessage" class="p-4 rounded-xl border text-xs font-medium flex items-center justify-between"
          :class="actionMessage.type === 'success' 
            ? (isDark ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-emerald-50 border-emerald-200 text-emerald-700')
            : (isDark ? 'bg-red-500/10 border-red-500/30 text-red-400' : 'bg-red-50 border-red-200 text-red-700')"
        >
          <span>{{ actionMessage.text }}</span>
          <button @click="actionMessage = null" class="material-symbols-outlined text-sm">close</button>
        </div>

        <!-- Event List Table -->
        <div class="rounded-2xl border overflow-hidden"
          :class="isDark ? 'bg-[#191c1f] border-[#2a2d31]' : 'bg-white border-slate-200 shadow-sm'"
        >
          <div class="p-5 border-b border-outline-variant flex items-center justify-between">
            <h2 class="font-headline font-semibold text-lg">Daftar Seluruh Kegiatan ({{ events.length }})</h2>
            <button 
              @click="loadEvents" 
              class="text-xs font-mono flex items-center gap-1 transition-colors"
              :class="isDark ? 'text-on-surface-variant hover:text-white' : 'text-slate-500 hover:text-slate-900'"
            >
              <span class="material-symbols-outlined text-sm">refresh</span>
              <span>Segarkan</span>
            </button>
          </div>

          <div v-if="loading" class="py-16 text-center text-xs font-mono text-on-surface-variant">
            Memuat data kegiatan...
          </div>

          <div v-else-if="events.length === 0" class="py-16 text-center text-xs font-mono text-on-surface-variant">
            Belum ada kegiatan. Klik tombol "Tambah Kegiatan" di atas untuk membuat jadwal pertama.
          </div>

          <div v-else class="overflow-x-auto">
            <table class="w-full text-left text-xs">
              <thead class="border-b border-outline-variant font-mono text-on-surface-variant"
                :class="isDark ? 'bg-[#111417]' : 'bg-slate-50'"
              >
                <tr>
                  <th class="p-4">Tanggal &amp; Waktu</th>
                  <th class="p-4">Judul Kegiatan</th>
                  <th class="p-4">Kategori</th>
                  <th class="p-4">Lokasi</th>
                  <th class="p-4">Status</th>
                  <th class="p-4 text-right">Aksi</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-outline-variant">
                <tr v-for="item in events" :key="item.id" 
                  class="transition-colors"
                  :class="isDark ? 'hover:bg-[#272a2d]/50' : 'hover:bg-slate-50'"
                >
                  <!-- Date -->
                  <td class="p-4 font-mono whitespace-nowrap">
                    <div class="font-semibold">{{ formatIsoDate(item.event_date) }}</div>
                    <div class="text-[11px] text-on-surface-variant">{{ formatTime(item.start_time) }} - {{ item.end_time ? formatTime(item.end_time) : 'selesai' }}</div>
                  </td>

                  <!-- Title -->
                  <td class="p-4 max-w-xs">
                    <div class="font-semibold text-sm">{{ item.title }}</div>
                    <div class="text-[11px] text-on-surface-variant truncate mt-0.5">{{ item.description }}</div>
                  </td>

                  <!-- Category -->
                  <td class="p-4 whitespace-nowrap">
                    <span class="px-2 py-0.5 rounded-full text-[10px] font-mono uppercase font-semibold border"
                      :class="isDark ? 'bg-[#272a2d] border-[#484740]' : 'bg-slate-100 border-slate-200'"
                    >
                      {{ item.category }}
                    </span>
                  </td>

                  <!-- Location -->
                  <td class="p-4 whitespace-nowrap">
                    <span class="font-mono text-[11px]">{{ item.location_name || item.location_type }}</span>
                  </td>

                  <!-- Publish Status -->
                  <td class="p-4 whitespace-nowrap">
                    <button
                      @click="togglePublish(item)"
                      class="px-2 py-1 rounded text-[11px] font-mono font-semibold flex items-center gap-1 border transition-all"
                      :class="item.is_published 
                        ? (isDark ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-emerald-50 border-emerald-200 text-emerald-700')
                        : (isDark ? 'bg-amber-500/10 border-amber-500/30 text-amber-400' : 'bg-amber-50 border-amber-200 text-amber-700')"
                    >
                      <span class="material-symbols-outlined text-[14px]">
                        {{ item.is_published ? 'visibility' : 'visibility_off' }}
                      </span>
                      <span>{{ item.is_published ? 'Publik' : 'Draft' }}</span>
                    </button>
                  </td>

                  <!-- Actions -->
                  <td class="p-4 text-right whitespace-nowrap space-x-2">
                    <button 
                      @click="openEditModal(item)"
                      class="px-2.5 py-1.5 rounded-lg border text-xs font-semibold hover:border-stitch-magenta transition-all"
                      :class="isDark ? 'bg-[#272a2d] border-[#484740] text-white' : 'bg-slate-100 border-slate-200 text-slate-800'"
                    >
                      Edit
                    </button>

                    <button 
                      @click="handleDelete(item)"
                      class="px-2.5 py-1.5 rounded-lg border text-xs font-semibold hover:bg-red-500/10 hover:border-red-500 transition-all text-red-500"
                      :class="isDark ? 'border-[#484740]' : 'border-slate-200'"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- CREATE / EDIT MODAL -->
        <div 
          v-if="showModal" 
          class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto"
          @click.self="showModal = false"
        >
          <div 
            class="max-w-2xl w-full rounded-2xl border p-6 sm:p-8 space-y-6 shadow-2xl relative my-8"
            :class="isDark ? 'bg-[#191c1f] border-[#2a2d31] text-white' : 'bg-white border-slate-200 text-slate-900'"
          >
            <!-- Modal Header -->
            <div class="flex items-center justify-between border-b border-outline-variant pb-4">
              <div>
                <h3 class="text-xl font-headline font-semibold">
                  {{ isEditing ? 'Edit Jadwal Kegiatan' : 'Tambah Jadwal Kegiatan Baru' }}
                </h3>
                <p class="text-xs text-on-surface-variant font-mono">
                  Isi informasi kegiatan dengan jelas untuk pengunjung web.
                </p>
              </div>

              <button 
                @click="showModal = false"
                class="w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                :class="isDark ? 'text-on-surface-variant hover:text-white' : 'text-slate-400 hover:text-slate-900'"
                aria-label="Tutup Modal"
              >
                <span class="material-symbols-outlined text-lg">close</span>
              </button>
            </div>

            <!-- Form -->
            <form @submit.prevent="saveEvent" class="space-y-4 text-xs font-mono">
              
              <!-- Title -->
              <div class="space-y-1">
                <label class="block font-semibold uppercase">Judul Kegiatan *</label>
                <input 
                  v-model="form.title" 
                  type="text" 
                  required
                  placeholder="Contoh: Workshop Vue 3 Architecture"
                  class="w-full px-3.5 py-2.5 rounded-xl border text-sm font-sans focus:outline-none focus:ring-2 focus:ring-stitch-magenta"
                  :class="isDark ? 'bg-[#111417] border-[#2a2d31] text-white' : 'bg-slate-50 border-slate-200 text-slate-900'"
                />
              </div>

              <!-- Category & Color -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1">
                  <label class="block font-semibold uppercase">Kategori Kegiatan *</label>
                  <select 
                    v-model="form.category" 
                    required
                    class="w-full px-3.5 py-2.5 rounded-xl border text-sm font-sans focus:outline-none focus:ring-2 focus:ring-stitch-magenta"
                    :class="isDark ? 'bg-[#111417] border-[#2a2d31] text-white' : 'bg-slate-50 border-slate-200 text-slate-900'"
                  >
                    <option value="Rapat Tim">Rapat Tim</option>
                    <option value="Kompetisi">Kompetisi</option>
                    <option value="Workshop">Workshop</option>
                    <option value="Tech Sharing">Tech Sharing</option>
                    <option value="Konsultasi">Konsultasi</option>
                    <option value="Rilis Produk">Rilis Produk</option>
                    <option value="Event">Event Umum</option>
                    <option v-if="isCustomCategory(form.category)" :value="form.category">{{ form.category }} (Kustom)</option>
                  </select>
                </div>

                <div class="space-y-1">
                  <label class="block font-semibold uppercase">Aksen Warna</label>
                  <select 
                    v-model="form.color" 
                    class="w-full px-3.5 py-2.5 rounded-xl border text-sm font-sans focus:outline-none focus:ring-2 focus:ring-stitch-magenta"
                    :class="isDark ? 'bg-[#111417] border-[#2a2d31] text-white' : 'bg-slate-50 border-slate-200 text-slate-900'"
                  >
                    <option value="purple">Purple (Lembayung)</option>
                    <option value="magenta">Magenta (Pink Neon)</option>
                    <option value="cyan">Cyan (Biru Muda)</option>
                    <option value="amber">Amber (Emas Hangat)</option>
                    <option value="emerald">Emerald (Hijau)</option>
                  </select>
                </div>
              </div>

              <!-- Date & Times -->
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div class="space-y-1">
                  <label class="block font-semibold uppercase">Tanggal *</label>
                  <input 
                    v-model="form.event_date" 
                    type="date" 
                    required
                    class="w-full px-3.5 py-2.5 rounded-xl border text-sm font-sans focus:outline-none focus:ring-2 focus:ring-stitch-magenta"
                    :class="isDark ? 'bg-[#111417] border-[#2a2d31] text-white' : 'bg-slate-50 border-slate-200 text-slate-900'"
                  />
                </div>

                <div class="space-y-1">
                  <label class="block font-semibold uppercase">Jam Mulai *</label>
                  <input 
                    v-model="form.start_time" 
                    type="time" 
                    required
                    class="w-full px-3.5 py-2.5 rounded-xl border text-sm font-sans focus:outline-none focus:ring-2 focus:ring-stitch-magenta"
                    :class="isDark ? 'bg-[#111417] border-[#2a2d31] text-white' : 'bg-slate-50 border-slate-200 text-slate-900'"
                  />
                </div>

                <div class="space-y-1">
                  <label class="block font-semibold uppercase">Jam Selesai</label>
                  <input 
                    v-model="form.end_time" 
                    type="time" 
                    class="w-full px-3.5 py-2.5 rounded-xl border text-sm font-sans focus:outline-none focus:ring-2 focus:ring-stitch-magenta"
                    :class="isDark ? 'bg-[#111417] border-[#2a2d31] text-white' : 'bg-slate-50 border-slate-200 text-slate-900'"
                  />
                </div>
              </div>

              <!-- Location Type & Platform Name -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1">
                  <label class="block font-semibold uppercase">Tipe Lokasi</label>
                  <select 
                    v-model="form.location_type" 
                    class="w-full px-3.5 py-2.5 rounded-xl border text-sm font-sans focus:outline-none focus:ring-2 focus:ring-stitch-magenta"
                    :class="isDark ? 'bg-[#111417] border-[#2a2d31] text-white' : 'bg-slate-50 border-slate-200 text-slate-900'"
                  >
                    <option value="online">Online</option>
                    <option value="offline">Offline / Tatap Muka</option>
                    <option value="internal">Internal Nexa</option>
                  </select>
                </div>

                <div class="space-y-1">
                  <label class="block font-semibold uppercase">Nama Platform / Lokasi</label>
                  <input 
                    v-model="form.location_name" 
                    type="text" 
                    placeholder="Contoh: Google Meet, Ruang Meeting Studio"
                    class="w-full px-3.5 py-2.5 rounded-xl border text-sm font-sans focus:outline-none focus:ring-2 focus:ring-stitch-magenta"
                    :class="isDark ? 'bg-[#111417] border-[#2a2d31] text-white' : 'bg-slate-50 border-slate-200 text-slate-900'"
                  />
                </div>
              </div>

              <!-- Link -->
              <div class="space-y-1">
                <label class="block font-semibold uppercase">Tautan Registrasi / Meeting (Opsional)</label>
                <input 
                  v-model="form.link" 
                  type="url" 
                  placeholder="https://meet.google.com/..."
                  class="w-full px-3.5 py-2.5 rounded-xl border text-sm font-sans focus:outline-none focus:ring-2 focus:ring-stitch-magenta"
                  :class="isDark ? 'bg-[#111417] border-[#2a2d31] text-white' : 'bg-slate-50 border-slate-200 text-slate-900'"
                />
              </div>

              <!-- Description -->
              <div class="space-y-1">
                <label class="block font-semibold uppercase">Deskripsi &amp; Detail Acara</label>
                <textarea 
                  v-model="form.description" 
                  rows="3"
                  placeholder="Jelaskan ringkasan agenda atau panduan bagi peserta..."
                  class="w-full px-3.5 py-2.5 rounded-xl border text-sm font-sans focus:outline-none focus:ring-2 focus:ring-stitch-magenta"
                  :class="isDark ? 'bg-[#111417] border-[#2a2d31] text-white' : 'bg-slate-50 border-slate-200 text-slate-900'"
                ></textarea>
              </div>

              <!-- Publish status toggle -->
              <div class="flex items-center gap-2 pt-2">
                <input 
                  id="is_published" 
                  v-model="form.is_published" 
                  type="checkbox" 
                  class="w-4 h-4 rounded text-stitch-magenta focus:ring-stitch-magenta"
                />
                <label for="is_published" class="text-xs font-semibold cursor-pointer">
                  Publikasikan langsung agar terlihat oleh pengunjung web
                </label>
              </div>

              <!-- Modal Actions -->
              <div class="pt-4 border-t border-outline-variant flex items-center justify-end gap-3">
                <button 
                  type="button" 
                  @click="showModal = false"
                  class="px-4 py-2.5 rounded-xl border text-xs font-semibold"
                  :class="isDark ? 'bg-[#272a2d] border-[#484740] text-white' : 'bg-slate-100 border-slate-200 text-slate-700'"
                >
                  Batal
                </button>

                <button 
                  type="submit" 
                  :disabled="saving"
                  class="btn-stitch-primary px-5 py-2.5 text-xs font-bold uppercase tracking-wider flex items-center gap-2"
                >
                  <span v-if="saving" class="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"></span>
                  <span>{{ saving ? 'Menyimpan...' : (isEditing ? 'Simpan Perubahan' : 'Terbitkan Kegiatan') }}</span>
                </button>
              </div>

            </form>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { isDark } from '../utils/theme'
import { 
  currentAdmin, 
  loginAdmin, 
  clearAdminSession, 
  checkAdminAuth, 
  fetchEvents, 
  createEvent, 
  updateEvent, 
  deleteEvent 
} from '../services/calendarService'

const isAuthenticated = ref(false)
const loggingIn = ref(false)
const loginError = ref(null)

const loginForm = reactive({
  email: '',
  password: ''
})

const events = ref([])
const loading = ref(false)
const showModal = ref(false)
const isEditing = ref(false)
const saving = ref(false)
const actionMessage = ref(null)

const form = reactive({
  id: null,
  title: '',
  description: '',
  category: 'Workshop',
  color: 'purple',
  event_date: '',
  start_time: '19:00',
  end_time: '20:30',
  location_type: 'online',
  location_name: 'Google Meet',
  link: '',
  is_published: true
})

onMounted(async () => {
  const isAuthed = await checkAdminAuth()
  isAuthenticated.value = isAuthed
  if (isAuthed) {
    loadEvents()
  }
})

async function handleLogin() {
  loggingIn.value = true
  loginError.value = null
  try {
    await loginAdmin(loginForm.email, loginForm.password)
    isAuthenticated.value = true
    loadEvents()
  } catch (err) {
    loginError.value = err.message
  } finally {
    loggingIn.value = false
  }
}

function handleLogout() {
  clearAdminSession()
  isAuthenticated.value = false
  events.value = []
}

async function loadEvents() {
  loading.value = true
  try {
    events.value = await fetchEvents({ showAll: true })
  } catch (err) {
    console.error('Error fetching admin events:', err)
  } finally {
    loading.value = false
  }
}

function openCreateModal() {
  isEditing.value = false
  form.id = null
  form.title = ''
  form.description = ''
  form.category = 'Workshop'
  form.color = 'magenta'
  
  // Default to tomorrow (local timezone safe)
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const yyyy = tomorrow.getFullYear()
  const mm = String(tomorrow.getMonth() + 1).padStart(2, '0')
  const dd = String(tomorrow.getDate()).padStart(2, '0')
  form.event_date = `${yyyy}-${mm}-${dd}`
  
  form.start_time = '19:30'
  form.end_time = '21:00'
  form.location_type = 'online'
  form.location_name = 'Google Meet'
  form.link = ''
  form.is_published = true
  showModal.value = true
}

function openEditModal(item) {
  isEditing.value = true
  form.id = item.id
  form.title = item.title
  form.description = item.description || ''
  form.category = item.category || 'Workshop'
  form.color = item.color || 'purple'
  form.event_date = item.event_date ? item.event_date.split('T')[0] : ''
  form.start_time = item.start_time ? item.start_time.slice(0, 5) : '19:00'
  form.end_time = item.end_time ? item.end_time.slice(0, 5) : ''
  form.location_type = item.location_type || 'online'
  form.location_name = item.location_name || ''
  form.link = item.link || ''
  form.is_published = !!item.is_published
  showModal.value = true
}

async function saveEvent() {
  saving.value = true
  actionMessage.value = null
  try {
    if (isEditing.value) {
      await updateEvent({ ...form })
      actionMessage.value = { type: 'success', text: 'Jadwal kegiatan berhasil diperbarui!' }
    } else {
      await createEvent({ ...form })
      actionMessage.value = { type: 'success', text: 'Jadwal kegiatan baru berhasil ditambahkan!' }
    }
    showModal.value = false
    await loadEvents()
  } catch (err) {
    actionMessage.value = { type: 'error', text: 'Gagal menyimpan: ' + err.message }
  } finally {
    saving.value = false
  }
}

async function togglePublish(item) {
  try {
    await updateEvent({
      id: item.id,
      is_published: !item.is_published
    })
    item.is_published = !item.is_published
    actionMessage.value = { 
      type: 'success', 
      text: `Status kegiatan "${item.title}" diubah menjadi ${item.is_published ? 'Publik' : 'Draft'}.` 
    }
  } catch (err) {
    actionMessage.value = { type: 'error', text: 'Gagal mengubah status: ' + err.message }
  }
}

async function handleDelete(item) {
  if (!confirm(`Apakah Anda yakin ingin menghapus kegiatan "${item.title}"?`)) return
  try {
    await deleteEvent(item.id)
    actionMessage.value = { type: 'success', text: 'Kegiatan berhasil dihapus.' }
    await loadEvents()
  } catch (err) {
    actionMessage.value = { type: 'error', text: 'Gagal menghapus: ' + err.message }
  }
}

const defaultCategories = ['Rapat Tim', 'Kompetisi', 'Workshop', 'Tech Sharing', 'Konsultasi', 'Rilis Produk', 'Event']
function isCustomCategory(cat) {
  return cat && !defaultCategories.includes(cat)
}

function formatIsoDate(dateStr) {
  if (!dateStr) return '-'
  const cleanStr = String(dateStr).split('T')[0]
  const parts = cleanStr.split('-').map(Number)
  if (parts.length === 3 && !parts.some(isNaN)) {
    const d = new Date(parts[0], parts[1] - 1, parts[2], 12, 0, 0)
    return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
  }
  const d = new Date(dateStr)
  return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
}

function formatTime(timeStr) {
  if (!timeStr) return ''
  return timeStr.slice(0, 5)
}
</script>
