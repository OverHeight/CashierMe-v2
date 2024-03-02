import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Noto Sans", "Arial", "sans-serif"],
      inter: ["Inter", "Arial", "sans-serif"],
      plex: ["Dancing Script", "cursive"],
    },
    extend: {
      colors: {
        light: "#eaeaea",
        dark: "#373737",
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      "cupcake",
      "dark",
      "light",
      {
        baseTheme: {
          primary: "#49B7AA",
          secondary: "#D7A49A",
          accent: "#B1CC7F",
          neutral: "#F9FBF4",
          "base-100": "#F9FBF4",
        },
      },
    ],
  },
};
