import { Absolute, Img } from '../atoms';
import { motion, useScroll, useTransform } from 'framer-motion';
export default function Benefits() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], ['100%', '200%']);
  const beneficios = [
    { h1: '12', p: 'Países' },
    { h1: '1050', p: 'Planes' },
    { h1: '77', p: 'Ciudades' },
  ];
  return (
    <div className='z-50 min-h-min text-center px-6 sm:px-0 py-[40px] sm:flex sm:flex-row grid grid-cols-2 gap-4 relative justify-center bg-orange-400 overflow-x-hidden overflow-hidden'>
      {beneficios.map((b, key) => {
        return (
          <div
            key={key}
            className={`p-6 flex flex-col justify-center border rounded shadow border-white/30 bg-orange-400 z-[999] relative ${key === 1 ? 'row-span-2 border-2' : ''}`}>
            <motion.h1 className='text-3xl font-bold text-gray-50' style={{ fontSize: y }}>
              {b.h1}
            </motion.h1>
            <p>{b.p}</p>
          </div>
        );
      })}
    </div>
  );
}
