/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        personalGrey: "#8F8F8F",
        footerBackgroundColor: "#2D2D2D",
        footerLineColor: "#8F8F8F",
        titleColor: "#2D2D2D",
        backgroundColorSeeOnLexir: "#F9F9F9",
        backgroundColorFirstCart: "#F9F9F9",
        colorSubtilesCarts: "#6B6B6B",
        colorCartBorder: "#E7E7E7",
        lexirColor: "#1C8C64",
      },
      fontFamily: {
        Lato: ["Lato"],
        Serif: ["Source Serif Pro"],
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
};
