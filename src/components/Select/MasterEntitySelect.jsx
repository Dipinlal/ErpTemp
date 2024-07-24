import { Select, MenuItem, FormControl, InputLabel, FormHelperText } from '@mui/material';
import React from 'react';

export default function MasterEntitySelect({ label, value, onChange, options, disabled, helperText, mandatory }) {
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    const selectedOption = options.find(option => option.value === selectedValue);
    onChange(selectedOption);
  };

  return (
    <FormControl
      margin="normal"
      size="small"
      required={mandatory}
      sx={{
        width: 250,
        "& .MuiInputBase-root": {
          height: 30,
        },
        "& .MuiInputLabel-root": {
          transform: "translate(10px, 5px) scale(0.9)",
        },
        "& .MuiInputLabel-shrink": {
          // backgroundColor: "#fff",
          paddingRight: "5px",
          transform: "translate(14px, -9px) scale(0.75)",
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
        onChange={handleChange}
        label={label}
        size="small"
        disabled={disabled}
        autoWidth={false}
        sx={{
          height: 30,
          fontSize: "0.75rem",
        }}
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: 200,
              scrollbarWidth: "thin"
            },
          },
        }}
      >
        {options.map((option, index) => (
          <MenuItem key={index} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {helperText && (
        <FormHelperText sx={{ fontSize: "0.65rem", whiteSpace: "nowrap" }}>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
}
