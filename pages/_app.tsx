import '/app/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../app/components/navbar';


function MyApp({ Component, pageProps }: AppProps) {
  

  return (
    <>
      <Navbar />
      
      <Component {...pageProps} />
      </>
  );
}

export default MyApp;