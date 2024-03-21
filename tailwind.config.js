import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg1: "rgba(182, 236, 236, 0.3)",
        bg2: "rgba(227, 232, 236, 0.3)",
        p_bg1: "rgba(227, 232, 236, 1)",
        p_bg2: "rgba(255, 255, 255, 1)",
        p_bg: "rgba(254, 250, 242, 1)",
      },
    },
  },
  plugins: [nextui()],
};
