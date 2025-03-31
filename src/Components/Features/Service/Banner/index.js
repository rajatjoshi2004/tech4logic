"use client";

import React, { useState, useRef } from "react";
import { Box, Typography, Button, Dialog, IconButton } from "@mui/material";
import { MdPlayArrow, MdPause, MdClose } from "react-icons/md";
import Image from "next/image";
import styles from "./style";

const ServicesBanner = ({ serviceData }) => {
  const [isPlaying, setIsPlaying] = useState(true);
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
            <Image src={serviceData?.[0]?.bannerImageUrl} alt="AWS Logo" width={150} height={80} />
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
        <Button onClick={handlePlayPause} sx={styles.buttonContainer}>
          <Typography variant="button" sx={{ marginLeft: "10px", fontSize: "18px" }}>
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
              <source
                src="https://tech4logic-images.s3.ap-south-1.amazonaws.com/Images/Service/AWSVideo.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
};

export default ServicesBanner;
