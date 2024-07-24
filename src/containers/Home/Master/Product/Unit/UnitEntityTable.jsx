import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  FormControl,
  MenuItem,
  Stack,
  TextField,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useTheme } from "../../../../../config/themeContext";
import AdvancedSearchSelect from "../../../../../components/Select/AdvanceSearchSelect";

export default function UnitEntityTable({
  rows,
  onEntityChange,
  onDecimalsChange,
  onRoundOffChange,
  onRoundingTypeChange,
  onAddRow,
  onRemoveRow,
 
}) {
  const { currentTheme } = useTheme();

  const handleRow = (type) => {
    if (type === 1) {
      onAddRow();
    } else {
      onRemoveRow();
    }
  };

  return (
    <Box
      sx={{
        width: "fit-Content",
        padding: "10px 10px ",
        zIndex: 1,
      }}
    >
      <Paper
        sx={{
          width: "fit-Content",
          mb: 2,
          boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
        }}
      >
        <TableContainer
          style={{
            display: "block",
            maxHeight: "calc(100vh - 250px)",
            overflowY: "auto",
            scrollbarWidth: "thin",
            scrollbarColor: "#888 #f5f5f5",
            scrollbarTrackColor: "#f5f5f5",
            width: "fit-Content",
          }}
        >
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
                    padding: "0px",
                    border: "1px solid #ddd",
                    whiteSpace: "nowrap",
                    cursor: "pointer",
                    minWidth:"50px",
                    textAlign:"center"
                  }}
                ></TableCell>
                <TableCell
                  sx={{
                    border: "1px solid #ddd",
                    cursor: "pointer",
                    color: currentTheme.sideBarTextColor1,
                    minWidth:"250px",
                  }}
                  align="left"
                  padding="normal"
                >
                  Business Entity
                </TableCell>
                <TableCell
                  sx={{
                    border: "1px solid #ddd",
                    cursor: "pointer",
                    color: currentTheme.sideBarTextColor1,
                    minWidth:"170px",
                  }}
                  align="left"
                  padding="normal"
                >
                  Number of Decimal
                </TableCell>
                <TableCell
                  sx={{
                    border: "1px solid #ddd",
                    cursor: "pointer",
                    color: currentTheme.sideBarTextColor1,
                    minWidth:"150px",
                  }}
                  align="left"
                  padding="normal"
                >
                  Unit Type
                </TableCell>
                <TableCell
                  sx={{
                    border: "1px solid #ddd",
                    cursor: "pointer",
                    color: currentTheme.sideBarTextColor1,
                    minWidth:"150px",
                  }}
                  align="left"
                  padding="normal"
                >
                  Rounding Type
                </TableCell>
                {/* <TableCell
                  sx={{
                    border: "1px solid #ddd",
                    cursor: "pointer",
                    color: currentTheme.sideBarTextColor1,
                    minWidth:"170px",
                  }}
                  align="left"
                  padding="normal"
                >
                  Connector
                </TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={row.id} sx={{ cursor: "pointer" }}>
                  <TableCell sx={{ textAlign: "center", padding: "0px" }}>
                    <PopupState variant="popover" popupId="demo-popup-popover">
                      {(popupState) => (
                        <div>
                          <IconButton
                            aria-label="options"
                            {...bindTrigger(popupState)}
                            sx={{ padding: 0, fontSize: "1.2rem" }}
                          >
                            <MoreVertIcon sx={{ fontSize: "1.2rem" }} />
                          </IconButton>
                          <Popover
                            {...bindPopover(popupState)}
                            anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "center",
                            }}
                            transformOrigin={{
                              vertical: "top",
                              horizontal: "center",
                            }}
                          >
                            <Stack direction="row">
                              <IconButton
                                onClick={() => {
                                  handleRow(1);
                                  popupState.close();
                                }}
                                aria-label="add"
                                sx={{
                                  fontSize: "1.2rem",
                                  color: currentTheme.thirdColor,
                                }}
                              >
                                <AddCircleIcon sx={{ fontSize: "1.2rem" }} />
                              </IconButton>
                              <IconButton
                                onClick={() => {
                                  onRemoveRow(index);
                                  popupState.close();
                                }}
                                aria-label="remove"
                                sx={{
                                  fontSize: "1.2rem",
                                  color: currentTheme.thirdColor,
                                }}
                              >
                                <RemoveCircleIcon sx={{ fontSize: "1.2rem" }} />
                              </IconButton>
                            </Stack>
                          </Popover>
                        </div>
                      )}
                    </PopupState>
                  </TableCell>
                  <TableCell
                    sx={{
                      border: "1px solid #ddd",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      padding: "0px",
                      fontSize: "0.75rem",
                      width: "250px",
                    }}
                    align="left"
                  >
                    <AdvancedSearchSelect
                      value={row?.entity}
                      onChange={(e) =>
                        onEntityChange(index, e.target.value)
                      }
                      options={[
                        { value: "Entity1", label: "Entity1" },
                        { value: "Entity2", label: "Entity2" },
                        // Add more options as needed
                      ]}
                      width="250px"
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      border: "1px solid #ddd",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      padding: "0px",
                      fontSize: "0.75rem",
                      width: "150px",
                    }}
                    align="left"
                  >
                    <TextField
                      value={row?.decimals}
                      onChange={(e) =>
                        onDecimalsChange(index, e.target.value)
                      }
                      type="number"
                      fullWidth
                      variant="standard"
                      InputProps={{
                        style: { fontSize: "0.75rem" },
                      }}
                    />
                  </TableCell>
                  <TableCell
                   sx={{
                    border: "1px solid #ddd",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    padding: "0px",
                    fontSize: "0.75rem",
                    width: "150px",
                  }}
                  align="left"
                  >
                   <AdvancedSearchSelect
                      value={row?.roundingType}
                      onChange={(e) =>
                        onRoundingTypeChange(index, e.target.value)
                      }
                      options={[
                        { value: "Type1", label: "Type1" },
                        { value: "Type2", label: "Type2" },
                        // Add more options as needed
                      ]}
                      width="150px"
                    />
                  </TableCell>
                  <TableCell
                    sx={{
                      border: "1px solid #ddd",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      padding: "0px",
                      fontSize: "0.75rem",
                      width: "150px",
                    }}
                    align="left"
                  >
                    <AdvancedSearchSelect
                      value={row?.roundingType}
                      onChange={(e) =>
                        onRoundingTypeChange(index, e.target.value)
                      }
                      options={[
                        { value: "Type1", label: "Type1" },
                        { value: "Type2", label: "Type2" },
                        // Add more options as needed
                      ]}
                      width="150px"
                    />
                  </TableCell>
                  {/* <TableCell
                    sx={{
                      border: "1px solid #ddd",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      padding: "0px",
                      fontSize: "0.75rem",
                      width: "150px",
                    }}
                    align="left"
                  >
                    <TextField
                      value={row?.connector}
                      onChange={(e) =>
                        onConnectorChange(index, e.target.value)
                      }
                      type="text"
                      fullWidth
                      variant="standard"
                      InputProps={{
                        style: { fontSize: "0.75rem" },
                      }}
                    />
                  </TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
