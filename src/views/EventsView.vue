<template>
  <div class="py-16 sm:py-24 transition-colors duration-300 min-h-[85vh]">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">

      <!-- Header with Stitch Overline -->
      <div class="text-center max-w-3xl mx-auto space-y-4">
        <div 
          class="inline-flex items-center px-4 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider font-mono shadow-sm"
          :class="isDark ? 'border-[#C239D8]/40 bg-[#191c1f] text-stitch-magenta-light' : 'border-fuchsia-200/90 bg-white/95 text-slate-800 shadow-[0_2px_12px_rgba(192,38,211,0.08)]'"
        >
          <span class="w-1.5 h-1.5 rounded-full mr-2" :class="isDark ? 'bg-stitch-magenta' : 'bg-fuchsia-600'"></span>
          <span>Agenda &amp; Jadwal Kegiatan Resmi</span>
        </div>

        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-headline font-semibold tracking-tight">
          Kalender Kegiatan Nexa
        </h1>
        <p class="text-on-surface-variant text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          Ikuti workshop rekayasa piranti lunak, sesi live tech sharing, jadwal rilis sistem, dan slot konsultasi digital terbuka bersama tim Nexa Digital Agency.
        </p>
      </div>

      <!-- Controls & Filter Toolbar -->
      <div class="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl border"
        :class="isDark ? 'bg-[#191c1f] border-[#2a2d31]' : 'bg-white/95 border-slate-200/90 shadow-sm'"
      >
        <!-- Category Filter Pills -->
        <div class="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none text-xs font-medium">
          <button
            v-for="cat in categories"
            :key="cat.id"
            @click="selectedCategory = cat.id"
            class="px-3.5 py-2 rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5"
            :class="selectedCategory === cat.id
              ? (isDark ? 'bg-white text-black font-semibold' : 'bg-[#161c24] text-white font-semibold')
              : (isDark ? 'text-on-surface-variant hover:text-white hover:bg-[#272a2d]' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100')"
          >
            <span>{{ cat.label }}</span>
            <span v-if="cat.id !== 'all'" class="text-[10px] opacity-70">
              ({{ countCategory(cat.id) }})
            </span>
          </button>
        </div>

        <!-- Actions: Download All .ICS & View Switcher -->
        <div class="flex items-center gap-2 self-end md:self-auto flex-wrap">
          <button
            @click="downloadAll"
            class="px-3 py-1.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all"
            :class="isDark ? 'bg-[#272a2d] border-[#484740] text-stitch-magenta-light hover:bg-[#323538]' : 'bg-white border-slate-200 text-fuchsia-700 hover:bg-slate-50 shadow-sm'"
            title="Unduh seluruh kalender rapat & deadline (.ics)"
          >
            <span class="material-symbols-outlined text-[16px]">download</span>
            <span>Unduh Semua (.ICS)</span>
          </button>

          <!-- View Switcher (Calendar Grid vs Agenda List) -->
          <div class="flex items-center gap-1.5 p-1 rounded-xl border text-xs"
            :class="isDark ? 'bg-[#111417] border-[#2a2d31]' : 'bg-slate-100 border-slate-200'"
          >
            <button
              @click="viewMode = 'agenda'"
              class="px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all font-medium"
              :class="viewMode === 'agenda'
                ? (isDark ? 'bg-[#272a2d] text-white shadow-sm' : 'bg-white text-slate-900 shadow-sm')
                : (isDark ? 'text-on-surface-variant hover:text-white' : 'text-slate-500 hover:text-slate-900')"
            >
              <span class="material-symbols-outlined text-[16px]">view_agenda</span>
              <span>Daftar Agenda</span>
            </button>

            <button
              @click="viewMode = 'calendar'"
              class="px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all font-medium"
              :class="viewMode === 'calendar'
                ? (isDark ? 'bg-[#272a2d] text-white shadow-sm' : 'bg-white text-slate-900 shadow-sm')
                : (isDark ? 'text-on-surface-variant hover:text-white' : 'text-slate-500 hover:text-slate-900')"
            >
              <span class="material-symbols-outlined text-[16px]">calendar_month</span>
              <span>Kalender Bulanan</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="loading" class="py-20 text-center space-y-4">
        <div class="inline-block w-8 h-8 border-2 border-stitch-magenta border-t-transparent rounded-full animate-spin"></div>
        <p class="text-xs font-mono text-on-surface-variant">Memuat jadwal kegiatan resmi...</p>
      </div>

      <!-- Error State -->
      <div v-else-if="error" class="p-8 rounded-2xl border text-center space-y-4"
        :class="isDark ? 'bg-[#191c1f] border-red-500/30 text-red-400' : 'bg-red-50 border-red-200 text-red-700'"
      >
        <span class="material-symbols-outlined text-4xl">error_outline</span>
        <p class="text-sm">{{ error }}</p>
        <button @click="loadEvents" class="px-4 py-2 rounded-xl text-xs font-bold bg-stitch-magenta text-white hover:opacity-90">
          Coba Muat Ulang
        </button>
      </div>

      <!-- Empty State -->
      <div v-else-if="filteredEvents.length === 0" class="py-16 text-center space-y-3 p-8 rounded-2xl border"
        :class="isDark ? 'bg-[#191c1f] border-[#2a2d31]' : 'bg-white/95 border-slate-200'"
      >
        <span class="material-symbols-outlined text-4xl text-on-surface-variant">event_busy</span>
        <h3 class="text-lg font-semibold">Belum Ada Kegiatan pada Kategori Ini</h3>
        <p class="text-xs text-on-surface-variant max-w-md mx-auto">
          Silakan pilih kategori kegiatan lain atau periksa kembali jadwal dalam beberapa waktu ke depan.
        </p>
      </div>

      <!-- Content: 1. Agenda List Mode -->
      <div v-else-if="viewMode === 'agenda'" class="space-y-4">
        <div 
          v-for="event in filteredEvents" 
          :key="event.id"
          class="p-6 sm:p-8 rounded-2xl border transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:border-stitch-purple/50"
          :class="isDark 
            ? 'bg-[#191c1f] border-[#2a2d31] hover:shadow-[0_0_25px_rgba(123,104,238,0.12)]' 
            : 'bg-white/95 border-slate-200/90 shadow-[0_4px_20px_rgba(15,23,42,0.03)] hover:shadow-[0_12px_32px_rgba(124,58,237,0.07)]'"
        >
          <!-- Left: Date Badge & Title -->
          <div class="flex items-start gap-5">
            <!-- Calendar Date Box -->
            <div 
              class="w-16 h-18 sm:w-20 sm:h-20 rounded-xl border flex flex-col items-center justify-center shrink-0 text-center select-none"
              :class="isDark ? 'bg-[#111417] border-[#2a2d31]' : 'bg-slate-50 border-slate-200 shadow-sm'"
            >
              <span class="text-[11px] font-mono uppercase font-bold tracking-wider" :class="getColorClass(event.color).text">
                {{ formatMonthShort(event.event_date) }}
              </span>
              <span class="text-2xl sm:text-3xl font-headline font-bold" :class="isDark ? 'text-white' : 'text-slate-900'">
                {{ formatDayNumber(event.event_date) }}
              </span>
              <span class="text-[10px] font-mono text-on-surface-variant">
                {{ formatDayName(event.event_date) }}
              </span>
            </div>

            <!-- Event Information -->
            <div class="space-y-2">
              <div class="flex items-center gap-2 flex-wrap">
                <!-- Category Badge -->
                <span 
                  class="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold uppercase tracking-wider border"
                  :class="getColorClass(event.color).badge"
                >
                  {{ event.category }}
                </span>

                <!-- Location Badge -->
                <span 
                  class="px-2 py-0.5 rounded text-[11px] font-mono flex items-center gap-1 border"
                  :class="isDark ? 'bg-[#272a2d] border-[#484740] text-on-surface-variant' : 'bg-slate-100 border-slate-200 text-slate-700'"
                >
                  <span class="material-symbols-outlined text-[13px]">
                    {{ event.location_type === 'online' ? 'videocam' : 'location_on' }}
                  </span>
                  <span>{{ event.location_name || (event.location_type === 'online' ? 'Online' : 'Kantor Nexa') }}</span>
                </span>

                <!-- Relative Time Status -->
                <span class="text-xs font-mono font-medium" :class="getColorClass(event.color).text">
                  {{ getRelativeDaysText(event.event_date) }}
                </span>
              </div>

              <h2 class="text-xl sm:text-2xl font-headline font-semibold group-hover:text-stitch-magenta-light transition-colors">
                {{ event.title }}
              </h2>

              <p class="text-xs sm:text-sm text-on-surface-variant line-clamp-2 max-w-2xl leading-relaxed">
                {{ event.description }}
              </p>

              <!-- Time display -->
              <div class="flex items-center gap-4 text-xs font-mono text-on-surface-variant pt-1">
                <span class="flex items-center gap-1">
                  <span class="material-symbols-outlined text-[15px]">schedule</span>
                  <span>{{ formatTime(event.start_time) }} - {{ event.end_time ? formatTime(event.end_time) : 'Selesai' }} WIB</span>
                </span>
              </div>
            </div>
          </div>

          <!-- Right: Actions -->
          <div class="flex items-center gap-2.5 pt-4 md:pt-0 border-t md:border-t-0 border-outline-variant shrink-0">
            <button
              @click="openDetail(event)"
              class="px-4 py-2.5 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition-all"
              :class="isDark ? 'bg-[#272a2d] border-[#484740] text-white hover:bg-[#323538]' : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50'"
            >
              <span class="material-symbols-outlined text-[16px]">info</span>
              <span>Detail</span>
            </button>

            <a
              :href="getGoogleCalendarUrl(event)"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-stitch-primary px-4 py-2.5 text-xs font-bold flex items-center gap-1.5"
              title="Simpan ke Google Calendar"
            >
              <span class="material-symbols-outlined text-[16px]">event</span>
              <span>+ Kalender</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Content: 2. Monthly Calendar Grid Mode -->
      <div v-else-if="viewMode === 'calendar'" class="p-6 sm:p-8 rounded-2xl border space-y-6"
        :class="isDark ? 'bg-[#191c1f] border-[#2a2d31]' : 'bg-white/95 border-slate-200/90 shadow-sm'"
      >
        <!-- Month Navigation Header -->
        <div class="flex items-center justify-between pb-4 border-b border-outline-variant">
          <div class="flex items-center gap-3">
            <h2 class="text-2xl font-headline font-semibold">
              {{ currentMonthName }} {{ currentYear }}
            </h2>
            <button
              @click="goToToday"
              class="text-xs font-mono px-3 py-1 rounded-lg border transition-all"
              :class="isDark ? 'bg-[#272a2d] border-[#484740] text-white' : 'bg-slate-100 border-slate-200 text-slate-700'"
            >
              Bulan Ini
            </button>
          </div>

          <div class="flex items-center gap-2">
            <button
              @click="prevMonth"
              class="w-9 h-9 rounded-lg border flex items-center justify-center transition-all"
              :class="isDark ? 'bg-[#111417] border-[#2a2d31] hover:bg-[#272a2d]' : 'bg-slate-50 border-slate-200 hover:bg-slate-100'"
              aria-label="Bulan Sebelumnya"
            >
              <span class="material-symbols-outlined text-lg">chevron_left</span>
            </button>
            <button
              @click="nextMonth"
              class="w-9 h-9 rounded-lg border flex items-center justify-center transition-all"
              :class="isDark ? 'bg-[#111417] border-[#2a2d31] hover:bg-[#272a2d]' : 'bg-slate-50 border-slate-200 hover:bg-slate-100'"
              aria-label="Bulan Berikutnya"
            >
              <span class="material-symbols-outlined text-lg">chevron_right</span>
            </button>
          </div>
        </div>

        <!-- Weekday Headers -->
        <div class="grid grid-cols-7 gap-1 text-center font-mono text-xs font-semibold text-on-surface-variant pb-2">
          <span>Min</span>
          <span>Sen</span>
          <span>Sel</span>
          <span>Rab</span>
          <span>Kam</span>
          <span>Jum</span>
          <span>Sab</span>
        </div>

        <!-- Calendar Days Grid -->
        <div class="grid grid-cols-7 gap-1.5 sm:gap-2">
          <div
            v-for="(day, index) in calendarDays"
            :key="index"
            class="min-h-[90px] sm:min-h-[110px] p-2 rounded-xl border flex flex-col transition-all relative"
            :class="[
              day.isCurrentMonth
                ? (isDark ? 'bg-[#111417] border-[#2a2d31]' : 'bg-white border-slate-200')
                : (isDark ? 'bg-[#0b0e11]/50 border-transparent opacity-40' : 'bg-slate-50/60 border-transparent opacity-40'),
              day.isToday ? (isDark ? 'ring-1 ring-stitch-magenta' : 'ring-1 ring-violet-500 bg-violet-50/20') : ''
            ]"
          >
            <!-- Day Number -->
            <div class="flex items-center justify-between">
              <span 
                class="text-xs font-mono font-semibold"
                :class="day.isToday ? (isDark ? 'text-stitch-magenta font-bold' : 'text-violet-600 font-bold') : ''"
              >
                {{ day.dayNumber }}
              </span>
              <span v-if="day.isToday" class="text-[9px] uppercase font-mono px-1 rounded bg-stitch-magenta/20 text-stitch-magenta-light font-bold">
                Hari Ini
              </span>
            </div>

            <!-- Day Events Pills -->
            <div class="mt-1.5 space-y-1 flex-grow overflow-y-auto max-h-[70px] scrollbar-none">
              <button
                v-for="ev in day.events"
                :key="ev.id"
                @click="openDetail(ev)"
                class="w-full text-left px-1.5 py-0.5 rounded text-[10px] font-medium truncate block border transition-transform hover:scale-[1.02]"
                :class="getColorClass(ev.color).pill"
              >
                {{ ev.title }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Detail Modal -->
      <div 
        v-if="activeModalEvent" 
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        @click.self="activeModalEvent = null"
      >
        <div 
          class="max-w-lg w-full rounded-2xl border p-6 sm:p-8 space-y-6 shadow-2xl relative transition-all"
          :class="isDark ? 'bg-[#191c1f] border-[#2a2d31] text-white' : 'bg-white border-slate-200 text-slate-900'"
        >
          <!-- Close Button -->
          <button
            @click="activeModalEvent = null"
            class="absolute top-5 right-5 text-on-surface-variant hover:text-white w-8 h-8 rounded-full flex items-center justify-center transition-colors"
          >
            <span class="material-symbols-outlined text-xl">close</span>
          </button>

          <!-- Modal Header -->
          <div class="space-y-3 pr-8">
            <div class="flex items-center gap-2 flex-wrap">
              <span 
                class="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold uppercase tracking-wider border"
                :class="getColorClass(activeModalEvent.color).badge"
              >
                {{ activeModalEvent.category }}
              </span>
              <span class="text-xs font-mono text-on-surface-variant">
                {{ getRelativeDaysText(activeModalEvent.event_date) }}
              </span>
            </div>

            <h3 class="text-2xl font-headline font-semibold leading-tight">
              {{ activeModalEvent.title }}
            </h3>
          </div>

          <!-- Event Meta Details -->
          <div class="p-4 rounded-xl border space-y-2.5 text-xs font-mono"
            :class="isDark ? 'bg-[#111417] border-[#2a2d31]' : 'bg-slate-50 border-slate-200'"
          >
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-base text-stitch-magenta">calendar_today</span>
              <span>{{ formatFullDate(activeModalEvent.event_date) }}</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-base text-stitch-purple">schedule</span>
              <span>{{ formatTime(activeModalEvent.start_time) }} - {{ activeModalEvent.end_time ? formatTime(activeModalEvent.end_time) : 'Selesai' }} WIB</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="material-symbols-outlined text-base text-stitch-cyan">location_on</span>
              <span>{{ activeModalEvent.location_name || (activeModalEvent.location_type === 'online' ? 'Online' : 'Kantor Nexa Digital') }}</span>
            </div>
            <div v-if="activeModalEvent.link" class="flex items-center gap-2 pt-1 border-t border-outline-variant/60">
              <span class="material-symbols-outlined text-base text-emerald-400">link</span>
              <a :href="activeModalEvent.link" target="_blank" rel="noopener noreferrer" class="text-stitch-cyan underline truncate hover:text-white">
                {{ activeModalEvent.link }}
              </a>
            </div>
          </div>

          <!-- Description -->
          <div class="space-y-1.5 text-sm text-on-surface-variant leading-relaxed">
            <h4 class="font-semibold text-xs font-mono uppercase text-on-surface">Deskripsi Kegiatan</h4>
            <p class="whitespace-pre-line">{{ activeModalEvent.description || 'Tidak ada deskripsi tambahan untuk kegiatan ini.' }}</p>
          </div>

          <!-- Actions -->
          <div class="pt-2 flex flex-col sm:flex-row gap-2.5">
            <a
              :href="getGoogleCalendarUrl(activeModalEvent)"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-stitch-primary flex-1 py-3 text-xs font-bold flex items-center justify-center gap-2"
            >
              <span class="material-symbols-outlined text-[16px]">calendar_add_on</span>
              <span>Tambah ke Google Calendar</span>
            </a>

            <button
              @click="downloadIcsFile(activeModalEvent)"
              class="px-4 py-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all"
              :class="isDark ? 'bg-[#272a2d] border-[#484740] hover:bg-[#323538] text-white' : 'bg-slate-100 border-slate-200 hover:bg-slate-200 text-slate-800'"
            >
              <span class="material-symbols-outlined text-[16px]">download</span>
              <span>Unduh .ICS</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Footer Info & Admin Portal Access Hint -->
      <div class="pt-8 border-t border-outline-variant flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-on-surface-variant">
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Semua jadwal diverifikasi &amp; disinkronkan langsung oleh tim resmi Nexa Digital Studio.</span>
        </div>

        <div>
          <router-link 
            to="/admin/kalender" 
            class="hover:underline flex items-center gap-1 opacity-60 hover:opacity-100 transition-opacity"
            title="Portal Kelola Internal"
          >
            <span class="material-symbols-outlined text-sm">lock</span>
            <span>Akses Internal Pengelola</span>
          </router-link>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { isDark } from '../utils/theme'
import { 
  fetchEvents, 
  getGoogleCalendarUrl, 
  downloadIcsFile,
  downloadAllEventsIcs
} from '../services/calendarService'

const events = ref([])
const loading = ref(true)
const error = ref(null)
const selectedCategory = ref('all')
const viewMode = ref('agenda') // 'agenda' | 'calendar'
const activeModalEvent = ref(null)

const currentDate = ref(new Date())

const categories = computed(() => {
  const uniqueCats = Array.from(new Set(events.value.map(e => e.category).filter(Boolean)))
  return [
    { id: 'all', label: 'Semua Kegiatan' },
    ...uniqueCats.map(cat => ({ id: cat, label: cat }))
  ]
})

function downloadAll() {
  downloadAllEventsIcs(events.value, 'timeline-stack-2026-nexa.ics')
}

async function loadEvents() {
  loading.value = true
  error.value = null
  try {
    events.value = await fetchEvents()
  } catch (err) {
    console.error('Error fetching events:', err)
    error.value = 'Gagal memuat daftar kegiatan: ' + err.message
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  loadEvents()
})

const filteredEvents = computed(() => {
  if (selectedCategory.value === 'all') {
    return events.value
  }
  return events.value.filter(e => e.category === selectedCategory.value)
})

function countCategory(catId) {
  return events.value.filter(e => e.category === catId).length
}

function openDetail(event) {
  activeModalEvent.value = event
}

// Color Styling Helpers
function getColorClass(color) {
  switch (color) {
    case 'magenta':
      return {
        text: 'text-stitch-magenta',
        badge: isDark.value ? 'bg-stitch-magenta/15 border-stitch-magenta/30 text-stitch-magenta-light' : 'bg-fuchsia-50 border-fuchsia-200 text-fuchsia-700',
        pill: isDark.value ? 'bg-stitch-magenta/20 border-stitch-magenta/40 text-stitch-magenta-light' : 'bg-fuchsia-100 border-fuchsia-300 text-fuchsia-800'
      }
    case 'cyan':
      return {
        text: 'text-stitch-cyan',
        badge: isDark.value ? 'bg-stitch-cyan/15 border-stitch-cyan/30 text-stitch-cyan' : 'bg-sky-50 border-sky-200 text-sky-700',
        pill: isDark.value ? 'bg-stitch-cyan/20 border-stitch-cyan/40 text-stitch-cyan' : 'bg-sky-100 border-sky-300 text-sky-800'
      }
    case 'amber':
      return {
        text: 'text-stitch-amber',
        badge: isDark.value ? 'bg-stitch-amber/15 border-stitch-amber/30 text-stitch-amber' : 'bg-amber-50 border-amber-200 text-amber-700',
        pill: isDark.value ? 'bg-stitch-amber/20 border-stitch-amber/40 text-stitch-amber' : 'bg-amber-100 border-amber-300 text-amber-800'
      }
    case 'emerald':
      return {
        text: 'text-emerald-400',
        badge: isDark.value ? 'bg-emerald-500/15 border-emerald-500/30 text-emerald-400' : 'bg-emerald-50 border-emerald-200 text-emerald-700',
        pill: isDark.value ? 'bg-emerald-500/20 border-emerald-500/40 text-emerald-300' : 'bg-emerald-100 border-emerald-300 text-emerald-800'
      }
    default: // purple
      return {
        text: 'text-stitch-purple',
        badge: isDark.value ? 'bg-stitch-purple/15 border-stitch-purple/30 text-stitch-purple-light' : 'bg-violet-50 border-violet-200 text-violet-700',
        pill: isDark.value ? 'bg-stitch-purple/20 border-stitch-purple/40 text-stitch-purple-light' : 'bg-violet-100 border-violet-300 text-violet-800'
      }
  }
}

// Date Format Helpers
function parseDate(isoString) {
  if (!isoString) return new Date()
  const d = new Date(isoString)
  return isNaN(d.getTime()) ? new Date() : d
}

function formatMonthShort(dateStr) {
  const d = parseDate(dateStr)
  return d.toLocaleDateString('id-ID', { month: 'short' })
}

function formatDayNumber(dateStr) {
  const d = parseDate(dateStr)
  return d.getDate()
}

function formatDayName(dateStr) {
  const d = parseDate(dateStr)
  return d.toLocaleDateString('id-ID', { weekday: 'short' })
}

function formatFullDate(dateStr) {
  const d = parseDate(dateStr)
  return d.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
}

function formatTime(timeStr) {
  if (!timeStr) return ''
  return timeStr.slice(0, 5)
}

function getRelativeDaysText(dateStr) {
  const target = new Date(dateStr)
  const now = new Date()
  target.setHours(0, 0, 0, 0)
  now.setHours(0, 0, 0, 0)

  const diffTime = target - now
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

  if (diffDays === 0) return '• Hari Ini'
  if (diffDays === 1) return '• Besok'
  if (diffDays > 1) return `• ${diffDays} hari lagi`
  if (diffDays === -1) return '• Kemarin'
  return `• ${Math.abs(diffDays)} hari lalu`
}

// Calendar Month Grid Logic
const currentYear = computed(() => currentDate.value.getFullYear())
const currentMonth = computed(() => currentDate.value.getMonth())

const currentMonthName = computed(() => {
  return currentDate.value.toLocaleDateString('id-ID', { month: 'long' })
})

function prevMonth() {
  currentDate.value = new Date(currentYear.value, currentMonth.value - 1, 1)
}

function nextMonth() {
  currentDate.value = new Date(currentYear.value, currentMonth.value + 1, 1)
}

function goToToday() {
  currentDate.value = new Date()
}

const calendarDays = computed(() => {
  const year = currentYear.value
  const month = currentMonth.value
  const firstDayOfMonth = new Date(year, month, 1)
  const lastDayOfMonth = new Date(year, month + 1, 0)

  const daysInMonth = lastDayOfMonth.getDate()
  const startingDayOfWeek = firstDayOfMonth.getDay() // 0 = Sun, 1 = Mon ...

  const today = new Date()
  const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`

  const days = []

  // Previous month padding
  const prevMonthLastDay = new Date(year, month, 0).getDate()
  for (let i = startingDayOfWeek - 1; i >= 0; i--) {
    days.push({
      dayNumber: prevMonthLastDay - i,
      isCurrentMonth: false,
      isToday: false,
      events: []
    })
  }

  // Current month days
  for (let d = 1; d <= daysInMonth; d++) {
    const dateFormatted = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`
    
    // Find matching events
    const matchingEvents = filteredEvents.value.filter(e => {
      if (!e.event_date) return false
      const eventDateStr = e.event_date.split('T')[0]
      return eventDateStr === dateFormatted
    })

    days.push({
      dayNumber: d,
      isCurrentMonth: true,
      isToday: dateFormatted === todayStr,
      events: matchingEvents
    })
  }

  // Next month padding to fill full grid (up to multiple of 7)
  const remaining = (7 - (days.length % 7)) % 7
  for (let i = 1; i <= remaining; i++) {
    days.push({
      dayNumber: i,
      isCurrentMonth: false,
      isToday: false,
      events: []
    })
  }

  return days
})
</script>
