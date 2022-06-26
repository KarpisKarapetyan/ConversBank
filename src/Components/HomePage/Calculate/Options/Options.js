import './Options.css'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AmountSum from './AmountSum/AmountSum';
import MonthsCalculation from './MonthsCalculation/MonthsCalculation';
import MonthlyPaid from './MonthlyPaid/MonthlyPaid';
import DepositSum from './Deposit/DepositSum';
import DepositMonths from './Deposit/DepositMonths';
import DepositPaid from './Deposit/DepositPaid';
import { useState } from 'react';

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
        <div style = {{ padding: '24px' }}>
          <div className='calcDiv'>{children}</div>
        </div>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function forTabs(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Options() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => setValue(newValue);
 
  return (
    <div style={{ width: '100%' }}>
      <div >
      <div className='titleCalc'> Հաշվիչ </div>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab className='option' label="Վարկ" {...forTabs(0)} />
          <Tab className='option' label="Ավանդ" {...forTabs(1)} />
          <Tab className='option' label="Պարտատոմսեր" {...forTabs(2)} />
        </Tabs>
      </div>
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
    </div>
  );
}

