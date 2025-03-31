"use client";

import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import styles from "./style";
import "aos/dist/aos.css";
import Aos from "aos";

const OurRangeOfAmazonCloudServices = ({ OurRangeAWSInfoData }) => {
  const [hoveredCardId, setHoveredCardId] = useState(null);
  const router = useRouter();

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <Box
      sx={{
        maxWidth: "1400px",
        width: "100%",
        margin: "0 auto",
        padding: { xs: "20px", sm: "30px", md: "0px" },
        mb: "30px",
        mt: { xs: "60px", md: "90px" },
      }}
    >
      <Box sx={{ ...styles.ConatinerCSS, textAlign: { xs: "center", md: "left" } }}>
        <Box sx={styles.titleConatiner}>
          <Typography
            variant="h4"
            sx={{ fontSize: { xs: "28px", md: "40px" }, textAlign: { xs: "center", md: "left" } }}
          >
            {OurRangeAWSInfoData?.[0]?.title}
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: "rgba(255, 153, 0, 1)",
              fontSize: { xs: "28px", md: "40px" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {OurRangeAWSInfoData?.[0]?.subTitle}
          </Typography>
        </Box>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "14px", md: "16px" },
            textAlign: { xs: "center", md: "left" },
            mt: { xs: "10px", md: "20px" },
          }}
        >
          {OurRangeAWSInfoData?.[0]?.description}
        </Typography>
      </Box>

      <Grid container spacing={3} sx={{ width: "100%", ml: { xs: 0 } }}>
        {OurRangeAWSInfoData?.[0]?.AWSCloudCard?.map((card) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={card._id} data-aos="zoom-in-up">
            <Box
              sx={{
                ...styles.CardContainerCSS,
                backgroundImage: `url(${card?.cardImageUrl})`,
              }}
              onMouseEnter={() => setHoveredCardId(card?._id)}
              onMouseLeave={() => setHoveredCardId(null)}
              // onClick={() => router.push(`/aws/${card.title}`)}
            >
              <Box sx={styles.logoContainer}>
                <Image
                  src="https://tech4logic-images.s3.ap-south-1.amazonaws.com/Images/Service/AWSWhite.svg"
                  alt="AWS Logo"
                  width={75}
                  height={16}
                  style={{ objectFit: "contain" }}
                />
              </Box>

              <Box sx={styles.cardContent}>
                <Box sx={styles.titleDescriptionContainer}>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ ...styles.cardTitle, fontSize: { xs: "18px", md: "20px" } }}
                    >
                      {card?.title}
                    </Typography>
                    {hoveredCardId === card?._id && (
                      <Typography
                        variant="body2"
                        sx={{
                          ...styles.cardDescription,
                          fontSize: { xs: "12px", md: "14px" },
                          maxHeight: hoveredCardId === card?._id ? "400px" : "0px",
                          opacity: hoveredCardId === card?._id ? 1 : 0,
                          overflow: "hidden",
                          transition: "max-height 0.4s ease, opacity 0.4s ease",
                        }}
                      >
                        {card?.description}
                      </Typography>
                    )}
                  </Box>
                  {/* <FaArrowRight
                    style={{
                      ...styles.arrowIcon,
                    }}
                  /> */}
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ ...styles.BottomContainerCSS, mt: { xs: "40px", md: "60px" } }}>
        <Box
          sx={{
            flex: { xs: "0 0 100%", md: "0 0 40%" },
            paddingRight: { xs: "0", md: "10px" },
            textAlign: { xs: "center", md: "left" },
            mb: { xs: "20px", md: "0" },
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "24px", md: "36px" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            AWS Consulting,
            <br />
            Solutions And
            <br />
            Services
          </Typography>
        </Box>
        <Box
          sx={{
            flex: 1,
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              mt: { xs: "20px", md: 0 },
            }}
          >
            {OurRangeAWSInfoData?.[0]?.bottomdesc}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default OurRangeOfAmazonCloudServices;
