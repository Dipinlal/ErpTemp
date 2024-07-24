import { Checkbox, FormControlLabel } from '@mui/material'
import React from 'react'

export default function CheckBox1({label}) {
  return (
    <FormControlLabel
    control={
      <Checkbox
        sx={{
          transform: "scale(0.9)",
          paddingTop: 1,
        }}
      />
    }
    label={label}
    sx={{
      "& .MuiFormControlLabel-label": {
        fontSize: "0.9rem",
        color: "gray",
      },
    }}
  />
  )
}
