import { Box, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./style";

const Tech4LogicWithPartners = ({ title, SubTitle }) => {
  return (
    <Box sx={styles.containerCSS}>
      <Box sx={styles.ImageConatiner}>
        <Image
          src="https://tech4logic-images.s3.ap-south-1.amazonaws.com/Images/Service/NetworkingAboutT.svg"
          alt="Tech4Logic Image"
          width={491}
          height={541}
          style={{ position: "relative", top: "-165px", objectFit: "cover", zIndex: 1 }}
        />
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Typography sx={styles.ImageConatiner["& h1"]} variant="h1">
            {title}
          </Typography>
          <Typography sx={styles.ImageConatiner["& body1"]} variant="body1">
            {SubTitle}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Tech4LogicWithPartners;
