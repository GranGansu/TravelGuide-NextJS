import { useState } from 'react';
import { Filters } from 'components/organisms';
import Head from 'next/head';
import Cardz from 'components/layout/Cardz';
import { paths, filtroshacer as filtros } from 'pages/api/all';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
export default function Do({ rawData, category }) {
  const [filter, setFilter] = useState(filtros);
  const { t } = useTranslation('main');

  return (
    <div className='bg-slate-700 flex-grow'>
      <Head>
        <title>Do</title>
        <meta name='description' content='Planes para hacer en Barcelona'></meta>
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
export async function getStaticPaths({ locales }) {
  const todos = [];
  paths.map((p) => {
    return locales.map((l) => {
      todos.push(`/${l}/${p.name.toLowerCase()}/do`);
    });
  });
  return { paths: todos, fallback: false };
}
export async function getStaticProps({ params, locale }) {
  const ciudad = params.city;

  const sqlite3 = require('sqlite3').verbose();
  let db = new sqlite3.Database('data.db');
  const nu = () => {
    return new Promise((resolve, reject) => {
      const todos = [];
      db.all(`SELECT * FROM hacer WHERE city='${ciudad}'`, [], (err, rows) => {
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
