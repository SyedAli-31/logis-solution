import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
   theme: {
    extend: {
      colors: {
        gray: {
          600: '#585858', // Header and hero background color
        },
        green: {
          500: '#23c55e', // Button color
          600: '#1ea451', // Button hover color
        },
        orange: {
          500: '#ff6630', // Orange text and button color
          600: '#e64a19', // Orange hover color
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Using Inter font to match design
      },
    },
  },
  plugins: [],
};


export default config;
