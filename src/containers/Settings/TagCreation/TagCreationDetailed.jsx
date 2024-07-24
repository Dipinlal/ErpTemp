import React, { useState } from "react";
import {
  Box,
  CssBaseline,
  Divider,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
  styled,
} from "@mui/material";
import { Collapse, Button, CardBody, Card, Alert } from "reactstrap";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import Tree1 from "../../../components/Tree/Tree1";
import {
  primaryButtonColor,
  primaryColor,
  secondryColor,
  thirdColor,
} from "../../../config";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import EditIcon from "@mui/icons-material/Edit";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Backdrop from "@mui/material/Backdrop";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SaveIcon from "@mui/icons-material/Save";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import GroupsIcon from "@mui/icons-material/Groups";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import EventBusyIcon from "@mui/icons-material/EventBusy";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import SystemUpdateAltIcon from "@mui/icons-material/SystemUpdateAlt";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import ReorderIcon from "@mui/icons-material/Reorder";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Checkbox, FormControlLabel } from "@mui/material";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import HandymanIcon from '@mui/icons-material/Handyman';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import AutoComplete2 from "../../../components/AutoComplete/AutoComplete2";
import CheckBox1 from "../../../components/CheckBox/CheckBox1";
import { entityList } from "../../../config/securityConfig";
import RoleSelect1 from "../../../components/Select/RoleSelect1";
import SettingsIcon from "@mui/icons-material/Settings";
import { useTheme } from "../../../config/themeContext";
import AccountInput from "../../../components/Inputs/AccountInput";
import AccountInput1 from "../../../components/Inputs/AccountInput1";
import MasterDefinition from "../MasterSettings/MasterDefinition";
import MasterCustomization from "../MasterSettings/MasterCustomization";
import CustomizationView from "../MasterSettings/CustomizationView";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const actions = [
  { icon: <GroupAddIcon />, name: "Group" },
  { icon: <DeleteSweepIcon />, name: "Delete All" },
  // { icon: <EventBusyIcon />, name: "Close Account" },
  // { icon: <FolderOpenIcon />, name: "Open Close Account" },
  { icon: <SystemUpdateAltIcon />, name: "Mass Update" },
  { icon: <HomeRepairServiceIcon />, name: "Customize Master" },
  { icon: <SettingsApplicationsIcon />, name: "Customize View" },
  { icon: <AccountTreeIcon />, name: "Customize Tree" },
  { icon: <ReorderIcon />, name: "Backtrack" },
  { icon: <TransferWithinAStationIcon />, name: "Transfer" },
];

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
  },
  "& .MuiSvgIcon-root": {
    fontSize: "1.5rem",
    color: currentTheme.sideBarTextColor1,
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  paddingLeft: theme.spacing(3),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));
const TagCreationDetailed = ({setPage,detailPageId}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState(false);
  const [isInfo, setIsInfo] = useState(false);
  const [infoHide, setInfoHide] = useState(false);
  const [detailPage, setDetailPage] = useState(false);
  const [more, setMore] = React.useState(false);
  const handleMoreOpen = () => setMore(true);
  const handleMoreClose = () => setMore(false);
  const [expanded, setExpanded] = React.useState("panel1");
  const [selectedOption, setSelectedOption] = React.useState('');

  const {currentTheme} = useTheme()

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const toggleOpen = () => {
    setIsOpen(true);
    setHide(true);
  };
  const toggleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setHide(false);
    }, 400);
  };

  const infoPanelOpen = () => {
    setIsInfo(true);
    setInfoHide(true);
  };

  const infoPanelClose = () => {
    setIsInfo(false);
    setTimeout(() => {
      setInfoHide(false);
    }, 400);
  };

  const handleDetailPageOpen = () => {
    setDetailPage(true);
  };

  const handleDetailPageClose = () => {
    setDetailPage(false);
  };

  const handleClose = () => {
    setPage("summary")
  };

  const breadcrumbs = [
    <Link
      underline="hover"
      sx={{ display: "flex", alignItems: "center", fontSize: "1rem",color: currentTheme.actionIcons, }} // Reduce font size
      key="1"
      color="white"
      onClick={handleClick}
    >
      <SettingsIcon sx={{ mr: 0.5 }} fontSize="inherit" />
      Settings
    </Link>,
    
    

    <Typography key="4" color="white" sx={{ fontSize: "1rem",color: currentTheme.actionIcons, }}>
       Tag Creation
    </Typography>,
  ];

  

  return (
    <>
      <CssBaseline />

      <React.StrictMode>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            paddingLeft: 1.5,
            paddingRight: 1.5,
            zIndex: 1,
            // backgroundColor: secondryColor,
          }}
        >
          <Stack spacing={2} sx={{ flex: 1 }}>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small"  sx={{color: currentTheme.actionIcons,}}/>}
              aria-label="breadcrumb"
              style={{ color: primaryButtonColor }}
            >
              {breadcrumbs}
            </Breadcrumbs>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{ flex: "0 0 auto" }}
          >
           
            <IconButton
              aria-label="Clone"
              sx={{ fontSize: "0.8rem", padding: "0.5rem",color: currentTheme.actionIcons, }}
            >
              <Stack direction="column" alignItems="center">
                <SaveIcon style={{ color: currentTheme.actionIcons, }} />
                <Typography
                  variant="caption"
                  align="center"
                  style={{fontSize: "0.6rem",color: currentTheme.actionIcons, }}
                >
                  Save
                </Typography>
              </Stack>
            </IconButton>

            <IconButton
              onClick={handleClose}
              aria-label="Close"
              sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
            >
              <Stack direction="column" alignItems="center">
                <CloseIcon style={{ color: currentTheme.actionIcons}} />
                <Typography
                  variant="caption"
                  align="center"
                  style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                >
                  Close
                </Typography>
              </Stack>
            </IconButton>
          </Stack>
        </Box>
        <div>
        <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              expanded={expanded === "panel1"}
              currentTheme={currentTheme}
            >
              <Typography style={{ fontSize: "14px" }}>General</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <>
              <MDBCardBody>
              {/* <MDBRow>
                      
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput1 label="Name"  mandatory={1}/>
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Caption"   mandatory={1}/>
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                          <CheckBox1 label="Visible" />
                        </MDBCol>
                        <MDBCol lg="3" md="4" sm="6" xs="12">
                          <CheckBox1 label="Allow duplicate names" />
                        </MDBCol>
                        <MDBCol lg="3" md="4" sm="6" xs="12">
                          <CheckBox1 label="Allow revision" />
                        </MDBCol>
                        <MDBCol lg="3" md="4" sm="6" xs="12">
                          <CheckBox1 label="Allow multi language" />
                        </MDBCol>
                        <MDBCol lg="3" md="4" sm="6" xs="12">
                          <CheckBox1 label="isDefault" />
                        </MDBCol>
                        
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                          <FormControlLabel
                            control={
                              <Checkbox
                                sx={{
                                  transform: "scale(0.9)",
                                  paddingTop: 1,
                                }}
                              />
                            }
                            label="Default SearchBy"
                            sx={{
                              "& .MuiFormControlLabel-label": {
                                fontSize: "0.9rem",
                                color: "gray",
                              },
                            }}
                          />
                          <div style={{ paddingLeft: 40 }}>
                            <MDBCol lg="3" md="4" sm="6" xs="12">
                              <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="radio-buttons-group"
                                sx={{ "& .MuiSvgIcon-root": { fontSize: 14 } }} // Adjust the size of the radio button icon
                              >
                                <FormControlLabel
                                  value="Req"
                                  control={<Radio />} // Adjust the size of the radio button itself
                                  label="Name"
                                  sx={{
                                    "& .MuiFormControlLabel-label": {
                                      fontSize: "0.8rem", // Adjust the label font size
                                      color: "gray", // Change the label color to gray
                                    },
                                    margin: 0,
                                    padding: 0,
                                  }}
                                />
                                <FormControlLabel
                                  value="Code"
                                  control={<Radio />} // Adjust the size of the radio button itself
                                  label="Code"
                                  sx={{
                                    "& .MuiFormControlLabel-label": {
                                      fontSize: "0.8rem", // Adjust the label font size
                                      color: "gray", // Change the label color to gray
                                    },
                                    margin: 0,
                                    padding: 0,
                                  }}
                                />

                                
                                
                              </RadioGroup>
                            </MDBCol>
                          </div>
                        </MDBCol>
                    
                    
                  
              
                   

                 
                </MDBRow> */}
                
                <MasterDefinition detailPageId={detailPageId}/>
                </MDBCardBody>
              </>
            </AccordionDetails>
          </Accordion> 
          {detailPageId == 1 &&<>
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
         
        </>}
        </div>
      </React.StrictMode>
    </>
  );
}



export default TagCreationDetailed;
