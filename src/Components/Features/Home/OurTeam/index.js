"use client";

import { Box, IconButton, Typography } from "@mui/material";
import { useRef, useState, useMemo, useCallback } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import styles from "./style";

export const OurTeamComponent = ({ teamMembersData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cardContainerRef = useRef(null);

  const cardWidth = 300;
  const visibleCards = 4;

  const handlePrev = useCallback(() => {
    const newIndex = Math.max(currentIndex - 1, 0);
    setCurrentIndex(newIndex);
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollTo({
        left: newIndex * cardWidth,
        behavior: "smooth",
      });
    }
  }, [currentIndex, cardWidth]);

  const handleNext = useCallback(() => {
    const newIndex = Math.min(currentIndex + 1, teamMembersData.length - visibleCards);
    setCurrentIndex(newIndex);
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollTo({
        left: newIndex * cardWidth,
        behavior: "smooth",
      });
    }
  }, [currentIndex, teamMembersData.length, visibleCards, cardWidth]);

  const teamMemberCards = useMemo(
    () =>
      teamMembersData?.map(({ _id, image, name, role }) => (
        <Box key={_id} sx={{ ...styles.CardCSS, backgroundImage: `url(${image})` }}>
          <Box sx={styles.cardSubCSS}></Box>
          <Box sx={styles.CardSubContainer}>
            <Typography variant="h6" sx={styles.CardSubContainer["& h6"]}>
              {name}
            </Typography>
            <Typography variant="body2" sx={styles.CardSubContainer["& body2"]}>
              {role}
            </Typography>
          </Box>
        </Box>
      )),
    [teamMembersData]
  );

  return (
    <Box sx={styles.container}>
      <Typography variant="h6" sx={styles.container["& h6"]}>
        Our Dedicated Team
      </Typography>

      <Box sx={styles.contentContainer}>
        <Typography variant="body1" sx={styles.contentContainer["& body1"]}>
          Meet Our Team
        </Typography>
        <Box>
          <IconButton
            onClick={handlePrev}
            disabled={currentIndex === 0}
            sx={{
              mr: 2,
              border: "1px solid rgba(62, 87, 167, 1)",
              background: "rgba(18, 17, 29, 1)",
              boxShadow: "0px 0px 13px 0px rgba(115, 112, 142, 0.3)",
              "&:hover": {
                background: "rgba(28, 27, 41, 1)",
              },
              ...(currentIndex === 0 && {
                opacity: 0.5,
                filter: "blur(2px)",
                pointerEvents: "none",
              }),
            }}
            aria-label="Previous team member"
          >
            <GoArrowLeft size={20} style={{ color: "rgba(142, 84, 233, 1)" }} />
          </IconButton>

          <IconButton
            onClick={handleNext}
            disabled={currentIndex >= teamMembersData.length - visibleCards}
            sx={{
              ml: 2,
              border: "1px solid rgba(62, 87, 167, 1)",
              background: "rgba(18, 17, 29, 1)",
              boxShadow: "0px 0px 13px 0px rgba(115, 112, 142, 0.3)",
              "&:hover": {
                background: "rgba(28, 27, 41, 1)",
              },
              ...(currentIndex >= teamMembersData.length - visibleCards && {
                opacity: 0.5,
                filter: "blur(2px)",
                pointerEvents: "none",
              }),
            }}
            aria-label="Next team member"
          >
            <GoArrowRight size={20} style={{ color: "rgba(142, 84, 233, 1)" }} />
          </IconButton>
        </Box>
      </Box>

      <Box
        ref={cardContainerRef}
        sx={{
          ...styles.cardContainer,
          scrollSnapType: "x mandatory",
          overflowX: "scroll",
          display: "flex",
        }}
      >
        {teamMemberCards}
      </Box>
    </Box>
  );
};

export default OurTeamComponent;
