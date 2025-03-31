"use client";

import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";

const StyledBox = styled(Box)(({ boxhoverColor, borderColor }) => ({
  width: "100%",
  height: "340px",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  color: "#fff",
  padding: "20px",
  border: `1px solid ${borderColor || "#DA291C"}`,
  transition:
    "transform 0.3s ease-in-out, background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-10px) scale(1.05)",
    backgroundColor: boxhoverColor || "#DA291C",
    boxShadow: "0px 12.97px 83.89px 0px #0089D6",
    color: "#fff",
    filter: "drop-shadow(0 0 5px rgba(255, 153, 0, 0.5))",
    "& img": {
      filter: "brightness(0) invert(1)",
    },
  },
  "& img": {
    objectFit: "contain",
    width: "100px",
    height: "100px",
    transition: "filter 0.3s ease-in-out",
    filter: "brightness(0) invert(1)",
  },
  "& h6": {
    fontSize: "20px",
    fontWeight: 600,
    marginTop: "15px",
    marginBottom: "3px",
  },
  "& body2": {
    marginTop: "12px",
    fontSize: "14px",
  },
}));

const WhyCommonServiceComponent = ({
  whySeqriteInfoData,
  cardType,
  boxhoverColor,
  borderColor,
}) => {
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
        paddingX: { xs: "20px", sm: "30px", md: "120px" },
        marginBottom: "30px",
        color: "#fff",
        marginTop: "40px",
        borderRadius: "8px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          mb: 8,
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "500",
            fontSize: { xs: "48px", md: "55px !important" },
            display: "flex",
            alignItems: "center",
            color: "#fff",
          }}
        >
          Why Choose{" "}
          <Box
            component="span"
            sx={{
              marginLeft: "10px",
              display: "inline-flex",
              verticalAlign: "middle",
            }}
          >
            <Image
              src={whySeqriteInfoData?.[0]?.cardImageUrl}
              alt="Sequrite Logo"
              width={300}
              height={120}
              style={{ marginLeft: "10px" }}
            />
          </Box>
          ?
        </Typography>
      </Box>

      <Grid container spacing={2.5} justifyContent="center">
        {whySeqriteInfoData?.[0]?.CardInfo?.map((card) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={cardType === "three" ? 4 : 6}
            lg={cardType === "three" ? 4 : 6}
            key={card?._id}
            data-aos="fade-up"
          >
            <StyledBox boxhoverColor={boxhoverColor} borderColor={borderColor}>
              <Image src={card?.cardImageUrl} alt={card.alt} width={80} height={80} />
              <Typography variant="h6" sx={{ fontSize: { xs: "18px", md: "20px" }, mt: 2 }}>
                {card?.title}
              </Typography>
              <Typography variant="body2" sx={{ fontSize: { xs: "14px", md: "16px" }, mt: 1 }}>
                {card?.description}
              </Typography>
            </StyledBox>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhyCommonServiceComponent;
