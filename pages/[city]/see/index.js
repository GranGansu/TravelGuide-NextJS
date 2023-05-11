import { useState } from 'react';
import { Filters } from 'components/organisms';
import Head from 'next/head';
import Cardz from 'components/layout/Cardz';
import { verr, paths } from 'pages/api/all';

export default function See({ rawData, category }) {
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
        <meta name='description' content='Planes para ver en Barcelona'></meta>
      </Head>
      <div className='pt-8 pb-2 flex flex-col sm:items-center'>
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
      return `/${p.name.toLowerCase()}/see`;
    }),
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const ciudad = params.city;
  return {
    props: {
      rawData: verr[ciudad],
      category: ciudad,
    },
  };
}
