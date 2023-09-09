import Layout from "@/components/Layout/layout";
import EpisodesList from "@/components/EpisodesList";
import FeedbackSection from "@/components/FeedbackSection";
import BaseCard from "@/components/Card/BaseCard";
import Parser from "rss-parser"; 
import Jumbotron from "@/components/Jumbotron/jumbotron";
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const parser = new Parser();

export async function getStaticProps() {
  const jumbotronContent = yaml.load(fs.readFileSync(path.resolve(process.cwd(), 'content', 'podcast', 'jumbotronContent.yaml'), 'utf8'));
  const ourTeam = yaml.load(fs.readFileSync(path.resolve(process.cwd(), 'content', 'podcast', 'ourTeam.yaml'), 'utf8'));
  const url = "https://anchor.fm/s/13a00fc4/podcast/rss";
  const feed = await parser.parseURL(url);
  const topEpisodes = feed.items
    .map(episode => ({
        ...episode,
        content: `${episode.content.substring(0, 120)}...`
    }))
    .slice(0, 5);

  return {
    props: {
      ourTeam,
      jumbotronContent,
      topEpisodes,
    },
  };
}

export default function Home({topEpisodes, jumbotronContent, ourTeam }) {
  return (
    <Layout 
    title="CrossTalk.fm - バイリンガル英会話ポッドキャスト"
    description="CrossTalk.FMは、海外のニュースや感動的なストーリーや日常の小さな驚きを、英語と日本語で自由に語るポッドキャストです">
        <Jumbotron content={jumbotronContent} />
        <FeedbackSection />
        <div className="flex flex-col md:flex-row md: ">
        <BaseCard data={ourTeam} />
        </div>
        <EpisodesList episodes={topEpisodes} />
    </Layout>
  );
}
