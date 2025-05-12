/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'atomic-blue': {
          DEFAULT: '#00573D',
          50: '#E6F6F1',
          100: '#CCEDE3',
          200: '#99DBC7',
          300: '#66C9AB',
          400: '#33B78F',
          500: '#00573D',
          600: '#004E36',
          700: '#00452F',
          800: '#003C28',
          900: '#003321',
          950: '#002A1A'
        },
        'text': {
          'primary': '#111827',
          'secondary': '#1F2937',
          'tertiary': '#4B5563',
          'light': '#FFFFFF',
          'light-secondary': '#F3F4F6',
          'light-tertiary': '#E5E7EB'
        },
        'surface': {
          'white': '#FFFFFF',
          'light': '#F9FAFB',
          'light-secondary': '#F3F4F6',
          'dark': '#111827',
          'dark-secondary': '#1F2937'
        },
        'accent': {
          'success': '#059669',
          'success-light': '#D1FAE5',
          'warning': '#D97706',
          'warning-light': '#FEF3C7',
          'error': '#DC2626',
          'error-light': '#FEE2E2'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'workflow-pattern': "url('https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
        'workflow-light': "url('https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        bounceSubtle: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-5px)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
      },
    },
  },
  plugins: [],
};