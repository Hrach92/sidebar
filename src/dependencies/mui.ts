import { createTheme } from "@mui/material/styles";

export default createTheme({
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
