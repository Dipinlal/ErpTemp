import React, { useState, useEffect } from 'react';
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
import { useTheme } from '../../../../../config/themeContext';
import RoleSelect1 from '../../../../../components/Select/RoleSelect1';
import AccountInput1 from '../../../../../components/Inputs/AccountInput1';
import MasterEntitySelect from '../../../../../components/Select/MasterEntitySelect';

const MAX_ROWS = 20;

const MasterOtherNames = ({ accountName, entitiesList }) => {
  const initialRows = [{ id: 1, entity: 'Entity1', master: accountName, code: '' }];
  const { currentTheme } = useTheme();
  const [rows, setRows] = useState([]);
  const [selectedEntity, setSelectedEntity] = useState('');
  const [editRowId, setEditRowId] = useState(null);
  const [accountName1, setAccountName1] = useState('');
  const [code, setCode] = useState('');
  const [selectedEntityData, setselectedEntityData] = useState([])

  const transformedEntitiesList = entitiesList.map(item => ({
    label: item.title,
    value: item.iId,
  }));

 
  useEffect(() => {
    setRows(rows.map(row =>
      row.id === 1
        ? { ...row, master: accountName }
        : row
    ));
  }, [accountName]);

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

  const handleEntityChange = (data)=>{
    
    setSelectedEntity(data.value)
    setselectedEntityData(data)
  }
  const handleAddEntity = () => {
    if (selectedEntity && accountName1 && code) {
      const existingRow = rows.find(row => row.entity === selectedEntity);

      if (existingRow && (editRowId !== existingRow.id)) {
        alert('Entity already exists');
        return;
      }

      const newRow = {
        id: editRowId || rows.length + 1,
        entity: selectedEntity,
        master: accountName1,
        code: code,
        entityLabel:selectedEntityData.label
      };

      if (editRowId) {
        setRows(rows.map(row => row.id === editRowId ? newRow : row));
      } else {
        setRows([...rows, newRow]);
      }

      setSelectedEntity('');
      setAccountName1('');
      setCode('');
      setEditRowId(null);
    }
  };

  const handleEditRow = (row) => {
    setSelectedEntity(row.entity);
    setAccountName1(row.master);
    setCode(row.code);
    setEditRowId(row.id);
  };

  const handleDeleteRow = (rowToDelete) => {
    setRows(rows.filter(row => row.id !== rowToDelete.id));
  };

  const getLanguageSettings = (language) => {
    if (language === 'ar' || language === 'fa') {
      return { lang: language, dir: 'rtl' };
    }
    return { lang: language, dir: 'ltr' };
  };
  useEffect(() => {
    const entitySet = new Set(transformedEntitiesList.map(item => item.value));
    setRows(rows => rows.filter(row => entitySet.has(row.entity)));
  }, [entitiesList]);

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center', marginBottom: '16px' }}>
       
        <AccountInput1
          label="Name"
          value={accountName1}
          onChange={(e) => setAccountName1(e.target.value)}
          inputProps={{ ...getLanguageSettings(selectedEntity) }}
        />
        <AccountInput1
          label="Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
         <MasterEntitySelect
          label="Entity"
          value={selectedEntity}
          onChange={handleEntityChange}
          options={transformedEntitiesList}
        />
      </div>
      <Button
        variant="contained"
        onClick={handleAddEntity}
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
              <TableCell sx={{...headerCellStyle,minWidth:"200px"}}>Entity</TableCell>
              <TableCell sx={{...headerCellStyle,minWidth:"200px"}}>Master</TableCell>
              <TableCell sx={{...headerCellStyle,minWidth:"200px"}}>Code</TableCell>
              <TableCell sx={{ ...headerCellStyle, minWidth: '35px' }}></TableCell>
              <TableCell sx={{ ...headerCellStyle, minWidth: '35px' }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell sx={bodyCell}>{row.entityLabel}</TableCell>
                <TableCell sx={bodyCell}>
                  <TextField
                    variant="outlined"
                    size="small"
                    value={row.master}
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
                <TableCell sx={bodyCell}>{row.code}</TableCell>
                <TableCell sx={bodyCell}>
                  <IconButton onClick={() => handleDeleteRow(row)} size="small">
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </TableCell>
                <TableCell sx={bodyCell}>
                  <IconButton onClick={() => handleEditRow(row)} size="small">
                    <EditIcon fontSize="small" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default MasterOtherNames;
