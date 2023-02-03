/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        classic: ["Pokemon-classic"],
      },

      fontFamily: {
        poke: ["pokemon"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
