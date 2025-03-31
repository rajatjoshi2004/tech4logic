"use client";

import React, { useEffect } from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import styles from "./style";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Aos from "aos";
import "aos/dist/aos.css";

const CorporateCulture = ({ corporateAPIContentData }) => {

  useEffect(() => {
    Aos.init({
      duration: 1000, 
      easing: "ease-in-out", 
      once: false, 
    });
  }, []);

  return (
    <Box sx={styles.containerCSS}>
      <Typography variant="h2" sx={styles.containerCSS["& h2"]}>
        {corporateAPIContentData?.title}
      </Typography>
      <Typography variant="body1" sx={styles.containerCSS["& body1"]}>
        {corporateAPIContentData?.description}
      </Typography>
      <Box sx={styles.cardContainer}>
        {corporateAPIContentData?.corporateData?.map((card) => {
          return (
            <Card key={card?._id} sx={styles.cardSubContainerCSS}  data-aos="zoom-in-up">
              <CardContent sx={{ textAlign: "center" }}>
                <Typography variant="h6" sx={styles.cardSubContainerCSS["& h6"]}>
                  {card.title}
                </Typography>

                <ReactMarkdown
                  rehypePlugins={[rehypeRaw]}
                  components={{
                    p: ({ node, ...props }) => (
                      <Typography
                        variant="body2"
                        sx={styles.cardSubContainerCSS["& body2"]}
                        {...props}
                      />
                    ),
                  }}
                >
                  {card.description}
                </ReactMarkdown>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};

export default CorporateCulture;
