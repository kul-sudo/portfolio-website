/** @type {import('tailwindcss').Config} */
module.exports = {
  experimental: {
    optimizeUniversalDefaults: true
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif'],
      },
      colors: {
        'transculent': 'rgba(255, 255, 255, 0.05)'
      }
    },
    screens: {
      '830px': {'max': '830px'},
      'before-830px': '830px'
    }
  },
  plugins: [],
}
