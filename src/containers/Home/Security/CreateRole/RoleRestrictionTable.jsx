import React, { useEffect, useRef, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  IconButton,
  Popover,
  MenuItem,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {primaryColor, thirdColor } from "../../../../config";
import Autocomplete1 from "../../../../components/AutoComplete/AutoComplete1";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { AddCircleOutline , Edit as EditIcon, Delete as DeleteIcon, Close as CloseIcon  } from '@mui/icons-material';
import WarningMessage from "../../../../components/Warning/Warnings";
import { useTheme } from '../../../../config/themeContext';

const cellStyle = {
  padding: "0px",
  paddingLeft: "4px",
  border: " 1px solid #ddd",
  fontWeight: "600",
  font: "14px",

  color: "white",
  paddingTop: "3px",
  paddingBottom: "3px",
};

const bodyCell = {
  padding: "0px",
  paddingLeft: "4px",
  border: " 1px solid #ddd",
  
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
};

// Creates initial data without an ID field
const createData = (master, entry, report, view) => ({
  master,
  entry,
  report,
  view,
  isSelected: false,
});

const initialRows = Array.from({ length: 10 }, () =>
  createData("", false, false, false)
);

const RestrictionsTable = () => {


  const { currentTheme } = useTheme();

  const headerCellStyle = {
    ...cellStyle,
    backgroundColor: currentTheme.thirdColor,
    color: "#fff",
  };


  const [selectedRowIndex, setSelectedRowIndex] = useState(-1);
  const [rows, setRows] = useState(initialRows);
  const [exclusionCheck, setExclusionChecked] = useState(false);
  const [popoverInfo, setPopoverInfo] = useState({
    open: false,
    anchorEl: null,
    rowIndex: null,
  });
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [alertType, setAlertType] = useState("");

  

  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setSelectedRowIndex(-1);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const handleOnChange = () => {
    setExclusionChecked(!exclusionCheck);  // Toggle the state directly
  };
  const handlePopoverOpen = (event, index) => {
    setPopoverInfo({
      open: true,
      anchorEl: event.currentTarget,
      rowIndex: index,
    });
  };

  const handlePopoverClose = () => {
    setPopoverInfo({ ...popoverInfo, open: false });
  };
  const handleAlertClose = () => {
    setAlert(false);
    setMessage("")
    setAlertType("")
  };
  const areAllAboveRowsValid = (index) => {
    
    // Check every row up to the current index
    for (let i = 0; i < index; i++) {
      if (!rows[i].master) {
        return false;  // Immediately return false if any row fails the check
      }
    }
    return true;  // All rows up to the current index are valid
  };

  const handleCheckboxChange = (index, field) => {
    
    const newRows = [...rows];
    newRows[index][field] = !newRows[index][field];
    setRows(newRows);
  };

  const handleAddRow = () => {
    const newRow = createData("", false, false, false);
    let newRows;
    if (selectedRowIndex >= 0) {
     newRows = [
      ...rows.slice(0, selectedRowIndex + 1),
      newRow,
      ...rows.slice(selectedRowIndex + 1),
    ];
    } else {
      // Add the new row at the end of the table
      newRows = [...rows, newRow];
    }
    setRows(newRows);
  };

  const handleDeleteRow = () => {
    if (rows.length > 1 && selectedRowIndex >= 0) {
      const newRows = [...rows.slice(0, selectedRowIndex), ...rows.slice(selectedRowIndex + 1)];
      setRows(newRows);
    }
    setSelectedRowIndex(-1)
  };
  const handleRowSelect = (index) => {
    if (!areAllAboveRowsValid(index)) {
      setAlertType("warning");
      setMessage("Please complete all above 'master' fields before making changes to this row")
      setAlert(true)
      return;  // Prevent the checkbox change
    }
    const updatedRows = rows.map((row, idx) => ({
      ...row,
      isSelected: idx === index ? !row.isSelected : row.isSelected,
    }));
    setRows(updatedRows);
    setSelectedRowIndex(index);
  };

  return (<>
  <div ref={wrapperRef} style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginBottom:"10px"}}>
    <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
          <Checkbox
                  checked={exclusionCheck}
                  onChange={handleOnChange}
                  color="primary"
                  sx={{padding:0}}
                />
                <Typography>Exclusions</Typography>
                </div>
                <div>
                <IconButton
                aria-label="New"
                sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
                onClick={handleAddRow}
              >
                
          <AddCircleOutlineIcon sx={{ color:currentTheme.primaryColor }} />
          
              
              </IconButton>
                <IconButton
                aria-label="New"
                sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
                onClick={handleDeleteRow}
              >
                
          <DeleteIcon sx={{ color:currentTheme.primaryColor }} />
          
              
              </IconButton>

                </div>

          </div>
  
    <TableContainer
      component={Paper}
      sx={{ maxHeight: "40vh", scrollbarWidth: "thin" }}
    >
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell sx={headerCellStyle}>#</TableCell>
            <TableCell sx={headerCellStyle}>Masters</TableCell>
            <TableCell align="center" sx={headerCellStyle}>
              Entry
            </TableCell>
            <TableCell align="center" sx={headerCellStyle}>
              Report
            </TableCell>
            <TableCell align="center" sx={headerCellStyle}>
              View
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow 
            key={index} hover onClick={() => handleRowSelect(index)}
            
            sx={{
              backgroundColor: index === selectedRowIndex ? "#E6E6FA" : "transparent", // Change color based on the selected index
              '&:hover': {
                backgroundColor: index === selectedRowIndex ? "#E6E6FA": "#E6E6FA", // Adjust hover color accordingly
              }
            }}
            >
              <TableCell component="th" scope="row" sx={bodyCell}>
                <IconButton
                  aria-describedby={`popover-${index}`}
                  size="small"
                  //onMouseEnter={(e) => handlePopoverOpen(e, index)}
                  sx={{padding:0}}
                >
                  {index + 1} {/* Display the index + 1 as ID */}
                  {/* <MoreVertIcon /> */}
                </IconButton>
                {/* <Popover
                  id={`popover-${index}`}
                  open={popoverInfo.open && popoverInfo.rowIndex === index}
                  anchorEl={popoverInfo.anchorEl}
                  onClose={handlePopoverClose}
                  anchorOrigin={{
                    vertical: "center",
                    horizontal: "left",
                  }}
                  transformOrigin={{
                    vertical: "center",
                    horizontal: "left",
                  }}
                >
                  <MenuItem onClick={() => handleAddRow(index)}>
                    Add Row
                  </MenuItem>
                  <MenuItem onClick={() => handleDeleteRow(index)}>
                    Delete Row
                  </MenuItem>
                </Popover> */}
              </TableCell>
              <TableCell sx={{...bodyCell, paddingLeft: "0px"}}>
  {row.isSelected ? (
    <div  onClick={(e) => e.stopPropagation()} onMouseDown={(e) => e.stopPropagation()}>
      <Autocomplete1
        formData={{ sName: row.master, iId: null }}
        setFormData={(data) => {
         
          const newRows = [...rows];
          newRows[index] = { ...newRows[index], master: data.sName };
         
          setRows(newRows);
        }}
        
      />
    </div>
  ) : (
    row.master || ""  // Placeholder when not selected
  )}
</TableCell>
              <TableCell align="center" sx={bodyCell}>
                <Checkbox
                  disabled={!row.master}
                  checked={row.entry}
                  onChange={() => handleCheckboxChange(index, "entry")}
                  color="primary"
                  sx={{padding:0}}
                />
              </TableCell>
              <TableCell align="center" sx={bodyCell}>
                <Checkbox
               disabled={!row.master}
                  checked={row.report}
                  onChange={() => handleCheckboxChange(index, "report")}
                  color="primary"
                  sx={{padding:0}}
                />
              </TableCell>
              <TableCell align="center" sx={bodyCell}>
                <Checkbox sx={{padding:0}}
                disabled={!row.master}
                  checked={row.view}
                  onChange={() => handleCheckboxChange(index, "view")}
                  color="primary"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <WarningMessage
        open={alert}
        handleClose={handleAlertClose}
        message={message}
        type={alertType}
      />
    </>
  );
};

export default RestrictionsTable;
