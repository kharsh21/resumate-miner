import "@/app/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@/context/ThemeContext";

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Head>
        <title>ResuMate</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
