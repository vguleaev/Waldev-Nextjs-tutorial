import Navbar from '../components/navbar';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
