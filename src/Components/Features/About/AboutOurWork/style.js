const styles = {
  container: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    mt: { xs: 6, md: "8px" },
    mb: { xs: 6, md: "20px" },
    padding: { xs: "20px", sm: "30px", md: "50px" },
    maxWidth: "1400px",
    margin: "0 auto",
    gap: "60px",
  },
  leftSectionCard: {
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: "5px",
    "& h5": {
      fontSize: { xs: "20px", md: "24px" },
      fontWeight: "700",
    },
    "& body1": {
      fontSize: { xs: "14px", md: "16px" },
      fontWeight: "400",
      color: "rgba(255, 255, 255, 0.7)",
    },
  },
  rightSectionCard: {
    padding: { xs: "20px", md: 0 },
    display: "flex",
    flexDirection: "column",
    color: "#fff",
    gap: "20px",
    "& body1": {
      fontSize: { xs: "16px", md: "18px" },
      fontWeight: "400",
      color: "rgba(62, 87, 167, 1)",
    },
    "& h3": {
      fontSize: { xs: "24px", md: "48px" },
      fontWeight: "700",
      mb: { xs: "20px", md: "40px" },
      mt: { xs: "5px", md: "10px" },
      color: "#fff",
    },
  },
  descriptionCard: {
    marginBottom: "20px",
    color: "#fff",
    fontSize: { xs: "14px", md: "16px" },
    fontWeight: "400",
    "& body1": {
      color: "rgba(255, 255, 255, 0.7)",
      fontSize: { xs: "14px", md: "22px" },
      lineHeight: "1.6",
      fontWeight: "400",
    },
  },
  buttonCSS: {
    background: "rgba(62, 87, 167, 1)",
    marginTop: "20px",
    width: "auto",
    alignSelf: "flex-start",
    borderRadius: "15px",
    paddingX: "20px",
    fontSize: { xs: "14px", md: "16px" },
  },
};

export default styles;
