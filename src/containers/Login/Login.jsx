import React, { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { channelId, imageIcon } from "../../config";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import SettingsIcon from "@mui/icons-material/Settings";
import BusinessIcon from "@mui/icons-material/Business";
import RestoreIcon from "@mui/icons-material/Restore";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import RefreshIcon from "@mui/icons-material/Refresh";
import { FormControl, IconButton, InputLabel, MenuItem, Popover, Select, Switch, Tooltip } from "@mui/material";
import WarningMessage from "../../components/Warning/Warnings";
import SettingsLogin from "./SettingsLogin";
import { useTheme } from "../../config/themeContext";
import ThemeSelector from "../../components/ThemeSelector/ThemeSelector";
import AutofillStyle from "../../components/AutoFillStyle/AutofillStyle";
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import Draggable from 'react-draggable';
import { securityApis } from "../../apis/securityApi";
import { useAlert } from "../../components/AlertHandler/AlertContext";




const idleTime = 10 * 60 * 1000;

const defaultTheme = createTheme();

export default function Login() {
  const navigate = useNavigate();
  const [sLoginName, setLoginName] = React.useState("");
  const [sPassword, setSPassword] = React.useState("");
  const [emailError, setEmailError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);
  const [loader, setLoader] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility
  const [alert, setAlert] = useState(false);
  const [message, setMessage] = useState("");
  const [alertType, setAlertType] = useState("");
  const [settings, setSettings] = useState(false);
  const [options, setOptions] = useState(false);
  const [settingsAnchorEl, setSettingsAnchorEl] = useState(null);
  const [keyboardOpen, setKeyboardOpen] = useState(false);
  const [inputFocused, setInputFocused] = useState("");
  const [keyboardLayout, setKeyboardLayout] = useState("default");
  const [checked, setChecked] = React.useState(false);
  const [selectedCompanyName, setselectedCompanyName] = useState('');
  const [companyList, setcompanyList] = useState([])
  const [entityId, setEntityId] = useState(null);

  const { loginGetCompany, loginLogin } = securityApis();

  const { showAlert } = useAlert();


  const { currentTheme, switchColorMode, isDarkMode } = useTheme();

  const keyboard = useRef();

  const handleColorSwitch = (event) => {
    switchColorMode(!checked);
    setChecked(!checked);
  };
 
  useEffect(() => {
    setChecked(isDarkMode); 
  }, [isDarkMode]);


  
  const handleInputFocus = (inputName) => {
    setInputFocused(inputName);
    setKeyboardLayout("default");
};

  const handleInputChange = (input) => {
    if (inputFocused === "sLoginName") {
      setLoginName(input);
    } else if (inputFocused === "sPassword") {
      setSPassword(input);
    }
  };

   // This effect keeps the virtual keyboard in sync with the input fields
   useEffect(() => {
    if (inputFocused) {
      let keyboardElement = document.querySelector(".simple-keyboard");
      if (keyboardElement) {
        keyboard.current.setInput(inputFocused === "sLoginName" ? sLoginName : sPassword);
      }
    }
  }, [sLoginName, sPassword, inputFocused]);

  const handleKeyPress = (button) => {
    if (button === "{shift}" || button === "{lock}") {
        setKeyboardLayout(keyboardLayout === "default" ? "shift" : "default");
    }
};


  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleSearchCompany = async () => {
    try {
      const response = await loginGetCompany(sLoginName);
      if (response.statusCode === 2000 && response.status === "Success") {
       
        const companyList = JSON.parse(response.result);
    
        setcompanyList(companyList);
      } else {
       
        setcompanyList([]);
        setselectedCompanyName("");
        setEntityId(null);
      }
    } catch (error) {
     
      console.log(error);
      setcompanyList([]);
      setselectedCompanyName("");
      setEntityId(null);
    }
  };
  
 
  const handleCompanyChange = (event) => {
   
    const selectedCompany = companyList.find(company => company.ID === event.target.value);
   
    setselectedCompanyName(selectedCompany ? selectedCompany["Company Name"] : '');
   
    setEntityId(selectedCompany ? selectedCompany.ID : null);
  };
  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   if (sPassword && sLoginName) {
  //     handleLoaderOpen();
  //     if (sPassword === "test1" && sLoginName === "test1") {
  //       localStorage.setItem("userName", "test1");
  //       const currentTime = new Date().getTime();
  //       const expirationTime = currentTime + idleTime;
  //       localStorage.setItem("timeStamp", expirationTime);
  //       navigate("/home");
  //     }else if (sPassword === "test2" && sLoginName === "test2") {
  //       localStorage.setItem("userName", "test2");
  //       const currentTime = new Date().getTime();
  //       const expirationTime = currentTime + idleTime;
  //       localStorage.setItem("timeStamp", expirationTime);
  //       navigate("/home");
  //     }else if (sPassword === "test3" && sLoginName === "test3") {
  //       localStorage.setItem("userName", "test3");
  //       const currentTime = new Date().getTime();
  //       const expirationTime = currentTime + idleTime;
  //       localStorage.setItem("timeStamp", expirationTime);
  //       navigate("/GridMenu");
  //     } else {
  //       setEmailError(true);
  //       setPasswordError(true);
  //       setAlertType("warning");
  //       setMessage("Incorrect UserName or PassWord");
  //       handleAlertOpen();
  //     }
  //     handleLoaderClose();
  //   }
  // };

  const handleSubmit = async(event) => {
      if (sPassword && sLoginName) {
      handleLoaderOpen();
      if (sPassword === "test1" && sLoginName === "test1") {
        localStorage.setItem("userName", "test1");
        const currentTime = new Date().getTime();
        const expirationTime = currentTime + idleTime;
        localStorage.setItem("timeStamp", expirationTime);
        navigate("/home");
      }else if (sPassword === "test2" && sLoginName === "test2") {
        localStorage.setItem("userName", "test2");
        const currentTime = new Date().getTime();
        const expirationTime = currentTime + idleTime;
        localStorage.setItem("timeStamp", expirationTime);
        navigate("/home");
      }else if (sPassword === "test3" && sLoginName === "test3") {
        localStorage.setItem("userName", "test3");
        const currentTime = new Date().getTime();
        const expirationTime = currentTime + idleTime;
        localStorage.setItem("timeStamp", expirationTime);
        navigate("/GridMenu");
      } 
      handleLoaderClose();
    }
    event.preventDefault();
    const formData = {
      "loginName":sLoginName ,
      "password": sPassword,
      "entityId": entityId??0,
      "channelId": channelId??0,

    }
   try {
    const response = await loginLogin(formData)
   
   if(response.status === 200){
   
   
 
    const { AccessToken, RefreshToken    } = JSON.parse(response?.data?.result);

    localStorage.setItem("accessToken", AccessToken);
    localStorage.setItem("refreshToken", RefreshToken);
    localStorage.setItem("userName", sLoginName);
    const currentTime = new Date().getTime();
    const expirationTime = currentTime + idleTime;
    localStorage.setItem("timeStamp", expirationTime);
   
    showAlert('success', response.data.message);
    navigate('/home')

   
   }
   else{
    

   
   }
     
   } catch (error) {
    console.log(error);
   
   }
  };

  const handleLoaderClose = () => {
    setLoader(false);
  };

  const handleLoaderOpen = () => {
    setLoader(true);
  };

  const handleAlertOpen = () => {
    setAlert(true);
  };

  const handleAlertClose = () => {
    setAlert(false);
  };



  const handleSettingsLoginOpen = (event) => {
    setSettingsAnchorEl(event.currentTarget);
  };

  const handleSettingsLoginClose = () => {
    setSettingsAnchorEl(null);
  };

  const settingsOpen = Boolean(settingsAnchorEl);
  const settingsId = settingsOpen ? "settings-popover" : undefined;

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        sx={{
          backgroundColor: currentTheme.primaryColor,
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          position: "relative",
          display: "flex",
        }}
        container
        component="main"
      >
        <Box sx={{ position: "absolute", top: 0, right: 0, margin: "10px" }}>
          <Tooltip title="Settings">
            <IconButton
              onClick={handleSettingsLoginOpen}
              aria-label="Settings"
              sx={{ color: currentTheme.primaryButtonColor, fontSize: "32px" }}
            >
              <SettingsIcon sx={{ fontSize: 32 }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Keyboard">
            <IconButton
              onClick={() => setKeyboardOpen(!keyboardOpen)}
              aria-label="Keyboard "
              sx={{ color: currentTheme.primaryButtonColor, fontSize: "32px" }}
            >
              <KeyboardIcon sx={{ fontSize: 32 }} />
            </IconButton>
          </Tooltip>

          {/* {options ? (
          <>
            <Tooltip title="Create Company">
              <IconButton
                aria-label="Create company"
                sx={{ color: "white", fontSize: "32px" }}
              >
                <BusinessIcon sx={{ fontSize: 32 }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Restore Company">
              <IconButton
                aria-label="Restore company"
                sx={{ color: "white", fontSize: "32px" }}
              >
                <RestoreIcon sx={{ fontSize: 32 }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Protected Company">
              <IconButton
                aria-label="Protected company"
                sx={{ color: "white", fontSize: "32px" }}
              >
                <AssuredWorkloadIcon sx={{ fontSize: 32 }} />
              </IconButton>
            </Tooltip>
           
            <Tooltip title="Refresh">
              <IconButton
                aria-label="Refresh"
                sx={{ color: "white", fontSize: "32px" }}
              >
                <RefreshIcon sx={{ fontSize: 32 }} />
              </IconButton>
            </Tooltip>
          </>
        ) : null} */}
        </Box>
        {/* Draggable Keyboard */}
        {keyboardOpen && (
          <Draggable>
            <div
              className={`${isDarkMode ? "dark-mode" : ""}`}
              style={{
                position: "absolute",
                bottom: 20,
                right: 20,
                zIndex: 1000,
              }}
            >
              <Keyboard
                keyboardRef={(r) => (keyboard.current = r)}
                onChange={(input) => handleInputChange(input)}
                onKeyPress={handleKeyPress}
                layoutName={keyboardLayout}
                inputName={inputFocused}
                baseClass="simple-keyboard"
                layout={{
                  default: [
                    "` 1 2 3 4 5 6 7 8 9 0 - = {backspace}",
                    "q w e r t y u i o p [ ] \\",
                    "a s d f g h j k l ; ' {enter}",
                    "{shift} z x c v b n m , . / {shift}",
                    "{space}",
                  ],
                  shift: [
                    "~ ! @ # $ % ^ & * ( ) _ + {backspace}",
                    "Q W E R T Y U I O P { } |",
                    'A S D F G H J K L : " {enter}',
                    "{shift} Z X C V B N M < > ? {shift}",
                    "{space}",
                  ],
                }}
              />
            </div>
          </Draggable>
        )}

        <Grid
          item
          xs={10}
          sm={8}
          md={6}
          lg={4}
          borderRadius={2}
          component={Paper}
          elevation={6}
          square
          sx={{ backgroundColor: currentTheme.secondaryColor }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <AutofillStyle currentTheme={currentTheme} />
            <img src={imageIcon} alt="Logo" style={{ width: "80px" }} />

            <Typography
              component="h1"
              variant="h5"
              sx={{ color: currentTheme.primaryButtonColor }}
            >
              LOGIN
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1, width: "100%" }}
            >
              <TextField
                error={emailError}
                onChange={(e) => (
                  setLoginName(e.target.value), setEmailError(false)
                )}
                onFocus={() => handleInputFocus("sLoginName")}
                onBlur={handleSearchCompany}
                value={sLoginName}
                margin="normal"
                size="small"
                required
                fullWidth
                id="email"
                label="UserName"
                autoComplete="off"
                autoFocus
                InputProps={{
                  style: {
                    color: currentTheme.primaryButtonColor, // Text color
                    backgroundColor: currentTheme.thirdColor, // Background color
                    borderColor: currentTheme.activePrimaryColor, // You might need to create a custom Input component for border color
                  },
                }}
                InputLabelProps={{
                  style: {
                    color: currentTheme.primaryButtonColor, // Label color
                  },
                }}
              />
              <div style={{ position: "relative" }}>
                <TextField
                  error={passwordError}
                  onChange={(e) => (
                    setSPassword(e.target.value), setPasswordError(false)
                  )}
                  onFocus={() => handleInputFocus("sPassword")}
                  value={sPassword}
                  margin="normal"
                  size="small"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"} // Toggle type based on showPassword state
                  id="password"
                  autoComplete="current-password"
                  onKeyDown={handleKeyPress}
                  InputProps={{
                    style: {
                      color: currentTheme.primaryButtonColor, // Text color
                      backgroundColor: currentTheme.thirdColor, // Background color
                      borderColor: currentTheme.activePrimaryColor, // You might need to create a custom Input component for border color
                    },
                  }}
                  InputLabelProps={{
                    style: {
                      color: currentTheme.primaryButtonColor, // Label color
                    },
                  }}
                />
                <div
                  onClick={handleTogglePasswordVisibility}
                  style={{
                    position: "absolute",
                    top: "60%",
                    right: "10px",
                    transform: "translateY(-50%)",
                    cursor: "pointer",
                    color: passwordError ? "red" : "gray",
                  }}
                >
                  {showPassword ? (
                    <LockOpenIcon
                      sx={{ color: currentTheme.primaryButtonColor }}
                    />
                  ) : (
                    <LockIcon sx={{ color: currentTheme.primaryButtonColor }} />
                  )}
                </div>
              </div>
              {companyList.length > 0 && (
                <FormControl fullWidth margin="normal">
                  <InputLabel
                    style={{
                      color: currentTheme.primaryButtonColor,
                      fontSize: '0.875rem',
                      transform: entityId !== null ? 'translate(14px, -7px) scale(0.75)' : 'translate(14px, 8px) scale(1)', // Adjust transform based on value
                      transition: 'transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
                    }}
                  >
                    Select Company
                  </InputLabel>
                  <Select
                    value={entityId}
                    onChange={handleCompanyChange}
                    sx={{
                      color: currentTheme.primaryButtonColor,
                      backgroundColor: currentTheme.thirdColor,
                      fontSize: '0.875rem', // Reduced font size
                      '.MuiOutlinedInput-notchedOutline': {
                        borderColor: currentTheme.activePrimaryColor,
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: currentTheme.activePrimaryColor,
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: currentTheme.activePrimaryColor,
                      },
                      '.MuiSelect-select': {
                        paddingTop: '8px',
                        paddingBottom: '8px',
                        height: 'auto',
                        minHeight: 'unset',
                      },
                    }}
                  >
                    {companyList.map((company) => (
                      <MenuItem key={company.ID} value={company.ID}>
                        {company["Company Name"]}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  color: currentTheme.primaryButtonColor,
                  backgroundColor: currentTheme.thirdColor,
                  "&:hover": {
                    backgroundColor: currentTheme.primaryColor, // Change hover background color
                  },
                }}
              >
                LOGIN
              </Button>
            </Box>
          </Box>
        </Grid>
        <ThemeSelector />
        <Box
          sx={{
            position: "absolute",
            left: 200,
            bottom: -0,
            margin: "10px",
            display: "flex",
            gap: 1,
            alignItems: "center",
          }}
        >
          <Typography sx={{ color: currentTheme.primaryButtonColor }}>
            Dark Mode
          </Typography>
          <Switch
            checked={checked}
            onChange={handleColorSwitch}
            color="primary"
            inputProps={{ "aria-label": "controlled" }}
          />
        </Box>
      </Grid>

      <WarningMessage
        open={alert}
        handleClose={handleAlertClose}
        message={message}
        type={alertType}
      />
      {/* {options? null : (<SettingsLogin open={settings} handleClose={handleSettingsLoginClose} setOptions={setOptions} />)} */}
      <Popover
        id={settingsId}
        open={settingsOpen}
        anchorEl={settingsAnchorEl}
        onClose={handleSettingsLoginClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <SettingsLogin
          handleClose={handleSettingsLoginClose}
          open={settingsOpen}
          setOptions={setOptions}
        />
      </Popover>
    </ThemeProvider>
  );
}
