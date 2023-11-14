import localFont from "next/font/local";

const gilroy = localFont({
  src: [
    {
      path: "../pages/fonts/Gilroy/Gilroy-Medium.ttf",
      style: "normal",
    },
    {
      path: "../pages/fonts/Gilroy/Gilroy-Regular.ttf",
      style: "normal",
    },
    {
      path: "../pages/fonts/Gilroy/Gilroy-Light.ttf",
      style: "normal",
    },
  ],
  variable: "--gilroy",
});
export default gilroy;
