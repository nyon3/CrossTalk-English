
import { useRouter } from "next/router";
import Head from "next/head";
import { getPostData, getSortedPostsData } from "@/lib/blog";

import Layout from "@/components/Layout/layout";

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getSortedPostsData().map((post) => ({
    params: { slug: post.slug },
  }));
  return {

    paths,
    fallback: false,
  };
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
