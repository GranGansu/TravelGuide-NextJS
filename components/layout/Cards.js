import { useEffect, useState } from 'react';

import { Card } from '../molecules';
import axios from 'axios';

export default function Cards({ row }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get('/api/hello').then((response) => {
      setData(response.data);
    });
  }, []);
  return (
    <div className={`p-6 bg-gray-700/90 overflow-x-auto  ${row ? 'flex gap-x-4' : 'grid grid-cols-2 sm:grid-cols-4 gap-y-4'}`}>
      {data !== null &&
        data.map((movie) => {
          return <Card key={movie.id} title={movie.name} id={movie.id} img={movie.img}></Card>;
        })}
    </div>
  );
}
