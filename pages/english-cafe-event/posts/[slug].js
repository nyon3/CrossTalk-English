import { useRouter } from "next/router";
import Head from "next/head";
import { getPostData, getSortedPostsData } from "@/lib/news";

import Layout from "@/components/Layout/layout";

export async function getStaticPaths() {
  // Fetch the slugs of all news posts
  const paths = getSortedPostsData("news").map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Fetch the data for a single news post
  const postData = await getPostData("news", params.slug);
  return { props: { postData } };
}

export default function BlogPost({ postData }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <main
        style={{
          margin: "3rem",
        }}
      >
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article>
          <p>
            By {postData.author} on{" "}
            {new Date(postData.date).toLocaleDateString()}
          </p>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </main>
    </Layout>
  );
}
