/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6B6B",
      },
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
};
