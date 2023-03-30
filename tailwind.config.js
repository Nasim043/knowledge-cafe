/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'title-blue': "#6047EC",
        'subtitle-color': "#979797"
      },
    },
  },
  plugins: [require("daisyui")],
}
