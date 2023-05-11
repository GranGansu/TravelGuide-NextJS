import Image from 'next/image';

export default function Img({ src, className = '', w = 480, h = 480, mot, priority = false }) {
  return <Image priority={priority} className={className} alt={src} src={'/img/' + src} width={w} height={h} quality={80}></Image>;
}
