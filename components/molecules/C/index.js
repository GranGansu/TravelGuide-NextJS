import { Absolute, Img } from '../../atoms';
import Link from 'next/link';
import Must from './Must';
import Save from './Save';
import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';
import useCountSaved from '../../hooks/useCountSaved';
import BookmarkIcon from '@mui/icons-material/Bookmark';
export default function C({ id, title, img, cat, must, saveIcon, setRefresh, priority, city, row, ecity }) {
  const [a, setSaved] = useCountSaved();
  const [checked, setChecked] = useState(false);
  const [background, setBackground] = useState(false);
  const handleDelete = (e) => {
    const nu = cat + 'NUEVO';
    e.preventDefault();
    const localObject = JSON.parse(localStorage[nu]);
    localObject[city] = localObject[city].filter((p) => {
      return p !== id;
    });
    localStorage[nu] = JSON.stringify({ ...localObject });
    setSaved((prev) => !prev);
    setRefresh((prev) => !prev);
  };
  const variants = { active: { opacity: 1, scale: 5.5 }, inactive: { opacity: 0, scale: 0 } };
  const carta = useMemo(() => {
    return (
      <div className={`flex-shrink-0 ${row ? 'w-fit' : 'w-full'}`}>
        <h1 className='text-2xl pl-2'>{title}</h1>
        <Link href={`/${city}/${cat}/${id}`}>
          <div className='relative sm:w-fit w-full from-red-100 to-blue-500 sm:hover:bg-gradient-to-br rounded p-2' style={{ background: background ? 'transparent' : '' }}>
            <Absolute>
              <motion.div
                className='flex items-center justify-center h-full'
                variants={variants}
                transition={{ duration: 0.5, repeat: 1, repeatType: 'mirror' }}
                initial={{ opacity: 0 }}
                animate={`${checked ? 'active' : 'inactive'}`}>
                <BookmarkIcon></BookmarkIcon>
              </motion.div>
            </Absolute>
            <Img priority={priority} src={img ? img : 'Poster.jpg'} w={480} h={480} className='sm:w-72 w-full h-72 rounded object-cover'></Img>
            {must && <Must />}
            {saveIcon ? (
              <div className='absolute bottom-0 mb-6 flex gap-x-4 justify-center w-full fill-white '>
                <Save city={city} id={id} cat={cat} setChecked={setChecked} checked={checked} />
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
  }, [id, checked, a]);
  return (
    <div className={`flex-shrink-0 ${row ? 'w-fit' : 'w-full'}`}>
      <h1 className='text-2xl pl-2'>{title}</h1>
      <Link href={`/${city ? city : ecity}/${cat}/${id}`}>
        <div className='relative sm:w-fit w-full from-red-100 to-blue-500 sm:hover:bg-gradient-to-br rounded p-2' style={{ background: background ? 'transparent' : '' }}>
          <Absolute>
            <motion.div
              className='flex items-center justify-center h-full'
              variants={variants}
              transition={{ duration: 0.5, repeat: 1, repeatType: 'mirror' }}
              initial={{ opacity: 0 }}
              animate={`${checked ? 'active' : 'inactive'}`}>
              <BookmarkIcon></BookmarkIcon>
            </motion.div>
          </Absolute>
          <Img priority={priority} src={img ? img : 'Poster.jpg'} w={480} h={480} className='sm:w-72 w-full h-72 rounded object-cover'></Img>
          {must && <Must />}
          {saveIcon ? (
            <div className='absolute bottom-0 mb-6 flex gap-x-4 justify-center w-full fill-white '>
              <Save city={city ? city : ecity} id={id} cat={cat} setChecked={setChecked} checked={checked} />
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
}
