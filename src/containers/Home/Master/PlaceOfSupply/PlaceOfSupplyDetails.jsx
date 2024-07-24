import * as React from "react";
import { styled } from "@mui/material/styles";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { primaryButtonColor, thirdColor } from "../../../../config";
import { Checkbox, FormControlLabel, TextField,IconButton, Box, List, ListItemButton, ListItemText } from "@mui/material";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import AccountInput from "../../../../components/Inputs/AccountInput";
import AutocompleteSecurity from "../../../../components/AutoComplete/AutocompleteSecurity";
import AutoComplete2 from "../../../../components/AutoComplete/AutoComplete2";
import SecurityInput from "../../../../components/Inputs/SecurityInput";
import { useState } from "react";
import {
 Delete as DeleteIcon,
} from "@mui/icons-material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import MasterLanguage from "../Account/AccountMaster/MasterLanguage";
import AccountInput1 from "../../../../components/Inputs/AccountInput1";
import { useTheme } from "../../../../config/themeContext";
import RoleSelect1 from "../../../../components/Select/RoleSelect1";
import { CustomScroll } from "react-custom-scroll";
import SearchBox2 from "../../../../components/SearchBox/SearchBox2";


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

const uploadIconstyle = {
  color: thirdColor, // Set the icon color
  backgroundColor: "#fff", // Set a background color
  borderRadius: "50%", // Make the button round
  padding: "5px", // Padding to make the icon look bigger and floating
  boxShadow: "0px 4px 12px rgba(0,0,0,0.2)", // Add shadow to make it look floating
};

const textFieldStyle= {
  width: 70,
  mx: 1,
  height: 30, // Reducing the height
  '& .MuiInputBase-root': {
    height: '30px',
    padding: '0 0px', // Reduces padding inside the input area
  },
  '& .MuiOutlinedInput-input': {
    padding: '4px', // Adjust top and bottom padding
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: '1px solid', // Adjust border if needed
  }
}


  
      

      
     
       

const vendorOptions = [
  { label: "Vendor 1", value: "Vendor 1" },
  { label: "Vendor 2", value: "Vendor 2" },
  // Add more options as needed
];

const locationOptions = [
  { label: "Location 1", value: "Location 1" },
  { label: "Location 2", value: "Location 2" },
  // Add more options as needed
];

const allottedToOptions = [
  { label: "Person 1", value: "Person 1" },
  { label: "Person 2", value: "Person 2" },
  // Add more options as needed
];

const BusinessUnit = [
  { title: "Unit1", iId: 1 },
  { title: "Unit2", iId: 2 },
  { title: "Unit3", iId: 3 },
];

export default function PlaceOfSupplyDetails() {
  const [expanded, setExpanded] = React.useState("panel1");
  const [formData, setformData] = useState({
    photo: null,
    signature: null,
    userType: "User",
    PUserType: "",
    PUserType1: "",
    FromDate: " ",
    accountingDate:" "
  });
  const [accountName, setAccountName] = React.useState("");
  const [selectedOption, setSelectedOption] = React.useState(0);

  
  const [selectedEntity, setSelectedEntity] = React.useState([]);


  const { currentTheme } = useTheme();

  const handleChild = (data) => {
    
    setSelectedEntity(data)
  };

  const handleAccountNameChange = (event) => {
   
    setAccountName(event.target.value);
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

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

 
  

  
 
  
  const getBorderColor = () => {
    return localStorage.getItem('color') === 'true' ? '#fff' : '#000';
  };
  return (
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
          <Typography style={{ fontSize: "14px" }}>General</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <>
            <div>
              <MDBCardBody>
                <MDBRow>

                <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Code" />
                  </MDBCol>
                <MDBCol lg="3" md="4" sm="6" xs="12">
                <AccountInput1 label="Name"  value={accountName} onChange={handleAccountNameChange}/>
                  </MDBCol>
                  
                  
                   
                </MDBRow>
                
         
                
              </MDBCardBody>
            </div>
          </>
        </AccordionDetails>
      </Accordion>
      
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
          <Typography style={{ fontSize: "14px" }}>Language</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MDBCardBody>
            <MDBRow>
              <MDBCol  xs="12">
                
                 <MasterLanguage accountName={accountName} />
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel8"}
        onChange={handleChange("panel8")}
      >
        <AccordionSummary
          aria-controls="panel8d-content"
          id="panel8d-header"
          className
          expanded={expanded === "panel8"}
          currentTheme={currentTheme}
        >
          <Typography style={{ fontSize: "14px" }}>Business Entity</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <>
            <div>
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
                    <Typography style={{ fontSize: "14px"}}>
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
            </div>
          </>
        </AccordionDetails>
      </Accordion>

      
    </div>
  );
}
