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
  Grid,
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
import InfoPanelInputTable from "./InfoPanelInputTable";

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

export default function InfoPanelModal({ isOpen, handleCloseModal }) {
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
                <Typography variant="h6" color="textSecondary" flexGrow={1}>
                  InfoPanel Setting
                </Typography>
                <Button
                  onClick={handleCloseModal}
                  variant="contained"
                  startIcon={<SaveIcon />}
                  style={buttonStyle}
                >
                  Save
                </Button>
                <Button
                  variant="contained"
                  onClick={handleCloseModal}
                  startIcon={<CloseIcon />}
                  style={buttonStyle}
                >
                  Close
                </Button>
              </Stack>

              <Box
                sx={{
                  borderRadius: 2,
                  padding: 2,
                  margin: 1,
                  boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="p" color="gray" gutterBottom>
                    Panel Details
                  </Typography>
                </Stack>
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol>
                      <AccountInput label="Panel Name" />
                    </MDBCol>
                    <MDBCol>
                      <AccountInput label="Description" />
                    </MDBCol>
                    <MDBCol>
                      <AutoComplete2 autoLabel="Panel Type" />
                    </MDBCol>

                    <MDBCol>
                      <CheckBox2 label="Record Change" />
                    </MDBCol>
                    <MDBCol>
                      <AutoComplete2 autoLabel="Row Span" />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <Typography
                      sx={{ pt: 2 }}
                      variant="p"
                      color="gray"
                      gutterBottom
                    >
                      Build from
                    </Typography>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      name="radio-buttons-group"
                      sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <FormControlLabel
                          value="Send as attachment"
                          control={<Radio />}
                          label="Master"
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
                          label="Query"
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
                          value="Variables"
                          control={<Radio />}
                          label="Variables"
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
                  <MDBRow>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <Box
                          sx={{
                            minHeight:250,
                            borderRadius: 1,
                            padding: 2,
                            margin: 1,
                            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
                          }}
                        >
                              <Typography
                      sx={{ pt: 2 }}
                      variant="p"
                      color="gray"
                      gutterBottom
                    >
                     Master Fields
                    </Typography>
                          <InfoPanelInputTable />
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <Box
                          sx={{
                            minHeight:250,
                            borderRadius: 1,
                            padding: 2,
                            margin: 1,
                            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
                          }}
                        >
                         <Typography
                      sx={{ pt: 2 }}
                      variant="p"
                      color="gray"
                      gutterBottom
                    >
                   Preview
                    </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </MDBRow>
                </MDBCardBody>
              </Box>
            </div>
          </div>
        </div>
      </Zoom>
    </div>
  );
}
