/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary_clr: "#FF444A",
      type1_category: "#0052FF33",
    },
  },
  plugins: [require("daisyui")],
};