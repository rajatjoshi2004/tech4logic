import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import styles from "../MegaMenuComponent/style";

const SubItemCard = ({ subItem, hovered, onMouseEnter, onMouseLeave, onClick, index }) => {
  return (
    <Grid
      item
      key={subItem?.name}
      sx={{ flex: "0 0 auto", marginRight: "10px" }}
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={onMouseLeave}
    >
      <Card onClick={() => onClick(subItem)} sx={styles.getSubItemContainer}>
        <CardContent sx={styles.cardContainerCSS}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "15px",
            }}
          >
            <Image
              src={hovered ? subItem.Imagepath : subItem.ImageWhitepath}
              alt={`${subItem.name}-white`}
              width={250} // Set a fallback numeric width
              height={200} // Set a fallback numeric height
              style={{ marginRight: "10px" }}
            />
          </Box>
          <Typography variant="body2" sx={styles.cardContainerCSS["& body2"]}>
            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{subItem.description}</ReactMarkdown>
          </Typography>
          <Box sx={styles.buttonConatiner}>
            <Typography variant="body1" sx={styles.buttonConatiner["& body1"]}>
              Know More{" "}
              <HiOutlineArrowLongRight
                style={{ width: "30px", height: "30px", color: "rgba(255, 153, 0, 1)" }}
              />
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default SubItemCard;
