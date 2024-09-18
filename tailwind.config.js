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
      },

      colors: {
        primary: "#FFFFFF",
        secondary: "#000000",
        "violet":"#4D44B5",
        "button-purple":"#65558F",
        "fluracent-green":"#64FC3E",
        "light-green":"#50BB25",
        "medium-green":"#167F71",
        "button-green":"#096222",
        "yellow":"#F9D62C",
        "skyblue":"#28B5E1",
        "blue":"#303972",
        "button-blue":"#0961F5",
        "save-button-blue":"#5570F1",
        "orange":"#FD7D5B",
        "red":"#DC3546",
        "button-red":"#E20000",
        "decline-red":"#D33535",
        "button-orange":"#FF3D00",
        
        
      },

    },
  },
  plugins: [],
};
