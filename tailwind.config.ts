import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C9A96E",
          light: "#D9BD89",
          dark: "#A8884F",
        },
        ink: "#0A0A0A",
        bone: "#FAFAF7",
        stone: {
          50: "#F7F7F5",
          100: "#EFEFEC",
          200: "#E4E4E0",
        },
      },
      fontFamily: {
        display: [
          "var(--font-display)",
          "Impact",
          "system-ui",
          "sans-serif",
        ],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        // alias retained so existing `font-serif` classes still resolve
        serif: ["var(--font-display)", "Impact", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        wider2: "0.18em",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06)",
        lift: "0 4px 12px rgba(0,0,0,0.06), 0 24px 48px rgba(0,0,0,0.08)",
        gold: "0 8px 30px rgba(201,169,110,0.25)",
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #C9A96E 0%, #E4CFA2 50%, #C9A96E 100%)",
        "fade-bottom":
          "linear-gradient(180deg, rgba(255,255,255,0) 0%, #FFFFFF 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "fade-in": "fadeIn 1s ease-out forwards",
        shimmer: "shimmer 3s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
