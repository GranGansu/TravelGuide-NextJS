import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import useGetCity from 'components/hooks/useGetCity';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ModalCity } from './';
import TranslateIcon from '@mui/icons-material/Translate';
import { useTranslation } from 'next-i18next';
import { useModal } from 'components/hooks';
import { useRouter } from 'next/router';
import { Img } from 'components/atoms';

export default function Announcement() {
  const router = useRouter();
  const { t } = useTranslation('common');
  const [estado, setEstado] = useState(false);
  const [modal, setVis] = useModal(false, <ModalCity setEstado={setEstado}></ModalCity>);
  const [lang, setLang] = useModal(false, <ModalCity setEstado={setEstado} number={false}></ModalCity>);
  const [city, setCity] = useGetCity('barcelona');
  useEffect(() => {
    if (estado) {
      setVis(false);
      setEstado(false);
      setLang(false);
    }
  }, [estado]);
  return (
    <div className='text-md mx-auto items-center justify-center grid grid-cols-2 sm:grid-cols-3 max-w-4xl'>
      {modal}
      {lang}
      <Link href={`/${city}`} className='py-3 relative h-full items-center text-gray-300 overflow-hidden hidden sm:flex'>
        <ArrowDropDownIcon className='text-2xl rotate-90 absolute text-black z-0 left-4' />
        <span className='ml-9'>{t('home')}</span>
      </Link>
      <motion.button
        className='max-w-fit sm:-ml-3 text-white  place-self-left sm:place-self-center capitalize hover:cursor-pointer font-bold border-gray-400 pr-2 pl-5 sm:pl-0 py-3 rounded'
        onClick={() => {
          setVis(true);
        }}>
        <ArrowDropDownIcon className='text-white' />
        {city}
      </motion.button>
      <div
        onClick={() => {
          setLang(true);
        }}
        className='text-gray-300 hover:cursor-pointer flex gap-x-2 justify-end pr-6'>
        <TranslateIcon />
        <Img src={`${router.locale}flag.png`} className='w-5'></Img>
      </div>
    </div>
  );
}
