import Head from 'next/head';
import { head } from '../configs/globals';
import { Banner, FixedBg, Benefits } from '../components/organisms';
import { Cards } from '../components/layout/';
import { forwardRef } from 'react';

const Home = forwardRef(function Home(props, ref) {
  return (
    <>
      <Head>
        <title>{head.title}</title>
        <meta name='description' content={head.meta} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex flex-col ' style={{ perspective: '20px' }}>
        <div>
          <Banner></Banner>
        </div>
        <div className='bg-main'>
          <Cards row={true}></Cards>
        </div>
        <Benefits></Benefits>
        <FixedBg img='movies.jpg'></FixedBg>
      </div>
    </>
  );
});

export default Home;
