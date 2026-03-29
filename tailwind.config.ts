import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "sky-blue": "#a8d8f0",
        "peachy-pink": "#ffc0cb",
        lavender: "#e6d7f0",
        cream: "#fffaf0",
      },
    },
  },
  plugins: [],
};

export default config;
