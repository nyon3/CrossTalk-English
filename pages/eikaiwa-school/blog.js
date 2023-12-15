import Link from "next/link";
import { getSortedPostsData } from "../../lib/news";
import Layout from "@/components/Layout/layout";

export async function getStaticProps() {
  const postsData = getSortedPostsData("blog");
  return {
    props: {
      postsData,
    },
  };
}

export default function Blog({ postsData }) {
  return (
    <Layout>
      <main>
        <div>
          <h1>ブログ</h1>
          <ul>
            {postsData.map(({ slug, date, title }) => (
              <li key={slug}>
                <Link href={`/blog/${slug}`}>{title}</Link>
                <br />
                <small>{new Date(date).toLocaleDateString()}</small>
              </li>
            ))}
          </ul>
          <Link href="/">Go to home</Link>
        </div>
      </main>
    </Layout>
  );
}
