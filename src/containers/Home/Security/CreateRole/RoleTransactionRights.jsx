import React, { useState } from 'react'
import { Box, Checkbox, FormControlLabel, FormGroup, TextField, MenuItem, Typography, Select } from '@mui/material';
import { primaryButtonColor, thirdColor } from '../../../../config';
import { MDBCard,
  MDBCardBody,
  MDBCol,
  MDBInput,
  MDBRow,} from "mdb-react-ui-kit";
import { roleRightSelectItem } from '../../../../config/securityConfig';
import RoleSelect1 from '../../../../components/Select/RoleSelect1';
import RoleSelect2 from '../../../../components/Select/RoleSelect2';
import { useTheme } from '../../../../config/themeContext';

const textFieldStyle= {
  width: 100,
  mx: 1,
  height: 30, // Reducing the height
  '& .MuiInputBase-root': {
    height: '30px',
    padding: '0 0px', // Reduces padding inside the input area
  },
  '& .MuiOutlinedInput-input': {
    padding: '4px', // Adjust top and bottom padding
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: '1px solid', // Adjust border if needed
  }
}

function RoleTransactionRights() {

  const [selectedOption, setSelectedOption] = React.useState('');
  const [checkedBillwise, setCheckedBillwise] = React.useState(false);
  const [formData, setformData] = useState({})

  const { currentTheme } = useTheme();

  const timeOptions = [
    { value: 'hours', label: 'Hours' },
    { value: 'days', label: 'Days' }
  ];

  const handleChangeBillwise = (event) => {
    setCheckedBillwise(event.target.checked);
  };

  const handleSelectChange = (event,key) => {
    setformData({...formData,[key]:event.target.value})
    
  };
 
    return (
      <Box>
         <Box sx={{
        
        border: '1px solid #c4c4c4',
        borderRadius: 2,
        overflow:"hidden",
        pl:3,
        mt: 1,
      }}>
        <div >
              <MDBCardBody >
                <MDBRow style={{display:"flex",alignItems:"center"}}>
                  <MDBCol lg="3" md="4" sm="6" xs="12" style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                  <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', width: '100%' }}>
                  <Checkbox
                    checked={checkedBillwise}
                    onChange={handleChangeBillwise}
                    inputProps={{ 'aria-label': 'controlled' }}
                    sx={{padding:0}}
                  />
                  <Typography sx={{fontSize:"14px",padding:0}} variant="body1">Allow Bill Wise On-Account</Typography>
                  </label>
                  </MDBCol>

                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <RoleSelect1
                    label="Budget Limit Warning"
                    value={formData?.BudgetLimit??""}
                    onChange={(e)=>handleSelectChange(e,"BudgetLimit")}
                    options={roleRightSelectItem}
                  />
                  </MDBCol>

                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <RoleSelect1
                    label="Credit Limit Warning"
                    value={formData?.CreditLimit??""}
                    onChange={(e)=>handleSelectChange(e,"CreditLimit")}
                    options={roleRightSelectItem}
                  />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <RoleSelect1
                    label="Negative cash check"
                    value={formData?.Negativecash??""}
                    onChange={(e)=>handleSelectChange(e,"Negativecash")}
                    options={roleRightSelectItem}
                  />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <RoleSelect1
                    label="Negative Stock check"
                    value={formData?.Negativestock??""}
                    onChange={(e)=>handleSelectChange(e,"Negativestock")}
                    options={roleRightSelectItem}
                  />
                  </MDBCol>
                  </MDBRow>  
                </MDBCardBody>    
        </div>
      </Box>
     
      <Box sx={{
        
        border: '1px solid #c4c4c4',
        borderRadius: 2,
        overflowY:"hidden",
       
        mt: 1,
        pb:5
      }}>
        {/* <Box sx={{ backgroundColor: 'white', boxShadow: 1 }}> */}
          <Typography gutterBottom component="div" variant="h6" sx={{ backgroundColor: currentTheme.thirdColor,color:currentTheme.sideBarTextColor1,pl:1   }}>Edit Options</Typography>
          <Box sx={{ pl: 3,gap:"5px",display:"flex",flexDirection:"column" }}>
        <Box sx={{ display: 'flex', alignItems: 'center',  }}>
        <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', width: '100%' }}>
          <Checkbox
            // checked={checked}
            // onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
            sx={{ padding: 0 }}
          />
          <Typography sx={{fontSize:"14px",padding:0}}  variant="body1">Cannot add future Transactions</Typography>
          </label>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center',  }}>
          <Typography  sx={{ minWidth: '350px',fontSize:"14px" }}>Cannot Add Transaction that are more than</Typography>
          <TextField
            size="small"
            type="number"
            variant="outlined"
            sx={textFieldStyle}
          />
           <Typography  sx={{fontSize:"14px" }}>days old</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center',  }}>
          <Typography sx={{ minWidth: '350px',fontSize:"14px" }}>Cannot Edit previous month's entries after</Typography>
          <TextField
            size="small"
            type="number"
            variant="outlined"
           sx={textFieldStyle}
          />
           <Typography  sx={{fontSize:"14px" }}>th day of the month</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center',  }}>
          <Typography sx={{ minWidth: '350px',fontSize:"14px" }}>Cannot Edit Transaction that are more than</Typography>
          <TextField
            size="small"
            type="number"
            variant="outlined"
           sx={textFieldStyle}
          />
           <Typography  sx={{fontSize:"14px" }}>days old</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center',  }}>
          <Typography sx={{ minWidth: '350px',fontSize:"14px" }}>Cannot Add previous months' entries after</Typography>
          <TextField
            size="small"
            type="number"
            variant="outlined"
           sx={textFieldStyle}
          />
           <Typography  sx={{fontSize:"14px" }}>th day of the month</Typography>
        </Box>
        {/* <Box sx={{ display: 'flex', alignItems: 'center',  }}>
          <Typography sx={{ minWidth: '350px',fontSize:"14px" }}>Cannot Print After</Typography>
          <TextField
            size="small"
            type="number"
            variant="outlined"
           sx={textFieldStyle}
          />
           <Typography  sx={{fontSize:"14px" }}></Typography>
           <RoleSelect2
           value={formData?.print??""}
           onChange={(e)=>handleSelectChange(e,"print")}
           options={timeOptions}/>
           
                    
                  
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center',  }}>
          <Typography sx={{ minWidth: '350px',fontSize:"14px" }}>Cannot Re-Print After</Typography>
          <TextField
            size="small"
            type="number"
            variant="outlined"
           sx={textFieldStyle}
          />
           <Typography  sx={{fontSize:"14px" }}></Typography>
           <RoleSelect2
           value={formData?.rePrint??""}
           onChange={(e)=>handleSelectChange(e,"rePrint")}
           options={timeOptions}/>
           
                    
                  
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center',  }}>
          <Checkbox
            // checked={checked}
            // onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
            sx={{ padding: 0 }}
          />
          <Typography sx={{fontSize:"14px",padding:0}}  variant="body1">Do not allow Master Customization</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center',  }}>
          <Checkbox
            // checked={checked}
            // onChange={handleChange}
            inputProps={{ 'aria-label': 'controlled' }}
            sx={{ padding: 0 }}
          />
          <Typography sx={{fontSize:"14px",padding:0}}  variant="body1">Do not allow Batch Customization</Typography>
        </Box> */}
        
      </Box>
      
        {/* </Box> */}
        </Box>  
        </Box>
      );
  
}

export default RoleTransactionRights