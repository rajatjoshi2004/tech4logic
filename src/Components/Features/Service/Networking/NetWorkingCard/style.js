const styles = {
  containerCSS: {
    flexGrow: 1,
    padding: "20px",
    maxWidth: "1400px",
    margin: "0 auto",
  },
  cardCSS: {
    width: "100%",
    height: "447px",
    maxHeight: "600px",
    background: "linear-gradient(90deg, #291F65 0%, #004844 100%)",
    position: "relative",
    borderRadius: "8px",
    overflow: "visible",
    padding: "40px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    border: "1px solid #86CDB6",
    color: "#fff",
    transition: "box-shadow 0.3s ease, transform 0.3s ease",
    "&:hover": {
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
      transform: "translateY(-10px)",
    },
    "& h6": {
      maxWidth: "400px",
      fontSize: "34px",
      fontWeight: "600",
      marginBottom: "10px",
    },
    "& body2": {
      fontSize: "16px",
      fontWeight: "400",
      color: "#B8B8B8",
    },
  },
  imageCSS: {
    position: "absolute",
    top: "-50px",
    right: "-20px",
    objectFit: "cover",
  },
};

export default styles;
