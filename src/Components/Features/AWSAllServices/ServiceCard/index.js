import React from "react";
import { Box, Typography, Grid, Divider } from "@mui/material";
import { AWSAnylticsCardData } from "@/utils/common";
import styles from "../../Service/AWS/WhyAWS/style";
import Image from "next/image";
import AwsStyles from "./style";

export const ServiceCardSection = () => {
  return (
    <Box
      sx={{
        padding: { xs: "20px", md: "40px" },
        maxWidth: "1400px",
        width: "100%",
        margin: "0 auto",
        color: "#fff",
        textAlign: "left",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "center" },
          marginBottom: "30px",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: "28px", md: "45px" },
            fontWeight: "bold",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Why Choose AWS Analytics?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "14px", md: "20px" },
            maxWidth: { xs: "100%", md: "500px" },
            textAlign: { xs: "center", md: "right" },
            mt: { xs: "20px", md: 0 },
          }}
        >
          We deliver cutting-edge AWS Analytics services, enabling organizations to unlock the power
          of data-driven insights.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {[
          "Broadest selection of analytics services",
          "Reduce downtime & improve capacity utilization",
          "Price-performant ",
        ].map((title, index) => (
          <Grid
            item
            xs={12}
            sm={4}
            key={index}
            sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: "20px" }}
          >
            <Box
              sx={{
                padding: "20px",
                border: "1px solid transparent",
                position: "relative",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  marginBottom: "10px",
                  color: "#FF9900",
                }}
              >
                {title}
              </Typography>

              <Typography variant="body2">
                Each analytics service is purpose-built for a wide range of analytics use cases such
                as interactive analysis, big data processing, data warehousing, real-time analytics,
                operational analytics, dashboards, and visualizations.
              </Typography>
            </Box>
            {index < 2 && (
              <Divider
                orientation="vertical"
                flexItem
                sx={{ borderColor: "#FF9900", margin: "0 20px" }}
              />
            )}
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: "40px", mb: "30px" }}>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "24px", md: "40px" },
            fontWeight: "500",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          We offer a full range of services beyond those covered below that help businesses collect,
          store, process, and analyze data for various purposes. Here are some:
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {AWSAnylticsCardData?.map((card) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={card.id}>
            <Box sx={styles.cardContainerCSS}>
              <Box
                sx={{
                  ...AwsStyles.imageCSS,
                }}
              >
                <Image
                  src={card.src}
                  alt={card.alt}
                  width={100}
                  height={100}
                  style={{ transition: "filter 0.3s ease" }}
                />
              </Box>
              <Typography variant="h6">{card.title}</Typography>
              <Typography variant="body2">{card.description}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
