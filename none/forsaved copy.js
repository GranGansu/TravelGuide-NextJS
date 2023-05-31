export default function handler(req, resolve) {
  const ciudad = req.query.city;
  const category = req.query.category ?? 'ver';
  const sqlite3 = require('sqlite3').verbose();
  let db = new sqlite3.Database('data.db');
  //Declarar errores
  const cityId = (city) => {
    const regexNumbers = /\d+[-\d]*/g;
    const regexCity = /^\w*/g;
    const cit = city.match(regexCity)[0];
    const busqueda = city.match(regexNumbers)[0].split('-').join(',');
    return [cit, busqueda];
  };
  let sql = `SELECT * FROM ${category} WHERE `;
  if (typeof ciudad === 'object') {
    ciudad.map((c, key) => {
      const [city, ids] = cityId(c);
      sql += `${key === 0 ? '' : 'OR'} (city = "${city}" AND id IN (${ids}))`;
    });
    try {
      db.all(sql, [], (err, rows) => {
        if (err) {
          return resolve.status(404).json(err);
        }
        return resolve.status(200).json(rows);
      });
    } catch (err) {
      return resolve.status(404).json(err);
    }
  } else {
    const sqli = ciudad.includes('[') ? `${sql} city = "${cityId(ciudad)[0]}" AND id IN (${cityId(ciudad)[1]})` : `${sql} city IN ("${ciudad}") `;
    db.all(sqli, [], (err, rows) => {
      if (err) {
        return resolve.status(404).json(err);
      }
      return resolve.status(200).json(rows);
    });
  }
  db.close();
}
