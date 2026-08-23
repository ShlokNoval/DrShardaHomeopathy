import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1B5E35",
          light: "#2E7D50",
          dark: "#0F3D22",
        },
        secondary: {
          DEFAULT: "#C9A84C",
          light: "#E8C96D",
        },
        accent: "#7FB069",
        cream: {
          DEFAULT: "#FAF8F3",
          alt: "#F0EDE4",
        },
        charcoal: "#1A1A2E",
        muted: "#5A5A72",
        globule: "rgba(232, 245, 233, 0.6)",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      keyframes: {
        floatUp: {
          "0%": {
            transform: "translateY(0px) translateX(0px)",
            opacity: "0",
          },
          "10%": { opacity: "var(--globule-opacity, 0.3)" },
          "50%": { transform: "translateY(-50vh) translateX(15px)" },
          "90%": { opacity: "var(--globule-opacity, 0.3)" },
          "100%": {
            transform: "translateY(-110vh) translateX(-5px)",
            opacity: "0",
          },
        },
        pulseRing: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(1.5)", opacity: "0" },
        },
        bounceArrow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(8px)" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        typingDot: {
          "0%, 60%, 100%": { transform: "translateY(0)" },
          "30%": { transform: "translateY(-4px)" },
        },
      },
      animation: {
        "float-up": "floatUp var(--duration, 10s) var(--delay, 0s) infinite linear",
        "pulse-ring": "pulseRing 2s ease-out infinite",
        "bounce-arrow": "bounceArrow 1.5s ease-in-out infinite",
        "slide-up": "slideUp 0.5s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "typing-dot": "typingDot 1.4s ease-in-out infinite",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;
