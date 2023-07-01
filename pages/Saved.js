import { useState, useEffect } from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import HistoryIcon from '@mui/icons-material/History';
import { useCountSaved, useGetCities, useGetLocalSaved, useModal } from 'components/hooks';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { Loading } from 'components/molecules';
import { Cards } from 'components/layout';
import { Filters } from 'components/organisms';

export default function Saved({ refy, set }) {
  const { t } = useTranslation('saved');
  const [loading, setLoading] = useState(true);
  const ciudades = useGetCities(loading);
  const [refresh, setRefresh] = useState(false);
  const [filter, setFilter] = useState(undefined);
  const [visible, setVisible] = useModal(
    false,
    <div className='text-xl flex items-center flex-col'>
      <h1>¿Recuperar todo?</h1>
      <div className='flex gap-x-2 mt-2 w-32'>
        <button
          onClick={() => {
            if (localStorage.doPREV || localStorage.seePREV) {
              localStorage.doNUEVO = localStorage.doPREV;
              localStorage.seeNUEVO = localStorage.seePREV;
              setRefresh((prev) => !prev);
              updateSaved((prev) => !prev);
            }
          }}
          className='p-2 border rounded flex-grow'>
          Sí
        </button>
        <button
          onClick={() => {
            setVisible(false);
          }}
          className='p-2 border rounded flex-grow'>
          No
        </button>
      </div>
    </div>
  );
  const [savedNumber, updateSaved] = useCountSaved(set);
  const [results, setResults] = useGetLocalSaved(setLoading, refy, set, savedNumber);
  useEffect(() => {
    setFilter(ciudades);
  }, [ciudades]);
  useEffect(() => {
    setResults((prev) => !prev);
  }, [savedNumber, refresh]);
  return (
    <div className='bg-gray-700/90 flex-grow min-h-[300px] w-full flex flex-col  items-center'>
      <div className='mt-6 max-4xl'>
        <Filters filters={filter} set={setFilter} full={ciudades}></Filters>
      </div>
      <div className='flex gap-x-2 w-full items-center mt-6 select-none sm:justify-center justify-between px-6'>
        <h1 className=' text-center text-white '>
          <span className=' rounded p-2 px-4 text-lg '>{t('h1')}</span>
        </h1>
        <div className='flex gap-x-1'>
          <button
            className='p-2 flex w-fit bg-gray-800 hover:bg-red-400 rounded border border-gray-500 hover:cursor-pointer'
            onClick={() => {
              if (savedNumber !== 0) {
                localStorage.doPREV = localStorage.doNUEVO;
                localStorage.seePREV = localStorage.seeNUEVO;
                localStorage.doNUEVO = JSON.stringify({});
                localStorage.seeNUEVO = JSON.stringify({});
                setRefresh((prev) => !prev);
                updateSaved((prev) => !prev);
              }
            }}>
            <DeleteForeverIcon />
            <p>{t('button1')}</p>
          </button>
          {visible}
          <button
            disabled={savedNumber !== 0}
            className='p-2 disabled:bg-gray-400 disabled:text-gray-200 flex w-fit bg-gray-800 disabled:cursor-not-allowed hover:bg-blue-400 rounded border border-gray-500 hover:cursor-pointer'
            onClick={() => {
              setVisible(true);
            }}>
            <HistoryIcon />
            <p>{t('button2')}</p>
          </button>
        </div>
      </div>
      {results ? (
        <Cards rawData={results} filters={filter} saveIcon={false}></Cards>
      ) : loading && savedNumber !== 0 ? (
        <Loading className='mt-8'></Loading>
      ) : (
        <div className='p-6 h-full select-none'>{t('nothing')}</div>
      )}
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['saved', 'common', 'main'])),
    },
  };
}
