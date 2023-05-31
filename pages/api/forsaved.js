import { ExecuteStatementCommand } from '@aws-sdk/client-dynamodb';
import { ddbDocClient } from '../../config';

export default async function handler(req, resolve) {
  const ciudad = req.query.city;
  const category = req.query.category ?? 'see';

  const cityId = (city) => {
    const regexNumbers = /\d+[-\d]*/g;
    const regexCity = /^\w*/g;
    const cit = city.match(regexCity)[0];
    const busqueda = city.match(regexNumbers)[0].split('-').join(',');
    return [cit, busqueda];
  };
  let sql = { Statement: `SELECT * FROM "ver" WHERE ` };

  if (typeof ciudad === 'object') {
    ciudad.map((c, key) => {
      const [city, ids] = cityId(c);
      sql.Statement += `${key === 0 ? '' : ' OR'} (city = '${city}' AND c='${category}' AND id IN (${ids}))`;
    });
    console.log(sql.Statement);
    try {
      const data = await ddbDocClient.send(new ExecuteStatementCommand(sql));
      const datos = data['Items'].map((i) => {
        let nuevo = {};
        Object.entries(i).map((n) => {
          nuevo = { ...nuevo, [n[0]]: Object.values(n[1])[0] };
        });
        return nuevo;
      });

      return resolve.status(200).json(datos);
    } catch (err) {
      console.error(err);
      return resolve.status(200).json({ error: err.status });
    }
  } else {
    const sqli = {
      Statement: ciudad.includes('[')
        ? `${sql.Statement} city = '${cityId(ciudad)[0]}' AND c='${category}' AND id IN (${cityId(ciudad)[1]})`
        : `${sql.Statement} city IN ('${ciudad}') `,
    };
    try {
      const data = await ddbDocClient.send(new ExecuteStatementCommand(sqli));
      const datos = data['Items'].map((i) => {
        let nuevo = {};
        Object.entries(i).map((n) => {
          nuevo = { ...nuevo, [n[0]]: Object.values(n[1])[0] };
        });
        return nuevo;
      });
      return resolve.status(200).json(datos);
    } catch (err) {
      console.error(err);
      return resolve.status(200).json({ error: err.status });
    }
  }
}
