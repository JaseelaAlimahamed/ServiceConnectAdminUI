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
        "purple":"#65558F",
        "fluracent-green":"#64FC3E",
        "lite-green":"#50BB25",
        "medium-green":"#167F71",
        "dark-green":"#096222",
        "yellow":"#F9D62C",
        "sky-blue":"#28B5E1",
        "dark-blue":"#303972",
        "lite-blue":"#5570F1",
        "orange":"#FD7D5B",
        "lite-red":"#DC3546",
        "red":"#E20000",
        "soft-red":"#FF3D00",
        
        
      },

    },
  },
  plugins: [],
};
