
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTestArr, testArrSelector } from '../../../../Redux/slices/testInfo/testInfo';

const minDistance = 10000;

export default function GiftsSlider() {
  const reduxTestState = useSelector(testArrSelector);
  const [value, setValue] = useState(reduxTestState);
  const dispatch = useDispatch()
  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue))return;
    
    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
      dispatch(setTestArr(value))
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
      dispatch(setTestArr(value))
    }
  };
  return (
    <Box sx={{ width: 300 }}>
      <Slider
        min={100}
        max = {200000}
        size='small'
        getAriaLabel={() => 'Minimum distance'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay={'auto'}
        disableSwap
      />
     
    </Box>
  );
}
