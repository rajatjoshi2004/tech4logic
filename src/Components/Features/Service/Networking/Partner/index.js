import { partners } from "@/utils/common";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React, { useMemo } from "react";
import styles from "./style";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const NetWorkingPartner = ({ title }) => {
  const settings = useMemo(
    () => ({
      dots: false,
      infinite: true,
      speed: 2000,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      arrows: false,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
          },
        },
      ],
    }),
    []
  );
  return (
    <Box sx={styles.containerCSS}>
      <Box sx={styles.sliderTitle}>
        <Typography variant="h2" sx={styles.sliderTitle["& h2"]}>
          {title}
        </Typography>
        <Box sx={{ borderBottom: "2px solid gray", width: "100%" }} />
      </Box>

      <Box sx={{ width: "100%" }}>
        <Slider {...settings}>
          {partners.map((partner) => (
            <Box
              key={partner.id}
              sx={{ display: "flex", justifyContent: "center", mt: "20px", alignItems: "center" }}
            >
              <Image
                src={`https://tech4logic-images.s3.ap-south-1.amazonaws.com${partner.icon}`}
                alt={partner.name}
                width={100}
                height={100}
                loading="lazy"
              />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default NetWorkingPartner;
