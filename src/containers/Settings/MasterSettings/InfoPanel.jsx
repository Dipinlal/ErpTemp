import {
  Box,
  Divider,
  IconButton,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { MDBCardBody, MDBCol, MDBRow } from "mdb-react-ui-kit";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { primaryButtonColor, thirdColor } from "../../../config";
import SaveIcon from "@mui/icons-material/Save";
import AutoComplete2 from "../../../components/AutoComplete/AutoComplete2";
import AccountInput from "../../../components/Inputs/AccountInput";
import CheckBox2 from "../../../components/CheckBox/CheckBox2";
import PostAddIcon from "@mui/icons-material/PostAdd";
import InfoPanelModal from "./InfoPanelModal";

export default function InfoPanel() {
    const [modal, setModal] = useState(false)

    const handleModalOpen=()=>{
        setModal(true)
    }

    const handleModalClose=()=>{
        setModal(false)
    }

  return (
    <MDBCardBody style={{ marginLeft: 10 }}>
      <Stack
        direction="row"
        spacing={1}
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h6" color="gray" gutterBottom>
          Info Panels
        </Typography>
        <Stack direction="row" spacing={1} justifyContent="flex-end">
          <IconButton
          onClick={handleModalOpen}
            aria-label="addPanel"
            sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
          >
            <Stack direction="column" alignItems="center">
              <PostAddIcon style={{ color: thirdColor }} />
              <Typography
                variant="caption"
                align="center"
                style={{
                  color: thirdColor,
                  fontSize: "0.6rem",
                }}
              >
                Add Panel
              </Typography>
            </Stack>
          </IconButton>

          <IconButton
            aria-label="Delete"
            sx={{ fontSize: "0.8rem", padding: "0.5rem" }}
          >
            <Stack direction="column" alignItems="center">
              <DeleteIcon style={{ color: thirdColor }} />
              <Typography
                variant="caption"
                align="center"
                style={{
                  color: thirdColor,
                  fontSize: "0.6rem",
                }}
              >
                Delete
              </Typography>
            </Stack>
          </IconButton>
        </Stack>
      </Stack>
      <Divider
        sx={{
          borderColor: "rgba(0, 0, 0, 0.3)",
          borderWidth: "1px",
        }}
      />
      <MDBRow>
        <Stack direction="row" spacing={2} my={2}>
          <Box
            height={300}
            width={300}
            display="flex"
            sx={{
              borderRadius: 2,
              gap: 2,
              boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Box
              height={40}
              width={300}
              display="flex"
              alignItems="center"
              justifyContent="center" // Add this line
              sx={{
                borderRadius: "5px 5px 0 0",
                bgcolor: thirdColor,
                textAlign: "center", // Add this line
                color:primaryButtonColor,
                fontSize:12
              }}
            >
              Credit History
            </Box>
          </Box>

          <Box
            height={300}
            width={300}
            display="flex"
            sx={{
              borderRadius: 2,
              gap: 2,
              boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Box
              height={40}
              width={300}
              display="flex"
              alignItems="center"
              justifyContent="center" // Add this line
              sx={{
                borderRadius: "5px 5px 0 0",
                bgcolor: thirdColor,
                textAlign: "center", // Add this line
                color:primaryButtonColor,
                fontSize:12
              }}
            >
            Ageing Analysis
            </Box>
          </Box>
          <Box
            height={300}
            width={300}
            display="flex"
            sx={{
              borderRadius: 2,
              gap: 2,
              boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Box
              height={40}
              width={300}
              display="flex"
              alignItems="center"
              justifyContent="center" // Add this line
              sx={{
                borderRadius: "5px 5px 0 0",
                bgcolor: thirdColor,
                textAlign: "center", // Add this line
                color:primaryButtonColor,
                fontSize:12
              }}
            >
           Ageing Analysis Base
            </Box>
          </Box>

          
        </Stack>
      </MDBRow>
      <InfoPanelModal
        isOpen={modal}
        handleCloseModal={handleModalClose}
      />
    </MDBCardBody>
  );
}
