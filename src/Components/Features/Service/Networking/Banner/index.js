import { Box, Typography } from "@mui/material";
import styles from "./style";

const NetworkingBanner = ({ bannerData }) => {
  const { title, subTitle } = bannerData?.[0];

  const getDynamicLines = (text) => {
    const words = text.split(" ");
    const firstLine = words.slice(0, 4).join(" ");
    const secondLine = words.slice(4).join(" ");
    return { firstLine, secondLine };
  };

  const { firstLine, secondLine } = getDynamicLines(subTitle);

  return (
    <Box sx={styles.container}>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src={`${bannerData?.[0].videourl}`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <Box sx={styles.contentContainer}>
        <Typography variant="h6" sx={styles.contentContainer["& h6"]}>
          {title}
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontSize: "45px",
            fontWeight: 800,
            lineHeight: "54px",
            display: "block",
          }}
        >
          {firstLine}
          <br />
          <Typography
            variant="h2"
            sx={{
              fontSize: "35px",
              fontWeight: 400,
              lineHeight: "44px",
            }}
          >
            {secondLine}
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default NetworkingBanner;
