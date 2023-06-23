import { ListItem } from 'components/atoms';
import NewPage from 'components/layout/NewPage';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Ya() {
  const { t } = useTranslation('common');
  const paises = ['Argentina', 'España', 'Marruecos', 'Chile'];
  const opciones = [
    { name: 'Comidita en el born', time: 1.5 },
    { name: 'Peluches', time: 2.3 },
    { name: 'Transporte', time: 4 },
    { name: 'Alquiler', time: 4 },
    { name: 'Transporte', time: 4 },
  ];
  return (
    <NewPage h1='Planes express'>
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
