import * as React from "react";
import { styled } from "@mui/material/styles";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { primaryButtonColor, secondryColor, thirdColor } from "../../../../config";
import { MDBCard,
  MDBCardBody,
  MDBCol,
  MDBInput,
  MDBRow,} from "mdb-react-ui-kit";
import AccountInput from "../../../../components/Inputs/AccountInput";
import AutoComplete2 from "../../../../components/AutoComplete/AutoComplete2";
import { Box,Button as ButtonM , Dialog, DialogActions, DialogContent, IconButton, Stack } from "@mui/material";
import { Collapse, CardBody,Button, Card, Alert } from "reactstrap";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Popover from '@mui/material/Popover';
import PrintIcon from "@mui/icons-material/Print";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import HistoryIcon from '@mui/icons-material/History';
import SaveIcon from "@mui/icons-material/Save";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import FileCopyIcon from "@mui/icons-material/FileCopy";
import { AddCircleOutline , Edit as EditIcon, Delete as DeleteIcon, Close as CloseIcon } from '@mui/icons-material';
import { createProfileTree, masterItems, passwordPolicy, restrictionItems, roleTabData } from "../../../../config/securityConfig";
import PersonIcon from '@mui/icons-material/Person';
import TransferList from "./TransferList";
import ProfileManagementPanel from "./RoleAddExclusion";
import RoleRestriction from "./RoleRestrictionForEntry";
import ChecklistIcon from '@mui/icons-material/Checklist';
import RoleTreeRestriction from "./RestrictionForTrees";
import WidgetsIcon from "@mui/icons-material/Widgets";
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import RoleTransactionRights from "./RoleTransactionRights";
import RoleSelect1 from "../../../../components/Select/RoleSelect1";
import { useState } from "react";
import ProfileHistoryTable from "../CreateProfile/ProfileHistoryTable";
import RoleHistoryTable from "./RoleHistoryTable";
import TabDetails from "./RoleHistoryTab";
import { useTheme } from "../../../../config/themeContext";

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
  ))(({ theme,currentTheme  }) => ({
    // color: primaryButtonColor,
    // backgroundColor: thirdColor,
    flexDirection: "row",
    justifyContent: "space-between",
    "& .MuiAccordionSummary-content": {
      flexGrow: 1,
      display: 'flex',
    alignItems: 'center',
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

  function BasicBreadcrumbs({currentTheme}) {
    return (
      <div role="presentation" style={{display:"flex",flexDirection:"row",maxWidth:"fit-content",alignItems:"center"}} >
        
        <Stack spacing={2} sx={{ flex: 1 }}>
        <Breadcrumbs  
        // sx={{
        //       "& .MuiBreadcrumbs-separator": { mx: -0.0 }, // Reducing space around the separator
        //       "& .MuiTypography-root": { mr: -0.0, ml: -0.0 } // Adjusting text margins
        //     }} 
            separator={<NavigateNextIcon fontSize="small" sx={{color: currentTheme.actionIcons,}} />}
          aria-label="breadcrumb">
        
        <Link
        underline="hover"
        sx={{ display: "flex", alignItems: "center", fontSize: "1rem",color: currentTheme.actionIcons, }} // Reduce font size
        key="1"
        
        
      >
        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
        Home
      </Link>
      <Link
        underline="hover"
        key="2"
        
        sx={{ fontSize: "1rem",color: currentTheme.actionIcons, }}
        
      >
        Security
      </Link>,
     
      <Typography key="3"  sx={{ fontSize: "1rem",color: currentTheme.actionIcons, }}>
      Create Role
      </Typography>,
        </Breadcrumbs>
        </Stack>
      </div>
    );
  }
  const DefaultIcons = ({iconsClick,detailPageId,currentTheme}) => {
    
    return (
      <Box sx={{ display: "flex", flexDirection: "row", gap: "5px" }}>
        {/* {detailPageId !=0 ?
      <IconButton
              aria-label="New"
              sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
              onClick={()=>iconsClick("GetHistory")}
            >
              <Stack direction="column" alignItems="center">
        <HistoryIcon sx={{ color: currentTheme.actionIcons, }} />
        <Typography
                  variant="caption"
                  align="center"
                  style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                >
                  History
                </Typography>
              </Stack>
            </IconButton>
            :null
      }   */}
           
              <IconButton
                aria-label="New"
                sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
                //onClick={()=>iconsClick("close")}
              >
                <Stack direction="column" alignItems="center">
          <SaveIcon sx={{ color: currentTheme.actionIcons, }} />
          <Typography
                    variant="caption"
                    align="center"
                    style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                  >
                    Save
                  </Typography>
                </Stack>
              </IconButton>
              {detailPageId !=0 ?
              <IconButton
                aria-label="New"
                sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
                //onClick={()=>iconsClick("close")}
              >
                <Stack direction="column" alignItems="center">
          <DeleteIcon sx={{ color: currentTheme.actionIcons, }} />
          <Typography
                    variant="caption"
                    align="center"
                    style={{color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                  >
                    Delete
                  </Typography>
                </Stack>
              </IconButton>
               :null
              }      
              {detailPageId !=0 ?
              <IconButton
              aria-label="New"
              sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
              onClick={()=>iconsClick("GetUsersOnRole")}
            >
              <Stack direction="column" alignItems="center">
        <PersonIcon sx={{ color: currentTheme.actionIcons, }} />
        <Typography
                  variant="caption"
                  align="center"
                  style={{color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                >
                  Get Users On Role
                </Typography>
              </Stack>
            </IconButton>
              :null
              }
              
              <IconButton
                aria-label="New"
                sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
                onClick={()=>iconsClick("close")}
              >
                <Stack direction="column" alignItems="center">
          <CloseIcon sx={{ color: currentTheme.actionIcons, }} />
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

  

  export default function RoleDetails({detailPageId,setPage}) {

    
    const { currentTheme } = useTheme();

    const buttonStyle ={
      backgroundColor: currentTheme.secondaryColor,
      color: currentTheme.sideBarTextColor1,
      textTransform: 'none',
      padding: "1px",
      '&:hover': {
        backgroundColor: currentTheme.secondaryColor, // Change as needed
        color: currentTheme.sideBarTextColor1 // Example hover color change
      },
      
    }


    const [expanded, setExpanded] = React.useState("panel1");
    const [formData, setFormData] = React.useState({sName:null,iId:null})
    const [selectedOption, setSelectedOption] = React.useState('');
    const [openUsersOnRole, setOpenUsersOnRole] = React.useState(false)
    const [openHistory, setOpenHistory] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);

  
    const handleRowClick = (row) => {

      
      setSelectedRow(roleTabData);
      
    };

    const handleLoadHistory = ()=>{
   
      setOpenHistory(true)
    }
    const handleCloseLoadHistory = ()=>{
      setSelectedRow(null)
      setOpenHistory(false)
    }
    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };
    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value);
    };

    const handleIconsClick =(value) => {
      switch (value.trim()) {
        case "new":
          handleAdd();
          break;
        case "close":
          handleclose();
          break;
        case "GetUsersOnRole":
          handleUsersOnRole();
          break;
        case "GetHistory":
          handleLoadHistory();
          break;
        default:
          break;
      }
}
const  handleclose=()=>{
  setPage("summary")
}
const handleUsersOnRole = ()=>{
    
  setOpenUsersOnRole(true)
}
const handleCloseUsersOnRole = ()=>{
  
  setOpenUsersOnRole(false)
} 
    
    return (
      <Box sx={{ display: "flex",flexDirection:"column",width:"100%"}}>
    <Box sx={{display:"flex",width:"100%",flexDirection:"row",justifyContent:"space-between",paddingLeft: 1.5,
            paddingRight: 1.5,}}>   
       <BasicBreadcrumbs currentTheme={currentTheme}/>
       <DefaultIcons detailPageId={detailPageId} iconsClick={handleIconsClick} currentTheme={currentTheme}/>
       
    </Box>
    <Box sx={{ width:"100%",overflowX: 'hidden',display:"flex",flexDirection:"column",maxHeight:"83vh",overflowY:"auto",scrollbarWidth:"thin",paddingBottom:"30px"}}>
    <Box sx={{pl:3,display:"flex",flexDirection:"column",paddingTop:"10px"}}>
        <Typography sx={{fontSize:"20px"}}>
          Create Role
        </Typography>
        
        <>
            <div>
              <MDBCardBody>
                <MDBRow>
                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <AccountInput label="Role Name"  mandatory={1}/>
                  </MDBCol>

                  <MDBCol lg="3" md="4" sm="6" xs="12">
                  <RoleSelect1
                    label="Password Policy"
                    value={selectedOption}
                    onChange={handleSelectChange}
                    options={passwordPolicy}
                    mandatory={1}
                  />
                  </MDBCol>
                  </MDBRow>
              </MDBCardBody>
            </div>
          </>
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
            sx={{ alignItems: "center", color: currentTheme.sideBarTextColor1, backgroundColor: currentTheme.secondaryColor, border: `1px solid ${currentTheme.sideBarTextColor1}` }}
            currentTheme={currentTheme}
          >
            <IconButton
         
          sx={{ fontSize: "0.8rem", padding: "0rem" }}
          //onClick={()=>iconsClick("close")}
        >
          <Stack direction="column" alignItems="center">
    <PersonIcon sx={{ color:primaryButtonColor }} />
   
          </Stack>
        </IconButton>
            <Typography style={{ fontSize: "14px" }}>Assigned Profiles</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <>
              <div>
                <MDBCardBody >
                <TransferList />
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
            sx={{ alignItems: "center", color: currentTheme.sideBarTextColor1, backgroundColor: currentTheme.secondaryColor, border: `1px solid ${currentTheme.sideBarTextColor1}` }}
            currentTheme={currentTheme}
          >
            <IconButton
         
         sx={{ fontSize: "0.8rem", padding: "0rem" }}
         //onClick={()=>iconsClick("close")}
       >
         <Stack direction="column" alignItems="center">
   <AddCircleOutlineIcon sx={{ color:primaryButtonColor }} />
  
         </Stack>
       </IconButton>
            <Typography style={{ fontSize: "14px" }}>Additions</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <>
              <div>
                <MDBCardBody >
                <ProfileManagementPanel
                  
                  createProfileTree={createProfileTree}
                  restrictionItems={restrictionItems}
                  
                />
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
            sx={{ alignItems: "center", color: currentTheme.sideBarTextColor1, backgroundColor: currentTheme.secondaryColor, border: `1px solid ${currentTheme.sideBarTextColor1}` }}
          >
            <IconButton
         
         sx={{ fontSize: "0.8rem", padding: "0rem" }}
         //onClick={()=>iconsClick("close")}
       >
         <Stack direction="column" alignItems="center">
       <RemoveCircleOutlineIcon sx={{ color:primaryButtonColor }} />
  
         </Stack>
       </IconButton>
            <Typography style={{ fontSize: "14px" }}>Exclusions</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <>
              <div>
                <MDBCardBody >
                <ProfileManagementPanel
                  
                  createProfileTree={createProfileTree}
                  restrictionItems={restrictionItems}
                  
                />
                </MDBCardBody>
              </div>
            </>
          </AccordionDetails>
        </Accordion>  
        <Accordion
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            aria-controls="panel4d-content"
            id="panel4d-header"
            className
            expanded={expanded === "panel4"}
            currentTheme={currentTheme}
            sx={{ alignItems: "center", color: currentTheme.sideBarTextColor1, backgroundColor: currentTheme.secondaryColor, border: `1px solid ${currentTheme.sideBarTextColor1}` }}
          >
            <IconButton
         
         sx={{ fontSize: "0.8rem", padding: "0rem" }}
         //onClick={()=>iconsClick("close")}
       >
         <Stack direction="column" alignItems="center">
       <ChecklistIcon sx={{ color:primaryButtonColor }} />
  
         </Stack>
       </IconButton>
            <Typography style={{ fontSize: "14px" }}>Restrictions For Entry</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <>
              <div>
                <MDBCardBody >
                <RoleRestriction masterItems={masterItems}  restrictionItems={restrictionItems}/>
                </MDBCardBody>
              </div>
            </>
          </AccordionDetails>
        </Accordion>  
        {/* <Accordion
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            aria-controls="panel5d-content"
            id="panel5d-header"
            className
            expanded={expanded === "panel5"}
            currentTheme={currentTheme}
            sx={{ alignItems: "center", color: currentTheme.sideBarTextColor1, backgroundColor: currentTheme.secondaryColor, border: `1px solid ${currentTheme.sideBarTextColor1}` }}
          >
            <IconButton
         
         sx={{ fontSize: "0.8rem", padding: "0rem" }}
         //onClick={()=>iconsClick("close")}
       >
         <Stack direction="column" alignItems="center">
       <WidgetsIcon sx={{ color:primaryButtonColor }} />
  
         </Stack>
       </IconButton>
            <Typography style={{ fontSize: "14px" }}>Restrictions For Trees</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <>
              <div>
                <MDBCardBody >
                <RoleTreeRestriction masterItems={masterItems}  />
                </MDBCardBody>
              </div>
            </>
          </AccordionDetails>
        </Accordion>  */}
        <Accordion
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary
            aria-controls="panel6d-content"
            id="panel6d-header"
            className
            expanded={expanded === "panel6"}
            currentTheme={currentTheme}
            sx={{ alignItems: "center", color: currentTheme.sideBarTextColor1, backgroundColor: currentTheme.secondaryColor, border: `1px solid ${currentTheme.sideBarTextColor1}` }}
          >
            <IconButton
         
         sx={{ fontSize: "0.8rem", padding: "0rem" }}
         //onClick={()=>iconsClick("close")}
       >
         <Stack direction="column" alignItems="center">
       <SwapHorizIcon sx={{ color:primaryButtonColor }} />
  
         </Stack>
       </IconButton>
            <Typography style={{ fontSize: "14px" }}>Transaction Rights</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <>
              <div>
                <MDBCardBody >
                <RoleTransactionRights/>
                </MDBCardBody>
              </div>
            </>
          </AccordionDetails>
        </Accordion> 
       

        </Box>
        <Dialog open={openUsersOnRole} onClose={handleCloseUsersOnRole} aria-labelledby="form-dialog-title">
  <Typography variant="h6" gutterBottom component="div" sx={{backgroundColor:currentTheme.thirdColor,textAlign:"center",color:currentTheme.sideBarTextColor1}}>
       Users in role
        </Typography>
        <Box sx={{minHeight:"200px",ml:2}}>
          <Typography>
            User1
          </Typography>

        </Box>
  <DialogContent>
  <input placeholder='Search' style={{borderRadius:"5px", border:"1px solid #ddd"}}/>
    {/* You can add more content here such as a list of items */}
  </DialogContent>
  <DialogActions>
  <ButtonM onClick={handleCloseUsersOnRole} 
     sx={buttonStyle}

    
    >
      Ok
    </ButtonM>
    <ButtonM onClick={handleCloseUsersOnRole} 
     sx={buttonStyle}

    
    >
      Cancel
    </ButtonM>
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
<Dialog  open={openHistory} onClose={handleCloseLoadHistory} 
sx={{
  '& .MuiDialog-paper': {
    width: '70vw', // Set your desired width here (e.g., '80vw' for 80% of the viewport width or '600px' for a fixed width)
    maxWidth: 'none',
    height:"90vh"
  },
}}>
  <Typography variant="h6" gutterBottom component="div" sx={{backgroundColor:currentTheme.thirdColor,textAlign:"center",color:currentTheme.sideBarTextColor1}}>
       History
        </Typography>
        <Box sx={{minHeight:"200px",padding:"30px",maxHeight:"80vh",overflowY:"scroll",scrollbarWidth:"thin"}}>
        <RoleHistoryTable  onRowClick={handleRowClick}/>
        {selectedRow && (
                <Box sx={{ marginTop: 2 }}>
                  {/* <Typography>Selected Row Details:</Typography> */}
                  {/* Render additional table based on selected row */}
                  <TabDetails data={selectedRow} />
                </Box>
              )}

        </Box>
  <DialogContent>
  
    {/* You can add more content here such as a list of items */}
  </DialogContent>
  <DialogActions>
  {/* <ButtonM onClick={handleCloseLoadHistory} 
     sx={buttonStyle}

    
    >
      Ok
    </ButtonM> */}
    <ButtonM onClick={handleCloseLoadHistory} 
     sx={buttonStyle}

    
    >
      Close
    </ButtonM>
    
    
  </DialogActions>
</Dialog>
        </Box>
  );
}        