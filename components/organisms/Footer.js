import { home } from '../../configs/globals';
import { Img } from '../atoms';

export default function Footer() {
  const tipos = ['Locales', 'Internacionales', 'España', 'Economía', 'Viajes'];
  return (
    <footer className='w-full  bg-gray-900 pb-10 flex flex-col items-center  gap-x-10'>
      <div className='flex flex-col py-12  text-white w-full sm:w-fit px-4 mx-auto'>
        <h2 className='text-xl text-white p-4 mb-4 border-blue-300 border flex gap-x-2'>
          <svg className='fill-white' width='24' height='24' xmlns='http://www.w3.org/2000/svg' fill-rule='evenodd' clip-rule='evenodd'>
            <path d='M13 9h9l-14 15 3-9h-9l14-15-3 9zm-8.699 5h8.086l-1.987 5.963 9.299-9.963h-8.086l1.987-5.963-9.299 9.963z' />
          </svg>{' '}
          Noticias
        </h2>
        <div className='flex gap-x-4 overflow-x-auto overflow-y-visible'>
          {tipos.map((t, key) => {
            return (
              <div key={key} className='p-4 border rounded hover:border-transparent hover:cursor-pointer'>
                {t}
              </div>
            );
          })}
        </div>
      </div>
      <div className='flex flex-col text-white border-t pt-12 mx-4 w-full justify-center items-center'>
        <ul className='flex gap-x-4 text-xl font-bold'>
          <li className='border-white rotate-6 border px-4 rounded hover:cursor-pointer'>Instagram</li>
          <li className='border-red-300 -rotate-6 border px-4 rounded hover:cursor-pointer'>Twitter</li>
          <li className='border-white rotate-6 border px-4 rounded hover:cursor-pointer'>E-mail</li>
        </ul>
      </div>
      <Img src='hash.png' className='w-52'></Img>
    </footer>
  );
}
