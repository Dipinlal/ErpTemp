import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import { Box, styled } from "@mui/material";
import Footer from "../../components/Footer/Footer";
import { useLocation } from "react-router-dom";
import TagSettings from "../../containers/Settings/MainSettings/TagSettings/TagSettings";
import AccountSettings from "../../containers/Settings/MainSettings/AccountSettings/AccountSettings";
import FinanceSettings from "../../containers/Settings/EntitySettings/FinanceSettings";
import InventorySettings from "../../containers/Settings/EntitySettings/InventorySettings";
import FixedAssetsSettings from "../../containers/Settings/EntitySettings/FixedAssetsSettings";
import GeneralEntitySettings from "../../containers/Settings/EntitySettings/GeneralEntitySettings";
import AdminBar from "../../components/AdminBar/AdminBar";
import Layout from "../Layout/Layout";
import CurrencyMaster from "../../containers/Settings/EntitySettings/Currency/CurrencyMaster/CurrencyMaster";
import ExchangeRate from "../../containers/Settings/EntitySettings/Currency/ExchangeRate/ExchangeRate";
import ExchangeRateHistory from "../../containers/Settings/EntitySettings/Currency/ExchangeCurrencyHistory/ExchangeRateHistoy";


const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function MainSettingsPage() {
  const user = localStorage.getItem("userName")
  const location = useLocation();
  const id = location.state.id;
  return (
    <>
      <Box sx={{ display: "flex" }}>
      <Layout />
        <Box component="main" sx={{ flexGrow: 1,marginBottom:2, marginTop:user === "test2" ?  "35px" : 0 }}>
          <DrawerHeader />
           {id === 30? (
            <AccountSettings />
           ):id === 40? (
            <FinanceSettings />
           ):id === 41? (
            <InventorySettings />
           ):id === 42? (
            <FixedAssetsSettings />
           ):id === 43? (
            <GeneralEntitySettings />
           ): id === 21 ? (
            <CurrencyMaster />
          ) : id === 22 ?(
            <ExchangeRate />
          ) : id === 23 ?(
            <ExchangeRateHistory />
          ): null}
        </Box>
        <Footer />
      </Box>
    </>
  );
}
