/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],


  theme: {
    extend: {

      fontFamily: {
        default: ["Jost", "sans-serif"],
        heading: ["Aldrich", "sans-serif"],
        input: ["Mulish", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },

      colors: {
        primary: "#FFFFFF",
        secondary: "#000000",
        violet:"#4D44B5",
        purple:"#65558F",
        fluracent_green:"#64FC3E",
        lite_green:"#50BB25",
        medium_green:"#167F71",
        dark_green:"#096222",
        yellow:"#F9D62C",
        sky_blue:"#28B5E1",
        dark_blue:"#303972",
        lite_blue:"#5570F1",
        orange:"#FD7D5B",
        lite_red:"#DC3546",
        red:"#E20000",
        soft_red:"#FF3D00",
        
        
      },

    },
  },
  plugins: [],
};