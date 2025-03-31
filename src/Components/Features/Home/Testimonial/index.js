"use client";

import { Box, Card, IconButton, Typography } from "@mui/material";
import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { AiFillStar } from "react-icons/ai";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import styles from "./style";
import Image from "next/image";

const TestimonialComponent = ({ testimonialsData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardContainerRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      scrollToSlide(newIndex);
    }
  }, [currentIndex]);

  const handleNext = useCallback(() => {
    if (currentIndex < testimonialsData?.length - 2) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      scrollToSlide(newIndex);
    }
  }, [currentIndex, testimonialsData]);

  const scrollToSlide = useCallback((index) => {
    if (cardContainerRef.current) {
      const cardWidth = cardContainerRef.current.firstElementChild.offsetWidth;
      cardContainerRef.current.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
    }
  }, []);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = prevIndex < testimonialsData?.length - 2 ? prevIndex + 1 : 0;
        scrollToSlide(newIndex);
        return newIndex;
      });
    }, 5000);

    return () => clearInterval(autoSlide);
  }, [testimonialsData, scrollToSlide]);

  const testimonialCards = useMemo(
    () =>
      testimonialsData
        ?.slice(currentIndex, currentIndex + 2)
        .map(({ _id, comment, image, name, role }) => (
          <Card key={_id} sx={styles.TestimonialCard}>
            <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
              {Array(5)
                .fill("")
                .map((_, index) => (
                  <AiFillStar key={index} style={{ color: "rgba(134, 205, 182, 1)" }} />
                ))}
            </Box>

            <Typography variant="body1" sx={styles.TestimonialCard["& body1"]}>
              "{comment}"
            </Typography>

            <Box sx={styles.contentBox}>
              <Image
                src={image}
                alt={name}
                width={60}
                height={60}
                style={{ marginRight: "16px" }}
              />
              <Box>
                <Typography variant="h2" sx={styles.contentBox["& h2"]}>
                  {name}
                </Typography>
                <Typography variant="body2" sx={styles.contentBox["& body2"]}>
                  {role}
                </Typography>
              </Box>
            </Box>
          </Card>
        )),
    [currentIndex, testimonialsData]
  );

  return (
    <Box sx={styles.container}>
      <Typography variant="h6" sx={styles.container["& h6"]}>
        Testimonial
      </Typography>

      <Typography variant="body1" sx={styles.container["& body1"]}>
        This is what others have to say
      </Typography>

      <Typography variant="body2" sx={styles.container["& body2"]}>
        Discover what our clients are saying about their experiences.
      </Typography>

      <Box sx={styles.iconContainer}>
        <IconButton
          onClick={handlePrev}
          disabled={currentIndex === 0}
          sx={{
            ...styles.LeftIconContainer,
            opacity: currentIndex === 0 ? 0.5 : 1,
            cursor: currentIndex === 0 ? "not-allowed" : "pointer",
          }}
          aria-label="Previous testimonial"
        >
          <GoArrowLeft
            size={30}
            style={{
              color: currentIndex === 0 ? "rgba(58, 56, 79, 0.5)" : "#fff",
            }}
          />
        </IconButton>

        <Box
          ref={cardContainerRef}
          sx={{
            display: "flex",
            overflow: "hidden",
            scrollSnapType: "x mandatory",
            scrollBehavior: "smooth",
            paddingX: { xs: "10px", sm: "0px" },
          }}
        >
          {testimonialCards}
        </Box>

        {/* Right Arrow Icon */}
        <IconButton
          onClick={handleNext}
          disabled={currentIndex >= testimonialsData?.length - 2}
          sx={{
            ...styles.RightIconCSS,
            opacity: currentIndex >= testimonialsData?.length - 2 ? 0.5 : 1,
            cursor: currentIndex >= testimonialsData?.length - 2 ? "not-allowed" : "pointer",
          }}
          aria-label="Next testimonial"
        >
          <GoArrowRight
            size={30}
            style={{
              color:
                currentIndex >= testimonialsData?.length - 2 ? "rgba(58, 56, 79, 0.5)" : "#fff",
            }}
          />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TestimonialComponent;
