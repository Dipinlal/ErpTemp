import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { historyProfile } from '../../../../config/securityConfig';
import { thirdColor } from '../../../../config';
import { useTheme } from '../../../../config/themeContext';


const ProfileHistoryTable = ({ onRowClick }) => {
  // Sample data

  const { currentTheme } = useTheme();

  const cellStyle = {
    padding: "0px",
                          paddingLeft: "4px",
                          border: " 1px solid #ddd",
                          fontWeight: "600",
                          font: "14px",
                          
                          color: currentTheme.tableHeaderColor,
                          paddingTop: "3px",
                          paddingBottom: "3px",
  }
  const headerCellStyle = {
    ...cellStyle,
    backgroundColor: currentTheme.thirdColor,
    color: currentTheme.tableHeaderColor,
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
  

  return (
    <TableContainer component={Paper} sx={{maxHeight:"40vh"}}>
      <Table>
        <TableHead>
          <TableRow >
            <TableCell sx={headerCellStyle }></TableCell>
            <TableCell sx={headerCellStyle }>Profile Name</TableCell>
            <TableCell sx={headerCellStyle }>Date</TableCell>
            <TableCell sx={headerCellStyle }>Time</TableCell>
            <TableCell sx={headerCellStyle }>Created by</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {historyProfile.map((row) => (
             <TableRow key={row.id || index} onClick={() => onRowClick(row)}>
              <TableCell sx={bodyCell}>{row.id}</TableCell>
              <TableCell sx={bodyCell}>{row.profileName}</TableCell>
              <TableCell sx={bodyCell}>{row.date}</TableCell>
              <TableCell sx={bodyCell}>{row.time}</TableCell>
              <TableCell sx={bodyCell}>{row.createdBy}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProfileHistoryTable;
