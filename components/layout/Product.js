import { motion } from 'framer-motion';
import { Img } from '../../components/atoms';

export default function Product({ data }) {
  const opiniones = ['Precio', 'Amazing', 'WoW', 'Interesante'];

  return (
    <div className='sm:max-w-6xl w-full h-full flex-grow sm:mx-auto relative flex flex-col'>
      {data !== null && data !== undefined ? (
        <>
          <h1 className='p-4 px-6 bg-main  z-10 relative text-2xl'>{data.name + ' ' + data.year}</h1>
          <div className='pb-6 grid grid-cols-1  text-black '>
            <div className='w-full h-72 sm:h-96 shadow-inner border-b relative flex items-center'>
              <Img className='w-full h-full object-cover object-top sm:object-center absolute' w='600' h='400' src={data.img}></Img>
            </div>

            <div className='flex flex-col gap-y-4 text-justify mx-4 -mt-6 z-10'>
              <p className='p-4 px-6  border bg-gray-100 text-black flex items-center rounded text-md leading-7'>{data.description}</p>
              <div className='p-4 px-6  border bg-gray-100 text-black flex flex-col'>
                <h3 className='font-bold'>Crítica</h3>
                {data.description}
              </div>
              <p className='text-lg font-bold'>Elige una razón para visitar</p>
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
        </>
      ) : (
        <div className='bg-black/90 text-white text-3xl p-6  flex-grow fill-white flex flex-col items-center justify-center'>
          <motion.svg
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, repeatType: 'reverse' }}
            xmlns='http://www.w3.org/2000/svg'
            width='60'
            height='60'
            viewBox='0 0 24 24'>
            <path d='M6 24l15-17h-7.035l2.606-7h-8.196l-5.375 14h5.888l-2.888 10zm0-12l3.713-10.039h3.845l-2.607 7.039h5.549l-6.031 7.062 1.366-4.062h-5.835z' />
          </motion.svg>
          <p>Cargando</p>
        </div>
      )}
    </div>
  );
}
