import { useState } from 'react';
import { Filters } from '../../components/organisms/';
import Head from 'next/head';
import Cardz from '../../components/layout/Cardz';
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
  /*   const doo = await axios.get(`/api/all?cat=do`);
  const dataz = doo.data; */
  return {
    props: {
      dataz: [
        { id: 1, c: 'do', must: true, cat: 2, name: 'Cinesa Diagonal', description: 'Esta película de 1993 estrenada en EEUU', year: 1992, img: 'cinesa.webp' },
        { id: 2, c: 'do', must: false, cat: 1, name: 'Tibidabo', description: 'Esta película de 1993 estrenada en EEUU', year: 1992, img: 'tibidabo.jpeg' },
        { id: 3, c: 'do', must: false, cat: 1, name: 'Port Aventura', description: 'Descripción de este gran videojuego', year: 1992, img: 'port.jpg' },
        { id: 4, c: 'do', must: true, cat: 5, name: 'Barceloneta', description: 'Descripción de esta gran playa', year: 1992, img: 'barceloneta.jpg' },
      ],
    },
  };
}
