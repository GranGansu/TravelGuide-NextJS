import useGetCity from 'components/hooks/useGetCity';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { paths } from 'pages/api/all';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Img } from 'components/atoms';

const idiomas = [
  { id: 1, name: 'Español', url: '/', locale: 'es' },
  { id: 2, name: 'English', url: '/', locale: 'en' },
];
export default function ModalCity({ setEstado, number = true }) {
  const router = useRouter();
  const [city, setCity] = useGetCity();
  const [visible, setVis] = useState(0);
  const lang = (
    <div>
      <div className='text-2xl gap-y-2 flex flex-col items-start select-none'>
        {idiomas.map((idioma) => {
          const active = visible === idioma.id;
          return (
            <motion.div
              animate={{ scale: active ? 5 : 1, background: 'transparent', padding: '20px', fontWeight: active ? 'bold' : 'initial' }}
              key={idioma.locale}
              onAnimationComplete={(e) => {
                if (visible === idioma.id) {
                  setEstado(true);
                }
              }}
              onClick={(e) => {
                e.stopPropagation();
                const { pathname, asPath, query } = router;
                router.push({ pathname, query }, asPath, { locale: idioma.locale });
                setVis(idioma.id);
              }}>
              <button className='hover:scale-110 hover:cursor-pointer text-3xl'>
                <Img src={`${idioma.locale}flag.png`} className='w-6'></Img>
                {idioma.name}
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
  const menu = (
    <div>
      <ul className='text-2xl gap-y-6 flex flex-col select-none'>
        <motion.div>
          <Link href='/'>
            <li className='hover:scale-110 hover:cursor-pointer text-3xl'>Home</li>
          </Link>
        </motion.div>
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
              <Link href={`/${city.name.toLowerCase()}`}>
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
