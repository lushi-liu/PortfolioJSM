import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: "class",
  content: [
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
      colors :{
        "white-900": "#FFFFFF",
        "white-800": "#F3F8FF",
        "white-500": "#6F74A7",
        "black-200": "#151E2C",
        "black-300": "#29374C",
        "black-400": "#778295",
      }
    },
  },
  plugins: [],
}
export default config
