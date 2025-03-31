"use client";

import React, { useState, useRef } from "react";
import { Box, Typography, Button, Dialog, IconButton } from "@mui/material";
import { MdPlayArrow, MdPause, MdClose } from "react-icons/md";
import Image from "next/image";
import styles from "./style";

const AWSCommonBanner = ({ bannerData }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    setOpenModal(true);
    if (videoRef.current) {
      isPlaying ? videoRef.current.pause() : videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

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
        <source src={`${bannerData?.[0]?.videourl}`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Box sx={styles.contentContainer}>
        <Typography variant="h2" sx={{ fontSize: { xs: "24px", md: "40px" }, fontWeight: "bold" }}>
          <Box sx={styles.imageContainer}>
            <Image
              src="https://tech4logic-images.s3.ap-south-1.amazonaws.com/Images/Service/AWSWhite.svg"
              alt="AWS Logo"
              width={120}
              height={120}
            />
          </Box>
          <span>{bannerData?.[0]?.title}</span>
        </Typography>
        <Button
          onClick={handlePlayPause}
          sx={{ ...styles.buttonContainer, fontSize: { xs: "14px", md: "18px" } }}
        >
          <Typography
            variant="button"
            sx={{ marginLeft: "10px", fontSize: { xs: "14px", md: "18px" } }}
          >
            Play Video
          </Typography>
          {isPlaying ? (
            <MdPause style={{ width: "30px", height: "30px" }} />
          ) : (
            <MdPlayArrow style={{ width: "30px", height: "30px" }} />
          )}
        </Button>
      </Box>
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        maxWidth="md"
        fullWidth
        PaperProps={{
          style: {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
      >
        <Box onClick={handleCloseModal} sx={styles.modelContainer}>
          <IconButton onClick={handleCloseModal} sx={styles.closeIconCSS}>
            <MdClose style={{ width: "30px", height: "30px" }} />
          </IconButton>
          <Box
            sx={{
              ...styles.videoModelCSS,
              transform: openModal ? "scale(1)" : "scale(0.95)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={videoRef}
              controls
              autoPlay
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "12px",
              }}
            >
              <source src={`${bannerData?.[0]?.videourl}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
};

export default AWSCommonBanner;
