/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F6F2E9",
        ink: "#1C2333",
        amber: "#C9722A",
        amberdark: "#A5581B",
        moss: "#3F6B4F",
        line: "#D8D0BE",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
    },
  },
  plugins: [],
};
