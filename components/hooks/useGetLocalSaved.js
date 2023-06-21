import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useGetLocalSaved(load, refy, set, savedNumber) {
  const [saved, setSaved] = useState(0);
  const [results, setResults] = useState(false);
  const reformular = (cityObject, sql) => {
    Object.entries(cityObject).map((e, key) => {
      if (key === 0) {
        sql += e[0] + '[' + e[1].join('-') + ']';
      } else {
        sql += '&city=' + e[0] + '[' + e[1].join('-') + ']';
      }
    });
    return sql;
  };
  useEffect(() => {
    if ((saved !== 0 && refy.current) || (savedNumber !== refy.data.length && savedNumber !== 0)) {
      const todos = [];
      const see = localStorage.seeNUEVO !== undefined && localStorage.seeNUEVO !== '' && JSON.parse(localStorage.seeNUEVO);
      const doo = localStorage.doNUEVO !== undefined && localStorage.doNUEVO !== '' && JSON.parse(localStorage.doNUEVO);
      let sqlV = '/api/forsaved?city=';
      let sqlH = '/api/forsaved?city=';
      let template = '/api/forsaved?city=';
      const diReformulado = reformular(doo, sqlH);
      const siReformulado = reformular(see, sqlV);
      if (diReformulado !== template && siReformulado !== template) {
        axios.get(diReformulado + '&category=do').then((res) => {
          todos.push(...res.data);
          axios.get(siReformulado + '&category=see').then((res) => {
            todos.push(...res.data);
            setResults(todos);
            load(false);
            set({ current: false, data: todos });
          });
        });
      } else if (siReformulado !== template) {
        axios.get(siReformulado + '&category=see').then((res) => {
          todos.push(...res.data);
          setResults(todos);
          set({ current: false, data: todos });
          load(false);
        });
      } else if (diReformulado !== template) {
        axios.get(diReformulado + '&category=do').then((res) => {
          todos.push(...res.data);
          setResults(todos);
          set({ current: false, data: todos });
          load(false);
        });
      }
    } else {
      if (savedNumber !== 0) {
        setResults(refy.data);
      } else {
        setResults([]);
      }
    }
  }, [saved, savedNumber]);
  return [results, setSaved];
}
