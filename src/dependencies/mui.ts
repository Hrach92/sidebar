import { createTheme } from "@mui/material/styles";

export default createTheme({
  typography: {
    allVariants: {
      color: "var(--BLACk)",
    },
    subtitle1: {
      fontWeight: "500",
      fontSize: "14px",
      fontStyle: "normal",
      lineHeight: "126.9%",
      letterSpacing: "0.48px",
      fontFamily: "var(--gilroy)",
    },
    h4: {
      fontSize: "16px",
      fontWeight: "700",
      fontStyle: "normal",
      lineHeight: "126.9%",
      letterSpacing: "0.48px",
      fontFamily: "var(--gilroy)",
    },
    caption: {
      fontSize: "12px",
      fontWeight: "400",
      fontStyle: "normal",
      lineHeight: "126.9%",
      letterSpacing: "0.48px",
      fontFamily: "var(--gilroy)",
    },
  },
  components: {
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          margin: "0",
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          paddingLeft: "0",
        },
      },
    },
    MuiPopper: {
      styleOverrides: {
        root: {
          ">div>div>div>div": {
            width: "278px",
          },
        },
      },
    },
  },
});
