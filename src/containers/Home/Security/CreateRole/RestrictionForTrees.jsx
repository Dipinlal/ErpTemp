import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import HistoryIcon from '@mui/icons-material/History';
import SelectAllIcon from '@mui/icons-material/SelectAll';
import Tree1 from '../../../../components/Tree/Tree1';
import { primaryButtonColor, primaryColor, thirdColor } from '../../../../config';
import DeselectIcon from '@mui/icons-material/Deselect';
import { List, ListItem, ListItemText, Box, ListItemButton } from '@mui/material';
import RoleRestrictionsTable from './RoleRestrictionTable';
import { masterTrees } from '../../../../config/securityConfig';
import { useTheme } from '../../../../config/themeContext';





const RoleTreeRestriction = ({
  
  masterItems,
  restrictionItems
  
  
}) => {
  
   
      const [selectedItem, setSelectedItem] = useState('');
      const [checkedState, setCheckedState] = useState(
        new Array(masterTrees.length).fill(false)
      );

      const { currentTheme } = useTheme();


      const handleClick = (item) => {
        setSelectedItem(item);
        
      };
      const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
    
        setCheckedState(updatedCheckedState);
      };
    

      
  return (
    <Box
      sx={{
        display: 'flex',
        border: '1px solid #c4c4c4',
        borderRadius: 1,
        overflow: 'hidden',
        mt: 1,
      }}
    >
      {/* Left Panel: Profile Tree */}
      <Box sx={{ width: '50%' }}>
        <Typography
          variant="h6"
          gutterBottom
          component="div"
          sx={{ backgroundColor: currentTheme.thirdColor,color:currentTheme.sideBarTextColor1,pl:1   }}
        >
          Masters
        </Typography>
        <List component="nav" aria-label="main mailbox folders" sx={{height: " 40vh ", overflowY: 'auto', scrollbarWidth: 'thin',padding:0,pl:1  }}>
        {masterItems.map((item, index) => (
         <ListItemButton key={index} onClick={() => handleClick(item)} sx={{ padding: 0 }}>
            <ListItemText primary={item} primaryTypographyProps={{ style: { fontSize: '0.8rem' } }} />
            </ListItemButton>
        ))}
      </List>
      </Box>
      {/* Divider */}
      <Divider
        orientation="vertical"
        flexItem
        sx={{ borderWidth: 1, borderColor: currentTheme.thirdColor }}
      />
      {/* Right Panel: Restrictions */}
      <Box sx={{ width: '50%', height:" 40vh "}}>
        <Typography
          variant="h6"
          gutterBottom
          component="div"
          sx={{ backgroundColor: currentTheme.thirdColor,color:currentTheme.sideBarTextColor1,pl:1   }}
        >
          Master Trees
        </Typography>
        <Box
          
        >
          <Box
          sx={{ height: " 40vh ", overflowY: 'auto', scrollbarWidth: 'thin' }}
        >
          <FormGroup>
            {masterTrees.map((name, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                    sx={{
                      '& .MuiSvgIcon-root': { fontSize: 15 },
                      padding: '0',
                    }}
                  />
                }
                label={name}
                sx={{
                  fontSize: '0.75rem',
                  marginY: 0.1,
                  marginLeft: 0.5,
                  marginRight: 0.5,
                }}
              />
            ))}
          </FormGroup>
        </Box>
          
        </Box>
        {/* Action Buttons */}
        
      </Box>
    </Box>
  );
};

export default RoleTreeRestriction;
