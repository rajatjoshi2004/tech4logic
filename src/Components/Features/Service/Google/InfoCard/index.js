import React from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./style";

const GoogleServiceInfoCard = ({IBMInfoData}) => {
  return (
    <Box
      sx={{
        ...styles.containerCSS,
        background: "linear-gradient(180deg, #0089D6 -18%, #0B081E 150px)",
        overflow: "visible",
      }}
    >
      <Box sx={{ paddingX: { xs: "20px", md: "120px" }, mt: "50px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          {/* Left Side Image */}
          <Box
            sx={{
              width: { xs: "100%", md: "530px" },
              height: { xs: "auto", md: "490px" },
              marginBottom: { xs: "20px", md: "0" },
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image
              src={IBMInfoData?.[0]?.CardImage}
              alt="IBM Info Card"
              width={530}
              height={490}
              style={{ objectFit: "contain" }}
            />
          </Box>

          {/* Right Side Content */}
          <Box
            sx={{
              flex: 1,
              paddingLeft: { md: "40px" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            {/* Title */}
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "#fff",
                fontSize: { xs: "24px", md: "36px" },
                lineHeight: { xs: "30px", md: "45px" },
                marginBottom: "20px",
              }}
            >
              {IBMInfoData?.[0]?.subTitle}
            </Typography>

            {/* Description */}
            <Typography
              variant="body1"
              sx={{
                color: "#fff",
                fontSize: { xs: "16px", md: "18px" },
                lineHeight: { xs: "24px", md: "28px" },
                textAlign: { xs: "center", md: "left" },
                marginBottom: { xs: "10px", md: "20px" },
              }}
            >
              {IBMInfoData?.[0]?.description}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GoogleServiceInfoCard;
