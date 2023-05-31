import { motion } from 'framer-motion';
import { Img } from '../../components/atoms';
import Save from '../molecules/C/Save';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import VerifiedIcon from '@mui/icons-material/Verified';
import ImageGallery from 'react-image-gallery';
import { useModal } from 'components/hooks';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';

export default function Product({ data, city }) {
  const { t } = useTranslation('article');
  const opiniones = { precio: 5, cultura: 84, compras: 91, imprescindible: 60 };
  const [visible, setVisible] = useModal(false, <ImageGallery items={[{ original: `/img/${data.img}` }]}></ImageGallery>);
  const frame = ({ icon, title, razon, description, warning = false }) => {
    return (
      <div className={`py-4 px-2 bg-gray-0 text-black flex flex-col ${warning && 'shadow-md border rounded-xl px-6'}`}>
        <h3 className=' text-2xl'>
          {icon} {t(title)}
        </h3>
        <div className='my-2'>
          <ul className='flex gap-x-2'>
            {razon.map((r) => {
              return (
                <li className='p-2 border border-inherit text-gray-500 text-sm bg-white rounded px-2' key={r}>
                  {r}
                </li>
              );
            })}
          </ul>
        </div>
        {description}
      </div>
    );
  };
  const warning = ({ icon, title, razon, description }) => {
    return (
      <div className={`py-2 px-6 bg-gray-0 flex flex-col bg-red-400 text-white shadow-inner`}>
        <h3 className=' text-xl'>{t(title)}</h3>
        <div className='my-2'>
          <ul className='flex gap-x-2'>
            {razon.map((r) => {
              return (
                <li className='p-1 border border-inherit text-gray-500 text-sm bg-white rounded px-2' key={r}>
                  {r}
                </li>
              );
            })}
          </ul>
        </div>
        {description}
      </div>
    );
  };
  return (
    <div className='sm:max-w-6xl w-full h-full flex-grow sm:mx-auto  flex flex-col'>
      <Head>
        <title>{data.c.toUpperCase() + ' ' + data.name}</title>
        <meta name='description' content={data.description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {data ? (
        <>
          {visible}
          <h1 className='p-4 px-6 absolute  z-20  text-2xl'>{data.name}</h1>
          <div className='pb-6 grid grid-cols-1  text-black '>
            <div className='w-full h-72 sm:h-96 shadow-inner border-b relative flex items-center'>
              <div className='absolute right-4 bottom-10 shadow-xl z-20'>
                <Save city={city} id={data.id} cat={data.c} contrast={true} />
              </div>
              <div
                onClick={() => {
                  setVisible(true);
                }}
                className='absolute z-10 left-0 top-0 w-full h-full bg-gradient-to-b from-gray-600/70 via-transparent to-transparent'></div>
              <Img className='w-full h-full object-cover object-top sm:object-center absolute' w='1200' h='800' src={data.city + '/' + data.img}></Img>
            </div>

            <div className='flex flex-col gap-y-4 text-justify mx-0 -mt-6 z-10'>
              <p className='p-4 px-6 mx-4 border bg-gray-100 text-black flex items-center justify-center rounded text-md leading-7 gap-x-1'>
                <VerifiedIcon className='text-gray-400' /> {data.razon[0].toUpperCase() + data.razon.substring(1)}
              </p>
              {warning({ icon: <WarningAmberIcon className='text-gray-300' />, warning: true, title: 'mustknow', razon: ['Peligroso'] })}
              <div className='mx-4'>
                {frame({
                  title: `${t('whyvisit')} ${data.name}`,
                  razon: ['Buen ambiente', 'Mucho sol'],
                  description:
                    'Es una de las plazas más apreciadas del barrio de Gracia, para salir a tomar una copa y tapear por la noche. Siempre hay mucha animación en la plaza, a veces hay un grupo de jóvenes que tocan música, o bien malabaristas, gente que viene a hacer skate board o a patinar…',
                })}
                <div className=' p-6 rounded-lg mt-6 border bg-gray-50'>
                  <p className='text-lg mb-4'>
                    {t('whatsbest')} {data.name}?
                  </p>
                  <div className='grid sm:grid-cols-2 gap-4'>
                    {Object.keys(opiniones)
                      .sort((a, b) => {
                        return opiniones[b] - opiniones[a];
                      })
                      .map((opinion, key) => {
                        const number = opiniones[opinion];
                        return (
                          <div
                            className='overflow-hidden relative p-4 hover:cursor-pointer select-none border border-gray-200 backdrop-blur-sm rounded-md flex items-center justify-between hover:border-black/20 hover:bg-gray-50'
                            key={key}>
                            <div className='relative z-10 items-center flex justify-between w-full'>
                              <p className='capitalize bg-white p-2 rounded shadow'>{opinion}</p>
                              <p className='text-xl'>{number}%</p>
                            </div>
                            <div className='absolute shadow-inner h-full left-0 top-0 z-0 rounded-r-sm relleno' style={{ width: number + '%', opacity: number + '%' }}></div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className='bg-black/90 text-white text-3xl p-6  flex-grow fill-white flex flex-col items-center justify-center'>
          <motion.svg
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, repeatType: 'reverse' }}
            xmlns='http://www.w3.org/2000/svg'
            width='60'
            height='60'
            viewBox='0 0 24 24'>
            <path d='M6 24l15-17h-7.035l2.606-7h-8.196l-5.375 14h5.888l-2.888 10zm0-12l3.713-10.039h3.845l-2.607 7.039h5.549l-6.031 7.062 1.366-4.062h-5.835z' />
          </motion.svg>
          <p>Cargando</p>
        </div>
      )}
    </div>
  );
}
