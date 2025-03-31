"use client";

import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import { Box } from "@mui/material";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./style";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const Partner = ({ partnerData }) => {
  const settings = useMemo(
    () => ({
      dots: false,
      infinite: true,
      speed: 2000,
      slidesToShow: 9,
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

  if (!partnerData?.length) return null;

  return (
    <Box sx={styles.ContainerCSS}>
      <Box sx={{ width: "100%" }}>
        <Slider {...settings}>
          {partnerData.map(({ _id, icon, name }) => (
            <Box key={_id} sx={styles.sliderContainer}>
              <Image src={icon} alt={name} width={80} height={80} loading="lazy" />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default Partner;
