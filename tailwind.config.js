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
        'primary-active': '#253299',
        'cyan': '#17C3F2',
        'cyan-pressed': '#0EA2CC',
        'magenta': '#E620C5',
        'magenta-pressed': '#C410A5',
        'violet': '#8A2BE2',
        'ink': '#0B0E2B',
        'ink-deep': '#07091D',
        'ink-elevated': '#131842',
        'ink-card': '#181B34',
        'paper': '#F6F7FB',
        'paper-soft': '#EEF0FD',
        'surface': '#FFFFFF',
        'muted': '#5B6072',
        'muted-light': '#8F95A8',
        'muted-dark': 'rgba(246, 247, 251, 0.7)',
        'hairline-light': 'rgba(11, 14, 43, 0.1)',
        'hairline-dark': 'rgba(255, 255, 255, 0.15)',
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
