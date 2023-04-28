import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Product from '../../components/layout/Product';

export default function Se() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get(`/api/all?see=${id}`).then((res) => {
      setData(res.data[0]);
    });
  }, [id]);
  return <Product data={data} />;
}
