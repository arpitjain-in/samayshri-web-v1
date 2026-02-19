/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fef8e7',
          100: '#fdefc4',
          200: '#fbe28c',
          300: '#f9d354',
          400: '#f7c527',
          500: '#f1b70a',
          600: '#d59105',
          700: '#b16907',
          800: '#90510d',
          900: '#77430e',
        },
        earth: {
          50: '#f6f5f0',
          100: '#e8e5dc',
          200: '#d1cbb8',
          300: '#b5ab8f',
          400: '#9d9070',
          500: '#8a7a5f',
          600: '#766652',
          700: '#605145',
          800: '#51453d',
          900: '#473d37',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'counter': 'counter 2s ease-out',
        'colorful-border': 'colorfulBorder 4s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        colorfulBorder: {
          '0%': { backgroundImage: 'linear-gradient(90deg, #d59105, #f1b70a, #f7c527, #f9d354, #d59105)' },
          '25%': { backgroundImage: 'linear-gradient(90deg, #f1b70a, #f7c527, #f9d354, #fbe28c, #f1b70a)' },
          '50%': { backgroundImage: 'linear-gradient(90deg, #f7c527, #f9d354, #fbe28c, #fdefc4, #f7c527)' },
          '75%': { backgroundImage: 'linear-gradient(90deg, #f9d354, #fbe28c, #fdefc4, #d59105, #f9d354)' },
          '100%': { backgroundImage: 'linear-gradient(90deg, #d59105, #f1b70a, #f7c527, #f9d354, #d59105)' },
        },
      },
    },
  },
  plugins: [],
}
