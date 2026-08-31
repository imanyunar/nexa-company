/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3A4CE0',
          pressed: '#2F3EB8',
          active: '#253299',
        },
        cyan: {
          DEFAULT: '#17C3F2',
          pressed: '#0EA2CC',
        },
        magenta: {
          DEFAULT: '#E620C5',
          pressed: '#C410A5',
        },
        violet: {
          DEFAULT: '#8A2BE2',
        },
        ink: {
          DEFAULT: '#0B0E2B',
          deep: '#07091D',
          elevated: '#131842',
          card: '#181B34',
        },
        paper: {
          DEFAULT: '#F6F7FB',
          soft: '#EEF0FD',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          card: '#FFFFFF',
          dark: '#131842',
        },
        muted: {
          DEFAULT: '#5B6072',
          light: '#8F95A8',
          dark: 'rgba(246, 247, 251, 0.65)',
        },
        hairline: {
          light: 'rgba(11, 14, 43, 0.08)',
          dark: 'rgba(255, 255, 255, 0.12)',
        }
      },
      fontFamily: {
        display: ['"Cabinet Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['"Satoshi"', '"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      borderRadius: {
        'card': '8px',
        'pill': '9999px',
      },
      spacing: {
        'section': '96px',
      }
    },
  },
  plugins: [],
}
