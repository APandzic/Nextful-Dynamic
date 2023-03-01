const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */

// Ruls for tailwindcss
/**
 * All text colors and border should be primary.text
 */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--barlow-font)", ...fontFamily.sans],
        serif: ["var(--roboto-font)", ...fontFamily.serif],
      },
      boxShadow: {
        custom: "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      transitionProperty: {
        border: "border",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
        "header-mobile": "4rem",
        "header-desktop": "4.25rem",
        "header-desktop-submenu": "14.5rem",
      },
      colors: {
        transparent: {
          full: "transparent",
          light: "rgba(255, 255, 255, 0.1)",
          dark: "rgba(0, 0, 0, 0.1)",
        },
        primary: {
          text: "#2E3041",
          "text-hover": "#929296",
          border: "#2E3041",
          bg: "#F3F4F6",
          iconColor: "#000",
          header: {
            text: "#000",
            "text-hover": "#929296",
            hamburger: "#000",
            "bg-hover": "rgba(0, 0, 0, 0.1)",
            border: "#2E3041",
            bg: {
              main: "#F3F4F6",
              top: "transparent",
            },
          },
          btn: {
            text: "rgba(250, 250, 250)",
            bg: "rgba(0, 0, 0)",
            hover: "rgba(0, 0, 0, 0.8)",
            disabled: {
              text: "rgba(250, 250, 250, 0.8)",
              bg: "rgba(80, 80, 80, 1)",
            },
          },
          card: {
            bg: "#fff",
          },
          footer: {
            text: {
              primary: "#fff",
              secondary: "#a3a3a3",
              hover: "#545454",
            },
            bg: "#000",
            icon: "#fff",
          },
        },
        secondary: {
          text: "#fff",
          "text-hover": "#929296",
          border: "#2E3041",
          bg: "#000",
          iconColor: "#000",
          header: {
            text: "#000",
            "text-hover": "#929296",
            hamburger: "#000",
            "bg-hover": "rgba(0, 0, 0, 0.1)",
            border: "#2E3041",
            bg: {
              main: "#F3F4F6",
              top: "transparent",
            },
          },
          btn: {
            text: "rgba(250, 250, 250)",
            bg: "rgba(0, 0, 0)",
            hover: "rgba(0, 0, 0, 0.8)",
            disabled: {
              text: "rgba(250, 250, 250, 0.8)",
              bg: "rgba(54, 54, 54, 1)",
            },
          },
          card: {
            bg: "#fff",
          },
          footer: {
            text: {
              primary: "#fff",
              secondary: "#a3a3a3",
              hover: "#545454",
            },
            bg: "#000",
            icon: "#fff",
          },
        },
        fixed: {
          error: "#ff3333",
          "text-hover": "#929296",
        },
      },
      screens: {
        "3xl": "2560px",
      },
    },
  },
  plugins: [],
};
