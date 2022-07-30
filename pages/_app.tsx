import '../styles/globals.css';
import type { AppProps } from 'next/app';

function OpenLetterApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default OpenLetterApp;
