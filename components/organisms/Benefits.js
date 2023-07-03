import { Absolute, Img } from '../atoms';
import { motion, useScroll, useTransform } from 'framer-motion';
import MuseumIcon from '@mui/icons-material/Museum';
import AttractionsIcon from '@mui/icons-material/Attractions';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import PublicIcon from '@mui/icons-material/Public';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

export default function Benefits({ city }) {
  const { t } = useTranslation('home');
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], ['100%', '200%']);
  const beneficios = [
    { h1: '12', p: 'museums', icon: <MuseumIcon />, cat: 'see', id: 1 },
    { h1: '1050', p: 'amusement', icon: <AttractionsIcon />, cat: 'see', id: 2 },
    { h1: '77', p: 'local', icon: <RamenDiningIcon />, cat: 'see', id: 3 },
    { h1: '77', p: 'lang', icon: <PublicIcon />, cat: 'do', id: 4 },
    { h1: '12', p: 'museums', icon: <MuseumIcon />, cat: 'see', id: 1 },
    { h1: '1050', p: 'amusement', icon: <AttractionsIcon />, cat: 'see', id: 2 },
    { h1: '77', p: 'local', icon: <RamenDiningIcon />, cat: 'see', id: 3 },
    { h1: '77', p: 'lang', icon: <PublicIcon />, cat: 'do', id: 4 },
  ];
  return (
    <div className='z-50 min-h-min text-center px-6 sm:px-0 py-[40px] sm:flex sm:flex-row grid grid-cols-2 gap-4 relative justify-center bg-gray-900 overflow-x-hidden overflow-hidden'>
      {beneficios.map((b, key) => {
        return (
          <Link key={key} href={`${city}/${b.cat}/?category=${b.id}`} className='relative'>
            <Absolute className='opacity-40'>
              <Img className='w-full h-full object-cover' src={`${b.p}.jpg`}></Img>
            </Absolute>
            <div
              className={`p-6 flex flex-col justify-center border rounded shadow hover:border-2 hover:scale-105 hover:cursor-pointer border-blue-200 bg-transparent z-[999] relative ${
                key === 1 ? 'row-span-3 border' : ''
              }`}>
              <motion.h1 className='text-3xl font-bold text-gray-50' style={{ fontSize: y }}>
                {b.icon}
              </motion.h1>
              <p>{t(b.p)}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
