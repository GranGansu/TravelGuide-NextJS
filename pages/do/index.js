import { useState } from 'react';
import { Cards } from '../../components/layout/';
import { Filters } from '../../components/organisms/';

export default function Do() {
  const filtros = [
    { id: 1, name: 'Parques Diversión' },
    { id: 2, name: 'Cine' },
    { id: 3, name: 'Música' },
    { id: 4, name: 'Teatro' },
    { id: 5, name: 'Playa' },
  ];
  const [filter, setFilter] = useState(filtros);
  return (
    <div className='bg-slate-700'>
      <div className='pt-6 flex flex-col sm:items-center'>
        <p className='pl-7 mb-2'>
          Mostrando <span className='text-gray-500'>click para desmarcar</span>
        </p>
        <Filters full={filtros} filters={filter} set={setFilter}></Filters>
      </div>
      <Cards cat='do' filters={filter}></Cards>
    </div>
  );
}
