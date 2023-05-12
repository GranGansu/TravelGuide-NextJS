import useGetCity from 'components/hooks/useGetCity';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { paths } from 'pages/api/all';
import { useState } from 'react';
const idiomas = [
  { id: 1, name: 'Spanish', url: '/' },
  { id: 2, name: 'English', url: '/' },
];
export default function ModalCity({ setEstado, number = true }) {
  const [city, setCity] = useGetCity();
  const [visible, setVis] = useState(0);
  const lang = (
    <div>
      <ul className='text-2xl gap-y-6 flex flex-col select-none'>
        {idiomas.map((idioma) => {
          const active = visible === idioma.id;
          return (
            <motion.div
              animate={{ scale: active ? 5 : 1, background: 'transparent', padding: '20px', fontWeight: active ? 'bold' : 'initial' }}
              key={idioma.url}
              onAnimationComplete={(e) => {
                if (visible === idioma.id) {
                  setEstado(true);
                }
              }}
              onClick={(e) => {
                e.stopPropagation();
                setVis(idioma.id);
              }}>
              {' '}
              <li className='hover:scale-110 hover:cursor-pointer text-3xl'>{idioma.name}</li>
            </motion.div>
          );
        })}
      </ul>
    </div>
  );
  const menu = (
    <div>
      <ul className='text-2xl gap-y-6 flex flex-col select-none'>
        {paths.map((city) => {
          const active = visible === city.id;
          return (
            <motion.div
              animate={{ scale: active ? 5 : 1, background: 'transparent', padding: '20px', fontWeight: active ? 'bold' : 'initial' }}
              key={city.url}
              onAnimationComplete={(e) => {
                if (visible === city.id) {
                  setEstado(true);
                }
              }}
              onClick={(e) => {
                e.stopPropagation();
                setVis(city.id);
                setCity(city.name.toLowerCase());
              }}>
              {' '}
              <Link href={`/${city.name.toLowerCase()}/do`}>
                <li className='hover:scale-110 hover:cursor-pointer text-3xl'>{city.name}</li>
              </Link>
            </motion.div>
          );
        })}
      </ul>
    </div>
  );
  return number ? menu : lang;
}
