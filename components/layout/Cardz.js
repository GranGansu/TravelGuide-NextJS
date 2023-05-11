import useGetCity from 'components/hooks/useGetCity';
import { useEffect, useState } from 'react';
import { Card, Loading } from '../molecules';
import { hacer, ver } from 'pages/api/all';
export default function Cardz({ row, filters, rawData, saveIcon = true, setRefresh, category }) {
  const [dataFiltrada, setDataFiltrada] = useState(null);
  const [city, setCity] = useGetCity();
  useEffect(() => {
    if (filters !== undefined) {
      setDataFiltrada(
        rawData.filter((d) => {
          return (
            filters
              .map((f) => {
                return f.id;
              })
              .includes(d.cat) && d
          );
        })
      );
    } else {
      if (rawData !== undefined) {
        setDataFiltrada(rawData);
      } else {
        setDataFiltrada([...hacer, ...ver]);
      }
    }
  }, [filters, rawData]);
  return (
    <div className={`p-6 overflow-x-auto  ${row ? 'flex gap-x-4' : 'grid grid-cols-1 gap-x-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:w-fit w-full mx-auto gap-y-8'}`}>
      {dataFiltrada === null && (
        <div className='mx-auto col-span-full py-14'>
          <Loading />
        </div>
      )}
      {dataFiltrada !== null &&
        dataFiltrada.length !== 0 &&
        dataFiltrada.map((element, key) => {
          const kk = key + '0' + element.id + element.name.length;
          return (
            <Card
              city={category !== undefined ? category : element.cc}
              priority={key === 0 && true}
              key={kk}
              saveIcon={saveIcon}
              must={element.must}
              title={element.name}
              id={element.id}
              img={element.img}
              cat={element.c}
              setRefresh={setRefresh}></Card>
          );
        })}
      {dataFiltrada !== null && dataFiltrada.length === 0 && <p className='h-full text-center mx-auto col-span-full'>Ningún artículo que mostrar</p>}
    </div>
  );
}
