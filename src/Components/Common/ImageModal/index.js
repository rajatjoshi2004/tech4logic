import React from "react";
import { Modal, Box } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  maxHeight: "120vh",
  overflow: "auto",
  cursor: "pointer",
};

export default function ImageModal({ open, handleClose, imageUrl }) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <img
          src={imageUrl}
          alt="modal content"
          style={{ maxWidth: "100%", maxHeight: "120vh", height: "60vh" }}
        />
      </Box>
    </Modal>
  );
}
