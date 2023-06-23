import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Img({ src, className = '', w = 480, h = 480, priority = false, animate, initial, transition }) {
  const Animada = motion(Image);
  return (
    <Animada
      animate={animate}
      initial={initial}
      transition={transition}
      priority={priority}
      className={className}
      alt={src}
      src={'/img/' + src}
      width={w}
      height={h}
      quality={40}></Animada>
  );
}
