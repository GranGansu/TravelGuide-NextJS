import { motion } from 'framer-motion';
import { Img } from '../../components/atoms';
import Save from '../molecules/C/Save';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import VerifiedIcon from '@mui/icons-material/Verified';
import ImageGallery from 'react-image-gallery';
import { useModal } from 'components/hooks';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { useContext } from 'react';
import { ReloadContext } from '../../pages/_app';

export default function Product({ data, city }) {
  const [reload, setReload] = useContext(ReloadContext);
  const { t } = useTranslation('article');
  const opiniones = { precio: 5, cultura: 84, compras: 91, imprescindible: 60 };
  const [visible, setVisible] = useModal(false, <ImageGallery items={[{ original: `/img/${data.city}/${data.img}` }]}></ImageGallery>);
  const frame = ({ icon, title, razon, description, warning = false }) => {
    return (
      <div className={`py-4 px-2 bg-gray-0 text-black flex flex-col ${warning && 'shadow-md border rounded-xl px-6'}`}>
        <h1 className=' text-xl font-bold'>
          {icon} {t(title)}
        </h1>
        <div className='mt-2'>
          <ul className='flex gap-x-2'>
            {razon.map((r) => {
              return (
                <li className='p-1 border border-inherit text-gray-500 text-lg border-[aquamarine] bg-white rounded-full px-3' key={r}>
                  {r}
                </li>
              );
            })}
          </ul>
        </div>
        <h4 className='my-4 mt-8  text-xl font-bold'>Descripción</h4>
        <p className='text-lg max-w-2xl'>{description}</p>
        <h4 className='my-4 mt-8  text-xl font-bold'>Tiempo recomendado</h4>
        <p className='text-lg max-w-2xl'>{description}</p>
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
            <motion.div animate={{ scale: 1 }} initial={{ scale: 0.8 }} className='w-full h-72 sm:h-96 relative flex items-center'>
              <div className='absolute left-6 top-16 shadow-xl z-20'>
                <Save setReload={setReload} city={city} id={data.id} cat={data.c} contrast={true} />
              </div>
              <div
                onClick={() => {
                  setVisible(true);
                }}
                className='absolute z-10 left-0 top-0 w-full h-full bg-gradient-to-b from-gray-600/70 via-transparent to-transparent'></div>
              <Img className='w-full h-full object-cover object-top sm:object-center absolute sm:rounded-b-xl' w='1200' h='800' src={data.city + '/' + data.img}></Img>
            </motion.div>

            <div className='flex flex-col gap-y-4 text-justify mx-0 -mt-6 z-10'>
              <div className=' w-fit  text-black flex items-center justify-center text-md gap-x-2 ml-6'>
                <VerifiedIcon className='text-gray-400 bg-white p-2 rounded-full ' style={{ fontSize: '45px' }} />{' '}
                <span className='bg-white px-4 py-1 rounded-full hidden'>{data.razon[0].toUpperCase() + data.razon.substring(1)}</span>
                <span className='bg-white px-4 py-1 rounded-full'>Recomendado</span>
              </div>
              <div className='mx-4 grid sm:grid-cols-2'>
                {frame({
                  title: `${t('whyvisit')} ${data.article ?? ''} ${data.name}`,
                  razon: ['Buen ambiente', 'Mucho sol'],
                  description:
                    'Es una de las plazas más apreciadas del barrio de Gracia, para salir a tomar una copa y tapear por la noche. Siempre hay mucha animación en la plaza, a veces hay un grupo de jóvenes que tocan música, o bien malabaristas, gente que viene a hacer skate board o a patinar…',
                })}
                <div className='sm:px-4'>
                  <div className='p-2'>
                    <h5 className=' my-4 mt-2 text-xl font-bold'>Ubicación</h5>
                    <iframe
                      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11972.798569582073!2d2.13520495!3d41.39147055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f1602b4819%3A0x1eecc2af1c60d64b!2sPla%C3%A7a%20de%20Catalunya!5e0!3m2!1ses!2ses!4v1698752288691!5m2!1ses!2ses'
                      width='400'
                      className='w-full'
                      height='300'
                      allowfullscreen=''
                      loading='lazy'
                      referrerpolicy='no-referrer-when-downgrade'></iframe>
                  </div>

                  <div className=' p-2 mt-4'>
                    <p className='text-xl mb-4 font-bold'>
                      {t('whatsbest')} {data.name}?
                    </p>
                    <div className='grid gap-4'>
                      {Object.keys(opiniones)
                        .sort((a, b) => {
                          return opiniones[b] - opiniones[a];
                        })
                        .map((opinion, key) => {
                          const number = opiniones[opinion];
                          return (
                            <div
                              className='overflow-hidden relative p-4 hover:cursor-pointer select-none border border-gray-200 backdrop-blur-sm rounded-md flex items-center justify-between bg-gray-50 hover:border-black/20 hover:bg-gray-100'
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
