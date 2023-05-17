import { home, secciones } from '../../configs/globals';
import { Img, Absolute } from '../atoms';
import { motion, useScroll, useTransform } from 'framer-motion';
import { forwardRef } from 'react';
import Link from 'next/link';

const FixedBg = forwardRef(function FixedBg(props, ref) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['100%', '0%']);
  return (
    <div className='overflow-hidden w-full sm:h-screen h-[50vh] relative bg-gray-700/20 flex items-center justify-center'>
      <motion.div
        className='absolute w-full h-full -z-10 opacity-100 scale-150'
        style={{ backgroundSize: 'initial', backgroundImage: `url(img/${props.img})`, backgroundPositionY: y, backgroundPositionX: 'center' }}></motion.div>
      <div className='z-40 relative items-center flex space-y-4 flex-col'>
        {secciones.map((s) => {
          return (
            <Link key={s.url} href={s.url} className='p-4 border-2 rounded-full bg-white text-slate-900 shadow-md relative overflow-hidden flex items-center gap-x-2'>
              <span className='relative z-10 font-bold text-xl'>{s.title}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
});
export default FixedBg;
