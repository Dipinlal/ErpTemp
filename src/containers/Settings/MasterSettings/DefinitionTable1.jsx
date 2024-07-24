import React, { useState } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tabs, Tab } from '@mui/material';
import { TablecellStyle, dependentData, usedData,TablebodyCell } from '../../../config/masterSettings';
import { thirdColor } from '../../../config';
import { useTheme } from '../../../config/themeContext';

function Definitiontable1() {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  // Dummy data arrays for each tab
 
  const {currentTheme} = useTheme()

  // Determine which data to display based on selected tab
  const data = selectedTab === 0 ? dependentData : usedData;

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Tabs value={selectedTab}   sx={{ minHeight: '35px', height: '35px',padding:"0px" }}   onChange={handleChange} aria-label="basic tabs example">
        <Tab sx={{padding:"0px"}}  label="Dependent" />
        <Tab sx={{padding:"0px"}}  label="Used" />
      </Tabs>
      <TableContainer component={Paper}  sx={{ maxHeight: "40vh", scrollbarWidth: "thin" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              
              {Object.keys(data[0] || {}).map((key, index) => (
                <TableCell sx={{...TablecellStyle,backgroundColor: currentTheme.thirdColor, color: currentTheme.tableHeaderColor}} key={index}>{key.replace(/([A-Z])/g, ' $1').trim()}</TableCell> // Capitalize and format the key
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
          {data.map((row, index) => (
              <TableRow key={index}>
                {Object.keys(row).map((key, cellIndex) => (
                  <TableCell sx={TablebodyCell} key={cellIndex}>
                    {row[key]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

export default Definitiontable1;
