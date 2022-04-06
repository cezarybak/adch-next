const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        BLACK: {
          DEFAULT: "#231E1E",
          LIGHT: "#F1F0F0",
          DARK: "#989898",
        },
        PINK: {
          DEFAULT: "#DAC2F2",
        },
        SUCCESS: {
          DEFAULT: "#5EDC4B",
        },
        ERROR: {
          DEFAULT: "#cc0000",
        },
        GRAY: {
          DEFAULT: "#F1F0F0",
        },
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
    plugins: [],
  },
};
