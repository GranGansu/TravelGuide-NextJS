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
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useModal } from '../components/hooks/';
import { ModalCity } from '../components/molecules/';

function MyApp({ Component, pageProps }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], ['0%', '10%']);
  const [modal, setVis] = useModal(false, <ModalCity></ModalCity>);
  return (
    <div className={`${poppins.className} overflow-y-auto min-h-screen flex flex-col justify-between overflow-x-hidden relative`}>
      {modal}
      <div className='bg-black  border-white relative'>
        <Absolute className='from-orange-400 to-orange-400 bg-gradient-to-b  z-10 sm:opacity-100 opacity-90 border-b border-orange-300 w-[100vw]'></Absolute>
        <Header></Header>
      </div>
      <div className='text-white py-2 bg-gray-700/90 border-b border-gray-400 text-center'>
        <motion.p
          className='text-lg'
          onClick={() => {
            setVis(true);
          }}>
          <ArrowDropDownIcon></ArrowDropDownIcon>
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
