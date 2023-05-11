import { useState, useContext, useEffect } from 'react';
import { CityContext } from 'pages/_app';

export default function useGetCity(props = 'barcelona') {
  const [refresh, setRefresh] = useState(props);
  const [city, setCity] = useContext(CityContext);
  useEffect(() => {
    setRefresh(city);
  }, [city]);
  return [refresh, setCity];
}
