export default function Button({ classes = 'original', children, clickHandler }) {
  const styles = {
    original: ' border-2 rounded hover:cursor-pointer hover:cursor-pointer flex fill-white items-center rounded-full py-1 px-3 gap-x-2 whitespace-nowrap',
    filter: 'hover:line-through bg-gray-50/20 border-gray-500',
    filterReset: 'bg-green-700 border-green-500 hover:border-green-300',
  };
  return (
    <button onClick={clickHandler} className={`${styles[classes] + styles['original']}`}>
      {children}
    </button>
  );
}
