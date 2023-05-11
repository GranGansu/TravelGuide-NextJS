import useGetCity from 'components/hooks/useGetCity';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { paths } from 'pages/api/all';
import { useState } from 'react';

export default function ModalCity({ setEstado }) {
  const [city, setCity] = useGetCity();
  const [visible, setVis] = useState(0);
  const menu = (
    <div>
      <ul className='text-2xl gap-y-6 flex flex-col'>
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
  return menu;
}
