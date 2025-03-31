import { Box, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./style";

const CareersDetails = ({ tech4LogicCardData }) => {
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
        <Box sx={styles.TextContainer}>
          <Typography sx={styles.TextContainer["& body1"]} variant="body1">
            At Tech4Logic, we’re passionate about innovation and creativity in the digital
            landscape. As a leading provider of graphic design, web design, and digital marketing
            solutions, we believe that our success is driven by our talented team. We're always
            looking for motivated individuals who thrive in a collaborative environment and are
            eager to make an impact.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CareersDetails;
