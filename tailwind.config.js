/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme-yellow': '#F4CE14',
        'theme-green': '#495E57',
        'theme-orange': '#EE9972',
        'theme-skin': '#FBDABB',
        'theme-gray': '#EDEFEE',
        'theme-black': '#333333',
      },
      fontFamily: {
        'Markazi': ["Markazi Text", 'serif'],
        'Karla': ["Karla", 'serif'],
      }
    },
  },
  plugins: [],
}