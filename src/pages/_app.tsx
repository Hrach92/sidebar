import "@/styles/globals.css";
import { ThemeProvider } from "@mui/material";
import type { AppProps } from "next/app";
import theme from "@/dependencies/mui";
import gilroy from "@/fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={gilroy.variable}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  );
}
