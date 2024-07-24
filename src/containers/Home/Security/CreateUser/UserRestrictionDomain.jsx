import React from 'react';
import { Box, TextField, IconButton, Typography, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import Grid from '@mui/material/Grid';
import AddIcon from "@mui/icons-material/Add";
import { useState } from 'react';

function UserDomainComponent() {
  const [domains, setDomains] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Handle adding a new domain
  const handleAddDomain = () => {
    if (inputValue.trim() !== "") {
      setDomains(prevDomains => [...prevDomains, inputValue]);
      setInputValue(""); // Clear the input field after adding
    }
  };
  return (
    <Box sx={{ border: "1px solid #c4c4c4", borderRadius: 2, pl: 1, pr: 1,pb:2 }}>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Typography gutterBottom component="div" sx={{ padding: 0 }}>
            Domains
          </Typography>
          <Box sx={{ height: "50px" }}>
            <TextField
              margin="normal"
              size="small"
              label="Add domains here"
              variant="outlined"
              value={inputValue}
              onChange={handleInputChange}
              InputProps={{
                endAdornment: (
                  <IconButton sx={{padding:0}} onClick={handleAddDomain}>
                    <AddIcon />
                  </IconButton>
                ),
              }}
              sx={{
                width: 250, // Adjust the width as needed
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
          </Box>
          <Box mt={1} p={2} border={1} sx={{ height: "200px" }}>
            <List
              sx={{
                height: "170px",
                overflowY: "auto",
                scrollbarWidth: "thin",
                padding: 0,
                pl: 1,
              }}
            >
              {domains.map((domain, index) => (
                // <ListItem key={index}>{domain}</ListItem>
                <ListItemButton key={index} sx={{ padding: 0 }}>
                  <ListItemText
                    primary={domain}
                    primaryTypographyProps={{ style: { fontSize: "0.8rem" } }}
                  />
                </ListItemButton>
              ))}
            </List>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Typography gutterBottom component="div" sx={{ padding: 0 }}>
            Computers under selected domain
          </Typography>
          <Box sx={{ height: "50px" }}></Box>
          <Box mt={1} p={2} border={1} sx={{ height: "200px" }}>
            {/* Placeholder for computers list */}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default UserDomainComponent;
