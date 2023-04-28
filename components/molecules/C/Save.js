export default function Save({ id, cat }) {
  return (
    <div className=' absolute bottom-0 mb-6 flex gap-x-4 justify-center w-full fill-white '>
      <div
        className='flex gap-x-2 bg-black/20 rounded border p-2 hover:bg-black/80'
        onClick={(e) => {
          e.preventDefault();
          if (localStorage.see === undefined) {
            localStorage.see = JSON.stringify([]);
          }
          if (localStorage.doo === undefined) {
            localStorage.doo = JSON.stringify([]);
          }
          if (cat === 'see') {
            const arr = JSON.parse(localStorage.see);
            if (!arr.includes(id.toString())) {
              arr.push(id);
            }
            localStorage.see = JSON.stringify(arr);
          }
          if (cat === 'do') {
            const arr = JSON.parse(localStorage.doo);
            if (!arr.includes(id.toString())) {
              arr.push(id);
            }
            localStorage.doo = JSON.stringify(arr);
          }
        }}>
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
          <path d='M5.495 2h16.505v-2h-17c-1.656 0-3 1.343-3 3v18c0 1.657 1.344 3 3 3h17v-20h-16.505c-1.376 0-1.376-2 0-2zm.505 4h7v7l2-2 2 2v-7h3v16h-14v-16z' />
        </svg>
        <p className='drop-shadow-xl'>Guardar</p>
      </div>
    </div>
  );
}
