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
        'bg-color': '#22262F',
        'home-box-bg': '#16181d',
        'hover-color': '#283540',
        'text-color-react': '#139ECA',
      },
    },
  },
  plugins: [],
}

export default config
