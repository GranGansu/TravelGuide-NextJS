import Cardz from 'components/layout/Cardz';
import { useRouter } from 'next/router';

export default function City() {
  const { city } = useRouter().query;
  return (
    <div className='bg-black px-6 flex flex-col items-center pt-6'>
      <h1 className='text-2xl capitalize'>{city}</h1>
      <Cardz></Cardz>
    </div>
  );
}
