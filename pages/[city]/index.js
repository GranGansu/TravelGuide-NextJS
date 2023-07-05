import useGetCity from 'components/hooks/useGetCity';
import { Banner, FixedBg, Benefits } from 'components/organisms';
import { Cards } from 'components/layout/';
import Head from 'next/head';
import { head } from '../../configs/globals';
import { paths } from 'pages/api/all';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ExecuteStatementCommand } from '@aws-sdk/client-dynamodb';
import { ddbDocClient } from '../../config';
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
        <Benefits city={city}></Benefits>
        <FixedBg img={`${city}fixed.jpg`}></FixedBg>
      </div>
    </>
  );
}
export async function getStaticPaths({ locales }) {
  const todo = [];
  paths.map((p) => {
    locales.map((l) => {
      todo.push(`/${l}/${p.name.toLowerCase()}`);
    });
  });
  return {
    paths: todo,
    fallback: false,
  };
}
/* export async function getStaticProps({ params, locale }) {
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
      ...(await serverSideTranslations(locale, ['main', 'common', 'home'])),
    },
  };
} */
export async function getStaticProps({ params, locale }) {
  const ciudad = params.city;
  let sql = { Statement: `SELECT * FROM "ver" WHERE c='see' AND city='${ciudad}'` };
  const data = await ddbDocClient.send(new ExecuteStatementCommand(sql));
  const datos = data['Items'].map((i) => {
    let nuevo = {};
    Object.entries(i).map((n) => {
      nuevo = { ...nuevo, [n[0]]: n[0] === 'id' || n[0] === 'cat' ? Number(Object.values(n[1])[0]) : Object.values(n[1])[0] };
    });
    return nuevo;
  });
  return {
    props: {
      rawData: datos,
      ...(await serverSideTranslations(locale, ['home', 'common'])),
    },
  };
}
