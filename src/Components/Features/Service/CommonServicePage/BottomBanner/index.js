"use client";

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import styles from "./style";
import { MdArrowOutward } from "react-icons/md";
import { useRouter } from "next/navigation";

const CommonServiceBottomBanner = ({ BottomData }) => {
  const router = useRouter();
  return (
    <Box>
      <Box
        sx={{
          ...styles.containerCSS,
          backgroundImage: BottomData?.[0]?.cardImageUrl
            ? `url(${BottomData?.[0]?.cardImageUrl})`
            : `url('https://tech4logic-images.s3.ap-south-1.amazonaws.com/Images/Service/azureBottom_Banner.png')`,
        }}
      >
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

          <Button
            variant="contained"
            sx={{
              ...styles.contentConatiner["& button"],
              background: BottomData?.[0]?.btnBgColor ? BottomData?.[0]?.btnBgColor : "#FA582D",
              boxShadow: BottomData?.[0]?.btnShadowColor ? BottomData?.[0]?.btnShadowColor :  "0px 0px 81.2px 0px #FA582D",
            }}
            onClick={() => router.push("/contact")}
          >
            Contact Now
            <MdArrowOutward style={{ marginLeft: "8px" }} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CommonServiceBottomBanner;
