import { useEffect, useState } from 'react';

export default function useGetCities(loading) {
  const [ciudades, setCiudades] = useState(null);
  useEffect(() => {
    if (localStorage.seeNUEVO !== undefined) {
      const message = JSON.parse(localStorage.seeNUEVO);
      const message2 = JSON.parse(localStorage.doNUEVO);
      const filtros = Object.keys({ ...message, ...message2 }).map((c) => {
        return { name: c, id: c };
      });
      setCiudades(filtros);
    }
  }, [loading]);
  return ciudades;
}
