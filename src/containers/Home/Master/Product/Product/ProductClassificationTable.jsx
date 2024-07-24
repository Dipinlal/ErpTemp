import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Paper,
  Autocomplete
} from '@mui/material';
import { thirdColor } from '../../../../../config';


const unitOptions = [
  { value: 'NOS', label: 'NOS' },  
  { value: 'JAR', label: 'JAR' },
  { value: 'PKT', label: 'PKT' },
 
  // Add more unit options as needed
];


const cellStyle = {
  padding: '0px',
  paddingLeft: '4px',
  border: '1px solid #ddd',
  fontWeight: '600',
  fontSize: '14px',
  color: 'white',
  paddingTop: '3px',
  paddingBottom: '3px',
};

const headerCellStyle = {
  ...cellStyle,
  backgroundColor: thirdColor,
  color: '#fff'
};

const bodyCell = {
  padding: '0px',
  border: '1px solid #ddd',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  minHeight: '30px',
  lineHeight: '30px',
};

const ProductClassificationTable = () => {
  const initialRows = [{ id: 1, unit: 'JAR', barcode: '', batch: '' }];

  const [rows, setRows] = useState(initialRows);
  const [formData, setFormData] = useState(initialRows.reduce((acc, row) => {
    acc[row.id] = { unit: row.unit, barcode: row.barcode, batch: row.batch };
    return acc;
  }, {}));

  useEffect(() => {
    if (rows.length > 0 && formData[rows[rows.length - 1].id].unit ) {
      const newRow = { id: rows.length ? Math.max(...rows.map(row => row.id)) + 1 : 1, unit: '', barcode: '', batch: '' };
      setRows([...rows, newRow]);
      setFormData(prevFormData => ({
        ...prevFormData,
        [newRow.id]: { unit: '', barcode: '', batch: '' }
      }));
    }
  }, [formData, rows]);

  const handleAutocompleteChange = (event, value, key) => {
    if(value){
      setFormData(prevFormData => ({
        ...prevFormData,
        [key]: { ...prevFormData[key], unit: value }
      }));

    }
    
    
      else {
        setFormData(prevFormData => ({
          ...prevFormData,
          [key]: { ...prevFormData[key], unit: prevFormData[key].unit }
        }));
        
      }
    
  };

  const handleTextFieldChange = (event, key, field) => {
    const value = event.target.value;
    setFormData(prevFormData => ({
      ...prevFormData,
      [key]: { ...prevFormData[key], [field]: value }
    }));
  };
console.log(formData);
  return (
    <TableContainer sx={{ width: 'fit-Content', maxHeight: '70vh', overflowY: 'auto', scrollbarWidth: 'thin' }} component={Paper}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
          <TableCell sx={headerCellStyle}></TableCell>
            <TableCell sx={headerCellStyle}>Unit</TableCell>
            <TableCell sx={headerCellStyle}>Barcode</TableCell>
            <TableCell sx={headerCellStyle}>Batch</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
            <TableRow key={row.id}>
              <TableCell sx={{...bodyCell,width:"40px",textAlign:"center"}}>{index + 1}</TableCell>
              <TableCell sx={bodyCell}>
                <Autocomplete
                  options={unitOptions.map(option => option.value)}
                  value={formData[row.id].unit}
                  onChange={(event, value) => handleAutocompleteChange(event, value, row.id)}
                  onInputChange={(event, value) => {
                    if (!value) {
                      setFormData(prevFormData => ({
                        ...prevFormData,
                        [row.id]: { ...prevFormData[row.id], unit: prevFormData[row.id].unit }
                      }));
                      
                    }
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      size="small"
                      sx={{
                        width: 250,
                        "& .MuiInputBase-root": {
                          height: 30,
                        },
                        "& .MuiInputBase-input": {
                          fontSize: "0.75rem",
                        }
                      }}
                    />
                  )}
                />
              </TableCell>
              <TableCell sx={bodyCell}>
                <TextField
                  variant="outlined"
                  size="small"
                  value={formData[row.id].barcode}
                  onChange={(event) => handleTextFieldChange(event, row.id, 'barcode')}
                  sx={{
                    width: 250,
                    "& .MuiInputBase-root": {
                      height: 30,
                    },
                    "& .MuiInputBase-input": {
                      fontSize: "0.75rem",
                    }
                  }}
                />
              </TableCell>
              <TableCell sx={bodyCell}>
                <TextField
                  variant="outlined"
                  size="small"
                  value={formData[row.id].batch}
                  onChange={(event) => handleTextFieldChange(event, row.id, 'batch')}
                  sx={{
                    width: 250,
                    "& .MuiInputBase-root": {
                      height: 30,
                    },
                    "& .MuiInputBase-input": {
                      fontSize: "0.75rem",
                    }
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductClassificationTable;
