// import React, { useEffect, useRef, useState } from "react";
// import SideBar from "../../components/SideBar/SideBar";
// import { Box, styled } from "@mui/material";
// import { useLocation } from "react-router-dom";
// import Footer from "../../components/Footer/Footer";
// import CompanyContainer from "../../containers/Home/Company/CompanyContainer";
// import AdminHeader from "../../components/AdminHeader/AdminHeader";
// import AdminBar from "../../components/AdminBar/AdminBar";
// import Layout from "../Layout/Layout";


// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "flex-end",
//   padding: theme.spacing(0, 1),
//   ...theme.mixins.toolbar,
// }));

// export default function Company() {
//   const user = localStorage.getItem("userName")
//   const location = useLocation();
//   const item = location.state;
//   const sidebarRef = useRef(null);
//   const [sidebarWidth, setSidebarWidth] = useState(0);
//   const [mainMaxWidth, setMainMaxWidth] = useState(2000);
//   const [page, setpage] = useState(null)
//   const [detailPageId, setdetailPageId] = useState(null)
  


//   useEffect(() => {
//     const resizeObserver = new ResizeObserver(entries => {
//       for (let entry of entries) {
//         const newWidth = entry.contentRect.width;
//         setSidebarWidth(newWidth);
//         setMainMaxWidth(window.innerWidth - newWidth);
//       }
//     });

//     if (sidebarRef.current) {
//       resizeObserver.observe(sidebarRef.current);
//     }

//     // Listen to window resize to adjust main max width accordingly
//     const handleResize = () => {
//       setMainMaxWidth(window.innerWidth - sidebarWidth);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       if (sidebarRef.current) {
//         resizeObserver.unobserve(sidebarRef.current);
//       }
//       window.removeEventListener('resize', handleResize);
//     };
//   }, [sidebarWidth]);
  
//   return (
//     <>
//       <Box sx={{ display: "flex" }}>
//       {item && (
//         (item.id === 36 || item.id === 37)?
//       <div ref={sidebarRef}>
//          <Layout />
//         </div>:null)}
//         <Box component="main" sx={{ flexGrow: 1, maxWidth: `${mainMaxWidth}px`, marginTop:user === "test2" ?  "35px" : 0 }}>
//         {item && (
//         (item.id === 36 || item.id === 37)?<DrawerHeader />:<><AdminHeader/><DrawerHeader /></>)}
//           {item && (
//         item.id === 36 ? <CompanyContainer  pageType={1} pageId={0}/> :
//         item.id === 37 ? <CompanyContainer  pageType={2} pageId={0}/> ://update
//         item.id === "36A" ? <CompanyContainer  pageType={1} pageId={1}/> ://new
//         item.id === "37A" ? <CompanyContainer  pageType={2} pageId={2}/> ://edit
        
//         null
//       )}
          
//         </Box>
//         <Footer />
//       </Box>
//     </>
//   );
// }
import React, { useEffect, useRef, useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import { Box, styled } from "@mui/material";
import { useLocation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import CompanyContainer from "../../containers/Home/Company/CompanyContainer";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import AdminBar from "../../components/AdminBar/AdminBar";
import Layout from "../Layout/Layout";


const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function Company() {
  const user = localStorage.getItem("userName")
  const location = useLocation();
  const item = location.state;
  const sidebarRef = useRef(null);
  const [sidebarWidth, setSidebarWidth] = useState(0);
  const [mainMaxWidth, setMainMaxWidth] = useState(2000);
  const [page, setpage] = useState(null)
  const [detailPageId, setdetailPageId] = useState(null)
  
  const direction = localStorage.getItem('languageDirection');

  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        const newWidth = entry.contentRect.width;
        setSidebarWidth(newWidth);
        setMainMaxWidth(window.innerWidth - newWidth);
      }
    });

    if (sidebarRef.current) {
      resizeObserver.observe(sidebarRef.current);
    }

    // Listen to window resize to adjust main max width accordingly
    const handleResize = () => {
      setMainMaxWidth(window.innerWidth - sidebarWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (sidebarRef.current) {
        resizeObserver.unobserve(sidebarRef.current);
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [sidebarWidth]);
  
  return (
    <>
      <Box sx={{ display: "flex" }}>
      {item && (
        (item.id === 36 || item.id === 37)?
      <div ref={sidebarRef}>
         <Layout />
        </div>:null)}
        <Box component="main" sx={{ flexGrow: 1, maxWidth: `${mainMaxWidth}px`, marginTop:user === "test2" ?  "35px" : 0,marginRight:(direction ==="rtl" && ((item.id === 36)||(item.id === 37)))?"60px":"0px" }}>
        {item && (
        (item.id === 36 || item.id === 37)?<DrawerHeader />:<><AdminHeader/><DrawerHeader /></>)}
          {item && (
        item.id === 36 ? <CompanyContainer  pageType={1} pageId={0}/> :
        item.id === 37 ? <CompanyContainer  pageType={2} pageId={0}/> ://update
        item.id === "36A" ? <CompanyContainer  pageType={1} pageId={1}/> ://new
        item.id === "37A" ? <CompanyContainer  pageType={2} pageId={2}/> ://edit
        
        null
      )}
          
        </Box>
        <Footer />
      </Box>
    </>
  );
}
