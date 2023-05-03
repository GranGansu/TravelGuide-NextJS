import { Poppins } from 'next/font/google';
import '../styles/globals.css';
/* const rubik = Rubik({ preload: true, subsets: ['latin'], weight: '400' });
const abel = Abel({ preload: true, subsets: ['latin'], weight: '400' }); */
const poppins = Poppins({ preload: true, subsets: ['latin'], weight: '400' });
import { Header, Footer } from '../components/organisms';
import Page from '../components/layout/Page';
import { Absolute } from '../components/atoms';
import { announcement } from '../configs/globals';
import { motion, useScroll, useTransform } from 'framer-motion';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useModal } from '../components/hooks/';
import { ModalCity } from '../components/molecules/';
import { createContext, useState, useEffect } from 'react';
const SavedContext = createContext(null);

function MyApp({ Component, pageProps }) {
  const [saved, setSaved] = useState(0);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], ['0%', '10%']);
  const [modal, setVis] = useModal(false, <ModalCity></ModalCity>);
  useEffect(() => {
    if (localStorage.do === undefined) {
      localStorage.do = JSON.stringify([]);
    }
    if (localStorage.see === undefined) {
      localStorage.see = JSON.stringify([]);
    }
    setSaved(JSON.parse(localStorage.do).concat(JSON.parse(localStorage.see)).length);
  }, []);
  return (
    <div className={`${poppins.className} overflow-y-auto min-h-screen flex flex-col justify-between overflow-x-hidden relative`}>
      <SavedContext.Provider value={[saved, setSaved]}>
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
      </SavedContext.Provider>
    </div>
  );
}
export { SavedContext };
export default MyApp;
