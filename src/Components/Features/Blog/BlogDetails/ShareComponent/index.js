import { ShareSocial } from "react-share-social";
import style from "./style";
import { Box, Modal, Typography, useMediaQuery } from "@mui/material";
import { IoMdClose } from "react-icons/io";

import React from "react";

export default function SocialShareComponent({ open, handleModalClose, sharingUrl }) {
  const isMobile = useMediaQuery("(max-width:480px)");
  return (
    <Modal style={{ zIndex: "9999" }} open={open} onClose={handleModalClose} closeAfterTransition>
      <Box sx={style.ModalShareContainer} style={isMobile ? { padding: "0" } : { padding: "15px" }}>
        <IoMdClose
          style={{
            cursor: "pointer",
            background: "#000",
            borderRadius: "16px",
            position: "absolute",
            right: "5px",
            top: "5px",
            color: "#fff",
            width: "30px",
            height: "30px",
            padding: "4px",
          }}
          onClick={handleModalClose}
        />
        <Typography component="h1">Share Post</Typography>
        <ShareSocial
          url={`https://tech4logic.com/${sharingUrl}`}
          socialTypes={["facebook", "twitter", "linkedin", "whatsapp"]}
          onSocialButtonClicked={(data) => console.log(data)}
          style={style}
        />
      </Box>
    </Modal>
  );
}
