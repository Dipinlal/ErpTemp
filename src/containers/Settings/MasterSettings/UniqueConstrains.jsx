import { Divider, IconButton, Stack, Typography } from "@mui/material";
import { MDBCardBody, MDBCol, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { thirdColor } from "../../../config";
import SaveIcon from "@mui/icons-material/Save";
import AutoComplete2 from "../../../components/AutoComplete/AutoComplete2";
import AccountInput from "../../../components/Inputs/AccountInput";
import CheckBox2 from "../../../components/CheckBox/CheckBox2";

export default function UniqueConstrains() {
  return (
    <MDBCardBody style={{ marginLeft: 10 }}>
      <Stack
        direction="row"
        spacing={1}
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h6" color="gray" gutterBottom>
          Constraints Details
        </Typography>
        <Stack direction="row" spacing={1} justifyContent="flex-end">
          <IconButton
            aria-label="Save"
            sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
          >
            <Stack direction="column" alignItems="center">
              <SaveIcon style={{ color: thirdColor }} />
              <Typography
                variant="caption"
                align="center"
                style={{
                  color: thirdColor,
                  fontSize: "0.6rem",
                }}
              >
                Save
              </Typography>
            </Stack>
          </IconButton>

          <IconButton
            aria-label="Delete"
            sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
          >
            <Stack direction="column" alignItems="center">
              <DeleteIcon style={{ color: thirdColor }} />
              <Typography
                variant="caption"
                align="center"
                style={{
                  color: thirdColor,
                  fontSize: "0.6rem",
                }}
              >
                Delete
              </Typography>
            </Stack>
          </IconButton>
        </Stack>
      </Stack>
      <Divider
        sx={{
          borderColor: "rgba(0, 0, 0, 0.3)",
          borderWidth: "1px",
        }}
      />
      <MDBRow>
        <MDBCol lg="4" >
          <AutoComplete2 autoLabel="Constraint Name" isMandatory={"true"}/>
        </MDBCol>
        {/* <MDBCol lg="4">
          <AutoComplete2 autoLabel="Tabs" />
        </MDBCol> */}
      </MDBRow>
      {/* <MDBRow style={{ marginLeft: 2, marginTop: 10 }}>
        <Typography variant="p" color="gray" gutterBottom>
          Main
        </Typography>
        <Divider
          sx={{
            borderColor: "rgba(0, 0, 0, 0.3)",
            borderWidth: "1px",
          }}
        />

        <MDBCol lg="2" md="3" sm="6" xs="12">
          <CheckBox2 label="Name" />
        </MDBCol>
        <MDBCol lg="2" md="3" sm="6" xs="12">
          <CheckBox2 label="Code" />
        </MDBCol>
        <MDBCol lg="2" md="3" sm="6" xs="12">
          <CheckBox2 label="Account Type" />
        </MDBCol>
        <MDBCol lg="2" md="3" sm="6" xs="12">
          <CheckBox2 label="Credit Limit" />
        </MDBCol>
        <MDBCol lg="2" md="3" sm="6" xs="12">
          <CheckBox2 label="Credit Days" />
        </MDBCol>
        <MDBCol lg="2" md="3" sm="6" xs="12">
          <CheckBox2 label="Revision Id" />
        </MDBCol>
        <MDBCol lg="2" md="3" sm="6" xs="12">
          <CheckBox2 label="Revision Date" />
        </MDBCol>
        <MDBCol lg="2" md="3" sm="6" xs="12">
          <CheckBox2 label="Revised On" />
        </MDBCol>
        <MDBCol lg="2" md="3" sm="6" xs="12">
          <CheckBox2 label="Revised By" />
        </MDBCol>
      </MDBRow> */}

      {/* <MDBRow style={{ marginLeft: 2, marginTop: 10 }}>
        <Typography variant="p" color="gray" gutterBottom>
          Header
        </Typography>
        <Divider
          sx={{
            borderColor: "rgba(0, 0, 0, 0.3)",
            borderWidth: "1px",
          }}
        />

        <MDBCol lg="2" md="3" sm="6" xs="12">
          <CheckBox2 label="Cheque Discount Limit" />
        </MDBCol>
        <MDBCol lg="2" md="3" sm="6" xs="12">
          <CheckBox2 label="Rate of interest" />
        </MDBCol>
        <MDBCol lg="2" md="3" sm="6" xs="12">
          <CheckBox2 label="PDC Discounted A/c" />
        </MDBCol>
        <MDBCol lg="2" md="3" sm="6" xs="12">
          <CheckBox2 label="Bank A/c" />
        </MDBCol>
      </MDBRow> */}

      {/* <MDBRow style={{ marginLeft: 2, marginTop: 10 }}>
        <Typography variant="p" color="gray" gutterBottom>
          Body
        </Typography>
        <Divider
          sx={{
            borderColor: "rgba(0, 0, 0, 0.3)",
            borderWidth: "1px",
          }}
        />
      </MDBRow> */}
    </MDBCardBody>
  );
}
