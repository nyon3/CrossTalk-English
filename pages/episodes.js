// /pages/episodes.js
import Parser from "rss-parser";
import Layout from "@/components/layout";
import EpisodesList from "@/components/EpisodesList";
// これはページコンポーネントの外に置くことで、サーバーサイドでのみ実行されます
const parser = new Parser();

export async function getStaticProps() {
  const url = "https://anchor.fm/s/13a00fc4/podcast/rss";

  const feed = await parser.parseURL(url);

  // Cut the content of each episode to the first 30 characters
  const episodes = feed.items.map((episode) => {
    return {
      ...episode,
      content: episode.content.substring(0, 120) + "...", // adding '...' to indicate that text is truncated
    };
  });

  return { props: { episodes } };
}

export default function Episodes({ episodes }) {
  return (
    <Layout>
        <h1>Podcast Episodes</h1>
        {/* episodes のデータを使って各エピソードを表示します */}
        <EpisodesList episodes={episodes} /> {/* これを使用 */}
    </Layout>
  );
}
