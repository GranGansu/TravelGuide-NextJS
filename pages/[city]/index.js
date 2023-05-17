import useGetCity from 'components/hooks/useGetCity';
import { Banner, FixedBg, Benefits } from 'components/organisms';
import { Cards } from 'components/layout/';
import Head from 'next/head';
import { head } from '../../configs/globals';
import { paths } from 'pages/api/all';

export default function City(props) {
  const [city, setCity] = useGetCity();

  return (
    <>
      <Head>
        <title>{head.title + ' ' + city.toUpperCase()}</title>
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
}
export async function getStaticPaths() {
  return {
    paths: paths.map((p) => {
      return `/${p.name.toLowerCase()}`;
    }),
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const sqlite3 = require('sqlite3').verbose();
  let db = new sqlite3.Database('data.db');
  const nu = () => {
    return new Promise((resolve, reject) => {
      const todos = [];
      db.all(`SELECT * FROM ${params.city}ver`, [], (err, rows) => {
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
    },
  };
}
