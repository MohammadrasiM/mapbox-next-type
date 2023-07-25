import Head from "next/head";
import { notFound } from "next/navigation";
import "react-spring-bottom-sheet/dist/style.css";
import "swiper/css";
import "../styles/globals.css";
import Layout from "./LayoutTemplate";

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { [key: string]: string };
}) {
  return (
    <html dir={"ltr"}>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="keywords" content="Shift-chin" />
        <title>Shift-chin</title>
        <meta name="description" content="Shift-chin" />
        <link href="/favicon-16x16.png" rel="icon" type="image/png" sizes="16x16" />
        <link href="/favicon-32x32.png" rel="icon" type="image/png" sizes="32x32" />
        <script src="https://unpkg.com/maplibre-gl@latest/dist/maplibre-gl.js"></script>
        <link href="https://unpkg.com/maplibre-gl@latest/dist/maplibre-gl.css" rel="stylesheet" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" sizes="60x60" href="/assets/icons/app/apple-touch-icon-60x60.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/assets/icons/app/apple-touch-icon-76x76.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/assets/icons/app/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/assets/icons/app/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/app/apple-touch-icon-180x180.png" />
        {/* <link rel="stylesheet" href="https://unpkg.com/react-spring-bottom-sheet/dist/style.css"></link> */}
        {/* Android */}
        <meta name="theme-color" content="#18181b" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Apple */}
        <meta name="apple-mobile-web-app-title" content="Shift-chin" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/app/apple-touch-icon.png" />
      </Head>

      <body>
        <Layout params={params}>{children} </Layout>
      </body>
    </html>
  );
}
