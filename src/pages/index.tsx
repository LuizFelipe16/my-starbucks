import Head from 'next/head';

import { Footer } from '../components/Footer';
import { About } from '../components/Sessions/About';
import { Welcome } from '../components/Sessions/Welcome';

function Home() {
  return (
    <>
      <Head><title>Home | Starbucks</title></Head>
      <Welcome />
      <About />
      <Footer />
    </>
  );
}

export default Home;