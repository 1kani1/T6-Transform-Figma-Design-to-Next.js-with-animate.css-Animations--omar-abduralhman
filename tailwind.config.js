/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#1a1d20",
          "200": "#1d1b1b",
          "300": "#0f0f0f",
          "400": "rgba(255, 255, 255, 0.6)",
        },
        lightsteelblue: "#a1aebf",
        black: "#000",
        orange: "#ffa800",
        gainsboro: "#d9d9d9",
      },
      spacing: {},
      fontFamily: {
        roboto: "Roboto",
        inter: "Inter",
      },
      borderRadius: {
        "61xl": "80px",
        "381xl": "400px",
        "82xl": "101px",
        "10xl": "29px",
        "48xl": "67px",
        "26xl": "45px",
      },
    },
    fontSize: {
      mini: "15px",
      base: "16px",
      xs: "12px",
      sm: "14px",
      "5xl": "24px",
      xl: "20px",
      "45xl": "64px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
