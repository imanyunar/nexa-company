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
        // Reinvented with Accenture Color Palette
        'primary': '#0041f0',           // --palette-4 Primary Accent
        'primary-hover': '#0033c4',
        'secondary': '#e2062e',         // --palette-5 Secondary Accent (Accenture Red)
        'secondary-hover': '#c20527',
        'plum': '#460073',              // --palette-6
        'violet': '#a600ff',            // --palette-7
        'dark-btn': '#2b2b2b',          // --palette-8
        'blue-accent': '#004dff',       // --palette-9
        'blue-slate': '#3860be',        // --palette-10

        // Adaptive Surfaces & Backgrounds
        'canvas': 'var(--color-bg)',
        'canvas-alt': 'var(--color-bg-alt)',
        'surface-card': 'var(--color-surface-card)',
        'surface-elevated': 'var(--color-surface-elevated)',
        'surface-hover': 'var(--color-surface-hover)',
        'border-light': '#f1f1ef',
        'border-subtle': 'var(--color-border)',
        'border-accent': 'rgba(0, 65, 240, 0.4)',

        // Adaptive Typography
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-faint': 'var(--color-text-faint)',
      },
      fontFamily: {
        display: ['"Outfit"', '"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['"Outfit"', '"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      borderRadius: {
        'subtle': '2px',
        'card': '20px',
        'card-sm': '12px',
        'pill': '9999px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      }
    },
  },
  plugins: [],
}
