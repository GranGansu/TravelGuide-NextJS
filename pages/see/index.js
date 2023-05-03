import { useState } from 'react';
import { Cards } from '../../components/layout/';
import { Filters } from '../../components/organisms/';
import Head from 'next/head';

export default function See() {
  const filtros = [
    { id: 1, name: 'Museos' },
    { id: 2, name: 'Iglesias' },
    { id: 3, name: 'Catedrales' },
    { id: 4, name: 'Monumentos' },
    { id: 5, name: 'Parques' },
  ];
  const [filter, setFilter] = useState(filtros);
  return (
    <div className='bg-slate-700 flex-grow'>
      <Head>
        <title>See</title>
      </Head>
      <div className='pt-6 flex flex-col sm:items-center'>
        <p className='pl-7 mb-2'>
          Mostrando <span className='text-gray-500'>click para desmarcar</span>
        </p>
        <Filters full={filtros} filters={filter} set={setFilter}></Filters>
      </div>
      <Cards cat='see' filters={filter}></Cards>
    </div>
  );
}
