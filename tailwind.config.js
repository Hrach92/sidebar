/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontWeight: {
        regular: 700,
        middle: 600,
        light: 500,
        small: 400,
      },
      fontFamily: {
        regular: "var(--gilroy)",
        light: "var(--gilroy)",
      },
      fontSize: {
        regular: "16px",
        small: "12px",
        light: "14px",
      },
      colors: {
        grey: "var(--GREY)",
        black: "var(--BLACK)",
      },
      spacing: {
        25: "25px",
      },
    },
  },
  plugins: [],
};
