"use client";

import React, { useState, useMemo, useCallback, useEffect } from "react";
import { Box, Typography, Button, Grid, Card, CardContent } from "@mui/material";
import { IoIosArrowRoundForward } from "react-icons/io";
import styles from "./style";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Aos from "aos";
import "aos/dist/aos.css";

const MAX_LINES = 1;
const CARD_CONTENT_HEIGHT = "200px";

const OurBestOfferingsComponent = ({ offeringsData }) => {
  const [expandedCards, setExpandedCards] = useState({});
  const [hoveredCardId, setHoveredCardId] = useState(null);

  const toggleExpanded = useCallback((id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 1000, 
      easing: "ease-in-out", 
      once: false, 
    });
  }, []);

  const offeringCards = useMemo(
    () =>
      offeringsData?.map((offering) => {
        const isExpanded = expandedCards[offering?._id];
        const isHovered = hoveredCardId === offering?._id;
        const lines = offering?.description.split("\n").filter(Boolean);
        const preview = lines.slice(0, MAX_LINES).join("\n");

        return (
          <Grid item key={offering?._id} xs={12} sm={6} md={4} data-aos="zoom-in-right">
            <Card
              onMouseEnter={() => setHoveredCardId(offering?._id)}
              onMouseLeave={() => setHoveredCardId(null)}
              sx={{
                ...styles.cardContainer,
                backgroundImage: `linear-gradient(180deg, rgba(142, 84, 233, 0.5) 0%, #0B081E 100%), url(${offering.backgroundImage})`,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "16px",
                }}
              >
                <Box>
                  <Typography variant="h5" sx={styles.cardContainerCSS["& h5"]}>
                    {offering?.title}
                  </Typography>
                </Box>
                <Box sx={styles.cardImageContainer}>
                  <Image
                    src={offering?.icon}
                    alt={`${offering?.title} Icon`}
                    width={40}
                    height={40}
                    style={{ objectFit: "contain" }}
                    loading="lazy"
                  />
                </Box>
              </Box>

              <CardContent
                sx={{
                  ...styles.cardContainerCSS,
                  height: isExpanded || isHovered ? "auto" : CARD_CONTENT_HEIGHT,
                  transition: "height 0.3s ease-in-out",
                }}
              >
                <Box sx={{ mt: "auto", display: "block" }}>
                  <ReactMarkdown
                    rehypePlugins={[rehypeRaw]}
                    components={{
                      p: ({ node, ...props }) => (
                        <Typography
                          variant="body2"
                          sx={styles.cardContainerCSS["& body2"]}
                          {...props}
                        />
                      ),
                      ul: ({ node, ...props }) => (
                        <ul style={{ marginLeft: "20px", listStyleType: "disc" }} {...props} />
                      ),
                      li: ({ node, ...props }) => (
                        <li>
                          <Typography
                            variant="body2"
                            component="span"
                            sx={styles.cardContainerCSS["& body2"]}
                            {...props}
                          />
                        </li>
                      ),
                    }}
                  >
                    {isExpanded || isHovered ? offering?.description : preview}
                  </ReactMarkdown>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
                  <Button
                    variant="contained"
                    sx={styles.getStartedBtn}
                    endIcon={<IoIosArrowRoundForward />}
                  >
                    Get Started
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        );
      }),
    [offeringsData, expandedCards, hoveredCardId]
  );

  return (
    <Box sx={styles.container}>
      <Box sx={styles.subContainer}>
        <Typography variant="h6" sx={styles.subContainer["& h6"]}>
          Our Best Offerings
        </Typography>
        <Typography variant="body1" sx={styles.subContainer["& body1"]}>
          Connect with us for more info
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ justifyContent: "center" }}>
        {offeringCards}
      </Grid>
    </Box>
  );
};

export default OurBestOfferingsComponent;
