/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,vue,ts}",
    "./storyblok/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite.{js,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      colors: {
        primario: "#FFFFFF",
        "primario-disminuido": "rgba(255, 255, 255, 0.8)",
        secundario: "#000000",
        terciario: "#E13636",
      },
      fontFamily: {
        rubik: ["rubik"],
        poppins: ["Poppins"],
        prata: ["Prata"],
      },
    },
  },
  plugins: [require("flowbite"), require("@tailwindcss/typography")],
};
