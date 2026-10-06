import { ref } from 'vue'

const THEME_STORAGE_KEY = 'nexa-theme'

// Reactive state
export const isDark = ref(true)

/**
 * Apply the current theme to the DOM and meta tags
 */
export function applyTheme(dark) {
  if (typeof document === 'undefined') return
  
  const root = document.documentElement
  if (dark) {
    root.classList.add('dark')
    root.classList.remove('light')
    root.setAttribute('data-theme', 'dark')
  } else {
    root.classList.remove('dark')
    root.classList.add('light')
    root.setAttribute('data-theme', 'light')
  }

  // Update mobile browser chrome color
  const metaTheme = document.querySelector('meta[name="theme-color"]')
  if (metaTheme) {
    metaTheme.setAttribute('content', dark ? '#000000' : '#f8fafc')
  }
}

/**
 * Initialize theme from localStorage or system preference
 */
export function initTheme() {
  if (typeof window === 'undefined') return

  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY)
  if (savedTheme === 'dark' || savedTheme === 'light') {
    isDark.value = savedTheme === 'dark'
  } else {
    // If not set, check system preference; default to dark if indeterminate
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    isDark.value = prefersDark !== false
  }

  applyTheme(isDark.value)

  // Listen to OS preference changes if no manual override
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      const currentSaved = localStorage.getItem(THEME_STORAGE_KEY)
      if (!currentSaved) {
        isDark.value = e.matches
        applyTheme(isDark.value)
      }
    })
  }
}

/**
 * Toggle between dark and light themes
 */
export function toggleTheme() {
  isDark.value = !isDark.value
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(THEME_STORAGE_KEY, isDark.value ? 'dark' : 'light')
  }
  applyTheme(isDark.value)
}

/**
 * Explicitly set a theme ('dark' | 'light')
 */
export function setTheme(themeName) {
  isDark.value = themeName === 'dark'
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem(THEME_STORAGE_KEY, isDark.value ? 'dark' : 'light')
  }
  applyTheme(isDark.value)
}
