import React, { useState, useRef, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  Box,
  Grid,
  Card,
  CardContent,
  CardActionArea,
  ListItemText,
  ListItemIcon,
  Switch,
} from "@mui/material";
import { primaryColor, imageIcon } from "../../config";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import ThemeSelector from "../ThemeSelector/ThemeSelector";
import { useTheme } from "../../config/themeContext";

function AdminHeader() {
  const { currentTheme, switchColorMode, isDarkMode } = useTheme();
  const appBarRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openup, setOpenup] = useState(false);

  const navigate = useNavigate();
  const [checked, setChecked] = React.useState(false);

  const handleColorSwitch = (event) => {
    switchColorMode(!checked);
    setChecked(!checked);
  };
 
  useEffect(() => {
    setChecked(isDarkMode); 
  }, [isDarkMode]);

  const handleDrawerOpen = () => {
    console.log("Drawer open");
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenup(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenup(false);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    setOpenup(false);
    localStorage.removeItem("userName");
    navigate("/");
  };

  return (
    <AppBar
      ref={appBarRef}
      position="fixed"
      style={{
        background: currentTheme.sideBarhorizontal,
        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.5)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ marginRight: 1 }}
          >
            <img src={imageIcon} alt="Icon" style={{ width: 32, height: 32 }} />
          </IconButton>

          <Typography variant="h6" noWrap component="div">
            Sang Solution
          </Typography>
        </div>

        <div>
          <IconButton
            id="basic-button"
            aria-controls={openup ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openup ? "true" : undefined}
            onClick={handleClick}
          >
            <Avatar>
              <PersonIcon />
            </Avatar>
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={openup}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              onClick={handleLogout}
              sx={{
                borderBottom: "1px solid #e0e0e0",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              Logout
              <LogoutIcon style={{ marginLeft: 8 }} />
            </MenuItem>
            <MenuItem
              sx={{
                borderBottom: "1px solid #e0e0e0",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              Language
              <Box sx={{ marginLeft: 2 }}>
                {/* Add language selection dropdown or list here */}
                <select>
                  <option value="en">English</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                  <option value="de">German</option>
                </select>
              </Box>
            </MenuItem>
            <MenuItem
                sx={{
                  borderBottom: "1px solid #e0e0e0",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <ListItemText>Dark Mode</ListItemText>
                <ListItemIcon>
                  <Switch
                    checked={checked}
                    onChange={handleColorSwitch}
                    color="primary"
                    inputProps={{ "aria-label": "controlled" }}
                  />
                </ListItemIcon>
              </MenuItem>
            <MenuItem
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                gap: 1,
                width: "240px",
                paddingBottom: "40px", // Ensure enough space for the ThemeSelector to be displayed
                overflow: "visible", // Ensure the ThemeSelector is not cut off
              }}
            >
              <Typography variant="body1">Choose Theme</Typography>
              <Box sx={{ marginLeft: 2, width: "fit-Content" }}>
                <ThemeSelector />
              </Box>
            </MenuItem>
          </Menu>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default AdminHeader;
