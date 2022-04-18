import Head from 'next/head';

import { Footer } from '../components/Footer';
import { Welcome } from '../components/Sessions/Welcome';

function Page() {
  return (
    <>
      <Head><title>Starbucks</title></Head>
      <Welcome />
      <Footer />
    </>
  );
}

export default Page;