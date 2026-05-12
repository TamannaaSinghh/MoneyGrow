import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        ink: {
          DEFAULT: "#0E1116",
          soft: "#1A1F26",
        },
        teal: {
          50: "#EEF6F4",
          100: "#D4E8E3",
          200: "#A8D1C7",
          300: "#6FB1A2",
          400: "#3D8C7B",
          500: "#1F6E5D",
          600: "#0B4F44",
          700: "#073B33",
          800: "#052A24",
          900: "#031C18",
        },
        gold: {
          50: "#FBF5E8",
          100: "#F4E6C2",
          200: "#E9CE8B",
          300: "#DDB762",
          400: "#C9A55C",
          500: "#A8863F",
          600: "#806529",
        },
        slate: {
          ink: "#3B4654",
        },
        mist: "#F5F6F4",
        paper: "#FFFFFF",
        cream: "#FAF8F2",
      },
      letterSpacing: {
        "tightish": "-0.01em",
        "tighter2": "-0.02em",
        "tighter3": "-0.035em",
      },
      maxWidth: {
        "container": "1240px",
      },
      borderRadius: {
        md: "6px",
      },
      boxShadow: {
        "soft": "0 1px 2px rgba(14,17,22,0.04), 0 8px 24px -16px rgba(14,17,22,0.18)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "marquee": "marquee 40s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
