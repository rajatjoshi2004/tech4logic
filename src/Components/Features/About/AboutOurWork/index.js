"use client";

import { Box, Button, Typography } from "@mui/material";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { TiArrowRight } from "react-icons/ti";
import styles from "./style";

const AboutOurWork = ({ aboutworkData }) => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <Box sx={styles.container}>
      <Box flex={1} sx={{ borderRadius: "10px" }}>
        {aboutworkData?.leftSideAboutOurWorkData?.map((row) => (
          <Box
            key={row?._id}
            sx={{
              ...styles.leftSectionCard,
              bgcolor: row.backgroundColor,
            }}
            data-aos="zoom-in-up"
          >
            <Typography
              variant="h5"
              sx={{ ...styles.leftSectionCard["& h5"], color: row.textColor }}
            >
              {row.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{ ...styles.leftSectionCard["& body1"], color: row.textColor }}
            >
              {row.description}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box flex={1} sx={styles.rightSectionCard}  data-aos="zoom-in-up">
        <Typography variant="body1" sx={styles.rightSectionCard["& body1"]}>
          {aboutworkData?.rightSideAboutOurWorkData?.[0]?.title}
        </Typography>

        <Typography variant="h3" sx={styles.rightSectionCard["& h3"]}>
          {aboutworkData?.rightSideAboutOurWorkData?.[0]?.subTitle}
        </Typography>

        <Box sx={styles.descriptionCard}>
          <Typography variant="body1" sx={styles.descriptionCard["& body1"]}>
            {aboutworkData?.rightSideAboutOurWorkData?.[0]?.description1}
          </Typography>
        </Box>

        <Button variant="contained" endIcon={<TiArrowRight />} sx={styles.buttonCSS}>
          View Our Services
        </Button>
      </Box>
    </Box>
  );
};

export default AboutOurWork;
