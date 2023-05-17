import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Menu } from 'components/molecules';
import { Img } from '../atoms';
import { useRouter } from 'next/router';
import { useModal } from '../hooks';

export default function Header({ city }) {
  const [modal, setModal] = useModal(
    false,
    <div className='fixed top-0 bg-black/90 w-full h-full flex items-center justify-center z-30'>
      <div>
        <Img mot={true} src='hell.jpg' className='absolute bottom-0 w-full left-0'></Img>
      </div>
      <div className='absolute right-0 top-0 p-4 text-4xl'>
        <HighlightOffIcon></HighlightOffIcon>
      </div>
      <ul className='flex flex-col space-y-6 items-center text-center justify-center'>
        <Menu city={city}></Menu>
      </ul>
    </div>
  );
  return (
    <div className={`m-auto  text-headerUl  z-50 `}>
      <div className=' relative z-40'>
        <ul className='w-full grid grid-cols-3 relative sm:max-w-4xl sm:mx-auto border-t sm:border-t-0 bg-gray-600 border-gray-400 sm:bg-orange-400'>
          <Menu city={city}></Menu>
        </ul>
        {/*         <div className='hidden w-full grid grid-cols-3 items-center relative z-0'>
          <div
            className={` hover:cursor-pointer p-4 flex justify-start  ${visible && 'invisible'}`}
            onClick={() => {
              setVisible(true);
              document.body.style.overflow = 'hidden';
            }}>
            <MenuIcon></MenuIcon>
          </div>
          <Link href='/' className={`z-50 hover:cursor-pointer absolute  rounded-full  pt-0 place-self-center ${visible && 'pt-4'}`}>
            <Img src='bmo.png' w='50' className='z-50 relative'></Img>
            {visible && <p className='relative z-40 px-2 bg-white/50 rounded-full'>Home</p>}
          </Link>
        </div> */}
      </div>

      {/*Mobile only*/}
      {modal}
    </div>
  );
}
