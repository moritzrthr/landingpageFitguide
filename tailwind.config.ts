import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#605C3B", // Olive Green
          foreground: "#E4DED4", // Light Beige
        },
        secondary: {
          DEFAULT: "#232519", // Dark Olive Green
          foreground: "#E4DED4", // Light Beige
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#232519", // Dark Olive Green
          foreground: "#E4DED4", // Light Beige
        },
        accent: {
          DEFAULT: "#605C3B", // Olive Green
          foreground: "#E4DED4", // Light Beige
        },
        popover: {
          DEFAULT: "#232519", // Dark Olive Green
          foreground: "#E4DED4", // Light Beige
        },
        card: {
          DEFAULT: "#232519", // Dark Olive Green
          foreground: "#E4DED4", // Light Beige
        },
        // Custom fitflex colors
        fitflex: {
          black: "#111111",
          "dark-olive": "#232519",
          olive: "#605C3B",
          beige: "#E4DED4",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
