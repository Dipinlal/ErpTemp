import React from "react";
import SideBar from "../../components/SideBar/SideBar";

import { Box, styled } from "@mui/material";
import AccountMaster from "../../containers/Home/Master/Account/AccountMaster/AccountMaster";
import Footer from "../../components/Footer/Footer";
import { useLocation } from "react-router-dom";
import CustomerVendor from "../../containers/Home/Master/Account/CustomerVendor/CustomerVendor";
import Product from "../../containers/Home/Master/Product/Product/Product";
import Unit from "../../containers/Home/Master/Product/Unit/Unit";
import UnitConversion from "../../containers/Home/Master/Product/UnitConversion/UnitConversion";
import SellerPriceBook from "../../containers/Home/Master/Product/SellerPriceBook/SellerPriceBook";
import BuyerPriceBook from "../../containers/Home/Master/Product/BuyerPriceBook/BuyerPriceBook";
import Warehouse from "../../containers/Home/Master/Warehouse/WareHouse";
import AdminBar from "../../components/AdminBar/AdminBar";
import Layout from "../Layout/Layout";
import FixedAsset from "../../containers/Home/Master/FixedAsset/FixedAsset";
import OtherMaster from "../../containers/Home/Master/OtherMaster/OtherMaster";
import CurrencyMaster from "../../containers/Home/Master/Currency/CurrencyMaster/CurrencyMaster";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function MasterPage() {
  const location = useLocation();
  const id = location.state.id;
  const user = localStorage.getItem("userName")
  return (
    <>
      <Box sx={{ display: "flex" }}>
      <Layout />
        <Box component="main" sx={{ flexGrow: 1, marginTop:user === "test2" ?  "35px" : 0, marginBottom: 2  }}>
          <DrawerHeader />
          {id ===16 ? (
            <CurrencyMaster />
          ) :id === 19 ? (
            <AccountMaster />
          ) : id === 20 ? (
            <CustomerVendor />
          ) : id === 24 ?(
            <Product />
          ) : id === 25 ?(
            <Unit />
          ): id === 26 ?(
            <UnitConversion />
          ): id === 27 ?(
            <SellerPriceBook />
          ): id === 28 ?(
            <BuyerPriceBook />
          ): id === 18 ?(
            <Warehouse />
          ) : id === 51 ?(
            <FixedAsset />
          ): id >= 52 ?(
            <OtherMaster id={id} />
          ): null}
        </Box>
        <Footer />
      </Box>
    </>
  );
}
