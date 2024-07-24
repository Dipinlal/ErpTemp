import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  IconButton,
  Typography,
  TextField,
} from "@mui/material";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import LastPageIcon from "@mui/icons-material/LastPage";
import { profileDateFields } from "../../config";
import Pagination from "@mui/material/Pagination";

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
  const { onRequestSort, headCells } = props;

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={"left"}
            sx={{
              padding: "0px",
              paddingLeft: "4px",
              border: " 1px solid #ddd",
              fontWeight: "600",
              font: "14px",
              backgroundColor: currentTheme.thirdColor,
              color: currentTheme.tableHeaderColor,
              paddingTop: "3px",
              paddingBottom: "3px",
            }}
          >
            {headCell.label}
          </TableCell>
        ))}
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

export default function TableSecurity(props) {
  const { rows, totalRows, currentTheme, loading, totalPages } = props;
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filteredRows, setFilteredRows] = React.useState([]);
  const [doubleclickedState, setdoubleclickedState] = React.useState([]);
  const [columns, setColumns] = React.useState([]);

  const excludedFields = ["IId"];

  const initialColumns =
    rows && rows.length > 0
      ? Object.keys(rows[0])
          .filter((key) => !excludedFields.includes(key))
          .map((key) => ({
            id: key,
            label:
              key.charAt(0).toUpperCase() +
              key
                .slice(1)
                .replace(/([A-Z])/g, " $1")
                .trim(), // Format label as readable text
            minWidth: 100, // Set default minWidth for all columns
            maxWidth: 200,
          }))
      : [];
  React.useEffect(() => {
    setColumns(initialColumns);
  }, [rows]);

  const handleResize = (index, event) => {
    const startWidth = columns[index].minWidth;
    const startX = event.clientX;

    const handleMouseMove = (e) => {
      const currentX = e.clientX;
      const newWidth = Math.max(50, startWidth + (currentX - startX));
      setColumns((cols) =>
        cols.map((col, i) =>
          i === index ? { ...col, minWidth: newWidth, maxWidth: newWidth } : col
        )
      );
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleDoubleClick = (index) => {
    setColumns((cols) =>
      cols.map((col, i) =>
        i === index ? { ...col, maxWidth: col.maxWidth ? null : 200 } : col
      )
    );
  };

  const transformData = (rows) => {
    return rows.map((row) => {
      const transformedRow = { ...row };
      Object.keys(row).forEach((key) => {
        if (!isNaN(row[key]) && key !== "id") {
          // assuming 'id' should not be converted
          transformedRow[key] = Number(row[key]);
        }
      });
      return transformedRow;
    });
  };

  const headCells =
    rows.length > 0
      ? Object.keys(rows[0])
          .filter((key) => !excludedFields.includes(key))
          .map((key) => ({
            id: key,
            numeric: !isNaN(rows[0][key]), // Set numeric based on the type of the first row's value
            disablePadding: false,
            label: key, // Use key as the label
          }))
      : [];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setPage(0);
    props.onpageNumberChange(1);
    props.onSearchKeyChange(event.target.value);
  };

  const handleClick = (event, row) => {
    const selectedIndex = selected.indexOf(row.IId);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, row.IId); // Add the entire row object
    } else {
      newSelected = [
        ...selected.slice(0, selectedIndex),
        ...selected.slice(selectedIndex + 1),
      ];
    }

    setSelected(newSelected);
  };

  //remove event if Nan comes in pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    props.onpageNumberChange(newPage + 1);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    props.onpageNumberChange(1);
    props.onDisplayLengthChange(parseInt(event.target.value, 10));
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.

  const visibleRows = React.useMemo(
    () =>
      stableSort(filteredRows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage, filteredRows]
  );

  //   const handleRowDoubleClick = (event, row) => {
  //     if (pageTitle === 11) {
  //       // If it matches, return early to disable double-click functionality
  //       return;
  //     }
  //     // Create a new array with just the double-clicked row
  //     const doubleClickedRow = row;

  //     // Now call the onRowDoubleClick prop with the new array
  //     props.onRowDoubleClick(doubleClickedRow);
  //   };

  React.useEffect(() => {
    if (searchTerm) {
      const filteredData = rows.filter((row) =>
        Object.values(row).some((val) =>
          typeof val === "string" || typeof val === "number"
            ? val.toString().toLowerCase().includes(searchTerm.toLowerCase())
            : false
        )
      );
      //const transformedRows = transformData(filteredData);
      setFilteredRows(filteredData);
    } else {
      //const transformedRows = transformData(rows);
      setFilteredRows(rows);
    }
  }, [searchTerm, rows]);

  // React.useEffect(() => {

  //   // Assuming filteredRows is updated based on filtering
  //   props.onExportData(filteredRows);
  // }, [filteredRows]);
  React.useEffect(() => {
    setPage(0); // Reset page to 0
    props.onpageNumberChange(1); // Call the callback function with 0 if needed
    props.setchangesTriggered(false);
    setSelected([]);
  }, [props.changesTriggered]);

  React.useEffect(() => {
    props.onSelectedRowsChange(selected);
  }, [selected]);


  const convertToLocaleDateString = (dateString) => {
    if (!dateString) return ""; // Return an empty string for null or undefined values
    const date = new Date(dateString);
    if (isNaN(date)) return dateString; // If date is invalid, return the original string

    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  };
  return (
    <Box
      sx={{
        width: "95%",
        margin: "auto",
        marginTop: "30px",
        boxShadow: 3,
        paddingLeft: "10px",
        paddingRight: "10px",
        paddingBottom: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <FormControl sx={{ m: 1 }} className="CLTFormControl">
          <InputLabel
            htmlFor="rows-per-page"
            sx={{
              "&.Mui-focused": {
                color: "currentColor", // Keeps the current color
              },
            }}
          >
            Show Entries
          </InputLabel>
          <Select
            value={rowsPerPage}
            onChange={handleChangeRowsPerPage}
            label="Rows per page"
            inputProps={{
              name: "rows-per-page",
              id: "rows-per-page",
            }}
            sx={{
              width: "120px",
              height: "30px",
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "currentColor", // Keeps the current border color
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "currentColor", // Optional: Keeps the border color on hover
              },
            }}
          >
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={25}>25</MenuItem>
            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={100}>100</MenuItem>
          </Select>
        </FormControl>

        <TextField
          margin="normal"
          size="small"
          id="search"
          label="Search"
          autoComplete="off"
          autoFocus
          value={searchTerm}
          onChange={handleSearch}
          sx={{
            width: 200, // Adjust the width as needed
            "& .MuiInputBase-root": {
              height: 30, // Adjust the height of the input area
            },
            "& .MuiInputLabel-root": {
              transform: "translate(10px, 5px) scale(0.9)", // Adjust label position when not focused
            },
            "& .MuiInputLabel-shrink": {
              transform: "translate(14px, -9px) scale(0.75)", // Adjust label position when focused
            },
            "& .MuiInputBase-input": {
              fontSize: "0.75rem", // Adjust the font size of the input text
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "currentColor", // Keeps the current border color
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "currentColor", // Optional: Keeps the border color on hover
            },
          }}
        />
      </div>
      {filteredRows && filteredRows.length > 0 ? (
        <Paper sx={{ width: "100%", mb: 2 }}>
          {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
          {/* <TableContainer sx={{maxHeight:"60vh",overflow:"scroll" }}> */}
          <TableContainer
            sx={{ maxHeight: "50vh", overflow: "auto", scrollbarWidth: "thin" }}
          >
            <Table stickyHeader sx={{ minWidth: 750 }}>
              <TableHead>
                <TableRow sx={{ position: "sticky", top: 0 }}>
                  {columns.map((column, index) => (
                    <TableCell
                      key={column.id}
                      style={{
                        minWidth: column.minWidth,
                        position: "relative",
                      }}
                      sx={{
                        padding: "0px",
                        paddingLeft: "4px",
                        border: " 1px solid #ddd",
                        fontWeight: "600",
                        font: "14px",
                        backgroundColor: currentTheme.thirdColor,
                        color: currentTheme.tableHeaderColor,
                        paddingTop: "3px",
                        paddingBottom: "3px",
                      }}
                      onDoubleClick={() => handleDoubleClick(index)}
                    >
                      {column.label}
                      <span
                        style={{
                          position: "absolute",
                          height: "100%",
                          right: 0,
                          top: 0,
                          width: "5px",
                          cursor: "col-resize",
                          backgroundColor: "rgba(0,0,0,0.1)",
                        }}
                        onMouseDown={(e) => handleResize(index, e)}
                      />
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredRows.map((row, index) => {
                  const isItemSelected = isSelected(row.IId);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  const isEvenRow = index % 2 === 0;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      onDoubleClick={() => props.onRowDoubleClick(row.IId)}
                      tabIndex={-1}
                      key={row.IId}
                      sx={{
                        cursor: "default",
                        backgroundColor: isItemSelected ?"#f5f5f5" : "#f5f5f5white"
                      }}
                      className={isEvenRow ? "FXTeven-row" : "FXTodd-row"}
                    >
                      {/* <TableCell sx={{ padding: "0px",textAlign:"center" }}>
                        <Checkbox
                          sx={{ padding: "0px" }}
                          checked={isItemSelected}
                          inputProps={{ "aria-labelledby": labelId }}
                        />
                      </TableCell> */}

                      {columns.map((column) => (
                        <TableCell
                          sx={{
                            padding: "0px",
                            paddingLeft: "4px",
                            border: " 1px solid #ddd",
                            minWidth: "100px",
                            maxWidth: column.maxWidth,
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                          key={column.id}
                          style={{ minWidth: column.minWidth }}
                        >
                          {profileDateFields.includes(column.label)
                            ? convertToLocaleDateString(row[column.id])
                            : row[column.id]}
                        </TableCell>
                      ))}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      ) : (
        <>
          <>
            {loading && (
              <Box sx={{ width: "100%", textAlign: "center", my: 4 }}>
                <Typography>Please Wait</Typography>
              </Box>
            )}
          </>
          <>
            {!loading && (
              <Box sx={{ width: "100%", textAlign: "center", my: 4 }}>
                <Typography>No Data</Typography>
              </Box>
            )}
          </>
        </>
      )}
      {filteredRows && filteredRows.length > 0 && (
        <Pagination
          count={rows.length > 0 ? totalPages : 0}
          page={page + 1} // Pagination component is 1-based, but state is 0-based
          onChange={(event, value) => handleChangePage(null, value - 1)}
          variant="outlined"
          shape="rounded"
          showFirstButton
          showLastButton
          ActionsComponent={TablePaginationActions}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "16px", // Adjust as needed for spacing
          }}
        />
      )}
    </Box>
  );
}
const TablePaginationActions = (props) => {
  const { count, page, rowsPerPage, onPageChange } = props;

  // Calculate the last page index
  const lastPage = Math.ceil(count / rowsPerPage) - 1;

  // Generate page numbers: we want to show 2 pages on each side if possible
  const startPage = Math.max(0, page - 2); // Current page - 2, but not less than 0
  const endPage = Math.min(lastPage, page + 2); // Current page + 2, but not more than last page

  // Create an array of page numbers to be shown
  const pages = Array.from(
    { length: endPage - startPage + 1 },
    (_, idx) => startPage + idx
  );

  const handlePageButtonClick = (newPage) => {
    onPageChange(newPage);
  };

  return (
    <div style={{ flexShrink: 0, marginLeft: 20 }}>
      {page > 0 && (
        <IconButton onClick={() => handlePageButtonClick(0)}>
          <FirstPageIcon />
        </IconButton>
      )}
      {pages.map((pageNum) => (
        <IconButton
          sx={{
            minWidth: "30px",
            minHeight: "30px",
            padding: "2px",
            margin: "1px",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%", // Make the background round
            color: "inherit",
            backgroundColor: pageNum === page ? "grey" : "white",
            "&:hover": {
              backgroundColor: pageNum === page ? "grey" : "lightgrey", // Change hover color
            },
            "&.Mui-disabled": {
              backgroundColor: "white",
            },
            fontSize: "14px",
          }}
          key={pageNum}
          color={pageNum === page ? "primary" : "default"}
          onClick={() => handlePageButtonClick(pageNum)}
          disabled={pageNum > lastPage}
        >
          {pageNum + 1}
        </IconButton>
      ))}
      {page < lastPage && (
        <IconButton onClick={() => handlePageButtonClick(lastPage)}>
          <LastPageIcon />
        </IconButton>
      )}
    </div>
  );
};
