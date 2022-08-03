/** @type {import('tailwindcss').Config} */ 
const defaultColors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    fontFamily: {
      sans: ["Red Hat Text", ...defaultTheme.fontFamily.sans],
      serif: [...defaultTheme.fontFamily.serif],
      mono: [...defaultTheme.fontFamily.mono],
    },
    colors: {
      ...defaultColors,
      primary: "hsl(345, 95%, 68%)",
      secondary: "hsl(237, 18%, 59%)",
      secondaryDark: "hsl(236, 21%, 26%)",
      darkBlue: "hsl(235, 16%, 14%)",
      veryDarkBlue: "hsl(234, 17%, 12%)",
    },
    extend: {},
  },
  plugins: [],
}