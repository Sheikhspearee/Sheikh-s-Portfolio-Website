/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#06110b",
        secondary: "#9db8a6",
        tertiary: "#0e1f16",
        "black-100": "#0a1710",
        "black-200": "#07130c",
        "white-100": "#f3f7f4",
        gon: "#3fcf6a",
        gold: "#f5c542",
        hisoka: "#e0245e",
        killua: "#7fd4ff",
      },
      fontFamily: {
        display: ["Oswald", "sans-serif"],
      },
      boxShadow: {
        card: "0px 35px 120px -15px #04140a",
        aura: "0 0 25px rgba(63, 207, 106, 0.45)",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
