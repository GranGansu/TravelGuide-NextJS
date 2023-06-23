import { useEffect, useState } from 'react';
import { Card, Loading } from '../molecules';
import { useTranslation } from 'react-i18next';

export default function Cardz({ row, filters, rawData, saveIcon = true, category }) {
  const { t } = useTranslation('main');
  const [dataFiltrada, setDataFiltrada] = useState(null);
  let loading = dataFiltrada === null;
  let data = dataFiltrada !== null && dataFiltrada.length !== 0;
  useEffect(() => {
    setDataFiltrada(
      filters === undefined
        ? rawData
        : rawData.filter((d) => {
            return (
              filters
                .map((f) => {
                  return f.id;
                })
                .includes(d.cat) && d
            );
          })
    );
  }, [filters, rawData]);
  return (
    <div
      className={`p-6 overflow-x-auto  mx-auto  ${row ? 'flex gap-x-4' : 'grid grid-cols-1 gap-x-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:w-fit w-full mx-auto gap-y-4'}`}>
      {loading && (
        <div className='mx-auto col-span-full py-14'>
          <Loading />
        </div>
      )}
      {data &&
        dataFiltrada.map((element, key) => {
          return (
            <Card
              row={row}
              city={category !== undefined ? category : element.cc}
              ecity={element.city}
              priority={(key === 0 || key === 1) && true}
              key={key + '0' + element.id + element.name.length}
              saveIcon={saveIcon}
              must={element.must}
              title={element.name}
              id={element.id}
              img={element.img}
              cat={element.c}></Card>
          );
        })}
      {!data && !loading && <p className='h-full text-center mx-auto col-span-full'>{t('empty')}</p>}
    </div>
  );
}
