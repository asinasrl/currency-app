/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bottomcolor: "#F5F7FF",
      },
      fontFamily: {
        euclid: ["Euclid Circular B", "sans-serif"],
        publicaplay: ["Publica Play", "sans-serif"],
      },
    },
  },
  plugins: [],
};
