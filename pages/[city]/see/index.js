import { useState } from 'react';
import { Filters } from 'components/organisms';
import Head from 'next/head';
import Cardz from 'components/layout/Cardz';
import { paths, filtrosver as filtros } from 'pages/api/all';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function See({ rawData, category }) {
  const [filter, setFilter] = useState(filtros);
  const { t } = useTranslation('main');

  return (
    <div className='bg-slate-700 flex-grow'>
      <Head>
        <title>See</title>
        <meta name='description' content='Planes para ver en Barcelona'></meta>
      </Head>
      <div className='pt-8 pb-2 flex flex-col sm:items-center'>
        <p className='pl-7 mb-2'>
          {t('showing')} <span className='text-gray-500'>{t('click')}</span>
        </p>
        <Filters full={filtros} filters={filter} set={setFilter}></Filters>
      </div>
      <Cardz category={category} rawData={rawData} filters={filter}></Cardz>
    </div>
  );
}
export async function getStaticPaths() {
  return {
    paths: paths.map((p) => {
      return `/${p.name.toLowerCase()}/see`;
    }),
    fallback: false,
  };
}
export async function getStaticProps({ params, locale }) {
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
