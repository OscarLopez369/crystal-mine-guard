import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        mining: {
          gold: "hsl(var(--mining-gold))",
          "gold-glow": "hsl(var(--mining-gold-glow))",
          "encryption-cyan": "hsl(var(--encryption-cyan))",
          "encryption-cyan-glow": "hsl(var(--encryption-cyan-glow))",
          "tunnel-dark": "hsl(var(--tunnel-dark))",
          "ore-vein": "hsl(var(--ore-vein))",
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
        "ore-pulse": {
          "0%": { boxShadow: "0 0 15px hsl(45 85% 55% / 0.3)" },
          "100%": { boxShadow: "0 0 30px hsl(45 85% 55% / 0.6)" },
        },
        "encrypt-pulse": {
          "0%": { boxShadow: "0 0 10px hsl(190 85% 60% / 0.2)" },
          "100%": { boxShadow: "0 0 25px hsl(190 85% 60% / 0.4)" },
        },
        "crystal-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(45 95% 75% / 0.4)" },
          "50%": { boxShadow: "0 0 50px hsl(45 95% 75% / 0.8)" },
        },
        "tunnel-flow": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "mesh-shift": {
          "0%": { backgroundPosition: "0 0, 0 0, 10px 10px, 10px 10px" },
          "100%": { backgroundPosition: "20px 20px, 20px 20px, 30px 30px, 30px 30px" },
        },
        "pickaxe-swing": {
          "0%, 100%": { transform: "rotate(-15deg) translateY(0)" },
          "50%": { transform: "rotate(25deg) translateY(-8px)" },
        },
        "mining-particle": {
          "0%": { opacity: "0", transform: "translateY(0) scale(0.5)" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { opacity: "0", transform: "translateY(-100px) scale(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "ore-pulse": "ore-pulse 2s ease-in-out infinite alternate",
        "encrypt-pulse": "encrypt-pulse 1.5s ease-in-out infinite alternate",
        "crystal-pulse": "crystal-pulse 3s ease-in-out infinite",
        "tunnel-flow": "tunnel-flow 3s linear infinite",
        "mesh-shift": "mesh-shift 4s linear infinite",
        "pickaxe-swing": "pickaxe-swing 2s ease-in-out infinite",
        "mining-particle": "mining-particle 2s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
