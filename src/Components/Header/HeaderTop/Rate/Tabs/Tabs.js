import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(name, take, sale) {
  return { name, take, sale};
}

const rateData = [
    createData('USD', 453, 465),
    createData('EUR', 475, 489),
    createData('GBP', 560, 579),
    createData('RUB', 6.79, 7.64),
    createData('XAU', '25 965', '27 320'),
    createData('AUD', 315, 330),
    createData('CAD', 352, 365),

  ];
  
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
        <Box>
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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Տարադրամ" {...a11yProps(0)} />
          <Tab label="Ոսկի" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>

      <TableContainer  >
      <Table sx={{ minWidth: 300 }} >
        <TableHead>
          <TableRow>
            <TableCell>Արժույթ </TableCell>
            <TableCell align="right">Առք</TableCell>
            <TableCell align="right">Վաճառք</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rateData.map((row , i) => (
            <TableRow
              key={row.name}
              className= {   i % 2 === 0 && 'greyBack'     }
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.take}</TableCell>
              <TableCell align="right">{row.sale}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      
    </Box>
  );
}
