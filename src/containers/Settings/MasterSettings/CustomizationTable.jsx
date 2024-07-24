import React, { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Tabs,
  Tab,
  Checkbox,
  Typography,
  Stack,
  IconButton,
  Box,
} from "@mui/material";
import {
  TablecellStyle,
  dependentData,
  usedData,
  TablebodyCell,
  mainData,
  HeaderData,
} from "../../../config/masterSettings";
import { primaryButtonColor, thirdColor } from "../../../config";
import PreviewIcon from "@mui/icons-material/Preview";
import CustomizationPreviewModal from "./CustomizationPreviewModal";
import EditNoteIcon from "@mui/icons-material/EditNote";
import CustomizationEditModal from "./CustomizationEditModal";
import { useTheme } from "../../../config/themeContext";
import OpenWithIcon from '@mui/icons-material/OpenWith';
import AddIcon from '@mui/icons-material/Add';

function CustomizationTable() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };


  
  // Dummy data arrays for each tab

  // Determine which data to display based on selected tab
  const data = selectedTab === 0 ? mainData : HeaderData;

  const handleModalOpen = () => {
    setOpen(true);
  };

  const handleModalClose = () => {
    setOpen(false);
  };

  const handleEditModalOpen = () => {
    setEdit(true);
  };

  const handleEditModalClose = () => {
    setEdit(false);
  };

  const {currentTheme} = useTheme()

  return (
    <Paper sx={{ width: "100%", overflow: "hidden", m: 2 ,boxShadow:'5px 2px 4px 4px rgba(128, 128, 128, 0.3)'  ,}}>
      <Tabs
        value={selectedTab}
        sx={{ display: "flex", alignItems: "center" }} // Align items horizontally
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab sx={{ textTransform: "none"}}  label="Main" />
        <Tab sx={{ textTransform: "none" }} label="Header Details" />
        <Box sx={{ marginLeft: "auto" }}>
        <IconButton
          
          aria-label="Preview"
          sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
        >
          <Stack direction="column" alignItems="center">
            <OpenWithIcon sx={{ color: currentTheme.actionIcons  }} />
            <Typography
              variant="caption"
              align="center"
              style={{ color: currentTheme.actionIcons , fontSize: "0.6rem" }}
            >
              Move field
            </Typography>
          </Stack>
        </IconButton>
        <IconButton
            onClick={handleEditModalOpen}
          aria-label="Preview"
          sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
        >
          <Stack direction="column" alignItems="center">
            <AddIcon sx={{ color: currentTheme.actionIcons  }} />
            <Typography
              variant="caption"
              align="center"
              style={{ color: currentTheme.actionIcons , fontSize: "0.6rem" }}
            >
              Add
            </Typography>
          </Stack>
        </IconButton>
          <IconButton
            onClick={handleModalOpen}
            aria-label="Preview"
            sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
          >
            <Stack direction="column" alignItems="center">
              <PreviewIcon sx={{ color: currentTheme.actionIcons }} />
              <Typography
                variant="caption"
                align="center"
                style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
              >
                Preview
              </Typography>
            </Stack>
          </IconButton>
        </Box>
      </Tabs>

      <TableContainer
        component={Paper}
        sx={{ maxHeight: "40vh", scrollbarWidth: "thin" }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  ...TablecellStyle,
                  backgroundColor: currentTheme.thirdColor, color: currentTheme.tableHeaderColor
                }}
              ></TableCell>
              {Object.keys(data[0] || {}).map((key, index) => (
                <TableCell
                  sx={{
                    ...TablecellStyle,
                    backgroundColor: currentTheme.thirdColor, color: currentTheme.tableHeaderColor

                  }}
                  key={index}
                >
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </TableCell> // Capitalize and format the key
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell
                  scope="row"
                  padding="normal"
                  align="center" // Align content to the center
                  sx={{
                    padding: "0px",
                    paddingLeft: "4px",
                    border: "1px solid #ddd",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  <IconButton
                  onClick={handleEditModalOpen}
                    aria-label="Preview"
                    sx={{ fontSize: "0.8rem", padding: 0 }}
                  >
                    <Stack direction="column" alignItems="center">
                      <EditNoteIcon sx={{ color: currentTheme.actionIcons }} />
                    </Stack>
                  </IconButton>
                </TableCell>

                {Object.keys(row).map((key, cellIndex) => (
                  <>
                    <TableCell sx={TablebodyCell} key={cellIndex}>
                      {key === "Is Default" ? (
                        <Checkbox
                          color="primary"
                          sx={{
                            transform: "scale(0.75)", // Adjust the scale to reduce the size
                            p: 0,
                          }}
                          inputProps={{
                            "aria-labelledby": row[key],
                          }}
                        />
                      ) : (
                        row[key]
                      )}
                    </TableCell>
                  </>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <CustomizationPreviewModal
        isOpen={open}
        handleCloseModal={handleModalClose}
      />
      <CustomizationEditModal
        isOpen={edit}
        handleCloseModal={handleEditModalClose}
      />
    </Paper>
  );
}

export default CustomizationTable;
