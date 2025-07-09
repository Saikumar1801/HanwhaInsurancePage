import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ZoomProvider } from '../components/ZoomContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ZoomProvider>
      <Component {...pageProps} />
    </ZoomProvider>
  );
}

export default MyApp;
