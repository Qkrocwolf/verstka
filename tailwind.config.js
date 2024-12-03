/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito Sans", "serif"],
      },
      colors: {
        "primary-blue": "#4F8FF0",
      },

      container: {
        padding: {
          DEFAULT: "1.5rem",
          md: "2rem",
          lg: "3rem",
        },
        center: true,
      },
    },
  },
  plugins: [],
};
