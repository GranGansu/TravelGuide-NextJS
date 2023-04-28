export default function Modal({ children, visible = false, setVisible }) {
  return (
    visible && (
      <div
        onClick={() => {
          setVisible(false);
        }}
        className='absolute w-screen h-screen top-0 left-0 text-white bg-black/90 flex flex-col justify-center items-center p-6 z-50'>
        {children}
      </div>
    )
  );
}
