const styles = {
  containerCSS: {
    maxWidth: "1400px",
    width: "100%",
    margin: "0 auto",
    padding: { xs: "20px", sm: "30px", md: "50px" },
    color: "#fff",
    mt: { xs: 4, md: 6 },
    mb: { xs: 6, md: 6 },
    "& h2": {
      fontSize: { xs: "28px", md: "48px" },
      fontWeight: "700",
      color: "#fff",
    },
    "& body1": {
      fontSize: { xs: "14px", md: "16px" },
      fontWeight: "400",
      marginBottom: "40px",
      color: "rgba(255, 255, 255, 0.7)",
    },
  },
  cardContainer: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: { xs: "center", md: "space-between" },
  },
  cardSubContainerCSS: {
    width: { xs: "100%", md: "420px" },
    height: { xs: "auto", md: "auto" },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(124.99deg, #3E57A7 -0.52%, #86CDB6 99.22%)",
    borderRadius: "10px",
    transition: "0.3s",
    padding: { xs: "15px", md: "20px" },
    "&:hover": { transform: "scale(1.05)", boxShadow: 2 },
    color: "#fff",
    "& h6": {
      fontSize: { xs: "18px", md: "23px" },
      fontWeight: "500",
      marginBottom: "10px",
    },
    "& body2": {
      fontSize: { xs: "14px", md: "15px" },
      fontWeight: "300",
    },
  },
};

export default styles;
