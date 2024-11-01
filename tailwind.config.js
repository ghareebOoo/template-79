/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      letterSpacing:{
        wide: "12px",
        widen: "3px",
      },
      fontSize:{
        myFont: "14px",
      },
    },
  },
  plugins: [],
}

