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
const ReloadContext = createContext(null);
import { useRouter } from 'next/router';
import { paths } from './api/all';
import { appWithTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useGetLocalSaved } from 'components/hooks';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [saved, setSaved] = useState(0);
  const [reloaded, setReloadad] = useState(0);
  const [globalData, setGlobalData] = useState({ current: true, data: [] });
  const [city, setCity] = useState('barcelona');
  /*   const [results, setResults] = useGetLocalSaved(() => {}, globalData, setGlobalData, saved); demasiadas api request*/
  useEffect(() => {
    localStorage.doNUEVO = localStorage.doNUEVO ?? JSON.stringify({});
    localStorage.seeNUEVO = localStorage.seeNUEVO ?? JSON.stringify({});
    setReloadad((prev) => prev + 1);
    setCity(() => {
      const devolver = [];
      paths.map((p) => {
        if (router.query.city?.toLowerCase().includes(p.name.toLowerCase())) {
          devolver.push(p.name.toLowerCase());
        }
      });
      return devolver[0] ?? 'barcelona';
    });
    setSaved([...Object.values(JSON.parse(localStorage.seeNUEVO)), ...Object.values(JSON.parse(localStorage.doNUEVO))].flat().length);
  }, []);

  return (
    <div className={`${poppins.className} overflow-y-auto min-h-screen flex flex-col justify-between overflow-x-hidden relative`}>
      <div className='hidden'>
        <ul>
          <li>saved: {saved}</li>
          <li>globalState: {globalData.current.toString()}</li>
          <li>city: {city}</li>
          <li>reloaded: {reloaded}</li>
        </ul>
      </div>
      <SavedContext.Provider value={[saved, setSaved]}>
        <CityContext.Provider value={[city, setCity]}>
          <div className='bg-transparent  border-white fixed bottom-0 z-50 w-full sm:relative'>
            <Absolute className='bg-transparent  z-10 sm:opacity-100 opacity-90 border-b border-orange-300 w-[100vw]'></Absolute>
            <Header city={city}></Header>
          </div>
          <div className='text-white bg-gray-700/90 border-b border-gray-500 text-center'>
            <Announcement></Announcement>
          </div>
          <ReloadContext.Provider value={[globalData, setGlobalData]}>
            <Page city={city}>
              <Component {...pageProps} refy={globalData} set={setGlobalData} />
            </Page>
          </ReloadContext.Provider>
          <Footer></Footer>
        </CityContext.Provider>
      </SavedContext.Provider>
    </div>
  );
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home', 'common', 'article', 'main'])),
      // Will be passed to the page component as props
    },
  };
}
export { SavedContext, CityContext, ReloadContext };
export default appWithTranslation(MyApp);
