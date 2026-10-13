/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gf: {
          orange: {
            DEFAULT: '#ff6b1a',
            dark: '#e85a0c',
            light: '#ff8c42',
            lighter: '#ffaa6b',
          },
          black: {
            DEFAULT: '#0a0a0a',
            light: '#141414',
            lighter: '#1c1c1c',
            card: '#161616',
          },
        },
      },
      fontFamily: {
        display: ['Anton', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
