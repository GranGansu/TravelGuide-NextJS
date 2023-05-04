import { home } from '../../configs/globals';
import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useState } from 'react';
import { Menu } from '../molecules';
import { Absolute, Img } from '../atoms';
import { useRouter } from 'next/router';
import { useModal } from '../hooks';

export default function Header() {
  const router = useRouter();
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
        <Menu></Menu>
      </ul>
    </div>
  );
  const [visible, setVisible] = useState(false);
  return (
    <div className={`m-auto  text-headerUl  z-50 `}>
      <div className=' relative z-40'>
        <ul className='w-full  grid grid-cols-3 relative sm:max-w-4xl sm:mx-auto'>
          <Menu></Menu>
        </ul>
        <div className='hidden w-full grid grid-cols-3 items-center relative z-0'>
          <div
            className={` hover:cursor-pointer p-4 flex justify-start  ${visible && 'invisible'}`}
            onClick={() => {
              setVisible(true);
              document.body.style.overflow = 'hidden';
            }}>
            <MenuIcon></MenuIcon>
          </div>
          <Link href='/' className={`z-50 hover:cursor-pointer absolute  rounded-full  pt-0 place-self-center ${visible && 'pt-4'}`}>
            {/*       <Absolute className='bg-black left-0 rounded-full z-0 top-3'></Absolute> */}
            <Img src='bmo.png' w='50' className='z-50 relative'></Img>
            {visible && <p className='relative z-40 px-2 bg-white/50 rounded-full'>Home</p>}
          </Link>
        </div>
      </div>

      {/*Mobile only*/}
      {modal}
    </div>
  );
}
