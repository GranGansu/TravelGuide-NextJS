import Head from 'next/head';
import { head } from '../configs/globals';
import { Banner, FixedBg, Benefits } from '../components/organisms';
import { Cards } from '../components/layout/';
import { forwardRef } from 'react';
import { hacer, ver, hacerr, verr } from './api/all';
import useGetCity from 'components/hooks/useGetCity';

const Home = forwardRef(function Home(props, ref) {
  const [city, setCity] = useGetCity();
  return (
    <>
      <Head>
        <title>{head.title}</title>
        <meta name='description' content={head.meta} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex flex-col ' style={{ perspective: '20px' }}>
        <div>
          <Banner city={city}></Banner>
        </div>
        <div className='bg-gray-700/90'>
          <Cards rawData={props.rawData} row={true}></Cards>
        </div>
        <Benefits></Benefits>
        <FixedBg img={`${city}fixed.jpg`}></FixedBg>
      </div>
    </>
  );
});

export default Home;
export async function getStaticProps() {
  const todos = Object.values(verr).flat().concat(Object.values(hacerr).flat());
  return {
    props: {
      rawData: todos,
    },
  };
}
