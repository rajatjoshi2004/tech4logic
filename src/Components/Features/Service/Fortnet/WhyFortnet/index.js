"use client";

import React, { useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import Image from "next/image";
import styles from "./style";
import Aos from "aos";
import "aos/dist/aos.css";

const WhyFortnetComponent = ({ whyFortnetInfoData }) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <Box sx={styles.containerCSS}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          mb: 8,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "500",
            fontSize: { xs: "48px", md: "55px !important" },
            display: "flex",
            alignItems: "center",
            color: "#fff",
          }}
        >
          Why Choose{" "}
          <Box
            component="span"
            sx={{
              marginLeft: "10px",
              display: "inline-flex",
              verticalAlign: "middle",
            }}
          >
            <Image
              src={
                "https://tech4logic-images.s3.ap-south-1.amazonaws.com/Images/Service/fortinet-logo.svg"
              }
              alt="fortnet Logo"
              width={300}
              height={120}
              style={{ marginLeft: "10px" }}
            />
          </Box>
          ?
        </Typography>
      </Box>

      <Grid container spacing={6} justifyContent="center">
        {whyFortnetInfoData?.[0]?.FortinetCard?.map((card) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={card?._id} data-aos="zoom-in-up">
            <Box sx={{ ...styles.cardContainerCSS, textAlign: "center" }}>
              <Image src={card?.cardImageUrl} alt={card.alt} width={80} height={80} />
              <Typography
                variant="h6"
                sx={{
                  fontSize: { xs: "18px", md: "20px" },
                  mt: 2,
                }}
              >
                {card?.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "14px", md: "16px" },
                  mt: 1,
                }}
              >
                {card?.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhyFortnetComponent;
