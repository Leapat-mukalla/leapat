import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
        nav_color: '#A5A5A5',
        blueShade: "#75A3B1",
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
      },
      // backgroundImage: {
      //   'custom-gradient': 'linear-gradient(to right, #986CAC, #9A9A9A, #75A3B1, #262626, #FFFFFF)',
      // },
      // backgroundImage: {
      //   'custom-gradient': 'linear-gradient(to right, #986CAC 0%, #986CAC 20%, #9A9A9A 20%, #9A9A9A 40%, #75A3B1 40%, #75A3B1 60%, #262626 60%, #262626 80%, #FFFFFF 80%, #FFFFFF 100%)',
      //   back: "url('./svgs/bg.png')"
      // },
      // backgroundImage: {
      //   'custom-gradient': 'linear-gradient(to top, #986CAC 100%, #9A9A9A 60%, #75A3B1 30%, #262626 10%, #FFFFFF 0%)',
      // },
      backgroundImage: {

        // 'custom-gradient': 'linear-gradient(to top right , rgba(0, 0, 0, 0.7), rgba(117, 163, 177, 0.7) 25%, rgba(154, 154, 154, 0.7) 50%, rgba(152, 108, 172, 0.7) 75%, rgba(0, 0, 0, 0.7))', // good
        // 'symbols-background' :"url('/src/svgs/Symbols.svg')",

        'custom-gradient': "linear-gradient(to right, rgba(152,108,172, 0.5), rgba(154,154,154, 0.5), rgba(117,163,177, 0.5)), url('/src/svgs/Symbols.svg')",


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
