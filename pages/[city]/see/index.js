import { useState } from 'react';
import { Filters, Header } from 'components/organisms';
import Head from 'next/head';
import Cardz from 'components/layout/Cardz';
import { paths, filtrosver as filtros } from 'pages/api/all';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ExecuteStatementCommand } from '@aws-sdk/client-dynamodb';
import { ddbDocClient } from '../../../config';
import { useRouter } from 'next/router';

export default function See({ rawData, category }) {
  const router = useRouter();
  const [filter, setFilter] = useState(filtros);
  const { t } = useTranslation('main');

  return (
    <div className='bg-gray-800 flex-grow'>
      <Head>
        <title>See</title>
        <meta name='description' content='Planes para ver en Barcelona'></meta>
      </Head>
      <div className='pt-8 pb-1 flex flex-col sm:items-center'>
        <p className='pl-7 mb-2'>
          {t('showing')} <span className='text-gray-500'>{t('click')}</span>
        </p>
        <Filters full={filtros} filters={filter} set={setFilter} router={router.query.category}></Filters>
      </div>
      <Cardz category={category} rawData={rawData} filters={filter}></Cardz>
    </div>
  );
}
export async function getStaticPaths({ locales }) {
  const todos = [];
  paths.map((p) => {
    return locales.map((l) => {
      todos.push(`/${l}/${p.name.toLowerCase()}/see`);
    });
  });
  return { paths: todos, fallback: false };
}
/* export async function getStaticProps({ params, locale }) {
  const ciudad = params.city;
  const sqlite3 = require('sqlite3').verbose();
  let db = new sqlite3.Database('data.db');
  const nu = () => {
    return new Promise((resolve, reject) => {
      const todos = [];
      db.all(`SELECT * FROM ver WHERE city='${ciudad}'`, [], (err, rows) => {
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
      category: ciudad,
      ...(await serverSideTranslations(locale, ['main', 'common'])),
    },
  };
}
 */
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
      category: ciudad,
      ...(await serverSideTranslations(locale, ['main', 'common'])),
    },
  };
}
