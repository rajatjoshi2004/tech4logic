"use client";

import React, { useState, useRef } from "react";
import { Box, Typography, Button } from "@mui/material";
import { MdPlayArrow, MdPause } from "react-icons/md";
import Image from "next/image";
import styles from "./style";

const AWSBanner = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <Box sx={styles.ContainerCSS}>
      <video ref={videoRef} autoPlay loop muted playsInline style={styles.videoStyle}>
        <source src="/Images/Service/AWSVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Box */}
      <Box sx={styles.contentContainer}>
        <Typography variant="h2" sx={styles.heading}>
          <span>We are Your</span>
          <Box sx={styles.logoContainer}>
            <Image src="/Images/Service/Aws.svg" alt="AWS Logo" width={150} height={80} />
            <Box component="span" sx={styles.partnerText}>
              Partner
            </Box>
          </Box>
        </Typography>
        <Button onClick={handlePlayPause} sx={styles.buttonContainer}>
          <Typography variant="button" sx={{ marginLeft: "10px", fontSize: "18px" }}>
            {isPlaying ? "Pause Video" : "Play Video"}
          </Typography>
          {isPlaying ? (
            <MdPause style={{ width: "30px", height: "30px" }} />
          ) : (
            <MdPlayArrow style={{ width: "30px", height: "30px" }} />
          )}
        </Button>
      </Box>
    </Box>
  );
};

export default AWSBanner;
