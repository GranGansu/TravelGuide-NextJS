import { useState, useEffect, useMemo } from 'react';
import Cardz from '../components/layout/Cardz';
import { hacerr, verr } from './api/all';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import HistoryIcon from '@mui/icons-material/History';
import { useCountSaved } from 'components/hooks';
export default function Saved() {
  const [rawData, setrawData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [saved, setSaved] = useCountSaved();
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
    <div className='bg-gray-700/90 flex-grow flex flex-col  items-center'>
      <div className='flex gap-x-2 items-center mt-8 select-none'>
        <h1 className=' w-full text-center text-white '>
          <span className='bg-gray-700/90 rounded p-2 px-4 text-lg border border-gray-500'>Guardados</span>
        </h1>
        <button
          className='p-2 flex w-fit bg-gray-800 hover:bg-red-400 rounded border border-gray-500 hover:cursor-pointer'
          onClick={() => {
            if (saved !== 0) {
              localStorage.doPREV = localStorage.doNUEVO;
              localStorage.seePREV = localStorage.seeNUEVO;
              localStorage.doNUEVO = JSON.stringify({});
              localStorage.seeNUEVO = JSON.stringify({});
              setRefresh((prev) => !prev);
              setSaved((prev) => !prev);
            }
          }}>
          <DeleteForeverIcon />
          <p>All</p>
        </button>
        <button
          disabled={localStorage.doPREV === undefined && true}
          className='p-2 disabled:bg-gray-400 disabled:text-gray-200 flex w-fit bg-gray-800 disabled:cursor-not-allowed hover:bg-blue-400 rounded border border-gray-500 hover:cursor-pointer'
          onClick={() => {
            if (localStorage.doPREV || localStorage.seePREV) {
              localStorage.doNUEVO = localStorage.doPREV;
              localStorage.seeNUEVO = localStorage.seePREV;
              setRefresh((prev) => !prev);
              setSaved((prev) => !prev);
            }
          }}>
          <HistoryIcon />
          <p>Recuperar</p>
        </button>
      </div>
      {rawData.join('').length !== 0 ? listaGuardados : <div className='p-6 h-full select-none'>Nada guardado de momento</div>}
    </div>
  );
}
