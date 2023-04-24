import { Rubik, Poppins, Abel } from 'next/font/google';
import '../styles/globals.css';
const rubik = Rubik({ preload: true, subsets: ['latin'], weight: '400' });
const abel = Abel({ preload: true, subsets: ['latin'], weight: '400' });
const poppins = Poppins({ preload: true, subsets: ['latin'], weight: '400' });
import { Header, Footer } from '../components/organisms';
import Page from '../components/layout/Page';
import { Absolute, Img } from '../components/atoms';
import { announcement } from '../configs/globals';
import { motion, useScroll, useTransform } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], ['0%', '10%']);

  return (
    <div className={`${abel.className} overflow-y-auto min-h-screen flex flex-col justify-between overflow-x-hidden relative`}>
      <div className='bg-black  border-white relative'>
        <Absolute className='from-orange-400 to-orange-400 bg-gradient-to-b  z-10 sm:opacity-100 opacity-90 border-b border-orange-300 w-[100vw]'></Absolute>
        <Header></Header>
      </div>
      <div className='text-white py-2 bg-gray-700/90 border-b border-gray-400 text-center'>
        <motion.p
          style={{ y }}
          onClick={() => {
            console.log(scrollY);
          }}>
          {announcement.text}
        </motion.p>
      </div>
      <Page>
        <Component {...pageProps} />
      </Page>
      <Footer></Footer>
    </div>
  );
}

export default MyApp;
