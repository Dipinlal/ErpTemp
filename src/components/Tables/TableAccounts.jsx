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
import Checkbox from "@mui/material/Checkbox";
import { visuallyHidden } from "@mui/utils";
import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Pagination,
  Select,
  TextField,
  Tooltip,
} from "@mui/material";
import { secondryColor, thirdColor } from "../../config";
import { accountData } from "../../config/masterConfig";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import AutocompleteSecurity from "../AutoComplete/AutocompleteSecurity";
import WidgetsIcon from "@mui/icons-material/Widgets";
import AdvancedSearchDialog from "../../containers/Home/Master/Account/AccountMaster/AdvancedSearch";
import { useState } from "react";
import { useTheme } from "../../config/themeContext";

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
    thirdColor
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
          padding="checkbox"
        >
          <Checkbox
            color="default"
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {rows.map((header, index) => {
          if (true) {
            // Exclude "iId", "iAssetType", and "sAltName" from the header
            return (
              <TableCell
                sx={{ border: "1px solid #ddd", cursor: "pointer" }}
                key={`${index}-${header}`}
                align="left" // Set the alignment to left
                padding="normal"
                sortDirection={orderBy === header ? order : false}
              >
                <TableSortLabel
                  sx={{ color: "#fff" }}
                  active={orderBy === header}
                  direction={orderBy === header ? order : "asc"}
                  onClick={createSortHandler(header)}
                >
                  {header === "sDocNo" || header === "sLocation"
                    ? header?.slice(1)
                    : header}
                  {orderBy === header ? (
                    <Box component="span" sx={visuallyHidden}>
                      {order === "desc"
                        ? "sorted descending"
                        : "sorted ascending"}
                    </Box>
                  ) : null}
                </TableSortLabel>
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

function EnhancedTableToolbar(props) {
  const { name, values, changes,handleOpenDialog,isSearch, thirdColor } = props;

  return (
    <Toolbar
    sx={{
      pl: { sm: 2 },
      pr: { xs: 1, sm: 1 },
      display: 'flex',
      justifyContent: 'space-between',
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <FormControl sx={{ m: 1, minWidth: 120 }} className="CLTFormControl">
        <InputLabel htmlFor="rows-per-page">Show Entries</InputLabel>
        <Select
          value={12}
          label="Rows per page"
          inputProps={{
            name: "rows-per-page",
            id: "rows-per-page",
          }}
          sx={{
            height: "35px",
          }}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={50}>50</MenuItem>
          <MenuItem value={100}>100</MenuItem>
        </Select>
      </FormControl>
      {isSearch &&
      <Tooltip title="Search">
        <a
          className="btn text-white"
          data-mdb-ripple-init=""
          style={{
            backgroundColor: thirdColor,
            padding: "0.3rem 0.8rem",
            fontSize: "0.8rem",
            marginLeft: 3,
          }}
          role="button"
          onClick={handleOpenDialog}
        >
          <i className="fas fa-search" style={{ fontSize: "0.8rem" }} />
        </a>
      </Tooltip>
      }
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Tooltip title="Show All Records">
        <a
          className="btn text-white"
          data-mdb-ripple-init=""
          style={{
            backgroundColor: thirdColor,
            padding: "0.3rem 0.8rem",
            fontSize: "0.8rem",
            marginLeft: 3,
          }}
          role="button"
        >
          <i className="far fa-folder" style={{ fontSize: "0.8rem" }} />
        </a>
      </Tooltip>
      <Tooltip title="Show All Unauthorised Records">
        <a
          className="btn text-white"
          data-mdb-ripple-init=""
          style={{
            backgroundColor: thirdColor,
            padding: "0.3rem 0.8rem",
            fontSize: "0.8rem",
            marginLeft: 3,
          }}
          role="button"
        >
          <i className="far fa-rectangle-list" style={{ fontSize: "0.8rem" }} />
        </a>
      </Tooltip>
      <Tooltip title="Show All Closed Records">
        <a
          className="btn text-white"
          data-mdb-ripple-init=""
          style={{
            backgroundColor: thirdColor,
            padding: "0.3rem 0.8rem",
            fontSize: "0.8rem",
            marginLeft: 3,
          }}
          role="button"
        >
          <i className="fas fa-square-xmark" style={{ fontSize: "0.8rem" }} />
        </a>
      </Tooltip>
      <Tooltip title="Auto Adjust Columns">
        <a
          className="btn text-white"
          data-mdb-ripple-init=""
          style={{
            backgroundColor: thirdColor,
            padding: "0.3rem 0.8rem",
            fontSize: "0.8rem",
            marginLeft: 3,
          }}
          role="button"
        >
          <OpenInNewIcon style={{ fontSize: "0.9rem" }} />
        </a>
      </Tooltip>
      <Tooltip title="Retain Selection">
        <Checkbox size="small" sx={{ marginLeft: 1 }} />
      </Tooltip>
    </Box>
  </Toolbar>
  );
}

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default function SummaryPage({items}) {
  const { currentTheme,switchTheme } = useTheme();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState(0);
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(true);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [data, setData] = React.useState([]);
  const [openDialog, setOpenDialog] = useState(false);

  const handleOpenDialog = () => setOpenDialog(true);
  const handleCloseDialog = () => setOpenDialog(false);

  const fetchData = async () => {
    setSelected([]);
    setData(accountData);
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
  const filteredRows = data.filter((row) =>
    Object.values(row).some((value) => {
      if (typeof value === "string") {
        return value.toLowerCase().includes(searchQuery.toLowerCase());
      }
      if (typeof value === "number") {
        return value.toString().includes(searchQuery.toLowerCase());
      }
      return false; // Ignore other types
    })
  );
  const visibleRows = React.useMemo(
    () =>
      stableSort(filteredRows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage, filteredRows]
  );

  return (
    <>
      <Box
        sx={{
          width: "100%",
          padding: "0px 10px ",
          zIndex: 1,
          minHeight: "590px",
        }}
      >
        <Box sx={{ margin: "10px 0px ", display: "flex", gap: "10px" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AutocompleteSecurity label="" />
            <IconButton aria-label="tree">
              <WidgetsIcon sx={{ color: currentTheme.thirdColor }} />
            </IconButton>
          </Box>
          
        </Box>

        <>
          <Paper
            sx={{
              width: "100%",
              mb: 2,
              boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
            }}
          >
            <EnhancedTableToolbar
              name="Account Name"
              values={searchQuery}
              changes={handleSearch}
              numSelected={selected.length} // Provide the numSelected prop
              handleOpenDialog={handleOpenDialog}
              handleCloseDialog={handleCloseDialog}
              isSearch={items?.length>0?true:false}
              thirdColor={currentTheme.thirdColor}
            />

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
                  sx={{ minWidth: "100%" }}
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
                    thirdColor={currentTheme.thirdColor}
                  />

                  <TableBody>
                    {visibleRows.map((row, index) => {
                      const isItemSelected = isSelected(row.MasterId);
                      const labelId = `enhanced-table-checkbox-${index}`;

                      return (
                        <TableRow
                          hover
                          className={`table-row `}
                          onClick={(event) => handleClick(event, row.MasterId)}
                          role="checkbox"
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={row.MasterId}
                          selected={isItemSelected}
                          sx={{ cursor: "pointer" }}
                        >
                          <TableCell padding="checkbox">
                            <Checkbox
                              color="primary"
                              checked={isItemSelected}
                              inputProps={{
                                "aria-labelledby": labelId,
                              }}
                            />
                          </TableCell>
                          {Object.keys(data[0]).map((column, index) => {
                            if (true) {
                              return (
                                <>
                                  <TableCell
                                    sx={{
                                      padding: "4px",
                                      border: "1px solid #ddd",
                                      whiteSpace: "nowrap",
                                      overflow: "hidden",
                                      textOverflow: "ellipsis",
                                      width: "auto",
                                    }}
                                    key={row[column]}
                                    component="th"
                                    id={labelId}
                                    scope="row"
                                    padding="normal"
                                    align="left"
                                  >
                                    {row[column]}
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
            <Pagination
              rowsPerPageOptions={[10, 25, 50, 100]}
              component="div"
              variant="outlined"
              shape="rounded"
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              sx={{
                display: "flex", // Use flexbox for the container
                justifyContent: "center", // Center the pagination horizontally
                alignItems: "center", // Center the pagination vertically
                p: 1,
                ".MuiPagination-root": {
                  margin: "0 auto", // Center the pagination container
                },
                ".MuiPagination-ul": {
                  justifyContent: "center", // Center the page number links
                },
                ".MuiPaginationItem-root": {
                  fontSize: "0.9rem", // Adjust the font size of pagination items
                },
                ".MuiSelect-root": {
                  marginLeft: "0.5rem", // Add left margin to the rows per page select
                },
                ".MuiTablePagination-input": {
                  marginRight: "0.5rem", // Add right margin to the page input
                },
                ".MuiSvgIcon-root": {
                  fontSize: "1.2rem", // Adjust the font size of pagination icons
                },
                // Add other styles as needed
              }}
            />
          </Paper>
        </>

      </Box>
      <AdvancedSearchDialog open={openDialog} onClose={handleCloseDialog} items={items} />
    </>
  );
}
