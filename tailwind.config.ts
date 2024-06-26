import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      
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
    keyframes : {
      'infinite-scroll': {
        from: {
          transform: 'translateX(0)'
        },
        to: {
          transform: 'translateX(-100%)'
        }
      }
    }
    
  },

  plugins: [],
};
export default config;
