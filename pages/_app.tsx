import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '@fontsource/work-sans';

function OpenLetterApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default OpenLetterApp;
