import React, { useEffect, useState } from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ListItemIcon from "@mui/material/ListItemIcon";
import AdminHeader from "../AdminHeader/AdminHeader";
import { SideBarIcons, primaryButtonColor, thirdColor } from "../../config";
import { Link } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../config/themeContext";



export default function AdminGridMenu() {
  const navigate = useNavigate()
  const [sideBarIcons, setSideBarIcons] = useState([]);
  const [list, setList] = useState([{ icon: <HomeIcon />, id: 0 }]);
  const [value, setValue] = useState(0); // Example state for filtering icons
  const [key, setKey] = useState(Date.now());
 const { currentTheme,switchTheme } = useTheme();

 const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : currentTheme.thirdColor,
  ...theme.typography.body1, // Increase font size
  padding: theme.spacing(4), // Increase padding
  textAlign: "center",
  color: theme.palette.text.secondary,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));
  

  const handleBreadcrumbClick = (id) => {
    setValue(id);
    setList((prevList) => {
      const index = prevList.findIndex((item) => item.id === id);
      return prevList.slice(0, index + 1);
    });
  };

  const breadcrumbs = list?.map((item) => (
    <Link
      underline="hover"
      key={item.id}
      color="inherit"
      onClick={() => handleBreadcrumbClick(item.id)}
      style={{ cursor: "pointer" }}
    >
      {item.icon}
    </Link>
  ));

  useEffect(() => {
    fetchIconsFromApi().then((data) => {
      setSideBarIcons(data);
    });
  }, []);

  const fetchIconsFromApi = async () => {
    const resolvedIconsData = await Promise.all(
      SideBarIcons.map(async (item) => {
        if (!item.icon) {
          return { ...item, icon: null };
        }
        try {
          const iconModule = await item.icon;
          return { ...item, icon: iconModule.default || iconModule };
        } catch (error) {
          console.error(`Error loading icon for ${item.iconName}:`, error);
          return { ...item, icon: null };
        }
      })
    );

    return resolvedIconsData;
  };

  useEffect(() => {
    if (value === 0) {
      setList([{ icon: <HomeIcon />, id: 0 }]);
    }
  }, [value]); // Updated dependency array

  const handleMenu = (e, menuList) => {
    if (menuList?.url) {
      const simpleItem = {
        id: menuList.id,
        name: menuList.iconName,
        key1:key
      };
      navigate(menuList?.url ?? "/url", { state: simpleItem });
    } else {
      setValue(menuList.id);
      setList((prevList) => [
        ...prevList,
        { icon: menuList.iconName, id: menuList.id },
      ]);
    }
  };

  return (
    <>
      <AdminHeader />
      <Box sx={{ width: "100%", mt: 8 }}>
        <Stack>
          <Box>
            <Stack padding={2}>
              <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
              >
                {breadcrumbs}
              </Breadcrumbs>
            </Stack>
          </Box>
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            <Grid container spacing={1} padding={2}>
              {sideBarIcons
                .filter((menuList) => menuList.parent === value)
                .map((menuList) => (
                  <Grid
                    item
                    xs={12}
                    sm={6}
                    md={4}
                    key={menuList.id}
                    style={{ cursor: "pointer" }}
                  >
                    <Item onClick={(e) => handleMenu(e, menuList)}>
                      {menuList.icon ? (
                        <ListItemIcon
                          sx={{
                            minWidth: 0,
                            mb: 1,
                            justifyContent: "center",
                            color: currentTheme.primaryButtonColor,
                            fontSize: 40,
                          }}
                        >
                          {React.createElement(menuList.icon, {
                            fontSize: "inherit",
                          })}
                        </ListItemIcon>
                      ) : null}
                      <Typography
                        variant="h6"
                        color={primaryButtonColor}
                        noWrap
                        component="div"
                      >
                        {menuList.iconName}
                      </Typography>
                    </Item>
                  </Grid>
                ))}
            </Grid>
          </Box>
        </Stack>
      </Box>
    </>
  );
}
