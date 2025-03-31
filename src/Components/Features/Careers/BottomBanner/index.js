import { Box, Typography } from "@mui/material";
import React from "react";

export const BottomBanner = () => {
  return (
    <Box sx={{ mt: 6, textAlign: "center" }}>
      <Typography
        variant="h5"
        sx={{
          color: "#fff", 
          fontWeight: "bold",
          fontSize: "50px",
        }}
      >
        At Tech4Logic, we create opportunities for{" "}
        <span style={{ color: "#fff", fontWeight: "bold" }}>growth</span> and{" "}
        <span style={{ color: "#fff", fontWeight: "bold" }}>innovation</span>. Join us in shaping the future of technology and{" "}
        <span style={{ color: "#fff", fontWeight: "bold" }}>making</span> a real{" "}
        <span style={{ color: "#fff", fontWeight: "bold" }}>impact</span>.
      </Typography>
    </Box>
  );
};
