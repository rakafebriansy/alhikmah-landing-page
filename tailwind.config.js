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
        }
      },
    },
  },
  plugins: [],
}