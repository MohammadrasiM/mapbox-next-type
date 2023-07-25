/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderColor: {
        DEFAULT: "#F0F0F0",
      },
      scale: {
        102: "1.02",
        98: "0.98",
      },
      zIndex: {
        1: 1,
        2: 2,
        5: 5,
      },
      fontSize: {
        xxs: "10px",
        xsm: "0.8125rem",
        lsm: "13.4px",
        mlg: "15px",
      },
      screens: {
        xs: "300px",
        xsm: "380px",
        ssm: "420px",
      },
      colors: {
        primary: {
          50: "#FCFCFC",
          400: "#0EA2BE",
          500: "#13BDC2",
          700: "#F30990",
          800: "#219C2D",
          blue: "#5A57FB",
          red: "#FF0707",
        },
        dark: {
          100: "#475569",
          200: "#707070",
          300: "#1E293B",
          400: "#979797",
          500: "#424242",
          fade: "#70707025",
        },
        lightBlue: { 100: "#E6F5F8" },
        lightGreen: { 100: "#DCFCE7", 200: "#E1F8D4" },
        red: { 100: "#F53E4F", fade: "#FEEBED" },
        gray: {
          100: "#E2E8F0",
          200: "#94A3B8",
          300: "#CBD5E1",
          400: "rgb(156 163 175)",
          1050: "#fafafa",
          1100: "#EFEFEF",
          1150: "#DEDEDE",
          1200: "#9E9E9E",
          1250: "#C0C0C0",
          1300: "#D9D9D9",
        },
        orange: { 100: "#F3722C", 200: "#FEF1E9", 300: "#F59E0B", 400: "#FF6B00", 500: "#FFA800" },
        green: { 500: "#22C55E", 600: "#6AB04C" },
        whiteGray: { 100: "#F8FAFC" },
        brown: { 1000: "#6E6E6E" },
        blue: { 1000: "#5C09E3" },

        // "box-shadow-1":''
      },
      borderRadius: {
        20: "20px",
      },
      boxShadow: {
        card: "0px 0px 13px 1px rgb(0 ,0 ,0,0.1)",
        cardDark: "0px 0px 13px 1px rgb(15 ,23 ,42,0.6)",
      },
      aspectRatio: {
        "100/63": "100 / 63",
      },

      spacing: {
        "1/5": "20%",
        "9%": "9%",
        "9/10": "90%",
        "15%": "15%",
        "32%": "32%",
        "23%": "23%",
        "1%": "1%",
        "12.5%": "12.5%",
        25: "6.25rem",
      },
      width: {
        "1/5": "20%",
        "9%": "9%",
        18: "4.5rem",
      },
    },
  },
  darkMode: "class",
  transitionProperty: {
    height: "height",
    width: "width",
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
