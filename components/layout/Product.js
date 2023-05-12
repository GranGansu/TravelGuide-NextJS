import { motion } from 'framer-motion';
import { Img } from '../../components/atoms';
import Save from '../molecules/C/Save';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
export default function Product({ data, city }) {
  const opiniones = { precio: 5, cultura: 84, compras: 91, imprescindible: 60 };
  const razones = ['Buen ambiente', 'Mucho sol'];
  const frame = ({ icon, title, razon, description, warning = false }) => {
    return (
      <div className={`p-4 px-6  border bg-gray-100 text-black flex flex-col ${warning && 'border-red-300 border-4 rounded-xl'}`}>
        <h3 className=' text-2xl'>
          {icon} {title}
        </h3>
        <div className='my-2'>
          <ul className='flex gap-x-2'>
            {razon.map((r) => {
              return (
                <li className='p-1 border border-inherit font-bold text-gray-500 text-sm bg-white rounded px-2' key={r}>
                  {r}
                </li>
              );
            })}
          </ul>
        </div>
        {description}
      </div>
    );
  };
  return (
    <div className='sm:max-w-6xl w-full h-full flex-grow sm:mx-auto relative flex flex-col'>
      {data ? (
        <>
          {/*           <h1 className='p-4 px-6 bg-main  z-10 relative text-2xl'>
            {data.name}
            <span className='text-gray-400'> ({data.year})</span>
          </h1> */}
          <h1 className='p-4 px-6 absolute  z-10  text-2xl'>
            {data.name}
            {/*      <span className='text-gray-400'> ({data.year})</span> */}
          </h1>
          <div className='pb-6 grid grid-cols-1  text-black '>
            <div className='w-full h-72 sm:h-96 shadow-inner border-b relative flex items-center'>
              <div className='absolute right-4 bottom-10 shadow-xl z-20'>
                <Save city={city} id={data.id} cat={data.c} contrast={true} />
              </div>
              <Img className='w-full h-full object-cover object-top sm:object-center absolute' w='600' h='400' src={data.img}></Img>
            </div>

            <div className='flex flex-col gap-y-4 text-justify mx-4 -mt-6 z-10'>
              <p className='p-4 px-6  border bg-gray-100 text-black flex items-center rounded text-md leading-7'>{data.description}</p>
              {frame({ icon: <WarningAmberIcon />, warning: true, title: 'Debes saber', razon: ['Buen ambiente', 'Mucho sol'] })}
              {frame({ title: 'Por qué visitarla', razon: ['Buen ambiente', 'Mucho sol'], description: data.description })}
              <div className='shadow-xl p-6 rounded-lg mt-6 border'>
                <p className='text-lg mb-4'>Elige una razón para visitar {data.name}</p>
                <div className='grid sm:grid-cols-2 gap-4'>
                  {Object.keys(opiniones)
                    .sort((a, b) => {
                      console.log(opiniones[a]);
                      return opiniones[b] - opiniones[a];
                    })
                    .map((opinion, key) => {
                      const number = opiniones[opinion];
                      return (
                        <div
                          className='overflow-hidden relative p-4 hover:cursor-pointer select-none border-2 rounded-md flex  justify-between hover:border-black/20 hover:bg-gray-50'
                          key={key}>
                          <div className='relative z-10 flex justify-between w-full'>
                            <p className='capitalize'>{opinion}</p>
                            <p className='text-xl'>{number}%</p>
                          </div>
                          <div className='absolute h-full left-0 top-0 z-0 rounded-r-md' style={{ width: number + '%', background: 'red', opacity: number + '%' }}></div>
                        </div>
                      );
                    })}
                </div>
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
