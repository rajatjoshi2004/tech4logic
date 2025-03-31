"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRef } from "react";
import styles from "./style";

const SeqriteServiceBanner = ({ serviceData }) => {
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
        <source src={serviceData?.[0]?.bannerVideoUrl} type="video/mp4" />
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
              src={serviceData?.[0]?.bannerImageUrl}
              alt="TreandMicro Logo"
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

export default SeqriteServiceBanner;
