import { useState, useEffect, useMemo } from 'react';
import Cardz from '../components/layout/Cardz';
import { hacer, ver } from './api/all';

export default function Saved() {
  const [ids, setIds] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const listaGuardados = useMemo(() => {
    return <Cardz setRefresh={setRefresh} ids={ids} dataz={ids} saveIcon={false}></Cardz>;
  }, [ids]);
  useEffect(() => {
    const nArray = [];
    /*     nArray[0] = localStorage.see !== undefined && localStorage.see !== '' && JSON.parse(localStorage.see).toString().replaceAll(',', '-');
    nArray[1] = localStorage.do !== undefined && localStorage.see !== '' && JSON.parse(localStorage.do).toString().replaceAll(',', '-'); */
    nArray[0] = localStorage.see !== undefined && localStorage.see !== '' && JSON.parse(localStorage.see);
    nArray[1] = localStorage.do !== undefined && localStorage.see !== '' && JSON.parse(localStorage.do);
    setIds(
      ver
        .filter((e) => {
          return nArray[0].includes(e.id) && e;
        })
        .concat(
          hacer.filter((e) => {
            return nArray[1].includes(e.id) && e;
          })
        )
    );
  }, [refresh]);
  return (
    <div className='bg-gray-700/90 flex-grow flex flex-col justify-center items-center'>
      <h1 className=' mt-10 mb-3 w-full text-center text-white'>
        <span className='bg-gray-700/90 rounded p-2 px-4 text-lg border border-gray-500'>Guardados</span>
      </h1>
      {ids.join('').length !== 0 ? listaGuardados : <div className='p-6 h-full'>Nada guardado de momento</div>}
    </div>
  );
}
