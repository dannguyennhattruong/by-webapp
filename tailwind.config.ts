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
        "py-peach-fuzz": "#FFB28C",
        "py-white": "#FFFFFF",
        "py-light-peach-fuzz": "#FFB28C10",
        "py-20-peach-fuzz": "#FFB28C20",
        "py-25-peach-fuzz": "#FFB28C25",
        "py-orange": "#F79464",
        "py-darken-blue": "#00071D",
      },
    },
  },
  plugins: [],
};
export default config;
