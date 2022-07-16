import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from 'react';
import { Gifts } from './gifts/gifts';

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
        <div>
          <div>{children}</div>
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

function allProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BenefitsTabs() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => setValue(newValue);

  return (
    <div className='benefitsTabs_Main'>
      <div style={{width : '100%'}} >
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label='Կոնվերս միավորներ'  {...allProps(0)} />
          <Tab label= 'Նվերներ' {...allProps(1)} />
          <Tab label= 'Զեղչեր' {...allProps(2)} />
          <Tab label= 'Հաճախ տրվող հարցեր' {...allProps(3)} />
        </Tabs>
      </div>
      <TabPanel value={value} index={0}>
        Կոնվերս միավորներ
      </TabPanel>
      <TabPanel style={{backgroundColor : '#E5E5E5'}} value={value} index={1}>
          <Gifts />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Զեղչեր
      </TabPanel>
      <TabPanel value={value} index={3}>
        Հաճախ տրվող հարցեր 
      </TabPanel>
    </div>
  );
}