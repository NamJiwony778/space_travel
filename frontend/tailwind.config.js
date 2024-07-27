const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "540px",
      md: "720px",
      lg: "960px",
      "lg-max": { max: "960px" },
      xl: "1140px",
      "2xl": "1320px",
    },
    colors: {
     transperent: "transparent",
     white: "#FFFFFF"
    },
    fontFamily: {
      barlow: ["Barlow Condensed", "sans-serif"],
      roboto: ['Roboto', 'sans-serif'],
    },
    backgroundImage: {
      "mainPage": "url('/src/assets/images/image.svg')",
    },
    extend: {},
  },
  
  plugins: [],
});
