import { Box, Grid, Typography } from "@mui/material";
import Image from "next/image";
import styles from "./style";

const CardComponent = ({ carddataValue }) => {
  return (
    <Box sx={styles.containerCSS}>
      <Grid container spacing={8} justifyContent="center">
        {carddataValue?.[0]?.CloudCardInfo?.map((card) => (
          <Grid item xs={14} sm={6} md={4} key={card?._id} data-aos="fade-up">
            <Box sx={styles.cardCSS}>
              <Image
                src={card?.cardImageUrl}
                alt={card?.title}
                width={158}
                height={156}
                loading="lazy"
                style={styles.imageCSS}
              />
              <Typography variant="h6" sx={styles.cardCSS["& h6"]}>
                {card?.title}
              </Typography>
              <Typography variant="body2" sx={styles.cardCSS["& body2"]}>
                {card?.description}
              </Typography>
              {/* <Box
                sx={{
                  position: "relative",
                  top: "-110px",
                  left: "-98px",
                  transform: "translateY(-50%)",
                  width: "165px",
                  height: "165px",
                  borderLeft: "2px solid #86CDB6",
                  borderRadius: "165px 0 0 165px",
                  backgroundColor: "transparent",
                }}
                data-aos="fade-right" 
              /> */}
            </Box>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ mt: "90px", mb: "60px" }} data-aos="fade-up">
        <Typography variant="h2" sx={{ fontSize: "80px", fontWeight: "600", color: "#fff" }}>
          Remember, at Tech4logic,
          <br /> we don’t just route packets;
        </Typography>
        <Typography
          variant="h2"
          sx={{
            background: "linear-gradient(93.65deg, #3E57A7 -2.59%, #86CDB6 105.31%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "80px",
            fontWeight: "600",
          }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {carddataValue?.[0]?.subTitle}
        </Typography>
      </Box>
    </Box>
  );
};

export default CardComponent;
