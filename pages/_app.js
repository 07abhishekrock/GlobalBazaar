import '../styles/globals.scss'

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Loader from '../components/Loader';

function MyApp({ Component, pageProps }) {
  return (
  <>
    <Navbar/>
    <Loader/>
    <Component {...pageProps} />
    <Footer/>
  </>
  )
}

export default MyApp
