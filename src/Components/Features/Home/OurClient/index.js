import React, { useMemo } from "react";
import { Box, Button, Card, CardContent, Grid, IconButton, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import styles from "./style";

const IoArrowForwardCircleOutline = dynamic(() =>
  import("react-icons/io5").then((mod) => mod.IoArrowForwardCircleOutline)
);
const MdOutlineArrowOutward = dynamic(() =>
  import("react-icons/md").then((mod) => mod.MdOutlineArrowOutward)
);

const OurClientComponent = ({ clientData }) => {
  const clientCards = useMemo(
    () =>
      clientData.map((client) => (
        <Grid item xs={12} sm={6} md={4} key={client._id}>
          <Card
            sx={{
              ...styles.cardContainer,
              "&:hover": {
                transition:
                  "background-image 1s ease-in-out, color 1s ease-in-out, opacity 1s ease-in-out",
                backgroundImage: `url(${client.backgroundImage})`,
              },
            }}
          >
            <Box sx={styles.cardContentContainer} />
            <CardContent sx={styles.cardContentCSS}>
              <Typography variant="h5" sx={styles.cardContentCSS["& h5"]}>
                {client.title}
              </Typography>
              <Typography variant="body2" sx={styles.cardContentCSS["& body2"]}>
                {client.description}
              </Typography>
            </CardContent>
            <Box sx={styles.CardIconConatiner}>
              <IconButton sx={styles.iconButtonCSS}>
                <IoArrowForwardCircleOutline style={{ width: "41px", height: "41px" }} />
              </IconButton>
            </Box>
          </Card>
        </Grid>
      )),
    [clientData]
  );

  return (
    <Box sx={styles.container}>
      <Box sx={styles.SubContainer}>
        <Typography variant="h6" sx={styles.SubContainer["& h6"]}>
          Our Clients
        </Typography>
      </Box>

      <Box sx={{ ...styles.ContentContainer, textAlign: "left" }}>
        <Typography variant="h3" sx={styles.ContentContainer["& h3"]}>
          The Work We Have Done
        </Typography>
        <Button variant="contained" endIcon={<MdOutlineArrowOutward />}>
          View More
        </Button>
      </Box>

      <Grid
        container
        spacing={4}
        sx={{
          ...styles.gridContainerCSS,
          mt: { xs: "20px", md: "40px" },
          "& > .MuiGrid-item": {
            paddingLeft: { xs: "0px", md: "16px" },
            paddingRight: { xs: "0px", md: "16px" },
          },
        }}
      >
        {clientCards}
      </Grid>
    </Box>
  );
};

export default OurClientComponent;
