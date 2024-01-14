/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#344D2F',
          secondary: '#647E5D',
          text: '#DDF8D6',
        },
        light:{
          primary: '#F2FCEF',
          secondary: '#C2DFBB',
          text1: '#344D2F',
          text2: '#111827',
        }
      },
      keyframes:{
        darkToLight:{
          '0%' : {color:'#F2FCEF',backgroundColor:'#647E5D'},
          '100%': {backgroundColor:'#F2FCEF',color:'#647E5D'}
        },
        lightToDark:{
          '0%': {backgroundColor:'#F2FCEF',color:'#647E5D'},
          '100%' : {color:'#F2FCEF',backgroundColor:'#647E5D'},
        },
      },
      animation:{
        'arrowFadeInLight': 'lightToDark 0.3s ease-in-out',
        'arrowFadeOutLight': 'darkToLight 0.3s ease-in-out',
        'arrowFadeInDark': 'darkToLight 0.3s ease-in-out',
        'arrowFadeOutDark': 'lightToDark 0.3s ease-in-out',
      }
    },
  },
  plugins: [],
}