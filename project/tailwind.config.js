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
            light: '#131313',
            lighter: '#1b1b1b',
            card: '#161616',
          },
        },
      },
      fontFamily: {
        display: ['Anton', 'sans-serif'],
        sans: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
