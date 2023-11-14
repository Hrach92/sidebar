const sxStyle = {
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    padding: "0",
    gap: "20px",
    marginTop: "25px",
  },
  item: {
    marginTop: "10px",
    ">div": {
      height: "34px",
      ">input": {
        fontSize: "12px",
        fontWeight: "400",
        color: "var(--GREY)",
        fontFamily: "var(--gilroy)",
        fontStyle: "normal",
        lineHeight: "126.9%",
        letterSpacing: "0.36px",
      },
    },
  },
};
export default sxStyle;
