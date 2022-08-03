import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { getLetter, getLetters, OpenLetter } from '../lib/letters';

const OpenLetterPage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ letter }) => {
  const { authors, title, contents, tldr, publishedDate } = letter;

  return (
    <div className="bg-background dark:bg-background-dark">
      <Head>
        <title>{title} - Open Letter</title>
        <meta name="description" content={tldr} />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:site_name" content="Open Letter" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={tldr} />
        <meta property="og:type" content="article" />
        <meta property="article:published" content={publishedDate} />
        {authors.map((author) => (
          <meta
            key={author.name}
            property="article:author"
            content={author.name}
          />
        ))}
      </Head>
      <main className="min-h-screen sm:pt-8 bg-background dark:bg-background-dark dark:text-on-surface-dark">
        <section className="max-w-2xl lg:max-w-3xl min-h-screen p-8 mx-auto lg:shadow-md bg-surface dark:bg-surface-dark rounded-sm">
          <div className="py-4">
            <div className="pb-4 font-display font-bold text-4xl">{title}</div>
            <div>TL;DR: {tldr}</div>
          </div>
          <div>{contents}</div>
        </section>
      </main>
    </div>
  );
};

export default OpenLetterPage;

type PageProps = {
  letter: OpenLetter;
};

type PageParams = ParsedUrlQuery & {
  slug: string;
};

export const getStaticProps: GetStaticProps<PageProps, PageParams> = async ({
  params,
}) => {
  const slug = params?.slug;
  if (!slug) {
    throw new Error('Invalid slug!');
  }
  try {
    const letter: OpenLetter = await getLetter(slug);
    return {
      props: {
        letter,
      },
    };
  } catch (e) {
    console.error('Error when fetching letter page data', e);
  }
  return {
    notFound: true,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = (await getLetters()).map((letter) => ({
    params: {
      slug: letter.slug,
    },
  }));
  return {
    paths: paths,
    fallback: false,
  };
};
