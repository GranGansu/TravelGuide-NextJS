import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Product from '../../components/layout/Product';
import { hacer } from '../api/all';

export default function Doo({ post }) {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState(null);
  /*   useEffect(() => {
    axios.get(`/api/all?doo=${id}`).then((res) => {
      setData(res.data[0]);
    });
  }, [id]); */
  return <Product data={post} />;
}
export async function getStaticPaths() {
  const paths = hacer.map((h) => {
    return { params: { id: h.id.toString() } };
  });
  return { paths, fallback: false };
}
export async function getStaticProps({ params }) {
  const search = hacer.filter((h) => {
    return h.id.toString() === params.id.toString();
  });
  const post = { ...search }[0];
  return { props: { post } };
}
