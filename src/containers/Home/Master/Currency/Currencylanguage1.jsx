import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Paper,
  IconButton,
  Button,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useTheme } from '../../../../config/themeContext';
import AccountInput1 from '../../../../components/Inputs/AccountInput1';
import RoleSelect1 from '../../../../components/Select/RoleSelect1';

const languagesList1 = [
  { label: 'English', value: 'en' },
  { label: 'Arabic', value: 'ar' },
  { label: 'Persian', value: 'fa' },
  { label: 'Chinese', value: 'zh' },
  { label: 'Spanish', value: 'es' },
  { label: 'Portuguese', value: 'pt' },
  { label: 'Indonesian', value: 'id' },
  { label: 'Alt English', value: 'Alt English' },
];

const MAX_ROWS = 20;

const CurrencyLanguage1 = ({currencyName1,coinsName1, currencySubUnit1, connector1}) => {

  const initialRows = [{ id: 1, language: 'en', Name: currencyName1, coinsName:coinsName1, currencySubUnit:currencySubUnit1, connector:connector1,languageLabel:"English" }];
  const { currentTheme } = useTheme();
  const [rows, setRows] = useState(initialRows);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [currencyName, setcurrencyName] = useState('');
  const [coinsName, setCoinsName] = useState('');
  const [currencySubUnit, setCurrencySubUnit] = useState('');
  const [connector, setConnector] = useState('');
  const [editRowId, setEditRowId] = useState(null);
  
  useEffect(() => {
    setRows(rows.map(item => 
      item.id === 1 
        ? { id: 1, language: 'en', Name: currencyName1, coinsName: coinsName1, currencySubUnit: currencySubUnit1, connector: connector1, languageLabel: "English" }
        : item
    ));
  }, [currencyName1, coinsName1, currencySubUnit1, connector1]);
  

  const cellStyle = {
    padding: '0px',
    paddingLeft: '4px',
    paddingRight: '4px',
    border: '1px solid #ddd',
    fontWeight: '600',
    fontSize: '14px',
    color: currentTheme.sideBarTextColor1,
    paddingTop: '3px',
    paddingBottom: '3px',
  };

  const headerCellStyle = {
    ...cellStyle,
    backgroundColor: currentTheme.thirdColor,
    color: currentTheme.sideBarTextColor1,
  };

  const bodyCell = {
    padding: '0px',
    border: '1px solid #ddd',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    minHeight: '30px',
    lineHeight: '30px',
  };

  const handleAddLanguage = () => {
    if (selectedLanguage && currencyName) {
      const existingRow = rows.find(row => row.language === selectedLanguage);

      if (existingRow && (editRowId !==existingRow.id) ) {
        // If language already exists and not in edit mode, do nothing
        alert('Language already exists');
        return;
      }
  
      const label = getLanguageLabel(selectedLanguage);
      const newRow = {
        id: editRowId || rows.length + 1,
        language: selectedLanguage,
        Name: currencyName,
        languageLabel: label,
        coinsName: coinsName,
        currencySubUnit: currencySubUnit,
        connector: connector,
      };
  
      if (editRowId) {
        // Update the existing row
        setRows(rows.map(row => row.id === editRowId ? newRow : row));
      } else {
        // Add a new row
        setRows([...rows, newRow]);
      }
  
      setSelectedLanguage('');
      setcurrencyName('');
      setCoinsName('');
      setCurrencySubUnit('');
      setConnector('');
      setEditRowId(null);
    }
  };
  

  const getLanguageSettings = (language) => {
    if (language === 'ar' || language === 'fa') {
      return { lang: language, dir: 'rtl' };
    }
    return { lang: language, dir: 'ltr' };
  };

  const getLanguageLabel = (value) => {
    const language = languagesList1.find((lang) => lang.value === value);
    return language ? language.label : value;
  };

  const languageSettings = getLanguageSettings(selectedLanguage);

  const handleDeleteRow = (rowToDelete) => {
    if (rowToDelete.language !== 'en') {
      setRows(rows.filter((row) => row.id !== rowToDelete.id));
    }
  };

  const handleEditRow = (row) => {
    setSelectedLanguage(row.language);
    setcurrencyName(row.Name);
    setCoinsName(row.coinsName);
    setCurrencySubUnit(row.currencySubUnit);
    setConnector(row.connector);
    setEditRowId(row.id);
  };

  const isEnglishEntered = rows.some((row) => row.language === 'en' );

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center', marginBottom: '16px' }}>
        <RoleSelect1
          label="Language"
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          options={languagesList1}
          disabled={!isEnglishEntered}
        />
        <AccountInput1
          label="Currency Name"
          value={currencyName}
          onChange={(e) => setcurrencyName(e.target.value)}
          inputProps={{ ...languageSettings }}
        />
        <AccountInput1
          label="Coins Name"
          value={coinsName}
          onChange={(e) => setCoinsName(e.target.value)}
          inputProps={{ ...languageSettings }}
        />
        <AccountInput1
          label="Currency Sub Unit"
          value={currencySubUnit}
          onChange={(e) => setCurrencySubUnit(e.target.value)}
          inputProps={{ ...languageSettings }}
        />
        <AccountInput1
          label="Connector"
          value={connector}
          onChange={(e) => setConnector(e.target.value)}
          inputProps={{ ...languageSettings }}
        />
      </div>

      <Button
        variant="contained"
        onClick={handleAddLanguage}
        sx={{
          marginLeft: '0px',
          height: 30,
          fontSize: '0.75rem',
          marginBottom: '20px',
          backgroundColor: currentTheme.thirdColor,
          '&:hover': {
            backgroundColor: currentTheme.thirdColor,
          },
        }}
      >
        {editRowId ? 'Update' : 'Add'}
      </Button>

      <TableContainer sx={{ width: 'fit-content', maxHeight: '70vh', overflowY: 'auto', scrollbarWidth: 'thin' }} component={Paper}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell sx={headerCellStyle}>Language</TableCell>
              <TableCell sx={headerCellStyle}>Currency Name</TableCell>
              <TableCell sx={headerCellStyle}>Coins Name</TableCell>
              <TableCell sx={headerCellStyle}>Currency Sub Unit</TableCell>
              <TableCell sx={headerCellStyle}>Connector</TableCell>
              <TableCell sx={{ ...headerCellStyle, minWidth: '35px' }}></TableCell>
              <TableCell sx={{ ...headerCellStyle, minWidth: '35px' }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell sx={bodyCell}>{row.languageLabel}</TableCell>
                <TableCell sx={bodyCell}>
                  <TextField
                    variant="outlined"
                    size="small"
                    value={row.Name}
                    disabled
                    sx={{
                      width: 250,
                      '& .MuiInputBase-root': {
                        height: 30,
                      },
                      '& .MuiInputBase-input': {
                        fontSize: '0.75rem',
                      },
                    }}
                    inputProps={{ lang: row.language, dir: row.language === 'ar' || row.language === 'fa' ? 'rtl' : 'ltr' }}
                  />
                </TableCell>
                <TableCell sx={bodyCell}>
                  <TextField
                    variant="outlined"
                    size="small"
                    value={row.coinsName}
                    disabled
                    sx={{
                      width: 250,
                      '& .MuiInputBase-root': {
                        height: 30,
                      },
                      '& .MuiInputBase-input': {
                        fontSize: '0.75rem',
                      },
                    }}
                    inputProps={{ lang: row.language, dir: row.language === 'ar' || row.language === 'fa' ? 'rtl' : 'ltr' }}
                  />
                </TableCell>
                <TableCell sx={bodyCell}>
                  <TextField
                    variant="outlined"
                    size="small"
                    value={row.currencySubUnit}
                    disabled
                    sx={{
                      width: 250,
                      '& .MuiInputBase-root': {
                        height: 30,
                      },
                      '& .MuiInputBase-input': {
                        fontSize: '0.75rem',
                      },
                    }}
                    inputProps={{ lang: row.language, dir: row.language === 'ar' || row.language === 'fa' ? 'rtl' : 'ltr' }}
                  />
                </TableCell>
                <TableCell sx={bodyCell}>
                  <TextField
                    variant="outlined"
                    size="small"
                    value={row.connector}
                    disabled
                    sx={{
                      width: 250,
                      '& .MuiInputBase-root': {
                        height: 30,
                      },
                      '& .MuiInputBase-input': {
                        fontSize: '0.75rem',
                      },
                    }}
                    inputProps={{ lang: row.language, dir: row.language === 'ar' || row.language === 'fa' ? 'rtl' : 'ltr' }}
                  />
                </TableCell>
                <TableCell sx={bodyCell}>
                  {row.language !== 'en' && (
                    <IconButton onClick={() => handleDeleteRow(row)} size="small">
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  )}
                </TableCell>
                <TableCell sx={bodyCell}>
                {row.language !== 'en' && (
                  <IconButton onClick={() => handleEditRow(row)} size="small">
                    <EditIcon fontSize="small" />
                  </IconButton>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default CurrencyLanguage1;
