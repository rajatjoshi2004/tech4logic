"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography, Divider } from "@mui/material";
import Image from "next/image";
import styles from "./style";

const SdsInfoCard = ({ isMegaMenuOpen, isModalOpen, SDSInfoData }) => {
  // Accept props to control visibility
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Determine z-index based on mega menu or modal state
  const cardZIndex = isMegaMenuOpen || isModalOpen ? -1 : isScrolled ? 0 : 99999;

  return (
    <Box
      sx={{
        ...styles.containerCSS,
        background: "#0B081E",
        overflow: "visible",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          mb: 8,
          textAlign: { xs: "center", md: "left" },
        }}
      >
        {SDSInfoData?.[0]?.Card1 && (
          <Image
            src={SDSInfoData[0].Card1}
            alt="SDS Card 1"
            width={350}
            height={350}
            style={{ marginLeft: "50px", marginTop: "-110px", zIndex: "9999" }}
          />
        )}

        <Typography
          variant="body1"
          style={{ marginLeft: "40px", color: "#ffffff" }}
          sx={{
            ...styles.containerCSS["& body1"],
            mt: { xs: 4, md: 0 },
            fontSize: { xs: "16px", md: "18px" },
          }}
        >
          {SDSInfoData?.[0]?.description1}
        </Typography>
      </Box>
    </Box>
  );
};

export default SdsInfoCard;
