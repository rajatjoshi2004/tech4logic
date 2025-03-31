"use client";

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import styles from "./style";
import { MdArrowOutward } from "react-icons/md";
import { useRouter } from "next/navigation";

const MicroSoft365BottomBanner = ({BottomData}) => {
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
            sx={styles.contentConatiner["& button"]}
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

export default MicroSoft365BottomBanner;
