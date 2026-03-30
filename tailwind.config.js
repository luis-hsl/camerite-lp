/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cam: {
          purple: '#7B48EA',
          'purple-hover': '#643AC0',
          'purple-soft': '#A785F1',
          'purple-wash': '#D3C2F8',
          'purple-ghost': '#EAE0FF',
          deep: '#3E2475',
          darker: '#29184E',
          surface: '#14092E',
          base: '#070019',
          black: '#09090B',
          cyan: '#33CCF0',
          'cyan-deep': '#0090D9',
          green: '#5CE6AC',
          'green-muted': '#4D9979',
          lime: '#BEFF4B',
          teal: '#2DD4A8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Poppins', 'Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'scan-line': 'scanLine 4s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        scanLine: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [],
}
