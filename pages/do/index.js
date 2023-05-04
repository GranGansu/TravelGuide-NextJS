import { useState } from 'react';
import { Filters } from '../../components/organisms/';
import Head from 'next/head';
import Cardz from '../../components/layout/Cardz';
import { hacer } from '../api/all';

export default function Do({ dataz }) {
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
      <Cardz cat='do' dataz={dataz} filters={filter}></Cardz>
    </div>
  );
}
export async function getStaticProps() {
  return {
    props: {
      dataz: hacer,
    },
  };
}
