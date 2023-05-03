import { useEffect, useState } from 'react';
import useCountSaved from '../../hooks/useCountSaved';

export default function Save({ id, cat, contrast = false, setChecked = () => {}, checked }) {
  const setSaved = useCountSaved();
  const [visible, setVisible] = useState(checked);
  const Save = () => {
    return visible ? (
      <>
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
          <path d='M21.856 10.303c.086.554.144 1.118.144 1.697 0 6.075-4.925 11-11 11s-11-4.925-11-11 4.925-11 11-11c2.347 0 4.518.741 6.304 1.993l-1.422 1.457c-1.408-.913-3.082-1.45-4.882-1.45-4.962 0-9 4.038-9 9s4.038 9 9 9c4.894 0 8.879-3.928 8.99-8.795l1.866-1.902zm-.952-8.136l-9.404 9.639-3.843-3.614-3.095 3.098 6.938 6.71 12.5-12.737-3.096-3.096z' />
        </svg>
        <p>Guardado</p>
      </>
    ) : (
      <>
        <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
          <path d='M5.495 2h16.505v-2h-17c-1.656 0-3 1.343-3 3v18c0 1.657 1.344 3 3 3h17v-20h-16.505c-1.376 0-1.376-2 0-2zm.505 4h7v7l2-2 2 2v-7h3v16h-14v-16z' />
        </svg>
        <p>Guardar</p>
      </>
    );
  };
  useEffect(() => {
    const local = JSON.parse(localStorage[cat]);
    if (local.includes(id)) {
      setVisible(true);
    }
  }, [cat, id]);
  return (
    <div
      className={`flex gap-x-2 hover:cursor-pointer rounded border p-2  ${contrast ? 'bg-red-100' : 'bg-black/20 hover:bg-black/80'}`}
      onClick={(e) => {
        e.preventDefault();
        if (localStorage[cat] === undefined) {
          localStorage[cat] = JSON.stringify([]);
        }
        const arr = JSON.parse(localStorage[cat]);
        if (!arr.includes(id)) {
          console.log(arr);
          arr.push(id);
        }
        if (!visible) {
          setVisible(true);
          setChecked(true);
          setSaved((prev) => !prev);
        }

        localStorage[cat] = JSON.stringify(arr);
      }}>
      <Save></Save>
    </div>
  );
}
