import React from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";
import sangsolution from "/images/sangsolution.png";

export default function Loader({ loader, loaderClose }) {
  return (
    <Backdrop
      sx={{
        color: "#fff",
        zIndex: (theme) => theme.zIndex.drawer + 1, // Set a higher value for maximum z-index
      }}
      open={loader}
      onClick={loaderClose}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CircularProgress
          color="primary"
          size={80}
          sx={{ position: "relative" }}
        />
        <Box
          component="img"
          src={sangsolution}
          alt="Company Logo"
          sx={{
            width: "50px",
            height: "50px",
            position: "absolute",
          }}
        />
      </Box>
    </Backdrop>
  );
}
