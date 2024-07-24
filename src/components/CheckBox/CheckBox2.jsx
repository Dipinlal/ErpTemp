import { Checkbox, FormControlLabel } from '@mui/material'
import React from 'react'

export default function CheckBox2({label}) {
  return (
    <FormControlLabel
    control={
      <Checkbox
        sx={{
          transform: "scale(0.75)",
          paddingTop: 1,
        }}
      />
    }
    label={label}
    sx={{
      "& .MuiFormControlLabel-label": {
        fontSize: "0.75rem",
        color: "gray",
        width:"200px"
      },
    }}
  />
  )
}
