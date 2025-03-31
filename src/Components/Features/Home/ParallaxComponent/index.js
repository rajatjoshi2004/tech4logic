"use client";

import React, { useEffect, useState, useCallback } from "react";
import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import throttle from "lodash/throttle";
import styles from "./style";

const glowAnimation = `
@keyframes glow {
  0%, 20% {
    opacity: 1;
    box-shadow: 0 0 20px rgba(0, 174, 239, 0.5);
  }
  25%, 100% {
    opacity: 0;
  }
}

@keyframes orbit {
  0% {
    transform: rotate(0deg) translate(-165px) rotate(0deg);
  }
  100% {
    transform: rotate(360deg) translate(-165px) rotate(-360deg);
  }
}
`;

const RING_COUNT = 5;
const CIRCLE_COUNT = 4;

export const ParallaxAnimationComponent = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);
  const [visibleIndex, setVisibleIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = useCallback(
    throttle((e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }, 50),
    []
  );

  useEffect(() => {
    setIsClient(true);
    const styleTag = document.createElement("style");
    styleTag.innerHTML = glowAnimation;
    document.head.appendChild(styleTag);

    window.addEventListener("mousemove", handleMouseMove);

    const intervalId = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex < RING_COUNT - 1 ? prevIndex + 1 : 0));
    }, 2000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.head.removeChild(styleTag);
      clearInterval(intervalId);
    };
  }, [handleMouseMove]);

  const calculateParallax = useCallback(
    (factor) => {
      if (!isClient) return {};
      const { x, y } = mousePosition;
      const translateX = (x - window.innerWidth / 2) * factor;
      const translateY = (y - window.innerHeight / 2) * factor;
      return {
        transform: `translate(${translateX}px, ${translateY}px)`,
        transition: "transform 0.2s ease-out",
      };
    },
    [mousePosition, isClient]
  );

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => setHovered(false);

  return (
    <Box sx={styles.parallaxContainer}>
      <Box sx={styles.ringContainer}>
        {Array.from({ length: RING_COUNT }).map((_, index) => (
          <Box
            key={index}
            sx={{
              ...styles.ringCSS,
              animationDelay: `${index * 0.4}s`,
              opacity: visibleIndex >= index ? 1 : 0,
              width: `${(index + 1) * 150}px`,
              height: `${(index + 1) * 150}px`,
            }}
          />
        ))}
      </Box>

      <Box sx={styles.mainCSS}>
        {Array.from({ length: CIRCLE_COUNT }).map((_, index) => (
          <Box
            key={index}
            sx={{
              ...styles.circleCSS,
              animationDelay: `${index * 1.5}s`,
              transition: "transform 0.4s ease, opacity 0.4s ease",
              transform: hovered ? "scale(1.1)" : "scale(1)",
              opacity: hovered ? 0.8 : 1,
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Image
              src={`https://tech4logic-images.s3.ap-south-1.amazonaws.com/Images/Home/user${
                index + 1
              }.svg`}
              alt={`User ${index + 1} Icon`}
              width={30}
              height={30}
              style={{ borderRadius: "50%" }}
              loading="lazy"
            />
          </Box>
        ))}
      </Box>

      <Box sx={styles.imageContainer}>
        <Box
          sx={{
            ...styles.parallaxImage,
            ...styles.topLeft,
            ...calculateParallax(0.05),
          }}
        >
          <Image
            src="https://tech4logic-images.s3.ap-south-1.amazonaws.com/Images/Home/RainaGrace.svg"
            alt="Akshay Subbarao"
            width={154}
            height={74}
            loading="lazy"
          />
          <Box sx={styles.userCardCSS}>
            <Typography variant="h1" sx={styles.userCardCSS["& h1"]}>
              Akshay Subbarao
            </Typography>
            <Typography variant="body1" sx={styles.userCardCSS["& body1"]}>
              Tecnicas Reunidas
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            ...styles.parallaxImage,
            ...styles.topRight,
            ...calculateParallax(0.07),
          }}
        >
          <Box sx={styles.userCardCSS}>
            <Typography variant="h1" sx={styles.userCardCSS["& h1"]}>
              Prashant Redkar
            </Typography>
            <Typography variant="body1" sx={styles.userCardCSS["& body1"]}>
              CTO - Nazara Technology
            </Typography>
          </Box>
          <Image
            src="https://tech4logic-images.s3.ap-south-1.amazonaws.com/Images/Home/PrashantRedkar.jpg"
            alt="Prashant Redkar"
            width={95}
            height={95}
            loading="lazy"
          />
        </Box>

        <Box
          sx={{
            ...styles.parallaxImage,
            ...styles.bottomLeft,
            ...calculateParallax(0.04),
          }}
        >
          <Image
            src="https://tech4logic-images.s3.ap-south-1.amazonaws.com/Images/Header/avinashnair.jpg"
            alt="Avinashi Nair"
            width={172}
            height={172}
            style={{ borderRadius: "50%" }}
            loading="lazy"
          />
          <Box sx={styles.userCardCSS}>
            <Typography variant="h1" sx={styles.userCardCSS["& h1"]}>
              Avinashi Nair
            </Typography>
            <Typography variant="body1" sx={styles.userCardCSS["& body1"]}>
              CTO Ddecor
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            ...styles.parallaxImage,
            ...styles.bottomRight,
            ...calculateParallax(0.06),
          }}
        >
          <Box sx={styles.user4Card}>
            <Typography variant="h1" sx={styles.user4Card["& h1"]}>
              Rakesh Khetan
            </Typography>
            <Typography variant="body1" sx={styles.user4Card["& body1"]}>
              Head of IT @ IB Group
            </Typography>
          </Box>
          <Image
            src="https://tech4logic-images.s3.ap-south-1.amazonaws.com/Images/Header/Rakesh_Khaitan.jpg"
            alt="User 4 Icon"
            width={110}
            height={110}
            loading="lazy"
            style={{ borderRadius: "50%" }}
          />
        </Box>
      </Box>

      <Box sx={styles.centerContent}>
        <Typography variant="h4" sx={styles.centerContent["& h4"]}>
          <Typography variant="body1" sx={styles.centerContent["& body1"]}>
            Global 25k
          </Typography>{" "}
          Users Working With Us,
          <br /> Join Us Now!
        </Typography>
        <Button sx={styles.joinButton}>
          Join Now <GoArrowUpRight />
        </Button>
      </Box>
    </Box>
  );
};
