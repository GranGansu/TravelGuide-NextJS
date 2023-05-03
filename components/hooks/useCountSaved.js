import { useState, useContext, useEffect } from 'react';
import { SavedContext } from '../../pages/_app';

export default function useCountSaved() {
  const [setty, setTy] = useState(false);
  const [saved, setSaved] = useContext(SavedContext);
  useEffect(() => {
    setSaved(JSON.parse(localStorage.do).concat(JSON.parse(localStorage.see)).length);
  }, [setty]);
  return setTy;
}
