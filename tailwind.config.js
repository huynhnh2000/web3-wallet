/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orangered: "#ff4500",
        backgroundColor: "#191c23",
        black: "#000000",
        "primary-400": "#52FAAE",
        "primary-500": "#1AF7A9",
        "primary-600": "#13D4A3",
        "primary-700": "#0DB198",
        "primary-800": "#088F87",
        "primary-900": "#047176",
        "neutral-100": "#F0F0F0",
        "neutral-200": "#DEDEDE",
        "neutral-300": "#A7A4A4",
        "neutral-400": "#65636F",
        "neutral-500": "#383846",
        "neutral-600": "#2D2C3B",
        "neutral-700": "#242332",
        "neutral-800": "#1B1A28",
        "neutral-900": "#171423",
        "neutral-black": "#120E21",
        "border-color": "#2D2C3B",
        "deep-purple": "#804DEF",
        "bright-cyan": "#4EDBF9",
        "vivid-green": "#1AF7A9",
        green: "#1AF7A9",
      },
    },
    boxShadow: {
      custom: "0px 10px 10px rgba(0, 0, 0, 0.4)",
    },
  },
  plugins: [],
};
