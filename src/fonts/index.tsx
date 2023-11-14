import localFont from "next/font/local";

const gilroy = localFont({
  src: [
    {
      path: "../pages/fonts/Gilroy/Gilroy-Medium.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../pages/fonts/Gilroy/Gilroy-Regular.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../pages/fonts/Gilroy/Gilroy-Light.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--gilroy",
});
export default gilroy;
