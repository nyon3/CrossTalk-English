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

import styles from "@/styles/Home.module.css";

// Components
import Layout from "@/components/layout";
import Jumbotron from "@/components/Jumbotron/jumbotron";
import NewsSection from "@/components/NewsSection";
import Banner from "@/components/Banner";
import EpisodesList from "@/components/EpisodesList";
import FeedbackSection from "@/components/FeedbackSection";
import ImageWrapper from "@/components/ImageWrapper";
import Card from "@/components/Card";
import Parser from "rss-parser"; // 追加

// Modules
import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

// Data Fetching
import { getSortedPostsData } from "../../lib/content";

// Assets
import heroPic from "../../public/images/podcasting.jpg";

const parser = new Parser();

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  
  // Reading the YAML content
  const jumbotronContent = yaml.load(fs.readFileSync(path.resolve(process.cwd(), 'content', 'podcast', 'jumbotronContent.yaml'), 'utf8'));
  
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
      allPostsData,
      jumbotronContent,
      topEpisodes,
    },
  };
}

export default function Home({ allPostsData, topEpisodes, jumbotronContent }) {
  return (
    <Layout>
        <Banner newsData={allPostsData} />
        <Jumbotron content={jumbotronContent} imgSrc={heroPic} imgAlt="A person recording a podcast" />
        <NewsSection allPostsData={allPostsData} />
        <FeedbackSection />
        <EpisodesList episodes={topEpisodes} />
        <Card type="base" data="tutors" showButton={false} />
    </Layout>
  );
}
