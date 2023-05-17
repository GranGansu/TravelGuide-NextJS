import { title1, title2 } from '../../configs/globals';
import { Img, Absolute } from '../atoms';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
export default function Banner({ city }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], ['0%', '60%']);
  const yb = useTransform(scrollY, [0, 500], ['-40%', '30%']);
  const yc = useTransform(scrollY, [0, 200], ['100%', '0%']);
  return (
    <div className='h-[50vh] flex items-center justify-center text-center px-4 sm:px-0 relative  bg-gray-700/90 overflow-hidden'>
      <motion.div
        className='opacity-100 absolute h-full w-full bg-no-repeat'
        style={{ backgroundSize: 'cover', backgroundImage: `url(img/${city}.webp)`, backgroundPositionY: y, backgroundPositionX: 'center', opacity: yc }}>
        <div className='w-full h-full from-transparent to-gray-600 bg-gradient-to-b'></div>
        {/*         <Img className='w-full h-full object-cover' src={`ciudad.jpg`}></Img> */}
      </motion.div>
      <motion.div
        className='opacity-0 absolute h-full w-full bg-no-repeat'
        style={{ backgroundSize: 'initial', backgroundImage: `url(img/trees.webp)`, backgroundPositionY: yb, backgroundPositionX: 'center' }}>
        {/*         <Img className='w-full h-full object-cover' src={`ciudad.jpg`}></Img> */}
      </motion.div>
      {/*       <motion.div className='w-full h-full absolute' style={{ top: y }}>
        <Img className='w-full h-full object-cover' src={`${city}banner.png`}></Img>
      </motion.div> */}
      {/*       <motion.div className='w-96 absolute' style={{ top: y }}>
                <svg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
          <path
            fill='#F1C21B'
            d='M37.2,-40.2C52.5,-31.5,72.2,-23.8,72.5,-14C72.8,-4.1,53.7,7.9,43.1,23.6C32.5,39.3,30.5,58.6,19.6,69.3C8.7,80,-10.9,82,-28.3,76.3C-45.7,70.6,-60.8,57.2,-64,41.8C-67.2,26.3,-58.3,8.8,-52.6,-6.8C-46.9,-22.4,-44.4,-36.1,-36.1,-46C-27.8,-55.9,-13.9,-62,-1.5,-60.3C11,-58.5,21.9,-48.8,37.2,-40.2Z'
            transform='translate(100 100)'
          />
        </svg> 
      </motion.div> */}
      <div className='z-0 relative items-center flex space-y-6 flex-col font-bold uppercase'>
        <div className='flex items-start flex-col'>
          <h1 className='text-4xl sm:text-4xl'>
            {title1} en <span className=' p-2 rounded drop-shadow-lg text-orange-200 block  mt-2 text-5xl'>{city}</span>
          </h1>
        </div>
        <div className='flex gap-4 sm:flex-row flex-col font-thin capitalize'>
          <motion.button
            whileHover={{ scale: 0.95 }}
            whileTap={{ scale: 0.6 }}
            className='px-6 shadow backdrop-blur-md py-2 text-2xl text-white rounded-full bg-transparent border w-fit'>
            <Link href={`/${city}/see`} className='text-2xl'>
              Qué ver en <span className='capitalize text-2xl'>{city}</span>
            </Link>
          </motion.button>
          <motion.button
            whileHover={{ scale: 0.95 }}
            whileTap={{ scale: 0.6 }}
            className='px-6 shadow backdrop-blur-md py-2 text-2xl text-white rounded-full bg-transparent border w-fit'>
            <Link href={`/${city}/do`} className='text-2xl'>
              Qué hacer en <span className='capitalize text-2xl'>{city}</span>
            </Link>
          </motion.button>
        </div>
      </div>
      {/* <Absolute className='bg-red-500  z-10 rotate-[20deg] -translate-x-12 opacity-90 w-[120vw]'></Absolute> */}
    </div>
  );
}
