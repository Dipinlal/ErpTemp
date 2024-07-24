import React, { useState, useRef } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Avatar, Menu, MenuItem, Box, Grid, Card, CardContent, CardActionArea } from '@mui/material';
import BusinessIcon from "@mui/icons-material/Business";
import RestoreIcon from "@mui/icons-material/Restore";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import RefreshIcon from "@mui/icons-material/Refresh";
import EditIcon from "@mui/icons-material/Edit";
import SettingsIcon from "@mui/icons-material/Settings";
import { imageIcon, primaryColor } from '../../config';
import Footer from '../../components/Footer/Footer';
import {useNavigate } from 'react-router-dom';
import AdminHeader from '../../components/AdminHeader/AdminHeader';

const iconMap = {
  "Create Company": <BusinessIcon fontSize="large" />,
  // "Edit Company": <EditIcon fontSize="large" />,
  "Restore Company": <RestoreIcon fontSize="large" />,
  // "Protected company": <AssuredWorkloadIcon fontSize="large" />,
  "Settings": <SettingsIcon fontSize="large" />,
  // "Refresh": <RefreshIcon fontSize="large" />,
  // "Keyboard": <KeyboardIcon fontSize="large" />,
  
};

const AdminDashboard = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openup, setOpenup] = useState(false);
  const appBarRef = useRef(null);

  const navigate = useNavigate()

  const handleDrawerOpen = () => {
    console.log('Drawer open');
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenup(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenup(false);
    navigate("/")
  };

  const handleCardClick = (item)=>{
    console.log(item);
    
        if(item ==="Create Company"){
          const simpleItem = {
        
            id:"36A"
          };
          navigate("/Company", { state: simpleItem });
        }
        else if(item ==="Edit Company"){
          const simpleItem = {
        
            id:"37A"
          };
          navigate("/Company", { state: simpleItem });
        }
           
        
  }

  return (
    <Box sx={{ position: 'fixed', zIndex: 100, top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#f5f5f5' }}>
      <AdminHeader/>

      

      <Box sx={{ padding: 3, marginTop: '64px' ,overflowY:"auto",height:"90vh",scrollbarWidth:"thin"}}>
        <Grid container spacing={1}>
        {Object.keys(iconMap).map((title) => (
            <Grid item xs={12} sm={6} md={4} key={title}>
              <Card onClick={()=>handleCardClick(title)} sx={{height:"10vw",display: 'flex', alignItems: 'center', flexDirection: 'column',justifyContent:"center" }}>
                <CardActionArea  sx={{height:"100%"}}>
                  <CardContent sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column',justifyContent:"center" }}>
                    {iconMap[title]}
                    <Typography  component="div" >
                      {title}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer/>
    </Box>
  );
};

export default AdminDashboard;
