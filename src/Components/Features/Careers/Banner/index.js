import { Box, Typography } from "@mui/material";
import styles from "./style";

const CareersBanner = ({ bannerData }) => {
  const { title, subTitle, description } = bannerData?.[0] || {};

  return (
    <Box
      sx={{
        ...styles.container,
        backgroundImage: `url(https://tech4logic-images.s3.ap-south-1.amazonaws.com/Images/Service/Career_Bg.jpeg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content Box */}
      <Box sx={styles.contentContainer}>
        {/* Title */}
        <Typography variant="h6" sx={styles.contentContainer["& h6"]}>
          Tech4logic Career:
        </Typography>

        {/* Subtitle */}
        <Typography variant="h1" sx={styles.contentContainer["& h1"]}>
          Join Our Team
          <br />
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "18px", sm: "28px", md: "35px" },
              fontWeight: 400,
              lineHeight: { xs: "26px", sm: "34px", md: "44px" },
            }}
          >
            At Tech4Logic
          </Typography>
        </Typography>

        {/* Description */}
        <Typography variant="body1" sx={{ fontSize: "18px", mt: 2 }}>
          where innovation meets opportunity <br /> in the world of digital solutions.
        </Typography>
      </Box>
    </Box>
  );
};

export default CareersBanner;
