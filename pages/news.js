import Link from "next/link";
import { getSortedPostsData } from "../lib/content";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Blog({ allPostsData }) {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {allPostsData.map(({ slug, date, title }) => (
          <li key={slug}>
            <Link href={`/news/${slug}`}>{title}</Link>
            <br />
            <small>{new Date(date).toLocaleDateString()}</small>
          </li>
        ))}
      </ul>
      <Link href="/">Go to home</Link>
    </div>
  );
}
