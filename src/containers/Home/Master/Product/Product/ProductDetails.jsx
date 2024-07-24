import * as React from "react";
import { styled } from "@mui/material/styles";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { primaryButtonColor, thirdColor } from "../../../../../config";
import { Checkbox, FormControlLabel, TextField,IconButton, Box, List, ListItemButton, ListItemText, Stack } from "@mui/material";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import AccountInput from "../../../../../components/Inputs/AccountInput";
import AutocompleteSecurity from "../../../../../components/AutoComplete/AutocompleteSecurity";
import AutoComplete2 from "../../../../../components/AutoComplete/AutoComplete2";
import SecurityInput from "../../../../../components/Inputs/SecurityInput";
import { useState } from "react";
import {
 Delete as DeleteIcon,
} from "@mui/icons-material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ClearIcon from '@mui/icons-material/Clear';
import ClearAllIcon from "@mui/icons-material/ClearAll";
import ProductClassificationTable from "./ProductClassificationTable";
import MasterLanguage from "../../Account/AccountMaster/MasterLanguage";
import AccountInput1 from "../../../../../components/Inputs/AccountInput1";
import { useTheme } from "../../../../../config/themeContext";
import RoleSelect1 from "../../../../../components/Select/RoleSelect1";
import EnteredEntityList from "./EnteredEntityList";


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
const valuationOptions = [
  { label: "Entity 1 Valuation", value: "Entity 1 Valuation" },
  { label: "Entity 2 Valuation", value: "Entity 2 Valuation" },
  // Add more options as needed based on your entities
];
const vendorOptions = [
  { label: "Entity 1 vendor", value: "Entity 1 vendor" },
  { label: "Entity 2 vendor", value: "Entity 2 vendor" },
  // Add more options as needed based on your entities
];
const warehouseOptions = [
  { label: "Entity 1 Warehouse", value: "Entity 1 Warehouse" },
  { label: "Entity 2 Warehouse", value: "Entity 2 Warehouse" },
  // Add more options as needed based on your entities
];
const baseUnitOptions = [
  { label: "Unit 1", value: "Unit 1" },
  { label: "Unit 2", value: "Unit 2" },
  // Add more options as needed based on your entities
];
const salesUnitOptions = [
  { label: "Unit 1", value: "Unit 1" },
  { label: "Unit 2", value: "Unit 2" },
  // Add more options as needed based on your entities
];
const purchaseUnitOptions = [
  { label: "Unit 1", value: "Unit 1" },
  { label: "Unit 2", value: "Unit 2" },
  // Add more options as needed based on your entities
];
const countryOfOriginOptions = [
  { label: "Country 1", value: "Country 1" },
  { label: "Country 2", value: "Country 2" },
  // Add more options as needed based on your entities
];
const taxableOptions = [
  { label: "Yes", value: "Yes" },
  { label: "No", value: "No" },
  // Add more options as needed based on your entities
];


export default function ProductDetails() {
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
        Description: "Entity 1 Description",
        Valuation: "Entity 1 Valuation",
        Warehouse: "Entity 1 Warehouse",
        StandardCost: "100",
        Vendor:""
      },
      Units: {
        BaseUnit: "Unit 1",
        SalesUnit: "Unit 1",
        PurchaseUnit: "Unit 1",
      },
      Reorder: {
        EntityWiseQuantity: "50",
        WarehouseQuantity: "20",
        LeadTimeInDays: "5",
      },
      Specification: {
        Hscode: "123456",
        CountryOfOrigin: "Country 1",
        Height: "10",
        Width: "5",
        CBM: "0.5",
        Weight: "1",
      },
      Settings: {
        Taxable: "Yes",
      },
    },
    entity2: {
      General: {
        Description: "Entity 2 Description",
        Valuation: "Entity 2 Valuation",
        Warehouse: "Entity 2 Warehouse",
        StandardCost: "200",
        Vendor:""
      },
      Units: {
        BaseUnit: "Unit 2",
        SalesUnit: "Unit 2",
        PurchaseUnit: "Unit 2",
      },
      Reorder: {
        EntityWiseQuantity: "100",
        WarehouseQuantity: "50",
        LeadTimeInDays: "10",
      },
      Specification: {
        Hscode: "654321",
        CountryOfOrigin: "Country 2",
        Height: "20",
        Width: "10",
        CBM: "1",
        Weight: "2",
      },
      Settings: {
        Taxable: "No",
      },
    },
  }
  )
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
              <AccountInput1
                label="Description"
                value={entityDetails.General.Description}
                onChange={(e) => handleDetailChange("General", "Description", e.target.value)}
              />
            </MDBCol>
            <MDBCol lg="3" md="4" sm="6" xs="12">
              <RoleSelect1
                label="Vendor"
                value={entityDetails.General.Vendor}
                onChange={(value) => handleDetailChangeSelect("General", "Vendor", value)}
                options={vendorOptions}
              />
            </MDBCol>
            <MDBCol lg="3" md="4" sm="6" xs="12">
              <RoleSelect1
                label="Valuation"
                value={entityDetails.General.Valuation}
                onChange={(value) => handleDetailChangeSelect("General", "Valuation", value)}
                options={valuationOptions}
              />
            </MDBCol>
            <MDBCol lg="3" md="4" sm="6" xs="12">
              <RoleSelect1
                label="Warehouse"
                value={entityDetails.General.Warehouse}
                onChange={(value) => handleDetailChangeSelect("General", "Warehouse", value)}
                options={warehouseOptions}
              />
            </MDBCol>
            <MDBCol lg="3" md="4" sm="6" xs="12">
              <AccountInput1
                label="Standard Cost"
                value={entityDetails.General.StandardCost}
                onChange={(e) => handleDetailChange("General", "StandardCost", e.target.value)}
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      )
    },
    {
      label: 'Units',
      component: (
        <MDBCardBody>
          <MDBRow>
            <MDBCol lg="3" md="4" sm="6" xs="12">
              <RoleSelect1
                label="Base Unit"
                value={entityDetails.Units.BaseUnit}
                onChange={(value) => handleDetailChangeSelect("Units", "BaseUnit", value)}
                options={baseUnitOptions}
              />
            </MDBCol>
            <MDBCol lg="3" md="4" sm="6" xs="12">
              <RoleSelect1
                label="Sales Unit"
                value={entityDetails.Units.SalesUnit}
                onChange={(value) => handleDetailChangeSelect("Units", "SalesUnit", value)}
                options={salesUnitOptions}
              />
            </MDBCol>
            <MDBCol lg="3" md="4" sm="6" xs="12">
              <RoleSelect1
                label="Purchase Unit"
                value={entityDetails.Units.PurchaseUnit}
                onChange={(value) => handleDetailChangeSelect("Units", "PurchaseUnit", value)}
                options={purchaseUnitOptions}
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      )
    },
    {
      label: 'Reorder',
      component: (
        <MDBCardBody>
          <MDBRow>
            <MDBCol lg="3" md="4" sm="6" xs="12">
              <AccountInput1
                label="Entity wise Quantity"
                value={entityDetails.Reorder.EntityWiseQuantity}
                onChange={(e) => handleDetailChange("Reorder", "EntityWiseQuantity", e.target.value)}
              />
            </MDBCol>
            <MDBCol lg="3" md="4" sm="6" xs="12">
              <AccountInput1
                label="Warehouse Quantity"
                value={entityDetails.Reorder.WarehouseQuantity}
                onChange={(e) => handleDetailChange("Reorder", "WarehouseQuantity", e.target.value)}
              />
            </MDBCol>
            <MDBCol lg="3" md="4" sm="6" xs="12">
              <AccountInput1
                label="Lead time in Days"
                value={entityDetails.Reorder.LeadTimeInDays}
                onChange={(e) => handleDetailChange("Reorder", "LeadTimeInDays", e.target.value)}
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      )
    },
    {
      label: 'Specification',
      component: (
        <MDBCardBody>
          <MDBRow>
            <MDBCol lg="3" md="4" sm="6" xs="12">
              <AccountInput1
                label="Hscode"
                value={entityDetails.Specification.Hscode}
                onChange={(e) => handleDetailChange("Specification", "Hscode", e.target.value)}
              />
            </MDBCol>
            <MDBCol lg="3" md="4" sm="6" xs="12">
              <RoleSelect1
                label="Country of origin"
                value={entityDetails.Specification.CountryOfOrigin}
                onChange={(value) => handleDetailChangeSelect("Specification", "CountryOfOrigin", value)}
                options={countryOfOriginOptions}
              />
            </MDBCol>
            <MDBCol lg="3" md="4" sm="6" xs="12">
              <AccountInput1
                label="Height"
                value={entityDetails.Specification.Height}
                onChange={(e) => handleDetailChange("Specification", "Height", e.target.value)}
              />
            </MDBCol>
            <MDBCol lg="3" md="4" sm="6" xs="12">
              <AccountInput1
                label="Width"
                value={entityDetails.Specification.Width}
                onChange={(e) => handleDetailChange("Specification", "Width", e.target.value)}
              />
            </MDBCol>
            <MDBCol lg="3" md="4" sm="6" xs="12">
              <AccountInput1
                label="CBM"
                value={entityDetails.Specification.CBM}
                onChange={(e) => handleDetailChange("Specification", "CBM", e.target.value)}
              />
            </MDBCol>
            <MDBCol lg="3" md="4" sm="6" xs="12">
              <AccountInput1
                label="Weight"
                value={entityDetails.Specification.Weight}
                onChange={(e) => handleDetailChange("Specification", "Weight", e.target.value)}
              />
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      )
    },
    {
      label: 'Settings',
      component: (
        <MDBCardBody>
          <MDBRow>
            <MDBCol lg="3" md="4" sm="6" xs="12">
              <RoleSelect1
                label="Taxable"
                value={entityDetails.Settings.Taxable}
                onChange={(value) => handleDetailChangeSelect("Settings", "Taxable", value)}
                options={taxableOptions}
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
                  <MDBCol lg="3" md="4" sm="6" xs="12" style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                    <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', width: '100%' }}>
                  <Checkbox
                    
                    inputProps={{ 'aria-label': 'controlled' }}
                    sx={{padding:0}}
                  />
                  <Typography sx={{fontSize:"14px",padding:0}} variant="body1">Perishable Item</Typography>
                </label>
                  </MDBCol>

                  
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
                  <AutoComplete2 autoLabel="Inventory A/C" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Cost of Goods A/c" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Sales A/C" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="UnBilled Supplier A/C" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="UnBilled Customer A/C" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="WIP A/C" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Shortage Stock A/C" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Excess  Stock A/C" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Purchase Varience A/c" />
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
            {/* <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" sx={{color: currentTheme.actionIcons,}}  />}
              aria-label="breadcrumb"
              style={{ color: primaryButtonColor }}
            >
              {breadcrumbs}
            </Breadcrumbs> */}
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{ flex: "0 0 auto" }}
          >
          
           
            <IconButton
              aria-label="Edit"
              sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
            >
              <Stack direction="column" alignItems="center">
                <ClearAllIcon style={{ color: currentTheme.actionIcons }} />

                <Typography
                  variant="caption"
                  align="center"
                  style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                >
                  Clear
                </Typography>
              </Stack>
            </IconButton>
            {/* <IconButton
              aria-label="Clone"
              sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
            >
              <Stack direction="column" alignItems="center">
                <SaveIcon style={{ color: currentTheme.actionIcons }} />
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
              onClick={handleClose}
              aria-label="Close"
              sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
            >
              <Stack direction="column" alignItems="center">
                <CloseIcon style={{ color: currentTheme.actionIcons }} />
                <Typography
                  variant="caption"
                  align="center"
                  style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                >
                  Close
                </Typography>
              </Stack>
            </IconButton> */}
          </Stack>
        </Box>
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
                 
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <EnteredEntityList/>
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
