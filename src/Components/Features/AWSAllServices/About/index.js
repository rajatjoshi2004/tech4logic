import React from "react";
import { Box, Typography } from "@mui/material";

export const AboutSection = () => {
  return (
    <Box
      sx={{
        padding: "40px",
        maxWidth: "1400px",
        width: "100%",
        margin: "0 auto",
        color: "#fff",
        textAlign: "left",
      }}
    >
      <Typography
        variant="h2"
        sx={{ fontSize: { xs: "40px", md: "55px" }, fontWeight: "bold", marginBottom: "20px" }}
      >
        About Tech4Logic
      </Typography>
      <Typography variant="body1" sx={{ fontSize: { xs: "16px", md: "20px" }, margin: "0 auto" }}>
        Tech4Logic is committed to elevating your AWS Analytics journey. Our mission is to equip
        organizations, irrespective of size, with essential tools for unlocking the full potential
        of data-driven insights. Our all-inclusive services manage intricacies, hardware, costs, and
        IT infrastructure, freeing you to focus on your unique business needs. We tailor solutions
        to transform your data into a strategic advantage through streamlined services.
      </Typography>
    </Box>
  );
};
