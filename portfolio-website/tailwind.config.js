/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: ["group-hover"],
      height: ["group-hover"],
      colors: {
        fontWhite: "#fefefd",
        fontLightGray: "#CCD0DC",
        fontGray: "#828DA9",
        bgBlack: "#15151b",
        accentYellow: "#fdfe00",
        btnYellow: "#fefe00",
        btnBlack: "#29282d",
        btnGray: "#5d5b67",
      },
      fontFamily: {
        ffHead: "Kanit",
        ffBody: "Raleway",
      },
      outlineColor: {
        offWhite: "rgba(255, 255, 255, 0.5)",
      },
    },
  },
  plugins: [],
};
