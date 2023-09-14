import Head from "next/head";
import Navbar from "@/components/Navbar/index";
import Footer from "../Footer";
import { GoogleAnalytics } from "nextjs-google-analytics";

const Layout = ({
  children,
  title = "CROSSTALK",
  description = "",
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: "https://crosstalk.me/eikaiwa-school",
    name: title,
  };

  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          key="jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      <Navbar />
      <main className="px-5 max-w-screen-lg mx-auto flex flex-col gap-8">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
