/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        cream: "#FDFBF7",
        primary: {
          DEFAULT: "#DC2626",
          dark: "#B91C1C",
        },
      },
      animation: {
        "spin-slow": "spin 12s linear infinite",
      },
    },
  },
  plugins: [],
};
