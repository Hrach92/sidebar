const sxStyle = {
  container: {
    marginTop: "10px",
  },
  menu: {
    position: "absolute",
    maxWidth: "278px",
    width: "280px",
    background: "#fff",
    zIndex: "2",
    overflow: "auto",
    borderRadius: "3px",
    boxShadow: "0px 0px 15px 0px rgba(0, 0, 0, 0.20)",
    height: "calc(100vh - 340px)",
    "&::-webkit-scrollbar": {
      width: "3px",
    },
  },
  button: {
    fontSize: "12px",
    fontWeight: "400",
    color: "var(--GREY)",
    fontFamily: "var(--gilroy)",
    fontStyle: "normal",
    lineHeight: "126.9%",
    letterSpacing: "0.36px",
    border: "1px solid var(--GREY)",
    width: "100%",
    justifyContent: "space-between",
    height: "34px",
    padding: "0 21px 0 15px",
    textTransform: "capitalize",
    "&:hover": {
      background: "#fff",
    },
  },
  item: {
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "20px",
  },
  active: {
    color: "var(--Coral)",
  },
};
export default sxStyle;
