import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { primaryButtonColor, thirdColor } from "../../../config";
import { Box, Checkbox, FormControlLabel, IconButton } from "@mui/material";
import {
  MDBCardBody,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import AccountInput from "../../../components/Inputs/AccountInput";
import AutoComplete2 from "../../../components/AutoComplete/AutoComplete2";
import SearchBox2 from "../../../components/SearchBox/SearchBox2";
import { CustomScroll } from "react-custom-scroll";
import AccountInput1 from "../../../components/Inputs/AccountInput1";
import MasterLanguage from "../../Home/Master/Account/AccountMaster/MasterLanguage";
import { useTheme } from "../../../config/themeContext";
import { timeZone } from "../../../config/securityConfig";
import RoleSelect1 from "../../../components/Select/RoleSelect1";
import {
    AddCircleOutline,
    Edit as EditIcon,
    Delete as DeleteIcon,
    Close as CloseIcon,
    InfoOutlined,
    Language,
    FormatListBulleted,
  } from "@mui/icons-material";

  import AddCircleIcon from "@mui/icons-material/AddCircle";

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

const language = [
  { title: "English", iId: 1 },
  { title: "Arabic", iId: 2 },
  { title: "Spanish", iId: 3 },
];

const BusinessUnit = [
  { title: "Unit1", iId: 1 },
  { title: "Unit2", iId: 2 },
  { title: "Unit3", iId: 3 },
];

const uploadIconstyle = {

    backgroundColor: "#fff", // Set a background color
    borderRadius: "50%", // Make the button round
    padding: "5px", // Padding to make the icon look bigger and floating
    boxShadow: "0px 4px 12px rgba(0,0,0,0.2)", // Add shadow to make it look floating
  };

const EntityMasterDetailTab = () => {
  const [expanded, setExpanded] = useState("panel1");
  const [accountName, setAccountName] = React.useState("");
  const [formData, setformData] = useState({
    photo: null,
    signature: null,
    userType: "User",
    PUserType:"",
    PUserType1:"",
    FromDate:" ",
    LockedTill: " ",
    Days: "", // Add Days to formData
  });

  const { currentTheme } = useTheme();


  const handleAccountNameChange = (event) => {
   
    setAccountName(event.target.value);
  };

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleSelectChange = (event, key) => {
    setformData({ ...formData, [key]: event.target.value });
  };
  const handleUploadClick = (field) => () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setformData((prev) => ({ ...prev, [field]: e.target.result }));
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  const handleDeleteClick = (field) => () => {
    setformData((prev) => ({ ...prev, [field]: null }));
  };
  const handleRadioChange = (event) => {
    setformData({
      ...formData,
      userType: event.target.value,
    });
  };
  const getBorderColor = () => {
    return localStorage.getItem('color') === 'true' ? '#fff' : '#000';
  };

  return (
    <div >
      <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
        <AccordionSummary 
          aria-controls="panel1d-content"
          id="panel1d-header"
          className
          expanded={expanded === "panel1"}
          currentTheme={currentTheme}>
          <Typography style={{ fontSize: "14px" }}>General</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <MDBCardBody>
              <MDBRow>
                <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AccountInput1 label="Name" value={accountName} onChange={handleAccountNameChange} mandatory={1}/>
                </MDBCol>
                <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AccountInput label="Code" mandatory={1} />
                </MDBCol>
                <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Accounting Period" isMandatory={1}/>
                </MDBCol>
                <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Functional Currency" isMandatory={1}/>
                </MDBCol>
                <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AccountInput label="Address"  />
                </MDBCol>
                <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AccountInput label="Telephone" />
                </MDBCol>
                <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AccountInput label="Fax"  />
                </MDBCol>
                <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AccountInput label="Country" />
                </MDBCol>
                <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AccountInput label="State"  />
                </MDBCol>
                <MDBCol lg="3" md="4" sm="6" xs="12">
                      <RoleSelect1
                        label="Select Time-Zone"
                        value={formData?.TimeZone ?? ""}
                        onChange={(e) => handleSelectChange(e, "TimeZone")}
                        options={timeZone}
                      />
                    </MDBCol>
                    <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AccountInput label="Website" />
                </MDBCol>
                <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AccountInput label="Email"/>
                </MDBCol>
                <MDBCol lg="3" md="4" sm="6" xs="12">
                      <div
                        style={{
                          marginLeft: "60px",
                          width: "120px",
                          alignItems: "center",
                          textAlign: "center",
                          marginTop:"10px"
                        }}
                      >
                        {/* <IconButton
                    onClick={handleUploadClick}
                    style={uploadIconstyle}
                    sx={{ml:1,mb:1}}
                  >
                    <AddCircleIcon style={{ fontSize: '3rem'}} /> 
                  </IconButton> */}
                        {formData.photo ? (
                          <div style={{ position: "relative" }}>
                            <img
                              src={formData.photo}
                              alt="Uploaded"
                              style={{ width: "60px", height: "60px" }}
                            />
                            <IconButton
                              onClick={handleDeleteClick("photo")}
                              style={{
                                position: "absolute",
                                right: -5,
                                top: -10,
                              }}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </div>
                        ) : (
                          <IconButton
                            onClick={handleUploadClick("photo")}
                            style={uploadIconstyle}
                           
                            
                          >
                            <AddCircleIcon style={{ fontSize: "3rem",color:currentTheme.thirdColor }} />
                          </IconButton>
                        )}
                        <Typography
                          sx={{ fontSize: "12px" }}
                          variant="subtitle1"
                        >
                          Company Logo
                        </Typography>
                      </div>
                    </MDBCol>
              
              </MDBRow>
            </MDBCardBody>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
        <AccordionSummary 
          aria-controls="panel2d-content"
          id="panel2d-header"
          className
          expanded={expanded === "panel2"}
          currentTheme={currentTheme}>
          <Typography style={{ fontSize: "14px" }}>VAT Settings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            <MDBCardBody>
              <MDBRow>
               
                <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AccountInput label="Jurisdiction"  />
                </MDBCol>
                
                <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AccountInput label="TRN"/>
                </MDBCol>
                <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AccountInput label="Taxable name in English" />
                </MDBCol>
                <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AccountInput label="Taxable name in alternate language"  />
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
                    <Typography variant="body1">Trade Licence</Typography>
                    <Box
                     sx={{
                      borderBottom: "1px dotted ",
                      borderBottmColor: getBorderColor(),
                      marginLeft: "8px", // Adjust spacing to your preference
                    }}
                    />
                  </Box>
                  <MDBRow>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AccountInput label="Trade Licence"  />
                </MDBCol>
                <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AccountInput label="Expiry date"  type={"date"} />
                </MDBCol>
                <MDBCol lg="3" md="4" sm="6" xs="12">
                      <div
                        style={{
                          marginLeft: "60px",
                          width: "120px",
                          alignItems: "center",
                          textAlign: "center",
                          marginTop:"10px"
                        }}
                      >
                        {/* <IconButton
                    onClick={handleUploadClick}
                    style={uploadIconstyle}
                    sx={{ml:1,mb:1}}
                  >
                    <AddCircleIcon style={{ fontSize: '3rem'}} /> 
                  </IconButton> */}
                        {formData.attachments ? (
                          <div style={{ position: "relative" }}>
                            <img
                              src={formData.attachments}
                              alt="Uploaded"
                              style={{ width: "60px", height: "60px" }}
                            />
                            <IconButton
                              onClick={handleDeleteClick("attachments")}
                              style={{
                                position: "absolute",
                                right: -5,
                                top: -10,
                              }}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </div>
                        ) : (
                          <IconButton
                            onClick={handleUploadClick("attachments")}
                            style={uploadIconstyle}
                           
                            
                          >
                            <AddCircleIcon style={{ fontSize: "3rem",color:currentTheme.thirdColor }} />
                          </IconButton>
                        )}
                        <Typography
                          sx={{ fontSize: "12px" }}
                          variant="subtitle1"
                        >
                          Attachments
                        </Typography>
                      </div>
                    </MDBCol>
                  </MDBRow>
                  
            </MDBCardBody>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary
          aria-controls="panel6d-content"
          id="panel6d-header"
          expanded={expanded === "panel6"}
          currentTheme={currentTheme}
        >
          <Typography style={{ fontSize: "14px" }}>Language</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MDBCardBody>
            <MDBRow>
              
              <MasterLanguage accountName={accountName} />
            </MDBRow>
          </MDBCardBody>
        </AccordionDetails>
      </Accordion>
     
    </div>
  );
};

export default EntityMasterDetailTab;
