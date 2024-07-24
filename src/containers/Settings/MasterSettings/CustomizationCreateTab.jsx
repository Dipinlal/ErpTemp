import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Checkbox, FormControlLabel, Box, Typography } from "@mui/material";
import AccountInput1 from '../../../components/Inputs/AccountInput1';
import AutoComplete2 from '../../../components/AutoComplete/AutoComplete2';
import { primaryButtonColor, secondryColor } from '../../../config';
import { useTheme } from '../../../config/themeContext';


function CustomizationCreateTab({ open, onClose, tabType }) {
  const isTreeTab = tabType === "tree";


  const {currentTheme} = useTheme()

  const buttonStyle = {
    backgroundColor: currentTheme.secondaryColor,
    color: currentTheme.primaryButtonColor,
    textTransform: "none",
    padding: "1px",
    "&:hover": {
      backgroundColor: currentTheme.secondaryColor, // Change as needed
      color: currentTheme.primaryButtonColor, // Example hover color change
    },
  };

  return (
    <Dialog open={open} onClose={onClose}>
     <Typography
          variant="h6"
          gutterBottom
          component="div"
          sx={{ backgroundColor: currentTheme.thirdColor,color: currentTheme.sideBarTextColor1, textAlign: "center" }}
        >
          Users
        </Typography>
      <DialogContent>

      <Box display="flex" flexDirection="column" >
      
          
            <AccountInput1 label="Tab Caption" style={{ flex: 1 }} />
            <AccountInput1 label="Tab Name" style={{ flex: 1 }} />
         
          {isTreeTab && (
            <Box display="flex" flexDirection="column" >
              <AutoComplete2 autoLabel="New Master"  />
             
                <AccountInput1 label="Field Caption" style={{ flex: 1 }} />
                <AccountInput1 label="Field Name" style={{ flex: 1 }} />
              
            </Box>
          )}
          <FormControlLabel control={<Checkbox />} label="Hidden" />
        </Box>
        
      </DialogContent>
      <DialogActions>
        
        <Button onClick={onClose} sx={buttonStyle}>
            Ok
          </Button>
          <Button onClick={onClose} sx={buttonStyle}>
            Cancel
          </Button>
      </DialogActions>
    </Dialog>
  );
}

export default CustomizationCreateTab;
