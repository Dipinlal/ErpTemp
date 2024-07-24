import React, { useState } from "react";
import {
  Box,
  CssBaseline,
  FormGroup,
  IconButton,
  Popover,
  TextField,
  styled,
} from "@mui/material";
import { Collapse, Button, CardBody, Card, Alert } from "reactstrap";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import Tree1 from "../../../../../components/Tree/Tree1";
import {
  primaryButtonColor,
  primaryColor,
  secondryColor,
  thirdColor,
} from "../../../../../config";
import { accountTree } from "../../../../../config/masterConfig";
import TableAccounts from "../../../../../components/Tables/TableAccounts";
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
import AccountInput from "../../../../../components/Inputs/AccountInput";
import AutocompleteSecurity from "../../../../../components/AutoComplete/AutocompleteSecurity";
import GetAppIcon from "@mui/icons-material/GetApp";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import AutoComplete2 from "../../../../../components/AutoComplete/AutoComplete2";
import SellerPriceBookTable from "./SellerPriceBookTable";
import PostAddIcon from "@mui/icons-material/PostAdd";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import SelectAllIcon from "@mui/icons-material/SelectAll";
import HandymanIcon from "@mui/icons-material/Handyman";
import PopupState, { bindPopover, bindTrigger } from "material-ui-popup-state";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const buttonStyle = {
  textTransform: "none", // Set text transform to none for normal case
  color: `${primaryButtonColor}`, // Set text color
  backgroundColor: `${thirdColor}`, // Set background color
  boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
  margin: 3,
  fontSize: "12px",
  padding: "6px 10px",
};

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
))(({ theme }) => ({
  color: primaryButtonColor,
  backgroundColor: thirdColor,
  flexDirection: "row",
  justifyContent: "space-between",
  "& .MuiAccordionSummary-content": {
    flexGrow: 1,
  },
  "& .MuiSvgIcon-root": {
    fontSize: "1.5rem",
    color: primaryButtonColor,
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  paddingLeft: theme.spacing(3),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  gap: 100,
}));

export default function SellerPriceBook(args) {
  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState(false);
  const [isInfo, setIsInfo] = useState(false);
  const [infoHide, setInfoHide] = useState(false);
  const [detailPage, setDetailPage] = useState(false);
  const [more, setMore] = React.useState(false);
  const handleMoreOpen = () => setMore(true);
  const handleMoreClose = () => setMore(false);
  const [expanded, setExpanded] = React.useState("panel1");

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
      <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="white"
      sx={{ fontSize: "1rem" }}
      onClick={handleClick}
    >
      Master
    </Link>,
    <Link
      underline="hover"
      key="3"
      color="white"
      sx={{ fontSize: "1rem" }}
      onClick={handleClick}
    >
      Product
    </Link>,
    <Typography key="4" color="white" sx={{ fontSize: "1rem" }}>
      Seller Price Book
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
            backgroundColor: secondryColor,
          }}
        >
          <Stack spacing={2} sx={{ flex: 1 }}>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
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
              aria-label="Append"
              sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
            >
              <Stack direction="column" alignItems="center">
                <PostAddIcon style={{ color: "white" }} />
                <Typography
                  variant="caption"
                  align="center"
                  style={{ color: "white", fontSize: "0.6rem" }}
                >
                  Append
                </Typography>
              </Stack>
            </IconButton>
            <IconButton
              aria-label="Clear"
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
            </IconButton>
            <IconButton
              aria-label="paste"
              sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
            >
              <Stack direction="column" alignItems="center">
                <ContentPasteIcon style={{ color: "white" }} />

                <Typography
                  variant="caption"
                  align="center"
                  style={{ color: "white", fontSize: "0.6rem" }}
                >
                  Paste
                </Typography>
              </Stack>
            </IconButton>
            <IconButton
              aria-label="Copy"
              sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
            >
              <Stack direction="column" alignItems="center">
                <FileCopyIcon style={{ color: "white" }} />
                <Typography
                  variant="caption"
                  align="center"
                  style={{ color: "white", fontSize: "0.6rem" }}
                >
                  Copy
                </Typography>
              </Stack>
            </IconButton>
            <IconButton
              aria-label="SelectAll"
              sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
            >
              <Stack direction="column" alignItems="center">
                <SelectAllIcon style={{ color: "white" }} />
                <Typography
                  variant="caption"
                  align="center"
                  style={{ color: "white", fontSize: "0.6rem" }}
                >
                  Select All
                </Typography>
              </Stack>
            </IconButton>

            <IconButton
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
              aria-label="Delete"
              sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
            >
              <Stack direction="column" alignItems="center">
                <DeleteIcon style={{ color: "white" }} />

                <Typography
                  variant="caption"
                  align="center"
                  style={{ color: "white", fontSize: "0.6rem" }}
                >
                  Delete
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
            </IconButton>
          </Stack>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            padding: 2,
          }}
        >
          <AutoComplete2 autoLabel="Price Book" />
          <AccountInput label="Abbreviation" />

          <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
              <div>
                <IconButton
                  aria-label="options"
                  {...bindTrigger(popupState)}
                  sx={{ padding: 0, fontSize: "1.2rem" }}
                >
                  <HandymanIcon sx={{ fontSize: "1.2rem" }} />
                </IconButton>
                <Popover
                  {...bindPopover(popupState)}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                  <FormGroup sx={{ padding: 1 }}>
                    {" "}
                    {/* Adjust the font size here */}
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{ transform: "scale(0.75)", paddingTop: 0.7 }}
                        />
                      } // Reduce the size of the checkbox
                      label="Date Range"
                      sx={{
                        "& .MuiFormControlLabel-label": {
                          fontSize: "0.8rem", // Adjust the label font size
                          color: "gray", // Change the label color to gray
                        },
                      }}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{ transform: "scale(0.75)", paddingTop: 0.7 }}
                        />
                      } // Reduce the size of the checkbox
                      label="Vendor"
                      sx={{
                        "& .MuiFormControlLabel-label": {
                          fontSize: "0.8rem", // Adjust the label font size
                          color: "gray", // Change the label color to gray
                        },
                      }}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{ transform: "scale(0.75)", paddingTop: 0.7 }}
                        />
                      } // Reduce the size of the checkbox
                      label="Department"
                      sx={{
                        "& .MuiFormControlLabel-label": {
                          fontSize: "0.8rem", // Adjust the label font size
                          color: "gray", // Change the label color to gray
                        },
                      }}
                    />
                        <FormControlLabel
                      control={
                        <Checkbox
                          sx={{ transform: "scale(0.75)", paddingTop: 0.7 }}
                        />
                      } // Reduce the size of the checkbox
                      label="Qty Range"
                      sx={{
                        "& .MuiFormControlLabel-label": {
                          fontSize: "0.8rem", // Adjust the label font size
                          color: "gray", // Change the label color to gray
                       
                        },
                      }}
                    />
                        <FormControlLabel
                      control={
                        <Checkbox
                          sx={{ transform: "scale(0.75)", paddingTop: 0.7 }}
                        />
                      } // Reduce the size of the checkbox
                      label="Currency"
                      sx={{
                        "& .MuiFormControlLabel-label": {
                          fontSize: "0.8rem", // Adjust the label font size
                          color: "gray", // Change the label color to gray
                       
                        },
                      }}
                    />
                        <FormControlLabel
                      control={
                        <Checkbox
                          sx={{ transform: "scale(0.75)", paddingTop: 0.7 }}
                        />
                      } // Reduce the size of the checkbox
                      label="Unit"
                      sx={{
                        "& .MuiFormControlLabel-label": {
                          fontSize: "0.8rem", // Adjust the label font size
                          color: "gray", // Change the label color to gray
                       
                        },
                      }}
                    />
                  </FormGroup>
                </Popover>
              </div>
            )}
          </PopupState>
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
          >
            <Typography style={{ fontSize: "14px" }}>Filter</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <>
              <div>
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol lg="3" md="4" sm="6" xs="12">
                      <AccountInput label="Start Date" type="date" />
                    </MDBCol>

                    <MDBCol lg="3" md="4" sm="6" xs="12">
                      <AccountInput label="End Date" type="date" />
                    </MDBCol>

                    <MDBCol lg="3" md="4" sm="6" xs="12">
                      <AutoComplete2 autoLabel="Item" />
                    </MDBCol>

                    <MDBCol lg="3" md="4" sm="6" xs="12">
                      <AutoComplete2 autoLabel="Currency" />
                    </MDBCol>
                    <MDBCol lg="3" md="4" sm="6" xs="12">
                      <AutoComplete2 autoLabel="Customer" />
                    </MDBCol>
                    <MDBCol lg="3" md="4" sm="6" xs="12">
                      <AutoComplete2 autoLabel="Department" />
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </div>

              <Stack
                direction="row"
                spacing={1}
                padding={1}
                justifyContent="flex-end"
              >
                <Button variant="contained" style={buttonStyle}>
                  Clear
                </Button>
                <Button variant="contained" style={buttonStyle}>
                  Filter
                </Button>
                <Button variant="contained" style={buttonStyle}>
                  Filter & Load
                </Button>
              </Stack>
            </>
          </AccordionDetails>
        </Accordion>
        <SellerPriceBookTable />
      </React.StrictMode>
    </>
  );
}
