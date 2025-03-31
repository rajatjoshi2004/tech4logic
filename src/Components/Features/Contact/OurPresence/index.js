import React from "react";
import { Box, Divider, Typography, Card, CardContent } from "@mui/material";
import styles from "./style";

const OurPresence = ({ OurPresenceData }) => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.header}>
        <Typography variant="h2" sx={styles.title}>
          Our Presence
        </Typography>
        <Divider sx={styles.divider} />
      </Box>

      <Box sx={styles.addressContainer}>
        {OurPresenceData?.map((address) => {
          return (
            <Card key={address?._id} sx={styles.card}>
              <CardContent sx={styles.cardContent}>
                <Typography variant="h6" sx={styles.cardContent["& h6"]}>
                  {address?.city}
                </Typography>
                <Typography variant="body1" sx={styles.cardContent["& body1"]}>
                  {address?.fullAddress}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};

export default OurPresence;
