/** @type {import('tailwindcss').Config} */
export default {
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

        // Surfaces & Backgrounds
        'canvas': '#000000',            // Primary Page Canvas
        'surface-card': '#0e0e11',      // Dark Card Surface
        'surface-elevated': '#16161a',  // Elevated Section Surface
        'surface-hover': '#1e1e24',     // Card Hover Surface
        'border-light': '#f1f1ef',      // Light border token
        'border-subtle': 'rgba(241, 241, 239, 0.14)',
        'border-accent': 'rgba(0, 65, 240, 0.4)',

        // High Contrast Typography
        'text-primary': '#ffffff',
        'text-secondary': '#999999',
        'text-faint': '#666666',
      },
      fontFamily: {
        display: ['"Graphik"', '"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        sans: ['"Graphik"', '"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
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
