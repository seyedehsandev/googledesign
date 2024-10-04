/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "footer-text" : "#e8e8e8" ,
        "bottom-bg" : "#303134"
      } ,
      fontFamily: {
        arial: ['Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}