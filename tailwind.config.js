/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif']
      },
      colors: {
        'transculent': 'rgba(255, 255, 255, 0.05)'
      }
    },
    screens: {
      '1100px': '1100px',
    }
  },
  plugins: [],
}
