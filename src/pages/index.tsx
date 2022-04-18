import Head from 'next/head';

import { Footer } from '../components/Footer';
import { About } from '../components/Sessions/About';
import { Welcome } from '../components/Sessions/Welcome';

function Page() {
  return (
    <>
      <Head><title>Starbucks</title></Head>
      <Welcome />
      <About />
      <Footer />
    </>
  );
}

export default Page;