/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
   extend:{
      colors:{
          "#707070":"#707070",
          "#306EF7":"#306EF7",
          "#3C82F4":"#3C82F4"
      },
      boxShadow:{
        'korzinkashadow':'-30px 15px 50px 0px rgba(0, 0, 0, 0.15)'
      }
   },
  },
}