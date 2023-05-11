import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ModalSelected({ city }) {
  const [visible, setVis] = useState(true);
  return (
    visible && (
      <motion.p
        animate={{ scale: 10 }}
        onAnimationComplete={() => {
          setVis(false);
        }}>
        {city}
      </motion.p>
    )
  );
}
