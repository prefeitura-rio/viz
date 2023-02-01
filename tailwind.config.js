/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  // You are missing this block that defines what files tailwind should scan for usage
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        200: "200vh",
      },
      gridTemplateRows: {
        // Simple 12 row grid
        12: "repeat(12, minmax(0, 1fr))",
      },
      fontFamily: {
        poppins: ["Poppins"],
        worksans: ["Work Sans"],
        nunito: ["Nunito Sans"],
      },
    },
  },
  plugins: [],
};
