import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Product from '../../components/layout/Product';

export default function Doo() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState(null);
  useEffect(() => {
    axios.get(`/api/all?doo=${id}`).then((res) => {
      setData(res.data[0]);
    });
  }, [id]);
  return <Product data={data} />;
}
