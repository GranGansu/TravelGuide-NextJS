import { useEffect, useState } from 'react';

export default function useModal(vis, props) {
  const [visible, setVisible] = useState(vis);
  useEffect(() => {
    visible ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'initial');
  }, [visible]);
  return [
    visible && (
      <div
        onClick={() => {
          setVisible(false);
        }}
        className='absolute w-screen h-screen top-0 left-0 text-white bg-black/90 flex flex-col justify-center items-center p-6 z-50'
        key={1}>
        {props}
      </div>
    ),
    setVisible,
  ];
}
