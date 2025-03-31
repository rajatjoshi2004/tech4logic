import { Box, Typography } from "@mui/material";
import styles from "./style";

const AboutDetails = ({ aboutDetailsdata }) => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.subContainer}>
        <Box sx={styles.contentContainer}>
          <Typography variant="h6" sx={styles.contentContainer["& h6"]}>
            {aboutDetailsdata?.title}
          </Typography>
          <Typography variant="h1" sx={styles.contentContainer["& h1"]}>
            {aboutDetailsdata?.subTitle}
          </Typography>
          <Typography variant="body1" sx={styles.contentContainer["& body1"]}>
            {aboutDetailsdata?.description}
          </Typography>
        </Box>

        <Box sx={styles.rightSectionImageCSS}>
          <Box
            sx={{
              ...styles.ImageContainer,
              backgroundImage: `url(${aboutDetailsdata?.detailsImageUrl})`,
            }}
          />
        </Box>
      </Box>

      <Box sx={styles.dataCardCSS}>
        <Box sx={styles.DataContainer}>
          {aboutDetailsdata?.detailsData?.map((item) => (
            <Box key={item?._id} sx={styles.DataCardList}>
              <Typography variant="h6" sx={styles.DataCardList["& h6"]}>
                {item?.value}
              </Typography>
              <Typography variant="body2">{item?.description}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default AboutDetails;
