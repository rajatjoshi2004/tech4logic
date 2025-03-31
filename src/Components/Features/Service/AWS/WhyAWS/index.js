"use client";

import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./style";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const WhyAWSComponent = ({ WhyAWSInfoData }) => {

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
          Why Choose{" "}
          <Image
            src="https://tech4logic-images.s3.ap-south-1.amazonaws.com/Images/Service/AWS.svg"
            alt="AWS Logo"
            width={120}
            height={120}
            style={{ marginLeft: "10px" }}
          />
          ?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            ...styles.containerCSS["& body1"],
            mt: { xs: 4, md: 0 },
            fontSize: { xs: "16px", md: "18px" },
          }}
        >
          {WhyAWSInfoData?.[0]?.subTitle}
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {WhyAWSInfoData?.[0]?.AWSCard?.map((card) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={card._id} data-aos="zoom-in-up">
            <Box sx={{ ...styles.cardContainerCSS, textAlign: "center" }}>
              <Image src={card?.cardImageUrl} alt={card?.title} width={80} height={80} />
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

export default WhyAWSComponent;
