import { Select, MenuItem, FormControl, InputLabel, FormHelperText } from '@mui/material';
import React from 'react';

export default function RoleSelect1({ label, value, onChange, options,disabled,helperText ,mandatory }) {
  return (
    <FormControl
      margin="normal"
      size="small"
      required={mandatory}
      sx={{
        width: 250, // Same width as the TextField
        "& .MuiInputBase-root": {
          height: 30, // Adjust the height of the input area
        },
        "& .MuiInputLabel-root": {
          transform: "translate(10px, 5px) scale(0.9)", // Adjust label position when not focused
        },
        "& .MuiInputLabel-shrink": {
          // backgroundColor:"#fff",
          paddingRight:"5px",
          transform: "translate(14px, -9px) scale(0.75)", // Adjust label position when focused
        },
        "& .MuiInputBase-input": {
          fontSize: "0.75rem", // Adjust the font size of the input text
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "currentColor", // Keeps the current border color
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "currentColor", // Optional: Keeps the border color on hover
        },
      }}
    >
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        onChange={onChange}
        label={label}
        size="small"
        disabled={disabled}
        autoWidth={false}
        sx={{
          height: 30, // Adjust the height
          fontSize: "0.75rem", // Adjust the font size
        }}
        MenuProps={{
          PaperProps: {
            style: {
              maxHeight: 200, // Set maximum height for the dropdown list
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
