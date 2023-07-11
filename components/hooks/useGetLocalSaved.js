import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useGetLocalSaved(load, refy, set, savedNumber) {
  const [saved, setSaved] = useState(0);
  const [results, setResults] = useState(false);
  const reformular = (cityObject, sql) => {
    //Qué hace
    Object.entries(cityObject).map((e, key) => {
      if (key === 0) {
        sql += e[0] + '[' + e[1].join('-') + ']';
      } else {
        sql += '&city=' + e[0] + '[' + e[1].join('-') + ']';
      }
    });
    return sql;
  };
  const getThen = (array, setResults, load, set, res) => {
    array.push(...res.data);
    setResults(array);
    load(false);
    set({ current: false, data: array });
  };
  useEffect(() => {
    if ((savedNumber !== 0 && refy.current) || (savedNumber !== refy.data.length && savedNumber !== 0)) {
      load(true);
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
            getThen(todos, setResults, load, set, res);
          });
        });
      } else {
        const urlReconstruida = siReformulado !== template ? siReformulado + '&category=see' : diReformulado + '&category=do';
        axios.get(urlReconstruida).then((res) => {
          getThen(todos, setResults, load, set, res);
        });
      }
    } else {
      setResults(savedNumber !== 0 ? refy.data : []);
    }
  }, [savedNumber]);
  return [results, setSaved];
}
