import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import useGetCity from 'components/hooks/useGetCity';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { announcement } from '../../configs/globals';
import { useModal } from '../hooks';
import { ModalCity } from './';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
export default function Announcement() {
  const [estado, setEstado] = useState(false);
  const [modal, setVis] = useModal(false, <ModalCity setEstado={setEstado}></ModalCity>);
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
      <Link href='/' className='text-gray-200'>
        Home
      </Link>
      <motion.p
        className='max-w-fit self-center place-self-center capitalize hover:cursor-pointer  border-gray-400 pr-2 py-1 rounded'
        onClick={() => {
          setVis(true);
        }}>
        <ArrowDropDownIcon></ArrowDropDownIcon>
        {city}
      </motion.p>
    </div>
  );
}
