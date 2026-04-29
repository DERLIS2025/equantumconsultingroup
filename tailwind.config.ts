import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#223663",
        foreground: "#FFFFFF",
        accent: "#3A4C74",
        "accent-hover": "#4A5C84",
        muted: "#6B7FA3",
        "muted-foreground": "#9BAAC4",
        card: "#2D3F5F",
        "card-hover": "#354A6B",
        border: "#3A4C74",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}

export default config