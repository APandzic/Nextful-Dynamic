import "src/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto_Flex, Sriracha, Barlow } from "@next/font/google";
import Head from "next/head";

const roboto = Roboto_Flex({
  subsets: ["latin"],
});

const barlow = Barlow({
  weight: ["100","200","300", "400", "500", "600", "700", "800", "900"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <meta
          name="description"
          content="Welcome to Bissmark Sports Agency! We are a full-service sports agency, representing top athletes and coaches in a variety of sports. Our team of experienced agents works tirelessly to secure the best contracts and opportunities for our clients. Contact us today to learn more about how we can help you achieve your athletic goals."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <style jsx global>
        {`
          :root {
            --roboto-font: ${roboto.style.fontFamily};
            --barlow-font: ${barlow.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
