import { Img } from '../atoms';
import Link from 'next/link';
export default function Card({ id, title, img }) {
  return (
    <div className='flex-shrink-0'>
      <h1 className='text-2xl pl-2'>{title}</h1>
      <Link href={`/movie/${id}`}>
        <div className='relative  from-red-100 to-blue-500 hover:bg-gradient-to-br rounded p-2'>
          {img ? <Img src={img} className='w-48 h-72 rounded object-cover'></Img> : <Img src='Poster.jpg' className='w-48 h-72 rounded object-cover'></Img>}
          {/*           <div className='absolute h-full w-full bg-gradient left-0 top-0 rounded'></div> */}
        </div>
      </Link>
    </div>
  );
}
