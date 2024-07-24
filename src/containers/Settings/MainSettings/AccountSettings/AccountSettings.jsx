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
import Tree1 from "../../../../components/Tree/Tree1";
import {
  primaryButtonColor,
  primaryColor,
  secondryColor,
  thirdColor,
} from "../../../../config";
import { accountTree } from "../../../../config/masterConfig";
import TableAccounts from "../../../../components/Tables/TableAccounts";
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
import AccountInput from "../../../../components/Inputs/AccountInput";
import AutocompleteSecurity from "../../../../components/AutoComplete/AutocompleteSecurity";
import GetAppIcon from "@mui/icons-material/GetApp";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import AutoComplete2 from "../../../../components/AutoComplete/AutoComplete2";
import CheckBox1 from "../../../../components/CheckBox/CheckBox1";
import AccountSettingsTable from "./AccountSettingsTable";
import { entityList } from "../../../../config/securityConfig";
import RoleSelect1 from "../../../../components/Select/RoleSelect1";
import TagTable from "../TagSettings/TagTable";
import SettingsIcon from "@mui/icons-material/Settings";
import { useTheme } from "../../../../config/themeContext";

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
))(({ theme,currentTheme  }) => ({
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

export default function AccountSettings(args) {
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

  const { currentTheme } = useTheme();

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
    window.history.back();
  };

  const breadcrumbs = [
    <Link
      underline="hover"
      sx={{ display: "flex", alignItems: "center", fontSize: "1rem",color: currentTheme.actionIcons, }} // Reduce font size
      key="1"
      
      onClick={handleClick}
    >
      <SettingsIcon sx={{ mr: 0.5,color: currentTheme.actionIcons,}} fontSize="inherit" />
      Settings
    </Link>,
   

    <Typography key="4" color="white" sx={{ fontSize: "1rem",color: currentTheme.actionIcons, }}>
      General Settings
    </Typography>,
  ];
  const getBorderColor = () => {
    return localStorage.getItem('color') === 'true' ? '#fff' : '#000';
  };
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
              separator={<NavigateNextIcon fontSize="small" sx={{color: currentTheme.actionIcons,}} />}
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
            {/* <IconButton
              aria-label="New"
              sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
            >
              <Stack direction="column" alignItems="center">
                <GetAppIcon style={{ color: "white" }} />
                <Typography
                  variant="caption"
                  align="center"
                  style={{ color: "white", fontSize: "0.6rem" }}
                >
                  Import
                </Typography>
              </Stack>
            </IconButton>
            <IconButton
              aria-label="Add group"
              sx={{ fontSize: "0.3rem", padding: "0.5rem" }}
            >
              <Stack direction="column" alignItems="center">
                <SwapHorizIcon style={{ color: "white" }} />

                <Typography
                  variant="caption"
                  align="center"
                  style={{ color: "white", fontSize: "0.6rem" }}
                >
                  Exchange Rate
                </Typography>
              </Stack>
            </IconButton>
            <IconButton
              aria-label="Edit"
              sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
            >
              <Stack direction="column" alignItems="center">
                <ClearAllIcon style={{ color: "white" }} />

                <Typography
                  variant="caption"
                  align="center"
                  style={{ color: "white", fontSize: "0.6rem" }}
                >
                  Clear
                </Typography>
              </Stack>
            </IconButton> */}
            <IconButton
              aria-label="Clone"
              sx={{ fontSize: "0.8rem", padding: "0.5rem", }}
            >
              <Stack direction="column" alignItems="center">
                <SaveIcon style={{ color: currentTheme.actionIcons,}} />
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
                <CloseIcon style={{ color: currentTheme.actionIcons, }} />
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
          {/* <Box sx={{ width:"97%",margin: 'auto',display:"flex",flexDirection:"column",paddingTop:"10px",paddingBottom:"10px"}}>
        <MDBCardBody>
                <MDBRow>
                  
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <RoleSelect1
                    label="Business Entity"
                    value={selectedOption}
                    onChange={handleSelectChange}
                    options={entityList}
                  />
                  </MDBCol>
                  </MDBRow>
              </MDBCardBody>
              </Box>     */}
          {/* <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              className
              expanded={expanded === "panel1"}
              currentTheme={currentTheme}
            >
              <Typography style={{ fontSize: "14px" }}>
                Tag Management
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <>
                <div>
                  <MDBCardBody>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                        paddingTop: "10px",
                        flexWrap: "wrap", // Allow items to wrap onto multiple lines
                      }}
                    >
                      <TagTable />
                    </Box>
                  </MDBCardBody>
                </div>
              </>
            </AccordionDetails>
          </Accordion> */}
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
              className
              expanded={expanded === "panel1"}
              currentTheme={currentTheme}
            >
              <Typography style={{ fontSize: "14px" }}>
              Account Tag Management
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <>
                <div>
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Accounting Tag" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Accounting Tag1" />
                      </MDBCol>

                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Accounting Tag2" />
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "auto 1fr",
                      alignItems: "center",
                      width: "100%",
                      mt: 3,
                      mb: 3,
                    }}
                  >
                    <Typography variant="body1">Account Mapping</Typography>
                    <Box
                     sx={{
                      borderBottom: "1px dotted ",
                      borderBottmColor: getBorderColor(),
                      marginLeft: "8px", // Adjust spacing to your preference
                    }}
                    />
                  </Box>
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Asset Groups" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Cash and Group" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Customer Group" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Vendor Group" />
                      </MDBCol>

                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Control A/C" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Depreciation and Amortization" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Expenses Group" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Foregin Exchange Gain A/C" />
                      </MDBCol>

                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Foregin Exchange Loss A/C" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="General and Administration Expenses" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Income Taxes A/C" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Incomes Group" />
                      </MDBCol>

                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Liabilities Group" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Other Expenses A/C" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Petty-Cash Expenses Group" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Profit / loss A/C" />
                      </MDBCol>

                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Purchases Group" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Sales Group" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="TDS Account" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Margin Account" />
                      </MDBCol>

                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Round off for Exchange gain/loss" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12"></MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <FormControlLabel
                          control={
                            <Checkbox
                              sx={{ transform: "scale(0.75)", paddingTop: 2 }}
                            />
                          } // Reduce the size of the checkbox
                          label="Check Negative Cash Balance"
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "0.8rem", // Adjust the label font size
                              color: "gray", // Change the label color to gray
                              paddingTop: 1,
                            },
                          }}
                        />
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          name="radio-buttons-group"
                          sx={{ "& .MuiSvgIcon-root": { fontSize: 14 } }} // Adjust the size of the radio button icon
                        >
                          <FormControlLabel
                            value="Warn and Allow"
                            control={<Radio />} // Adjust the size of the radio button itself
                            label="Warn and Allow"
                            sx={{
                              "& .MuiFormControlLabel-label": {
                                fontSize: "0.7rem", // Adjust the label font size
                                color: "gray", // Change the label color to gray
                              },
                              margin: 0,
                              padding: 0,
                            }}
                          />

                          <FormControlLabel
                            value="Stop"
                            control={<Radio />} // Adjust the size of the radio button itself
                            label="Stop"
                            sx={{
                              "& .MuiFormControlLabel-label": {
                                fontSize: "0.7rem", // Adjust the label font size
                                color: "gray", // Change the label color to gray
                              },
                              margin: 0,
                              padding: 0,
                            }}
                          />
                        </RadioGroup>
                      </MDBCol>

                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <FormControlLabel
                          control={
                            <Checkbox
                              sx={{ transform: "scale(0.75)", paddingTop: 2 }}
                            />
                          } // Reduce the size of the checkbox
                          label="Check Negative Cash by Tag"
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "0.8rem", // Adjust the label font size
                              color: "gray", // Change the label color to gray
                              paddingTop: 1,
                            },
                          }}
                        />
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          name="radio-buttons-group"
                          sx={{ "& .MuiSvgIcon-root": { fontSize: 14 } }} // Adjust the size of the radio button icon
                        >
                          <FormControlLabel
                            value="Warn and Allow"
                            control={<Radio />} // Adjust the size of the radio button itself
                            label="Warn and Allow"
                            sx={{
                              "& .MuiFormControlLabel-label": {
                                fontSize: "0.7rem", // Adjust the label font size
                                color: "gray", // Change the label color to gray
                              },
                              margin: 0,
                              padding: 0,
                            }}
                          />

                          <FormControlLabel
                            value="Stop"
                            control={<Radio />} // Adjust the size of the radio button itself
                            label="Stop"
                            sx={{
                              "& .MuiFormControlLabel-label": {
                                fontSize: "0.7rem", // Adjust the label font size
                                color: "gray", // Change the label color to gray
                              },
                              margin: 0,
                              padding: 0,
                            }}
                          />
                        </RadioGroup>
                      </MDBCol>

                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <FormControlLabel
                          control={
                            <Checkbox
                              sx={{ transform: "scale(0.75)", paddingTop: 2 }}
                            />
                          } // Reduce the size of the checkbox
                          label="General Info"
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "0.8rem", // Adjust the label font size
                              color: "gray", // Change the label color to gray
                              paddingTop: 1,
                            },
                          }}
                        />
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          name="radio-buttons-group"
                          sx={{ "& .MuiSvgIcon-root": { fontSize: 14 } }} // Adjust the size of the radio button icon
                        >
                          <FormControlLabel
                            value="Warn and Allow"
                            control={<Radio />} // Adjust the size of the radio button itself
                            label="Do not balance stock transfers when posting to FA"
                            sx={{
                              "& .MuiFormControlLabel-label": {
                                fontSize: "0.7rem", // Adjust the label font size
                                color: "gray", // Change the label color to gray
                              },
                              margin: 0,
                              padding: 0,
                            }}
                          />

                          <FormControlLabel
                            value="Stop"
                            control={<Radio />} // Adjust the size of the radio button itself
                            label="Restrict account based on Department"
                            sx={{
                              "& .MuiFormControlLabel-label": {
                                fontSize: "0.7rem", // Adjust the label font size
                                color: "gray", // Change the label color to gray
                              },
                              margin: 0,
                              padding: 0,
                            }}
                          />
                        </RadioGroup>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </div>
              </>
            </AccordionDetails>
          </Accordion>
          {/* <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              aria-controls="panel2d-content"
              id="panel2d-header"
              expanded={expanded === "panel2"}
            >
              <Typography style={{ fontSize: "14px" }}>
                Account Mapping
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <>
                <div>
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Asset Groups" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Cash and Group" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Customer Group" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Vendor Group" />
                      </MDBCol>

                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Control A/C" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Depreciation and Amortization" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Expenses Group" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Foregin Exchange Gain A/C" />
                      </MDBCol>

                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Foregin Exchange Loss A/C" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="General and Administration Expenses" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Income Taxes A/C" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Incomes Group" />
                      </MDBCol>

                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Liabilities Group" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Other Expenses A/C" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Petty-Cash Expenses Group" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Profit / loss A/C" />
                      </MDBCol>

                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Purchases Group" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Sales Group" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="TDS Account" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Margin Account" />
                      </MDBCol>

                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Round off for Exchange gain/loss" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12"></MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <FormControlLabel
                          control={
                            <Checkbox
                              sx={{ transform: "scale(0.75)", paddingTop: 2 }}
                            />
                          } // Reduce the size of the checkbox
                          label="Check Negative Cash Balance"
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "0.8rem", // Adjust the label font size
                              color: "gray", // Change the label color to gray
                              paddingTop: 1,
                            },
                          }}
                        />
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          name="radio-buttons-group"
                          sx={{ "& .MuiSvgIcon-root": { fontSize: 14 } }} // Adjust the size of the radio button icon
                        >
                          <FormControlLabel
                            value="Warn and Allow"
                            control={<Radio />} // Adjust the size of the radio button itself
                            label="Warn and Allow"
                            sx={{
                              "& .MuiFormControlLabel-label": {
                                fontSize: "0.7rem", // Adjust the label font size
                                color: "gray", // Change the label color to gray
                              },
                              margin: 0,
                              padding: 0,
                            }}
                          />

                          <FormControlLabel
                            value="Stop"
                            control={<Radio />} // Adjust the size of the radio button itself
                            label="Stop"
                            sx={{
                              "& .MuiFormControlLabel-label": {
                                fontSize: "0.7rem", // Adjust the label font size
                                color: "gray", // Change the label color to gray
                              },
                              margin: 0,
                              padding: 0,
                            }}
                          />
                        </RadioGroup>
                      </MDBCol>

                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <FormControlLabel
                          control={
                            <Checkbox
                              sx={{ transform: "scale(0.75)", paddingTop: 2 }}
                            />
                          } // Reduce the size of the checkbox
                          label="Check Negative Cash by Tag"
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "0.8rem", // Adjust the label font size
                              color: "gray", // Change the label color to gray
                              paddingTop: 1,
                            },
                          }}
                        />
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          name="radio-buttons-group"
                          sx={{ "& .MuiSvgIcon-root": { fontSize: 14 } }} // Adjust the size of the radio button icon
                        >
                          <FormControlLabel
                            value="Warn and Allow"
                            control={<Radio />} // Adjust the size of the radio button itself
                            label="Warn and Allow"
                            sx={{
                              "& .MuiFormControlLabel-label": {
                                fontSize: "0.7rem", // Adjust the label font size
                                color: "gray", // Change the label color to gray
                              },
                              margin: 0,
                              padding: 0,
                            }}
                          />

                          <FormControlLabel
                            value="Stop"
                            control={<Radio />} // Adjust the size of the radio button itself
                            label="Stop"
                            sx={{
                              "& .MuiFormControlLabel-label": {
                                fontSize: "0.7rem", // Adjust the label font size
                                color: "gray", // Change the label color to gray
                              },
                              margin: 0,
                              padding: 0,
                            }}
                          />
                        </RadioGroup>
                      </MDBCol>

                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <FormControlLabel
                          control={
                            <Checkbox
                              sx={{ transform: "scale(0.75)", paddingTop: 2 }}
                            />
                          } // Reduce the size of the checkbox
                          label="General Info"
                          sx={{
                            "& .MuiFormControlLabel-label": {
                              fontSize: "0.8rem", // Adjust the label font size
                              color: "gray", // Change the label color to gray
                              paddingTop: 1,
                            },
                          }}
                        />
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          name="radio-buttons-group"
                          sx={{ "& .MuiSvgIcon-root": { fontSize: 14 } }} // Adjust the size of the radio button icon
                        >
                          <FormControlLabel
                            value="Warn and Allow"
                            control={<Radio />} // Adjust the size of the radio button itself
                            label="Do not balance stock transfers when posting to FA"
                            sx={{
                              "& .MuiFormControlLabel-label": {
                                fontSize: "0.7rem", // Adjust the label font size
                                color: "gray", // Change the label color to gray
                              },
                              margin: 0,
                              padding: 0,
                            }}
                          />

                          <FormControlLabel
                            value="Stop"
                            control={<Radio />} // Adjust the size of the radio button itself
                            label="Restrict account based on Department"
                            sx={{
                              "& .MuiFormControlLabel-label": {
                                fontSize: "0.7rem", // Adjust the label font size
                                color: "gray", // Change the label color to gray
                              },
                              margin: 0,
                              padding: 0,
                            }}
                          />
                        </RadioGroup>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </div>
              </>
            </AccordionDetails>
          </Accordion> */}

          {/* <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
              expanded={expanded === "panel3"}
            >
              <Typography style={{ fontSize: "14px" }}>AR/AP</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <>
                <MDBRow>
                  <MDBCol lg="6" md="6" sm="12" xs="12">
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="flex-start"
                    >
                      <Typography variant="p" color="gray" gutterBottom>
                        Maintain AR by
                      </Typography>
                      <MDBCardBody style={{ paddingLeft: 40 }}>
                        <MDBCol>
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <FormControlLabel
                              control={
                                <Checkbox
                                  sx={{
                                    transform: "scale(0.75)",
                                    paddingTop: 1,
                                  }}
                                />
                              }
                              label="Tag"
                              sx={{
                                "& .MuiFormControlLabel-label": {
                                  fontSize: "0.8rem",
                                  color: "gray",
                                },
                              }}
                            />
                            <AutoComplete2 autoLabel="" />
                          </div>
                        </MDBCol>
                      </MDBCardBody>
                      <MDBCardBody>
                        <MDBCol>
                          <FormControlLabel
                            control={
                              <Checkbox
                                sx={{
                                  transform: "scale(0.9)",
                                  paddingTop: 1,
                                }}
                              />
                            }
                            label="Enable Credit Limit check"
                            sx={{
                              "& .MuiFormControlLabel-label": {
                                fontSize: "0.9rem",
                                color: "gray",
                              },
                            }}
                          />
                          <div style={{ paddingLeft: 40 }}>
                            <MDBCol>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    sx={{
                                      transform: "scale(0.75)",
                                      paddingTop: 1,
                                    }}
                                  />
                                }
                                label="Include ‘Pending sales orders’ value in credit limit check"
                                sx={{
                                  "& .MuiFormControlLabel-label": {
                                    fontSize: "0.8rem",
                                    color: "gray",
                                  },
                                }}
                              />
                            </MDBCol>
                            <MDBCol>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    sx={{
                                      transform: "scale(0.75)",
                                      paddingTop: 1,
                                    }}
                                  />
                                }
                                label="Check Credit limit in orders"
                                sx={{
                                  "& .MuiFormControlLabel-label": {
                                    fontSize: "0.8rem",
                                    color: "gray",
                                  },
                                }}
                              />
                            </MDBCol>
                            <MDBCol>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    sx={{
                                      transform: "scale(0.75)",
                                      paddingTop: 1,
                                    }}
                                  />
                                }
                                label="Define Credit Limit by Department"
                                sx={{
                                  "& .MuiFormControlLabel-label": {
                                    fontSize: "0.8rem",
                                    color: "gray",
                                  },
                                }}
                              />
                            </MDBCol>
                            <MDBCol>
                              <Typography
                                style={{ fontSize: "0.8rem", color: "gray" }}
                              >
                                {" "}
                                When Credit limit exceeded
                              </Typography>
                              <div style={{ paddingLeft: 40 }}>
                                <MDBCol>
                                  <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group"
                                    sx={{
                                      "& .MuiSvgIcon-root": { fontSize: 14 },
                                    }}
                                  >
                                    <FormControlLabel
                                      value="Warn and Allow"
                                      control={<Radio />}
                                      label="Warn and Allow"
                                      sx={{
                                        "& .MuiFormControlLabel-label": {
                                          fontSize: "0.8rem",
                                          color: "gray",
                                        },
                                        margin: 0,
                                        padding: 0,
                                      }}
                                    />
                                    <FormControlLabel
                                      value="Stop"
                                      control={<Radio />}
                                      label="Stop"
                                      sx={{
                                        "& .MuiFormControlLabel-label": {
                                          fontSize: "0.8rem",
                                          color: "gray",
                                        },
                                        margin: 0,
                                        padding: 0,
                                      }}
                                    />
                                    <FormControlLabel
                                      value="Req"
                                      control={<Radio />}
                                      label="Request credit limit increase"
                                      sx={{
                                        "& .MuiFormControlLabel-label": {
                                          fontSize: "0.8rem",
                                          color: "gray",
                                        },
                                        margin: 0,
                                        padding: 0,
                                      }}
                                    />
                                  </RadioGroup>
                                </MDBCol>
                              </div>
                            </MDBCol>
                          </div>
                        </MDBCol>
                      </MDBCardBody>
                      <MDBCardBody>
                        <MDBCol>
                          <FormControlLabel
                            control={
                              <Checkbox
                                sx={{
                                  transform: "scale(0.9)",
                                  paddingTop: 1,
                                }}
                              />
                            }
                            label="Pick Credit day from"
                            sx={{
                              "& .MuiFormControlLabel-label": {
                                fontSize: "0.9rem",
                                color: "gray",
                              },
                            }}
                          />
                          <div style={{ paddingLeft: 40 }}>
                            <MDBCol>
                              <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="radio-buttons-group"
                                sx={{ "& .MuiSvgIcon-root": { fontSize: 14 } }}
                              >
                                <FormControlLabel
                                  value="Warn and Allow"
                                  control={<Radio />}
                                  label="Customer/Vendor A/C "
                                  sx={{
                                    "& .MuiFormControlLabel-label": {
                                      fontSize: "0.8rem",
                                      color: "gray",
                                    },
                                    margin: 0,
                                    padding: 0,
                                  }}
                                />
                              </RadioGroup>
                            </MDBCol>
                          </div>
                        </MDBCol>
                      </MDBCardBody>
                      <MDBCardBody>
                        <MDBCol>
                          <FormControlLabel
                            control={
                              <Checkbox
                                sx={{
                                  transform: "scale(0.9)",
                                  paddingTop: 1,
                                }}
                              />
                            }
                            label="Enable Credit days check"
                            sx={{
                              "& .MuiFormControlLabel-label": {
                                fontSize: "0.9rem",
                                color: "gray",
                              },
                            }}
                          />
                          <div style={{ paddingLeft: 40 }}>
                            <MDBCol>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    sx={{
                                      transform: "scale(0.75)",
                                      paddingTop: 1,
                                    }}
                                  />
                                }
                                label="Include pending sales orders value in credit days"
                                sx={{
                                  "& .MuiFormControlLabel-label": {
                                    fontSize: "0.8rem",
                                    color: "gray",
                                  },
                                }}
                              />
                            </MDBCol>
                            <MDBCol>
                              <FormControlLabel
                                control={
                                  <Checkbox
                                    sx={{
                                      transform: "scale(0.75)",
                                      paddingTop: 1,
                                    }}
                                  />
                                }
                                label="Check credit days in orders"
                                sx={{
                                  "& .MuiFormControlLabel-label": {
                                    fontSize: "0.8rem",
                                    color: "gray",
                                  },
                                }}
                              />
                            </MDBCol>
                            <MDBCol>
                              <Typography
                                style={{ fontSize: "0.8rem", color: "gray" }}
                              >
                                {" "}
                                When Credit limit exceeded
                              </Typography>
                              <div style={{ paddingLeft: 40 }}>
                                <MDBCol>
                                  <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group"
                                    sx={{
                                      "& .MuiSvgIcon-root": { fontSize: 14 },
                                    }}
                                  >
                                    <FormControlLabel
                                      value="Warn and Allow"
                                      control={<Radio />}
                                      label="Warn and Allow"
                                      sx={{
                                        "& .MuiFormControlLabel-label": {
                                          fontSize: "0.8rem",
                                          color: "gray",
                                        },
                                        margin: 0,
                                        padding: 0,
                                      }}
                                    />
                                    <FormControlLabel
                                      value="Stop"
                                      control={<Radio />}
                                      label="Stop"
                                      sx={{
                                        "& .MuiFormControlLabel-label": {
                                          fontSize: "0.8rem",
                                          color: "gray",
                                        },
                                        margin: 0,
                                        padding: 0,
                                      }}
                                    />
                                    <FormControlLabel
                                      value="Req"
                                      control={<Radio />}
                                      label="Request credit limit increase"
                                      sx={{
                                        "& .MuiFormControlLabel-label": {
                                          fontSize: "0.8rem",
                                          color: "gray",
                                        },
                                        margin: 0,
                                        padding: 0,
                                      }}
                                    />
                                  </RadioGroup>
                                </MDBCol>
                              </div>
                            </MDBCol>
                          </div>
                        </MDBCol>
                      </MDBCardBody>
                    </Box>
                  </MDBCol>
                  <MDBCol lg="6" md="6" sm="12" xs="12">
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="flex-start"
                    >
                      <Typography variant="p" color="gray" gutterBottom>
                        Maintain AP by
                      </Typography>
                      <MDBCardBody style={{ paddingLeft: 40 }}>
                        <MDBCol>
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <FormControlLabel
                              control={
                                <Checkbox
                                  sx={{
                                    transform: "scale(0.75)",
                                    paddingTop: 1,
                                  }}
                                />
                              }
                              label="Tag"
                              sx={{
                                "& .MuiFormControlLabel-label": {
                                  fontSize: "0.8rem",
                                  color: "gray",
                                },
                              }}
                            />
                            <AutoComplete2 autoLabel="" />
                          </div>
                        </MDBCol>
                      </MDBCardBody>
                    </Box>
                  </MDBCol>
                </MDBRow>
              </>
            </AccordionDetails>
          </Accordion> */}
          
          {/* <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              aria-controls="panel4d-content"
              id="panel4d-header"
              expanded={expanded === "panel4"}
            >
              <Typography style={{ fontSize: "14px" }}>
                Miscellaneous
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <>
                <MDBRow>
                  <MDBCol lg="6" md="6" sm="12" xs="12">
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="flex-start"
                    >
                      <MDBCardBody>
                       
                        <MDBCol>
                          <CheckBox1 label="Do not refresh description with Account/Item in document" />
                        </MDBCol>
                        <MDBCol>
                          <CheckBox1 label="Include un-committed transactions in reports" />
                        </MDBCol>
                        
                        <MDBCol>
                          <CheckBox1 label="Show Transaction data in FIFO order" />
                        </MDBCol>
                        <MDBCol>
                          <CheckBox1 label="Enable local currency" />
                        </MDBCol>
                        <MDBCol>
                          <AutoComplete2 autoLabel="Local currency" />
                        </MDBCol>
                        <MDBCol>
                          <CheckBox1 label="Do not show opening balance in nominal ledgers" />
                        </MDBCol>
                       
                        <MDBCol>
                          <CheckBox1 label="Show exchange rate difference in ledger" />
                        </MDBCol>
                        
                        <MDBCol>
                          <CheckBox1 label="Create master in transaction entry" />
                        </MDBCol>
                        <MDBCol>
                          <CheckBox1 label="Stay on same voucher number after deleting" />
                        </MDBCol>
                        <MDBCol>
                          <CheckBox1 label="Open search if master not found" />
                        </MDBCol>
                       
                      </MDBCardBody>
                    </Box>
                  </MDBCol>

                  <MDBCol lg="6" md="6" sm="12" xs="12">
                    
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="flex-start"
                    >
                      <MDBCardBody>
                        <MDBCol>
                          <AutoComplete2 autoLabel="Default calendar" />
                        </MDBCol>
                        <MDBCol>
                          <AutoComplete2 autoLabel="Default Currency" />
                        </MDBCol>
                        <MDBCol>
                          <AutoComplete2 autoLabel="Image format" />
                        </MDBCol>
                        <MDBCol>
                          <AutoComplete2 autoLabel="Numeric separator" />
                        </MDBCol>
                       
                      </MDBCardBody>
                      
                    </Box>
                  </MDBCol>
                </MDBRow>
              </>
            </AccordionDetails>
          </Accordion> */}
           <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}

          >
            <AccordionSummary
              aria-controls="panel3d-content"
              id="panel3d-header"
              expanded={expanded === "panel3"}
              currentTheme={currentTheme}
            >
              <Typography style={{ fontSize: "14px" }}>
                Inventory Tag Management
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <>
              <MDBCardBody>
                    <MDBRow>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Inventory Tag" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Inventory Tag1" />
                      </MDBCol>

                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Inventory Tag2" />
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
              </>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              aria-controls="panel4d-content"
              id="panel4d-header"
              expanded={expanded === "panel4"}
              currentTheme={currentTheme}
            >
              <Typography style={{ fontSize: "14px" }}>
                Fixed Asset Tag Management
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <>
              <MDBCardBody>
                    <MDBRow>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Fixed Asset Tag" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Fixed Asset Tag1" />
                      </MDBCol>

                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Fixed Asset Tag2" />
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
              </>
            </AccordionDetails>
          </Accordion>
        </div>
      </React.StrictMode>
    </>
  );
}
