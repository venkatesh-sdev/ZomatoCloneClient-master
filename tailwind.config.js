/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundColor:{
        "primary": "#fff",
        "secondary": "#E33342"
      },
      textColor:{
        "primary": "#E33342",
        "secondary": "#fff"
      }
    },
  },
  plugins: [],
}

