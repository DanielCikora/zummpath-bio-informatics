/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        offWhite: "#F8F8F8",
        royalGreen: "#003C2C",
        lightGreen: "#D3DCDA",
        lightGray: "#EAEEED",
        mainOrange: "#EF4336",
        mainYellow: "#F6B524",
      },
      screens: {
        mediumSmall: "500px",
        mediumLarge: "1200px",
      },
    },
  },
  plugins: [],
};
