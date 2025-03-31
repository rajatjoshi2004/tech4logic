"use client";

import { Box, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./style";
import { styled } from "@mui/system";
import Aos from "aos";
import "aos/dist/aos.css";

const StyledBox = styled(Box)(
  ({ backgroundColor, borderColor, bgImage, backgroundHoverColor, boxShadowColor }) => ({
    width: "100%",
    padding: { xs: "5px", md: "10px" },
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    height: "520px",
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "8px",
    border: borderColor || "1px solid #fff",
    position: "relative",
    cursor: "pointer",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    "&::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background:
        backgroundColor || "linear-gradient(180deg, rgba(215, 25, 32, 0.4) 20%, #D71920 80%)",
      opacity: 0.8,
      zIndex: 1,
    },
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: boxShadowColor || "0px 5.97px 53.89px 0px #DA291C",
      "&::before": {
        background:
          backgroundHoverColor ||
          "linear-gradient(180deg, rgba(215, 25, 32, 0.4) -40.33%, #D71920 54.26%)",
      },
    },
  }),
);

const OurRangeOfCommonService = ({
  ourRangeOfSeqriteinfoData,
  cardType,
  backgroundColor,
  backgroundHoverColor,
  boxShadowColor,
}) => {
  const [hoveredCardId, setHoveredCardId] = useState(null);

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
        mb: "90px",
        mt: { xs: "60px", md: "90px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Box
          sx={{
            width: "auto",
            height: "200px",
            mb: 2,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "37px",
            justifyContent: "center",
          }}
        >
          <Image
            src={ourRangeOfSeqriteinfoData?.[0]?.cardImageUrl}
            alt="Sequrite Logo"
            width={350}
            height={125}
          />
          <Typography
            variant="h4"
            sx={{
              color: "#fff",
              fontSize: { xs: "28px", md: "80px" },
              textAlign: "center",
            }}
          >
            Services
          </Typography>
        </Box>
      </Box>

      <Grid container spacing={3} sx={{ width: "100%", ml: { xs: 0 } }}>
        {ourRangeOfSeqriteinfoData?.[0]?.CloudCardInfo?.map((card) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={cardType === "two" ? 6 : cardType === "three" ? 4 : 3} // Adjust based on cardType
            lg={cardType === "two" ? 6 : cardType === "three" ? 4 : 3} // Adjust for larger screens if needed
            key={card?._id}
            data-aos="zoom-in-up"
          >
            <StyledBox
              bgImage={card?.cardImageUrl}
              backgroundColor={backgroundColor}
              boxShadowColor={boxShadowColor}
              backgroundHoverColor={backgroundHoverColor}
              onMouseEnter={() => setHoveredCardId(card?._id)}
              onMouseLeave={() => setHoveredCardId(null)}
            >
              <Box sx={styles.logoContainer}>
                <Image
                  src={ourRangeOfSeqriteinfoData?.[0]?.cardImageUrl}
                  alt="Sequrite Logo"
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
                      sx={{
                        ...styles.cardTitle,
                        fontSize: { xs: "18px", md: "20px" },
                        textWrap: "auto",
                      }}
                    >
                      {card.title}
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
                          textWrap: "auto",
                          transition: "max-height 0.4s ease, opacity 0.4s ease",
                        }}
                      >
                        {card.description}
                      </Typography>
                    )}
                  </Box>
                </Box>
              </Box>
            </StyledBox>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ ...styles.BottomContainerCSS, mt: { xs: "40px", md: "60px" } }}>
        <Box
          sx={{
            ...styles.infoSection,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            marginTop: { xs: "20px", md: "50px" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          <Box sx={{ ...styles.leftInfo, marginBottom: { xs: "20px", md: "0" } }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "30px", md: "30px" },
                fontWeight: "500",
                mt: { xs: "20px", md: 0 },
                mb: { xs: "20px", md: "40px" },
              }}
            >
              {ourRangeOfSeqriteinfoData?.[0]?.title}
            </Typography>
            <Typography
              variant="h4"
              sx={{
                fontSize: { xs: "24px", md: "80px" },
                textAlign: { xs: "center", md: "left" },
                fontWeight: "700",
                textWrap: "nowrap",
              }}
            >
              We provide {ourRangeOfSeqriteinfoData?.[0]?.serviceName}
              <br />
              Consulting, Solutions
              <br />
              And Services
            </Typography>
          </Box>
          <Divider
            orientation="vertical"
            flexItem
            sx={{
              ...styles.divider,
              display: { xs: "none", md: "block" },
            }}
          />

          <Box sx={{ ...styles.rightInfo }}>
            <Typography variant="body1" sx={styles.rightInfo["& body1"]}>
              {ourRangeOfSeqriteinfoData?.[0]?.subTitle}
            </Typography>
            <Typography variant="body1" sx={styles.rightInfo["& body1"]}>
              {ourRangeOfSeqriteinfoData?.[0]?.description}
            </Typography>
            <Typography variant="body1" sx={styles.rightInfo["& body1"]}>
              {ourRangeOfSeqriteinfoData?.[0]?.bottomdesc}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OurRangeOfCommonService;
