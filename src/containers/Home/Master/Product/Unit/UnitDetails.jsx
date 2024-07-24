import { Box, Breadcrumbs, IconButton, Stack } from '@mui/material'
import React from 'react'
import { secondryColor } from '../../../../../config'
import { MDBCard, MDBCardBody, MDBCol, MDBRow } from 'mdb-react-ui-kit'
import AutoComplete2 from '../../../../../components/AutoComplete/AutoComplete2'
import AccountInput from '../../../../../components/Inputs/AccountInput'
import UnitEntityTable from './UnitEntityTable'
import { useState } from 'react'

export default function UnitDetails() {


  const [rows, setRows] = useState([
    {
      id: 1,
      entity: "",
      decimals: "",
      
      roundingType: "",
      connunitTypeector:""
    },
  ]);
  const handleEntityChange = (index, value) => {
    const newRows = [...rows];
    newRows[index].entity = value;
    setRows(newRows);
  };
  const handleDecimalsChange = (index, value) => {
    const newRows = [...rows];
    newRows[index].decimals = value;
    setRows(newRows);
  };

  const handleRoundOffChange = (index, value) => {
    const newRows = [...rows];
    newRows[index].roundOff = value;
    setRows(newRows);
  };

  const handleRoundingTypeChange = (index, value) => {
    const newRows = [...rows];
    newRows[index].roundingType = value;
    setRows(newRows);
  };

  const handleAddRow = () => {
    const newRows = [
      ...rows,
      {
        id: rows.length + 1,
        entity: "",
        decimals: "",
        roundOff: "",
        roundingType: "",
      },
    ];
    setRows(newRows);
  };

  const handleRemoveRow = (index) => {
    if (rows.length > 1) {
      const newRows = [...rows];
      newRows.splice(index, 1);
      setRows(newRows);
    }
  };

  return (
    
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "20px",
        padding: 2,
        
      }}
    >
      
      <MDBCardBody>
                <MDBRow>
                <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Name" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Code" />
                  </MDBCol>
                  {/* <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="No of decimals" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Rounding Type" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Unit type" />
                  </MDBCol> */}
                 
                  <MDBRow>
                      <UnitEntityTable
                        rows={rows}
                        onEntityChange={handleEntityChange}
                        onDecimalsChange={handleDecimalsChange}
                        onRoundOffChange={handleRoundOffChange}
                        onRoundingTypeChange={handleRoundingTypeChange}
                        onAddRow={handleAddRow}
                        onRemoveRow={handleRemoveRow}
                        
                      />
                    </MDBRow>
                 
                </MDBRow>
              
              </MDBCardBody>
              
    </Box>
    
    

  )
}
