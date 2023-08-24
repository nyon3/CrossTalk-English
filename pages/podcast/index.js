/**
 * Home Page
 *
 * This is the main page component of the application. It includes several other reusable
 * components to create a structured and visually appealing layout. The data used in this
 * component is fetched during build time using Next.js's getStaticProps.
 *
 * @component
 * @prop {Array} allPostsData - An array of post data fetched from the getStaticProps function.
 */

// Components
import Layout from "@/components/layout";
import EpisodesList from "@/components/EpisodesList";
import FeedbackSection from "@/components/FeedbackSection";
import Card from "@/components/Card/BaseCard";
import ReviewCard from "@/components/Card/ReviewCard/ReviewCard";
import Parser from "rss-parser"; 
import Image from "next/image";
import Jumbotron from "@/components/Podcast_components/Jumbotron"

// Modules
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';


// Assets
import heroPic from "../../public/images/podcasting.jpg";

const parser = new Parser();

export async function getStaticProps() {

  
  // Reading the YAML content
  const jumbotronContent = yaml.load(fs.readFileSync(path.resolve(process.cwd(), 'content', 'podcast', 'jumbotronContent.yaml'), 'utf8'));
  const ourTeam = yaml.load(fs.readFileSync(path.resolve(process.cwd(), 'content', 'podcast', 'ourTeam.yaml'), 'utf8'));
  // RSS Data Fetching
  const url = "https://anchor.fm/s/13a00fc4/podcast/rss";
  const feed = await parser.parseURL(url);

  // Truncate the content of each episode and get the first 5
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
    <Layout>
        <Jumbotron data={jumbotronContent} />
        <FeedbackSection />
        <div className="flex flex-col md:flex-row">
        <ReviewCard data={ourTeam} />
        </div>
        <EpisodesList episodes={topEpisodes} />
    </Layout>
  );
}
