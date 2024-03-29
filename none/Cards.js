import { useEffect, useState } from 'react';
import { Card } from '../components/molecules';
import axios from 'axios';
import { motion } from 'framer-motion';

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
      {dataFiltrada === null && (
        <div className='mx-auto col-span-full py-14'>
          <motion.svg
            className='fill-white'
            initial={{ rotate: 0 }}
            transition={{ duration: 4, repeat: Infinity }}
            animate={{ rotate: 360 }}
            xmlns='http://www.w3.org/2000/svg'
            width='140'
            height='140'
            viewBox='0 0 24 24'>
            <path d='M8.175 7.377l-3.042-5.27 1.732-1 3.045 5.273c-.635.238-1.222.573-1.735.997zm-.799.8l-5.27-3.042-1 1.732 5.274 3.045c.237-.635.572-1.223.996-1.735zm-1.376 3.823c0-.341.035-.673.09-.999h-6.09v1.999h6.09c-.055-.326-.09-.659-.09-1zm11.351-2.705l5.208-3.007-.333-.577-5.206 3.007c.121.185.23.379.331.577zm-5.351-3.295c.341 0 .673.035.999.09v-6.09h-1.999v6.09c.326-.055.659-.09 1-.09zm3.14.894l3.004-5.204-.288-.166-3 5.197.284.173zm1.685 8.662l5.234 3.022.666-1.154-5.229-3.019c-.181.41-.408.794-.671 1.151zm-10.444-1.467l-5.274 3.046 1 1.732 5.27-3.042c-.424-.513-.759-1.1-.996-1.736zm11.594-2.589l.025.5-.025.5h6.025v-1h-6.025zm-3.727 6.061l3.03 5.249 1.442-.833-3.031-5.25c-.437.34-.92.623-1.441.834zm-2.248.439c-.341 0-.674-.035-1-.09v6.09h1.999v-6.09c-.326.055-.658.09-.999.09zm-3.824-1.376l-3.042 5.27 1.732 1 3.045-5.274c-.635-.237-1.222-.572-1.735-.996z' />
          </motion.svg>
        </div>
      )}
      {dataFiltrada !== null &&
        dataFiltrada.length !== 0 &&
        dataFiltrada.map((element) => {
          return (
            <Card
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
