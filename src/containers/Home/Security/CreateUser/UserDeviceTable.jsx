import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { userDevice } from '../../../../config/securityConfig';
import { primaryButtonColor, thirdColor } from '../../../../config';

const cellStyle = {
  padding: "0px",
                        paddingLeft: "4px",
                        border: " 1px solid #ddd",
                        fontWeight: "600",
                        font: "14px",
                        
                        color: primaryButtonColor,
                        paddingTop: "3px",
                        paddingBottom: "3px",
}
const headerCellStyle = {
  ...cellStyle,
  backgroundColor: thirdColor,
  color: primaryButtonColor,
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
const UserDeviceTable = () => {
  // Sample data
  

  return (
    <TableContainer component={Paper} sx={{maxHeight:"40vh"}}>
      <Table>
        <TableHead>
          <TableRow style={{ backgroundColor: "#0076A3", color: "#fff" }}>
            <TableCell sx={headerCellStyle }></TableCell>
            <TableCell sx={headerCellStyle }>Status</TableCell>
            <TableCell sx={headerCellStyle }>Device</TableCell>
            <TableCell sx={headerCellStyle }>Mac ID</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {userDevice.map((row) => (
             <TableRow key={row.id || index}>
              <TableCell sx={bodyCell}>{row.id}</TableCell>
              <TableCell sx={bodyCell}>{row.status}</TableCell>
              <TableCell sx={bodyCell}>{row.device}</TableCell>
              <TableCell sx={bodyCell}>{row.macId}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserDeviceTable;
