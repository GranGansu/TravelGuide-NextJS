import { useEffect, useState } from 'react';
import { Card } from '../molecules';
import axios from 'axios';

export default function Cards({ row, filters, cat = 'all', ids, saveIcon = true, set }) {
  const [data, setData] = useState(null);
  const [filt, setFilt] = useState(null);
  useEffect(() => {
    if (ids !== undefined) {
      axios.get(`/api/all?see=${ids[0]}&doo=${ids[1]}`).then((response) => {
        setData(response.data);
      });
    } else {
      axios.get(`/api/all?cat=${cat}`).then((response) => {
        setData(response.data);
      });
    }
  }, [ids, cat]);
  useEffect(() => {
    const activos = [];
    if (filters !== undefined) {
      filters.map((f) => {
        activos.push(f.id);
      });
      setFilt(activos);
    }
  }, [filters]);
  return (
    <div className={`p-6 overflow-x-auto  ${row ? 'flex gap-x-4' : 'grid grid-cols-1 gap-x-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:w-fit w-full mx-auto gap-y-8'}`}>
      {data !== null &&
        data.map((movie) => {
          if (filt !== null) {
            return (
              filt.includes(movie.cat) && (
                <Card ids={ids} set={setData} sett={set} saveIcon={saveIcon} must={movie.must} key={movie.id} title={movie.name} id={movie.id} img={movie.img} cat={movie.c}></Card>
              )
            );
          } else {
            return (
              <Card ids={ids} set={setData} sett={set} saveIcon={saveIcon} must={movie.must} key={movie.id} title={movie.name} id={movie.id} img={movie.img} cat={movie.c}></Card>
            );
          }
        })}
    </div>
  );
}
