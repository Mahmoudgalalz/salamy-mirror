import type { Config } from 'tailwindcss'
import {nextui} from "@nextui-org/react"

const config: Config = {
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes:{
      light:{
        colors:{
          background:"#F8F7FF",
          foreground:"#FFEEDD",
          primary:{
            foreground:"#F05B5B",
            DEFAULT:"#FCD961"
          },
          content1:{
            foreground:"#656667", 
            DEFAULT:"#333D42"
          },
          content2:{
            foreground:"#045346",
            DEFAULT:"#000"
          },
          focus:{
            foreground:"#FFEEDD",
            DEFAULT:"#FCD961",
          },
          divider:{
            foreground:"#656667",
            DEFAULT:"#E9E3D4"
          },
          secondary:{
            foreground:"#FCD961",
            DEFAULT:"#F05B5B"
          },
          default:"#fafafa"
        }
      }
    }
  })]
}
export default config
