import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./style";

const ImageCommonBanner = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.subConatiner}>
        <Typography variant="h4" sx={styles.subConatiner["& h4"]}>
          About Us
        </Typography>
      </Box>
    </Box>
  );
};

export default ImageCommonBanner;
