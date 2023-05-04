import { Absolute, Img } from '../../atoms';
import Link from 'next/link';
import Must from './Must';
import Save from './Save';
import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import useCountSaved from '../../hooks/useCountSaved';

export default function C({ id, title, img, cat, must, saveIcon, setRefresh, priority }) {
  const setSaved = useCountSaved();
  const [checked, setChecked] = useState(false);
  const [background, setBackground] = useState(false);
  const handleDelete = (e) => {
    setSaved((prev) => !prev);
    e.preventDefault();
    localStorage[cat] = JSON.stringify(
      JSON.parse(localStorage[cat]).filter((p) => {
        return p !== id;
      })
    );
    setRefresh((prev) => !prev);
  };
  const variants = { active: { opacity: 1, scale: 5.5 }, inactive: { opacity: 0, scale: 0 } };
  const carta = useMemo(() => {
    return (
      <div className='flex-shrink-0 w-full'>
        <h1 className='text-2xl pl-2'>{title}</h1>
        <Link href={`/${cat}/${id}`}>
          <div className='relative sm:w-fit w-full from-red-100 to-blue-500 hover:bg-gradient-to-br rounded p-2' style={{ background: background ? 'transparent' : '' }}>
            <Absolute>
              <motion.div
                className='flex items-center justify-center h-full'
                variants={variants}
                transition={{ duration: 0.5, repeat: 1, repeatType: 'mirror' }}
                initial={{ opacity: 0 }}
                animate={`${checked ? 'active' : 'inactive'}`}>
                <svg className='fill-white' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                  <path d='M21.856 10.303c.086.554.144 1.118.144 1.697 0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11c2.347 0 4.518.741 6.304 1.993l-1.422 1.457c-1.408-.913-3.082-1.45-4.882-1.45-4.962 0-9 4.038-9 9s4.038 9 9 9c4.894 0 8.879-3.928 8.99-8.795l1.866-1.902zm-.952-8.136l-9.404 9.639-3.843-3.614-3.095 3.098 6.938 6.71 12.5-12.737-3.096-3.096z' />
                </svg>
              </motion.div>
            </Absolute>
            <Img priority={priority} src={img ? img : 'Poster.jpg'} w={256} h={240} className='sm:w-72 w-full h-72 rounded object-cover'></Img>
            {must && <Must />}
            {saveIcon ? (
              <div className='absolute bottom-0 mb-6 flex gap-x-4 justify-center w-full fill-white '>
                <Save id={id} cat={cat} setChecked={setChecked} checked={checked} />
              </div>
            ) : (
              <div className='flex gap-x-2 mt-2 justify-stretch z-10 relative'>
                <button onClick={handleDelete} className='p-2 border w-full hover:border hover:border-blue-300'>
                  Borrar
                </button>
              </div>
            )}
          </div>
        </Link>
      </div>
    );
  }, [id, checked]);
  return <div>{carta}</div>;
}
