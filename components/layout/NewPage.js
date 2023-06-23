export default function NewPage({ h1, children, bar }) {
  return (
    <div className='bg-gray-700/90 flex-grow flex flex-col  items-center'>
      <div className='flex gap-x-2 items-center mt-8 select-none mb-8'>
        <h1 className='text-xl w-full text-center text-white '>{h1}</h1>
        {bar}
      </div>
      {children}
    </div>
  );
}
