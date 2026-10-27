import { ref } from 'vue'

const ADMIN_TOKEN_KEY = 'nexa_admin_token'
const ADMIN_USER_KEY = 'nexa_admin_user'

export const adminToken = ref(localStorage.getItem(ADMIN_TOKEN_KEY) || null)
export const currentAdmin = ref(null)

try {
  const cachedUser = localStorage.getItem(ADMIN_USER_KEY)
  if (cachedUser) {
    currentAdmin.value = JSON.parse(cachedUser)
  }
} catch {}

/**
 * Save admin session to localStorage and reactive state
 */
export function setAdminSession(token, user) {
  adminToken.value = token
  currentAdmin.value = user
  localStorage.setItem(ADMIN_TOKEN_KEY, token)
  localStorage.setItem(ADMIN_USER_KEY, JSON.stringify(user))
}

/**
 * Clear admin session
 */
export function clearAdminSession() {
  adminToken.value = null
  currentAdmin.value = null
  localStorage.removeItem(ADMIN_TOKEN_KEY)
  localStorage.removeItem(ADMIN_USER_KEY)
}

/**
 * Check if current admin is authenticated
 */
export async function checkAdminAuth() {
  const token = adminToken.value || localStorage.getItem(ADMIN_TOKEN_KEY)
  if (!token) {
    clearAdminSession()
    return false
  }

  try {
    const res = await fetch('/api/auth', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    if (res.ok) {
      const data = await res.json()
      currentAdmin.value = data.admin
      return true
    } else {
      clearAdminSession()
      return false
    }
  } catch (err) {
    console.error('Check admin auth error:', err)
    return !!currentAdmin.value
  }
}

/**
 * Login admin with email & password
 */
export async function loginAdmin(email, password) {
  const res = await fetch('/api/auth', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  })

  const data = await res.json()
  if (!res.ok) {
    throw new Error(data.error || 'Login gagal, periksa email dan password.')
  }

  setAdminSession(data.token, data.admin)
  return data
}

/**
 * Fetch events from API
 */
export async function fetchEvents({ category = 'all', showAll = false } = {}) {
  const params = new URLSearchParams()
  if (category && category !== 'all') {
    params.set('category', category)
  }
  if (showAll) {
    params.set('all', 'true')
  }

  const headers = {}
  if (showAll && adminToken.value) {
    headers['Authorization'] = `Bearer ${adminToken.value}`
  }

  const res = await fetch(`/api/events?${params.toString()}`, { headers })
  if (!res.ok) {
    const errData = await res.json().catch(() => ({}))
    throw new Error(errData.error || `HTTP error ${res.status}`)
  }

  const json = await res.json()
  return json.data || []
}

/**
 * Create event (Admin only)
 */
export async function createEvent(eventData) {
  if (!adminToken.value) {
    throw new Error('Akses tidak diizinkan. Silakan login terlebih dahulu.')
  }

  const res = await fetch('/api/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${adminToken.value}`
    },
    body: JSON.stringify(eventData)
  })

  const json = await res.json()
  if (!res.ok) {
    throw new Error(json.error || 'Gagal membuat kegiatan.')
  }
  return json.data
}

/**
 * Update event (Admin only)
 */
export async function updateEvent(eventData) {
  if (!adminToken.value) {
    throw new Error('Akses tidak diizinkan. Silakan login terlebih dahulu.')
  }

  const res = await fetch('/api/events', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${adminToken.value}`
    },
    body: JSON.stringify(eventData)
  })

  const json = await res.json()
  if (!res.ok) {
    throw new Error(json.error || 'Gagal memperbarui kegiatan.')
  }
  return json.data
}

/**
 * Delete event (Admin only)
 */
export async function deleteEvent(id) {
  if (!adminToken.value) {
    throw new Error('Akses tidak diizinkan. Silakan login terlebih dahulu.')
  }

  const res = await fetch(`/api/events?id=${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${adminToken.value}`
    }
  })

  const json = await res.json()
  if (!res.ok) {
    throw new Error(json.error || 'Gagal menghapus kegiatan.')
  }
  return json
}

/**
 * Helper: format time to 6-digit HHMMSS conforming to RFC 5545
 * If end_time is not provided, default to start_time + 1 hour
 */
function formatEventTimeRange(startTime, endTime) {
  const cleanTime = (t) => (t || '').toString().trim()
  
  const rawStart = cleanTime(startTime) || '09:00:00'
  const startParts = rawStart.split(':').map(Number)
  const startH = isNaN(startParts[0]) ? 9 : startParts[0]
  const startM = isNaN(startParts[1]) ? 0 : startParts[1]
  const startS = isNaN(startParts[2]) ? 0 : startParts[2]

  const startTimeStr = `${String(startH).padStart(2, '0')}${String(startM).padStart(2, '0')}${String(startS).padStart(2, '0')}`

  const rawEnd = cleanTime(endTime)
  let endTimeStr
  if (rawEnd) {
    const endParts = rawEnd.split(':').map(Number)
    const endH = isNaN(endParts[0]) ? startH + 1 : endParts[0]
    const endM = isNaN(endParts[1]) ? 0 : endParts[1]
    const endS = isNaN(endParts[2]) ? 0 : endParts[2]
    endTimeStr = `${String(endH).padStart(2, '0')}${String(endM).padStart(2, '0')}${String(endS).padStart(2, '0')}`
  } else {
    const endH = (startH + 1) % 24
    endTimeStr = `${String(endH).padStart(2, '0')}${String(startM).padStart(2, '0')}${String(startS).padStart(2, '0')}`
  }

  return { startTimeStr, endTimeStr }
}

/**
 * Generate Google Calendar Add URL
 */
export function getGoogleCalendarUrl(event) {
  if (!event || !event.event_date) return '#'

  const dateStr = String(event.event_date).split('T')[0].replace(/-/g, '')
  const { startTimeStr, endTimeStr } = formatEventTimeRange(event.start_time, event.end_time)

  const startIso = `${dateStr}T${startTimeStr}`
  const endIso = `${dateStr}T${endTimeStr}`

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.title || 'Kegiatan Nexa Digital Agency',
    dates: `${startIso}/${endIso}`,
    ctz: 'Asia/Jakarta',
    details: `${event.description || ''}\n\nKategori: ${event.category || 'Event'}\nTautan: ${event.link || 'https://nexaagency.my.id/'}`,
    location: event.location_name || (event.location_type === 'online' ? 'Online / Google Meet' : 'Nexa Digital Studio')
  })

  return `https://calendar.google.com/calendar/render?${params.toString()}`
}

/**
 * Generate and download .ics calendar file
 */
export function downloadIcsFile(event) {
  if (!event || !event.event_date) return

  const dateStr = String(event.event_date).split('T')[0].replace(/-/g, '')
  const { startTimeStr, endTimeStr } = formatEventTimeRange(event.start_time, event.end_time)
  const nowStamp = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Nexa Digital Agency//Calendar Event//ID',
    'CALSCALE:GREGORIAN',
    'BEGIN:VEVENT',
    `UID:nexa-${event.id || Date.now()}@nexaagency.my.id`,
    `DTSTAMP:${nowStamp}`,
    `DTSTART:${dateStr}T${startTimeStr}`,
    `DTEND:${dateStr}T${endTimeStr}`,
    `SUMMARY:${event.title || 'Kegiatan Nexa Digital Agency'}`,
    `DESCRIPTION:${(event.description || '').replace(/\n/g, '\\n')}`,
    `LOCATION:${event.location_name || (event.location_type === 'online' ? 'Online / Google Meet' : 'Nexa Digital Studio')}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n')

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.setAttribute('download', `${(event.title || 'kegiatan').toLowerCase().replace(/[^a-z0-9]/g, '-')}.ics`)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

/**
 * Generate and download all events as a single .ics calendar file
 */
export function downloadAllEventsIcs(eventsList, filename = 'timeline-kegiatan-nexa.ics') {
  if (!eventsList || !eventsList.length) return

  const nowStamp = new Date().toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z'

  const vevents = eventsList.map((event, idx) => {
    const dateStr = String(event.event_date || '').split('T')[0].replace(/-/g, '')
    const { startTimeStr, endTimeStr } = formatEventTimeRange(event.start_time, event.end_time)

    return [
      'BEGIN:VEVENT',
      `UID:nexa-${event.id || idx}-${Date.now()}@nexaagency.my.id`,
      `DTSTAMP:${nowStamp}`,
      `DTSTART:${dateStr}T${startTimeStr}`,
      `DTEND:${dateStr}T${endTimeStr}`,
      `SUMMARY:${event.title || 'Kegiatan Nexa Digital Agency'}`,
      `DESCRIPTION:${(event.description || '').replace(/\n/g, '\\n')}`,
      `LOCATION:${event.location_name || (event.location_type === 'online' ? 'Online / Google Meet' : 'Nexa Digital Studio')}`,
      'STATUS:CONFIRMED',
      'END:VEVENT'
    ].join('\r\n')
  }).join('\r\n')

  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Nexa Digital Agency//Calendar Event//ID',
    'CALSCALE:GREGORIAN',
    vevents,
    'END:VCALENDAR'
  ].join('\r\n')

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.setAttribute('download', filename)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

