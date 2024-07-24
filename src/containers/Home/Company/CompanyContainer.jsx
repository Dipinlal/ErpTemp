import * as React from "react";
import { styled } from "@mui/material/styles";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { primaryButtonColor, secondryColor, thirdColor } from "../../../config";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import SecurityInput from "../../../components/Inputs/SecurityInput";
import Autocomplete2 from "../../../components/AutoComplete/AutoComplete2";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  Stack,
  Tooltip,
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
import {
  CRMRoles,
  UserType,
  createProfileTree,
  erpRoles,
  languages,
  masterItems,
  passwordPolicy,
  restrictionItems,
  securityQuestions,
  timeZone,
  workingDays,
} from "../../../config/securityConfig";
import PersonIcon from "@mui/icons-material/Person";
import BusinessIcon from '@mui/icons-material/Business';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import RoomPreferencesIcon from "@mui/icons-material/RoomPreferences";
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
import RoleSelect1 from "../../../components/Select/RoleSelect1";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Autocomplete1 from "../../../components/AutoComplete/AutoComplete1";
import { useEffect } from "react";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import RefreshIcon from "@mui/icons-material/Refresh";
import BasicDateTimePicker from "../../../components/DateAndTimePicker/DateAndTimePicker";
import {
  calendarType,
  companyList,
  countryList,
  languagesList1,
} from "../../../config/companyConfig";
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
  // color: primaryButtonColor,
  // backgroundColor: thirdColor,
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

function BasicBreadcrumbs({pageType,pageId,currentTheme}) {
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
              
            />
          }
          aria-label="breadcrumb"
        >
          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center", fontSize: "1rem",color: currentTheme.actionIcons,  }} // Reduce font size
            key="1"
            
          >
            <HomeIcon sx={{ mr: 0.5, }} fontSize="inherit" />
            Home
          </Link>
          <Link
            underline="hover"
            key="2"
           
            sx={{ fontSize: "1rem",color: currentTheme.actionIcons,  }}
          >
            Company
          </Link>
          ,
          {pageType ==1?
          <Typography key="3"  sx={{ fontSize: "1rem",color: currentTheme.actionIcons, }}>
            Create Company
          </Typography>
          :<Typography key="3"  sx={{ fontSize: "1rem",color: currentTheme.actionIcons,  }}>
          Edit Company
        </Typography>}
          ,
        </Breadcrumbs>
      </Stack>
    </div>
  );
}
const DefaultIcons = ({ iconsClick, pageType,currentTheme }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: "5px" }}>
      <IconButton
        aria-label="New"
        sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
        //onClick={()=>iconsClick("close")}
      >
        <Stack direction="column" alignItems="center">
          <SaveIcon style={{ color: currentTheme.actionIcons, }}/>
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
        onClick={() => iconsClick("close")}
      >
        <Stack direction="column" alignItems="center">
          <CloseIcon style={{ color: currentTheme.actionIcons, }}/>
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

  backgroundColor: "#fff", // Set a background color
  borderRadius: "50%", // Make the button round
  padding: "5px", // Padding to make the icon look bigger and floating
  boxShadow: "0px 4px 12px rgba(0,0,0,0.2)", // Add shadow to make it look floating
};

export default function CompanyContainer({ pageType,pageId }) {
  const [expanded, setExpanded] = React.useState("panel1");
  const [selectedOption, setSelectedOption] = React.useState("");
  const [openLoadFrom, setOpenLoadFrom] = React.useState(false);
  const [formData, setformData] = useState({
    photo: null,
    signature: null,
    userType: "User",
    PUserType: "",
    PUserType1: "",
    FromDate: " ",
    accountingDate:" "
  });
  const [defaultLanguage, setdefaultLanguage] = useState([])
  const [selectedLevel, setSelectedLevel] = useState(null);

  const {currentTheme} = useTheme()

  const buttonStyle = {
    backgroundColor: currentTheme.secondaryColor,
    color: currentTheme.primaryButtonColor,
    textTransform: "none",
    padding: "1px",
    "&:hover": {
      backgroundColor: currentTheme.secondaryColor, // Change as needed
      color: currentTheme.primaryButtonColor, // Example hover color change
    },
  };

  const handleLevelClick = (level) => {
    setSelectedLevel(level);
  };

  const levels = [
    { label: 'L', fullLabel: 'Low' },
    { label: 'N', fullLabel: 'Normal' },
    { label: 'H', fullLabel: 'High' },
  ]

  

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const handleSelectChange = (event, key) => {
    const newFormData = { ...formData, [key]: event.target.value };

    if (key === "country") {
      const selectedCountry = countryList.find(
        (country) => country.value === event.target.value
      );
      if (selectedCountry) {
        newFormData.currency = selectedCountry.currencyCode;
      }
    }

    setformData(newFormData);
  };

  const handleLanguagesCheck = (event, language) => {
    if (event.target.checked) {
      setdefaultLanguage([...defaultLanguage, language]);
    } else {
      setdefaultLanguage(defaultLanguage.filter((lang) => lang.value !== language.value));
    }
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
  const handleclose = () => {
    window.history.back();
  };
  const handleLoadFrom = () => {
    setOpenLoadFrom(true);
  };
  const handleCloseLoadFrom = () => {
    setOpenLoadFrom(false);
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
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          // backgroundColor: currentTheme.secondaryColor,
          paddingLeft: 1.5,
          paddingRight: 1.5,
          alignItems:"center"
        }}
      >
        {pageId === 0 ? (
    <BasicBreadcrumbs pageType={pageType} pageId={pageId} currentTheme={currentTheme}/>
) : pageId === 1 ? (
    <Typography sx={{ fontSize: "1rem",color: currentTheme.actionIcons,  }}>
        Create Company
    </Typography>
) : (
    <Typography sx={{ fontSize: "1rem",color: currentTheme.actionIcons,  }}>
        Edit Company
    </Typography>
)}

        <DefaultIcons currentTheme= {currentTheme} pageType={pageType} iconsClick={handleIconsClick} />
      </Box>
      <Box
        sx={{
          width: "100%",
          overflowX: "hidden",
          display: "flex",
          flexDirection: "column",
          maxHeight: "83vh",
          overflowY: "auto",
          scrollbarWidth: "thin",
          paddingBottom: "30px",
        }}
      >
        {pageId ==2 &&
         <Box
          sx={{
            pl: 3,
            pb: 2,
            display: "flex",
            flexDirection: "column",
            paddingTop: "10px",
          }}
        >
          
          <RoleSelect1
                        label="Company"
                        value={formData?.CompanyEdit ?? ""}
                        onChange={(e) => handleSelectChange(e, "CompanyEdit")}
                        options={companyList}
                      />
                             
        </Box>
        }   
        <Accordion
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
          
        >
          <AccordionSummary
            aria-controls="panel1d-content"
            id="panel1d-header"
            className
            expanded={expanded === "panel1"}
            sx={{ alignItems: "center", color: currentTheme.sideBarTextColor1, backgroundColor: currentTheme.secondaryColor, border: `1px solid ${currentTheme.sideBarTextColor1}` }}
            currentTheme={currentTheme}
          >
            <IconButton
              sx={{ fontSize: "0.8rem", padding: "0rem",color: currentTheme.sideBarTextColor1 }}
              //onClick={()=>iconsClick("close")}
            >
              <Stack direction="column" alignItems="center">
                <BusinessIcon sx={{ color: currentTheme.sideBarTextColor1 }} />
              </Stack>
            </IconButton>
            <Typography style={{ fontSize: "14px",color: currentTheme.sideBarTextColor1 }}>Company</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <>
              <div>
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol lg="3" md="4" sm="6" xs="12">
                      <SecurityInput label="Company Name" />
                    </MDBCol>

                    <MDBCol lg="3" md="4" sm="6" xs="12">
                      <RoleSelect1
                        label="Calendar Type"
                        value={formData?.calendarType ?? ""}
                        onChange={(e) => handleSelectChange(e, "calendarType")}
                        options={calendarType}
                        disabled={pageType==2}
                      />
                    </MDBCol>
                    <MDBCol lg="3" md="4" sm="6" xs="12">
                      <SecurityInput
                        label="Accounting Date"
                        type={"date"}
                        value={formData.accountingDate ?? " "}
                        setValue={(data) =>
                          setformData({ ...formData, accountingDate: data })
                        }
                        disabled={pageType==2}
                      />
                    </MDBCol>
                    <MDBCol lg="3" md="4" sm="6" xs="12">
                      <SecurityInput label="Super User Password" />
                    </MDBCol>
                    <MDBCol lg="3" md="4" sm="6" xs="12">
                      <SecurityInput label="Email" type="email" />
                    </MDBCol>
                    <MDBCol lg="3" md="4" sm="6" xs="12">
                      <RoleSelect1
                        label="Country"
                        value={formData?.country ?? ""}
                        onChange={(e) => handleSelectChange(e, "country")}
                        options={countryList.map((country) => ({
                          label: country.label,
                          value: country.value,
                        }))}
                        disabled={pageType==2}
                      />
                    </MDBCol>
                    <MDBCol lg="3" md="4" sm="6" xs="12">
                      <RoleSelect1
                        label="Reporting Currency"
                        value={formData?.currency ?? ""}
                        onChange={(e) => handleSelectChange(e, "currency")}
                        options={countryList.map((country) => ({
                          label: country.currency,
                          value: country.currencyCode,
                        }))}
                        disabled={pageType==2}
                        helperText={pageType==2?"Note:Can't edit currency as Transaction exist":""}
                      />
                    </MDBCol>
                    
                    <MDBCol
                      lg="3"
                      md="4"
                      sm="6"
                      xs="12"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', width: '100%' }}>
                      <Checkbox
                        //checked={checkedBillwise}
                        //onChange={handleChangeBillwise}
                        inputProps={{ "aria-label": "controlled" }}
                        sx={{ padding: 0 }}
                      />
                      <Typography
                        sx={{ fontSize: "14px", padding: 0 }}
                        variant="body1"
                      >
                        Enable multi language
                      </Typography>
                      </label>
                    </MDBCol>
                    <MDBCol
                      lg="3"
                      md="4"
                      sm="6"
                      xs="12"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                       <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', width: '100%' }}>
                      <Checkbox
                        //checked={checkedBillwise}
                        //onChange={handleChangeBillwise}
                        inputProps={{ "aria-label": "controlled" }}
                        sx={{ padding: 0 }}
                      />
                      <Typography
                        sx={{ fontSize: "14px", padding: 0 }}
                        variant="body1"
                      >
                        Multi Entity selection
                      </Typography>
                      </label>
                    </MDBCol>
                    <MDBCol
                      lg="3"
                      md="4"
                      sm="6"
                      xs="12"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                       <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', width: '100%' }}>
                      <Checkbox
                        //checked={checkedBillwise}
                        //onChange={handleChangeBillwise}
                        inputProps={{ "aria-label": "controlled" }}
                        sx={{ padding: 0 }}
                      />
                      <Typography
                        sx={{ fontSize: "14px", padding: 0 }}
                        variant="body1"
                      >
                        Do not Allow Remember Login Credentials
                      </Typography>
                      </label>
                    </MDBCol>
                    <MDBCol
                      lg="3"
                      md="4"
                      sm="6"
                      xs="12"
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                       <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', width: '100%' }}>
                      <Checkbox
                        //checked={checkedBillwise}
                        //onChange={handleChangeBillwise}
                        inputProps={{ "aria-label": "controlled" }}
                        sx={{ padding: 0 }}
                      />
                      <Typography
                        sx={{ fontSize: "14px", padding: 0 }}
                        variant="body1"
                      >
                        Do not Allow Remember Login Credentials
                      </Typography>
                      </label>
                    </MDBCol>
                    
                  </MDBRow>
                  {/* <MDBRow>
                  <MDBCol >
                      <SecurityInput label="Customer/Vendor Portal Link" width={"50%"} />
                    </MDBCol>
                  </MDBRow> */}
                  {/* <MDBRow style={{marginTop:"10px",marginBottom:"10px"}}>
                  <MDBCol >
                      <SecurityInput label="Database Path" width={"50%"} />
                    </MDBCol>
                  </MDBRow> */}
                  <MDBRow>
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
                    <Typography variant="body1">Security Level</Typography>
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
                    <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', width: '300px', margin: 'auto', padding: '20px' }}>
      {/* Center Line */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '0',
          right: '0',
          height: '2px',
          backgroundColor: '#ccc',
          zIndex: 0,
        }}
      />
      {levels.map((level, index) => (
        <Tooltip key={level.label} title={level.fullLabel} arrow>
          <Box
            onClick={() => handleLevelClick(level.label)}
            sx={{
              width: selectedLevel === level.label ? '40px' : '30px',
              height: selectedLevel === level.label ? '40px' : '30px',
              borderRadius: '50%',
              backgroundColor: currentTheme.thirdColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'width 0.3s, height 0.3s',
              marginLeft: index === 0 ? '0' : 'auto',
              marginRight: index === levels.length - 1 ? '0' : 'auto',
              zIndex: 1,
              '&:hover': {
                width: '40px',
                height: '40px',
              },
            }}
          >
            <Typography sx={{ color: currentTheme.sideBarTextColor1, fontSize: '16px', fontWeight: 'bold' }}>{level.label}</Typography>
          </Box>
        </Tooltip>
      ))}
    </Box>
    </MDBCol>

                  </MDBRow>
                  {/* <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "auto 1fr",
                      alignItems: "center",
                      width: "100%",
                      mt: 3,
                      mb: 3,
                    }}
                  >
                    <Typography variant="body1">Languages</Typography>
                    <Box
                      sx={{
                        borderBottom: "1px dotted ",
                        borderBottmColor: getBorderColor(),
                        marginLeft: "8px", // Adjust spacing to your preference
                      }}
                    />
                  </Box>
                  <MDBRow>
                    {languagesList1 &&
                      languagesList1.map((language) => (
                        <MDBCol
                          lg="2"
                          md="3"
                          sm="4"
                          xs="6"
                          style={{ display: "flex", alignItems: "center",marginBottom:"5px" }}
                        >
                           <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', width: '100%' }}>
                            <Checkbox
                            checked={defaultLanguage.some((lang) => lang.value === language.value)}
                            onChange={(event) => handleLanguagesCheck(event, language)}
                              inputProps={{ "aria-label": "controlled" }}
                              sx={{ padding: 0 }}
                              disabled={pageType==2}
                            />
                            <Typography
                              sx={{ fontSize: "14px", padding: 0 }}
                              variant="body1"
                            >
                              {language.label}
                            </Typography>
                            </label>
                        </MDBCol>
                      ))}
                  </MDBRow>
                  <MDBRow>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                      <RoleSelect1
                        label="Default Language"
                        value={formData?.defaultLanguage ?? ""}
                        onChange={(e) => handleSelectChange(e, "defaultLanguage")}
                        options={defaultLanguage}
                        disabled={pageType==2}
                      />
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
            sx={{ alignItems: "center", color: currentTheme.sideBarTextColor1, backgroundColor: currentTheme.secondaryColor,border:`1px solid ${currentTheme.sideBarTextColor1}` }}
          >
            <IconButton
              sx={{ fontSize: "0.8rem", padding: "0rem" }}
              //onClick={()=>iconsClick("close")}
            >
              <Stack direction="column" alignItems="center">
                <RoomPreferencesIcon sx={{ color: currentTheme.sideBarTextColor1 }} />
              </Stack>
            </IconButton>
            <Typography style={{ fontSize: "14px",color: currentTheme.sideBarTextColor1 }}>Company Details</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <>
              <div>
                <MDBCardBody>
                  <MDBRow>
                    
                    {/* <MDBCol lg="3" md="4" sm="6" xs="12">
                      <SecurityInput label="Email" />
                    </MDBCol> */}
                    <MDBCol lg="3" md="4" sm="6" xs="12">
                      <SecurityInput label="Telephone Number" />
                    </MDBCol>
                    <MDBCol lg="3" md="4" sm="6" xs="12">
                      <SecurityInput label="Fax Number" />
                    </MDBCol>
                    <MDBCol lg="3" md="4" sm="6" xs="12">
                      <SecurityInput label="WebSite" />
                    </MDBCol>
                    <MDBCol lg="3" md="4" sm="6" xs="12">
                      <SecurityInput label="Address" multiline={true}/>
                    </MDBCol>

        
                    
                 
                    
                  </MDBRow>
                 
                </MDBCardBody>
              </div>
            </>
          </AccordionDetails>
        </Accordion>
      </Box>
      <Dialog
        open={openLoadFrom}
        onClose={handleCloseLoadFrom}
        aria-labelledby="form-dialog-title"
      >
        <Typography
          variant="h6"
          gutterBottom
          component="div"
          sx={{ backgroundColor: currentTheme.thirdColor, textAlign: "center" }}
        >
          Users
        </Typography>
        <Box sx={{ minHeight: "200px", ml: 2 }}>
          <Typography>User1</Typography>
        </Box>
        <DialogContent>
          <input
            placeholder="Search"
            style={{ borderRadius: "5px", border: "1px solid #ddd" }}
          />
          {/* You can add more content here such as a list of items */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseLoadFrom} sx={buttonStyle}>
            Ok
          </Button>
          <Button onClick={handleCloseLoadFrom} sx={buttonStyle}>
            Cancel
          </Button>
          {/* <IconButton
              aria-label="New"
              sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
              onClick={handleCloseGetRolesInProfile}
            >
              <Stack direction="column" alignItems="center">
        <CloseIcon sx={{ color:primaryColor }} />
        <Typography
                  variant="caption"
                  align="center"
                  style={{ color: primaryColor, fontSize: "0.6rem" }}
                >
                  Close
                </Typography>
              </Stack>
            </IconButton> */}
        </DialogActions>
      </Dialog>
    </Box>
  );
}
