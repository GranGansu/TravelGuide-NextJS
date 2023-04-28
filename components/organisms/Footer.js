import { home } from '../../configs/globals';
import { Absolute, Img } from '../atoms';

export default function Footer() {
  const tipos = ['Locales', 'Internacionales', 'España', 'Economía', 'Viajes'];
  const redes = ['Instagram', 'Twitter', 'E-mail'];
  return (
    <footer className='w-full  bg-gray-900 pb-10 flex flex-col items-center  gap-x-10 relative'>
      <Absolute className='z-0'>
        {/*  <Img src='hash.png' className='w-52 -translate-x-1/2 translate-y-10 absolute bottom-0 left-0'></Img> */}
        <svg className=' -translate-x-12 translate-y-14 absolute bottom-0 left-0 fill-yellow-200/30' xmlns='http://www.w3.org/2000/svg' width='250' viewBox='0 0 24 24'>
          <path d='M19 24h-14v-2h14v2zm-8.625-19.713c1.371 2.338 1.406 6.65.344 8.447 2.562-.312 5.115-2.838 5.674-4.533 1.043 1.439 1.607 3.144 1.607 4.966 0 1.554-.862 3.961-3.219 5.162-.219-1.391-1.125-2.906-2.638-3.766-1.44.844-2.497 2.688-2.784 3.938-1.234-.548-3.359-2.22-3.359-4.501 0-3.281 2.709-4.585 4.375-9.713zm-1.375-4.287c.542 6.292-5 8.458-5 14 0 3.764 3.49 6.42 7 7.005-.172-1.458.297-2.864 1.166-3.692.85.766 1.24 2.469.834 3.688 3.868-.75 7-3.858 7-7.833 0-3.626-1.833-7.043-5.291-9.168.604 2.312-.177 3.906-1.271 4.896.063-2.922-1.157-6.834-4.438-8.896z' />
        </svg>
      </Absolute>
      <div className='flex flex-col py-12  text-white w-full sm:w-fit px-4 mx-auto relative z-10'>
        <h2 className='text-xl text-white p-4 mb-4 border-blue-300 border flex gap-x-2'>
          <svg className='fill-white' width='24' height='24' xmlns='http://www.w3.org/2000/svg' fillRule='evenodd' clipRule='evenodd'>
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
      <div className='flex text-white pt-8 mx-4 w-full justify-center items-center relative'>
        <ul className='flex flex-col gap-4 text-xl font-bold relative z-10'>
          {redes.map((r) => {
            return (
              <li key={r} className='border-white text-xl px-4 rounded hover:cursor-pointer bg-gray-900/70'>
                {r}
                <span className='bg-red-500 py-1 ml-2 px-2 rounded-full'>265</span>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
