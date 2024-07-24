import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Box, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../config/themeContext";
import AutofillStyle from "../../components/AutoFillStyle/AutofillStyle";

export default function SettingsLogin({ handleClose, setOptions }) {
  const [settingsName, setSettingsName] = React.useState("");
  const [settingsPassword, setSettingsPassword] = React.useState("");
  const navigate = useNavigate();

  const { currentTheme } = useTheme();

  const handleLogin = () => {
    if (settingsName === "test" && settingsPassword === "test") {
      navigate("/companySettings");
      handleClose();
    }
  };

  return (
    <Paper elevation={6} style={{ padding: "20px", borderRadius: "0px",width: "300px",backgroundColor: currentTheme.secondaryColor, }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: currentTheme.secondaryColor,
        }}
      >
        <AutofillStyle currentTheme={currentTheme} />
        <Typography component="h1" variant="h5" sx={{color:currentTheme.primaryButtonColor}}>
          LOGIN
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1, width: "100%" }}>
          <TextField
            margin="normal"
            size="small"
            required
            fullWidth
            id="email"
            label="Admin UserName"
            autoComplete="off"
            onChange={(e) => setSettingsName(e.target.value)}
            autoFocus
            InputProps={{
              style: {
                color: currentTheme.primaryButtonColor, // Text color
                backgroundColor: currentTheme.thirdColor, // Background color
                borderColor: currentTheme.activePrimaryColor, // You might need to create a custom Input component for border color
              }
            }}
            InputLabelProps={{
              style: {
                color: currentTheme.primaryButtonColor, // Label color
              }
            }}
          />
          <TextField
            margin="normal"
            size="small"
            required
            fullWidth
            name="password"
            label="Admin Password"
            id="password"
            type="password"
            autoComplete="current-password"
            onChange={(e) => setSettingsPassword(e.target.value)}
            InputProps={{
              style: {
                color: currentTheme.primaryButtonColor, // Text color
                backgroundColor: currentTheme.thirdColor, // Background color
                borderColor: currentTheme.activePrimaryColor, // You might need to create a custom Input component for border color
              }
            }}
            InputLabelProps={{
              style: {
                color: currentTheme.primaryButtonColor, // Label color
              }
            }}
          />
          <Button
            onClick={handleLogin}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2,color:currentTheme.primaryButtonColor,backgroundColor:currentTheme.thirdColor, '&:hover': {
              backgroundColor: currentTheme.primaryColor,  // Change hover background color
            }}}
          >
            LOGIN
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}

SettingsLogin.propTypes = {
  handleClose: PropTypes.func.isRequired,
  setOptions: PropTypes.func.isRequired,
};
