import type { Config } from "tailwindcss";

const config: Config = {
  important: true,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "by-peach-fuzz": "#FFB28C",
        "by-white": "#FFFFFF",
        "by-light-peach-fuzz": "#FFB28C10",
        "by-20-peach-fuzz": "#FFB28C20",
        "by-25-peach-fuzz": "#FFB28C25",
        "by-orange": "#F79464",
        "by-darken-blue": "#00071D",
      },
    },
  },
  plugins: [],
};
export default config;
