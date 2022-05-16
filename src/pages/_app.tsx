import type { AppProps } from "next/app";
import Script from "next/script";
import "../styles/globals.css";

export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script
        defer
        data-domain="samking.design"
        src="https://plausible.io/js/plausible.js"
      />
      <Component {...pageProps} />
    </>
  );
}
