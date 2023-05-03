import { motion } from 'framer-motion';
import { headerMenu, showIcons } from '../../configs/globals';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { SavedContext } from '../../pages/_app';

export default function Menu() {
  const [saved] = useContext(SavedContext);
  const router = useRouter();
  const current = router.pathname;
  return headerMenu.map((i, key) => {
    const Icon = i.icon;
    const active = '/' + i.url === current;
    return (
      <Link key={key} href={`/${i.url ? i.url : i.title}`}>
        <motion.li className={` sm:border-0 h-full flex justify-center p-4  ${active && 'bg-gray-600'}`}>
          <div className='flex gap-x-2 items-center'>
            {i.url !== 'Saved' && (
              <p className={`font-bold text-center text-2xl sm:text-2xl capitalize ${active ? ' text-red-100  underline-offset-4' : 'text-white '}`}>{i.title}</p>
            )}
            {i.icon && showIcons && <Icon className='fill-white border border-slate-300 rounded-full p-2 box-content shadow-inner'></Icon>}
            {i.url === 'Saved' && (
              <div className='flex  items-center justify-center'>
                <svg className='z-10 relative fill-white' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
                  <path d='M5.495 2h16.505v-2h-17c-1.656 0-3 1.343-3 3v18c0 1.657 1.344 3 3 3h17v-20h-16.505c-1.376 0-1.376-2 0-2zm.505 4h7v7l2-2 2 2v-7h3v16h-14v-16z' />
                </svg>
                <div className='pl-1 rounded-xl text-2xl font-bold'>{saved}</div>
              </div>
            )}
          </div>
        </motion.li>
      </Link>
    );
  });
}
