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
  Divider,
  FormControlLabel,
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
import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import Definitiontable1 from "./DefinitionTable1";
import { CustomizationTree, viewTree } from "../../../config/masterConfig";
import CustomizationTable from "./CustomizationTable";
import SettingsTable from "./SettingsTable";
import VatSettingsTable from "./VatSettingsTable";
import UniqueConstrains from "./UniqueConstrains";
import InfoPanel from "./InfoPanel";
import CustomizationReports from "./CustomizationReports";
import AccountInput from "../../../components/Inputs/AccountInput";
import CheckBox2 from "../../../components/CheckBox/CheckBox2";
import ViewTable from "./ViewTable";
import { useTheme } from "../../../config/themeContext";
import ViewUserSelection from "./ViewUserSelection";

export default function CustomizationView() {
  const [isOpen, setIsOpen] = useState(true);
  const [hide, setHide] = useState(true);
  const [formData, setformData] = useState({});
  const [treeSelect, setTreeSelect] = useState(7);

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

  const {currentTheme} = useTheme()

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
            alignItems: "center",
          }}
        >
          <div>
            <Box
              sx={{
                display: "flex",
                //  alignItems: "center"
              }}
            >
              <Tree1 items={viewTree} setSelect={setTreeSelect} />

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

      <>
        <Stack width={"100%"} padding={2} spacing={2}>
          <Typography variant="h6" color="gray" gutterBottom>
            Master View
          </Typography>
          <Divider
            sx={{
              borderColor: "rgba(0, 0, 0, 0.3)",
              borderWidth: "1px",
            }}
          />
          <MDBRow>
                            <MDBCol>
                            <AutoComplete2 autoLabel="View Name" />
                            </MDBCol>
                            <MDBCol>
                            <CheckBox2 label="Visible" />
                            </MDBCol>
                            <MDBCol>
                            <CheckBox2 label="Available in Mobile App" />
                            </MDBCol>
                          </MDBRow>
          <>
            {treeSelect == 7 ? (
              <ViewTable />
            ) : treeSelect == 8 ? (
                <ViewTable />
            ) : treeSelect == 9 ? (
                <ViewTable />
            ) : treeSelect == 10 ? (
                <ViewTable />
            ) : treeSelect == 2 ? (
                <ViewTable />
            ) : treeSelect == 3 ? (
                <ViewTable />
            ) : treeSelect == 4 ? (
                <ViewTable />
            ) : null}
          </>
        </Stack>
        <ViewUserSelection/>
      </>
    </div>
  );
}
