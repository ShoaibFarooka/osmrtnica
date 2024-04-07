import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "599px",
      md: "600px",
      lg: "1200px",
      // xl: "1280px",
    },
    fontFamily: {
      roboto: ["Roboto", "Helvetica", "Arial", "sans-serif"],
    },
    extend: {
      colors: {
        bg1: "rgba(182, 236, 236, 0.3)",
        bg2: "rgba(227, 232, 236, 0.3)",
        p_bg1: "rgba(227, 232, 236, 1)",
        p_bg2: "rgba(255, 255, 255, 1)",
        p_bg: "rgba(254, 250, 242, 1)",
        cardColor: "rgba(227, 232, 236, 0.6)",

        col1: "rgba(182, 236, 236, 0.09)",
        col2: "rgba(190, 244, 244, 0)",
      },
    },
  },
  darkMode: "class",

  plugins: [nextui()],
};
