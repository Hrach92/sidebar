const sxStyle = {
  container: {
    width: "100%",
  },
  menu: {
    height: "34px",
    minHeight: "34px",
    border: "0",
    borderRadius: "3px",
    "&.Mui-expanded": {
      minHeight: "34px",
    },
  },
  title: {
    fontWeight: "600",
    color: "var(--Grey_3)",
  },
  label: {
    ">span:nth-of-type(2)": {
      color: "var(--Grey_3)",
      fontFamily: "var(--gilroy)",
      fontSize: "14px",
      fontStyle: "normal",
      fontWeight: "400",
      lineHeight: "126.9%",
      letterSpacing: "0.42px",
    },
  },
};
export default sxStyle;
