import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./types/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        arena: "#f5efe4",
        bosque: "#1f4d3a",
        musgo: "#7b9b6a",
        rio: "#5c8ca7",
        piedra: "#e7dfd2",
        grafito: "#21302b",
        sol: "#f2b24f"
      },
      boxShadow: {
        card: "0 20px 45px -28px rgba(31, 77, 58, 0.45)"
      },
      backgroundImage: {
        hero: "radial-gradient(circle at top, rgba(242, 178, 79, 0.32), transparent 35%), linear-gradient(135deg, #f7f1e6 0%, #eef5ef 40%, #f3ece2 100%)"
      }
    }
  },
  plugins: []
};

export default config;
