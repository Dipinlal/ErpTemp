import React, { useState, useEffect } from "react";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, IconButton, Popover, Stack } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { useTheme } from "../../../../../config/themeContext";
import RoleSelect1 from "../../../../../components/Select/RoleSelect1";

import PropTypes from "prop-types";


export default function ExchangeRateHistoryResultTable({ currencies }) {
  const [effectiveDate, setEffectiveDate] = useState("01/10/2023");
  const { currentTheme } = useTheme();

  return (
    <Box
      sx={{
        width: "100%",
        padding: "10px 10px ",
        zIndex: 1,
      }}
    >
      <Paper
        sx={{
          width: "100%",
          mb: 2,
          boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
        }}
      >
        <TableContainer>
          <Table aria-labelledby="tableTitle" size="small">
            <TableHead
              style={{
                background: `${currentTheme.thirdColor}`,
                position: "sticky",
                top: 0,
                zIndex: "5",
              }}
            >
              <TableRow>
                <TableCell
                  sx={{
                    padding: "4px",
                    border: "1px solid #ddd",
                    whiteSpace: "nowrap",
                    cursor: "pointer",
                  }}
                >
                  S.No
                </TableCell>
                <TableCell
                  sx={{
                    padding: "4px",
                    border: "1px solid #ddd",
                    whiteSpace: "nowrap",
                    cursor: "pointer",
                  }}
                >
                  Effective Date
                </TableCell>
                {currencies.length>0 && currencies.map((currency, index) => (
                  <TableCell
                    key={index}
                    sx={{
                      padding: "4px",
                      border: "1px solid #ddd",
                      whiteSpace: "nowrap",
                      cursor: "pointer",
                    }}
                  >
                    {currency.definedAs} {"-->"} {currency.selectCurrency}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell
                  sx={{
                    padding: "4px",
                    border: "1px solid #ddd",
                    whiteSpace: "nowrap",
                    cursor: "pointer",
                  }}
                >
                  1
                </TableCell>
                <TableCell
                  sx={{
                    padding: "4px",
                    border: "1px solid #ddd",
                    whiteSpace: "nowrap",
                    cursor: "pointer",
                  }}
                >
                  {effectiveDate}
                </TableCell>
                {currencies.length>0 && currencies.map((currency, index) => (
                  <TableCell
                    key={index}
                    sx={{
                      padding: "4px",
                      border: "1px solid #ddd",
                      whiteSpace: "nowrap",
                      cursor: "pointer",
                    }}
                  >
                    {currency.rate.toFixed(10)}
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}

// Define PropTypes for the prop
ExchangeRateHistoryResultTable.propTypes = {
  currencies: PropTypes.array.isRequired,
};
