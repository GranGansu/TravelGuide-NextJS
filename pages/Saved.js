import { useState, useEffect, useMemo } from 'react';
import { Cards } from '../components/layout';

export default function Saved() {
  const [ids, setIds] = useState([]);
  const [toggle, setToggle] = useState(false);
  const listaGuardados = useMemo(() => {
    return <Cards setToggle={setToggle} ids={ids} saveIcon={false}></Cards>;
  }, [ids]);
  useEffect(() => {
    const nArray = [];
    nArray[0] = localStorage.see !== undefined && localStorage.see !== '' && JSON.parse(localStorage.see).toString().replaceAll(',', '-');
    nArray[1] = localStorage.do !== undefined && localStorage.see !== '' && JSON.parse(localStorage.do).toString().replaceAll(',', '-');
    setIds(nArray);
  }, [toggle]);
  return (
    <div className='bg-gray-700/90 flex-grow flex flex-col justify-center items-center'>
      <h1 className=' mt-10 mb-3 w-full text-center text-white'>
        <span className='bg-gray-700/90 rounded p-2 px-4 text-lg border border-gray-500'>Guardados</span>
      </h1>
      {ids.join('').length !== 0 ? listaGuardados : <div className='p-6 h-full'>Nada guardado de momento</div>}
    </div>
  );
}
