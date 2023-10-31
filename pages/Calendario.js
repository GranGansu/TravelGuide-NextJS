import { useState } from 'react';
const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
export default function Calendario() {
  const [state, setState] = useState(1);
  return (
    <div className='w-full h-full bg-black'>
      <h1>Calendario</h1>
      <div className='grid grid-cols-2 gap-x-2 p-2'>
        <div className='flex flex-col gap-x-2'>
          <h1
            className='text-xl'
            onClick={() => {
              setState((prev) => {
                return prev === meses.length - 1 ? 0 : prev + 1;
              });
            }}>
            {meses[state]} 2023
          </h1>
          <div className='grid grid-cols-7 max-w-5xl border'>
            {dias.map((d) => {
              return (
                <div key={{ d }} className='p-1'>
                  {d}
                </div>
              );
            })}
            {new Array(Number(new Date(2023, state + 1, 0).getDate())).fill().map((dia, i) => {
              const day = new Date(2023, state + 1, i + 1).getDay();
              return (
                <div key={{ i }} style={{ gridColumnStart: i === 0 && day }} className={`border  p-1 hover:bg-gray-50 hover:cursor-pointer hover:text-black`}>
                  {i + 1}
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h2>Dia </h2>
        </div>
      </div>
    </div>
  );
}
