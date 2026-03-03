/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ivory': '#FFFFF0',
        'burgundy': '#800020',
        'navy-gold': '#1a2a44',
      },
    },
  },
  plugins: [],
}