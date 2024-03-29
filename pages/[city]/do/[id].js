import Product from 'components/layout/Product';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { cityPaths, cityProps } from 'utils/static';

export default function Doo({ post, ci }) {
  /*   const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState(null); */
  /*   useEffect(() => {
    axios.get(`/api/all?doo=${id}`).then((res) => {
      setData(res.data[0]);
    });
  }, [id]); */
  return <Product data={post} city={ci} />;
}
export async function getStaticPaths({ locales }) {
  /*   const sqlite3 = require('sqlite3').verbose();
  let db = new sqlite3.Database('data.db');
  const todos = [];
  const nu = () => {
    return new Promise((resolve, reject) => {
      db.all(`SELECT id, city FROM hacer`, [], (err, rows) => {
        rows.map((r) => {
          locales.map((l) => {
            todos.push(`/${l}/${r.city}/do/${r.id.toString()}`);
          });
          return { params: { id: r.id.toString(), city: r.city } };
        });
        return resolve(todos);
      });
    });
  };
  const ney = await nu();
  db.close(); */

  /*   let sql = { Statement: `SELECT id, city FROM "ver" WHERE c='do'` };
  const data = await ddbDocClient.send(new ExecuteStatementCommand(sql));
  const datos = data['Items'].map((r) => {
    return locales.map((l) => {
      return `/${l}/${r.city.S}/do/${r.id.N.toString()}`;
    });
  }); */
  return { paths: await cityPaths('do', locales), fallback: false };
}

/* export async function getStaticPaths({ locales }) {
  const todos = [];
  let sql = { Statement: `SELECT id, city FROM "ver" WHERE c='do'` };
  const data = await ddbDocClient.send(new ExecuteStatementCommand(sql));
  const datos = data['Items'].map((r) => {
    locales.map((l) => {
      todos.push(`/${l}/${r.city}/do/${r.id.toString()}`);
    });
    return todos;
  });
  return { paths: datos, fallback: false };
} */
/* export async function getStaticProps({ params, locale }) {
  const ciudad = params.city.toString();
  const sqlite3 = require('sqlite3').verbose();
  let db = new sqlite3.Database('data.db');
  const nu = () => {
    return new Promise((resolve, reject) => {
      db.get(`SELECT * FROM hacer WHERE id=${params.id} AND city='${ciudad}'`, [], (err, row) => {
        return resolve(row);
      });
    });
  };
  const ney = await nu();
  db.close();
  const ci = params.city;
  return { props: { post: ney, ci, ...(await serverSideTranslations(locale, ['saved', 'article', 'common'])) } };
}
 */
export async function getStaticProps({ params, locale }) {
  const ciudad = params.city.toString();
  /*   let sql = { Statement: `SELECT * FROM "ver" WHERE c='do' AND city='${ciudad}' AND id=${params.id}` };
  const data = await ddbDocClient.send(new ExecuteStatementCommand(sql));
  const datos = data['Items'].map((i) => {
    let nuevo = {};
    Object.entries(i).map((n) => {
      nuevo = { ...nuevo, [n[0]]: n[0] === 'id' || n[0] === 'cat' ? Number(Object.values(n[1])[0]) : Object.values(n[1])[0] };
    });
    return nuevo;
  })[0]; */

  return { props: { post: await cityProps(ciudad, params.id, 'do'), ci: ciudad, ...(await serverSideTranslations(locale, ['saved', 'article', 'common'])) } };
}
