import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Img } from '../../components/atoms';

export default function Movie() {
  const router = useRouter();
  const { id } = router.query;
  const opiniones = ['Infantil', 'Adulta', 'Divertida', 'Dramática'];
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get(`/api/hello?id=${id}`).then((res) => {
      setData(res.data);
    });
  }, [id]);
  return (
    <div className='sm:max-w-6xl mx-auto'>
      <h1 className='p-4 px-6 bg-main  z-10 relative text-2xl'>{data !== null && data.name + ' ' + data.year}</h1>
      {data !== null ? (
        <div className='pb-6 grid grid-cols-1 mx-auto text-black '>
          <div className='w-full h-72 sm:h-96 shadow-inner border-b relative flex items-center'>
            <div className='mx-auto relative -mb-4 z-20 p-1 shadow-xl bg-slate-400 rounded'>
              <Img className='w-40 rounded ' w='1000' h='800' src={data.img}></Img>
            </div>
            <Img className='w-full h-full object-cover object-top sm:object-center absolute opacity-80' w='1000' h='800' src={data.img}></Img>
          </div>

          <div className='flex flex-col gap-y-4 text-justify mx-4 -mt-6 z-10'>
            <p className='p-4 px-6  border bg-gray-100 text-black flex items-center rounded text-md leading-7'>{data.description}</p>
            <div className='p-4 px-6  border bg-gray-100 text-black flex flex-col'>
              <h3 className='font-bold'>Crítica</h3>
              {data.description}
            </div>
            <p className='text-lg font-bold'>Elige una razón para verla</p>
            <div className='grid grid-cols-2 gap-4'>
              {opiniones.map((o, key) => {
                return (
                  <div className='p-4 border rounded-md flex justify-between' key={key}>
                    <p>{o}</p>
                    <p className='text-xl'>98%</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div>LOADING</div>
      )}
    </div>
  );
}
