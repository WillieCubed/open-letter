import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import Head from 'next/head';

type Author = {
  name: string;
  title?: string;
  affiliation?: string;
};

type OpenLetter = {
  authors: Author[];
  tldr: string;
  title: string;
  contents: string;
  publishedDate: string;
};

const OpenLetterPage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = ({ letter }) => {
  const { authors, title, contents, tldr, publishedDate } = letter;

  return (
    <div>
      <Head>
        <title>{title} - Open Letter</title>
        <meta name="description" content={tldr} />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:site_name" content="Open Letter" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={tldr} />
        <meta property="og:type" content="article" />
        <meta
          property="article:published"
          content={publishedDate}
        />
        {authors.map((author) => (
          <meta key={author.name} property="article:author" content={author.name} />
        ))}
      </Head>
      <main className="min-h-screen w-screen lg:pt-8 bg-[#f5f5f5]">
        <section className="lg:max-w-3xl p-4 lg:mx-auto lg:shadow-md">
          <div className="py-4">
            <div className="mb-2 text-3xl font-bold"> 
              {title}
            </div>
            <div>
              TL;DR: {tldr}
            </div>
          </div>
          <div>
            {contents}
          </div>
        </section>
      </main>
    </div>
  );
};

export default OpenLetterPage;

type PageProps = {
  letter: OpenLetter;
};

export const getStaticProps: GetStaticProps<PageProps> = () => {
  const letter: OpenLetter = {
    authors: [
      {
        name: 'Willie Chalmers III',
      },
    ],
    contents: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis felis non lobortis lobortis. Nunc ut blandit ex. Fusce libero arcu, porta eu magna vitae, condimentum pharetra leo. Duis laoreet sapien tellus, eu finibus diam imperdiet et. Integer sed fermentum ante. Donec sollicitudin augue nibh, ut iaculis lectus aliquam id. Integer sit amet eros purus. Cras non turpis ligula. Aliquam vitae odio felis. Duis auctor justo id semper iaculis. Donec eu mattis mauris. Mauris vel efficitur sem. Vestibulum pulvinar varius blandit. Pellentesque a urna leo. Aliquam nec porttitor nisi. Phasellus ut eleifend quam. Donec et fringilla sem, non rutrum lacus. Praesent mollis, ipsum a ornare commodo, est mauris imperdiet leo, a facilisis dolor mauris ac sem. Sed laoreet, ex sit amet rhoncus fermentum, orci tortor bibendum odio, in auctor lacus ligula at elit. Pellentesque a quam dignissim, hendrerit eros eget, feugiat felis. Duis erat erat, luctus accumsan erat vitae, finibus aliquam felis. In sit amet turpis a lorem pellentesque hendrerit id a nibh. Etiam ultricies enim vel varius maximus. Aenean eget nulla lobortis, malesuada nibh vel, vestibulum quam. Ut nulla augue, lobortis non magna lacinia, hendrerit fringilla leo. In hac habitasse platea dictumst. Nunc dictum finibus iaculis. Nam diam elit, sollicitudin quis diam at, consequat posuere eros. Donec mattis, purus quis tincidunt interdum, quam risus rhoncus dui, in luctus justo augue vel lacus. Vivamus enim nulla, convallis quis magna nec, consectetur ullamcorper lacus. Quisque bibendum nulla erat, et cursus lacus mattis non. Duis accumsan imperdiet lectus sit amet egestas. Curabitur tincidunt ipsum vestibulum dolor faucibus, nec iaculis arcu tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In auctor volutpat tempus. Nam rhoncus mauris sed tellus blandit tempus. Ut massa diam, sodales id quam quis, fringilla rutrum neque. Sed nec interdum mi. Mauris eu sollicitudin justo, eu tristique nulla. Donec condimentum vel enim in porttitor. Nunc ac sapien sagittis, posuere felis quis, commodo erat. Vivamus a lobortis neque. Aliquam rhoncus nunc eu lacinia pharetra. Cras aliquet purus quis ipsum iaculis lacinia. Vivamus elementum cursus accumsan. Nulla facilisi. Nullam dignissim vel libero in egestas. Etiam lacinia enim risus, sed rhoncus velit porttitor eu. Integer velit lectus, varius posuere venenatis nec, egestas et massa. Phasellus iaculis lectus sed ipsum pulvinar suscipit. Duis vitae elit ligula. Praesent convallis nunc diam, at cursus diam scelerisque at. Quisque quis tempus nisl, nec finibus nunc. Nunc turpis dui, dictum id sollicitudin quis, aliquet ultrices eros. Vivamus aliquam, libero nec dictum ornare, ex dui feugiat dui, sit amet scelerisque libero dolor ac ex. Nulla molestie, odio vel elementum consequat, sem libero pulvinar ante, non imperdiet erat neque nec leo. Sed faucibus quis nisi id maximus. Aenean elementum feugiat venenatis. Proin id augue ac odio commodo aliquam. Fusce eget pulvinar augue. Vivamus vitae ornare ipsum, tincidunt laoreet velit. Mauris id condimentum libero, a accumsan urna. ',
    title: 'Test letter, please ignore.',
    tldr: 'This is a test letter designed to show important functionality in the app.',
    publishedDate: new Date().toISOString(),
  };
  return {
    props: {
      letter,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      {
        params: {
          slug: 'test',
        },
      },
    ],
    fallback: false,
  };
};
