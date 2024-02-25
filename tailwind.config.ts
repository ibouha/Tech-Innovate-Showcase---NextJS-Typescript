import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo:["Wallpoet","sans-serif"],
        primary: ["Poppins","sans-serif"],
      }, 
      backgroundImage: {
        'hero-pattern': "url('./public/images/bgimage.svg')",
      }
    },
  },
  plugins: [],
};
export default config;
