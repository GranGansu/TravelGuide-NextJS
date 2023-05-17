/* import { useRouter } from 'next/router';
import { useState } from 'react'; */
import Product from 'components/layout/Product';

import { hacerr } from 'pages/api/all';

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
  const nuArray = [];
  Object.keys(hacerr).map((city) => {
    hacerr[city].map((object) => {
      nuArray.push({ params: { id: object.id.toString(), city: city } });
    });
  });
  return { paths: [...nuArray], fallback: false };
}
export async function getStaticProps({ params }) {
  const search = hacerr[params.city].filter((h) => {
    return h.id.toString() === params.id.toString();
  });
  const post = { ...search }[0];
  const ci = params.city;
  return { props: { post, ci } };
}
