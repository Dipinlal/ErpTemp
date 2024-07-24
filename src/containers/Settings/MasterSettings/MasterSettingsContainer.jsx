import React from 'react'
import { styled } from "@mui/material/styles";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import SettingsIcon from "@mui/icons-material/Settings";
import HandymanIcon from '@mui/icons-material/Handyman';
import {
  primaryButtonColor,
  secondryColor,
  thirdColor,
} from "../../../config";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";

import {
  Box,

  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  Stack,
} from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import SaveIcon from "@mui/icons-material/Save";
import {
  AddCircleOutline,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Close as CloseIcon,
  InfoOutlined,
  Language,
  FormatListBulleted,
} from "@mui/icons-material";
import GroupRemoveIcon from '@mui/icons-material/GroupRemove';
import PersonIcon from "@mui/icons-material/Person";
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ChecklistIcon from "@mui/icons-material/Checklist";
import WidgetsIcon from "@mui/icons-material/Widgets";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import LockIcon from "@mui/icons-material/Lock";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useEffect } from "react";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Alert, Collapse,Button } from 'reactstrap';
import AutoComplete2 from '../../../components/AutoComplete/AutoComplete2';
import Tree1 from '../../../components/Tree/Tree1';
import { accountTree } from '../../../config/masterConfig';
import { createProfileTree } from '../../../config/securityConfig';
import MasterDefinition from './MasterDefinition';
import MasterCustomization from './MasterCustomization';
import CustomizationView from './CustomizationView';
import TreeCustomization from './TreeCustomization';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { useTheme } from '../../../config/themeContext';
import PrintIcon from "@mui/icons-material/Print";
import GetAppIcon from "@mui/icons-material/GetApp";
import FileUploadIcon from '@mui/icons-material/FileUpload';



const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      props.expanded ? <RemoveCircleOutlineIcon /> : <AddCircleOutlineIcon />
    }
    {...props}
  />
))(({ theme,currentTheme }) => ({
  color: currentTheme.sideBarTextColor1,
  backgroundColor: currentTheme.secondaryColor,
  flexDirection: "row",
  justifyContent: "space-between",
  "& .MuiAccordionSummary-content": {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
  },
  "& .MuiSvgIcon-root": {
    fontSize: "1.5rem",
    color: currentTheme.sideBarTextColor1,
    marginRight: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  paddingLeft: theme.spacing(3),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

function BasicBreadcrumbs({currentTheme}) {
  return (
    <div
      role="presentation"
      style={{
        display: "flex",
        flexDirection: "row",
        maxWidth: "fit-content",
        alignItems: "center",
      }}
    >
      <Stack spacing={2} sx={{ flex: 1 }}>
        <Breadcrumbs
          // sx={{
          //       "& .MuiBreadcrumbs-separator": { mx: -0.0 }, // Reducing space around the separator
          //       "& .MuiTypography-root": { mr: -0.0, ml: -0.0 } // Adjusting text margins
          //     }}
          separator={
            <NavigateNextIcon
              fontSize="small"
              sx={{color: currentTheme.actionIcons,}}
            />
          }
          aria-label="breadcrumb"
        >
          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center", fontSize: "1rem",color: currentTheme.actionIcons, }} // Reduce font size
            key="1"
            color="white"
          >
            <SettingsIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Settings
          </Link>
          
          <Typography key="3" color="white" sx={{ fontSize: "1rem",color: currentTheme.actionIcons }}>
           Master Settings
          </Typography>
          ,
        </Breadcrumbs>
      </Stack>
    </div>
  );
}
const DefaultIcons = ({ iconsClick,currentTheme }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: "5px" }}>
      
      
      
      
      
      <IconButton
        aria-label="New"
        sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
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
              aria-label="New"
              sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
            >
              <Stack direction="column" alignItems="center">
                <FileUploadIcon style={{ color: currentTheme.actionIcons, }} />
                <Typography
                  variant="caption"
                  align="center"
                  style={{color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                >
                  Export
                </Typography>
              </Stack>
            </IconButton>
    
              <IconButton
              aria-label="New"
              sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
            >
              <Stack direction="column" alignItems="center">
                <GetAppIcon style={{ color: currentTheme.actionIcons, }} />
                <Typography
                  variant="caption"
                  align="center"
                  style={{color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                >
                  Import
                </Typography>
              </Stack>
            </IconButton>
  
        
    
      <IconButton
        aria-label="New"
        sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
        onClick={() => iconsClick("close")}
      >
        <Stack direction="column" alignItems="center">
          <CloseIcon sx={{ color: currentTheme.actionIcons }} />
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


const uploadIconstyle = {
  color: thirdColor, // Set the icon color
  backgroundColor: "#fff", // Set a background color
  borderRadius: "50%", // Make the button round
  padding: "5px", // Padding to make the icon look bigger and floating
  boxShadow: "0px 4px 12px rgba(0,0,0,0.2)", // Add shadow to make it look floating
};


function MasterSettingsContainer() {

    const [expanded, setExpanded] = React.useState("panel1");
    
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
      };
      const handleclose = () => {
        window.history.back();
      };
      const handleIconsClick = (value) => {
        switch (value.trim()) {
          case "new":
            handleAdd();
            break;
          case "close":
            handleclose();
            break;
          case "Loadfrom":
            handleLoadFrom();
            break;
          default:
            break;
        }
      };  


      const { currentTheme } = useTheme();

      
  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%"}}>
        
      <Box
        sx={{
          width: "100%",
          overflowX: "hidden",
          display: "flex",
          flexDirection: "column",
          // maxHeight: "60vh",
          overflowY: "auto",
          scrollbarWidth: "thin",
          paddingBottom: "30px",
          
        }}
      >
        <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          boxShadow:'5px 2px 4px 4px rgba(128, 128, 128, 0.3)'  ,
          paddingLeft: 1.5,
          paddingRight: 1.5,
          zIndex:10
        }}
      >
        <BasicBreadcrumbs  currentTheme={currentTheme}/>
        <DefaultIcons
        
          iconsClick={handleIconsClick} currentTheme={currentTheme}
        />
      </Box>
       
          <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
            className
            expanded={expanded === "panel1"}
            sx={{ alignItems: "center" }}
            currentTheme={currentTheme}
          >
            <IconButton
              sx={{ fontSize: "0.8rem", padding: "0rem" }}
              //onClick={()=>iconsClick("close")}
            >
              <Stack direction="column" alignItems="center">
                <PersonIcon sx={{ color: currentTheme.actionIcons }} />
              </Stack>
            </IconButton>
            <Typography style={{ fontSize: "14px" }}>
              Definition
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <>
              <div>
                <MDBCardBody>
                {/* <Box sx={{ display:"flex",justifyContent:"right" }}>
        
        <IconButton
        aria-label="Add group"
        sx={{ fontSize: "0.3rem", padding: "0.5rem" }}
      >
        <Stack direction="column" alignItems="center">
          <GroupAddIcon style={{ color: currentTheme.actionIcons,}} />

          <Typography
            variant="caption"
            align="center"
            style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
          >
            Add Group
          </Typography>
        </Stack>
      </IconButton>
        <IconButton
          aria-label="Add group"
          sx={{ fontSize: "0.3rem", padding: "0.5rem" }}
        >
          <Stack direction="column" alignItems="center">
            <GroupRemoveIcon style={{ color: currentTheme.actionIcons,}} />

            <Typography
              variant="caption"
              align="center"
              style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
            >
              Delete Group
            </Typography>
          </Stack>
        </IconButton>
</Box> */}
                  <MasterDefinition/>
               
                </MDBCardBody>
              </div>
            </>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            aria-controls="panel2d-content"
            id="panel2d-header"
            className
            expanded={expanded === "panel2"}
            sx={{ alignItems: "center" }}
            currentTheme={currentTheme}
          >
            <IconButton
              sx={{ fontSize: "0.8rem", padding: "0rem" }}
              //onClick={()=>iconsClick("close")}
            >
              <Stack direction="column" alignItems="center">
                <HandymanIcon sx={{ color: currentTheme.actionIcons }} />
              </Stack>
            </IconButton>
            <Typography style={{ fontSize: "14px" }}>
              Customization
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <>
              <div>
                <MDBCardBody>
              
                  
                  <MasterCustomization />
                </MDBCardBody>
              </div>
            </>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            aria-controls="panel3d-content"
            id="panel3d-header"
            className
            expanded={expanded === "panel3"}
            sx={{ alignItems: "center" }}
            currentTheme={currentTheme}
          >
            <IconButton
              sx={{ fontSize: "0.8rem", padding: "0rem" }}
              //onClick={()=>iconsClick("close")}
            >
              <Stack direction="column" alignItems="center">
                <ViewModuleIcon sx={{ color: currentTheme.actionIcons }} />
              </Stack>
            </IconButton>
            <Typography style={{ fontSize: "14px" }}>
              Views
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <>
              <div>
                <MDBCardBody>
                  <CustomizationView />
                </MDBCardBody>
              </div>
            </>
          </AccordionDetails>
        </Accordion>
        {/* <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            aria-controls="panel4d-content"
            id="panel4d-header"
            className
            expanded={expanded === "panel4"}
            sx={{ alignItems: "center" }}
            currentTheme={currentTheme}
          >
            <IconButton
              sx={{ fontSize: "0.8rem", padding: "0rem" }}
              //onClick={()=>iconsClick("close")}
            >
              <Stack direction="column" alignItems="center">
                <AccountTreeIcon sx={{ color: currentTheme.actionIcons }} />
              </Stack>
            </IconButton>
            <Typography style={{ fontSize: "14px" }}>
              Tree Customization
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <>
              <div>
                <MDBCardBody>
                  <TreeCustomization/>
                </MDBCardBody>
              </div>
            </>
          </AccordionDetails>
        </Accordion> */}
        
      </Box>
    </Box>
  )
}

export default MasterSettingsContainer