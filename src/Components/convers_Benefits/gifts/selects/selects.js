
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { giftsSelectsSelector, setGiftsSelects } from '../../../../Redux/slices/giftsSelects/giftsSelects';

export default function SelectCategory() {
  const [category,setCategory] = useState(useSelector(giftsSelectsSelector)) 
  const dispatch = useDispatch()
  const allCategory = [
          {
            name: 'Էլեկտրոնիկա',
            value : 'electronics'
          } ,
          {
            name: 'Խմիչքներ',
            value : 'drinks'
          } ,
          {
            name: 'Այլ',
            value : 'another'
          } ,
        ]
        // .map( item => item.value)
  const handleChange = event =>  setCategory(event.target.value);
        useEffect(()=>{dispatch(setGiftsSelects(category))},[category])
  return (
    <div className='selectBox'>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Կատեգորիաներ</InputLabel>
        <Select  sx={{ borderRadius : 2.5}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Կատեգորիաներ"
          onChange={handleChange}
        > 
        <MenuItem value={JSON.stringify(allCategory.map(item=>item.name),2)} >Բոլորը</MenuItem>
        {allCategory?.map((person , i)=>(
          <MenuItem key={i} value= {person.name}> {person.name}</MenuItem>
        ))}
        </Select>
      </FormControl>
    </div>
  );
}
