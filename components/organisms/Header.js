import { Menu } from 'components/molecules';

export default function Header({ city }) {
  return (
    <div className={`m-auto  text-headerUl  z-50 sm:bg-orange-400`}>
      <div className=' relative z-40'>
        <ul className='w-full grid grid-cols-3 relative sm:max-w-4xl sm:mx-auto border-t-0 sm:border-t-0 bg-gray-600 border-gray-400 sm:bg-orange-400'>
          <Menu city={city}></Menu>
        </ul>
      </div>
    </div>
  );
}
