/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
   extend:{
      colors:{
          "#707070":"#707070",
          "#306EF7":"#306EF7",
          "#3C82F4":"#3C82F4",
          "#FE6783":"#FE6783",
          "#FFBF84":"#FFBF84",
          "#326CF9":"#326CF9",
          "#3D82F2":"#3D82F2",
          "#2D2D2D":"#2D2D2D",
          "#0FC65C":"#0FC65C",
          "#0D0D0D":"#0D0D0D",
          "#919191":"#919191"
      },
   },
   screens:{
    "910px":"910px",
    "560px":"560px",
    "1500px":"1500px",
    "1200px":"1200px",
    "650px":"650px",
    "450px":"450px",
    "340px":"340px"
   }
  },
}