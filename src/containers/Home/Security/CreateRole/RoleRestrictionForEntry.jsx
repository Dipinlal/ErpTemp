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
import { useTheme } from '../../../../config/themeContext';




const SelectAllIconStyle ={//style for selectAll and unselectAll
    fontSize: "0.8rem",
    padding: "0.5rem",
    "&:hover": {
      backgroundColor: 'transparent',  // Removes hover background color
      "& .MuiTouchRipple-root": {
        color: 'transparent' // Removes ripple effect color change if needed
      }
    },
    "&:active": {
      backgroundColor: 'transparent', // Removes active background color
    }
  }
const RoleRestriction = ({
  
  masterItems,
  restrictionItems
  
  
}) => {
  
   
      const [selectedItem, setSelectedItem] = useState('');

      const { currentTheme } = useTheme();

      const handleClick = (item) => {
        setSelectedItem(item);
        
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
        <List component="nav" aria-label="main mailbox folders" sx={{height: "50vh", overflowY: 'auto', scrollbarWidth: 'thin',padding:0,pl:1  }}>
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
        sx={{ borderWidth: 1, borderColor: thirdColor }}
      />
      {/* Right Panel: Restrictions */}
      <Box sx={{ width: '50%', height: "50vh" }}>
        <Typography
          variant="h6"
          gutterBottom
          component="div"
          sx={{ backgroundColor: currentTheme.thirdColor,color:currentTheme.sideBarTextColor1,pl:1   }}
        >
          Restrictions
        </Typography>
        <Box
          
        >
          
          <RoleRestrictionsTable/>
        </Box>
        {/* Action Buttons */}
        
      </Box>
    </Box>
  );
};

export default RoleRestriction;
