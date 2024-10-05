/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "footer-text" : "#e8e8e8" ,
        "bottom-bg" : "#303134" , 
        "bb-gg" : "#202124"  ,
        "sign-in" : "#99c3ff"
      } ,
      fontFamily: {
        arial: ['Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}