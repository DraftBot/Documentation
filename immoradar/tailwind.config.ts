import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef6ff",
          100: "#d9eaff",
          200: "#bcdaff",
          300: "#8ec2ff",
          400: "#589fff",
          500: "#2f7bff",
          600: "#155ceb",
          700: "#1049be",
          800: "#123f96",
          900: "#143776",
          950: "#0d2148",
        },
        ink: {
          50: "#f6f7f9",
          100: "#eceef1",
          200: "#d5dae1",
          300: "#b0b9c6",
          400: "#8493a6",
          500: "#64748b",
          600: "#4e5d73",
          700: "#404c5e",
          800: "#38414f",
          900: "#232933",
          950: "#15191f",
        },
        good: "#1a9e63",
        warn: "#c8790a",
        bad: "#d13a3a",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 2px rgba(15, 23, 42, 0.04), 0 4px 16px rgba(15, 23, 42, 0.06)",
        pop: "0 8px 30px rgba(15, 23, 42, 0.12)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
