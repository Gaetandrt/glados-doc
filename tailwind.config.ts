import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'button-bg': '#333842',
        'bg-color': '#292d36',
        'home-box-bg': '#404550',
      },
    },
  },
  plugins: [],
}

export default config
