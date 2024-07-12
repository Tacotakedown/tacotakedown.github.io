/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: ["*.html", "./src/**/*.rs"],
  },
  theme: {
    extend: {
      maxWidth: {
        "60vw": "60vw",
      },
    },
  },
  plugins: [],
};
