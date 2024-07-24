import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Select,
  MenuItem,
  Paper,
  IconButton,
} from '@mui/material';
import { primaryButtonColor, thirdColor } from '../../../../config';
import DeleteIcon from '@mui/icons-material/Delete';
import WarningMessage from '../../../../components/Warning/Warnings';
import { useTheme } from '../../../../config/themeContext';

const tagSelectOptions = [
  { master:"product", value: 'Product1', label: 'Product1' },
  { master:"product",value: 'Product2', label: 'Product2' },
  { master:"product",value: 'Product3', label: 'Product3' },
  { master:"warehouse",value: 'warehouse1', label: 'warehouse1' },
  { master:"warehouse",value: 'warehouse2', label: 'warehouse2' },
];
const nameOptions = [
  { value: 'product', label: 'Product' },
  { value: 'warehouse', label: 'Warehouse' },
  // Add more options as needed
];

const MAX_ROWS = 20;

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

const TagTable = () => {
  // const initialRows = [
  //   { id: 1, name: '', default: '' }
  // ];
  let initialRows = nameOptions.length > 0
  ? nameOptions.map((option, index) => ({
      id: index + 1,
      name: option.value,
      default: ''
    }))
  : [{ id: 1, name: '', default: '' }];

  if (nameOptions.length > 0 && initialRows.length < MAX_ROWS) {
    initialRows.push({
      id: initialRows.length + 1,
      name: '',
      default: ''
    });
  }

  const [rows, setRows] = useState(initialRows);
  const [formData, setFormData] = useState(initialRows.reduce((acc, row) => {
    acc[row.id] = { name: row.name, default: row.default };
    return acc;
  }, {}));
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  const { currentTheme } = useTheme();

  const cellStyle = {
    padding: '0px',
    paddingLeft: '4px',
    border: '1px solid #ddd',
    fontWeight: '600',
    fontSize: '14px',
    color:currentTheme.sideBarTextColor1,
    paddingTop: '3px',
    paddingBottom: '3px',
   
  };
  
  const headerCellStyle = {
    ...cellStyle,
    backgroundColor: currentTheme.thirdColor,
    color:currentTheme.sideBarTextColor1,
  };
  
  const bodyCell = {
    padding: '0px',
    border: '1px solid #ddd',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    minHeight: '30px',
    lineHeight: '30px',
   
  }

  useEffect(() => {
    // Automatically add a new row if the last row has a name and the total number of rows is less than MAX_ROWS
    if (rows.length > 0 && formData[rows[rows.length - 1].id].name  && rows.length < MAX_ROWS) {
      const newRow = { id: rows.length ? Math.max(...rows.map(row => row.id)) + 1 : 1, name: '', default: '' };
      setRows([...rows, newRow]);
      setFormData(prevFormData => ({
        ...prevFormData,
        [newRow.id]: { name: '', default: '' }
      }));
    }
  }, [formData, rows]);

  const handleAlertClose = () => {
    setAlert(false);
    setMessage("");
    setAlertType("");
  };

  const handleSelectChange = (event, key) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      [key]: { ...prevFormData[key], default: event.target.value }
    }));
  };

  const handleNameChange = (event, key) => {
    const newName = event.target.value;
      setFormData(prevFormData => ({
        ...prevFormData,
        [key]: { ...prevFormData[key], name: newName }
      }));
      const isDuplicate = Object.values(formData).some(row => row.name.toLowerCase() === newName.toLowerCase() && row !== formData[key]);

    if (isDuplicate) {
      
      setAlertType("warning");
      setMessage("Duplicate Name Entered. Please Choose A Unique Name");
      setAlert(true);
    }  
    
  };

  const handleNameBlur = (event, key)=>{

    const newName = event.target.value;
    const isDuplicate = Object.values(formData).some(row => row.name.toLowerCase() === newName.toLowerCase() && row !== formData[key]);

    if (isDuplicate) {
      
     
      setFormData(prevFormData => ({
        ...prevFormData,
        [key]: { ...prevFormData[key], name: '',default:'' }
      }));
    } 

  }
  // const handleDeleteRow = (rowToDelete) => {
  //   setRows(rows.filter(row => row.id !== rowToDelete.id));
  //   setFormData(prevFormData => {
  //     const newFormData = { ...prevFormData };
  //     delete newFormData[rowToDelete.id];
  //     return newFormData;
  //   });
  // };
  const handleDeleteRow = (rowToDelete) => {
    if (rows.length === 1) {
      // If only one row is left, clear its data instead of deleting it
      setFormData({
        [rowToDelete.id]: { name: '', default: '' }
      });
    } else {
      setRows(rows.filter(row => row.id !== rowToDelete.id));
      setFormData(prevFormData => {
        const newFormData = { ...prevFormData };
        delete newFormData[rowToDelete.id];
        return newFormData;
      });
    }
  };

  return (
    <TableContainer sx={{ width: 'auto', maxHeight: '70vh', overflowY: 'auto', scrollbarWidth: 'thin' }} component={Paper}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell sx={headerCellStyle}>Name</TableCell>
            <TableCell sx={headerCellStyle}>Default</TableCell>
            <TableCell sx={headerCellStyle}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell sx={bodyCell}>
                <TextField
                  variant="outlined"
                  size="small"
                  value={formData[row.id].name}
                  onChange={(e) => handleNameChange(e, row.id)}
                  onBlur={(e)=>handleNameBlur(e, row.id)}
                  //disabled={nameOptions.some(option => option.value == formData[row.id].name)}
                  sx={{
                    width: 250, // Adjust the width as needed
                    "& .MuiInputBase-root": {
                      height: 30, // Adjust the height of the input area
                    },
                    "& .MuiInputBase-input": {
                      fontSize: "0.75rem", // Adjust the font size of the input text
                    }
                  }}
                />
              </TableCell>
              <TableCell sx={bodyCell}>
                <Select
                  variant="outlined"
                  size="small"
                  value={formData[row.id].default}
                  onChange={(e) => handleSelectChange(e, row.id)}
                  sx={{
                    width: 250, // Adjust the width as needed
                    height: 30, // Adjust the height of the input area
                    fontSize: "0.75rem" // Adjust the font size of the input text
                  }}
                  MenuProps={{
                    PaperProps: {
                      style: {
                        maxHeight: 200, // Set maximum height for the dropdown list
                        scrollbarWidth: "thin"
                      }
                    }
                  }}
                >
                  {tagSelectOptions
                    .filter(option => option.master === formData[row.id].name)
                    .map((option, index) => (
                      <MenuItem key={index} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                </Select>
              </TableCell>
              <TableCell sx={bodyCell}>
                <IconButton onClick={() => handleDeleteRow(row)} size="small">
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <WarningMessage
        open={alert}
        handleClose={handleAlertClose}
        message={message}
        type={alertType}
      />
    </TableContainer>
  );
};

export default TagTable;
