import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./style";

const BannerPart = () => {
  return (
    <Box
      sx={{
        backgroundImage:
          'url("https://tech4logic-images.s3.ap-south-1.amazonaws.com/Images/Service/BlogBG_image.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        ...styles.container,
      }}
    >
      <Box sx={styles.contentContainer}>
        <Typography variant="h6" sx={styles.contentContainer["& h6"]}>
          Tech4logic Blogs:
        </Typography>

        <Typography variant="h1" sx={styles.contentContainer["& h1"]}>
          Tech4Logic Insights
        </Typography>

        <Typography variant="body1" sx={{ fontSize: "18px", mt: 2 }}>
          Explore trends in IT, AI, cybersecurity, cloud computing, and networking.
        </Typography>
      </Box>
    </Box>
  );
};

export default BannerPart;
