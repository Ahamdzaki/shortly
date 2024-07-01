/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ["Poppins", "sans-serif"]
      },
      spacing:{
        180: "32rem"
      }
    },
  },
  plugins: [],
}