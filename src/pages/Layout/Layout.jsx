import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import AdminBar from "../../components/AdminBar/AdminBar";
import AdminHeader from "../../components/AdminHeader/AdminHeader";

export default function Layout() {
  const user = localStorage.getItem("userName");
  return (
    <>
      {user === "test1" ? (
        <SideBar />
      ) : user === "test2" ? (
        <div style={{ minHeight: "50vh" }}>
          <AdminBar />
        </div>
      ) : user === "test3" ? (
        <div style={{ minHeight: "50vh" }}>
          <AdminHeader />
        </div>
      ) : <SideBar />}
    </>
  );
}
