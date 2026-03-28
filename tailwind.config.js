/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        camerite: {
          purple: '#7C3AED',
          'purple-dark': '#1E0A3C',
          'purple-deep': '#2D1B69',
          'purple-light': '#A78BFA',
          'purple-muted': '#C4B5FD',
          cyan: '#00BCD4',
          'cyan-light': '#67E8F9',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Poppins', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-camerite': 'linear-gradient(135deg, #1E0A3C 0%, #7C3AED 50%, #A78BFA 100%)',
        'gradient-hero': 'linear-gradient(180deg, #1E0A3C 0%, #3B1A7E 60%, #7C3AED 100%)',
        'gradient-section': 'linear-gradient(135deg, #2D1B69 0%, #1E0A3C 100%)',
        'gradient-cta': 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'count-up': 'countUp 2s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
