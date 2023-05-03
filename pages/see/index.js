import { useState } from 'react';
import { Filters } from '../../components/organisms/';
import Head from 'next/head';
import Cardz from '../../components/layout/Cardz';
import axios from 'axios';

export default function See({ dataz }) {
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
      <Cardz cat='see' dataz={dataz} filters={filter}></Cardz>
    </div>
  );
}

export async function getStaticProps() {
  const see = await axios.get(`/api/all?cat=see`);
  const dataz = see.data;
  return {
    props: { dataz: dataz },
  };
}
