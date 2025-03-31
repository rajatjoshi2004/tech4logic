import React from "react";
import { Box, Divider, Typography, Card, CardContent, CardMedia } from "@mui/material";
import Image from "next/image";
import styles from "./style";

const ContactDetails = ({ ContactDetailsdata }) => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.header}>
        <Typography variant="h2" sx={styles.title}>
          Contact Details
        </Typography>
        <Divider sx={styles.divider} />
      </Box>

      <Box sx={styles.contactContainer}>
        {ContactDetailsdata?.map((detail) => (
          <Card key={detail?._id} sx={styles.card}>
            <CardMedia component="div" sx={styles.cardMedia}>
              <Image src={detail.contactIcon} width={60} height={60} alt="Contact Icon" />
            </CardMedia>
            <CardContent sx={styles.cardContent}>
              <Typography variant="h6">{detail.contactInfo}</Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ContactDetails;
