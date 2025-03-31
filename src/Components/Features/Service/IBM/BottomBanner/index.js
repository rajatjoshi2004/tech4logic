"use client";

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import styles from "./style";
import { MdArrowOutward } from "react-icons/md";
import { useRouter } from "next/navigation";

const IBMBottomBanner = () => {
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
            Looking for a particular Azure service that's not mentioned above?
          </Typography>
          <Typography variant="body1" sx={styles.containerCSS["& body1"]}>
            Don't worry, Tech4Logic has got you covered.
          </Typography>
        </Box>

        <Box sx={styles.contentConatiner}>
          <Typography variant="body1" sx={styles.contentConatiner["& body1"]}>
            Contact us today to learn more about how we can help your business thrive in today's
            fast-paced digital landscape.
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

export default IBMBottomBanner;
