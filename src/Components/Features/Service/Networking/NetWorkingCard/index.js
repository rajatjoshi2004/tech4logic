import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Image from "next/image";
import styles from "./style";

const CardComponent = () => {
  const cardData = [
    {
      id: 1,
      title: `Infrastructure Alchemy: From Packets to Possibilities`,
      description: `Our architects weave a fabric of switches, routers, and access points —the very warp and weft of connectivity. VLANs dance, and subnets harmonize. Software-defined magic— routing without borders. WAN optimization, failover incantations, and zero-touch deployments. Light pulses whisper secrets. Our fiber links span campuses, cities, and dimensions.`,
      imageSrc:
        "https://tech4logic-images.s3.ap-south-1.amazonaws.com/Images/Service/CardSubImage.svg",
    },
    {
      id: 2,
      title: `Infrastructure Alchemy: From Packets to Possibilities`,
      description: `Our architects weave a fabric of switches, routers, and access points —the very warp and weft of connectivity. VLANs dance, and subnets harmonize. Software-defined magic— routing without borders. WAN optimization, failover incantations, and zero-touch deployments. Light pulses whisper secrets. Our fiber links span campuses, cities, and dimensions.`,
      imageSrc: "https://tech4logic-images.s3.ap-south-1.amazonaws.com/Images/Service/Network1.svg",
    },
    {
      id: 3,
      title: `Infrastructure Alchemy: From Packets to Possibilities`,
      description: `Our architects weave a fabric of switches, routers, and access points —the very warp and weft of connectivity. VLANs dance, and subnets harmonize. Software-defined magic— routing without borders. WAN optimization, failover incantations, and zero-touch deployments. Light pulses whisper secrets. Our fiber links span campuses, cities, and dimensions.`,
      imageSrc: "https://tech4logic-images.s3.ap-south-1.amazonaws.com/Images/Service/Network2.svg",
    },
    {
      id: 4,
      title: `Infrastructure Alchemy: From Packets to Possibilities`,
      description: `Our architects weave a fabric of switches, routers, and access points —the very warp and weft of connectivity. VLANs dance, and subnets harmonize. Software-defined magic— routing without borders. WAN optimization, failover incantations, and zero-touch deployments. Light pulses whisper secrets. Our fiber links span campuses, cities, and dimensions.`,
      imageSrc: "https://tech4logic-images.s3.ap-south-1.amazonaws.com/Images/Service/Network3.svg",
    },
    {
      id: 5,
      title: `Infrastructure Alchemy: From Packets to Possibilities`,
      description: `Our architects weave a fabric of switches, routers, and access points —the very warp and weft of connectivity. VLANs dance, and subnets harmonize. Software-defined magic— routing without borders. WAN optimization, failover incantations, and zero-touch deployments. Light pulses whisper secrets. Our fiber links span campuses, cities, and dimensions.`,
      imageSrc: "https://tech4logic-images.s3.ap-south-1.amazonaws.com/Images/Service/Network4.svg",
    },
    {
      id: 6,
      title: `Infrastructure Alchemy: From Packets to Possibilities`,
      description: `Our architects weave a fabric of switches, routers, and access points —the very warp and weft of connectivity. VLANs dance, and subnets harmonize. Software-defined magic— routing without borders. WAN optimization, failover incantations, and zero-touch deployments. Light pulses whisper secrets. Our fiber links span campuses, cities, and dimensions.`,
      imageSrc:
        "https://tech4logic-images.s3.ap-south-1.amazonaws.com/Images/Service/CardSubImage.svg",
    },
  ];

  return (
    <Box sx={styles.containerCSS}>
      <Grid container spacing={8} justifyContent="center">
        {cardData.map((card) => (
          <Grid item xs={14} sm={6} key={card.id}>
            <Box sx={styles.cardCSS}>
              <Image
                src={card.imageSrc}
                alt={card.title}
                width={208}
                height={186}
                loading="lazy"
                style={styles.imageCSS}
              />
              <Typography variant="h6" sx={styles.cardCSS["& h6"]}>
                {card.title}
              </Typography>
              <Typography variant="body2" sx={styles.cardCSS["& body2"]}>
                {card.description}
              </Typography>
              <Box
                sx={{
                  position: "relative",
                  top: "-50px",
                  left: "-98px",
                  transform: "translateY(-50%)",
                  width: "165px",
                  height: "165px",
                  borderLeft: "2px solid #86CDB6",
                  borderRadius: "165px 0 0 165px",
                  backgroundColor: "transparent",
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: "90px", mb: "60px" }}>
        <Typography variant="h2" sx={{ fontSize: "80px", fontWeight: "600", color: "#fff" }}>
          Remember, at Tech4logic,
          <br /> we don’t just route packets;
        </Typography>
        <Typography
          variant="h2"
          sx={{
            background: "linear-gradient(93.65deg, #3E57A7 -2.59%, #86CDB6 105.31%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "80px",
            fontWeight: "600",
          }}
        >
          we shape destinies.
        </Typography>
      </Box>
    </Box>
  );
};

export default CardComponent;
