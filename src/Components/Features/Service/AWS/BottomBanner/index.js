"use client"

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { FaArrowRight } from "react-icons/fa";
import styles from "./style";
import { useRouter } from "next/navigation";

const BottomBanner = ({ BottomData }) => {
  const router = useRouter()
  return (
    <Box>
      <Box sx={styles.containerCSS}>
        <Box
          sx={{
            flex: 1,
            paddingRight: { xs: "0", md: "20px" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography variant="h5" sx={styles.containerCSS["& h5"]}>
            {BottomData?.[0]?.title}
          </Typography>
          <Typography variant="body1" sx={styles.containerCSS["& body1"]}>
            {BottomData?.[0]?.subTitle}
          </Typography>
        </Box>

        <Box sx={styles.contentConatiner}>
          <Typography variant="body1" sx={styles.contentConatiner["& body1"]}>
            {BottomData?.[0]?.description}
          </Typography>

          <Button variant="contained" sx={styles.contentConatiner["& button"]} onClick={()=> router?.push("/contact")}>
            Contact Now
            <FaArrowRight style={{ marginLeft: "8px" }} />
          </Button>
        </Box>
      </Box>
      <Box
        component="img"
        src="https://tech4logic-images.s3.ap-south-1.amazonaws.com/Images/Home/Amazon_Smile.svg"
        alt="Amazon Smile"
        sx={{
          width: { xs: "calc(100% - 40px)", md: "calc(100% - 240px)" },
          margin: "0 auto",
        }}
      />
    </Box>
  );
};

export default BottomBanner;
