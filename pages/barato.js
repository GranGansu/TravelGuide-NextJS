import NewPage from 'components/layout/NewPage';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ListItem } from 'components/atoms';

export default function Barato() {
  const { t } = useTranslation('common');
  const paises = ['Argentina', 'España', 'Marruecos', 'Chile'];
  const opciones = [
    { name: 'Cerveza', price: 1.5 },
    { name: 'Peluches', price: 2.3 },
    { name: 'Transporte', price: 4 },
    { name: 'Alquiler', price: 4 },
    { name: 'Transporte', price: 4 },
  ];
  return (
    <NewPage
      h1='Qué es barato para mí'
      bar={
        <div className='bg-gray-700 border p-2 rounded text-white border-gray-500'>
          <select className='bg-transparent'>
            {paises.map((p) => {
              return (
                <option className='bg-gray-800 text-white' key={p}>
                  {p}
                </option>
              );
            })}
          </select>
        </div>
      }>
      <ul className='flex flex-col gap-y-4 w-full max-w-xl mb-6 px-4 select-none'>
        {opciones.map((option, key) => {
          return <ListItem key={key} llave={key} option={option} />;
        })}
      </ul>
    </NewPage>
  );
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['saved', 'common'])),
      // Will be passed to the page component as props
    },
  };
}
