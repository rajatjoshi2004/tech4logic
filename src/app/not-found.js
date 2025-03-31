"use client";

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const NotFoundPage = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#000",
        padding: "20px",
        textAlign: "center",
      }}
    >
      {/* Motion wrapper for animation */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "72px", sm: "96px" },
            fontWeight: "bold",
            color: "#ff5252",
          }}
        >
          404
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: "18px", sm: "24px" },
            color: "#666",
            marginBottom: "20px",
          }}
        >
          Oops! The page you're looking for doesn't exist.
        </Typography>

        {/* Floating animation */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2,
          }}
        >
          <Button
            onClick={handleGoHome}
            sx={{
              padding: "10px 20px",
              fontSize: { xs: "14px", sm: "16px" },
              backgroundColor: "#ff5252",
              color: "#fff",
              "&:hover": {
                backgroundColor: "#ff1744",
              },
            }}
          >
            Go Home
          </Button>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default NotFoundPage;
