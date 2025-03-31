import { Box, Typography } from "@mui/material";
import styles from "./style";

const BlogDetailsPageBanner = ({ image, title }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        ...styles.container,
      }}
    >
      <Box sx={styles.contentContainer}>
        <Typography variant="h1" sx={styles.contentTitle}>
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default BlogDetailsPageBanner;
