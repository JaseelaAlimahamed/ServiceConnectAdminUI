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
        violet:"#4D44B5",
        buttonpurple:"#65558F",
        fluracentgreen:"#64FC3E",
        lightergreen:"#50BB25",
        green:"#167F71",
        buttongreen:"#096222",
        yellow:"#F9D62C",
        skyblue:"#28B5E1",
        blue:"#303972",
        buttonblue:"#0961F5",
        savebuttonblue:"#5570F1",
        orange:"#FD7D5B",
        red:"#DC3546",
        buttonred:"#E20000",
        declinered:"#D33535",
        buttonorange:"#FF3D00",
        
        
      },

    },
  },
  plugins: [],
};
