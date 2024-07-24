import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Box, Typography, Stack, TextField, FormControlLabel, Checkbox, Divider, FormGroup, Button as ButtonM, Tabs, Tab, List, ListItem, ListItemText, ListItemButton } from '@mui/material';
import { AddCircleOutline , Edit as EditIcon, Delete as DeleteIcon, Close as CloseIcon  } from '@mui/icons-material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { primaryButtonColor, primaryColor, secondryColor, thirdColor } from '../../../config';
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { Collapse, CardBody,Button, Card, Alert } from "reactstrap";
import Popover from '@mui/material/Popover';
import PrintIcon from "@mui/icons-material/Print";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import HistoryIcon from '@mui/icons-material/History';
import SaveIcon from "@mui/icons-material/Save";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import SelectAllIcon from '@mui/icons-material/SelectAll';
import DeselectIcon from '@mui/icons-material/Deselect';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import AutoComplete1 from '../../../components/AutoComplete/AutoComplete1';
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import SettingsIcon from '@mui/icons-material/Settings';
import AccountInput from '../../../components/Inputs/AccountInput';
import FileCopyIcon from "@mui/icons-material/FileCopy";
import { MDBCardBody, MDBCol, MDBRow } from 'mdb-react-ui-kit';
import RoomPreferencesIcon from "@mui/icons-material/RoomPreferences";
import { useTheme } from '../../../config/themeContext';
import EntityMasterDetailTab from './EntityMasterDetailTab';
import CurrencyMaster from '../EntitySettings/Currency/CurrencyMaster/CurrencyMaster';
import ExchangeRate from '../EntitySettings/Currency/ExchangeRate/ExchangeRate';
import ExchangeRateHistory from '../EntitySettings/Currency/ExchangeCurrencyHistory/ExchangeRateHistoy';
import FinanceSettings from '../EntitySettings/FinanceSettings';
import InventorySettings from '../EntitySettings/InventorySettings';
import FixedAssetsSettings from '../EntitySettings/FixedAssetsSettings';
import GeneralEntitySettings from '../EntitySettings/GeneralEntitySettings';
import MasterSettings from '../../../pages/MasterSettings/MasterSettings';
import MasterSettingsContainer from '../MasterSettings/MasterSettingsContainer';
import QuantityDefinition from '../EntitySettings/QuantityDefinition';


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

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

function BasicBreadcrumbs({currentTheme}) {
  return (
    <div role="presentation" style={{display:"flex",flexDirection:"row",maxWidth:"fit-content",alignItems:"center"}} onClick={handleClick}>
      
      <Stack spacing={2} sx={{ flex: 1 }}>
      <Breadcrumbs  
      // sx={{
      //       "& .MuiBreadcrumbs-separator": { mx: -0.0 }, // Reducing space around the separator
      //       "& .MuiTypography-root": { mr: -0.0, ml: -0.0 } // Adjusting text margins
      //     }} 
          separator={<NavigateNextIcon fontSize="small" sx={{color: currentTheme.actionIcons,}} />}
        aria-label="breadcrumb">
      
      <Link
      underline="hover"
      sx={{ display: "flex", alignItems: "center", fontSize: "1rem",color: currentTheme.actionIcons, }} // Reduce font size
      key="1"
      
      onClick={handleClick}
    >
      <SettingsIcon sx={{ mr: 0.5 }} fontSize="inherit" />
      Settings
    </Link>
    {/* <Link
      underline="hover"
      key="2"
      
      sx={{ fontSize: "1rem",color: currentTheme.actionIcons, }}
      onClick={handleClick}
    >
      Security
    </Link>, */}
   
    <Typography key="3"  sx={{ fontSize: "1rem",color: currentTheme.actionIcons, }}>
    Entity Master
    </Typography>,
      </Breadcrumbs>
      </Stack>
    </div>
  );
}
const DefaultIcons = ({iconsClick,detailPageId,currentTheme}) => {
  
  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: "5px" }}>
      
      {/* {detailPageId !=0 ?
      <IconButton
              aria-label="New"
              sx={{ fontSize: "0.8rem", padding: "0.5rem",color: currentTheme.actionIcons, }}
              onClick={()=>iconsClick("GetHistory")}
            >
              <Stack direction="column" alignItems="center">
        <HistoryIcon sx={{ color: currentTheme.actionIcons, }} />
        <Typography
                  variant="caption"
                  align="center"
                  style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                >
                  History
                </Typography>
              </Stack>
            </IconButton>
            :null
      }       */}
            <IconButton
              aria-label="New"
              sx={{ fontSize: "0.8rem", padding: "0.5rem",color: currentTheme.actionIcons, }}
              //onClick={()=>iconsClick("close")}
            >
              <Stack direction="column" alignItems="center">
        <SaveIcon sx={{ color: currentTheme.actionIcons, }} />
        <Typography
                  variant="caption"
                  align="center"
                  style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                >
                  Save
                </Typography>
              </Stack>
            </IconButton>
              
         
          
            <IconButton
                aria-label="Property"
                sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
              >
                <Stack direction="column" alignItems="center">
                  <RoomPreferencesIcon style={{ color: currentTheme.actionIcons,}} />
                  <Typography
                    variant="caption"
                    align="center"
                    style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                  >
                    Property
                  </Typography>
                </Stack>
              </IconButton>
            <IconButton
              aria-label="New"
              sx={{ fontSize: "0.8rem", padding: "0.5rem",color: currentTheme.actionIcons, }}
              onClick={()=>iconsClick("close")}
            >
              <Stack direction="column" alignItems="center">
        <CloseIcon sx={{ color: currentTheme.actionIcons, }} />
        <Typography
                  variant="caption"
                  align="center"
                  style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                >
                  Close
                </Typography>
              </Stack>
            </IconButton>
      {/* <Example/> */}
    </Box>
  );
};
const AdditionalIcons = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: "5px" }}>
      <IconButton>
        <PrintIcon sx={{ color:primaryButtonColor }} />
      </IconButton>
      <IconButton>
        <PrintIcon sx={{ color:primaryButtonColor }} />
      </IconButton>
      <IconButton>
        <PrintIcon sx={{ color:primaryButtonColor }} />
      </IconButton>
      <IconButton>
        <PrintIcon sx={{ color:primaryButtonColor }} />
      </IconButton>
    </Box>
  );
};


function Example() {//AdditionalIcons
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { currentTheme,switchTheme } = useTheme();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseExtra = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <IconButton aria-describedby={id} variant="contained" onClick={handleClick}>
      <Button
            color="primary"
           
            style={{
              marginBottom: "0rem",
              padding: "0.1rem",
              fontSize: "0.6rem",
              height: "2rem",
              borderRadius: "0.5rem 0 0 0.5rem",
            }}
          >
            <KeyboardDoubleArrowLeftIcon style={{ fontSize: "1rem" }} />
          </Button>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleCloseExtra}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'left',
          horizontal: 'bottom',
        }}
        slotProps={{
          paper: {
            style: {
              border:`1px solid ${currentTheme.primaryColor}`,
              backgroundColor: secondryColor, // Customize the background color here
              padding: '0px', // You can also add other styles like padding, etc.
            },
          }
        }}
        
      >
        <AdditionalIcons />
      </Popover>
    </div>
  );
}




const BusinessUnit = [
  { title: "Unit1", iId: 1 },
  { title: "Unit3", iId: 2 },
  { title: "Unit3", iId: 3 },
];

// Define components for each option





// List of options
const options = [
  // { label: 'Master Settings', component: <MasterSettingsContainer /> },
  { label: 'Quantity Definition', component: <QuantityDefinition /> },
  { label: 'Exchange Rate', component: <ExchangeRate /> },
  { label: 'Exchange Rate History', component: <ExchangeRateHistory /> },
  { label: 'Finance', component: <FinanceSettings /> },
  { label: 'Inventory', component: <InventorySettings /> },
  { label: 'Fixed Asset', component: <FixedAssetsSettings /> },
  { label: 'General', component: <GeneralEntitySettings /> },
];


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box >
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

const EntityMasterDetailed = ({setPage,detailPageId}) => {
 
 
  const [profileName, setprofileName] = useState({sName:"null",iId:null})
 
  const [openRoleInProfile, setOpenRoleInProfile] = useState(false);
  const [openLoadFrom, setOpenLoadFrom] = useState(false);
  const [openHistory, setOpenHistory] = useState(false);
  const [openCustomize, setOpenCustomize] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [select, setSelect] = React.useState([]);
  const [selectedOption, setSelectedOption] = React.useState(0);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const { currentTheme } = useTheme();
  const buttonStyle ={
    backgroundColor: currentTheme.secondaryColor,
    color: currentTheme.sideBarTextColor1,
    textTransform: 'none',
    padding: "1px",
    '&:hover': {
      backgroundColor: currentTheme.secondaryColor, // Change as needed
      color: currentTheme.sideBarTextColor1 // Example hover color change
    },
    
  }

  const handleChild = (data) => {
    console.log(data);
  };

  const handleRowClick = (row) => {

    const data=[{menu:"Create profile",action:"Access",status:"Added"},{menu:"Create profile",action:"Access",status:"Added"},{menu:"Create profile",action:"Access",status:"Added"},{menu:"Create profile",action:"Access",status:"Added"},{menu:"Create profile",action:"Access",status:"Added"},{menu:"Create profile",action:"Access",status:"Added"},{menu:"Create profile",action:"Access",status:"Added"},{menu:"Create profile",action:"Access",status:"Added"},{menu:"Create profile",action:"Access",status:"Added"},{menu:"Create profile",action:"Access",status:"Added"},{menu:"Create profile",action:"Access",status:"Added"},{menu:"Create profile",action:"Access",status:"Added"},{menu:"Create profile",action:"Access",status:"Added"},{menu:"Create profile",action:"Access",status:"Added"},{menu:"Create profile",action:"Access",status:"Added"},{menu:"Create profile",action:"Access",status:"Added"},{menu:"Create profile",action:"Access",status:"Added"},{menu:"Create profile",action:"Access",status:"Added"},{menu:"Create profile",action:"Access",status:"Added"},{menu:"Create profile",action:"Access",status:"Added"}]
    setSelectedRow(data);
    
  };
 
  const handleIconsClick =(value) => {
        switch (value.trim()) {
          case "new":
            handleAdd()
            break;
          case "close":
            handleclose()
            break;
          case "GetRolesInProfile":
            handleGetRolesInProfile()  
            break;
          case "GetLoadFrom":
            handleLoadFrom()  
            break;  
          case "GetHistory":
            handleLoadHistory()  
            break;  
          case "customize":
            handleOpenCustomize()  
            break;      
          default:
            break;
        }
  }
  // Handlers for your icons
  const handleAdd = () => {
    setPage("new")
  };
  const  handleclose=()=>{
    setPage("summary")
  }
  const handleGetRolesInProfile = ()=>{
    
      setOpenRoleInProfile(true)
  } 
  const handleCloseGetRolesInProfile = ()=>{
    setOpenRoleInProfile(false)
  }
  const handleLoadFrom = ()=>{
    
    setOpenLoadFrom(true)
  }
  const handleCloseLoadFrom = ()=>{
    
    setOpenLoadFrom(false)
  }
  const handleLoadHistory = ()=>{
   
    setOpenHistory(true)
  }
  const handleCloseLoadHistory = ()=>{
    
    setOpenHistory(false)
  }
  const handleOpenCustomize = ()=>{
   
    setOpenCustomize(true)
  }
  const handleCloseCustomize = ()=>{
    
    setOpenCustomize(false)
  }



 
 

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%",height:"85vh", overflowY: "auto",
      scrollbarWidth: "thin", }}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          paddingLeft: 1.5,
          paddingRight: 1.5,
        }}
      >
        <BasicBreadcrumbs currentTheme={currentTheme} />
        <DefaultIcons
          detailPageId={detailPageId}
          iconsClick={handleIconsClick}
          currentTheme={currentTheme}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          overflowX: "auto",
          display: "flex",
          flexDirection: "column",
          height: "83vh",
          overflowY: "auto",
          scrollbarWidth: "thin",
          paddingBottom: "30px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            marginX: "auto",
            display: "flex",
            flexDirection: "column",
            paddingTop: "10px",
            boxShadow:'5px 2px 4px 4px rgba(128, 128, 128, 0.3)'  ,
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{paddingBottom:"10px"}}
          >
            <Tab sx={{ textTransform: "none" }} label="Entity Details" />
            <Tab sx={{ textTransform: "none" }} label="Entity Settings" />
          </Tabs>
          <TabPanel value={value} index={0}>
            <EntityMasterDetailTab />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Box sx={{ display: "flex", height: "100%",boxShadow:'5px 2px 4px 4px rgba(128, 128, 128, 0.3)'  , }}>
              <List
                component="nav"
                sx={{ width: "140px", borderRight: "1px solid #ccc",padding:0 }}
              >
                {options.map((option, index) => (
                  <ListItemButton
                    key={option.label}
                    selected={selectedOption === index}
                    onClick={() => setSelectedOption(index)}
                    sx={{
                      "& .MuiTypography-root": { fontSize: "12px" }, // Adjust font size here
                       // Adding padding to make the clickable area larger
                    }}
                  >
                    <ListItemText primary={option.label} />
                  </ListItemButton>
                ))}
              </List>
              {options[selectedOption] && (
                <Box sx={{ flex: 1, }}>
                  {options[selectedOption].component}
                </Box>
              )}
            </Box>
          </TabPanel>
        </Box>
      </Box>
    </Box>
  );
}

export default EntityMasterDetailed;
