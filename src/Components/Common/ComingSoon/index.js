"use client";

import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const ComingSoonComponent = () => {
  const router = useRouter();

  return (
    <Box
      sx={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "40px",
      }}
    >
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h3"
              sx={{
                background: "linear-gradient(45deg, #f3ec78, #af4261)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "bold",
                mb: 2,
                fontSize: { xs: "45px", md: "85px" },
              }}
            >
              Coming Soon!
            </Typography>
          </motion.div>
        </Grid>
        <Grid item xs={12}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "#ccc",
                mt: 2,
                fontSize: { xs: "14px", md: "18px" },
              }}
            >
              We’re working on something exciting. Stay tuned for updates!
            </Typography>
          </motion.div>
        </Grid>
        <Grid item xs={12}>
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.8 }}>
            <Button
              variant="contained"
              sx={{
                color: "#fff",
                mt: 3,
                background: "linear-gradient(93.53deg, #3E57A7 11.57%, #86CDB6 99.84%)",
                textTransform: "none",
                fontSize: { xs: "16px", md: "19px" },
                width: "200px",
                borderRadius: "10px",
                padding: { xs: "12px 10px", md: "16px 14px" },
                "&:hover": {
                  backgroundColor: "rgba(110, 180, 158, 1)",
                },
              }}
              onClick={() => router.push("/")}
            >
              Notify Me
            </Button>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default React.memo(ComingSoonComponent);
