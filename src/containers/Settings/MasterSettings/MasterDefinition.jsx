import React from "react";
import { Alert, Button, Collapse } from "reactstrap";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import Tree1 from "../../../components/Tree/Tree1";
import { createProfileTree, entityList, workingDays } from "../../../config/securityConfig";
import { useState } from "react";
import { primaryButtonColor } from "../../../config";
import {
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
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
import { useTheme } from "../../../config/themeContext";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import GroupRemoveIcon from '@mui/icons-material/GroupRemove';

function MasterDefinition({detailPageId}) {
  const [isOpen, setIsOpen] = useState(true);
  const [hide, setHide] = useState(true);
  const [formData, setformData] = useState({});
  const [selectedOption, setSelectedOption] = React.useState('');


  const {currentTheme} = useTheme()


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
            backgroundColor: getBackgroundColor(),
            display: "flex",
           
            flexDirection:"column"
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "left" }}>

<IconButton
  aria-label="Add group"
  sx={{ fontSize: "0.3rem", padding: "0.5rem" }}
>
  <Stack direction="column" alignItems="center">
    <GroupAddIcon style={{ color: currentTheme.actionIcons, }} />

    <Typography
      variant="caption"
      align="center"
      style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
    >
      Add Group
    </Typography>
  </Stack>
</IconButton>
<IconButton
  aria-label="Add group"
  sx={{ fontSize: "0.3rem", padding: "0.5rem" }}
>
  <Stack direction="column" alignItems="center">
    <GroupRemoveIcon style={{ color: currentTheme.actionIcons, }} />

    <Typography
      variant="caption"
      align="center"
      style={{ color: currentTheme.actionIcons, fontSize: "0.6rem" }}
    >
      Delete Group
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
              
              <Tree1 items={createProfileTree} />

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
      <Box sx={{ ml: 2 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <RoleSelect1
            label="Module"
            value={formData?.Module ?? ""}
            onChange={(e) => handleSelectChange(e, "Module")}
            options={masterSettingsModule}
            mandatory={"true"}
          />
          {/* <AutoComplete2
            // autoLabel={"User"}
            formData={{
              sName: formData?.Name ?? "",
              iId: null,
            }}
            setFormData={(data) => {
              setformData({ ...formData, Name: data.sName });
            }}
            autoLabel={"Name"}
            isMandatory={"true"}
          /> */}
          <SecurityInput label={"Name"}  mandatory={"true"} />
          <SecurityInput label={"Caption"}  mandatory={"true"} />
          {/* <RoleSelect1
                    label="Business Entity"
                    value={selectedOption}
                    onChange={(e) => handleSelectChange(e, "BusinessEntity")}
                    options={entityList}
                  /> */}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            gap: "20px",
            marginTop: "10px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", width: "200px" }}>
            <FormControlLabel
              value="name"
              control={
                <Radio
                  checked={formData.searchBy === "name"}
                  onChange={handleRadioChange}
                />
              }
              label={
                <Typography sx={{ fontSize: "13px" }}>
                  Search by Name
                </Typography>
              }
              labelPlacement="end"
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", width: "200px" }}>
            <FormControlLabel
              value="code"
              control={
                <Radio
                  checked={formData.searchBy === "code"}
                  onChange={handleRadioChange}
                />
              }
              label={
                <Typography sx={{ fontSize: "13px" }}>
                  Search by Code
                </Typography>
              }
              labelPlacement="end"
            />
          </Box>
          {masterSettingsDefinitionCheck.map((item, index) => (
            <Box
              key={index}
              sx={{ display: "flex", alignItems: "center", width: "200px" }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    checked={formData[item]}
                    onChange={(e) => handleCheckboxChange(e, item)}
                    inputProps={{
                      "aria-label": `controlled-${item.toLowerCase()}`,
                    }}
                  />
                }
                label={
                  <Typography
                    sx={{ fontSize: "13px", padding: 0 }}
                    variant="body1"
                  >
                    {item}
                  </Typography>
                }
                sx={{ flexGrow: 1 }}
              />
            </Box>
          ))}
        </div>
        {detailPageId ==1 &&
        <Definitiontable1 />
      }
      </Box>
    </div>
  );
}

export default MasterDefinition;
