export default function Page({ children, city }) {
  return city && <div className='flex-grow flex flex-col text-mainText shadow-inner bg-white'>{children}</div>;
}
