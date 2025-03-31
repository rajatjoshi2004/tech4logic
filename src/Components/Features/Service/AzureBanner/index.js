import { Box, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./style";

const AzureServicesBanner = ({ serviceData }) => {
  return (
    <Box sx={styles.ContainerCSS}>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${serviceData?.[0]?.bannerImageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: -1,
        }}
      />

      <Box sx={styles.contentContainer}>
        <Typography variant="h2" sx={{ color: "white", textAlign: "center" }}>
          {serviceData?.[0]?.title}
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "20px",
              fontSize: { xs: "40px", sm: "60px", md: "80px" },
            }}
          >
            <Image
              src="https://tech4logic-images.s3.ap-south-1.amazonaws.com/Images/Home/Partner/Azure.svg"
              alt="Azure Logo"
              width={300}
              height={280}
              style={{ marginRight: "10px" }}
            />
            {serviceData?.[0]?.subTitle}
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default AzureServicesBanner;
