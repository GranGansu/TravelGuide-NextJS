import { useEffect, useState } from 'react';

export default function useGetCities(loading) {
  const [ciudades, setCiudades] = useState(null);
  useEffect(() => {
    if (localStorage.seeNUEVO !== undefined) {
      const filtros = Object.keys(JSON.parse(localStorage.seeNUEVO)).map((c) => {
        return { name: c, id: c };
      });
      setCiudades(filtros);
    }
  }, [loading]);
  return ciudades;
}
