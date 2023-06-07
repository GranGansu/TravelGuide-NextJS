import { useEffect, useState } from 'react';
import useCountSaved from '../../hooks/useCountSaved';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { useTranslation } from 'next-i18next';

export default function Save({ id, cat, contrast = false, setChecked = () => {}, checked, city, setReload }) {
  const [a, setSaved] = useCountSaved();
  const { t } = useTranslation('common');
  const [visible, setVisible] = useState(checked);
  const nu = cat + 'NUEVO';
  const guardadoConCiudad = () => {
    !localStorage[nu] && localStorage.setItem(nu, JSON.stringify({}));
    const localObject = JSON.parse(localStorage[nu]);
    if (!localObject[city]) {
      localObject[city] = [];
    }
    if (!localObject[city].includes(id)) {
      localObject[city].push(id);
    }
    localStorage[nu] = JSON.stringify(localObject);
    setReload((prev) => {
      return { ...prev, current: true };
    });
  };
  const Save = () => {
    return visible ? (
      <>
        <BookmarkIcon className={`fill-yellow-300  ${contrast && 'scale-125'}`} />
        <p>{t('saved')}</p>
      </>
    ) : (
      <>
        <BookmarkBorderIcon />
        <p>{t('save')}</p>
      </>
    );
  };
  useEffect(() => {
    if (localStorage[nu] !== undefined) {
      const local = JSON.parse(localStorage[nu]);
      if (local[city] !== undefined && local[city].includes(id)) {
        setVisible(true);
      }
    }
  }, [cat, id, city]);
  return (
    <div
      className={`flex gap-x-2 hover:cursor-pointer text-white rounded p-2 border ${visible && 'border-yellow-300 text-yellow-300'}   ${
        contrast ? 'bg-red-0 backdrop-blur-md' : 'bg-black/20 text-white hover:bg-black/30'
      }`}
      onClick={(e) => {
        e.preventDefault();
        guardadoConCiudad();
        if (!visible) {
          setVisible(true);
          setChecked(true);
          setSaved((prev) => !prev); //Por esto se recarga toda la página
        }
      }}>
      <Save></Save>
    </div>
  );
}
