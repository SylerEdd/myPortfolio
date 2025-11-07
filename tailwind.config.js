/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false,
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        secondary: "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",
        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",
        destructive: "var(--destructive)",
        "destructive-foreground": "var(--destructive-foreground)",
        border: "var(--border)",
        ring: "var(--ring)",
      },

      /** 👇 This part tells Tailwind "border-border" is valid */
      borderColor: {
        DEFAULT: "var(--border)",
        border: "var(--border)",
      },

      outlineColor: {
        ring: "var(--ring)",
      },
    },
  },
  plugins: [],
};
