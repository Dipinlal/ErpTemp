import React, { useEffect, useState, useRef } from "react";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import SaveIcon from "@mui/icons-material/Save";
import { Box, Button, Stack, Zoom } from "@mui/material";

import { MDBRow, MDBCol, MDBInput, MDBTextArea } from "mdb-react-ui-kit";

import { primaryButtonColor, thirdColor } from "../../../config";
import CustomerVendorDetails from "../../Home/Master/Account/CustomerVendor/CustomerVendorDetails";

export default function CustomizationPreviewModal({
  isOpen,
  handleCloseModal,
}) {
  const modalStyle = {
    display: isOpen ? "block" : "none",
  };

  const buttonStyle = {
    textTransform: "none",
    color: `${primaryButtonColor}`,
    backgroundColor: `${thirdColor}`,
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
  };

  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleCloseModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleCloseModal]);

  return (
    <div>
      <div
        className={`modal-backdrop fade ${isOpen ? "show" : ""}`}
        style={{
          display: isOpen ? "block" : "none",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        }}
      ></div>

      <Zoom in={isOpen} timeout={isOpen ? 400 : 300}>
        <div
          className={`modal ${isOpen ? "modal-open" : ""}`}
          style={modalStyle}
        >
          <div className="modal-dialog modal-dialog-centered modal-xl">
            <div style={{maxHeight:"60vh",overflowY:"scroll",scrollbarWidth:"thin"}}  className="modal-content" ref={modalRef}>
              <CustomerVendorDetails />
            </div>
          </div>
        </div>
      </Zoom>
    </div>
  );
}
