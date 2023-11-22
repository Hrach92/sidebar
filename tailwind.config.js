/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontWeight: {
        font700: 700,
        font600: 600,
        font500: 500,
        font400: 400,
      },
      fontFamily: {
        gilroy: "var(--gilroy)",
      },
      fontSize: {
        size16: "16px",
        size14: "14px",
        size12: "12px",
      },
      colors: {
        grey: "var(--GREY)",
        black: "var(--BLACK)",
        line: "var(--LINE)",
        grey3: "var(--Grey_3)",
      },
      letterSpacing: {
        ls: "0.48px",
      },
      spacing: {
        25: "25px",
      },
    },
  },
  plugins: [],
};
