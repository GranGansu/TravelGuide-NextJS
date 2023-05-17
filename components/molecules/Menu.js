import { motion } from 'framer-motion';
import { headerMenu, showIcons } from '../../configs/globals';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCountSaved } from '../hooks';
import BookmarkIcon from '@mui/icons-material/Bookmark';
export default function Menu({ city }) {
  const [saved] = useCountSaved();
  const router = useRouter();
  const current = router.pathname;
  return headerMenu.map((i, key) => {
    const Icon = i.icon;
    const active = '/[city]/' + i.url === current || current === '/' + i.title;
    return (
      <motion.li
        key={key}
        className={`py-2 sm:p-0 sm:border-0 h-full flex justify-center  ${
          active && 'bg-gray-600 sm:shadow-none shadow-md border-t border-gray-400 sm:translate-y-0 -translate-y-1 sm:rounded-none rounded'
        }`}>
        <Link href={`/${i.url !== 'Saved' ? city + '/' : ''}${i.url}`} className='w-full h-full p-4 py-3 flex items-center justify-center'>
          <div className='flex gap-x-2 items-center'>
            {i.url !== 'Saved' && (
              <p className={`font-thin text-center text-xl sm:text-2xl capitalize ${active ? '   underline-offset-4 text-yellow-200' : 'text-white '}`}>{i.title}</p>
            )}
            {i.icon && showIcons && <Icon className='fill-white border border-slate-300 rounded-full p-2 box-content shadow-inner'></Icon>}
            {i.url === 'Saved' && (
              <div className='flex  items-center justify-center'>
                <BookmarkIcon></BookmarkIcon>
                <div className='pl-1 rounded-xl text-xl sm:text-2xl font-bold'>{saved}</div>
              </div>
            )}
          </div>
        </Link>
      </motion.li>
    );
  });
}
