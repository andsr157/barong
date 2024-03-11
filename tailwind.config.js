/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")
const colors = {
  ...defaultTheme.colors,
  ...{
    "brg-primary": "#307FF5",
    "brg-secondary": "#3BCEE0",
    "brg-primary-dark": "#363F5E",
    "brg-dark-gray": "#4A526E",
    "brg-light-gray": "#C1C9D6",
    "brg-red": "F53030",
  },
}

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors,
    },
  },
  plugins: [],
}
