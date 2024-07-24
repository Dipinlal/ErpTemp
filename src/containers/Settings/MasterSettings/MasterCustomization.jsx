import React from "react";
import { Alert, Button, Collapse } from "reactstrap";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import Tree1 from "../../../components/Tree/Tree1";
import { createProfileTree, workingDays } from "../../../config/securityConfig";
import { useState } from "react";
import { primaryButtonColor } from "../../../config";
import {
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
  Menu,
  MenuItem,
  Radio,
  Stack,
  Typography,
} from "@mui/material";
import RoleSelect1 from "../../../components/Select/RoleSelect1";
import AutoComplete2 from "../../../components/AutoComplete/AutoComplete2";
import {
  masterSettingsDefinitionCheck,
  masterSettingsModule,
} from "../../../config/masterSettings";
import SecurityInput from "../../../components/Inputs/SecurityInput";
import { MDBCol } from "mdb-react-ui-kit";
import Definitiontable1 from "./DefinitionTable1";
import { CustomizationTree } from "../../../config/masterConfig";
import CustomizationTable from "./CustomizationTable";
import SettingsTable from "./SettingsTable";
import VatSettingsTable from "./VatSettingsTable";
import UniqueConstrains from "./UniqueConstrains";
import InfoPanel from "./InfoPanel";
import CustomizationReports from "./CustomizationReports";
import { useTheme } from "../../../config/themeContext";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CustomizationCreateTab from "./CustomizationCreateTab";

function MasterCustomization() {
  const [isOpen, setIsOpen] = useState(true);
  const [hide, setHide] = useState(true);
  const [formData, setformData] = useState({});
  const [treeSelect, setTreeSelect] = useState(7);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [activeTabType, setActiveTabType] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const {currentTheme} = useTheme()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleOpenDialog = (tabType) => {
    setActiveTabType(tabType);
    setIsDialogOpen(true);
    handleClose();
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleRadioChange = (event) => {
    setformData({ ...formData, searchBy: event.target.value });
  };

  const toggleOpen = () => {
    setIsOpen(true);
    setHide(true);
  };
  const toggleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setHide(false);
    }, 400);
  };

  const handleSelectChange = (event, key) => {
    setformData({ ...formData, [key]: event.target.value });
  };

  const handleCheckboxChange = (event, item) => {
    const updatedCheckState = { ...formData, [item]: event.target.checked };
    setformData(updatedCheckState);
  };

  const getBackgroundColor = () => {
    return localStorage.getItem('color') === 'true' ? '#000' : '#fff';
  };


  return (
    <div style={{ display: "flex" }}>
      {!hide ? (
        <div
          style={{
            display: "flex",
            // alignItems: "center",
            height: "auto",
          }}
        >
          <Button
            
            onClick={toggleOpen}
            style={{
              marginBottom: "1rem",
              padding: "0.1rem",
              fontSize: "0.6rem",
              height: "2rem",
              borderRadius: "0 0.5rem 0.5rem 0",
              backgroundColor:currentTheme.secondaryColor,
              color:currentTheme.sideBarTextColor1
            }}
          >
            <KeyboardDoubleArrowRightIcon style={{ fontSize: "1rem" }} />
          </Button>
        </div>
      ) : null}

      <Collapse horizontal isOpen={isOpen}>
        <Alert
          style={{
            width: 350,
            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
            display: "flex",
           flexDirection:"column",
            backgroundColor: getBackgroundColor(),
          }}
        >
              <Box sx={{ display: "flex", justifyContent: "left" }}>

<IconButton
  aria-label="Add group"
  sx={{ fontSize: "0.3rem", padding: "0.5rem" }}
  onClick={handleClick}
>
  <Stack direction="column" alignItems="center">
    <AddCircleOutlineIcon style={{ color: currentTheme.actionIcons, }} />

    <Typography
      variant="caption"
      align="center"
      style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
    >
      Create Tab
    </Typography>
  </Stack>
</IconButton>
<IconButton
  aria-label="Add group"
  sx={{ fontSize: "0.3rem", padding: "0.5rem" }}
>
  <Stack direction="column" alignItems="center">
    <RemoveCircleOutlineIcon style={{ color: currentTheme.actionIcons, }} />

    <Typography
      variant="caption"
      align="center"
      style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
    >
      Delete Tab
    </Typography>
  </Stack>
</IconButton>
</Box>
          <div>
            <Box
              sx={{
                display: "flex",
                //  alignItems: "center"
              }}
            >
              <Tree1 items={CustomizationTree} setSelect={setTreeSelect} />

              <Button
               
                onClick={toggleClose}
                style={{
                  padding: "0.1rem",
                  fontSize: "0.6rem",
                  height: "2rem",
                  borderRadius: "0.5rem 0 0 0.5rem",
                  backgroundColor:currentTheme.secondaryColor,
                  color:currentTheme.sideBarTextColor1
                }}
              >
                <KeyboardDoubleArrowLeftIcon style={{ fontSize: "1rem" }} />
              </Button>
            </Box>
          </div>
        </Alert>
      </Collapse>

      {treeSelect == 7 ? (
        <CustomizationTable />
      ) : treeSelect == 8 ? (
        <SettingsTable />
      ) :treeSelect == 9 ? (
        <VatSettingsTable />
      ) :treeSelect == 10 ? (
        <VatSettingsTable />
      ):treeSelect == 2 ? (
        <UniqueConstrains />
      ):treeSelect == 3 ? (
        <InfoPanel />
      ):treeSelect == 4 ? (
        <CustomizationReports />
      )  :treeSelect == 11 ? (
        <CustomizationTable />
      ) : null }
      <CustomizationCreateTab
        open={isDialogOpen}
        onClose={handleCloseDialog}
        tabType={activeTabType}
      />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem sx={{fontSize:"12px"}} onClick={() => handleOpenDialog('image')}>Image Tab</MenuItem>
        <MenuItem sx={{fontSize:"12px"}} onClick={() => handleOpenDialog('tree')}>Tree Tab</MenuItem>
        <MenuItem sx={{fontSize:"12px"}} onClick={() => handleOpenDialog('document')}>Document Tab</MenuItem>
        <MenuItem sx={{fontSize:"12px"}} onClick={() => handleOpenDialog('createTab')}>Create Tab</MenuItem>
      </Menu>
    </div>
  );
}

export default MasterCustomization;
