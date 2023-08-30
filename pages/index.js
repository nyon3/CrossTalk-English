import { useEffect } from 'react';
import { useRouter } from 'next/router';

// Components
import Layout from "@/components/Layout/layout";

export default function TemporaryLanding() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace('/school');
  }, []);

  return (
    <Layout 
      title="Welcome to CrossTalk" 
      description="Navigate to the service you're interested in."
    >
      <p>Redirecting...</p>
    </Layout>
  );
}


// This code load /school in the server side, but it get warning in the console.
// export async function getServerSideProps(context) {
//   context.res.writeHead(301, { Location: '/school' });
//   context.res.end();
//   return { props: {} }; // needed to comply with Next.js data fetching requirements
// }
