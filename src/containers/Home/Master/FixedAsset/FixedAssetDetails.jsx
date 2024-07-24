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

// List of options
// const options = [
//   { label: 'General', component: (data,handleDetailChange) => (
//     <MDBCardBody>
//       <MDBRow>
//         <MDBCol lg="3" md="4" sm="6" xs="12">
//           <AccountInput1
//             label="Description"
//             value={data.Description}
//             onChange={(e) => handleDetailChange("General", "Description", e.target.value)}
//           />
//         </MDBCol>
//         <MDBCol lg="3" md="4" sm="6" xs="12">
//           <RoleSelect1
//             autoLabel="Valuation"
//             value={data.Valuation}
//             onChange={(value) => handleDetailChange("General", "Valuation", value)}
//           />
//         </MDBCol>
//         <MDBCol lg="3" md="4" sm="6" xs="12">
//           <RoleSelect1
//             autoLabel="Warehouse"
//             value={data.Warehouse}
//             onChange={(value) => handleDetailChange("General", "Warehouse", value)}
//           />
//         </MDBCol>
//         <MDBCol lg="3" md="4" sm="6" xs="12">
//           <AccountInput1
//             label="Standard Cost"
//             value={data.StandardCost}
//             onChange={(e) => handleDetailChange("General", "StandardCost", e.target.value)}
//           />
//         </MDBCol>
//       </MDBRow>
//     </MDBCardBody>
//   )},
//   { label: 'Units', component: <MDBCardBody>
//     <MDBRow>


//     <MDBCol lg="3" md="4" sm="6" xs="12">
//       <AutoComplete2 autoLabel="Base Unit" />
//       </MDBCol>
   
   
//       <MDBCol lg="3" md="4" sm="6" xs="12">
//       <AutoComplete2 autoLabel="Sales Unit" />
//       </MDBCol>
//       <MDBCol lg="3" md="4" sm="6" xs="12">
//       <AutoComplete2 autoLabel="Purchase Unit" />
//       </MDBCol>
    
      

      
     
       
//     </MDBRow>
    
   
    
//   </MDBCardBody>},
//   { label: 'Reorder', component:<MDBCardBody>
//     <MDBRow>


//     <MDBCol lg="3" md="4" sm="6" xs="12">
//     <AccountInput label="Entity wise Quantity" />
//      </MDBCol>
               
   
   
//      <MDBCol lg="3" md="4" sm="6" xs="12">
//     <AccountInput label="Warehouse Quantity" />
//      </MDBCol>
//      <MDBCol lg="3" md="4" sm="6" xs="12">
//     <AccountInput label="Lead time in Days" />
//      </MDBCol>
    
      

      
     
       
//     </MDBRow>
    
   
    
//   </MDBCardBody>},
//   { label: 'Specification', component: <MDBCardBody>
//     <MDBRow>


//     <MDBCol lg="3" md="4" sm="6" xs="12">
//     <AccountInput label="Hscode" />
//      </MDBCol>
//      <MDBCol lg="3" md="4" sm="6" xs="12">
//       <AutoComplete2 autoLabel="Country of origin" />
//       </MDBCol>    
   
   
//      <MDBCol lg="3" md="4" sm="6" xs="12">
//     <AccountInput label="Height" />
//      </MDBCol>
//      <MDBCol lg="3" md="4" sm="6" xs="12">
//     <AccountInput label="Width" />
//      </MDBCol>
//      <MDBCol lg="3" md="4" sm="6" xs="12">
//      <AccountInput label="CBM" />
//      </MDBCol>
//      <MDBCol lg="3" md="4" sm="6" xs="12">
//     <AccountInput label="Weight" />
//      </MDBCol>
    
      

      
     
       
//     </MDBRow>
    
   
    
//   </MDBCardBody>},
//   { label: 'Settings', component: <MDBCardBody>
//     <MDBRow>


   
//      <MDBCol lg="3" md="4" sm="6" xs="12">
//       <AutoComplete2 autoLabel="Taxable" />
//       </MDBCol>    
 
    
      

      
     
       
//     </MDBRow>
    
   
    
//   </MDBCardBody>},
 
// ];

// const entitiesData = {
//   entity1: {
//     General: {
//       Description: "Entity 1 Description",
//       Valuation: "Entity 1 Valuation",
//       Warehouse: "Entity 1 Warehouse",
//       StandardCost: "100",
//     },
//     Units: {
//       BaseUnit: "Unit 1",
//       SalesUnit: "Unit 1",
//       PurchaseUnit: "Unit 1",
//     },
//     Reorder: {
//       EntityWiseQuantity: "50",
//       WarehouseQuantity: "20",
//       LeadTimeInDays: "5",
//     },
//     Specification: {
//       Hscode: "123456",
//       CountryOfOrigin: "Country 1",
//       Height: "10",
//       Width: "5",
//       CBM: "0.5",
//       Weight: "1",
//     },
//     Settings: {
//       Taxable: "Yes",
//     },
//   },
//   entity2: {
//     General: {
//       Description: "Entity 2 Description",
//       Valuation: "Entity 2 Valuation",
//       Warehouse: "Entity 2 Warehouse",
//       StandardCost: "200",
//     },
//     Units: {
//       BaseUnit: "Unit 2",
//       SalesUnit: "Unit 2",
//       PurchaseUnit: "Unit 2",
//     },
//     Reorder: {
//       EntityWiseQuantity: "100",
//       WarehouseQuantity: "50",
//       LeadTimeInDays: "10",
//     },
//     Specification: {
//       Hscode: "654321",
//       CountryOfOrigin: "Country 2",
//       Height: "20",
//       Width: "10",
//       CBM: "1",
//       Weight: "2",
//     },
//     Settings: {
//       Taxable: "No",
//     },
//   },
//   // Add more entities as needed
// };
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



export default function FixedAssetDetails() {
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
  const [entitiesData, setEntitiesData] = useState({
    entity1: {
      General: {
        Vendor: "",
        PurchaseDate: " ",
        Price: "",
        Quantity: "",
        CumulativeDepreciation: "",
        InsuredValue: "",
        ScrapValue: "",
        Location: "",
        AllottedTo: "",
      },
      DepreciationDetails: {
        DepreciationMethod: "",
        UnitOfUsage: "",
        RateOfDepreciation: "",
        DepreciationInYears: "",
        DepreciationInMonths: "",
        DateOfCommencement: " ",
        StartingUnit: "",
        MaximumUsageLimit: "",
      },
    },
    entity2: {
      General: {
        Vendor: "",
        PurchaseDate: " ",
        Price: "",
        Quantity: "",
        CumulativeDepreciation: "",
        InsuredValue: "",
        ScrapValue: "",
        Location: "",
        AllottedTo: "",
      },
      DepreciationDetails: {
        DepreciationMethod: "",
        UnitOfUsage: "",
        RateOfDepreciation: "",
        DepreciationInYears: "",
        DepreciationInMonths: "",
        DateOfCommencement: " ",
        StartingUnit: "",
        MaximumUsageLimit: "",
      },
    },
  });
  
  const [selectedEntity, setSelectedEntity] = React.useState("entity1");
  const [entityDetails, setEntityDetails] = React.useState(
    entitiesData[selectedEntity]
  );

  const { currentTheme } = useTheme();

  

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

  const handleEntityChange = (value) => {
    setSelectedEntity(value);
    setEntityDetails(entitiesData[value]);
  };
  
  const handleDetailChange = (category, field, value) => {
   
    setEntityDetails((prevDetails) => ({
      ...prevDetails,
      [category]: {
        ...prevDetails[category],
        [field]: value,
      },
    }));
    setEntitiesData((prevData) => ({
      ...prevData,
      [selectedEntity]: {
        ...prevData[selectedEntity],
        [category]: {
          ...prevData[selectedEntity][category],
          [field]: value,
        },
      },
    }));
  };
  const handleDetailChangeSelect = (category, field, value) => {
    
    setEntityDetails((prevDetails) => ({
      ...prevDetails,
      [category]: {
        ...prevDetails[category],
        [field]: value.target.value,
      },
    }));
    setEntitiesData((prevData) => ({
      ...prevData,
      [selectedEntity]: {
        ...prevData[selectedEntity],
        [category]: {
          ...prevData[selectedEntity][category],
          [field]: value.target.value,
        },
      },
    }));
  };
  
  const options = [
    {
      label: "General",
      component: (
        <MDBCardBody>
          <MDBRow>
            <MDBCol lg="3" md="4" sm="6" xs="12">
              <RoleSelect1
                label="Vendor"
                value={entityDetails.General.Vendor}
                onChange={(value) => handleDetailChangeSelect("General", "Vendor", value)}
                options={vendorOptions}
              />
            </MDBCol>
            <MDBCol lg="3" md="4" sm="6" xs="12">
              <AccountInput1
                label="Purchase Date"
                value={entityDetails.General.PurchaseDate}
                onChange={(e) => handleDetailChange("General", "PurchaseDate", e.target.value)}
                type={"date"}
              />
            </MDBCol>
            <MDBCol lg="3" md="4" sm="6" xs="12">
              <AccountInput1
                label="Price"
                value={entityDetails.General.Price}
                onChange={(e) => handleDetailChange("General", "Price", e.target.value)}
              />
            </MDBCol>
            <MDBCol lg="3" md="4" sm="6" xs="12">
              <AccountInput1
                label="Quantity"
                value={entityDetails.General.Quantity}
                onChange={(e) => handleDetailChange("General", "Quantity", e.target.value)}
              />
            </MDBCol>
            <MDBCol lg="3" md="4" sm="6" xs="12">
              <AccountInput1
                label="Cumulative Depreciation"
                value={entityDetails.General.CumulativeDepreciation}
                onChange={(e) => handleDetailChange("General", "CumulativeDepreciation", e.target.value)}
              />
            </MDBCol>
            <MDBCol lg="3" md="4" sm="6" xs="12">
              <AccountInput1
                label="Insured Value"
                value={entityDetails.General.InsuredValue}
                onChange={(e) => handleDetailChange("General", "InsuredValue", e.target.value)}
              />
            </MDBCol>
            <MDBCol lg="3" md="4" sm="6" xs="12">
              <AccountInput1
                label="Scrap Value"
                value={entityDetails.General.ScrapValue}
                onChange={(e) => handleDetailChange("General", "ScrapValue", e.target.value)}
              />
            </MDBCol>
            <MDBCol lg="3" md="4" sm="6" xs="12">
              <RoleSelect1
                label="Location"
                value={entityDetails.General.Location}
                onChange={(value) => handleDetailChangeSelect("General", "Location", value)}
                options={locationOptions}
              />
            </MDBCol>
            <MDBCol lg="3" md="4" sm="6" xs="12">
              <RoleSelect1
                label="Allotted To"
                value={entityDetails.General.AllottedTo}
                onChange={(value) => handleDetailChangeSelect("General", "AllottedTo", value)}
                options={allottedToOptions}
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      )
    },
    {
      label: "Depreciation Details",
      component: (
        <MDBCardBody>
          <MDBRow>
            <MDBCol lg="3" md="4" sm="6" xs="12">
              <AccountInput1
                label="Depreciation Method"
                value={entityDetails.DepreciationDetails.DepreciationMethod}
                onChange={(e) => handleDetailChange("DepreciationDetails", "DepreciationMethod", e.target.value)}
              />
            </MDBCol>
            <MDBCol lg="3" md="4" sm="6" xs="12">
              <AccountInput1
                label="Unit Of Usage"
                value={entityDetails.DepreciationDetails.UnitOfUsage}
                onChange={(e) => handleDetailChange("DepreciationDetails", "UnitOfUsage", e.target.value)}
              />
            </MDBCol>
            <MDBCol lg="3" md="4" sm="6" xs="12">
              <AccountInput1
                label="Rate Of Depreciation %"
                value={entityDetails.DepreciationDetails.RateOfDepreciation}
                onChange={(e) => handleDetailChange("DepreciationDetails", "RateOfDepreciation", e.target.value)}
              />
            </MDBCol>
            <MDBCol lg="3" md="4" sm="6" xs="12">
              <AccountInput1
                label="Depreciation In Years"
                value={entityDetails.DepreciationDetails.DepreciationInYears}
                onChange={(e) => handleDetailChange("DepreciationDetails", "DepreciationInYears", e.target.value)}
              />
            </MDBCol>
            <MDBCol lg="3" md="4" sm="6" xs="12">
              <AccountInput1
                label="Depreciation In Months"
                value={entityDetails.DepreciationDetails.DepreciationInMonths}
                onChange={(e) => handleDetailChange("DepreciationDetails", "DepreciationInMonths", e.target.value)}
              />
            </MDBCol>
            <MDBCol lg="3" md="4" sm="6" xs="12">
              <AccountInput1
                label="Date Of Commencement"
                value={entityDetails.DepreciationDetails.DateOfCommencement}
                onChange={(e) => handleDetailChange("DepreciationDetails", "DateOfCommencement", e.target.value)}
                type={"date"}
              />
            </MDBCol>
            <MDBCol lg="3" md="4" sm="6" xs="12">
              <AccountInput1
                label="Starting Unit"
                value={entityDetails.DepreciationDetails.StartingUnit}
                onChange={(e) => handleDetailChange("DepreciationDetails", "StartingUnit", e.target.value)}
              />
            </MDBCol>
            <MDBCol lg="3" md="4" sm="6" xs="12">
              <AccountInput1
                label="Maximum usage Limit"
                value={entityDetails.DepreciationDetails.MaximumUsageLimit}
                onChange={(e) => handleDetailChange("DepreciationDetails", "MaximumUsageLimit", e.target.value)}
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      )
    },
  ];
  
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
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Type" />
                  </MDBCol>
                  {/* <MDBCol lg="3" md="4" sm="6" xs="12" style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                    <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', width: '100%' }}>
                  <Checkbox
                    
                    inputProps={{ 'aria-label': 'controlled' }}
                    sx={{padding:0}}
                  />
                  <Typography sx={{fontSize:"14px",padding:0}} variant="body1">Perishable Item</Typography>
                </label>
                  </MDBCol> */}

                  
                  {/* <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Item Description" />
                  </MDBCol>

                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Item Type" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Reorder Level" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Bin capacity" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Valuation Method" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Group" />
                  </MDBCol>
                  
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Category" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Item Make" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Country of Origin" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Sub category" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Hse Code" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Printer" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Alternate category" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="CBM" />
                  </MDBCol>
                  
                    
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Bin" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                      <SecurityInput label="Description" multiline={true}/>
                    </MDBCol> */}
                   
                </MDBRow>
                {/* <MDBRow>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                      <div
                        style={{
                          marginLeft: "60px",
                          width: "120px",
                          alignItems: "center",
                          textAlign: "center",
                        }}
                      >
                        
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
                            <AddCircleIcon style={{ fontSize: "3rem" }} />
                          </IconButton>
                        )}
                        <Typography
                          sx={{ fontSize: "12px" }}
                          variant="subtitle1"
                        >
                          Image
                        </Typography>
                      </div>
                    </MDBCol>
                  </MDBRow> */}
                  {/* <Box sx={{ display: 'flex', alignItems: 'center',mt:2   }}>
          <Typography  sx={{ fontSize:"14px" }}>Do not show the Items expire within

</Typography>
          <TextField
            size="small"
            type="number"
            variant="outlined"
            sx={textFieldStyle}
          />
           <Typography  sx={{fontSize:"14px" }}>days</Typography>
        </Box> */}
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
                  <MDBRow>
                
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Asset A/C" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Accumulate Depreciation A/c" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Depreciation P/L  A/c" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Sales A/c" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Disposal Gain A/c" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Diposal Loss A/c" />
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
          currentTheme={currentTheme}
        >
          <Typography style={{ fontSize: "14px" }}>Settings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <>
            <div>
              <MDBCardBody>
                <MDBRow>
                <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Standard Cost" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Overhead Cost" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Tax Code" />
                  </MDBCol>
                </MDBRow>
                <Box sx={{ display: 'flex', alignItems: 'center',mt:2  }}>
          <Typography  sx={{ fontSize:"14px" }}>Don't show products expiring in</Typography>
          <TextField
            size="small"
            type="number"
            variant="outlined"
            sx={textFieldStyle}
          />
           <Typography  sx={{fontSize:"14px" }}>days</Typography>
        </Box>
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
          currentTheme={currentTheme}
        >
          <Typography style={{ fontSize: "14px" }}>Units</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <>
            <div>
              <MDBCardBody>
                <MDBRow>
                     
                <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Default Base Unit" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Default Sales Unit" />
                  </MDBCol>  
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Default Purchase Unit" />
                  </MDBCol>
                <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Heights" />
                  </MDBCol>

                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Weights" />
                  </MDBCol>

                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Length" />
                  </MDBCol>

                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Width" />
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
          currentTheme={currentTheme}
        >
          <Typography style={{ fontSize: "14px" }}>Classification</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <>
            <div>
              <MDBCardBody>
                <MDBRow>
                <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Barcode definition" />
                  </MDBCol> */}
                  {/* <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Subunit fields needed" />
                  </MDBCol> */}
                  {/* <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Tax Code" />
                  </MDBCol> */}
                {/* </MDBRow>
                <Box style={{paddingBottom:30,paddingTop:20}}>
                <ProductClassificationTable/>
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
          expanded={expanded === "panel5"}
          currentTheme={currentTheme}
        >
          <Typography style={{ fontSize: "14px" }}>Other Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <>
            <div>
              <MDBCardBody>
                <MDBRow>
                     
                <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Cost of issue account" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Stocks account" />
                  </MDBCol>  
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Sales account" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="WIP account" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Cost of Shortage Stock A/c" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Cost of Excess Stock A/c" />
                  </MDBCol>
                 
                  <MDBCol lg="3" md="4" sm="6" xs="12" style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                    <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', width: '100%' }}>
                  <Checkbox
                    //checked={checkedBillwise}
                    //onChange={handleChangeBillwise}
                    inputProps={{ 'aria-label': 'controlled' }}
                    sx={{padding:0}}
                  />
                  <Typography sx={{fontSize:"14px",padding:0}} variant="body1">Unbill Supplier</Typography>
                </label>
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12" style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                    <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', width: '100%' }}>
                  <Checkbox
                    //checked={checkedBillwise}
                    //onChange={handleChangeBillwise}
                    inputProps={{ 'aria-label': 'controlled' }}
                    sx={{padding:0}}
                  />
                  <Typography sx={{fontSize:"14px",padding:0}} variant="body1">Unbill Customer</Typography>
                </label>
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Cost of Sale Return A/C" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Purchase Variance A/C" />
                  </MDBCol>


                </MDBRow>
              </MDBCardBody>
            </div>
          </>
        </AccordionDetails>
      </Accordion> */}
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
          <Typography style={{ fontSize: "14px" }}>Replenishment</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <>
            <div>
              <MDBCardBody>
                <MDBRow>
                
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Default Replenishment" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Packing BOM" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="BOM" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Flushing" />
                  </MDBCol>
                </MDBRow>
              
              </MDBCardBody>
            </div>
          </>
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
          <Typography style={{ fontSize: "14px" }}>Language</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MDBCardBody>
            <MDBRow>
              <MDBCol  xs="12">
                {/* <div
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
                </div> */}
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
                <Box sx={{mb:3}}>
                <RoleSelect1
                        label="Entity"
                        value={selectedEntity}
                        onChange={(e) => handleEntityChange(e.target.value)}
                        options={Object.keys(entitiesData).map(entity => ({ label: entity, value: entity }))}
                      />
                </Box>
                 
                  </MDBCol>
                  </MDBRow>
                {/* <MDBRow>


              
                <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Description" />
                  </MDBCol>
               
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Valuation" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Warehouse" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Standard Cost" />
                  </MDBCol>
                  

                  
                 
                   
                </MDBRow> */}
                
                <Box sx={{ display: "flex", height: "100%",pb:4,pt:2,mt:2,boxShadow:'0px 2px 4px 4px rgba(128, 128, 128, 0.3)', }}>
              <List
                component="nav"
                sx={{ width: "140px", borderRight: "1px solid #ccc",padding:0 }}
              >
                {options.map((option, index) => (
                  <ListItemButton
                    key={option.label}
                    selected={selectedOption === index}
                    onClick={() => setSelectedOption(index)}
                    sx={{
                      "& .MuiTypography-root": { fontSize: "12px" }, // Adjust font size here
                       // Adding padding to make the clickable area larger
                    }}
                  >
                    <ListItemText primary={option.label} />
                  </ListItemButton>
                ))}
              </List>
              {options[selectedOption] && (
                <Box sx={{ flex: 1,p:1 }}>
                  {options[selectedOption].component}
                </Box>
              )}
            </Box>
                
              </MDBCardBody>
            </div>
          </>
        </AccordionDetails>
      </Accordion>

      
    </div>
  );
}
