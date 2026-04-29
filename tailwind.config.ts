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
        background: "#FFFFFF",
        foreground: "#1a1a2e",
        accent: "#3A4C74",
        "accent-hover": "#2a3c64",
        muted: "#64748b",
        "muted-foreground": "#94a3b8",
        card: "#f8fafc",
        "card-hover": "#f1f5f9",
        border: "#e2e8f0",
        "dark-bg": "#223663",
        "dark-card": "#2D3F5F",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}

export default config