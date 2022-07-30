import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen flex flex-col bg-[#3C84FC] text-white">
      <Head>
        <title>Open Letter</title>
        <meta name="description" content="A place to share your thoughts." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-full grid place-items-center">
        <div className="p-4 font-bold text-center">
          <div className="text-3xl">Open Letter.</div>
          <div className="my-2 text-lg">Coming soon.</div>
        </div>
      </main>
      <footer className="p-4 text-center bg-blue-600 text-white">
          A{' '}
          <a className="text-[#00FCA8] font-bold" href="https://williecubed.me">
            WillieCubed
          </a>{' '}
          project
      </footer>
    </div>
  );
};

export default Home;
