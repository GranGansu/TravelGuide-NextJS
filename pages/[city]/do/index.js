import { useState } from 'react';
import { Filters } from 'components/organisms';
import Head from 'next/head';
import Cardz from 'components/layout/Cardz';
import { hacerr, paths } from 'pages/api/all';

export default function Do({ rawData, category }) {
  const filtros = [
    { id: 1, name: 'Parques Diversión' },
    { id: 2, name: 'Cine' },
    { id: 3, name: 'Música' },
    { id: 4, name: 'Teatro' },
    { id: 5, name: 'Playa' },
  ];
  const [filter, setFilter] = useState(filtros);
  return (
    <div className='bg-slate-700 flex-grow'>
      <Head>
        <title>Do</title>
        <meta name='description' content='Planes para hacer en Barcelona'></meta>
      </Head>
      <div className='pt-6 flex flex-col sm:items-center'>
        <p className='pl-7 mb-2'>
          Mostrando <span className='text-gray-500'>click para desmarcar</span>
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
      return `/${p.name.toLowerCase()}/do`;
    }),
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const ciudad = params.city;
  return {
    props: {
      rawData: hacerr[ciudad],
      category: ciudad,
    },
  };
}
