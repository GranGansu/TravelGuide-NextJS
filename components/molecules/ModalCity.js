import Link from 'next/link';

export default function ModalCity() {
  const cities = [
    { name: 'Barcelona', url: '/barcelona' },
    { name: 'Canarias', url: '/canarias' },
    { name: 'Madrid', url: '/madrid' },
  ];
  const menu = (
    <ul className='text-2xl gap-y-2 flex flex-col'>
      {cities.map((city) => {
        return (
          <Link key={city.url} href={city.url}>
            <li className='hover:scale-110 hover:cursor-pointer text-2xl'>{city.name}</li>
          </Link>
        );
      })}
    </ul>
  );
  return menu;
}
