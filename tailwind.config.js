/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#0f5d3f',
          'green-dark': '#0b3f2d',
          logo: '#012a21',
          light: '#f5f8f6',
          gold: '#d4af37',
          'gold-dark': '#b8932e',
        },
      },
      fontFamily: {
        sans: ['Cinzel', 'serif'],
      },
      maxWidth: {
        content: '1280px',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2.5s cubic-bezier(0.4,0,0.6,1) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        floatSlow: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseRing: {
          '0%': { boxShadow: '0 0 0 0 rgba(37,211,102,0.6)' },
          '70%': { boxShadow: '0 0 0 18px rgba(37,211,102,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(37,211,102,0)' },
        },
      },
    },
  },
  plugins: [],
};
