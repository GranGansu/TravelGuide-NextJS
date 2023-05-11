import { useState, useEffect, useMemo } from 'react';
import Cardz from '../components/layout/Cardz';
import { hacerr, verr } from './api/all';

export default function Saved() {
  const [rawData, setrawData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const listaGuardados = useMemo(() => {
    return <Cardz setRefresh={setRefresh} rawData={rawData} saveIcon={false}></Cardz>;
  }, [rawData]);
  useEffect(() => {
    const nArray = [];
    nArray[0] = localStorage.seeNUEVO !== undefined && localStorage.seeNUEVO !== '' && JSON.parse(localStorage.seeNUEVO);
    nArray[1] = localStorage.doNUEVO !== undefined && localStorage.doNUEVO !== '' && JSON.parse(localStorage.doNUEVO);
    setrawData(() => {
      const nuArray = [];
      Object.entries(verr).map((ciudad) => {
        ciudad[1].map((e) => {
          const arrayDeCiudadActual = nArray[0][ciudad[0]]; //No tiene ninguna ciudad al iniciar
          if (arrayDeCiudadActual !== undefined) {
            if (arrayDeCiudadActual.includes(e.id)) {
              nuArray.push({ ...e, cc: ciudad[0] });
            }
          }
        });
      });
      Object.entries(hacerr).map((ciudad) => {
        ciudad[1].map((e) => {
          const arrayDeCiudadActual = nArray[1][ciudad[0]]; //No tiene ninguna ciudad..
          if (arrayDeCiudadActual !== undefined) {
            if (arrayDeCiudadActual.includes(e.id)) {
              nuArray.push({ ...e, cc: ciudad[0] });
            }
          }
        });
      });
      return nuArray;
    });
  }, [refresh]);
  return (
    <div className='bg-gray-700/90 flex-grow flex flex-col justify-center items-center'>
      <h1 className=' mt-10 mb-3 w-full text-center text-white'>
        <span className='bg-gray-700/90 rounded p-2 px-4 text-lg border border-gray-500'>Guardados</span>
      </h1>
      {rawData.join('').length !== 0 ? listaGuardados : <div className='p-6 h-full'>Nada guardado de momento</div>}
    </div>
  );
}
