import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useMovies() {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get('/api/hello').then((response) => {
      setData(response.data);
    });
  }, []);
  return data;
}
