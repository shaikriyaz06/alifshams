/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#B31F7E",
        secondary: "#482A7A",
      },
      fontFamily: {
        sans: ["Montserrat", "system-ui", "sans-serif"],
        heading: ["Montserrat", "system-ui", "sans-serif"],
        body: ["Montserrat", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
