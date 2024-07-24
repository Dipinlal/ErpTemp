import React, { useState } from "react";
import {
  Box,
  CssBaseline,
  Divider,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
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

import AutoComplete2 from "../../../components/AutoComplete/AutoComplete2";
import CheckBox1 from "../../../components/CheckBox/CheckBox1";
import { entityList } from "../../../config/securityConfig";
import RoleSelect1 from "../../../components/Select/RoleSelect1";
import SettingsIcon from "@mui/icons-material/Settings";
import { useTheme } from "../../../config/themeContext";

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

export default function InventorySettings(args) {
  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState(false);
  const [isInfo, setIsInfo] = useState(false);
  const [infoHide, setInfoHide] = useState(false);
  const [detailPage, setDetailPage] = useState(false);
  const [more, setMore] = React.useState(false);
  const handleMoreOpen = () => setMore(true);
  const handleMoreClose = () => setMore(false);
  const [expanded, setExpanded] = React.useState("panel1");
  const [days, setDays] = React.useState('1');

  const handleChangeday = (event) => {
    setDays(event.target.value);
  };

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
      sx={{ display: "flex", alignItems: "center", fontSize: "1rem" }} // Reduce font size
      key="1"
      color="white"
      onClick={handleClick}
    >
      <SettingsIcon sx={{ mr: 0.5 }} fontSize="inherit" />
      Settings
    </Link>,
     <Link
     underline="hover"
     sx={{ display: "flex", alignItems: "center", fontSize: "1rem" }} // Reduce font size
     key="1"
     color="white"
     onClick={handleClick}
   >
    
     Entity Settings
   </Link>,
    

    <Typography key="4" color="white" sx={{ fontSize: "1rem" }}>
      Inventory
    </Typography>,
  ];
  const getBorderColor = () => {
    return localStorage.getItem('color') === 'true' ? '#fff' : '#000';
  };

  const {currentTheme} = useTheme()
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
            backgroundColor: secondryColor,
          }}
        >
          {/* <Stack spacing={2} sx={{ flex: 1 }}>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
              style={{ color: primaryButtonColor }}
            >
              {breadcrumbs}
            </Breadcrumbs>
          </Stack> */}

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
            {/* <IconButton
              aria-label="Clone"
              sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
            >
              <Stack direction="column" alignItems="center">
                <SaveIcon style={{ color: "white" }} />
                <Typography
                  variant="caption"
                  align="center"
                  style={{ color: "white", fontSize: "0.6rem" }}
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
                <CloseIcon style={{ color: "white" }} />
                <Typography
                  variant="caption"
                  align="center"
                  style={{ color: "white", fontSize: "0.6rem" }}
                >
                  Close
                </Typography>
              </Stack>
            </IconButton> */}
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
              <Typography style={{ fontSize: "14px" }}>
                Inventory Preference
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <>
                <div>
                  <MDBCardBody>
                    <MDBRow>
                    <MDBCol lg="6" md="6" sm="12" xs="12">
                        <CheckBox1 label="Do not refresh description with Account/Item in document" />
                      </MDBCol>
                      <MDBCol lg="6" md="6" sm="12" xs="12">
                        <CheckBox1 label="Show exchange rate difference in ledger" />
                      </MDBCol>
                      <MDBCol lg="6" md="6" sm="12" xs="12">
                        <CheckBox1 label="Create master in transaction entry" />
                      </MDBCol>
                      <MDBCol lg="6" md="6" sm="12" xs="12">
                        <CheckBox1 label="Stay on same voucher number after deleting" />
                      </MDBCol>
                      <MDBCol lg="6" md="6" sm="12" xs="12">
                        <CheckBox1 label="Enable Negative Check" />
                      </MDBCol>
                      <MDBCol lg="6" md="6" sm="12" xs="12">
                        <CheckBox1 label="Reorder Level Check" />
                      </MDBCol>
                      <MDBCol lg="6" md="6" sm="12" xs="12">
                        <CheckBox1 label="Main Stock Qty and Value by Inv Tag" />
                      </MDBCol>
                      <MDBCol lg="6" md="6" sm="12" xs="12">
                        <CheckBox1 label="Main Stock Qty by Inv Tag and Value by Entity" />
                      </MDBCol>
                      <MDBCol lg="6" md="6" sm="12" xs="12">
                        <CheckBox1 label="Maintain quantity and value by Entity" />
                      </MDBCol>
                      <MDBCol lg="6" md="6" sm="12" xs="12">
                        <CheckBox1 label="Maintain Alter native Qty" />
                      </MDBCol>
                      <MDBCol lg="6" md="6" sm="12" xs="12">
                        <CheckBox1 label="Include Units in Transaction" />
                      </MDBCol>
                      <MDBCol lg="6" md="6" sm="12" xs="12">
                        <CheckBox1 label="Update GRN Stock Value through Purchase" />
                      </MDBCol>
                    </MDBRow>
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
                      <Typography variant="body1">Batch</Typography>
                      <Box
                        sx={{
                          borderBottom: "1px dotted ",
                          borderBottmColor: getBorderColor(),
                          marginLeft: "8px", // Adjust spacing to your preference
                        }}
                      />
                    </Box>
                    <MDBRow>
                      <MDBCol lg="6" md="6" sm="12" xs="12">
                        <CheckBox1 label="Enable Batch" />
                      </MDBCol>
                      <MDBCol lg="6" md="6" sm="12" xs="12">
                        <CheckBox1 label="Do not accept duplicate batches in inwards documents" />
                      </MDBCol>
                      <MDBCol lg="6" md="6" sm="12" xs="12">
                        <CheckBox1 label="Allow negative batch quantities" />
                      </MDBCol>
                      <MDBCol lg="6" md="6" sm="12" xs="12">
                        <CheckBox1 label="Expiry dates for batches" />
                      </MDBCol>
                      <MDBCol lg="6" md="6" sm="12" xs="12">
                        <CheckBox1 label="Expiry dates optional" />
                      </MDBCol>
                      <MDBCol lg="6" md="6" sm="12" xs="12" style={{ display: 'flex', alignItems: 'center' }}>
                        <CheckBox1 label="Cannot sell batches that would expire in next" />
                        <TextField
          size="small"
          variant="outlined"
          style={{ width: 60,padding:0, marginRight: 10 }}
          InputProps={{
            style: {
              height: 25,
             
              fontSize: '12px'
            }
          }}
          
        />
        <FormControl size="small" style={{ width: 90 }}>
         
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={days}
            onChange={handleChangeday}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            style={{
              height: 25,
              width:85,
              fontSize: '12px',
              paddingTop: 0,
              paddingBottom: 0
            }}
          >
            <MenuItem value={1}>Day</MenuItem>
            <MenuItem value={2}>Month</MenuItem>
            <MenuItem value={3}>Year</MenuItem>
          </Select>
        </FormControl>
                      </MDBCol>
                      <MDBCol lg="6" md="6" sm="12" xs="12">
                        <CheckBox1 label="Manufacturing dates by Batches" />
                      </MDBCol>
                      <MDBCol lg="6" md="6" sm="12" xs="12">
                        <CheckBox1 label="Do not club batches with different MFd date/expiry" />
                      </MDBCol>
                      <MDBCol lg="6" md="6" sm="12" xs="12">
                        <CheckBox1 label="Sort batches by expiry date" />
                      </MDBCol>
                      <MDBCol lg="6" md="6" sm="12" xs="12">
                        <CheckBox1 label="Load all details related to the batch into issues" />
                      </MDBCol>
                      <MDBCol lg="6" md="6" sm="12" xs="12">
                        <CheckBox1 label="Load screen field details related to batch into issues" />
                      </MDBCol>
                      <MDBCol lg="6" md="6" sm="12" xs="12">
                        <CheckBox1 label="Load layout field details related to batch into issues" />
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </div>
              </>
            </AccordionDetails>
          </Accordion>
        </div>
      </React.StrictMode>
    </>
  );
}
