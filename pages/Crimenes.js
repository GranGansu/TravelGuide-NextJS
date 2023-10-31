import { Img } from 'components/atoms';
import CheckIcon from '@mui/icons-material/Favorite';
import ClearIcon from '@mui/icons-material/HeartBroken';
import AdjustIcon from '@mui/icons-material/Adjust';
export default function Crimenes() {
  const criminales = [
    {
      nombre: 'Ted',
      nacimiento: 1970,
      victims: ['Luana', 'Susanne', 'Mary'],
      img: 'ted.jpg',
      crimes: ['Murder', 'Rape'],
      muerte: 2000,
      cronologia: [
        { year: 1982, name: 'Baraja', type: 'Murder' },
        { year: 1990, name: 'Baraja', type: 'Murder' },
      ],
    },
    {
      nombre: 'Gary Ridgeway',
      crimes: ['Murder', 'Rape'],
      victims: ['Luana', 'Susanne'],
      img: 'gary.jpg',
      nacimiento: 1970,
      muerte: 2000,
      cronologia: [
        { year: 1982, name: 'Baraja', type: 'Murder' },
        { year: 1999, name: 'Baraja', type: 'Murder' },
      ],
    },
    {
      nombre: 'Jones',
      nacimiento: 1970,
      victims: ['Luana', 'Susanne'],
      img: 'ted.jpg',
      crimes: ['Rape'],
      cronologia: [
        { year: 1996, name: 'Baraja', type: 'Murder' },
        { year: 1997, name: 'Baraja', type: 'Murder' },
      ],
    },
  ];
  return (
    <div className='bg-black'>
      <h1>Criminales</h1>
      <div className='flex flex-col gap-y-6 pb-6 max-w-6xl mx-auto'>
        {criminales.map((c) => {
          return (
            <div key={c.name} className='text-2xl border border-gray-500 bg-gray-800 p-4 rounded grid grid-cols-3'>
              <div className='p-2 col-span-1'>
                <Img src={c.img} className='w-full object-cover rounded'></Img>
              </div>
              <div className='col-span-2 pt-2 pl-2'>
                <div className='flex gap-x-2 items-center text-sm'>
                  <h1 className='p-2 rounded bg-gray-500 w-fit text-xl'>
                    {c.nombre} {!c.muerte ? <CheckIcon></CheckIcon> : <ClearIcon></ClearIcon>}
                  </h1>
                  {c.crimes.map((crime, key) => {
                    return <div key={key}>{crime}</div>;
                  })}
                </div>
                <div className='border-t-2 w-[98%] mx-auto  border-red-400 mt-6'></div>
                <div className='-mt-3 text-xs w-full flex relative'>
                  <div className='flex flex-col items-center w-fit'>
                    <AdjustIcon className='text-red-400'></AdjustIcon>
                    <p>{c.nacimiento}</p>
                  </div>
                  {c.cronologia.map((y, key) => {
                    const edad = (c.muerte ?? new Date().getFullYear()) - c.nacimiento; //50
                    const edadCrimen = edad - ((c.muerte ?? new Date().getFullYear()) - y.year); // 1
                    const porcentaje = 100 / (edad / edadCrimen);
                    return (
                      <div
                        key={key}
                        style={{ left: porcentaje + '%' }}
                        className={`hover:scale-105 hover:z-50 hover:cursor-pointer flex flex-col items-center absolute w-fit z-[${key}]`}>
                        <AdjustIcon className='text-red-400'></AdjustIcon>
                        <p className='bg-black/90 p-1 rounded'>{y.year}</p>
                      </div>
                    );
                  })}
                  <div className='flex flex-col items-center w-fit right-0 absolute z-0'>
                    <AdjustIcon className='text-red-400'></AdjustIcon>
                    <p>{c.muerte ?? new Date().getFullYear() + '>'}</p>
                  </div>
                </div>
                <div>
                  Víctimas ({c.victims.length}
                  ):
                  {c.victims.map((v) => {
                    return <div>{v}</div>;
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
