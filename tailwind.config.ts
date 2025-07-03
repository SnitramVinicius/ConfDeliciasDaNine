import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rosaPastel: "#FFD1DC",
        creme: "#FFF8E7",
        marromClaro: "#A9746E",
      },
      fontFamily: {
        script: ["Pacifico", "cursive"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}

export default config
