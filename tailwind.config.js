/** @type {import('tailwindcss').Config} */;
export default {
  content: [
  "./src/**/*.{html,js,svelte,ts}",
  "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  "./node_modules/flowbite/**/*.js",
],
  theme: {
    extend: {
      colors: {
        // Flowbite-Svelte uses primary and gray in its components. Modify the colors here.
        primary: {
          // Red
          50: "#f2fcf4",
          100: "#e3f9e8",
          200: "#c4f1cd",
          300: "#9ee3ab",
          400: "#6fcd7f",
          500: "#3fb558",
          600: "#2f9747",
          700: "#22753a",
          800: "#185830",
          900: "#0f3c23",
        },
        secondary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        red: {
          // Zinc
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
        },
        gray: {
          50:  "#f6f8fa", // light UI surfaces
          100: "#eaeef2",
          200: "#d0d7de",
          300: "#afb8c1",
          400: "#8c959f",
          500: "#6e7781",
          600: "#57606a",
          700: "#424a53",
          800: "#32383f",
          900: "#24292f", // GitHub dark base
        },

      },
      fontFamily: {
        rubik: ["Rubik", "sans-serif"], // Sample custom font. Font should be imported first in src/app.css
      },
    },
  },
  plugins: [require("flowbite/plugin"), require("@tailwindcss/typography")], // Typography is completely optional, btw.
};
