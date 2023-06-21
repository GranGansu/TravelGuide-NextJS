import { Absolute, Img } from '../../atoms';
import Link from 'next/link';
import Must from './Must';
import Save from './Save';
import { motion } from 'framer-motion';
import { useState, useMemo, useContext } from 'react';
import useCountSaved from '../../hooks/useCountSaved';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ClearIcon from '@mui/icons-material/Clear';
import { useTranslation } from 'react-i18next';
import { ReloadContext } from '../../../pages/_app';

export default function C({ id, title, img, cat, must, saveIcon, priority, city, row, ecity }) {
  const [a, setSaved] = useCountSaved();
  const [checked, setChecked] = useState(false);
  const [reload, setReload] = useContext(ReloadContext);

  const [background, setBackground] = useState(false);
  const { t } = useTranslation('common');
  const handleDelete = (e) => {
    const nu = cat + 'NUEVO';
    e.preventDefault();
    const localObject = JSON.parse(localStorage[nu]);
    localObject[ecity] = localObject[ecity].filter((p) => {
      return p !== Number(id);
    });
    if (localObject[ecity].length === 0) {
      delete localObject[ecity];
    }
    localStorage[nu] = JSON.stringify({ ...localObject });
    setSaved((prev) => !prev);
    setReload((prev) => {
      return {
        data: prev.data.filter((o) => {
          return Number(o.id) !== Number(id);
        }),
        current: false,
      };
    });
  };
  const variants = { active: { opacity: 1, scale: 5.5 }, inactive: { opacity: 0, scale: 0 } };
  return (
    <div className={`flex-shrink-0 ${row ? 'w-fit' : 'w-full'}`}>
      <Link href={`/${city ? city : ecity}/${cat}/${id}`}>
        <div className='relative sm:w-fit w-full from-red-100 to-blue-500 sm:hover:bg-gradient-to-br rounded sm:p-2' style={{ background: background ? 'transparent' : '' }}>
          <div className='bg-transparent relative rounded overflow-hidden '>
            <div className=' rounded border-gray-400 border absolute top-0 flex items-center justify-center w-full h-full bg-gradient-to-b from-gray-700/90 via-transparent to-transparent z-0'></div>
            <div className='absolute top-6 left-0 mb-6 flex text-center items-center justify-center w-full z-10'>
              <h1 className='text-2xl px-2'>{title}</h1>
            </div>
            <Absolute>
              <motion.div
                className='flex items-center justify-center h-full border-yellow-300'
                variants={variants}
                transition={{ duration: 0.5, repeat: 1, repeatType: 'mirror' }}
                initial={{ opacity: 0 }}
                animate={`${checked ? 'active' : 'inactive'}`}>
                <BookmarkIcon></BookmarkIcon>
              </motion.div>
            </Absolute>
            <Img
              priority={priority}
              src={img ? ecity + '/' + img : 'Poster.jpg'}
              w={300}
              h={300}
              className='sm:w-72 w-full h-72 rounded border border-gray-500  object-cover'></Img>

            {/*     {must && <Must />} */}
            {saveIcon ? (
              <div className='absolute bottom-0 mb-6 flex gap-x-4 justify-center w-full fill-white '>
                <Save setReload={setReload} city={city ? city : ecity} id={id} cat={cat} setChecked={setChecked} checked={checked} />
              </div>
            ) : (
              <div className='flex gap-x-2 justify-stretch z-10 relative '>
                <button onClick={handleDelete} className='rounded-b p-2 py-4 bg-gray-700 border-gray-400 border border-t-0 w-full  hover:bg-gray-600 hover:text-black'>
                  <ClearIcon />
                  {t('delete')}
                </button>
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
