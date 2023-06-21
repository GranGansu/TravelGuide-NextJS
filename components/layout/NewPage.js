export default function NewPage({ h1, children, bar }) {
  return (
    <div className='bg-gray-700/90 flex-grow flex flex-col  items-center'>
      <div className='flex gap-x-2 items-center mt-8 select-none mb-8'>
        <h1 className=' w-full text-center text-white '>
          <span className=' rounded p-2 px-4 text-lg border  border-gray-700'>{h1}</span>
        </h1>
        {bar}
      </div>
      {children}
    </div>
  );
}
