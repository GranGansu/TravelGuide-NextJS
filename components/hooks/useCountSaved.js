import { useState, useContext, useEffect } from 'react';
import { SavedContext } from '../../pages/_app';

export default function useCountSaved() {
  const [refresh, setRefresh] = useState(false);
  const [saved, setSaved] = useContext(SavedContext);
  useEffect(() => {
    const see = localStorage.seeNUEVO ? Object.values(JSON.parse(localStorage.seeNUEVO)) : [];
    const doo = localStorage.doNUEVO ? Object.values(JSON.parse(localStorage.doNUEVO)) : [];
    const nuObject = [...see, ...doo];
    setSaved(nuObject.flat().length);
  }, [refresh, setSaved]);
  return [saved, setRefresh];
}
