/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        light: "url('/src/assets/الاقصى_نهارا.jpg')",
        dark: "url('/src/assets/الاقصى_ليلا.jpeg')",
      },
      fontFamily: {
        النسخ: ["النسخ", "sans-serif"],
        المزخرف: ["المزخرف", "sans-serif"],
        reemKufi: ["Reem Kufi", "sans-serif"],
        الاميري: ["Almarai", "sans-serif"],
        زين: ["Zain", "sans-serif"],
      },
      transitionDuration: {
        250: "250ms",
        400: "400ms",
      },
      colors: {
        light: {
          primary: "#187590",
          secondary: "#2aaed4",
          transparent: {
            100: "background: linear-gradient(100deg, rgba(17,24,39,0) 0%, rgba(17,24,39,0.742734593837535) 100%);",
            200: "#8c8c8c",
          },
        },
        dark: {
          primary: "#ffffff",
          secondary: "#8c8c8c",
          transparent: {
            100: "#111827a0",
            200: "#111827c0",
          },
        },
      },
    },
  },
  plugins: [],
};
