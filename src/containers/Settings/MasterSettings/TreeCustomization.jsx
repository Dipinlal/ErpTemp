import React, { useState } from 'react';
import {
  Box,
  Checkbox,
  TextField,
  Button,
  Select,
  MenuItem,
  IconButton,
  List,
  ListItem,
  Typography,
  ListItemButton,
  FormControl,
  InputLabel,
  FormControlLabel,
  Stack
} from '@mui/material';
import { ArrowUpward, ArrowDownward } from '@mui/icons-material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { primaryButtonColor, thirdColor } from '../../../config';
import { useTheme } from '../../../config/themeContext';

const TreeCustomization = () => {
  const [columns, setColumns] = useState([
    { name: 'MasterId', selected: true, width: 70, textAlign: 'Left' },
    { name: 'Name', selected: true, width: 70, textAlign: 'Left' },
    { name: 'Code', selected: true, width: 70, textAlign: 'Left' },
    { name: 'CreatedBy', selected: true, width: 70, textAlign: 'Left' },
    { name: 'ModifiedBy', selected: true, width: 70, textAlign: 'Left' },
    { name: 'CreatedDate', selected: true, width: 70, textAlign: 'Left' },
    { name: 'ModifiedDate', selected: false, width: 70, textAlign: 'Left' },
    { name: 'AllowOtherCompaniesToViewRecord', selected: false, width: 70, textAlign: 'Left' },
    { name: 'SyncReceivedDate', selected: false, width: 70, textAlign: 'Left' },
    { name: 'EditingLocation', selected: false, width: 70, textAlign: 'Left' }
  ]);

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleCheckboxChange = (event, index) => {
    const updatedColumns = columns.map((column, i) =>
      i === index ? { ...column, selected: event.target.checked } : column
    );
    setColumns(updatedColumns);
  };

  const moveColumn = (direction) => {
    if (selectedIndex !== null) {
      const newColumns = [...columns];
      const [removedColumn] = newColumns.splice(selectedIndex, 1);
      newColumns.splice(selectedIndex + direction, 0, removedColumn);
      setColumns(newColumns);
      setSelectedIndex(selectedIndex + direction);
    }
  };

  const handlePropertyChange = (index, property, value) => {
    const newColumns = [...columns];
    newColumns[index] = { ...newColumns[index], [property]: value };
    setColumns(newColumns);
  };

  const handleSubmit = () => {
    const selectedColumns = columns.filter(column => column.selected);
    console.log('Selected Columns:', selectedColumns);
  };

  const {currentTheme} = useTheme()
  return (
    <Box sx={{ width: '100%', margin: '0 auto' }}>
      
      <Box sx={{ display:"flex",justifyContent:"space-between" }}>
        <Typography>Select the columns you want to display for the master in the Grid</Typography>
        <IconButton
          aria-label="done"
          sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
        >
          <Stack direction="column" alignItems="center">
            <CheckCircleOutlineIcon sx={{ color: currentTheme.actionIcons }} />
            <Typography
              variant="caption"
              align="center"
              style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
            >
              Ok
            </Typography>
          </Stack>
        </IconButton>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', marginTop: '0px',paddingBottom:"20px" }}>
        <Box sx={{ width: '80%', marginRight: '16px',border: '1px solid #ccc', borderRadius: '4px' }}>
          <Box sx={{padding: '0px', backgroundColor: currentTheme.thirdColor, color:currentTheme.tableHeaderColor }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2px 8px',marginRight:"0.4rem" }}>

            
            <Typography sx={{ width: '50%' }}>Column</Typography>
            <Stack direction="row" alignItems="center" spacing={1} sx={{marginRight:"0.4rem"}}>
              <Typography sx={{ width: '100px' }}>Width (Pixel)</Typography>
              <Typography sx={{ width: '100px' }}>Text Align</Typography>
            </Stack>
            </Box>
          </Box>
          <List sx={{padding:"8px", height: '45vh', overflowY: 'scroll', scrollbarWidth: 'thin', '&::-webkit-scrollbar': { width: '0.4em' }, '&::-webkit-scrollbar-thumb': { backgroundColor: thirdColor } }}>
            {columns.map((column, index) => (
              <ListItemButton
                key={column.name}
                selected={selectedIndex === index}
                onClick={() => setSelectedIndex(index)}
                sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2px 8px' }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={column.selected}
                      onChange={(e) => handleCheckboxChange(e, index)}
                      sx={{ marginRight: '8px', padding:"0px"}}
                    />
                  }
                  label={column.name.replace(/([A-Z])/g, ' $1').trim()}
                  sx={{ marginRight: '0px'}}
                />
                <div>
                  <Stack direction="row" alignItems="center" spacing={1}>
                    <TextField
                      type="number"
                      value={column.width}
                      onChange={(e) => handlePropertyChange(index, 'width', e.target.value)}
                      sx={{ width: '100px' }}
                      InputProps={{ sx: { height: '28px' } }}
                    />
                    <FormControl sx={{ width: '100px' }}>
                      <Select
                        value={column.textAlign}
                        onChange={(e) => handlePropertyChange(index, 'textAlign', e.target.value)}
                        sx={{ height: '28px' }}
                        MenuProps={{ PaperProps: { sx: { maxHeight: '200px' } } }}
                      >
                        <MenuItem value="Left">Left</MenuItem>
                        <MenuItem value="Center">Center</MenuItem>
                        <MenuItem value="Right">Right</MenuItem>
                      </Select>
                    </FormControl>
                  </Stack>
                </div>
              </ListItemButton>
            ))}
          </List>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <IconButton
            onClick={() => moveColumn(-1)}
            disabled={selectedIndex === null || selectedIndex === 0}
          >
            <ArrowUpward />
          </IconButton>
          <IconButton
            onClick={() => moveColumn(1)}
            disabled={selectedIndex === null || selectedIndex === columns.length - 1}
          >
            <ArrowDownward />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default TreeCustomization;
