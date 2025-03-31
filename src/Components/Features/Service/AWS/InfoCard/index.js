"use client";

import React, { useEffect, useState } from "react";
import { Box, Typography, Divider } from "@mui/material";
import Image from "next/image";
import styles from "./style";

const AwsInfoCard = ({ isMegaMenuOpen, isModalOpen, AWSInfoData }) => {
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
        background: "linear-gradient(180deg, #FF9900 0%, #0B081E 150px)",
        overflow: "visible",
        minHeight: "300px",
      }}
    >
      <Box sx={{ paddingX: { xs: "20px", md: "120px" } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              flex: 1,
              color: "#fff",
              fontSize: { xs: "40px", md: "80px" },
              lineHeight: { xs: "45px", md: "85px" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <span style={{ color: "#FF9900" }}>AWS</span>
            <br />
            Cloud
            <br />
            Services
          </Typography>

          <Box
            sx={{
              ...styles.cardsContainer,
              display: { xs: "none", md: "flex" },
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
            }}
          >
            <Box sx={{ ...styles.card, marginBottom: { xs: "20px", md: "0" } }}>
              <Image
                src={AWSInfoData?.[0]?.Card1}
                alt="AWS Card 1"
                width={250}
                height={180}
                style={{ objectFit: "contain", margin: "0 auto" }}
              />
            </Box>
            <Box
              sx={{
                ...styles.card,
                zIndex: cardZIndex,
                position: "relative",
                top: { xs: "-30px", md: "-59px" },
                right: { xs: "0px", md: "30px" },
                transition: "z-index 0.3s ease",
              }}
            >
              <Image
                src={AWSInfoData?.[0]?.Card2}
                alt="AWS Card 2"
                width={350}
                height={420}
                style={{ objectFit: "contain", margin: "0 auto" }}
              />
            </Box>
            <Box
              sx={{
                ...styles.card,
                left: { xs: "0", md: "-50px" },
                position: "relative",
                zIndex: cardZIndex,
              }}
            >
              <Image
                src={AWSInfoData?.[0]?.Card3}
                alt="AWS Card 3"
                width={250}
                height={160}
                style={{ objectFit: "contain", margin: "0 auto" }}
              />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            ...styles.infoSection,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            marginTop: { xs: "20px", md: "50px" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Box sx={{ ...styles.leftInfo, marginBottom: { xs: "20px", md: "0" } }}>
            {AWSInfoData?.[0]?.description1}
          </Box>

          <Divider
            orientation="vertical"
            flexItem
            sx={{
              ...styles.divider,
              display: { xs: "none", md: "block" },
            }}
          />

          <Box sx={{ ...styles.rightInfo }}>{AWSInfoData?.[0]?.description2}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AwsInfoCard;
