/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3A4CE0',
        'primary-pressed': '#2F3EB8',
        'cyan': '#17C3F2',
        'cyan-pressed': '#0EA2CC',
        'magenta': '#E620C5',
        'magenta-pressed': '#C410A5',
        'violet': '#8A2BE2',
        
        // Unified Dark Palette
        'theme-base': '#0B0E2B',
        'theme-elevated': '#11153B',
        'theme-card': '#151A48',
        'theme-card-hover': '#1B215C',
        'theme-border': 'rgba(255, 255, 255, 0.10)',
        'theme-border-hover': 'rgba(23, 195, 242, 0.35)',
        
        'theme-text': '#FFFFFF',
        'theme-text-muted': 'rgba(255, 255, 255, 0.70)',
        'theme-text-faint': 'rgba(255, 255, 255, 0.45)',
      },
      fontFamily: {
        display: ['"Cabinet Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['"Satoshi"', '"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      borderRadius: {
        'card': '8px',
        'pill': '9999px',
      }
    },
  },
  plugins: [],
}
