import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        neongreen: "var(--neongreen)",
        container: "var(--container)",
        border: "var(--border)",
        card: "var(--card)",
      },
      boxShadow: {
        "custom-light": "0 4px 6px rgba(0, 0, 0, 0.1)", // Light mode shadow
        "custom-dark": "0 4px 6px rgba(255, 255, 255, 0.1)", // Dark mode shadow
      },
    },
  },
  plugins: [],
};
export default config;
