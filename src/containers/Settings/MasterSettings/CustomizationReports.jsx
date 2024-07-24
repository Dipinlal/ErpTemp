import { Divider, IconButton, Stack, Typography } from "@mui/material";
import { MDBCardBody, MDBCol, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { thirdColor } from "../../../config";
import SaveIcon from "@mui/icons-material/Save";
import AutoComplete2 from "../../../components/AutoComplete/AutoComplete2";
import AccountInput from "../../../components/Inputs/AccountInput";
import CheckBox2 from "../../../components/CheckBox/CheckBox2";
import PostAddIcon from '@mui/icons-material/PostAdd';

export default function CustomizationReports() {
  return (
    <MDBCardBody style={{ marginLeft: 10 }}>
      <Stack
        direction="row"
        spacing={1}
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h6" color="gray" gutterBottom>
          Reports
        </Typography>
        <Stack direction="row" spacing={1} justifyContent="flex-end">
          <IconButton
            aria-label="save"
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
        </Stack>
      </Stack>
      <Divider
        sx={{
          borderColor: "rgba(0, 0, 0, 0.3)",
          borderWidth: "1px",
        }}
      />

      <MDBRow style={{ marginLeft: 2, marginTop: 10 }}>
        <Typography variant="p" color="gray" gutterBottom>
          Report to be visible in Master Home
        </Typography>
        <Divider
          sx={{
            borderColor: "rgba(0, 0, 0, 0.3)",
            borderWidth: "1px",
          }}
        />

        <MDBCol lg="3" md="4" sm="6" xs="12">
          <CheckBox2 label="Master info" />
        </MDBCol>
        <MDBCol lg="3" md="4" sm="6" xs="12">
          <CheckBox2 label="ABC analysis account" />
        </MDBCol>
        <MDBCol lg="3" md="4" sm="6" xs="12">
          <CheckBox2 label="Bank book" />
        </MDBCol>
        <MDBCol lg="3" md="4" sm="6" xs="12">
          <CheckBox2 label="Bank reconciliation statement" />
        </MDBCol>
        <MDBCol lg="3" md="4" sm="6" xs="12">
          <CheckBox2 label="Cash book" />
        </MDBCol>
        <MDBCol lg="3" md="4" sm="6" xs="12">
          <CheckBox2 label="Cheque book register report" />
        </MDBCol>
        <MDBCol lg="3" md="4" sm="6" xs="12">
          <CheckBox2 label="Comparative analysis" />
        </MDBCol>
        <MDBCol lg="3" md="4" sm="6" xs="12">
          <CheckBox2 label="Customer ageing detail analysis" />
        </MDBCol>
        <MDBCol lg="3" md="4" sm="6" xs="12">
          <CheckBox2 label="Customer ageing detail by due date" />
        </MDBCol>
        <MDBCol lg="3" md="4" sm="6" xs="12">
          <CheckBox2 label="Customer ageing summary analysis" />
        </MDBCol>
        <MDBCol lg="3" md="4" sm="6" xs="12">
          <CheckBox2 label="Customer bill-wise summary" />
        </MDBCol>
        <MDBCol lg="3" md="4" sm="6" xs="12">
          <CheckBox2 label="Customer due date analysis" />
        </MDBCol>
         <MDBCol lg="3" md="4" sm="6" xs="12">
          <CheckBox2 label="Customer listing of outstanding bills" />
        </MDBCol>
         <MDBCol lg="3" md="4" sm="6" xs="12">
          <CheckBox2 label="Customer overdue analysis" />
        </MDBCol>
         <MDBCol lg="3" md="4" sm="6" xs="12">
          <CheckBox2 label="Customer overdue summary" />
        </MDBCol>
         <MDBCol lg="3" md="4" sm="6" xs="12">
          <CheckBox2 label="Customer statements" />
        </MDBCol>
         <MDBCol lg="3" md="4" sm="6" xs="12">
          <CheckBox2 label="Customer summary ageing by due date" />
        </MDBCol>
         <MDBCol lg="3" md="4" sm="6" xs="12">
          <CheckBox2 label="Income Expense Trend" />
        </MDBCol>
         <MDBCol lg="3" md="4" sm="6" xs="12">
          <CheckBox2 label="Ledger" />
        </MDBCol>
         <MDBCol lg="3" md="4" sm="6" xs="12">
          <CheckBox2 label="Ledger detail" />
        </MDBCol>
         <MDBCol lg="3" md="4" sm="6" xs="12">
          <CheckBox2 label="Monthly Sales" />
        </MDBCol>
         <MDBCol lg="3" md="4" sm="6" xs="12">
          <CheckBox2 label="Peak and low balance amount" />
        </MDBCol>
         <MDBCol lg="3" md="4" sm="6" xs="12">
          <CheckBox2 label="Petty cash book" />
        </MDBCol>
         <MDBCol lg="3" md="4" sm="6" xs="12">
          <CheckBox2 label="Purchase register" />
        </MDBCol>
         <MDBCol lg="3" md="4" sm="6" xs="12">
          <CheckBox2 label="Purchase return register" />
        </MDBCol>
         <MDBCol lg="3" md="4" sm="6" xs="12">
          <CheckBox2 label="Purchases grouped by department" />
        </MDBCol>
         <MDBCol lg="3" md="4" sm="6" xs="12">
          <CheckBox2 label="Purchases grouped by Item" />
        </MDBCol>
         <MDBCol lg="3" md="4" sm="6" xs="12">
          <CheckBox2 label="Purchases grouped by vendor" />
        </MDBCol>
         <MDBCol lg="3" md="4" sm="6" xs="12">
          <CheckBox2 label="Sales day book" />
        </MDBCol>
         <MDBCol lg="3" md="4" sm="6" xs="12">
          <CheckBox2 label="Sales grouped by customer" />
        </MDBCol>
         <MDBCol lg="3" md="4" sm="6" xs="12">
          <CheckBox2 label="sales grouped by department" />
        </MDBCol>
         <MDBCol lg="3" md="4" sm="6" xs="12">
          <CheckBox2 label="Sales grouped by Item" />
        </MDBCol>
         <MDBCol lg="3" md="4" sm="6" xs="12">
          <CheckBox2 label="Sales return register" />
        </MDBCol>
         <MDBCol lg="3" md="4" sm="6" xs="12">
          <CheckBox2 label="Schedules" />
        </MDBCol>
         <MDBCol lg="3" md="4" sm="6" xs="12">
          <CheckBox2 label="Sub ledger" />
        </MDBCol>
         <MDBCol lg="3" md="4" sm="6" xs="12">
          <CheckBox2 label="Summary purchase register" />
        </MDBCol>
         <MDBCol lg="3" md="4" sm="6" xs="12">
          <CheckBox2 label="Summary sales register" />
        </MDBCol>
         <MDBCol lg="3" md="4" sm="6" xs="12">
          <CheckBox2 label="Top Customers" />
        </MDBCol>
         <MDBCol lg="3" md="4" sm="6" xs="12">
          <CheckBox2 label="Trading account" />
        </MDBCol>
         <MDBCol lg="3" md="4" sm="6" xs="12">
          <CheckBox2 label="Transactions type analysis" />
        </MDBCol>
         <MDBCol lg="3" md="4" sm="6" xs="12">
          <CheckBox2 label="Vendor ageing detail analysis" />
        </MDBCol>
         <MDBCol lg="3" md="4" sm="6" xs="12">
          <CheckBox2 label="Vendor ageing detail by due date" />
        </MDBCol>
         <MDBCol lg="3" md="4" sm="6" xs="12">
          <CheckBox2 label="Vendor ageing summary analysis" />
        </MDBCol>
         <MDBCol lg="3" md="4" sm="6" xs="12">
          <CheckBox2 label="Vendor bill-wise summary" />
        </MDBCol>
         <MDBCol lg="3" md="4" sm="6" xs="12">
          <CheckBox2 label="Vendor due date analysis" />
        </MDBCol>

         <MDBCol lg="3" md="4" sm="6" xs="12">
          <CheckBox2 label="Vendor listing of outstanding bills" />
        </MDBCol>
         <MDBCol lg="3" md="4" sm="6" xs="12">
          <CheckBox2 label="Vendor overdue analysis" />
        </MDBCol>
         <MDBCol lg="3" md="4" sm="6" xs="12">
          <CheckBox2 label="Vendor overdue summary" />
        </MDBCol>
         <MDBCol lg="3" md="4" sm="6" xs="12">
          <CheckBox2 label="Vendor statements" />
        </MDBCol>
         <MDBCol lg="3" md="4" sm="6" xs="12">
          <CheckBox2 label="Vendor summary ageing by due date" />
        </MDBCol>
         <MDBCol lg="3" md="4" sm="6" xs="12">
          <CheckBox2 label="Virtual Bank Ledger" />
        </MDBCol>
      </MDBRow>

      <MDBRow style={{ marginLeft: 2, marginTop: 10 }}>
        <Typography variant="p" color="gray" gutterBottom>
        RD Reports to be visible in Master Home
        </Typography>
        <Divider
          sx={{
            borderColor: "rgba(0, 0, 0, 0.3)",
            borderWidth: "1px",
          }}
        />

        
      </MDBRow>

    
    </MDBCardBody>
  );
}
