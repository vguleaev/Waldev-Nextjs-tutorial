import Navbar from '../components/navbar';
import '../scss/styles.scss';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Github Repos</title>
      </Head>
      <Navbar></Navbar>
      <div className="page">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
