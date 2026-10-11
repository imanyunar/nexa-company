/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Stitch Surface Roles (Adaptive via CSS variables)
        'surface': 'var(--color-surface)',
        'surface-dim': 'var(--color-surface-dim)',
        'surface-bright': 'var(--color-surface-bright)',
        'surface-container-lowest': 'var(--color-surface-container-lowest)',
        'surface-container-low': 'var(--color-surface-container-low)',
        'surface-container': 'var(--color-surface-container)',
        'surface-container-high': 'var(--color-surface-container-high)',
        'surface-container-highest': 'var(--color-surface-container-highest)',
        
        // Text & Outlines
        'on-surface': 'var(--color-on-surface)',
        'on-surface-variant': 'var(--color-on-surface-variant)',
        'outline': 'var(--color-outline)',
        'outline-variant': 'var(--color-outline-variant)',

        // Stitch Neon & Chromatic Accents (Luminous Techno-Chic)
        'stitch-magenta': '#C239D8',
        'stitch-magenta-light': '#faabff',
        'stitch-magenta-dark': '#4c0059',
        'stitch-purple': '#7B68EE',
        'stitch-purple-light': '#cabeff',
        'stitch-cyan': '#99D4FF',
        'stitch-cyan-light': '#92cdf8',
        'stitch-amber': '#f0bd8b',

        // Brand Primaries
        'primary': 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        'secondary': 'var(--color-secondary)',
        'secondary-hover': 'var(--color-secondary-hover)',

        // Backwards compatibility tokens
        'canvas': 'var(--color-surface)',
        'text-primary': 'var(--color-on-surface)',
        'text-secondary': 'var(--color-on-surface-variant)',
        'card-dark': 'var(--color-surface-container-low)',
      },
      fontFamily: {
        headline: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      borderRadius: {
        'sm': '0.125rem',
        'DEFAULT': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        'full': '9999px',
      },
      spacing: {
        'space-xs': '0.25rem',
        'space-sm': '0.5rem',
        'space-md': '1rem',
        'space-lg': '1.5rem',
        'space-xl': '2.5rem',
        'space-2xl': '4rem',
      }
    },
  },
  plugins: [],
}
