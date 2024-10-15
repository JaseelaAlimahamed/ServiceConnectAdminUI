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
        roboto:["font-roboto"],
        nunito:["font-nunito"],
        inter: ['Inter', 'sans-serif'],
        bodySmall: 'var(--BodySmallFont)',
        jost: ['Jost', 'sans-serif'],
      },

      colors: {
        primary: "#FFFFFF",
        secondary: "#000000",
        gray:"#E5E7EB",
        id_gray:"#797C7B",
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
        lite_blue2 : '#DBEAFE',
        orange:"#FB7D5B",
        lite_red:"#DC3546",
        red:"#E20000",
        soft_red:"#FF3D00",
        blue_gray:'#C1BBEB',
        light_gray:'#A098AE',
        medium_dark_gray:'#4B5563',
        blue_bg:"#F3F4FF",
        dark_yellow:"#FCC43E",
        custom_gray:'#4B4B4B',
        button_blue:'#5BAFC0',
        text_blue:'#238899',
        lite_orange:'#FF5400'
        
        
      },
      fontSize: {
        '15px': '15px',
        bodySmall: 'var(--BodySmallSize)',
      },
      lineHeight: {
        '10px': '10px',
        bodySmall: 'var(--BodySmallLineHeight)',
      },
      letterSpacing: {
        bodySmall: 'var(--BodySmallTracking)', // Custom letter spacing
      },
      
      

    },
  },
  plugins: [],
};