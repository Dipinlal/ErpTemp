import React, { useEffect, useState, useRef } from "react";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";
import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  Stack,
  Tab,
  Tabs,
  TextField,
  Typography,
  Zoom,
  styled,
} from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBTextArea,
  MDBCardBody,
  MDBCard,
} from "mdb-react-ui-kit";

import { primaryButtonColor, thirdColor } from "../../../config";
import CustomerVendorDetails from "../../Home/Master/Account/CustomerVendor/CustomerVendorDetails";
import DoneIcon from "@mui/icons-material/Done";
import AccountInput from "../../../components/Inputs/AccountInput";
import AutoComplete2 from "../../../components/AutoComplete/AutoComplete2";
import CheckBox1 from "../../../components/CheckBox/CheckBox1";
import CheckBox2 from "../../../components/CheckBox/CheckBox2";
import PropTypes from "prop-types";
import CustomizationTable1 from "./CustomizationTable1";
import { useTheme } from "../../../config/themeContext";

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

function CustomTabPanel(props) {
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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ViewEditModal({ isOpen, handleCloseModal }) {
  const [expanded, setExpanded] = React.useState("panel1");
  const [value, setValue] = React.useState(0);
  const [hide, setHide] = useState(false);
  const [tab2, setTab2] = useState(0);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const modalStyle = {
    display: isOpen ? "block" : "none",
  };

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleTabChange2 = (event, newValue) => {
    setTab2(newValue);
  };

  const handleTabChecked = (event) => {
    setHide(event.target.checked);
  };

  const buttonStyle = {
    textTransform: "none",
    color: `${primaryButtonColor}`,
    backgroundColor: `${thirdColor}`,
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
    padding: "4px 6px", // Adjust padding to make the buttons smaller
    fontSize: "0.8rem", // Adjust font size to make the buttons smaller
  };

  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleCloseModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleCloseModal]);

  const { currentTheme } = useTheme();

  return (
    <div>
      <div
        className={`modal-backdrop fade ${isOpen ? "show" : ""}`}
        style={{
          display: isOpen ? "block" : "none",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        }}
      ></div>

      <Zoom in={isOpen} timeout={isOpen ? 400 : 300}>
        <div
          className={`modal ${isOpen ? "modal-open" : ""}`}
          style={modalStyle}
        >
          <div className="modal-dialog modal-dialog-centered modal-xl">
            <div
              className="modal-content"
              ref={modalRef}
              style={{
                maxHeight: "80vh",
                overflowY: "auto",
                scrollbarWidth: "thin",
              }}
            >
              <Stack
                direction="row"
                spacing={1}
                padding={2}
                justifyContent="flex-end"
                alignItems="center"
              >
                <Typography variant="body1" color="textSecondary" flexGrow={1}>
                  Main / Edit Extra Field
                </Typography>
                <Button
                  onClick={handleCloseModal}
                  variant="contained"
                  startIcon={<DoneIcon />}
                  style={{...buttonStyle,backgroundColor:currentTheme.thirdColor,color:currentTheme.tableHeaderColor}}
                >
                  Ok
                </Button>
                <Button
                  variant="contained"
                  onClick={handleCloseModal}
                  startIcon={<CloseIcon />}
                  style={{...buttonStyle,backgroundColor:currentTheme.thirdColor,color:currentTheme.tableHeaderColor}}
                >
                  Close
                </Button>
              </Stack>
              <div style={{ margin: 10 }}>
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
                      Field Details
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <>
                      <div>
                        <MDBCardBody>
                          <MDBRow>
                            <MDBCol lg={3}>
                              <AccountInput label="Caption" />
                            </MDBCol>
                            {/* <MDBCol lg={3}>
                              <AccountInput label="Name" />
                            </MDBCol>
                            <MDBCol lg={3}>
                              <AutoComplete2 autoLabel="DataType" />
                            </MDBCol> */}

                            <MDBCol lg={3}>
                              <AccountInput label="Default Value" />
                            </MDBCol>
                            {/* <MDBCol lg={3}>
                              <AccountInput label="Max Size" />
                            </MDBCol>
                            <MDBCol lg={3}>
                              <AutoComplete2 autoLabel="Control Type" />
                            </MDBCol> */}
                            {/* <MDBCol>
                              <AccountInput label="Banner Text" />
                            </MDBCol> */}
                           
                            {/* <MDBCol>
                              <AccountInput label="Tool Tip Text" />
                            </MDBCol> */}
                          </MDBRow>
                          {/* <MDBRow>
                            <Typography
                              sx={{ pt: 2 }}
                              variant="p"
                              color="gray"
                              gutterBottom
                            >
                              Validation
                            </Typography>
                            <MDBCol>
                              <AccountInput label="Regular Expression" />
                            </MDBCol>
                            <MDBCol>
                              <AccountInput label="Error Message" />
                            </MDBCol>
                          </MDBRow> */}
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
                    currentTheme={currentTheme}
                  >
                    <Typography style={{ fontSize: "14px" }}>
                      Properties
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <>
                      <div>
                        <MDBCardBody>
                        <MDBRow>
                        <MDBCol lg={3}>
                              <CheckBox2 label="Read only" />
                            </MDBCol>
                            <MDBCol lg={3}>
                              <CheckBox2 label="Mandatory" />
                            </MDBCol>
                            <MDBCol lg={3}>
                              <CheckBox2 label="Removed" />
                            </MDBCol>

                            <MDBCol lg={3}>
                              <CheckBox2 label="Hide left panel" />
                            </MDBCol>
                            <MDBCol lg={3}>
                              <CheckBox2 label="Hidden in group" />
                            </MDBCol>
                            <MDBCol lg={3}>
                              <CheckBox2 label="Mandatory in group" />
                            </MDBCol>
                            <MDBCol lg={3}>
                              <CheckBox2 label="Mandatory in revision" />
                            </MDBCol>
                            {/* <MDBCol>
                              <CheckBox2 label="Mass Update" />
                            </MDBCol> */}
                            
                          </MDBRow>
                          
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
                    currentTheme={currentTheme}
                  >
                    <Typography style={{ fontSize: "14px" }}>
                      Formatting
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <>
                      <div>
                        <MDBCardBody>
                          <MDBRow>
                            <MDBCol lg={3}>
                              <AccountInput label="Column span" />
                            </MDBCol>
                            <MDBCol lg={3}>
                              <AccountInput label="Row Span" />
                            </MDBCol>
                            {/* <MDBCol>
                              <AutoComplete2 autoLabel="Character Casing" />
                            </MDBCol>

                            <MDBCol>
                              <AutoComplete2 autoLabel="Text Align" />
                            </MDBCol>
                            <MDBCol>
                              <AccountInput label="Font" />
                            </MDBCol>
                            <MDBCol>
                              <TextField
                                margin="normal"
                                size="small"
                                id="search1"
                                type="color"
                                label="Back Color"
                                autoComplete="off"
                                autoFocus
                                sx={{
                                  width: 250, // Adjust the width as needed
                                  "& .MuiInputBase-root": {
                                    height: 30, // Adjust the height of the input area
                                  },
                                  "& .MuiInputLabel-root": {
                                    transform:
                                      "translate(10px, 5px) scale(0.9)", // Adjust label position when not focused
                                  },
                                  "& .MuiInputLabel-shrink": {
                                    transform:
                                      "translate(14px, -9px) scale(0.75)", // Adjust label position when focused
                                  },
                                  "& .MuiInputBase-input": {
                                    fontSize: "0.75rem", // Adjust the font size of the input text
                                  },
                                  "&.Mui-focused .MuiOutlinedInput-notchedOutline":
                                    {
                                      borderColor: "currentColor", // Keeps the current border color
                                    },
                                  "&:hover .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "currentColor", // Optional: Keeps the border color on hover
                                  },
                                }}
                              />
                            </MDBCol> */}
                          </MDBRow>
                        </MDBCardBody>
                      </div>
                    </>
                  </AccordionDetails>
                </Accordion>
{/* 
                <Accordion
                  expanded={expanded === "panel4"}
                  onChange={handleChange("panel4")}
                >
                  <AccordionSummary
                    aria-controls="panel4d-content"
                    id="panel4d-header"
                    className
                    expanded={expanded === "panel4"}
                  >
                    <Typography style={{ fontSize: "14px" }}>Rules</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <>
                      <div>
                        <MDBCardBody>
                          <Box
                            sx={{
                              width: "auto",

                              zIndex: 1,
                            }}
                          >
                            <Stack
                              direction="row"
                              spacing={1}
                              justifyContent="flex-end"
                            >
                              <IconButton
                                aria-label="New"
                                sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
                              >
                                <Stack direction="column" alignItems="center">
                                  <AddIcon style={{ color: thirdColor }} />
                                  <Typography
                                    variant="caption"
                                    align="center"
                                    style={{
                                      color: thirdColor,
                                      fontSize: "0.6rem",
                                    }}
                                  >
                                    New
                                  </Typography>
                                </Stack>
                              </IconButton>
                              <IconButton
                                aria-label="Save"
                                sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
                              >
                                <Stack direction="column" alignItems="center">
                                  <SaveIcon style={{ color: thirdColor }} />
                                  <Typography
                                    variant="caption"
                                    align="center"
                                    style={{
                                      color: thirdColor,
                                      fontSize: "0.6rem",
                                    }}
                                  >
                                    Save
                                  </Typography>
                                </Stack>
                              </IconButton>
                              <IconButton
                                aria-label="delete"
                                sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
                              >
                                <Stack direction="column" alignItems="center">
                                  <DeleteIcon style={{ color: thirdColor }} />
                                  <Typography
                                    variant="caption"
                                    align="center"
                                    style={{
                                      color: thirdColor,
                                      fontSize: "0.6rem",
                                    }}
                                  >
                                    Delete
                                  </Typography>
                                </Stack>
                              </IconButton>
                            </Stack>
                            <MDBRow>
                              <Typography
                                sx={{ pl: 2 }}
                                variant="p"
                                color="gray"
                                gutterBottom
                              >
                                Rules
                              </Typography>
                              <Divider
                                sx={{
                                  borderColor: "rgba(0, 0, 0, 0.3)",
                                  borderWidth: "1px",
                                }}
                              />

                              <MDBCol>
                                <AutoComplete2 autoLabel="Rule Name" />
                              </MDBCol>
                            </MDBRow>
                            <MDBRow>
                              <Typography
                                sx={{ pl: 2, pt: 2 }}
                                variant="p"
                                color="gray"
                                gutterBottom
                              >
                                Setting
                              </Typography>
                              <Divider
                                sx={{
                                  borderColor: "rgba(0, 0, 0, 0.3)",
                                  borderWidth: "1px",
                                }}
                              />
                            </MDBRow>
                            <MDBRow>
                              <Typography
                                sx={{ pl: 1, pt: 1, fontSize: 13 }}
                                variant="p"
                                color="gray"
                                gutterBottom
                              >
                                Apply On
                              </Typography>

                              <MDBCol lg="2" md="3" sm="6" xs="12">
                                <CheckBox2 label="Creating Groups" />
                              </MDBCol>
                              <MDBCol lg="2" md="3" sm="6" xs="12">
                                <CheckBox2 label="New Record" />
                              </MDBCol>
                              <MDBCol lg="2" md="3" sm="6" xs="12">
                                <CheckBox2 label="Edit" />
                              </MDBCol>
                            </MDBRow>
                            <MDBRow>
                              <Typography
                                sx={{ pl: 1, pt: 1, fontSize: 13 }}
                                variant="p"
                                color="gray"
                                gutterBottom
                              >
                                Evaluate On
                              </Typography>

                              <MDBCol lg="2" md="3" sm="6" xs="12">
                                <CheckBox2 label="Load" />
                              </MDBCol>
                              <MDBCol lg="2" md="3" sm="6" xs="12">
                                <CheckBox2 label="On Leave" />
                              </MDBCol>
                              <MDBCol lg="2" md="3" sm="6" xs="12">
                                <CheckBox2 label="On Enter" />
                              </MDBCol>
                              <MDBCol lg="2" md="3" sm="6" xs="12">
                                <CheckBox2 label="Before Save" />
                              </MDBCol>
                              <MDBCol lg="2" md="3" sm="6" xs="12">
                                <CheckBox2 label="Before Delete" />
                              </MDBCol>
                            </MDBRow>

                            <MDBRow>
                              <Typography
                                sx={{ pl: 1, pt: 1, fontSize: 13 }}
                                variant="p"
                                color="gray"
                                gutterBottom
                              >
                                Status
                              </Typography>

                              <MDBCol lg="2" md="3" sm="6" xs="12">
                                <CheckBox2 label="Active" />
                              </MDBCol>
                            </MDBRow>
                            <MDBRow>
                              <Box
                                sx={{
                                  display: "flex",
                                  justifyContent: "flex-end",
                                }}
                              >
                                <FormControlLabel
                                  control={
                                    <Checkbox
                                      onChange={(e) => handleTabChecked(e)}
                                      sx={{
                                        transform: "scale(0.75)",
                                        paddingTop: 1,
                                      }}
                                    />
                                  }
                                  label="No Condition"
                                  sx={{
                                    "& .MuiFormControlLabel-label": {
                                      fontSize: "0.75rem",
                                      color: "gray",
                                      width: "200px",
                                    },
                                  }}
                                />
                              </Box>
                            </MDBRow>

                            {!hide ? (
                              <MDBRow>
                                <Box sx={{ width: "100%" }}>
                                  <Box
                                    sx={{
                                      borderBottom: 1,
                                      borderColor: "divider",
                                    }}
                                  >
                                    <Tabs
                                      value={value}
                                      onChange={handleTabChange}
                                      aria-label="basic tabs example"
                                    >
                                      <Tab
                                        style={{ textTransform: "none" }}
                                        label="If"
                                        {...a11yProps(0)}
                                      />
                                      <Tab
                                        style={{ textTransform: "none" }}
                                        label="Else"
                                        {...a11yProps(1)}
                                      />
                                    </Tabs>
                                  </Box>
                                  <CustomTabPanel value={value} index={0}>
                                    Item One
                                  </CustomTabPanel>
                                </Box>
                              </MDBRow>
                            ) : null}

                            <MDBRow>
                              <Box sx={{ width: "100%" }}>
                                <Box
                                  sx={{
                                    borderBottom: 1,
                                    borderColor: "divider",
                                  }}
                                >
                                  <Tabs
                                    value={tab2}
                                    onChange={handleTabChange2}
                                    aria-label="basic tabs example"
                                  >
                                    <Tab
                                      style={{ textTransform: "none" }}
                                      label="Formatting"
                                      {...a11yProps(0)}
                                    />
                                    <Tab
                                      style={{ textTransform: "none" }}
                                      label="Message"
                                      {...a11yProps(1)}
                                    />
                                    <Tab
                                      style={{ textTransform: "none" }}
                                      label="Alert"
                                      {...a11yProps(2)}
                                    />
                                  </Tabs>
                                </Box>
                                <CustomTabPanel value={tab2} index={0}>
                                  <CustomizationTable1 />
                                </CustomTabPanel>
                                <CustomTabPanel value={tab2} index={1}>
                                  <MDBRow>
                                    <MDBCol lg="2" md="3" sm="6" xs="12">
                                      <AccountInput label="General Message" />
                                    </MDBCol>
                                  </MDBRow>
                                  <MDBRow>
                                    <Typography
                                      sx={{ pl: 1, pt: 1, fontSize: 13 }}
                                      variant="p"
                                      color="gray"
                                      gutterBottom
                                    >
                                      Message Type
                                    </Typography>

                                    <RadioGroup
                                      aria-labelledby="demo-radio-buttons-group-label"
                                      name="radio-buttons-group"
                                      sx={{
                                        "& .MuiSvgIcon-root": { fontSize: 16 },
                                      }}
                                    >
                                      <div
                                        style={{
                                          display: "flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        <FormControlLabel
                                          value="Send as attachment"
                                          control={<Radio />}
                                          label="Information"
                                          sx={{
                                            "& .MuiFormControlLabel-label": {
                                              fontSize: "0.9rem",
                                              color: "gray",
                                            },
                                            margin: 0,
                                            padding: 0,
                                          }}
                                        />

                                        <FormControlLabel
                                          value="Stop"
                                          control={<Radio />}
                                          label="Warn And Proceed"
                                          sx={{
                                            "& .MuiFormControlLabel-label": {
                                              fontSize: "0.9rem",
                                              color: "gray",
                                            },
                                            margin: 0,
                                            padding: 0,
                                          }}
                                        />

                                        <FormControlLabel
                                          value="Warn"
                                          control={<Radio />}
                                          label="Warn And Stop"
                                          sx={{
                                            "& .MuiFormControlLabel-label": {
                                              fontSize: "0.9rem",
                                              color: "gray",
                                            },
                                            margin: 0,
                                            padding: 0,
                                          }}
                                        />
                                      </div>
                                    </RadioGroup>
                                  </MDBRow>
                                </CustomTabPanel>
                                <CustomTabPanel value={tab2} index={2}>
                                  Item One
                                </CustomTabPanel>
                              </Box>
                            </MDBRow>
                          </Box>
                        </MDBCardBody>
                      </div>
                    </>
                  </AccordionDetails>
                </Accordion> */}

                {/* <Accordion
                  expanded={expanded === "panel5"}
                  onChange={handleChange("panel5")}
                >
                  <AccordionSummary
                    aria-controls="panel5d-content"
                    id="panel5d-header"
                    className
                    expanded={expanded === "panel5"}
                  >
                    <Typography style={{ fontSize: "14px" }}>
                      External Modules
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <>
                      <div>
                        <MDBCardBody></MDBCardBody>
                      </div>
                    </>
                  </AccordionDetails>
                </Accordion> */}
              </div>
            </div>
          </div>
        </div>
      </Zoom>
    </div>
  );
}
