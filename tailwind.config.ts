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
        carbon: "#1E252A",
        emerald: {
          500: "#197853",
        },
        earth: {
          500: "#A1463E",
        },
        system: {
          blue: "#3972B4",
        },
        signal: {
          orange: "#E26900",
        },
        electric: {
          blue: "#0015FF",
        },
        neon: {
          cyan: "#00FFF1",
        },
      },
      fontFamily: {
        display: ["var(--font-helvetica)", "sans-serif"],
        body: ["var(--font-geist)", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.03em",
      },
      lineHeight: {
        relaxed: "1.7",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
