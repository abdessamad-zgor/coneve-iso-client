const { BlockList } = require('net');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        reveal:{
          "0%":{
            display:"block",
            opacity:0
          },
          "100%":{
            opacity:1
          }
        }
      },
      animation: {
        reveal: "reveal 0.2s forwards"
      }
    },
  },
  plugins: [],
}
