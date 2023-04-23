/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      }
    },
    colors: {
      "scheme": {
        900: '#1A1A1B',
        700: '#333F44',
        500: '#37AA9C',
        300: '#94F3E4'
      }
    }
  },
  plugins: [],
})

