"use client";

import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./style";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const WhySDSComponent = ({ WhySDSInfoData }) => {

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
          justifyContent: "space-between",
          alignItems: "center",
          mb: 8,
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            ...styles.containerCSS["& h4"],
          }}
        >
         {WhySDSInfoData?.[0]?.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            ...styles.containerCSS["& body1"],
            mt: { xs: 4, md: 0 },
            fontSize: { xs: "16px", md: "18px" },
          }}
        >
          <hr></hr>
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {WhySDSInfoData?.[0]?.SDSCard?.map((card) => (
          <Grid item xs={12} sm={6} md={6} lg={6} key={card._id} data-aos="zoom-in-up">
            <Box sx={{ ...styles.cardContainerCSS, textAlign: "center", backgroundImage: "https://tech4logic-images.s3.ap-south-1.amazonaws.com/Images/Service/sds/120.png" }}>
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

export default WhySDSComponent;
