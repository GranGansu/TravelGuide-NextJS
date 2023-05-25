import Product from 'components/layout/Product';

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
export async function getStaticPaths() {
  const sqlite3 = require('sqlite3').verbose();
  let db = new sqlite3.Database('data.db');
  const nu = () => {
    return new Promise((resolve, reject) => {
      db.all(`SELECT id, city FROM hacer`, [], (err, rows) => {
        return resolve(
          rows.map((r) => {
            return { params: { id: r.id.toString(), city: r.city } };
          })
        );
      });
    });
  };
  const ney = await nu();
  db.close();
  return { paths: ney, fallback: false };
}
export async function getStaticProps({ params }) {
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
  return { props: { post: ney, ci } };
}
