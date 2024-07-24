import React, { useState } from 'react';
import Box from '@mui/material/Box';
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
const ProfileManagementPanel = ({
  
  createProfileTree,
  restrictionItems,
  
  
}) => {
    const [checkedState, setCheckedState] = useState(
        new Array(restrictionItems.length).fill(false)
      );

      const { currentTheme } = useTheme();

      const handleSelectAll = () => {
        setCheckedState(new Array(restrictionItems.length).fill(true));
      };
    
      const handleUnselectAll = () => {
        setCheckedState(new Array(restrictionItems.length).fill(false));
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
          Menu
        </Typography>
        <Tree1 items={createProfileTree} />
      </Box>
      {/* Divider */}
      <Divider
        orientation="vertical"
        flexItem
        sx={{ borderWidth: 1, borderColor: thirdColor }}
      />
      {/* Right Panel: Restrictions */}
      <Box sx={{ width: '50%', height: 550 }}>
        <Typography
          variant="h6"
          gutterBottom
          component="div"
          sx={{ backgroundColor: currentTheme.thirdColor,color:currentTheme.sideBarTextColor1,pl:1   }}
        >
          Restrictions
        </Typography>
        <Box
          sx={{ height: 410, overflowY: 'auto', scrollbarWidth: 'thin' }}
        >
          <FormGroup>
            {restrictionItems.map((name, index) => (
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
        {/* Action Buttons */}
        <Stack direction="row" spacing={2} mt={2}>
          
          <IconButton
            aria-label="Select All"
            sx={SelectAllIconStyle}
            onClick={handleSelectAll}
          >
            <Stack direction="column" alignItems="center">
              <SelectAllIcon sx={{ color: currentTheme.primaryColor }} />
              <Typography
                variant="caption"
                align="center"
                style={{ color: currentTheme.primaryColor, fontSize: '0.8rem' }}
              >
                Select All
              </Typography>
            </Stack>
          </IconButton>
          <IconButton
            aria-label="Unselect All"
            sx={SelectAllIconStyle}
            onClick={handleUnselectAll}
          >
            <Stack direction="column" alignItems="center">
              <DeselectIcon sx={{ color: currentTheme.primaryColor }} />
              <Typography
                variant="caption"
                align="center"
                style={{ color: currentTheme.primaryColor, fontSize: '0.8rem' }}
              >
                Unselect All
              </Typography>
            </Stack>
          </IconButton>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProfileManagementPanel;
