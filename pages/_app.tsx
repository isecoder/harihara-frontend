import '/app/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../app/components/navbar';
import Footer from '@/app/components/footer';


function MyApp({ Component, pageProps }: AppProps) {
  

  return (
    <>
      <Navbar />
      
      <Component {...pageProps} />
      <Footer />
      </>
  );
}

export default MyApp;