/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'pop': ['Poppins, serif'],
        'ubuntu': ['Ubuntu, serif'],
        'Dance': ['Dancing Script, serif']
      }
    },
  },
  plugins: [],
}