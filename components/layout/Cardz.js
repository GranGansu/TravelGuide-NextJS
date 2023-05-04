import { useEffect, useState } from 'react';
import { Card } from '../molecules';
import Loading from '../molecules/Loading';

export default function Cardz({ row, filters, dataz, ids, saveIcon = true, setToggle }) {
  const [dataFiltrada, setDataFiltrada] = useState(null);
  const processData = () => {
    setDataFiltrada(
      dataz.filter((d) => {
        return (
          filters
            .map((f) => {
              return f.id;
            })
            .includes(d.cat) && d
        );
      })
    );
  };
  useEffect(() => {
    if (filters !== undefined) {
      processData();
    } else {
      setDataFiltrada(dataz);
    }
  }, [filters, dataz]);
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
          return (
            <Card
              priority={key === 0 && true}
              key={element.name}
              ids={ids}
              saveIcon={saveIcon}
              must={element.must}
              title={element.name}
              id={element.id}
              img={element.img}
              cat={element.c}
              setToggle={setToggle}></Card>
          );
        })}
      {dataFiltrada !== null && dataFiltrada.length === 0 && <p className='h-full text-center mx-auto col-span-full'>Ningún artículo que mostrar</p>}
    </div>
  );
}
