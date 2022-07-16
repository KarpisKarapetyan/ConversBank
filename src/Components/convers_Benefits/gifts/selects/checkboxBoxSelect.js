
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { useEffect, useState } from 'react';
import lansLogo from '../../../HomePage/ConversPoints/PointsSlider/img/lans.png'
import timeLogo from '../../../HomePage/ConversPoints/PointsSlider/img/timeLogo.png'
import pandoraLogo from '../../../HomePage/ConversPoints/PointsSlider/img/pandoraLogo.png'
import penBoxLogo from '../../../HomePage/ConversPoints/PointsSlider/img/penBoxLogo.png'
import noyanTunLogo from '../../../HomePage/ConversPoints/PointsSlider/img/noyanTunLogo.png'
import { giftsCheckSelectsSelector, giftsMainArrSelector, setGiftscheckBoxSelects } from '../../../../Redux/slices/giftsSelects/giftsSelects';
import { useDispatch, useSelector } from 'react-redux';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const markets = [
  {
    name : 'Lans',
    logo : <img src={lansLogo}/> 
  },
  {
    name : 'Time',
    logo : <img src={timeLogo}/>
  },
  {
    name : 'Pandora',
    logo : <img src={pandoraLogo}/>
  },
  {
    name : 'Փեն Բոքս',
    logo : <img src={penBoxLogo}/>
  },
  {
    name : 'Նոյան Տուն',
    logo : <img src={noyanTunLogo}/>
  },
  {
    name : 'Lun',
    logo : <img src={lansLogo}/> 
  },
  {
    name : 'Tim',
    logo : <img src={timeLogo}/>
  },
  {
    name : 'Pandor',
    logo : <img src={pandoraLogo}/>
  },
  {
    name : 'Փեն Բս',
    logo : <img src={penBoxLogo}/>
  }
];

export default function CheckBoxSelect() {
  const [ checkedMarket , setCheckedMarket]= useState(useSelector(giftsCheckSelectsSelector))
  const dispatch = useDispatch()
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setCheckedMarket(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  useEffect(()=>{dispatch(setGiftscheckBoxSelects(checkedMarket))},[checkedMarket])
  return (
    <div className='selectBox'>
      <FormControl sx={{ m: 1, width: 292 }}>
        <InputLabel id="demo-multiple-checkbox-label">Խանութներ</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={checkedMarket}
          onChange={handleChange}
          input={<OutlinedInput label="Խանութներ" />}
          renderValue={(selected) =>  selected.join(', ')}
          MenuProps={MenuProps}
        >  
          <div className='giftSelect_DeleteBox'>
              <span >Ջնջել բոլորը</span>
              <button className='giftSelect_DeleteBTN'  onClick={()=> checkedMarket.length > 0 ? setCheckedMarket([]) : null}> X </button>
          </div>
          {markets.map((market) => ( 
            <MenuItem key={market.name} value={market.name}>
              {market.logo}
              <ListItemText sx={{marginLeft : '12.5px'}} primary={market.name} />
              <Checkbox checked={checkedMarket.indexOf(market.name) > -1} /> 
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
