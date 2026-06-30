import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#C8102E",
          dark: "#111111",
          gray: "#1f2937"
        }
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Arial", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
