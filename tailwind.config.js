/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          black: '#000000',
          dark: '#0a0a0a',
          gray: '#1a1a1a',
          light: '#2a2a2a',
        },
        accent: {
          gold: '#d4af37',
          silver: '#c0c0c0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'slow-zoom': 'slow-zoom 20s ease-in-out infinite',
        'bounce': 'bounce 2s infinite',
        'pulse': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        'slow-zoom': {
          '0%, 100%': { transform: 'scale(1.05)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
}
