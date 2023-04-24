import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Img({ src, className = '', w = 500, h = 500, mot }) {
  const Imotion = motion(Image);
  return (
    <Imotion
      transition={{ duration: 1.3, repeat: Infinity, repeatType: 'mirror' }}
      animate={!mot ? {} : { opacity: 1 }}
      initial={!mot ? {} : { opacity: 0.6 }}
      className={className}
      alt={src}
      src={'/img/' + src}
      width={w}
      height={h}></Imotion>
  );
}
