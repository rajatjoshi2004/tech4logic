"use client";

import React, { useEffect, useMemo } from "react";
import { Box, Typography, Grid, Card, CardContent, Button } from "@mui/material";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import styles from "./style";
import Aos from "aos";
import "aos/dist/aos.css";

const MdOutlineArrowOutward = dynamic(
  () => import("react-icons/md").then((mod) => mod.MdOutlineArrowOutward),
  { ssr: false }
);

const ServiceComponent = ({ serViceData }) => {

  useEffect(() => {
    Aos.init({
      duration: 1000, 
      easing: "ease-in-out", 
      once: false, 
    });
  }, []);

  const renderedServices = useMemo(() => {
    return serViceData?.map((service) => (
      <Grid item xs={12} sm={6} md={4} key={service._id}  data-aos="zoom-in-up">
        <Card sx={styles.cardContainer}>
          <CardContent sx={styles.subCardContainer}>
            <Box sx={styles.iconContainer}>
              <Image
                src={service?.icon}
                alt={service?.title}
                width={50}
                height={50}
                priority={false}
                loading="lazy"
              />
            </Box>
            <Typography variant="h5" sx={styles.subCardContainer["& h5"]}>
              {service?.title}
            </Typography>
            <Typography variant="body2" sx={styles.subCardContainer["& body2"]}>
              {service?.description}
            </Typography>
            <Link href="/" passHref>
              <Button variant="text" sx={styles.readMoreButtonCSS}>
                Read More <MdOutlineArrowOutward style={{ marginLeft: "5px" }} />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </Grid>
    ));
  }, [serViceData]);

  return (
    <Box sx={styles.container}>
      <Typography variant="h6" align="center" sx={styles.container["& h6"]}>
        What We Do
      </Typography>
      <Typography variant="h3" align="center" sx={styles.container["& h3"]}>
        We Provide Best Service for You
      </Typography>
      {/* <Typography variant="body1" align="center" sx={styles.container["& body1"]}>
        We are helping clients create solutions with our <br /> talented experts.
      </Typography> */}
      <Grid
        container
        spacing={4}
        sx={{
          ...styles.gridContainerCSS,
          mt: { xs: "20px", md: "40px" },
          "& > .MuiGrid-item": {
            paddingLeft: { xs: "20px", md: "16px" },
            paddingRight: { xs: "10px", md: "16px" },
          },
        }}
      >
        {renderedServices}
      </Grid>
    </Box>
  );
};

export default ServiceComponent;
