import { Absolute, Img } from '../atoms';
import Link from 'next/link';
export default function Card({ id, title, img, cat, must, saveIcon }) {
  return (
    <div className='flex-shrink-0 w-full'>
      <h1 className='text-2xl pl-2'>{title}</h1>
      <Link href={`/${cat}/${id}`}>
        <div className='relative  sm:w-fit w-full from-red-100 to-blue-500 hover:bg-gradient-to-br rounded p-2'>
          <Img src={img ? img : 'Poster.jpg'} className='sm:w-72 w-full h-72 rounded object-cover '></Img>
          {must && (
            <Absolute style={{ overflow: 'initial' }}>
              <div className='p-2 border-yellow-600 bg-orange-300 w-fit -ml-2 rounded-br-lg rounded-tl-lg shadow-xl border font-bold text-white flex flex-col justify-center items-center'>
                <svg width='50' clipRule='evenodd' fillRule='evenodd' strokeLinejoin='round' strokeMiterlimit='2' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='m17.5 11c2.484 0 4.5 2.016 4.5 4.5s-2.016 4.5-4.5 4.5-4.5-2.016-4.5-4.5 2.016-4.5 4.5-4.5zm-5.346 6.999c-.052.001-.104.001-.156.001-4.078 0-7.742-3.093-9.854-6.483-.096-.159-.144-.338-.144-.517s.049-.358.145-.517c2.111-3.39 5.775-6.483 9.853-6.483 4.143 0 7.796 3.09 9.864 6.493.092.156.138.332.138.507 0 .179-.062.349-.15.516-.58-.634-1.297-1.14-2.103-1.472-1.863-2.476-4.626-4.544-7.749-4.544-3.465 0-6.533 2.632-8.404 5.5 1.815 2.781 4.754 5.34 8.089 5.493.09.529.25 1.034.471 1.506zm3.071-2.023 1.442 1.285c.095.085.215.127.333.127.136 0 .271-.055.37-.162l2.441-2.669c.088-.096.131-.217.131-.336 0-.274-.221-.499-.5-.499-.136 0-.271.055-.37.162l-2.108 2.304-1.073-.956c-.096-.085-.214-.127-.333-.127-.277 0-.5.224-.5.499 0 .137.056.273.167.372zm-3.603-.994c-2.031-.19-3.622-1.902-3.622-3.982 0-2.208 1.792-4 4-4 1.804 0 3.331 1.197 3.829 2.84-.493.146-.959.354-1.389.615-.248-1.118-1.247-1.955-2.44-1.955-1.38 0-2.5 1.12-2.5 2.5 0 1.363 1.092 2.472 2.448 2.499-.169.47-.281.967-.326 1.483z'
                    fillRule='nonzero'
                  />
                </svg>
                <p>MUST</p>
              </div>
            </Absolute>
          )}
          {saveIcon ? (
            <div className=' absolute bottom-0 mb-6 flex gap-x-4 justify-center w-full fill-white '>
              <div
                className='flex gap-x-2 bg-black/20 rounded border p-2'
                onClick={(e) => {
                  e.preventDefault();
                  localStorage.saved = localStorage.saved + '-' + id;
                }}>
                <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                  <path d='M5.495 2h16.505v-2h-17c-1.656 0-3 1.343-3 3v18c0 1.657 1.344 3 3 3h17v-20h-16.505c-1.376 0-1.376-2 0-2zm.505 4h7v7l2-2 2 2v-7h3v16h-14v-16z' />
                </svg>
                <p className='drop-shadow-xl'>Guardar</p>
              </div>
            </div>
          ) : (
            <div className='flex gap-x-2 mt-2 justify-stretch'>
              <button className='p-2 border w-full hover:text-xl'>Borrar</button>
              <button className='p-2 border w-full hover:text-xl'>Visitado</button>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}
