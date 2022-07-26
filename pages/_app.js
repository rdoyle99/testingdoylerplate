import { SessionProvider } from "next-auth/react";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "@/components/styles/nprogress.css";
import "tailwindcss/tailwind.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <SessionProvider session={session} refetchInterval={5 * 60}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default App;
