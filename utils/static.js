import { ExecuteStatementCommand } from '@aws-sdk/client-dynamodb';
import { ddbDocClient } from '../config';

export const cityPaths = async (category, locales) => {
  let sql = { Statement: `SELECT id, city FROM "ver" WHERE c='${category}'` };
  const data = await ddbDocClient.send(new ExecuteStatementCommand(sql));
  const datos = data['Items'].map((r) => {
    return locales.map((l) => {
      return `/${l}/${r.city.S}/${category}/${r.id.N.toString()}`;
    });
  });
  return datos.flat();
};

export const cityProps = async (ciudad, id, category) => {
  let sql = { Statement: `SELECT * FROM "ver" WHERE c='${category}' AND city='${ciudad}' AND id=${id}` };
  const data = await ddbDocClient.send(new ExecuteStatementCommand(sql));
  const datos = data['Items'].map((i) => {
    let nuevo = {};
    Object.entries(i).map((n) => {
      nuevo = { ...nuevo, [n[0]]: n[0] === 'id' || n[0] === 'cat' ? Number(Object.values(n[1])[0]) : Object.values(n[1])[0] };
    });
    return nuevo;
  })[0];
  return datos;
};
