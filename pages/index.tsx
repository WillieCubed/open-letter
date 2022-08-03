import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import OpenLetterList from '../components/OpenLetterList';
import SiteFooter from '../components/SiteFooter';
import { getLetters, OpenLetter } from '../lib/letters';

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  letters,
}) => {
  return (
    <div className="h-screen w-screen flex flex-col bg-primary text-white">
      <Head>
        <title>Open Letter</title>
        <meta name="description" content="A place to share your thoughts." />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content="Open Letter: Share your thoughts " />
        <meta
          property="og:description"
          content="Open Letter is a service to let you share a letter to people that's accessible with a link."
        />
        <meta property="og:type" content="website" />
      </Head>

      <main className="h-full grid place-items-center">
        <div className="p-4 font-bold font-display text-center">
          <div className="text-4xl">Open Letter.</div>
          <div className="my-2 text-xl">Take a peek.</div>
        </div>
      </main>
      <section id="letters">
        <div className="max-w-3xl mx-auto px-4 transition-all ease-in-out">
          <h1 className="font-display font-bold text-2xl text-center md:text-left mb-3">
            A random open letter
          </h1>
          <OpenLetterList letters={letters} limit={1} />
        </div>
      </section>
      <SiteFooter />
    </div>
  );
};

export default Home;

type HomePageProps = {
  letters: OpenLetter[];
};

export const getStaticProps: GetStaticProps<HomePageProps> = async () => {
  const letters = await getLetters();
  return {
    props: {
      letters: letters,
    },
  };
};
