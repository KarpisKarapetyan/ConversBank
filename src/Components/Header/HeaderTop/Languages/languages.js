
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LANGUAGES, useTranslate } from '../../../../contexts/LanguageProvider';
import languageImage from '../../../HomePage/ConversPoints/PointsSlider/img/languages.png'
// import { AM, EN, RU } from '../HeaderTop';


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
  
  const toArm = ( ) =>  navigate ('./am')
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box sx={{ position: 'relative' }}>
          <img type="button" onClick={handleClick} src={languageImage}/>
          {open ? (
            <Box className='exchangeBox' value={langOption} onChange={handleChangeLang}>
              {/* <div value="AM"> {t("armenian")} </div> */}
              {/* <div value="RU"> {t("russian")} </div> */}
              {/* <div value="EN"> {t("english")} </div> */}
              {/* <div onClick={() => window.location.pathname="homePage/am" }>   {t("armenian")}  </div>  */}
              {/* <RU wordRu = {t("russian")} />
              <EN wordEn = {t("english")} /> */}
            </Box>
          ) : null}
      </Box>
    </ClickAwayListener>
  );
}
