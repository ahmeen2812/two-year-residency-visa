import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",        // Updated to root app folder
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Updated to root components folder
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        secondaryBg: "#F8F9FB",
        primaryBlue: "#0A4D9E",
        accentBlue: "#155EEF",
        goldAccent: "#C89B3C",
        textMain: "#111827",
        textSecondary: "#6B7280",
        borderLight: "#E5E7EB",
        hoverBlue: "#EDF4FF",
      },
      fontFamily: {
        heading: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        premium: "0 10px 30px -10px rgba(0, 0, 0, 0.04)",
        "premium-hover": "0 20px 40px -15px rgba(10, 77, 158, 0.08)",
      },
    },
  },
  plugins: [],
};
export default config;