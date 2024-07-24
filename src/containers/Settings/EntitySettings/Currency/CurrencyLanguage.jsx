import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Select,
  MenuItem,
  Paper,
  IconButton,
  Button,
  FormControl,
  InputLabel,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTheme } from '../../../../config/themeContext';

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
  { label: 'English', value: 'English' },
  { label: 'Arabic', value: 'Arabic' },
  { label: 'Persian', value: 'Persian' },
  { label: 'Chinese', value: 'Chinese' },
  { label: 'Spanish', value: 'Spanish' },
  { label: 'Portuguese', value: 'Portuguese' },
  { label: 'Indonesian', value: 'Indonesian' },
  { label: 'Alt English', value: 'Alt English' },
];

const MAX_ROWS = 20;



const CurrencyLanguage = ({ accountName,coinsName, currencySubUnit, connector  }) => {
   
    const initialRows = [{ id: 1, language: 'English', Name: accountName, coinsName, currencySubUnit, connector }];
  const { currentTheme,switchTheme } = useTheme();
  const [rows, setRows] = useState(initialRows);
  const [selectedLanguage, setSelectedLanguage] = useState('');

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

  useEffect(() => {
    const updatedRows = rows.map(lang => ({
      ...lang,
      Name: transcribe(accountName, lang.language),
      coinsName: transcribe(coinsName, lang.language),
      currencySubUnit: transcribe(currencySubUnit, lang.language),
      connector: transcribe(connector, lang.language),
    }));
    setRows(updatedRows);
  }, [accountName, coinsName, currencySubUnit, connector,rows]);

  const handleAddLanguage = () => {
    if (selectedLanguage && !rows.some(row => row.language === selectedLanguage)) {
      const newRow = { id: rows.length + 1, language: selectedLanguage, Name: accountName, coinsName, currencySubUnit, connector };
      setRows([...rows, newRow]);
      setSelectedLanguage('');
    }
  };

  const handleDeleteRow = (rowToDelete) => {
    if (rowToDelete.language !== 'English') {
      setRows(rows.filter(row => row.id !== rowToDelete.id));
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
      <FormControl variant="outlined" size="small" sx={{ width: 250, height: 30, fontSize: '0.75rem' }}>
  <InputLabel id="language-select-label">Language</InputLabel>
  <Select
    labelId="language-select-label"
    value={selectedLanguage}
    onChange={(e) => setSelectedLanguage(e.target.value)}
    label="Language"
  >
    {languagesList1.map((option, index) => (
      <MenuItem key={index} value={option.value}>
        {option.label}
      </MenuItem>
    ))}
  </Select>
</FormControl>
        <Button
          variant="contained"
          onClick={handleAddLanguage}
          sx={{
            marginLeft: '16px',
            height: 30,
            fontSize: '0.75rem',
            backgroundColor: currentTheme.thirdColor,
            '&:hover': {
              backgroundColor: currentTheme.thirdColor,
            }
          }}
        >
          Add
        </Button>
      </div>

      <TableContainer sx={{ width: 'fit-content', maxHeight: '70vh', overflowY: 'auto', scrollbarWidth: 'thin' }} component={Paper}>
        <Table stickyHeader aria-label="sticky table">
        <TableHead>
            <TableRow>
              <TableCell sx={headerCellStyle}>Language</TableCell>
              <TableCell sx={headerCellStyle}>Name</TableCell>
              <TableCell sx={headerCellStyle}>Coins Name</TableCell>
              <TableCell sx={headerCellStyle}>Currency Sub Unit</TableCell>
              <TableCell sx={headerCellStyle}>Connector</TableCell>
              <TableCell sx={{ ...headerCellStyle, minWidth: '35px' }}></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell sx={bodyCell}>{row.language}</TableCell>
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
                      }
                    }}
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
                      }
                    }}
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
                      }
                    }}
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
                      }
                    }}
                  />
                </TableCell>
                <TableCell sx={bodyCell}>
                  {row.language !== 'English' && (
                    <IconButton onClick={() => handleDeleteRow(row)} size="small">
                      <DeleteIcon fontSize="small" />
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

export default CurrencyLanguage;
