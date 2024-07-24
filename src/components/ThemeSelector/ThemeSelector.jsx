// import React from 'react';
// import { Box, IconButton } from '@mui/material';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import { useTheme } from '../../config/themeContext';
// import DoneIcon from '@mui/icons-material/Done';


// export default function ThemeSelector() {
//   const { currentTheme, switchTheme } = useTheme();

//   // const themes = {
//   //   default: '#0132BF',
//   //   theme1:"#00405E",
//   //   theme2:"#3995C1",
//   //   dark: '#333',
//   //   light: '#ddd',
//   //   // monochrome: '#000000',

//   // };
//   const themes = window.themes;

//   return (
//     <Box sx={{ position: 'absolute', left: 0, bottom: 0, margin: '10px', display: 'flex', gap: 1 }}>
//       {Object.keys(themes).map((themeName) => (
//         <IconButton
//           key={themeName}
//           onClick={() => switchTheme(themeName)}
//           sx={{
//             color: themes[themeName].primaryColor,
//             bgcolor: themes[themeName].primaryColor,
//             border: '2px solid',
//             borderColor: currentTheme.primaryColor === themes[themeName].primaryColor ? currentTheme.primaryButtonColor : '#fff',
//             width: 30,
//             height: 30,
//             '&:hover': {
//               borderColor: 'black',
//               color: themes[themeName].primaryColor,
//               bgcolor: themes[themeName].primaryColor,
//             },
//           }}
//         >
//           {currentTheme.primaryColor === themes[themeName].primaryColor && <DoneIcon sx={{ color: currentTheme.primaryButtonColor }} />}
//         </IconButton>
//       ))}
//     </Box>
//   );
// }
import React from 'react';
import { Box, FormControl, MenuItem, Select } from '@mui/material';
import { useTheme } from '../../config/themeContext';

export default function ThemeSelector() {
  const { currentTheme, switchTheme } = useTheme();
  const themes = window.themes;

  const handleThemeChange = (event) => {
    switchTheme(event.target.value);
  };

  return (
    <Box sx={{position: 'absolute', left: 0, bottom: 0, margin: '10px', display: 'flex', gap: 1, width: '200px', }}>
      <FormControl sx={{  }} >
        <Select
          id="theme-selector"
          value={Object.keys(themes).find(themeName => currentTheme.primaryColor === themes[themeName].primaryColor) || 'default'}
          onChange={handleThemeChange}
          sx={{
            padding: '0px',
            '& .MuiSelect-select': {
              display: 'flex',
              alignItems: 'center',
              border: 'none',
            },
            '& fieldset': {
              border: 'none',
            },
            
          }}
          disableUnderline
        >
          {Object.keys(themes).map((themeName) => (
            <MenuItem key={themeName} value={themeName}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box
                  sx={{
                    width: 14,
                    height: 14,
                    bgcolor: themes[themeName].primaryColor,
                    marginRight: 1,
                    borderRadius: '50%',
                  }}
                />
                {themeName}
              </Box>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
