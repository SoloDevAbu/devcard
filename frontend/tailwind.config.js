/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          cardbg: "#1b1318",
          input: "#2c272c"
        }
      }
    },
  },
  plugins: [],
}