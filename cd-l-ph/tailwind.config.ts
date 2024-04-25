// content: [
//   './pages/**/*.{ts,tsx}',
//   './components/**/*.{ts,tsx}',
//   './app/**/*.{ts,tsx}',
//   './src/**/*.{ts,tsx}',
//   './src/**/**/*.{ts,tsx}',
//   './app/*.{ts,tsx}',
// ],
//content: ['./src/**/*.html', './src/**/*.{ts,tsx}'],
import defaultTheme from "tailwindcss/defaultTheme"
import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: ['./src/**/*.html', './src/**/*.{ts,tsx}'],
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
        gold: '#D3BE5F',
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
      screens: {
        'm-s': '319px', //568px
        'm-m': '374px', //667px
        'm-l': '413px', //736px
        't-s': '600px', //960px
        't-m': '767px', //1024px
        't-l': '819px', //1180px
        't-x': '1024px', //1366px
        'd-s': '1200px', //800px
        'd-m': '1440px', //900px
        'd-l': '1536px', //960px
      },
      fontFamily: {
        OpenSans: ['Open Sans', 'sans-serif']
      },
    },
  },
} satisfies Config

export default config