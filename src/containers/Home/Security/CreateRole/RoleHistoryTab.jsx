import React from 'react';
import { Box, Tabs, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { thirdColor } from '../../../../config';
import { useTheme } from '../../../../config/themeContext';



const TabDetails = ({ data }) => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const { currentTheme } = useTheme();

  
const cellStyle = {
  padding: "0px",
                        paddingLeft: "4px",
                        border: " 1px solid #ddd",
                        fontWeight: "600",
                        font: "14px",
                        
                        color: currentTheme.sideBarTextColor1,
                        paddingTop: "3px",
                        paddingBottom: "3px",
}
const headerCellStyle = {
  ...cellStyle,
  backgroundColor: currentTheme.thirdColor,
  color: currentTheme.sideBarTextColor1,
};
const bodyCell={
  padding: "0px",
  paddingLeft: "4px",
  border: " 1px solid #ddd",
  minWidth: "100px",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
}

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const tabContent = [
    { label: 'Assigned Profiles', content: data.tab1 },
    { label: 'Additions', content: data.tab2 },
    { label: 'Exclusions', content: data.tab3 },
    { label: 'Restrictions for Entry', content: data.tab4 },
    { label: 'Restrictions for trees', content: data.tab5 },
    { label: 'Transaction Rights', content: data.tab6 },
    
  ];

  return (
    <Box sx={{marginTop: 2,width:"auto" }}>
      <Tabs value={selectedTab} onChange={handleChange}  aria-label="tabs"
      variant="scrollable"
      scrollButtons="auto" // `auto` will only show scroll buttons when needed
      allowScrollButtonsMobile
      TabIndicatorProps={{
        sx: {
          backgroundColor:  currentTheme.thirdColor,
        },
      }}
      sx={{
        '& .MuiTab-root': {
          textTransform: 'none',
          minWidth: 120,
          backgroundColor: '#fff',
          color:  currentTheme.actionIcons,
          '&.Mui-selected': {
            backgroundColor:  currentTheme.thirdColor,
            color:currentTheme.sideBarTextColor1,
          },
        },
      }}>
        {tabContent.map((tab, index) => (
          <Tab label={tab.label} key={index} sx={{textTransform:"none"}} />
        ))}
      </Tabs>
      {tabContent.map((tab, index) => (
        <Box
          role="tabpanel"
          hidden={selectedTab !== index}
          key={index}
          sx={{ padding: 2,border: "1px solid #ddd",width:"100%",overflowX:"auto",height:"40vh",overflowY:"auto",scrollbarWidth:"thin" }}
        >
          {selectedTab === index && (
            <TableContainer component={Paper} sx={{maxHeight:"35vh",scrollbarWidth:"thin",width: 'fit-content' }}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    {Object.keys(tab.content[0]).map((key) => (
                      <TableCell key={key} sx={headerCellStyle }>{key==="id"?null:key}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tab.content.map((row, rowIndex) => (
                    <TableRow key={rowIndex}>
                      {Object.values(row).map((value, cellIndex) => (
                        <TableCell key={cellIndex} sx={bodyCell}>{value}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default TabDetails;
