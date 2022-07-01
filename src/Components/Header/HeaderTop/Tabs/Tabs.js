import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {  useState } from 'react';
import { useTranslate } from '../../../../contexts/LanguageProvider';
import { useDispatch, useSelector } from 'react-redux';
import { mainTabsSelector, setMainTabs } from '../../../../Redux/slices/mainTabs/mainTabs';

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
        <div style={{ padding : '24px' }}>
          <div>{ children }</div>
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

function tabsArr(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function MainTabs() {

  const [value, setValue] = useState(0);
  const {t} = useTranslate();
  const changeMainTabValue = useSelector(mainTabsSelector)
  const dispatch = useDispatch()
  const handleChange = (event, newValue) => setValue(newValue);
 
  return (
      <div className={!changeMainTabValue ? '' : "businessMainTab" }>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label= { t('individuals') } {...tabsArr(0)} onClick = {()=> dispatch(setMainTabs(false))} />
          <Tab label= { t('business') } {...tabsArr(1)} onClick = {()=> dispatch(setMainTabs(true))}/>
        </Tabs>
      </div>
  );
}
