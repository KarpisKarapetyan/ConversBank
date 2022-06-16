import './Options.css'
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AmountSum from './AmountSum/AmountSum';
import MonthsCalculation from './MonthsCalculation/MonthsCalculation';
import MonthlyPaid from './MonthlyPaid/MonthlyPaid';
import DepositSum from './Deposit/DepositSum';
import DepositMonths from './Deposit/DepositMonths';
import DepositPaid from './Deposit/DepositPaid';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Options() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box >
      <div className='titleCalc'> Հաշվիչ </div>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab className='option' label="Վարկ" {...a11yProps(0)} />
          <Tab className='option' label="Ավանդ" {...a11yProps(1)} />
          <Tab className='option' label="Պարտատոմսեր" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
          <div className='calc_fields'>
          <AmountSum/>
          <MonthsCalculation />
          </div>
          <div className='calc_value'>
            <MonthlyPaid/>
          </div>    
      </TabPanel>
      <TabPanel value={value} index={1}>
          <div className='calc_fields'>
          <DepositSum/>
          <DepositMonths/>
          </div>
          <div className='calc_value'>
              <DepositPaid/>
          </div>
          </TabPanel>
      <TabPanel value={value} index={2}>
        Պարտատոմսեր
      </TabPanel>
    </Box>
  );
}

