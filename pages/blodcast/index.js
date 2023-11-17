import Link from "next/link";
import { getSortedPostsData } from "@/lib/blog";
import Layout from "@/components/Layout/layout";

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
    <Layout>
      <main>
        <div>
          <h1>Blog</h1>
          <ul>
            {allPostsData.map(({ slug, date, title }) => (
              <li key={slug}>
                <Link href={`blodcast/posts/${slug}`}>{title}</Link>
                <br />
                <small>{new Date(date).toLocaleDateString()}</small>
              </li>
            ))}
          </ul>
          <Link href="/eikaiwa-school">Go to home</Link>
        </div>
      </main>
    </Layout>
  );
}
