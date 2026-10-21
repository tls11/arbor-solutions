/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        forest: "#01462b",
        "forest-deep": "#012818",
        ink: "#f4f1e6",
        gold: "#CAA700",
        olive: "#CEAC00",
        wheat: "#D4B223",
      },
      fontFamily: {
        serif: ['"Iowan Old Style"', "Palatino", "Georgia", "serif"],
        sans: ["ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
