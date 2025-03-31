"use client";

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { FaArrowRight } from "react-icons/fa";
import styles from "./style";
import Image from "next/image";
import { useRouter } from "next/navigation";

const BottomBanner = ({ BottomData }) => {
  const router = useRouter();
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
          <Typography
            variant="h5"
            sx={styles.containerCSS["& h5"]}
            style={{ marginBottom: "130px" }}
          >
            {BottomData?.[0]?.title}
          </Typography>
          {BottomData?.[0]?.buttionImage && (
            <Image src={BottomData[0].buttionImage} alt="SDS Logo" width={250} height={55} />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default BottomBanner;
