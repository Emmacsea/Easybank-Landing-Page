/** @type {import('tailwindcss').Config} */

const path = require('path');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          darkblue: " hsl(233, 26%, 24%)",
          limegreen: "hsl(136, 65%, 51%)",
          brightcyan: "hsl(192, 70%, 51%)",
        },

        neutral: {
          grayishblue: "hsl(233, 8%, 62%)",
          lgrayishblue: "hsl(220, 16%, 96%)",
          vlightgray: " hsl(0, 0%, 98%)",
          white: "hsl(0, 0%, 100%)",
        }
      },

      fontFamily: {
        work: ["Public Sans"]

      },
      
      backgroundImage: {
        'header-desk': `url(${path.resolve(__dirname, 'src/assets/images/bg-intro-desktop.svg')})`,
        'header-mobile': `url(${path.resolve(__dirname, 'src/assets/images/bg-intro-mobile.svg')})`,
        
        
      }



    },
  },
  plugins: [],
}