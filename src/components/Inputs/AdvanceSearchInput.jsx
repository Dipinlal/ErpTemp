import React from 'react';
import { TextField, FormControl } from '@mui/material';

export default function AdvanceSearchInput({ value, onChange, disabled, width }) {
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
      <TextField
        value={value}
        onChange={onChange}
        size="small"
        disabled={disabled}
        sx={{
          height: 30,
          fontSize: "0.75rem",
          "& .MuiInputBase-input": {
            height: '30px',
            padding: '0 14px',
          },
        }}
      />
    </FormControl>
  );
}
