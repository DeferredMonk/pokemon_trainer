/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
<<<<<<< HEAD
      fontFamily: {
        classic: ["Pokemon-classic"],
      },
=======
      fontFamily:{
        poke: ["pokemon"]
      }
>>>>>>> 84fb31db8455d9e6a51d300e813dcd5f64f3594e
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
