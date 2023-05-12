import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import useGetCity from 'components/hooks/useGetCity';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { announcement } from '../../configs/globals';
import { useModal } from '../hooks';
import { ModalCity } from './';
import TranslateIcon from '@mui/icons-material/Translate';
export default function Announcement() {
  const [estado, setEstado] = useState(false);
  const [modal, setVis] = useModal(false, <ModalCity setEstado={setEstado}></ModalCity>);
  const [lang, setLang] = useModal(false, <ModalCity setEstado={setEstado} number={false}></ModalCity>);
  const [city, setCity] = useGetCity('barcelona');
  useEffect(() => {
    if (estado) {
      setVis(false);
      setEstado(false);
    }
  }, [estado]);
  return (
    <div className='text-lg mx-auto items-center justify-center grid grid-cols-3'>
      {modal}
      {lang}
      <Link href='/' className='py-3 relative h-full flex items-center text-gray-300 overflow-hidden'>
        <ArrowDropDownIcon className='text-2xl rotate-90 absolute text-black z-0 left-4' />
        <span className='ml-9'>Home</span>
      </Link>
      <motion.p
        className='max-w-fit -ml-3 text-white self-center place-self-center capitalize hover:cursor-pointer font-bold border-gray-400 pr-2 py-1 rounded'
        onClick={() => {
          setVis(true);
        }}>
        <ArrowDropDownIcon className='text-black' />
        {city}
      </motion.p>
      <div
        onClick={() => {
          setLang(true);
        }}
        className='text-gray-300'>
        <TranslateIcon />
      </div>
    </div>
  );
}
