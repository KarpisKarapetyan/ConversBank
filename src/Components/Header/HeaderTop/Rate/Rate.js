import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import './Rate.css'
import BasicTabs from './Tabs/Tabs';
import dayjs from "dayjs"
import { useState } from 'react';

export default function Rate() {

  const [open, setOpen] = useState(false);
  const date = Date.now()
  const formattedDate = dayjs (date).format('DD/MM/YYYY ')

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

 return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box sx={{ position: 'relative' }}>
        <button className='rateBtn'onClick={handleClick}> $ Փոխարժեք </button>
        {open ? (
          <Box className='exchangeBox'>
            <span   > Տարադրամի և ոսկու փոխարժեք </span>
            <div style={{margin : '20px 0'}}> <BasicTabs/> </div>
             <span className='exchangeUpdate'> Թարմացվել է { formattedDate } </span> 
          </Box>
        ) : null}
      </Box>
    </ClickAwayListener>
  );
}
