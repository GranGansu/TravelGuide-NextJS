import { useState, useEffect } from 'react';
import { Cards } from '../components/layout';

export default function Saved() {
  const [ids, setIds] = useState(undefined);
  useEffect(() => {
    const nArray = [];
    if (localStorage.see !== undefined || localStorage.doo !== undefined) {
      nArray[0] = localStorage.see !== undefined ? JSON.parse(localStorage.see).toString().replaceAll(',', '-') : undefined;
      nArray[1] = localStorage.doo !== undefined ? JSON.parse(localStorage.doo).toString().replaceAll(',', '-') : undefined;
      setIds(nArray);
    }
  }, []);
  return (
    <div className='bg-gray-700/90 flex-grow flex flex-col justify-center items-center'>
      <h1 className=' mt-10 mb-3 w-full text-center text-white'>
        <span className='bg-gray-700/90 rounded p-2 px-4 text-lg border border-gray-500'>Guardados</span>
      </h1>
      {ids !== undefined ? <Cards set={setIds} ids={ids} saveIcon={false}></Cards> : <div className='p-6 h-full'>Nada guardado de momento</div>}
    </div>
  );
}
