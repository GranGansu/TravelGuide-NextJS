import Product from 'components/layout/Product';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { cityPaths, cityProps } from 'utils/static';

export default function Se({ post, ci }) {
  return <Product data={post} city={ci} />;
}
export async function getStaticPaths({ locales }) {
  return { paths: await cityPaths('see', locales), fallback: false };
}
export async function getStaticProps({ params, locale }) {
  const ciudad = params.city.toString();
  return { props: { post: await cityProps(ciudad, params.id, 'see'), ci: ciudad, ...(await serverSideTranslations(locale, ['saved', 'article', 'common'])) } };
}
