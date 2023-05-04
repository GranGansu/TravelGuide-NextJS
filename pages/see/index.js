import { useState } from 'react';
import { Filters } from '../../components/organisms/';
import Head from 'next/head';
import Cardz from '../../components/layout/Cardz';

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
  /*   const see = await axios.get(`/api/all?cat=see`); */
  /*   const dataz = see.data; */
  return {
    props: {
      dataz: [
        { id: 1, c: 'see', must: true, cat: 1, name: 'Museo Picasso', description: 'Esta película de 1993 estrenada en EEUU', year: 1992, img: 'picasso2.jpg' },
        { id: 2, c: 'see', must: false, cat: 5, name: 'Parque Guell', description: 'Esta película de 1993 estrenada en EEUU', year: 1992, img: 'guell2.jpg' },
        { id: 3, c: 'see', must: false, cat: 2, name: 'Sagrada Familia', description: 'Descripción de este gran videojuego', year: 1992, img: 'sagrada2.jpg' },
        { id: 4, c: 'see', must: true, cat: 3, name: 'Catedral del Mar', description: 'Descripción de este gran videojuego', year: 1992, img: 'delmar.jpg' },
      ],
    },
  };
}
