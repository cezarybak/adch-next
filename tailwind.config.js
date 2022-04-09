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
          DARK: "#989898",
        },
        PINK: {
          DEFAULT: "#DAC2F2",
          HOVER: "#aa97bd",
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
        GREEN: {
          DEFAULT: "#5EDC4B",
        },
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
    plugins: [],
  },
};
