/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(280px, 1fr))",
      },
      colors: {
        blue: {
          150: "#e3f4ff",
        },
        sky: {
          450: "#009cff",
        },
        stone: {
          550: "#676767",
          350: "#7f7f7f",
        },
      },
    },
    plugins: [],
  },
};
