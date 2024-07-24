import React from 'react';
import { Select, MenuItem } from '@mui/material';

const RoleSelect2 = ({ value, onChange, options, ...props }) => {
  return (
    <Select
      value={value}
      onChange={onChange}
      sx={{
        height: 30, // Adjust the height
        width:100,
        fontSize: "0.75rem", // Adjust the font size
        ...props.sx // Allow additional styles to be passed
      }}
      {...props} // Spread additional props
    >
      {options.map((option, index) => (
        <MenuItem key={index} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Select>
  );
};

export default RoleSelect2;
