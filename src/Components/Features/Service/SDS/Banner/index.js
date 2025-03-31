"use client";

import React, { useState, useRef } from "react";
import { Box, Typography, Button } from "@mui/material";
import { MdPlayArrow, MdPause } from "react-icons/md";
import Image from "next/image";
import styles from "./style"; 

const SDSBanner = ({ serviceData }) => {
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
		 src={serviceData?.[0]?.bannerVideoUrl}
      >
        <source
          src={serviceData?.[0]?.bannerVideoUrl}
          type="video/mp4"
        />
        Your browser does not support the video tag.
		</video>

      {/* Content Box */}
      <Box sx={styles.contentContainer}>
        <Typography variant="h2">
           <span style={{ fontSize: "30px" }}>{serviceData?.[0]?.title}</span>
           <span>{serviceData?.[0]?.subTitle}</span>
           <span style={{ fontSize: "40px" }}>{serviceData?.[0]?.description}</span>
        </Typography>
      </Box>
    </Box>
  );
};

export default SDSBanner;
