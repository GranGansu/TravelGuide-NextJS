import { home } from '../../configs/globals';
import { Img, Absolute } from '../atoms';
import { motion, useScroll, useTransform } from 'framer-motion';
import { forwardRef } from 'react';

const FixedBg = forwardRef(function FixedBg(props, ref) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['100%', '0%']);
  return (
    <div className='overflow-hidden w-full sm:h-screen h-[50vh] relative bg-gray-700/50 flex items-center justify-center'>
      <motion.div
        className='absolute w-full h-full -z-10 opacity-40'
        style={{ backgroundSize: 'initial', backgroundImage: `url(img/${props.img})`, backgroundPositionY: y, backgroundPositionX: 'center' }}></motion.div>
      <div className='z-40 relative items-center flex space-y-4 flex-col'>
        {/*         <h1 className='text-4xl sm:text-6xl'>Ven a vernos</h1> */}
        <button className='p-4 border-2 rounded-full bg-white text-slate-900 shadow-md relative overflow-hidden flex items-center gap-x-2'>
          <span className='relative z-10 font-bold text-xl'>Diversión</span>
        </button>
        <button className='p-4 border-2 rounded-full bg-white text-slate-900 shadow-md relative overflow-hidden flex items-center gap-x-2'>
          <span className='relative z-10 font-bold text-xl'>Planes</span>
        </button>
        <button className='p-4 border-2 rounded-full bg-white text-slate-900 shadow-md relative overflow-hidden flex items-center gap-x-2'>
          {/*   <Img src='ticket.png' className='w-12'></Img> */}
          {/*           <svg className='w-12' clipRule='evenodd' fillRule='evenodd' stroke-linejoin='round' stroke-miterlimit='2' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='m3.508 6.726c1.765-2.836 4.911-4.726 8.495-4.726 5.518 0 9.997 4.48 9.997 9.997 0 5.519-4.479 9.999-9.997 9.999-5.245 0-9.553-4.048-9.966-9.188-.024-.302.189-.811.749-.811.391 0 .715.3.747.69.351 4.369 4.012 7.809 8.47 7.809 4.69 0 8.497-3.808 8.497-8.499 0-4.689-3.807-8.497-8.497-8.497-3.037 0-5.704 1.597-7.206 3.995l1.991.005c.414 0 .75.336.75.75s-.336.75-.75.75h-4.033c-.414 0-.75-.336-.75-.75v-4.049c0-.414.336-.75.75-.75s.75.335.75.75z'
              fillRule='nonzero'
            />
          </svg> */}
          <span className='relative z-10 font-bold text-xl'>Comida</span>
        </button>
      </div>
    </div>
  );
});
export default FixedBg;
