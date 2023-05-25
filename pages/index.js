import Head from 'next/head';
import { head } from '../configs/globals';
import { Banner, FixedBg, Benefits } from '../components/organisms';
import { Cards } from '../components/layout/';
import { forwardRef } from 'react';
import useGetCity from 'components/hooks/useGetCity';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

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
/*   const todos = Object.values(verr).flat().concat(Object.values(hacerr).flat()); */

export default Home;
export async function getStaticProps({ locale }) {
  const sqlite3 = require('sqlite3').verbose();
  let db = new sqlite3.Database('data.db');
  const nu = () => {
    return new Promise((resolve, reject) => {
      const todos = [];
      db.all('SELECT * FROM barcelonaver', [], (err, rows) => {
        todos.push(...rows);
        return resolve(todos);
      });
    });
  };
  const ney = await nu();
  db.close();
  return {
    props: {
      rawData: ney,
      ...(await serverSideTranslations(locale, ['home', 'common'])),
    },
  };
}
