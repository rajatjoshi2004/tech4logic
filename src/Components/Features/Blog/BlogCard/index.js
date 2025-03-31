import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import styles from "./style";

const BlogCard = ({ date, tags, title, description }) => {
  return (
    <Box
      sx={{
        backgroundImage:
          'url("https://tech4logic-images.s3.ap-south-1.amazonaws.com/Images/Service/Blog_info_Card.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: 4,
        padding: { xs: "20px", sm: "40px", md: "80px" },
        color: "white",
        position: "relative",
        margin: "0 auto",
        zIndex: 2,
        ...styles.cardContainer,
      }}
    >
      <Box sx={styles.header}>
        <Typography variant="subtitle2" sx={{ marginRight: "10px" }}>
          {date}
        </Typography>
        <Stack direction="row" spacing={1}>
          {tags?.map((tag, index) => (
            <Typography key={index} variant="subtitle2" sx={styles.tag}>
              {tag}
            </Typography>
          ))}
        </Stack>
      </Box>

      <Typography variant="h5" sx={styles.title}>
        {title}
      </Typography>

      <Typography variant="body2" sx={styles.description}>
        {description}
      </Typography>

      <Button variant="contained" sx={styles.readMoreButton}>
        Read More
      </Button>
    </Box>
  );
};

export default BlogCard;

