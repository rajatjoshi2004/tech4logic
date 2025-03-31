"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRef } from "react";
import styles from "./style";

const MicroSoft365ServiceBanner = ({ serviceData }) => {
  const videoRef = useRef(null);

  return (
    <Box sx={styles.ContainerCSS}>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source
          src={"https://tech4logic-images.s3.ap-south-1.amazonaws.com/Images/Service/MicroSoft365Bannervideo.mp4"}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Content Box */}
      <Box sx={styles.contentContainer}>
        <Typography variant="h2">
          <span>We are Your</span>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Image
              src={"https://tech4logic-images.s3.ap-south-1.amazonaws.com/Images/Service/Microsoft_365_logo.svg"}
              alt="MicroSoft365 Logo"
              width={250}
              height={100}
            />
            <Box
              component="span"
              sx={{
                marginLeft: "20px",
                verticalAlign: "middle",
              }}
            >
              Partner
            </Box>
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default MicroSoft365ServiceBanner;
