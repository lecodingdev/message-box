/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        lobster: ['Lobster', 'cursive'],
        baskervville: ['Baskervville', 'serif'],
      },
      screens: {
        'tablet': '768px',
        'desktop': '1380px',
        'tv': '1620px',
      },
      colors: {
        primary: '#2F80ED',
        secondary: '#4F4F4F',
      },
    },
  },
  plugins: [],
}