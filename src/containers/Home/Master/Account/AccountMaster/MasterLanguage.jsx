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

const transcribe = (text, language) => {
  // Define simple mappings for a few languages
  const mappings = {
    Arabic: {
      'a': 'ا', 'b': 'ب', 'c': 'ك', 'd': 'د',
      'e': 'ي', 'f': 'ف', 'g': 'ج', 'h': 'ه',
      'i': 'ي', 'j': 'ج', 'k': 'ك', 'l': 'ل',
      'm': 'م', 'n': 'ن', 'o': 'و', 'p': 'ب',
      'q': 'ق', 'r': 'ر', 's': 'س', 't': 'ت',
      'u': 'و', 'v': 'ف', 'w': 'و', 'x': 'كس',
      'y': 'ي', 'z': 'ز'
    },
    Persian: {
      'a': 'ا', 'b': 'ب', 'c': 'چ', 'd': 'د',
      'e': 'ی', 'f': 'ف', 'g': 'گ', 'h': 'ه',
      'i': 'ی', 'j': 'ج', 'k': 'ک', 'l': 'ل',
      'm': 'م', 'n': 'ن', 'o': 'و', 'p': 'پ',
      'q': 'ق', 'r': 'ر', 's': 'س', 't': 'ت',
      'u': 'و', 'v': 'و', 'w': 'و', 'x': 'ژ',
      'y': 'ی', 'z': 'ز'
    },
    Chinese: {
      'a': '阿', 'b': '比', 'c': '西', 'd': '迪',
      'e': '伊', 'f': '艾弗', 'g': '吉', 'h': '艾尺',
      'i': '艾', 'j': '杰', 'k': '开', 'l': '艾勒',
      'm': '艾姆', 'n': '艾娜', 'o': '哦', 'p': '屁',
      'q': '吉吾', 'r': '艾儿', 's': '艾丝', 't': '提',
      'u': '伊吾', 'v': '维', 'w': '豆贝尔维', 'x': '艾克斯',
      'y': '吾艾', 'z': '贼德'
    },
    Spanish: {
      'a': 'a', 'b': 'be', 'c': 'ce', 'd': 'de',
      'e': 'e', 'f': 'efe', 'g': 'ge', 'h': 'hache',
      'i': 'i', 'j': 'jota', 'k': 'ka', 'l': 'ele',
      'm': 'eme', 'n': 'ene', 'o': 'o', 'p': 'pe',
      'q': 'cu', 'r': 'ere', 's': 'ese', 't': 'te',
      'u': 'u', 'v': 'uve', 'w': 'uve doble', 'x': 'equis',
      'y': 'i griega', 'z': 'zeta'
    },
    Portuguese: {
      'a': 'a', 'b': 'bê', 'c': 'cê', 'd': 'dê',
      'e': 'e', 'f': 'efe', 'g': 'gê', 'h': 'agá',
      'i': 'i', 'j': 'jóta', 'k': 'cá', 'l': 'éle',
      'm': 'ême', 'n': 'êne', 'o': 'o', 'p': 'pê',
      'q': 'quê', 'r': 'érre', 's': 'ésse', 't': 'tê',
      'u': 'u', 'v': 'vê', 'w': 'dáblio', 'x': 'xis',
      'y': 'ípsilon', 'z': 'zê'
    },
    Indonesian: {
      'a': 'a', 'b': 'bé', 'c': 'cé', 'd': 'dé',
      'e': 'é', 'f': 'éf', 'g': 'gé', 'h': 'há',
      'i': 'i', 'j': 'jé', 'k': 'ká', 'l': 'él',
      'm': 'ém', 'n': 'én', 'o': 'o', 'p': 'pé',
      'q': 'ké', 'r': 'ér', 's': 'és', 't': 'té',
      'u': 'u', 'v': 'vé', 'w': 'wé', 'x': 'éks',
      'y': 'yé', 'z': 'zé'
    },
    'Alt English': {
      'a': 'ɑ', 'b': 'ɓ', 'c': 'ɔ', 'd': 'ɗ',
      'e': 'ɛ', 'f': 'ƒ', 'g': 'ɠ', 'h': 'ɦ',
      'i': 'ɪ', 'j': 'ʝ', 'k': 'ƙ', 'l': 'ʟ',
      'm': 'ɱ', 'n': 'ɲ', 'o': 'ɵ', 'p': 'ƥ',
      'q': 'ʠ', 'r': 'ʀ', 's': 'ʃ', 't': 'ʈ',
      'u': 'ʉ', 'v': 'ʋ', 'w': 'ɯ', 'x': 'χ',
      'y': 'ʏ', 'z': 'ʐ'
    },
    default: text
  };

  const script = mappings[language] || mappings.default;
  return text.split('').map(char => script[char.toLowerCase()] || char).join('');
};

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

const MasterLanguage = ({ accountName }) => {
  const initialRows = [{ id: 1, language: 'en', master: accountName, languageLabel: "English" }];
  const { currentTheme } = useTheme();
  const [rows, setRows] = useState(initialRows);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [editRowId, setEditRowId] = useState(null);
  const [accountName1, setAccountName1] = useState('');

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

  const handleAddLanguage = () => {
    if (selectedLanguage && accountName1) {
      const existingRow = rows.find(row => row.language === selectedLanguage);

      if (existingRow && (editRowId !==existingRow.id)) {
        alert('Language already exists');
        return;
      }

      const label = getLanguageLabel(selectedLanguage);
      const newRow = {
        id: editRowId || rows.length + 1,
        language: selectedLanguage,
        master: accountName1,
        languageLabel: label,
      };

      if (editRowId) {
        setRows(rows.map(row => row.id === editRowId ? newRow : row));
      } else {
        setRows([...rows, newRow]);
      }

      setSelectedLanguage('');
      setAccountName1('');
      setEditRowId(null);
    }
  };

  const handleEditRow = (row) => {
    setSelectedLanguage(row.language);
    setAccountName1(row.master);
    setEditRowId(row.id);
  };

  const handleDeleteRow = (rowToDelete) => {
    if (rowToDelete.language !== 'en') {
      setRows(rows.filter(row => row.id !== rowToDelete.id));
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

  const isEnglishEntered = rows.some((row) => row.language === 'en');

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
          label="Name"
          value={accountName1}
          onChange={(e) => setAccountName1(e.target.value)}
          inputProps={{ ...getLanguageSettings(selectedLanguage) }}
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
              <TableCell sx={headerCellStyle}>Master</TableCell>
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

export default MasterLanguage;
