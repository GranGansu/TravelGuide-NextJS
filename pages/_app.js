import { Poppins } from 'next/font/google';
import '../styles/globals.css';
const poppins = Poppins({ preload: true, subsets: ['latin'], weight: '400' });
import { Header, Footer } from '../components/organisms';
import Page from '../components/layout/Page';
import { Absolute } from '../components/atoms';
import { createContext, useState, useEffect } from 'react';
import Announcement from '../components/molecules/Announcement';
const SavedContext = createContext(null);
const CityContext = createContext(null);
import { useRouter } from 'next/router';
import { paths } from './api/all';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [saved, setSaved] = useState(0);
  const [city, setCity] = useState('barcelona');
  useEffect(() => {
    if (localStorage.doNUEVO === undefined) {
      localStorage.doNUEVO = JSON.stringify({});
    }
    if (localStorage.seeNUEVO === undefined) {
      localStorage.seeNUEVO = JSON.stringify({});
    }
    setCity((prev) => {
      const devolver = [];
      paths.map((p) => {
        if (router.query.city?.toLowerCase().includes(p.name.toLowerCase())) {
          devolver.push(p.name.toLowerCase());
        }
      });
      if (devolver[0] === undefined) {
        return 'barcelona';
      }
      return devolver[0];
    });
    setSaved([...Object.values(JSON.parse(localStorage.seeNUEVO)), ...Object.values(JSON.parse(localStorage.doNUEVO))].flat().length);
  }, []);

  return (
    <div className={`${poppins.className} overflow-y-auto min-h-screen flex flex-col justify-between overflow-x-hidden relative`}>
      <SavedContext.Provider value={[saved, setSaved]}>
        <CityContext.Provider value={[city, setCity]}>
          <div className='bg-black  border-white relative'>
            <Absolute className='from-orange-400 to-orange-400 bg-gradient-to-b  z-10 sm:opacity-100 opacity-90 border-b border-orange-300 w-[100vw]'></Absolute>
            <Header city={city}></Header>
          </div>
          <div className='text-white bg-gray-700/90 border-b border-gray-400 text-center'>
            <Announcement></Announcement>
          </div>
          <Page city={city}>
            <Component {...pageProps} />
          </Page>
          <Footer></Footer>
        </CityContext.Provider>
      </SavedContext.Provider>
    </div>
  );
}
export { SavedContext, CityContext };
export default MyApp;
