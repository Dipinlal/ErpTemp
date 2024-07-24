import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Box, Typography, Stack } from '@mui/material';
import { AddCircleOutline , Edit as EditIcon, Delete as DeleteIcon, Close as CloseIcon  } from '@mui/icons-material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { primaryButtonColor, primaryColor, secondryColor, thirdColor } from '../../../config';
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { Collapse, Button, CardBody, Card, Alert } from "reactstrap";
import Popover from '@mui/material/Popover';
import PrintIcon from "@mui/icons-material/Print";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import { EntityMasterTable, initialRows, TagCreationTable } from '../../../config/securityConfig';
import { useTheme } from '../../../config/themeContext';
import FileCopyIcon from "@mui/icons-material/FileCopy";
import TableSecurity from '../../../components/Tables/TableSecurity';
import SettingsIcon from "@mui/icons-material/Settings";


function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}


function BasicBreadcrumbs({currentTheme}) {
  return (
    <div role="presentation" style={{display:"flex",flexDirection:"row",maxWidth:"fit-content",alignItems:"center"}} onClick={handleClick}>
      
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
      
      onClick={handleClick}
    >
      <SettingsIcon sx={{ mr: 0.5 }} fontSize="inherit" />
      Settings
    </Link>
    {/* <Link
      underline="hover"
      key="2"
      
      sx={{ fontSize: "1rem",color: currentTheme.actionIcons, }}
      onClick={handleClick}
    >
      Security
    </Link>, */}
   
    <Typography key="3"  sx={{ fontSize: "1rem",color: currentTheme.actionIcons, }}>
    Tag Creation
    </Typography>,
      </Breadcrumbs>
      </Stack>
    </div>
  );
}
const DefaultIcons = ({iconsClick,currentTheme}) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: "5px",alignItems:"center" }}>
      
      <IconButton
              aria-label="New"
              sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
              onClick={()=>iconsClick("new")}
            >
              <Stack direction="column" alignItems="center">
                <AddIcon style={{ color: currentTheme.actionIcons, }} />
                <Typography
                  variant="caption"
                  align="center"
                  style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                >
                  New
                </Typography>
              </Stack>
            </IconButton>
            <IconButton
              aria-label="New"
              sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
              onClick={()=>iconsClick("edit")}
            >
              <Stack direction="column" alignItems="center">
        <EditIcon sx={{ color: currentTheme.actionIcons, }} />
        <Typography
                  variant="caption"
                  align="center"
                  style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                >
                  Edit
                </Typography>
              </Stack>
            </IconButton>
            {/* <IconButton
                aria-label="Clone"
                sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
              >
                <Stack direction="column" alignItems="center">
                  <FileCopyIcon sx={{ color: currentTheme.actionIcons, }}  />
                  <Typography
                    variant="caption"
                    align="center"
                    style={{color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                  >
                    Clone
                  </Typography>
                </Stack>
              </IconButton> */}
              <IconButton
                aria-label="Clone"
                sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
              >
                <Stack direction="column" alignItems="center">
                  <PrintIcon sx={{ color: currentTheme.actionIcons, }}  />
                  <Typography
                    variant="caption"
                    align="center"
                    style={{color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                  >
                    Excel
                  </Typography>
                </Stack>
              </IconButton>
            <IconButton
              aria-label="New"
              sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
              onClick={()=>iconsClick("delete")}
            >
              <Stack direction="column" alignItems="center">
        <DeleteIcon sx={{ color: currentTheme.actionIcons, }} />
        <Typography
                  variant="caption"
                  align="center"
                  style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
                >
                  Delete
                </Typography>
              </Stack>
            </IconButton>
            <IconButton
              aria-label="New"
              sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
              onClick={()=>iconsClick("close")}
            >
              <Stack direction="column" alignItems="center">
        <CloseIcon sx={{color: currentTheme.actionIcons, }} />
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
const AdditionalIcons = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", gap: "5px" }}>
     
      <IconButton
              aria-label="New"
              sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
              onClick={()=>iconsClick("close")}
            >
              <Stack direction="column" alignItems="center">
        <PrintIcon sx={{ color:primaryButtonColor }} />
        <Typography
                  variant="caption"
                  align="center"
                  style={{ color: primaryButtonColor, fontSize: "0.6rem" }}
                >
                  Export
                </Typography>
              </Stack>
            </IconButton>
            
      {/* <IconButton>
        <PrintIcon sx={{ color:primaryButtonColor }} />
      </IconButton>
      <IconButton>
        <PrintIcon sx={{ color:primaryButtonColor }} />
      </IconButton>
      <IconButton>
        <PrintIcon sx={{ color:primaryButtonColor }} />
      </IconButton> */}
    </Box>
  );
};
// function Example(args) {
//   const [isOpen, setIsOpen] = useState(false);
//   const [hide, setHide] = useState(false);

//   const toggleOpen = () => {
//     setIsOpen(true);
//     setHide(true);
//   };
//   const toggleClose = () => {
//     setIsOpen(false);
//     setTimeout(() => {
//       setHide(false);
//     }, 400);
//   };

//   return (
//     <React.StrictMode>
//       {!hide ? (
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
            
//           }}
//         >
//           <Button
//             color="primary"
//             onClick={toggleOpen}
//             style={{
//               marginBottom: "1rem",
//               padding: "0.1rem",
//               fontSize: "0.6rem",
//               height: "3rem",
//               borderRadius: "0.5rem 0 0 0.5rem",
//             }}
//           >
//             <KeyboardDoubleArrowLeftIcon style={{ fontSize: "1rem" }} />
//           </Button>
//         </div>
//       ) : null}

//       <Collapse horizontal isOpen={isOpen} {...args}>
       
//       <Alert
//         style={{
          
//           boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)',
//           backgroundColor: secondryColor,
//           display: 'flex',
//           alignItems: 'center',
      
//         }}
//       >
//           <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', }}>
//         < AdditionalIcons/>
//         <Button
//         color="primary"
//         onClick={toggleClose}
       
//           style={{
//             marginBottom: "1rem",
//             padding: "0.1rem",
//             fontSize: "0.6rem",
//             height: "3rem",
//             borderRadius: "0 0.5rem 0.5rem 0",
//           }}
//       >
//              <KeyboardDoubleArrowLeftIcon style={{ fontSize: "1rem" }} />
//       </Button>
//     </div>
//       </Alert>
      
//       </Collapse>
//     </React.StrictMode>
//   );
// }

function Example() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <IconButton sx={{ fontSize: "0.8rem", padding: "0rem" }} aria-describedby={id} variant="contained" onClick={handleClick}>
      <Button
            color="primary"
           
            style={{
              marginBottom: "0rem",
              padding: "0.1rem",
              fontSize: "0.6rem",
              height: "2.8rem",
              borderRadius: "0.5rem 0 0 0.5rem",
            }}
          >
            <KeyboardDoubleArrowLeftIcon style={{ fontSize: "1rem" }} />
          </Button>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'left',
          horizontal: 'bottom',
        }}
        slotProps={{
          paper: {
            style: {
              border:`1px solid ${primaryColor}`,
              backgroundColor: secondryColor, // Customize the background color here
              padding: '0px', // You can also add other styles like padding, etc.
            },
          }
        }}
        
      >
        <AdditionalIcons />
      </Popover>
    </div>
  );
}



const TagCreationSummary = ({setPage,setdetailPageId}) => {
  const [rows, setRows] = React.useState([]);
  const [displayLength, setdisplayLength] = React.useState(10);
  const [pageNumber, setpageNumber] = React.useState(1);
  const [changesTriggered, setchangesTriggered] = React.useState(false);
  const [selectedDatas, setselectedDatas] = React.useState([]);
  const [totalRows, settotalRows] = useState(10)
  const [refreshFlag, setrefreshFlag] = React.useState(true)
  const [searchKey, setsearchKey] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [hide, setHide] = useState(false);

  const { currentTheme } = useTheme();

  useEffect(() => {
    setRows(TagCreationTable)
  }, [TagCreationTable])
  

  const handleRowDoubleClick = (rowiId) => {
  
    // if (rowiId === null) {
    //   setAlertMessage("Please Select Row");
    //   setShowAlert(true);
    //   setalertcolor("#ffcc00");
    //   setTimeout(() => {
    //     setShowAlert(false);
    //   }, 2000);
    // } else {
    //   setdoubleClickediId(rowiId);
    //   setnewOpen(true);
    // }
  };
  const handleSearchKeyChange = (newSearchKey) => {
    setsearchKey(newSearchKey);
  };
  
  const handleSelectedRowsChange = (selectedRowsData) => {
   
    setselectedDatas(selectedRowsData);
  };
  const resetChangesTrigger = () => {
    setchangesTriggered(false);
  };
  const handleDisplayLengthChange = (newDisplayLength) => {
    setdisplayLength(newDisplayLength);
  };

  const handlepageNumberChange = (newpageNumber) => {
    
    setpageNumber(newpageNumber);
  }
  const handleIconsClick =(value) => {
        switch (value) {
          case "new":
            handleAdd("new")
            break;
          case "edit":
            handleAdd("edit")
            break;  
          case "close":
            handleclose()
          default:
            break;
        }
  }
  const handleCloseModal = () => {
    setEdit(0)
    setIsModalOpen(false);
  };

  const  handleclose=()=>{
    window.history.back();
  }
  const handleOpen = () => {
    // setOpen(true);
  };


  // Handlers for your icons
  const handleAdd = (value) => {
    if(value ==="edit"){
      setdetailPageId(1)
    }
    else{
      setdetailPageId(0)
    }
    setPage("detailed")
  };

  const handleEdit = (id) => {
    // Your logic to edit profile
  };

  const handleDelete = (id) => {
    // Your logic to delete profile
  };

  const handleClose = () => {
    // Your logic to close the component or dialog
  };
 

  return (<Box sx={{ display: "flex",flexDirection:"column",width:"100%" }}>
    <Box sx={{display:"flex",width:"100%",flexDirection:"row",justifyContent:"space-between",paddingLeft: 1.5,
            paddingRight: 1.5,}}>   
       <BasicBreadcrumbs currentTheme={currentTheme}/>
       <DefaultIcons iconsClick={handleIconsClick} currentTheme={currentTheme}/>
       
    </Box>
    <Box sx={{ width:"100%",overflowX: 'auto'}}>
    <TableSecurity
             
    rows={rows}
    //onExportData={handleExportData}
    onDisplayLengthChange={handleDisplayLengthChange}
    onpageNumberChange={handlepageNumberChange}
   //  onSortChange={handleSortChange}
   onSearchKeyChange={handleSearchKeyChange}
    changesTriggered={changesTriggered}
    setchangesTriggered={resetChangesTrigger}
    onSelectedRowsChange={handleSelectedRowsChange}
    onRowDoubleClick={handleRowDoubleClick}
    totalRows={rows.length}
    currentTheme={currentTheme}
    
    
  />
  </Box>
  </Box>
  );
}

export default TagCreationSummary;
