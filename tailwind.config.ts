import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary' : '#ffc33d',
        'secondary' : '#0E0A04',
        'hq' : '#F5F5DC'
      },
      fontFamily: {
        'primary': 'Good Timing',
        'secondary' : 'Bangers',
        'terciary' : 'Bebas Neue'
      },
      colors: {
        'primary' : '#FFC33D',
        'secondary' : '#0e0a04'
      },
      borderColor : {
        'primary' : '#FFC33D'
      },
      height: {
        'lp' : '34rem'
      }
    },
  },
  plugins: [],
};
export default config;
