import React, { useState } from "react";
import { Box, CssBaseline, IconButton, TextField, styled } from "@mui/material";



import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import HomeIcon from "@mui/icons-material/Home";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
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

import GetAppIcon from "@mui/icons-material/GetApp";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import ClearAllIcon from "@mui/icons-material/ClearAll";
import AutoComplete2 from "../../../../../components/AutoComplete/AutoComplete2";
import AccountInput1 from "../../../../../components/Inputs/AccountInput1";
import { useTheme } from "../../../../../config/themeContext";

import CurrencyEntityTable from "./CurrencyEntityTable";
import CurrencyLanguage1 from "../Currencylanguage1";
import { CustomScroll } from "react-custom-scroll";
import SearchBox2 from "../../../../../components/SearchBox/SearchBox2";

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

export default function CurrencyMaster(args) {
  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState(false);
  const [isInfo, setIsInfo] = useState(false);
  const [infoHide, setInfoHide] = useState(false);
  const [detailPage, setDetailPage] = useState(false);
  const [more, setMore] = React.useState(false);
  const handleMoreOpen = () => setMore(true);
  const handleMoreClose = () => setMore(false);
  const [expanded, setExpanded] = React.useState("panel1");
  const [select, setSelect] = React.useState([]);
  const [accountName, setAccountName] = React.useState("");
  const [selectedOption, setSelectedOption] = React.useState('');

  const [rows, setRows] = useState([
    {
      id: 1,
      entity: "",
      decimals: "",
      roundOff: "",
      roundingType: "",
      connector:""
    },
  ]);
  const [coinsName, setCoinsName] = useState("");
  const [currencySubUnit, setCurrencySubUnit] = useState("");
  const [connector, setConnector] = useState("");
  const [selectedEntity, setSelectedEntity] = React.useState([]);

  // Handle changes for new fields
const handleCoinsNameChange = (event) => {
  setCoinsName(event.target.value);
};

const handleCurrencySubUnitChange = (event) => {
  setCurrencySubUnit(event.target.value);
};

const handleConnectorChange = (event) => {
  setConnector(event.target.value);
};

 

  const handleEntityChange = (index, value) => {
    const newRows = [...rows];
    newRows[index].entity = value;
    setRows(newRows);
  };

  const handleDecimalsChange = (index, value) => {
    const newRows = [...rows];
    newRows[index].decimals = value;
    setRows(newRows);
  };

  const handleRoundOffChange = (index, value) => {
    const newRows = [...rows];
    newRows[index].roundOff = value;
    setRows(newRows);
  };

  const handleRoundingTypeChange = (index, value) => {
    const newRows = [...rows];
    newRows[index].roundingType = value;
    setRows(newRows);
  };

  const handleAddRow = () => {
    const newRows = [
      ...rows,
      {
        id: rows.length + 1,
        entity: "",
        decimals: "",
        roundOff: "",
        roundingType: "",
      },
    ];
    setRows(newRows);
  };

  const handleRemoveRow = (index) => {
    if (rows.length > 1) {
      const newRows = [...rows];
      newRows.splice(index, 1);
      setRows(newRows);
    }
  };


  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const { currentTheme } = useTheme();

  const handleAccountNameChange = (event) => {
    setAccountName(event.target.value);
  };

  const language = [
    { title: "English", iId: 1 },
    { title: "Arabic", iId: 2 },
    { title: "Spanish", iId: 3 },
  ];

  const BusinessUnit = [
    { title: "Unit1", iId: 1 },
    { title: "Unit3", iId: 2 },
    { title: "Unit3", iId: 3 },
  ];
  const handleChild = (data) => {
    console.log(data);
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
       <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
       Home
    </Link>,
    <Link
      underline="hover"
      key="2"
     
      sx={{ display: "flex", alignItems: "center", fontSize: "1rem",color: currentTheme.actionIcons, }}
      onClick={handleClick}
    >
      Master
    </Link>,

    <Typography key="4" color="white" sx={{ fontSize: "1rem",color: currentTheme.actionIcons, }}>
      Currency Master
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
              separator={
                <NavigateNextIcon
                  fontSize="small"
                  sx={{ color: currentTheme.actionIcons }}
                />
              }
              aria-label="breadcrumb"
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
              aria-label="New"
              sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
            >
              <Stack direction="column" alignItems="center">
                <GetAppIcon style={{ color: currentTheme.actionIcons }} />
                <Typography
                  variant="caption"
                  align="center"
                  style={{
                    color: currentTheme.actionIcons,
                    fontSize: "0.6rem",
                  }}
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
                <SwapHorizIcon style={{ color: currentTheme.actionIcons }} />

                <Typography
                  variant="caption"
                  align="center"
                  style={{
                    color: currentTheme.actionIcons,
                    fontSize: "0.6rem",
                  }}
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
                <ClearAllIcon style={{ color: currentTheme.actionIcons }} />

                <Typography
                  variant="caption"
                  align="center"
                  style={{
                    color: currentTheme.actionIcons,
                    fontSize: "0.6rem",
                  }}
                >
                  Clear
                </Typography>
              </Stack>
            </IconButton>
            <IconButton
              aria-label="Clone"
              sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
            >
              <Stack direction="column" alignItems="center">
                <SaveIcon style={{ color: currentTheme.actionIcons }} />
                <Typography
                  variant="caption"
                  align="center"
                  style={{
                    color: currentTheme.actionIcons,
                    fontSize: "0.6rem",
                  }}
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
                <CloseIcon style={{ color: currentTheme.actionIcons }} />
                <Typography
                  variant="caption"
                  align="center"
                  style={{
                    color: currentTheme.actionIcons,
                    fontSize: "0.6rem",
                  }}
                >
                  Close
                </Typography>
              </Stack>
            </IconButton>
          </Stack>
        </Box>
        {/* <Box
          sx={{
            width: "95%",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            paddingTop: "10px",
          }}
        >
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
        </Box> */}

        <div>
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
                Currency Details
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <>
                <div>
                  <MDBCardBody>
                    <MDBRow>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="ISO Currency Code" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AccountInput1 label="Coins Name" value={coinsName} onChange={handleCoinsNameChange} />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AccountInput1
                          label="Currency Name"
                          value={accountName}
                          onChange={handleAccountNameChange}
                        />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Numeric Seperator" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Symbol" />
                      </MDBCol>

                      {/* <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AccountInput label="Number of Decimal" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AccountInput label="General Round Off" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AutoComplete2 autoLabel="Rounding Type" />
                      </MDBCol> */}
                      {/* <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AccountInput label="Currency Unit" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AccountInput label="Currency Unit Alias" />
                      </MDBCol> */}
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AccountInput1 label="Currency Sub Unit" value={currencySubUnit} onChange={handleCurrencySubUnitChange} />
                      </MDBCol>
                      {/* <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AccountInput label="Currency Sub Unit Alias" />
                      </MDBCol> */}
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AccountInput1 label="Connector" value={connector} onChange={handleConnectorChange} />
                      </MDBCol>
                      {/* <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AccountInput label="Connector Alias" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AccountInput label="Denomination Code" />
                      </MDBCol>
                      <MDBCol lg="3" md="4" sm="6" xs="12">
                        <AccountInput label="Denomination Value" />
                      </MDBCol> */}
                    </MDBRow>
                    <MDBRow>
                      <CurrencyEntityTable
                        rows={rows}
                        onEntityChange={handleEntityChange}
                        onDecimalsChange={handleDecimalsChange}
                        onRoundOffChange={handleRoundOffChange}
                        onRoundingTypeChange={handleRoundingTypeChange}
                        onAddRow={handleAddRow}
                        onRemoveRow={handleRemoveRow}
                        
                      />
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
          <Typography style={{ fontSize: "14px" }}>Round of Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <>
            <div>
              <MDBCardBody>
                <MDBRow>
                <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="General Round Off" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                <AutoComplete2 autoLabel="Rounding Type" />
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
          <Typography style={{ fontSize: "14px" }}>Currency Connector</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <>
            <div>
              <MDBCardBody>
                <MDBRow>
                <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Currency Unit" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Currency Unit Alias" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Currency Sub Unit" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Currency Sub Unit Alias" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Connector" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Connector Alias" />
                  </MDBCol>
                 
                </MDBRow>
              </MDBCardBody>
            </div>
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
          <Typography style={{ fontSize: "14px" }}>Denominal Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <>
            <div>
              <MDBCardBody>
                <MDBRow>
                <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Denomination Code" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Denomination Value" />
                  </MDBCol>
                  
                 
                </MDBRow>
              </MDBCardBody>
            </div>
          </>
        </AccordionDetails>
      </Accordion> */}
          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              aria-controls="panel5d-content"
              id="panel5d-header"
              expanded={expanded === "panel5"}
              currentTheme={currentTheme}
            >
              <Typography style={{ fontSize: "14px" }}>Language</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <MDBCardBody>
                {/* <MDBRow>
              <MDBCol lg="3" md="4" sm="6" xs="12">
                <div
                  style={{
                    width: "auto",
                    flexDirection: "column",
                    height: "200px",
                    overflowY: "auto",
                    margin: "16px 0",
                    border: "1px solid #969999",
                    padding: "0 10px",
                    boxSizing: "border-box",
                    borderRadius: 5,
                  }}
                >
                  <CustomScroll heightRelativeToParent="100%">
                    <Typography style={{ fontSize: "14px", color: "gray" }}>
                      Language
                    </Typography>
                    <SearchBox
                      initialItems={language }
                      selected={select}
                      params={"projects"}
                      handleChild={handleChild}
                    />
                  </CustomScroll>
                </div>
              </MDBCol>
            </MDBRow> */}
                {/* <CurrencyLanguage accountName={accountName}   coinsName={coinsName}
                currencySubUnit={currencySubUnit}
                connector={connector} /> */}
                <CurrencyLanguage1  currencyName1={accountName}   coinsName1={coinsName}
                currencySubUnit1={currencySubUnit}
                connector1={connector} />
              </MDBCardBody>
            </AccordionDetails>
          </Accordion>
          {/* <Accordion
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          >
            <AccordionSummary
              aria-controls="panel6d-content"
              id="panel6d-header"
              expanded={expanded === "panel6"}
              currentTheme={currentTheme}
            >
              <Typography style={{ fontSize: "14px" }}>
                Business Unit
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <MDBCardBody>
                <MDBRow>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <div
                      style={{
                        width: "auto",
                        flexDirection: "column",
                        height: "200px",
                        overflowY: "auto",
                        margin: "16px 0",
                        border: "1px solid #969999",
                        padding: "0 10px",
                        boxSizing: "border-box",
                        borderRadius: 5,
                      }}
                    >
                      <CustomScroll heightRelativeToParent="100%">
                        <Typography style={{ fontSize: "14px", color: "gray" }}>
                          Business Unit
                        </Typography>
                        <SearchBox
                          initialItems={BusinessUnit}
                          selected={select}
                          params={"projects"}
                          handleChild={handleChild}
                        />
                      </CustomScroll>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </AccordionDetails>
          </Accordion> */}
           <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary
          aria-controls="panel7d-content"
          id="panel7d-header"
          expanded={expanded === "panel7"}
          currentTheme={currentTheme}
        >
          <Typography style={{ fontSize: "14px" }}>Business Entity</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MDBCardBody>
            <MDBRow>
              <MDBCol lg="3" md="4" sm="6" xs="12">
                <div
                  style={{
                    width: "auto",
                    flexDirection: "column",
                    height: "200px",
                    overflowY: "auto",
                    margin: "16px 0",
                    border: "1px solid #969999",
                    padding: "0 10px",
                    boxSizing: "border-box",
                    borderRadius: 5,
                  }}
                >
                  <CustomScroll heightRelativeToParent="100%">
                    <Typography style={{ fontSize: "14px", color: "gray" }}>
                      Business Entity
                    </Typography>
                    <SearchBox2
                      initialItems={BusinessUnit }
                      selected={selectedEntity}
                      handleChild={handleChild}
                    />
                  </CustomScroll>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </AccordionDetails>
      </Accordion>
        </div>
      </React.StrictMode>
    </>
  );
}
