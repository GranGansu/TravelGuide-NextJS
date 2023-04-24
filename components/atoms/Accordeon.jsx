import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { styled } from '@mui/material/styles';
import React from 'react';
import { motion } from 'framer-motion';
export default function Accordeon(props) {
  const Acc = styled(Accordion)(() => ({
    margin: '0px !important',
    border: 0,
    padding: '20px',
    borderTop: '1px solid red',
    boxShadow: 'none',
    borderBottom: 0,
    '&:hover': { cursor: 'pointer', background: '#ff000008' },
    background: props.expanded ? '#ff000014' : '',
    '&:nth-of-type(1)': {
      borderTop: 0,
      borderBottom: 0,
    },
  }));
  const Accc = motion(AccordionDetails);
  return (
    <Acc {...props}>
      <AccordionSummary>
        <b className='text-2xl'>{props.title}</b>
      </AccordionSummary>
      <Accc className='text-xl'>{props.children}</Accc>
    </Acc>
  );
}
