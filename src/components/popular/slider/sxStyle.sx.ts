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
  values: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    ">p": {
      color: "var(--Gray_1, #858585)",
      fontFamily: "var(--gilroy)",
      fontSize: "12px",
      fontStyle: "normal",
      fontWeight: "500",
      lineHeight: "126.9%",
      letterSpacing: "0.36px",
    },
  },
};
export default sxStyle;
