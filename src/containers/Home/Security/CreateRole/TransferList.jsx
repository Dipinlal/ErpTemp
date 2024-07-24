import * as React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { Tooltip, Typography } from '@mui/material';
import { primaryButtonColor, thirdColor } from '../../../../config';
import { useTheme } from '../../../../config/themeContext';

// Utility functions to handle list operations
function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}

export default function TransferList() {
  // State management for checked, left, and right lists
  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState([0, 1, 2, 3]);
  const [right, setRight] = React.useState([4, 5, 6, 7]);

  const { currentTheme } = useTheme();

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  // Functions to handle movement of items
  const handleAllRight = () => {
    setRight(right.concat(left));
    setLeft([]);
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const handleAllLeft = () => {
    setLeft(left.concat(right));
    setRight([]);
  };

  // Custom list generation
  const customList = (items,header) => (
    <div>
    {/* Header is placed outside of Paper to make it fixed */}
    <Typography
      gutterBottom
      component="div"
      sx={{
        backgroundColor: currentTheme.thirdColor,
        color: currentTheme.sideBarTextColor1,
        textAlign: "center",
        padding: "0px", // Adjust padding as necessary
        fontWeight: "bold", // Optional, makes header text bold
        marginBottom:"0px"
      }}
    >
      {header}
    </Typography>
    <Paper sx={{ width: "100%", height: 300, overflow: 'auto',scrollbarWidth:"thin",marginTop:"0px" }}>
       
      <List dense component="div" role="list">
        {items.map((value) => {
          const labelId = `transfer-list-item-${value}-label`;

          return (
            <Tooltip title={`Assigned for Entity${value+1}`} key={value}>
            <ListItemButton
              key={value}
              role="listitem"
              onClick={handleToggle(value)}
              sx={{
                backgroundColor: checked.indexOf(value) !== -1 ? currentTheme.thirdColorLighter : "transparent", // Change color if selected
                '&:hover': {
                  backgroundColor: currentTheme.thirdColorLighter // Lighter pink for hover
                }
              }}
              
            >
              {/* <ListItemIcon sx={{padding:0,mr:0}}>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{
                    'aria-labelledby': labelId,
                  
                  }}
                  sx={{padding:"0"}}  
                />
              </ListItemIcon> */}
              <ListItemText  id={labelId} primary={`List item ${value + 1}`} />
            </ListItemButton>
            </Tooltip>
          );
        })}
      </List>
    </Paper>
    </div>
  );

  // Final rendering of the component
  return (
    <Grid sx={{display:"flex",flexDirection:"row"}} container spacing={2} justifyContent="center" alignItems="center">
      <Grid sx={{width:"40%",scrollbarWidth:"thin"}} item>{customList(left,"Available Profile")}</Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleAllRight}
            disabled={left.length === 0}
            aria-label="move all right"
          >
            ≫
          </Button>
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            aria-label="move selected right"
          >
            &gt;
          </Button>
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            aria-label="move selected left"
          >
            &lt;
          </Button>
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleAllLeft}
            disabled={right.length === 0}
            aria-label="move all left"
          >
            ≪
          </Button>
        </Grid>
      </Grid>
      <Grid sx={{width:"40%",scrollbarWidth:"thin"}} item>{customList(right,"Assigned Profile")}</Grid>
    </Grid>
  );
}
