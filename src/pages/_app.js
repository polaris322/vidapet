import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

/*all css import*/
import "../../public/assets/scss/main.scss";

import Loading from "../components/Loading.jsx";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("../../public/assets/js/bootstrap.bundle.min.js");
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <>
      <Head>
        <title>VidaPet - Innovative pet care and nutrition</title>
        <meta name="description" content="Innovative pet care and nutrition" />
        <link rel="icon" href="assets/images/sm-logo.svg" />
      </Head>
      {loading ? <Loading /> : <Component {...pageProps} />}
    </>
  );
}

export default MyApp;
