
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LANGUAGES, useTranslate } from '../../../../contexts/LanguageProvider';
import { mainTabsSelector } from '../../../../Redux/slices/mainTabs/mainTabs';
import globe from '../../../HomePage/ConversPoints/PointsSlider/img/globe.png'
import businessGlobe from '../../../HomePage/ConversPoints/PointsSlider/img/businessGlobe.png'

export default function ChangeLanguages() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()
  const handleClick = () =>  setOpen((prev) => !prev);
  const handleClickAway = () => setOpen(false);
  const [langOption, setLangOption] = useState(localStorage.getItem('languagesOption') || LANGUAGES[0])
  const {t, changeLanguage} = useTranslate();
  const handleChangeLang = event => {
      setLangOption(event.target.value);
      localStorage.setItem('languagesOption' , event.target.value.toString())
      changeLanguage(event.target.value);
  }
  const changeMainTabValue = useSelector(mainTabsSelector)
  
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box sx={{ position: 'relative' }}>
          <label onClick={handleClick} className='globeDivLabel' style={{backgroundColor : !changeMainTabValue ? '#fff' : '#2D3940'}}>
            <img src={!changeMainTabValue ? globe : businessGlobe} style={{position : 'absolute'}} />
            <input value={langOption} type="button"  />
          </label>
          {open ? (
            <Box className='exchangeBox' value={langOption} onChange={handleChangeLang}>
              <div>
                <label onClick={handleChangeLang}> <input  type="button"  value="AM" /> </label>
                <label onClick={handleChangeLang}> <input  type="button"  value="RU" /> </label>
                <label onClick={handleChangeLang}> <input  type="button"  value="EN" /> </label>
              </div>
            </Box>
          ) : null}
      </Box>
    </ClickAwayListener>
  );
}
