export default function ListItem({ llave, option }) {
  const cual = option.price ? `a ${option.price}€` : `en ${option.time}h`;
  return (
    <li className='shadow p-4 px-2 w-full border rounded border-violet-400 items-center text-white text-xl flex justify-between'>
      <span className=' px-2 text-gray-400'>{llave + 1}</span>
      <p className='text-left flex-grow pl-2'>{option.name}</p>
      <span className='border p-1 rounded px-2 font-bold text-xl'>{cual}</span>
    </li>
  );
}
