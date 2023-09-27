// Components
import Layout from "@/components/Layout/layout";
import Head from "next/head";

export default function TemporaryLanding() {
  return (
    <Layout
      title="Welcome to CrossTalk"
      description="Navigate to the service you're interested in."
    >
      <Head>
        <link rel="canonical" href="https://crosstalk.me/eikaiwa-school" />
      </Head>
      <p>Redirecting...</p>
    </Layout>
  );
}
