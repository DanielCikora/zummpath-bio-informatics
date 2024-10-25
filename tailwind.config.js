/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        offWhite: "#F8F8F8",
        royalGreen: "#003C2C",
      },
      screens: {
        mediumSmall: "min-width: 500px",
      },
    },
  },
  plugins: [],
};
