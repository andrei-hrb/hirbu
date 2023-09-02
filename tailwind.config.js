/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 18s linear infinite',
        blink: 'blink 1s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
      },
      fontFamily: {
        serif: ['Playfair Display', ...defaultTheme.fontFamily.sans],
        mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.sans],
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['retro', 'coffee'],
  },
}
