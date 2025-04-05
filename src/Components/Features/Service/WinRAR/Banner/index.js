"use client";

import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useRef } from "react";
import styles from "./style";

const WinRARServiceBanner = ({ serviceData }) => {
  return (
    <Box sx={styles.ContainerCSS}>
      {/* Image Container with Dark Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      >
        {/* Dark Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.4)", // 40% black overlay
            zIndex: 1,
          }}
        />

        {/* Background Image */}
        <Image
          src={"/Images/vedio_image.png"}
          alt="Banner Background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </Box>

      {/* Content Box */}
      <Box sx={styles.contentContainer}>
        <Typography variant="h2">
          <span className="text-left w-full">We are Your</span>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <Image src={"/Images/image-11.png"} alt="TreandMicro Logo" width={250} height={100} />
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

export default WinRARServiceBanner;
