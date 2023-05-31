import Product from 'components/layout/Product';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ExecuteStatementCommand } from '@aws-sdk/client-dynamodb';
import { ddbDocClient } from '../../../config';
export default function Se({ post, ci }) {
  return <Product data={post} city={ci} />;
}
export async function getStaticPaths({ locales }) {
  const sqlite3 = require('sqlite3').verbose();
  let db = new sqlite3.Database('data.db');
  const todos = [];
  const nu = () => {
    return new Promise((resolve, reject) => {
      db.all(`SELECT id, city FROM ver`, [], (err, rows) => {
        rows.map((r) => {
          locales.map((l) => {
            /* todos.push({ params: { id: r.id.toString(), city: r.city, locale: l } }); */
            todos.push(`/${l}/${r.city}/see/${r.id.toString()}`);
          });
          return { params: { id: r.id.toString(), city: r.city } };
        });
        return resolve(todos);
      });
    });
  };
  const ney = await nu();
  db.close();
  return { paths: ney, fallback: false };
}

/* export async function getStaticProps({ params, locale }) {
  const ciudad = params.city.toString();
  const sqlite3 = require('sqlite3').verbose();
  let db = new sqlite3.Database('data.db');
  const nu = () => {
    return new Promise((resolve, reject) => {
      db.get(`SELECT * FROM ver WHERE id=${params.id} AND city='${ciudad}'`, [], (err, row) => {
        return resolve(row);
      });
    });
  };
  const ney = await nu();
  db.close();
  const ci = params.city;
  return { props: { post: ney, ci: ci, ...(await serverSideTranslations(locale, ['saved', 'article', 'common'])) } };
} */
export async function getStaticProps({ params, locale }) {
  const ciudad = params.city.toString();
  let sql = { Statement: `SELECT * FROM "ver" WHERE c='see' AND city='${ciudad}' AND id=${params.id}` };
  const data = await ddbDocClient.send(new ExecuteStatementCommand(sql));
  const datos = data['Items'].map((i) => {
    let nuevo = {};
    Object.entries(i).map((n) => {
      nuevo = { ...nuevo, [n[0]]: n[0] === 'id' || n[0] === 'cat' ? Number(Object.values(n[1])[0]) : Object.values(n[1])[0] };
    });
    return nuevo;
  })[0];
  const ci = params.city;
  return { props: { post: datos, ci: ci, ...(await serverSideTranslations(locale, ['saved', 'article', 'common'])) } };
}
