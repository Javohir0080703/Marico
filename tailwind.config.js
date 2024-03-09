/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
   extend:{
      colors:{
     'white-black':'rgba(29, 31, 35, 0.70)',
     '#1D1F23':'#1D1F23',
     'qulrang':'rgba(57, 59, 63, 0.31)',
     '#8D8D8D':'#8D8D8D',
     '#F6973F':'#F6973F',
     '#D6DEE2':'#D6DEE2',
     '#FAFAFA':'#FAFAFA',
     '#EF43580':'#EF4358',
     '#19191B':'#19191B',
     'qulrang2':'rgba(255, 255, 255, 0.70)'
      },
      boxShadow:{
        'korzinkashadow':'-30px 15px 50px 0px rgba(0, 0, 0, 0.15)'
      }
   },
    textDecorationThickness:{
      textDecoration:{
        'strikethrough':'strikethrough',
      }
    },
    fontFamily:{
      'liana':'Liana'
    }
  },
}