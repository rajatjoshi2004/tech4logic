"use client";

import { Box, Typography } from "@mui/material";
import { useState, useRef } from "react";
import styles from "./style";

const NetworkingBanner = ({ bannerVideodata }) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted((prev) => !prev);
    }
  };

  const handleVideoError = (e) => {
    const error = e.target.error;
    console.error("Video playback error:", {
      code: error?.code,
      message: error?.message || "No specific error message available.",
    });
  };

  return (
    <Box sx={styles.container}>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        onError={handleVideoError}
        onClick={toggleMute}
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
        <source src={`${bannerVideodata?.[0]?.bannerVideoUrl}`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Box sx={styles.contentContainer}>
        <Typography variant="h6" sx={styles.contentContainer["& h6"]}>
          {bannerVideodata?.[0]?.title}
        </Typography>
        {/* Separate the h1 and h2 Typography components for semantic clarity */}
        <Typography
          variant="h1"
          sx={{
            fontSize: "45px",
            fontWeight: 800,
            lineHeight: "54px",
            display: "block",
            marginBottom: "8px",
          }}
        >
          {bannerVideodata?.[0]?.subTitle}
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontSize: "35px",
            fontWeight: 400,
            lineHeight: "44px",
          }}
        >
          {bannerVideodata?.[0]?.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default NetworkingBanner;
