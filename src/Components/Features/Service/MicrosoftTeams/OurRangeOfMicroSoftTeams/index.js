"use client";

import { Box, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./style";
import Aos from "aos";
import "aos/dist/aos.css";

const OurRangeOfMicroSoftTeamsCloudServices = ({ OurRangeOfMicroSoftteamsinfoData }) => {
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
            src="https://tech4logic-images.s3.ap-south-1.amazonaws.com/Images/Service/microsoft-teams-logo.svg"
            alt="MicroSoft Teams Logo"
            width={470}
            height={135}
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
        {OurRangeOfMicroSoftteamsinfoData?.[0]?.MicroSoftTeamsCloudCard?.map((card) => (
          <Grid item xs={12} sm={6} key={card?._id}  data-aos="zoom-in-up">
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
                  src="https://tech4logic-images.s3.ap-south-1.amazonaws.com/Images/Service/MicroSoftLogonew.svg"
                  alt="MicroSoft Teams Logo"
                  width={184}
                  height={40}
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
                </Box>
              </Box>
            </Box>
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
              Looking for a particular Microsoft Team service that's not mentioned above?{" "}
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
              We provide Microsoft
              <br />
              Team Consulting,
              <br />
              Solutions And
              <br />
              Services
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
              Tech4logic offer a full range of Microsoft Team services beyond those covered above.{" "}
            </Typography>
            <Typography variant="body1" sx={styles.rightInfo["& body1"]}>
              Tech4Logic team of Microsoft Team Professionals can help you stay up-to-date with the
              latest Microsoft Team innovations.
            </Typography>
            <Typography variant="body1" sx={styles.rightInfo["& body1"]}>
              Choose Tech4Logic as your end-to-end Tech partner, and experience the difference that
              people-powered solutions can make.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default OurRangeOfMicroSoftTeamsCloudServices;
