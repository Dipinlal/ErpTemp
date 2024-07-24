import React from 'react';
import { Select, MenuItem, FormControl, InputLabel, InputAdornment, IconButton, OutlinedInput } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function AdvancedSearchSelect({ label, value, onChange, options, disabled, width }) {
  const handleClear = (event) => {
    event.stopPropagation(); // Prevent the dropdown from opening
    onChange({ target: { value: '' } });
  };


  return (
    <FormControl
      margin="normal"
      size="small"
      sx={{
        width: width,
        margin: 0,
        padding: 0,
        "& .MuiInputBase-root": {
          height: 30,
        },
        "& .MuiInputBase-input": {
          fontSize: "0.75rem",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "currentColor",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "currentColor",
        },
      }}
    >
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        onChange={onChange}
        size="small"
        disabled={disabled}
        autoWidth={false}
      
        IconComponent={(props) => (
          value ? null : <ArrowDropDownIcon {...props} />
        )}
        input={
          <OutlinedInput
            endAdornment={
              value && (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="clear"
                    onClick={handleClear}
                    size="small"
                    sx={{ ml: 1 }}
                  >
                    <ClearIcon fontSize="small" />
                  </IconButton>
                </InputAdornment>
              )
            }
          />
        }
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: 200,
              scrollbarWidth: "thin",
            },
          },
        }}
        sx={{
          height: 30,
          fontSize: "0.75rem",
          padding: 0,
        }}
      >
        
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
