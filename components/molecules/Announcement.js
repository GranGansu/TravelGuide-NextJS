import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { motion } from 'framer-motion';
import { announcement } from '../../configs/globals';
import { useModal } from '../hooks';
import ModalCity from './ModalCity';

export default function Announcement() {
  const [modal, setVis] = useModal(false, <ModalCity></ModalCity>);
  return (
    <div>
      {modal}
      <motion.p
        className='text-lg'
        onClick={() => {
          setVis(true);
        }}>
        <ArrowDropDownIcon></ArrowDropDownIcon>
        {announcement.text}
      </motion.p>
    </div>
  );
}
