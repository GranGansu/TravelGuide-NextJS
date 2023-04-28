import { Img } from '../../atoms';
import Link from 'next/link';
import Must from './Must';
import Save from './Save';

export default function C({ id, title, img, cat, must, saveIcon, set, sett }) {
  const handleDelete = (e) => {
    e.preventDefault();
    localStorage.removeItem('doo');
    localStorage.removeItem('see');
    set(null);
    sett(undefined);
  };
  return (
    <div className='flex-shrink-0 w-full'>
      <h1 className='text-2xl pl-2'>{title}</h1>
      <Link href={`/${cat}/${id}`}>
        <div className='relative  sm:w-fit w-full from-red-100 to-blue-500 hover:bg-gradient-to-br rounded p-2'>
          <Img src={img ? img : 'Poster.jpg'} w='300' h='300' className='sm:w-72 w-full h-72 rounded object-cover'></Img>
          {must && <Must />}
          {saveIcon ? (
            <Save id={id} cat={cat} />
          ) : (
            <div className='flex gap-x-2 mt-2 justify-stretch z-10 relative'>
              <button onClick={handleDelete} className='p-2 border w-full hover:border hover:border-blue-300'>
                Borrar
              </button>
              <button onClick={handleDelete} className='p-2 border w-full hover:border hover:border-blue-300'>
                Visitado
              </button>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}
