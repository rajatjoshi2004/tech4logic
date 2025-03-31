import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./style";

const AboutUsBanner = ({ aboutdata }) => {

  return (
    <Box sx={{ ...styles.container, backgroundImage: `url(${aboutdata?.bannerImageUrl})` }}>
      <Box sx={styles.subConatiner}>
        <Typography variant="h4" sx={styles.subConatiner["& h4"]}>
          {aboutdata?.title}
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutUsBanner;
