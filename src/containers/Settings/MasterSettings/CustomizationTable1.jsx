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
import TableSortLabel from "@mui/material/TableSortLabel";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import Checkbox from "@mui/material/Checkbox";
import { visuallyHidden } from "@mui/utils";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  Stack,
  TextField,
  Tooltip,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { thirdColor } from "../../../config";
import AutoCompleteTable from "../../../components/AutoComplete/AutoCompleteTable";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    rows,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead
      style={{
        background: `${thirdColor}`,
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
        ></TableCell>
        {rows.map((header, index) => {
          if (header !== "MasterId") {
            // Exclude "iId", "iAssetType", and "sAltName" from the header
            return (
              <TableCell
                sx={{
                  border: "1px solid #ddd",
                  cursor: "pointer",
                  color: "white",
                }}
                key={`${index}-${header}`}
                align="left" // Set the alignment to left
                padding="normal"
              >
                {header}
              </TableCell>
            );
          }
        })}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

export default function CustomizationTable1() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState(0);
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(true);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [data, setData] = React.useState([]);

  const fetchData = async () => {
    setSelected([]);
    setData([
      {
        "Field Name": "",
        "Change Value": "",
        "Field": "",
        Value: "",
        Caption: "",
        "Regular Expression" : "",
        "Error Message" : ""
      },
    ]);
  };

  React.useEffect(() => {
    fetchData(); // Initial data fetch
    setSearchQuery("");
    setPage(0);
  }, []);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = data.map((n) => n.MasterId);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };
  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.

  const handleRow = (type) => {
    if (type === 1) {
      setData([
        ...data,
        {
            "Field Name": "",
            "Change Value": "",
            "Field": "",
            Value: "",
            Caption: "",
            "Regular Expression" : "",
            "Error Message" : ""
        },
      ]);
    } else {
      setSelected([]);
      setData(data.slice(0, -1));
    }
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          padding: "10px 10px ",
          zIndex: 1,
        }}
      >
        <>
          <Paper
            sx={{
              width: "100%",
              mb: 2,
              boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
            }}
          >
            {data.length > 0 && (
              <TableContainer
                style={{
                  display: "block",
                  maxHeight: "calc(100vh - 250px)",
                  overflowY: "auto",
                  scrollbarWidth: "thin",
                  scrollbarColor: "#888 #f5f5f5",
                  scrollbarTrackColor: "#f5f5f5",
                }}
              >
                <Table
                  aria-labelledby="tableTitle"
                  size={dense ? "small" : "medium"}
                >
                  <EnhancedTableHead
                    numSelected={Object.keys(selected).length}
                    order={order}
                    orderBy={orderBy}
                    onSelectAllClick={handleSelectAllClick}
                    onRequestSort={handleRequestSort}
                    rowCount={data.length}
                    rows={Object.keys(data[0])}
                  />

                  <TableBody>
                    {data.map((row, index) => {
                      const isItemSelected = isSelected(row.MasterId);
                      const labelId = `enhanced-table-checkbox-${index}`;

                      return (
                        <TableRow
                          hover
                          className={`table-row `}
                          //   onClick={(event) => handleClick(event, row.MasterId)}
                          role="checkbox"
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={row.MasterId}
                          selected={isItemSelected}
                          sx={{ cursor: "pointer" }}
                        >
                          <TableCell padding="checkbox">
                            <PopupState
                              variant="popover"
                              popupId="demo-popup-popover"
                            >
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
                                          popupState.close(); // Close the popover
                                        }}
                                        aria-label="add"
                                        color={thirdColor}
                                        sx={{
                                          fontSize: "1.2rem",
                                          color: thirdColor,
                                        }}
                                      >
                                        <AddCircleIcon
                                          sx={{ fontSize: "1.2rem" }}
                                        />
                                      </IconButton>
                                      {data?.length > 1 ? (
                                        <IconButton
                                          onClick={() => {
                                            handleRow(0);
                                            popupState.close(); // Close the popover
                                          }}
                                          aria-label="remove"
                                          sx={{
                                            fontSize: "1.2rem",
                                            color: thirdColor,
                                          }}
                                        >
                                          <RemoveCircleIcon
                                            sx={{ fontSize: "1.2rem" }}
                                          />
                                        </IconButton>
                                      ) : null}
                                    </Stack>
                                  </Popover>
                                </div>
                              )}
                            </PopupState>
                          </TableCell>

                          {Object.keys(data[0]).map((column, index) => {
                            if (column !== "MasterId") {
                              return (
                                <>
                                  <TableCell
                                    sx={{
                                      border: "1px solid #ddd",
                                      whiteSpace: "nowrap",
                                      width: "calc(100%/7)",
                                      overflow: "hidden",
                                      textOverflow: "ellipsis",
                                      padding: "4px", // Reduce the padding
                                      fontSize: "0.75rem", // Reduce the font size
                                    }}
                                    onChange={() => handleChanges(row)}
                                    key={row[column]}
                                    component="th"
                                    id={labelId}
                                    scope="row"
                                    align="left"
                                  >
                                    <AutoCompleteTable />
                                  </TableCell>
                                </>
                              );
                            }
                          })}
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </TableContainer>
            )}
          </Paper>
        </>
      </Box>
    </>
  );
}
