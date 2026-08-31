/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B0E2B',
          light: '#131842',
          dark: '#07091D',
        },
        paper: '#F6F7FB',
        surface: '#FFFFFF',
        cyan: {
          DEFAULT: '#17C3F2',
          light: '#42D1F7',
          dark: '#0EA2CC',
        },
        blue: {
          DEFAULT: '#3A4CE0',
          hover: '#2F3EB8',
          soft: '#EEF0FD',
        },
        violet: {
          DEFAULT: '#8A2BE2',
        },
        magenta: {
          DEFAULT: '#E620C5',
          soft: '#FDEBF9',
        },
        muted: {
          DEFAULT: '#5B6072',
          light: '#888E9E',
          border: 'rgba(11, 14, 43, 0.08)',
          borderDark: 'rgba(255, 255, 255, 0.1)',
        }
      },
      fontFamily: {
        display: ['"Cabinet Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['"Satoshi"', '"Inter"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        'nexa-gradient': 'linear-gradient(135deg, #17C3F2 0%, #3A4CE0 35%, #8A2BE2 70%, #E620C5 100%)',
        'nexa-gradient-h': 'linear-gradient(90deg, #17C3F2 0%, #3A4CE0 35%, #8A2BE2 70%, #E620C5 100%)',
      }
    },
  },
  plugins: [],
}
