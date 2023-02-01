/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        classic: ["Pokemon-classic"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
