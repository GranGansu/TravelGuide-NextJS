import { motion } from 'framer-motion';
import { headerMenu, showIcons } from '../../configs/globals';
import Link from 'next/link';

export default function Menu() {
  return headerMenu.map((i, key) => {
    const Icon = i.icon;
    return (
      <motion.li key={key} whileTap={{ scale: 1.1 }}>
        <Link href={`/${i.url ? i.url : i.title}`}>
          <div className='flex flex-col items-center'>
            {i.icon && showIcons && <Icon></Icon>}
            <p className='font-bold text-2xl sm:text-lg sm:font-thin capitalize'>{i.title}</p>
          </div>
        </Link>
      </motion.li>
    );
  });
}
