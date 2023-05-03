import { useEffect, useState } from 'react';
import { Card } from '../molecules';
import axios from 'axios';

export default function Cards({ row, filters, cat = 'all', ids, saveIcon = true, setToggle }) {
  const [data, setData] = useState(null);
  const [dataFiltrada, setDataFiltrada] = useState(null);
  const processData = () => {
    setDataFiltrada(
      data.filter((d) => {
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
    const ax = axios.get(`/api/all?${ids !== undefined ? `see=${ids[0]}&doo=${ids[1]}` : `cat=${cat}`}`);
    ax.then((response) => {
      setData(response.data);
    });
  }, [ids, cat]);
  useEffect(() => {
    if (data !== null) {
      if (filters !== undefined) {
        processData();
      } else {
        setDataFiltrada(data);
      }
    }
  }, [filters, data]);
  return (
    <div className={`p-6 overflow-x-auto  ${row ? 'flex gap-x-4' : 'grid grid-cols-1 gap-x-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:w-fit w-full mx-auto gap-y-8'}`}>
      {dataFiltrada !== null && dataFiltrada.length !== 0 ? (
        dataFiltrada.map((element) => {
          return (
            <Card
              key={element.title}
              ids={ids}
              saveIcon={saveIcon}
              must={element.must}
              title={element.name}
              id={element.id}
              img={element.img}
              cat={element.c}
              setToggle={setToggle}></Card>
          );
        })
      ) : (
        <p className='h-full text-center mx-auto col-span-full'>Ningún artículo que mostrar</p>
      )}
    </div>
  );
}
