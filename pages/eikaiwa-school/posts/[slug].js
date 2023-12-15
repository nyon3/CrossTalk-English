import { useRouter } from "next/router";
import Head from "next/head";
import { getPostData, getSortedPostsData } from "@/lib/news";

import Layout from "@/components/Layout/layout";

export async function getStaticPaths() {
  // Fetch the slugs of all news posts
  const paths = getSortedPostsData("blog").map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Fetch the data for a single news post
  const postData = await getPostData("blog", params.slug);
  return { props: { postData } };
}

export default function BlogPost({ postData }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
              {postData.title}
            </h1>
            <p className="text-sm text-gray-600">
              By {postData.author} on{" "}
              {new Date(postData.date).toLocaleDateString()}
            </p>
          </header>
          <section
            className="prose lg:prose-xl max-w-none text-lg leading-relaxed"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </article>
      </main>
    </Layout>
  );
}
