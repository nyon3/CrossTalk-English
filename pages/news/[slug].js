import { useRouter } from "next/router";
import Head from "next/head";
import { getPostData, getSortedPostsData } from "../../lib/content";
import Link from "next/link";
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
    <div>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1>{postData.title}</h1>
        <p>
          By {postData.author} on {new Date(postData.date).toLocaleDateString()}
        </p>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <Link href="/">Go to home</Link>
    </div>
  );
}
