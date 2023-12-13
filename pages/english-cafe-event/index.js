import Layout from "@/components/Layout/layout";
import Image from "next/image"; // Next.jsのImageコンポーネントをインポート

export default function CafeEvent() {
  return (
    <Layout>
      <div className="container max-w-lg mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          英会話のコミュニケーションの場、ここにあります。
        </h1>

        <div className="mb-6 flex justify-center items-center">
          <Image
            src="images/discussion.jpg"
            alt="英会話カフェの画像"
            width={600}
            height={400}
          />
        </div>

        <p className="text-lg text-center text-gray-600 mb-6">
          CrossTalk英会話スクールがお届けする英会話のイベント
        </p>

        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          英会話カフェとは？
        </h2>
        <p className="text-gray-600 mb-6">
          CrossTalk英会話カフェは、ただのカフェではありません。これは、新しい言語を学び、異文化を体験し、心を開いた人々と交流する場所です。私たちのカフェでは、英語を自然な形で話しながら、楽しく学ぶことができます。
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          私たちのサービス
        </h3>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li>
            英会話カフェ・デイ:
            経験豊富なネイティブスピーカーとのリラックスした会話を楽しんでください。
          </li>
          <li>
            文化交流イベント:
            様々な文化を体験し、新しい友達を作る機会を提供します。
          </li>
          <li>
            言語ワークショップ:
            英語のスキルを磨くための特別なワークショップを定期的に開催します。
          </li>
        </ul>

        <p className="text-lg text-center text-gray-800 mb-8">
          あなたが英語の初心者であっても、流暢な話者であっても、CrossTalk英会話カフェはあなたを歓迎します。友達を作り、新しい言葉を学び、素晴らしい経験を共有しましょう。お待ちしています！
        </p>

        <p className="text-lg text-center text-gray-600 mb-8">
          次回のカフェイベントの開催日は現在調整中です。最新の情報を受け取りたい方は、ぜひLineで私たちを友達登録してください。イベントの詳細が決まり次第、皆様にお知らせします！お楽しみに♪
        </p>

        <div className=" flex justify-center items-center">
          <a href="https://lin.ee/tJyOBpg">
            <Image
              src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
              alt="友だち追加"
              height="36"
              width="200"
              border="0"
            />
          </a>
        </div>
      </div>
    </Layout>
  );
}
