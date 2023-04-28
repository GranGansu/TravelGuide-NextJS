import { motion } from 'framer-motion';
import { headerMenu, showIcons } from '../../configs/globals';
import Link from 'next/link';
import { useRouter } from 'next/router';
export default function Menu() {
  const router = useRouter();
  const current = router.pathname;
  return headerMenu.map((i, key) => {
    const Icon = i.icon;
    const active = '/' + i.url === current;
    return (
      <Link key={key} href={`/${i.url ? i.url : i.title}`}>
        <motion.li whileTap={{ scale: 1.1 }} className={` sm:border-0 flex justify-center  pr-6 p-4 `}>
          <div className='flex gap-x-2 items-center'>
            <p className={`font-bold  text-2xl sm:text-2xl capitalize ${active ? 'scale-110 px-2 text-red-100' : 'text-white '}`}>{i.title}</p>
            {i.icon && showIcons && <Icon className='fill-white border border-slate-300 rounded-full p-2 box-content shadow-inner'></Icon>}
          </div>
        </motion.li>
      </Link>
    );
  });
}
