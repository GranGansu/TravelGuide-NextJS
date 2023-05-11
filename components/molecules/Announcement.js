import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import useGetCity from 'components/hooks/useGetCity';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { announcement } from '../../configs/globals';
import { useModal } from '../hooks';
import { ModalCity } from './';

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
    <div>
      {modal}
      <motion.p
        className='text-lg capitalize'
        onClick={() => {
          setVis(true);
        }}>
        <ArrowDropDownIcon></ArrowDropDownIcon>
        {city}
      </motion.p>
    </div>
  );
}
