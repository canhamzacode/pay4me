import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7AC52D",
        "light-primary": "#AFE274",
        "text-color": "#111827"
      },
      fontFamily: {
        cabinet: ["var(--font-cabinet)"],
      },
      screens: {
        tablet: '970px'
      }
    },
  },
  plugins: [],
} satisfies Config;
