import Image from 'next/image';

export default function Img({ src, className = '', w = 256, h = 256, mot, priority = false }) {
  return <Image priority={priority} className={className} alt={src} src={'/img/' + src} width={w} height={h} quality={50}></Image>;
}
