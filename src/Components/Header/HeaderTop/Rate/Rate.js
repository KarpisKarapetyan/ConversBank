import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import './Rate.css'
import ChangeGoldTab from './Tabs/Tabs';
import dayjs from "dayjs"
import { useState } from 'react';
import { useTranslate } from '../../../../contexts/LanguageProvider';
import { useSelector } from 'react-redux';
import { mainTabsSelector } from '../../../../Redux/slices/mainTabs/mainTabs';

export default function Rate() {
  const changeMainTabValue = useSelector(mainTabsSelector)
  const [open, setOpen] = useState(false);
  const date = Date.now()
  const formattedDate = dayjs (date).format('DD/MM/YYYY ')
  const {t} = useTranslate();
  const handleClick = () => setOpen((prev) => !prev);
  const handleClickAway = () => setOpen(false);
  
 return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box sx={{ position: 'relative' }}>
        <button className='rateBtn'
                 style={{background: !changeMainTabValue ? '#FFF' : '#2D3940',
                         color: !changeMainTabValue ? '#007DC3' : '#FFF'}}
                onClick={handleClick}> $ {  t("$ exchange_Rate")} </button>
        {open ? (
          <Box className='exchangeBox'>
            <span >{ t("currency_and_gold_exchnage_rate")}</span>
            <div style={{margin : '20px 0'}}> <ChangeGoldTab/> </div>
             <span className='exchangeUpdate'> { t('updated') } { formattedDate }   </span> 
          </Box>
        ) : null}
      </Box>
    </ClickAwayListener>
  );
}
