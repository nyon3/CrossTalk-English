
import Navbar from "@/components/Navbar/index";
import Footer from "../Footer";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { NextSeo } from "next-seo";

const Layout = ({children}) => {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <NextSeo 
        title="CROSSTALK 英会話スクール"
        description="岡山市北区丸の内のCrosstalk英会話スクールで、英語を楽しく学ぼう！初心者から経験者まで、あなたに合わせたレッスンで英語力アップ"
        canonical="https://crosstalk.me/eikaiwa-school"
        openGraph={{
          url: "https://crosstalk.me/eikaiwa-school",
          title: "CROSSTALK 英会話スクール",
          description: "岡山市北区丸の内のCrosstalk英会話スクールで、英語を楽しく学ぼう！初心者から経験者まで、あなたに合わせたレッスンで英語力アップ！",
          images: [
            {
              url: "https://crosstalk.me/images/ogp.png",
              width: 1200,
              height: 630,
              alt: "CROSSTALK 英会話スクール",
            },
          ],
          site_name: "CROSSTALK 英会話スクール",
        }}
        twitter={{
          handle: "@CrossTalk_cafe",
          site: "@CrossTalk_cafe",
          cardType: "summary_large_image",
        }}
      />
      <Navbar />
      <main className="px-5 max-w-screen-lg mx-auto flex flex-col gap-8">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
