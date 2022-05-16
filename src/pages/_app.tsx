import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";

export default function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <Script
          defer
          data-domain="samking.design"
          src="https://plausible.io/js/plausible.js"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
