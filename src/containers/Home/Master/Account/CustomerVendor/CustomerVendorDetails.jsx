import * as React from "react";
import { styled } from "@mui/material/styles";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { primaryButtonColor, thirdColor } from "../../../../../config";
import { Box, Checkbox, FormControlLabel, List, ListItemButton, ListItemText, TextField } from "@mui/material";
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
import SearchBox2 from "../../../../../components/SearchBox/SearchBox2";
import { CustomScroll } from "react-custom-scroll";
import AccountInput1 from "../../../../../components/Inputs/AccountInput1";
import MasterLanguage from "../AccountMaster/MasterLanguage";
import MasterOtherNames from "../AccountMaster/MasterOtherNames";
import RoleSelect1 from "../../../../../components/Select/RoleSelect1";
import { useState } from "react";
import { useTheme } from "../../../../../config/themeContext";

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

// List of options
// const options = [
//   { label: 'General', component: <MDBCardBody>
//      <MDBRow>


              
// <MDBCol lg="3" md="4" sm="6" xs="12">
// <AccountInput1
//               label="Credit Limit"
//               value={entityDetails.General.CreditLimit}
//               onChange={(e) => handleDetailChange("General", "CreditLimit", e.target.value)}
//             />
//   </MDBCol>

//   <MDBCol lg="3" md="4" sm="6" xs="12">
//   <AccountInput1
//               label="Credit Days"
//               value={entityDetails.General.CreditDays}
//               onChange={(e) => handleDetailChange("General", "CreditDays", e.target.value)}
//             />
//   </MDBCol>
//   <MDBCol lg="3" md="4" sm="6" xs="12">
//   <RoleSelect1
//               label="Sales Man"
//               value={entityDetails.General.SalesMan}
//               onChange={(value) => handleDetailChangeSelect("General", "SalesMan", value)}
//                 options={valuationOptions}
//             />
//   </MDBCol>
//   <MDBCol lg="3" md="4" sm="6" xs="12">
//   <AutoComplete2 autoLabel="Default currency" />
//   </MDBCol>
  

  
 
   
// </MDBRow>



//      </MDBCardBody>},
//   { label: 'Contact Person Details', component: <MDBCardBody>
//     <MDBRow>


//     <MDBCol lg="3" md="4" sm="6" xs="12">
//                     <AccountInput label="Contact Person Name" />
//                   </MDBCol>
//                   <MDBCol lg="3" md="4" sm="6" xs="12">
//                     <AccountInput label="Mobile Number" />
//                   </MDBCol>
//                   <MDBCol lg="3" md="4" sm="6" xs="12">
//                     <AccountInput label="Telephone" />
//                   </MDBCol>
                  
               

//                   <MDBCol lg="3" md="4" sm="6" xs="12">
//                     <AccountInput label="Email" />
//                   </MDBCol>

                  
      

      
     
       
//     </MDBRow>
    
   
    
//   </MDBCardBody>},
//   { label: 'Bank Details', component:<MDBCardBody>
//     <MDBRow>


//     <MDBCol lg="3" md="4" sm="6" xs="12">
//                 <AutoComplete2 autoLabel="Payment Type" />
//                   </MDBCol>

//     <MDBCol lg="3" md="4" sm="6" xs="12">
//                     <AccountInput label="Bank Account Name" />
//                   </MDBCol>  
//                   <MDBCol lg="3" md="4" sm="6" xs="12">
//                     <AccountInput label="Bank Account Number" />
//                   </MDBCol>  
//                   <MDBCol lg="3" md="4" sm="6" xs="12">
//                     <AccountInput label="IFSC Code" />
//                   </MDBCol> 
              
    
      

      
     
       
//     </MDBRow>
    
   
    
//   </MDBCardBody>},
//   { label: 'Shipping Details', component: <MDBCardBody>
//     <MDBRow>


//     <MDBCol lg="3" md="4" sm="6" xs="12">
//                     <AccountInput label="Address" />
//                   </MDBCol>

//                   <MDBCol lg="3" md="4" sm="6" xs="12">
//                   <AutoComplete2 autoLabel="City" />
//                   </MDBCol>
//                   <MDBCol lg="3" md="4" sm="6" xs="12">
//                   <AutoComplete2 autoLabel="State" />
//                   </MDBCol>
//                   <MDBCol lg="3" md="4" sm="6" xs="12">
//                   <AutoComplete2 autoLabel="Country" />
//                   </MDBCol>

//                   <MDBCol lg="3" md="4" sm="6" xs="12">
//                     <AccountInput label="Pin Code" />
//                   </MDBCol>

                  
                 
//                   <MDBCol lg="3" md="4" sm="6" xs="12">
//                     <AccountInput label="Telephone Number" />
//                   </MDBCol>
//                   <MDBCol lg="3" md="4" sm="6" xs="12">
//                     <AccountInput label="Fax Number" />
//                   </MDBCol> 

      
     
       
//     </MDBRow>
    
   
    
//   </MDBCardBody>},
//   { label: 'Vat Settings', component: <MDBCardBody>
//     <MDBRow>


   
//     <MDBCol lg="3" md="4" sm="6" xs="12">
//                 <AutoComplete2 autoLabel="Place of supply" />
//                   </MDBCol>

//                   <MDBCol lg="3" md="4" sm="6" xs="12">
//                     <AccountInput label="TRN" />
//                   </MDBCol> 

//                   <MDBCol lg="3" md="4" sm="6" xs="12">
//                   <AutoComplete2 autoLabel="Reverse charge" />
//                   </MDBCol> 
 
    
      

      
     
       
//     </MDBRow>
    
   
    
//   </MDBCardBody>},
 
// ];

const valuationOptions = [
  { label: "Valuation 1", value: "valuation1" },
  { label: "Valuation 2", value: "valuation2" },
];

const warehouseOptions = [
  { label: "Warehouse 1", value: "warehouse1" },
  { label: "Warehouse 2", value: "warehouse2" },
];

const currencyOptions = [
  { label: "Currency 1", value: "currency1" },
  { label: "Currency 2", value: "currency2" },
];

const cityOptions = [
  { label: "City 1", value: "city1" },
  { label: "City 2", value: "city2" },
];

const stateOptions = [
  { label: "State 1", value: "state1" },
  { label: "State 2", value: "state2" },
];

const countryOptions = [
  { label: "Country 1", value: "country1" },
  { label: "Country 2", value: "country2" },
];

const placeOfSupplyOptions = [
  { label: "Place of Supply 1", value: "place1" },
  { label: "Place of Supply 2", value: "place2" },
];

const reverseChargeOptions = [
  { label: "Reverse Charge 1", value: "reverse1" },
  { label: "Reverse Charge 2", value: "reverse2" },
];


export default function CustomerVendorDetails() {
  const [expanded, setExpanded] = React.useState("panel1");
  const [accountName, setAccountName] = React.useState("");
  const [selectedOption, setSelectedOption] = React.useState(0);

  const [entitiesData, setEntitiesData] = useState({
    entity1: {
      General: {
        CreditLimit: "10000",
        CreditDays: "30",
        SalesMan: "John Doe",
        DefaultCurrency: "USD",
      },
      ContactPersonDetails: {
        ContactPersonName: "Jane Smith",
        MobileNumber: "123-456-7890",
        Telephone: "098-765-4321",
        Email: "jane.smith@example.com",
      },
      BankDetails: {
        PaymentType: "Credit Card",
        BankAccountName: "Jane Smith",
        BankAccountNumber: "111222333444",
        IFSCCode: "IFSC001",
      },
      ShippingDetails: {
        Address: "123 Main St",
        City: "New York",
        State: "NY",
        Country: "USA",
        PinCode: "10001",
        TelephoneNumber: "123-456-7890",
        FaxNumber: "098-765-4321",
      },
      VatSettings: {
        PlaceOfSupply: "New York",
        TRN: "TRN001",
        ReverseCharge: "No",
      },
    },
    entity2: {
      General: {
        CreditLimit: "20000",
        CreditDays: "60",
        SalesMan: "Emily Johnson",
        DefaultCurrency: "EUR",
      },
      ContactPersonDetails: {
        ContactPersonName: "Michael Brown",
        MobileNumber: "321-654-0987",
        Telephone: "789-012-3456",
        Email: "michael.brown@example.com",
      },
      BankDetails: {
        PaymentType: "Bank Transfer",
        BankAccountName: "Michael Brown",
        BankAccountNumber: "555666777888",
        IFSCCode: "IFSC002",
      },
      ShippingDetails: {
        Address: "456 Elm St",
        City: "Los Angeles",
        State: "CA",
        Country: "USA",
        PinCode: "90001",
        TelephoneNumber: "321-654-0987",
        FaxNumber: "789-012-3456",
      },
      VatSettings: {
        PlaceOfSupply: "California",
        TRN: "TRN002",
        ReverseCharge: "Yes",
      },
    },
    entity3: {
      General: {
        CreditLimit: "15000",
        CreditDays: "45",
        SalesMan: "David Lee",
        DefaultCurrency: "GBP",
      },
      ContactPersonDetails: {
        ContactPersonName: "Sara White",
        MobileNumber: "456-789-0123",
        Telephone: "321-987-6543",
        Email: "sara.white@example.com",
      },
      BankDetails: {
        PaymentType: "PayPal",
        BankAccountName: "Sara White",
        BankAccountNumber: "999888777666",
        IFSCCode: "IFSC003",
      },
      ShippingDetails: {
        Address: "789 Pine St",
        City: "Chicago",
        State: "IL",
        Country: "USA",
        PinCode: "60601",
        TelephoneNumber: "456-789-0123",
        FaxNumber: "321-987-6543",
      },
      VatSettings: {
        PlaceOfSupply: "Illinois",
        TRN: "TRN003",
        ReverseCharge: "No",
      },
    },
    // Add more entities as needed
  });
  
  const [selectedEntity, setSelectedEntity] = useState("entity1");
const [entityDetails, setEntityDetails] = useState(
  entitiesData[selectedEntity]
);

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
    { title: "Unit2", iId: 2 },
    { title: "Unit3", iId: 3 },
  ];
  const handleChild = (data) => {
    
    setSelectedEntity(data)
  };

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
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
  
  const handleEntityChange = (value) => {
    // Save the current entity details before switching
    setEntitiesData((prevData) => ({
      ...prevData,
      [selectedEntity]: entityDetails,
    }));
  
    // Update the selected entity and load its details
    setSelectedEntity(value);
    setEntityDetails(entitiesData[value]);
  };
  const options = [
    {
      label: 'General', component: (
        <MDBCardBody>
          <MDBRow>
            <MDBCol lg="3" md="4" sm="6" xs="12">
              <AccountInput1
                label="Credit Limit"
                value={entityDetails.General.CreditLimit}
                onChange={(e) => handleDetailChange("General", "CreditLimit", e.target.value)}
              />
            </MDBCol>
            <MDBCol lg="3" md="4" sm="6" xs="12">
              <AccountInput1
                label="Credit Days"
                value={entityDetails.General.CreditDays}
                onChange={(e) => handleDetailChange("General", "CreditDays", e.target.value)}
              />
            </MDBCol>
            <MDBCol lg="3" md="4" sm="6" xs="12">
              <RoleSelect1
                label="Sales Man"
                value={entityDetails.General.SalesMan}
                onChange={(value) => handleDetailChangeSelect("General", "SalesMan", value)}
                options={valuationOptions}
              />
            </MDBCol>
            <MDBCol lg="3" md="4" sm="6" xs="12">
              <RoleSelect1
                label="Default Currency"
                value={entityDetails.General.DefaultCurrency}
                onChange={(value) => handleDetailChangeSelect("General", "DefaultCurrency", value)}
              options={currencyOptions}
            />
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    )
  },
  {
    label: 'Contact Person Details', component: (
      <MDBCardBody>
        <MDBRow>
          <MDBCol lg="3" md="4" sm="6" xs="12">
            <AccountInput1
              label="Contact Person Name"
              value={entityDetails.ContactPersonDetails.ContactPersonName}
              onChange={(e) => handleDetailChange("ContactPersonDetails", "ContactPersonName", e.target.value)}
            />
          </MDBCol>
          <MDBCol lg="3" md="4" sm="6" xs="12">
            <AccountInput1
              label="Mobile Number"
              value={entityDetails.ContactPersonDetails.MobileNumber}
              onChange={(e) => handleDetailChange("ContactPersonDetails", "MobileNumber", e.target.value)}
            />
          </MDBCol>
          <MDBCol lg="3" md="4" sm="6" xs="12">
            <AccountInput1
              label="Telephone"
              value={entityDetails.ContactPersonDetails.Telephone}
              onChange={(e) => handleDetailChange("ContactPersonDetails", "Telephone", e.target.value)}
            />
          </MDBCol>
          <MDBCol lg="3" md="4" sm="6" xs="12">
            <AccountInput1
              label="Email"
              value={entityDetails.ContactPersonDetails.Email}
              onChange={(e) => handleDetailChange("ContactPersonDetails", "Email", e.target.value)}
            />
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    )
  },
  {
    label: 'Bank Details', component: (
      <MDBCardBody>
        <MDBRow>
          <MDBCol lg="3" md="4" sm="6" xs="12">
            <RoleSelect1
              label="Payment Type"
              value={entityDetails.BankDetails.PaymentType}
              onChange={(value) => handleDetailChangeSelect("BankDetails", "PaymentType", value)}
              options={valuationOptions}
            />
          </MDBCol>
          <MDBCol lg="3" md="4" sm="6" xs="12">
            <AccountInput1
              label="Bank Account Name"
              value={entityDetails.BankDetails.BankAccountName}
              onChange={(e) => handleDetailChange("BankDetails", "BankAccountName", e.target.value)}
            />
          </MDBCol>
          <MDBCol lg="3" md="4" sm="6" xs="12">
            <AccountInput1
              label="Bank Account Number"
              value={entityDetails.BankDetails.BankAccountNumber}
              onChange={(e) => handleDetailChange("BankDetails", "BankAccountNumber", e.target.value)}
            />
          </MDBCol>
          <MDBCol lg="3" md="4" sm="6" xs="12">
            <AccountInput1
              label="IFSC Code"
              value={entityDetails.BankDetails.IFSCCode}
              onChange={(e) => handleDetailChange("BankDetails", "IFSCCode", e.target.value)}
            />
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    )
  },
  {
    label: 'Shipping Details', component: (
      <MDBCardBody>
        <MDBRow>
          <MDBCol lg="3" md="4" sm="6" xs="12">
            <AccountInput1
              label="Address"
              value={entityDetails.ShippingDetails.Address}
              onChange={(e) => handleDetailChange("ShippingDetails", "Address", e.target.value)}
            />
          </MDBCol>
          <MDBCol lg="3" md="4" sm="6" xs="12">
            <RoleSelect1
              label="City"
              value={entityDetails.ShippingDetails.City}
              onChange={(value) => handleDetailChangeSelect("ShippingDetails", "City", value)}
              options={cityOptions}
            />
          </MDBCol>
          <MDBCol lg="3" md="4" sm="6" xs="12">
            <RoleSelect1
              label="State"
              value={entityDetails.ShippingDetails.State}
              onChange={(value) => handleDetailChangeSelect("ShippingDetails", "State", value)}
              options={stateOptions}
            />
          </MDBCol>
          <MDBCol lg="3" md="4" sm="6" xs="12">
            <RoleSelect1
              label="Country"
              value={entityDetails.ShippingDetails.Country}
              onChange={(value) => handleDetailChangeSelect("ShippingDetails", "Country", value)}
              options={countryOptions}
            />
          </MDBCol>
          <MDBCol lg="3" md="4" sm="6" xs="12">
            <AccountInput1
              label="Pin Code"
              value={entityDetails.ShippingDetails.PinCode}
              onChange={(e) => handleDetailChange("ShippingDetails", "PinCode", e.target.value)}
            />
          </MDBCol>
          <MDBCol lg="3" md="4" sm="6" xs="12">
            <AccountInput1
              label="Telephone Number"
              value={entityDetails.ShippingDetails.TelephoneNumber}
              onChange={(e) => handleDetailChange("ShippingDetails", "TelephoneNumber", e.target.value)}
            />
          </MDBCol>
          <MDBCol lg="3" md="4" sm="6" xs="12">
            <AccountInput1
              label="Fax Number"
              value={entityDetails.ShippingDetails.FaxNumber}
              onChange={(e) => handleDetailChange("ShippingDetails", "FaxNumber", e.target.value)}
            />
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    )
  },
  {
    label: 'Vat Settings', component: (
      <MDBCardBody>
        <MDBRow>
          <MDBCol lg="3" md="4" sm="6" xs="12">
            <RoleSelect1
              label="Place of Supply"
              value={entityDetails.VatSettings.PlaceOfSupply}
              onChange={(value) => handleDetailChangeSelect("VatSettings", "PlaceOfSupply", value)}
              options={placeOfSupplyOptions}
            />
          </MDBCol>
          <MDBCol lg="3" md="4" sm="6" xs="12">
            <AccountInput1
              label="TRN"
              value={entityDetails.VatSettings.TRN}
              onChange={(e) => handleDetailChange("VatSettings", "TRN", e.target.value)}
            />
          </MDBCol>
          <MDBCol lg="3" md="4" sm="6" xs="12">
            <RoleSelect1
              label="Reverse Charge"
              value={entityDetails.VatSettings.ReverseCharge}
              onChange={(value) => handleDetailChangeSelect("VatSettings", "ReverseCharge", value)}
              options={reverseChargeOptions}
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
                    <AccountInput label="Code" mandatory={1} />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                <AccountInput1 label="Name"  value={accountName} onChange={handleAccountNameChange} mandatory={1}/>
                  </MDBCol>

                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Type"  isMandatory={1}/>
                  </MDBCol>

                  {/* <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Credit Limit" />
                  </MDBCol>

                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Credit Days" />
                  </MDBCol>

                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Salesman" />
                  </MDBCol> */}
                  
                  {/* <MDBCol lg="3" md="4" sm="6" xs="12">
                <AutoComplete2 autoLabel="Default Currency" />
                  </MDBCol> */}
                   {/* <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Reminder Terms" />
                  </MDBCol> */}
                  
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
                    <Typography variant="body1">Info</Typography>
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
                    <AccountInput label="Address" />
                  </MDBCol>
                 
                <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="City" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Pin Code" />
                  </MDBCol>
                 
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="State" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Country" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Telephone" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Fax" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Website" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Email" />
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
                  <AutoComplete2 autoLabel="Exchange Adjustment Gain A/C" />
                  </MDBCol>

                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Exchange Adjustment Loss A/C" />
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
                <AutoComplete2 autoLabel="Default Currency" />
                  </MDBCol>
                   <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Reminder Terms" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Exchange Adjustment Gain A/C" />
                  </MDBCol>

                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Exchange Adjustment Loss A/C" />
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
          currentTheme={currentTheme}
        >
          <Typography style={{ fontSize: "14px" }}>Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <>
            <div>
              <MDBCardBody> */}
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
                    <Typography variant="body1">Address</Typography>
                    <Box
                      sx={{
                        borderBottom: "1px dotted ",
                        borderBottmColor: getBorderColor(),
                        marginLeft: "8px", // Adjust spacing to your preference
                      }}
                    />
                  </Box> */}
                {/* <MDBRow>
                <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Address" />
                  </MDBCol>

                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="City" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Country" />
                  </MDBCol>

                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="PIN" />
                  </MDBCol>

                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Email" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Contact Person" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Mobile Number" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{ transform: "scale(0.75)", paddingTop: 2 }}
                        />
                      } // Reduce the size of the checkbox
                      label="Send Email to Customer"
                      sx={{
                        "& .MuiFormControlLabel-label": {
                          fontSize: "0.8rem", // Adjust the label font size
                          color: "gray", // Change the label color to gray
                          paddingTop: 1,
                        },
                      }}
                    />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Telephone Number" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Fax Number" />
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
                    <Typography variant="body1">Shipping Details</Typography>
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
                    <AccountInput label="Shipping Address" />
                  </MDBCol>   */}
                  {/* <MDBCol lg="3" md="4" sm="6" xs="12">
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{ transform: "scale(0.75)", paddingTop: 2 }}
                        />
                      } // Reduce the size of the checkbox
                      label="Allow customer/vendor portal-checkbox"
                      sx={{
                        "& .MuiFormControlLabel-label": {
                          fontSize: "0.8rem", // Adjust the label font size
                          color: "gray", // Change the label color to gray
                          paddingTop: 1,
                        },
                      }}
                    />
                  </MDBCol> */}
                  {/* <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="City" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Country" />
                  </MDBCol>

                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="PIN" />
                  </MDBCol>

                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Email" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Contact Person" />
                  </MDBCol> */}
                  {/* <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Mobile Number" />
                  </MDBCol> */}
                  {/* <MDBCol lg="3" md="4" sm="6" xs="12">
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{ transform: "scale(0.75)", paddingTop: 2 }}
                        />
                      } // Reduce the size of the checkbox
                      label="Send Email to Customer"
                      sx={{
                        "& .MuiFormControlLabel-label": {
                          fontSize: "0.8rem", // Adjust the label font size
                          color: "gray", // Change the label color to gray
                          paddingTop: 1,
                        },
                      }}
                    />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Telephone Number" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Fax Number" />
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
                    <Typography variant="body1">Bank Details</Typography>
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
                    <AccountInput label="Bank Account Name" />
                  </MDBCol>  
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Bank Account Number" />
                  </MDBCol>  
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="IFSC Code" />
                  </MDBCol> 
                <MDBCol lg="3" md="4" sm="6" xs="12">
                <AutoComplete2 autoLabel="Payment Type" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Finance Email" />
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
          expanded={expanded === "panel"}
          currentTheme={currentTheme}
        >
          <Typography style={{ fontSize: "14px" }}>VAT Settings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <>
            <div>
              <MDBCardBody>
                <MDBRow>
                  
                <MDBCol lg="3" md="4" sm="6" xs="12">
                <AutoComplete2 autoLabel="Place of supply" />
                  </MDBCol>

                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AutoComplete2 autoLabel="Reverse charge" />
                  </MDBCol>
                </MDBRow>
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
          <Typography style={{ fontSize: "14px" }}>INFO</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <>
            <div>
              <MDBCardBody>
                <MDBRow>
                <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Telephone Number" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Fax Number" />
                  </MDBCol>  
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Pin" />
                  </MDBCol>  
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <FormControlLabel
                      control={
                        <Checkbox
                          sx={{ transform: "scale(0.75)", paddingTop: 2 }}
                        />
                      } // Reduce the size of the checkbox
                      label="Allow customer/vendor portal-checkbox"
                      sx={{
                        "& .MuiFormControlLabel-label": {
                          fontSize: "0.8rem", // Adjust the label font size
                          color: "gray", // Change the label color to gray
                          paddingTop: 1,
                        },
                      }}
                    />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="bank Account Name" />
                  </MDBCol>  
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="bank Account Number" />
                  </MDBCol>  
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="IFSC Code" />
                  </MDBCol> 
                <MDBCol lg="3" md="4" sm="6" xs="12">
                <AutoComplete2 autoLabel="Payment Type" />
                  </MDBCol>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                    <AccountInput label="Finance Email" />
                  </MDBCol>   

                 
                </MDBRow>
              </MDBCardBody>
            </div>
          </>
        </AccordionDetails>
      </Accordion> */}
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
              {/* <MDBCol lg="3" md="4" sm="6" xs="12">
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
              </MDBCol> */}
              <MasterLanguage accountName={accountName} />
            </MDBRow>
          </MDBCardBody>
        </AccordionDetails>
      </Accordion>
      {/* <Accordion
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
      </Accordion> */}
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
