import { motion, AnimatePresence } from 'framer-motion';
export default function Filters({ filters, set, full }) {
  const handleReset = () => {
    set(full);
  };
  return (
    <ul className='flex gap-x-2 sm:justify-center overflow-x-scroll px-6'>
      <AnimatePresence>
        {filters.map((f) => {
          return (
            <motion.li
              exit={{ y: 20, opacity: 0.1, transition: { duration: 0.2 } }}
              onClick={() => {
                set((prev) => {
                  return prev.filter((ff) => {
                    if (ff.id !== f.id) {
                      return ff;
                    }
                    return null;
                  });
                });
              }}
              key={f.id}
              className='hover:cursor-pointer whitespace-nowrap flex items-center hover:line-through gap-x-2 p-1 px-2 bg-gray-50/20 border-gray-500 border-2 rounded-full'>
              {f.name}
              <svg className='fill-red-300' xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24'>
                <path d='M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z' />
              </svg>
            </motion.li>
          );
        })}
        <li onClick={handleReset} className='hover:cursor-pointer min-w-fit p-1 px-2 bg-green-700 border-green-500 border-2 rounded-full fill-white flex gap-x-1 items-center'>
          <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24'>
            <path d='M23 12c0 1.042-.154 2.045-.425 3h-2.101c.335-.94.526-1.947.526-3 0-4.962-4.037-9-9-9-1.706 0-3.296.484-4.654 1.314l1.857 2.686h-6.994l2.152-7 1.85 2.673c1.683-1.049 3.658-1.673 5.789-1.673 6.074 0 11 4.925 11 11zm-6.354 7.692c-1.357.826-2.944 1.308-4.646 1.308-4.963 0-9-4.038-9-9 0-1.053.191-2.06.525-3h-2.1c-.271.955-.425 1.958-.425 3 0 6.075 4.925 11 11 11 2.127 0 4.099-.621 5.78-1.667l1.853 2.667 2.152-6.989h-6.994l1.855 2.681zm.354-10.283l-1.421-1.409-5.105 5.183-2.078-2.183-1.396 1.435 3.5 3.565 6.5-6.591z' />
          </svg>
          Mostrar todo
        </li>
      </AnimatePresence>
    </ul>
  );
}
