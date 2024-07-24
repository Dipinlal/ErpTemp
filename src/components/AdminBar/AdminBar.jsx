import React, { useState, useRef, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  Box,
  Container,
  Tooltip,
  ListItemText,
  IconButton,
  ListItemIcon,
  Switch,
} from "@mui/material";
import {
  primaryColor,
  imageIcon,
  primaryButtonColor,
  SideBarIcons,
  thirdColor,
} from "../../config";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useTheme } from "../../config/themeContext";
import LogoutIcon from "@mui/icons-material/Logout";
import ThemeSelector from "../ThemeSelector/ThemeSelector";

const itemsTextStyle = {
  "& .MuiListItemText-primary": {
    fontSize: "14px",
  },
};



const RecursiveMenu = ({ items, parentId, handleMenuItemClick, thirdColor }) => {
  const navigate = useNavigate();

  const itemsIconStyle = {
    fontSize: "16px",
    color: thirdColor,
    transform: "rotate(0deg)",
    transition: "transform 0.3s",
  };

  const handleSubMenu = (event, menu) => {
    if (menu.child) {
      handleMenuItemClick(event, menu);
    } else {
      if (menu.url) {
        navigate(menu.url);
      }
    }
  };

  return (
    <>
      {items
        .filter((item) => item.parent === parentId)
        .map((menu) => (
          <MenuItem key={menu.id} onClick={(e) => handleSubMenu(e, menu)}>
            <Typography textAlign="center">{menu.iconName}</Typography>
            {menu.child ? (
              <PlayArrowIcon sx={{ ...itemsIconStyle, marginLeft: "auto" }} />
            ) : null}
          </MenuItem>
        ))}
    </>
  );
};

function AdminBar() {
  const appBarRef = useRef(null);
  const { currentTheme, switchColorMode, isDarkMode } = useTheme();
  const [anchor, setAnchor] = useState(null);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [submenuStack, setSubmenuStack] = useState([]);
  const [sideBarIcons, setSideBarIcons] = useState([]);
  const [key, setKey] = useState(Date.now());
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

  const itemsIconStyle = {
    fontSize: "16px",
    color: currentTheme.thirdColor,
    transform: "rotate(0deg)",
    transition: "transform 0.3s",
  };

  useEffect(() => {
    fetchIconsFromApi().then((data) => {
      setSideBarIcons(data);
    });
  }, []);

  useEffect(() => {
    //Used where pages/containers have multiple/sub containers
    setKey(Date.now());
  }, [submenuStack]);

  const fetchIconsFromApi = async () => {
    // Resolve the dynamic imports
    const resolvedIconsData = await Promise.all(
      SideBarIcons.map(async (item) => {
        if (!item.icon) {
          // Handle case where icon is null or undefined
          return { ...item, icon: null };
        }
        try {
          const iconModule = await item.icon;
          return { ...item, icon: iconModule.default || iconModule }; // Extract the default export or use the module directly
        } catch (error) {
          console.error(`Error loading icon for ${item.iconName}:`, error);
          return { ...item, icon: null }; // Handle error during dynamic import
        }
      })
    );

    return resolvedIconsData;
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleMenuItemClick = (event, menu) => {
    const currentTarget = event.currentTarget;
    const children = sideBarIcons.filter(
      (subItem) => subItem.parent === menu.id
    );

    if (children.length > 0) {
      setSubmenuStack((prev) => [
        ...prev,
        {
          index: prev.length + 1,
          anchorEl: currentTarget,
          submenuItems: children,
        },
      ]);
    } else {
      const simpleItem = {
        id: menu.id,
        name: menu.iconName,
        key1: key,
      };
      navigate(menu?.url ?? "/url", { state: simpleItem });
      setSubmenuStack([]);
    }
  };

  const handleSubMenuClose = () => {
    setSubmenuStack([]);
  };

  const handleClick = (event) => {
    setAnchor(event.currentTarget);
    setOpenup(true);
  };

  const handleClose = () => {
    setAnchor(null);
    setOpenup(false);
  };

  const handleLogout = () => {
    setAnchor(null);
    setOpenup(false);
    localStorage.removeItem("userName");
    navigate("/");
  };

  return (
    <>
      <AppBar
        ref={appBarRef}
        position="fixed"
        style={{
          backgroundColor: primaryButtonColor,
          boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.5)",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Box
              color="inherit"
              aria-label="open drawer"
              sx={{
                display: "flex",
                alignItems: "center",
                marginRight: 1,
                cursor: "pointer",
              }}
            >
              <img
                src={imageIcon}
                alt="Icon"
                style={{ width: 32, height: 32 }}
              />
            </Box>

            <Typography
              variant="h6"
              color={currentTheme.primaryColor}
              noWrap
              component="div"
            >
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
              anchorEl={anchor}
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

      <AppBar
        style={{
          marginTop: 64,

          background: currentTheme.sideBarhorizontal,
          boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
          height: 40,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <Box
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                sx={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <MenuIcon />
              </Box>

              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                <RecursiveMenu
                  items={sideBarIcons}
                  parentId={0}
                  handleMenuItemClick={handleMenuItemClick}
                  thirdColor={currentTheme.thirdColor}
                />
              </Menu>
            </Box>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                justifyContent: "start",
                paddingBottom: 3,
              }}
            >
              {sideBarIcons
                .filter((menuList) => menuList.parent === 0)
                .map((menuList) => (
                  <Box
                    key={menuList.id}
                    aria-controls="master-menu"
                    aria-haspopup="true"
                    onClick={(e) => handleMenuItemClick(e, menuList)}
                    sx={{
                      cursor: "pointer",
                      color: "white",
                      margin: 0,
                      fontSize: 14,
                      paddingX: 2,
                    }}
                  >
                    <Typography>{menuList.iconName}</Typography>
                  </Box>
                ))}

              {submenuStack.map((submenu, index) => (
                <Menu
                  key={index}
                  anchorEl={submenu.anchorEl}
                  open={Boolean(submenu.anchorEl)}
                  onClose={handleSubMenuClose}
                  anchorOrigin={{
                    vertical: submenu.index === 1 ? "bottom" : "top",
                    horizontal: submenu.index === 1 ? null : "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  MenuListProps={{
                    "aria-labelledby": "nested-menu-button",
                    disablePadding: true,
                  }}
                >
                  {submenu.submenuItems.map((subItem) => (
                    <MenuItem
                      key={subItem.id}
                      onClick={(e) => handleMenuItemClick(e, subItem)}
                      sx={{
                        backgroundColor: currentTheme.primaryColor,
                        color: primaryButtonColor,
                        "&:hover": {
                          backgroundColor: "#073f82",
                        },
                        borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
                      }}
                    >
                      <ListItemText
                        sx={itemsTextStyle}
                        primary={subItem.iconName}
                      />
                      {subItem.child && (
                        <PlayArrowIcon
                          sx={{
                            ...itemsIconStyle,
                            transform: submenuStack.includes(subItem.id)
                              ? "rotate(90deg)"
                              : "none",
                          }}
                        />
                      )}
                    </MenuItem>
                  ))}
                </Menu>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default AdminBar;
