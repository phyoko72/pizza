/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius:{
        '100':'100%'
      },
      colors:{
        'pizza': '#d1411e',
        'price': '#666',
        'text' : '#777',
        'title': '#b7903c'
      }
    },
  },
  plugins: [],
}