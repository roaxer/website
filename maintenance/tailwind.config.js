/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#00BF63"
      },
      fontFamily: {
        ubuntu: ["Ubuntu Sans", "sans-serif"],
        acme: ["Acme", "sans-serif"]
      }
    },
  },
  plugins: [],
}

