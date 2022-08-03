import type { NextPage } from 'next/types';
import Image from 'next/image';
import SiteFooter from '../components/SiteFooter';

const AboutPage: NextPage = () => {
  return (
    <>
      <div className="h-full min-h-[85vh] md:p-4 bg-[#f5f5f5] dark:bg-gray-900 dark:text-white">
        <header className="text-center text-3xl md:text-4xl py-4 font-bold font-display">
          About Open Letter
        </header>
        <section
          id="info"
          className="max-w-3xl mx-auto shadow-md md:rounded-md p-4 bg-white dark:bg-gray-600"
        >
          <section id="what" className="my-4">
            <h1 className="text-2xl font-bold font-display mb-2">
              What is Open Letter?
            </h1>
            <p>
              Open Letter is a simple service that lets you publish public{' '}
              <a href="https://en.wikipedia.org/wiki/Open_letter">
                open letters
              </a>{' '}
              about whatever you want.
            </p>
          </section>
          <section id="why" className="my-4">
            <h1 className="text-2xl font-bold font-display mb-2">
              Why Open Letter?
            </h1>
            <p>
              I wanted something more classy than a Google Doc or notepad app
              for sharing stuff with the public that had a simple user
              experience. No more sharing screenshots of notepad apps or links
              to Google Docs that may leak your email address.
            </p>
          </section>
          <section id="who" className="my-4">
            <h1 className="text-2xl font-bold font-display mb-2">
              Who Made Open Letter?
            </h1>
            <p>
              <a href="https://williecubed.me">This</a> guy.
            </p>
            {/* TODO: Add image */}
          </section>
        </section>
      </div>
      <SiteFooter />
    </>
  );
};

export default AboutPage;
