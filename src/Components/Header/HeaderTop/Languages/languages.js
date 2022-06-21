
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { useState } from 'react';
import languageImage from '../../../HomePage/ConversPoints/PointsSlider/img/languages.png'

export default function ChangeLanguages() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box sx={{ position: 'relative' }}>
        
          <img type="button" onClick={handleClick} src={languageImage}/>
        
        {open ? (
          <Box className='exchangeBox'>
            <div> AM </div>
            <div> RU </div>
            <div> US </div>
          </Box>
        ) : null}
      </Box>
    </ClickAwayListener>
  );
}
