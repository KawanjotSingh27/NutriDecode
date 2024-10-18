/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '112': '28rem',
        '144': '36rem',
        '15':'3.75rem',
        '76':'19rem'
      }
    }
  },
  plugins: [],
}

