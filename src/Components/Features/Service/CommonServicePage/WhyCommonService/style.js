const styles = {
  containerCSS: {
    paddingX: { xs: "20px", sm: "30px", md: "120px" },
    marginBottom: "30px",
    color: "#fff",
    marginTop: "40px",
    borderRadius: "8px",
    "& h4": {
      fontWeight: "600",
      fontSize: { xs: "28px", md: "40px" },
      textAlign: "center",
      display: "flex",
      flexDirection: "row",
    },
    "& body1": {
      marginBottom: "20px",
      fontWeight: "400",
      fontSize: { xs: "16px", md: "28px" },
      textAlign: "center",
    },
    "& img": {
      objectFit: "contain",
      marginBottom: "5px",
      color: "#fff",
      marginLeft: "10px",
      marginRight: "10px",
    },
  },
  cardContainerCSS: {
    width: "100%",
    height: "340px",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#fff",
    padding: "20px",
    border: "1px solid #DA291C",
    transition: "transform 0.3s ease-in-out, background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    "&:hover": {
      transform: "translateY(-10px) scale(1.05)",
      background: "#DA291C",
      boxShadow: "0px 12.97px 83.89px 0px #0089D6",
      color: "#fff",
      filter: "drop-shadow(0 0 5px rgba(255, 153, 0, 0.5))",
      "& img": {
        filter: "brightness(0) invert(1)"  
      },
    },
    "& img": {
      objectFit: "contain",
      width: "100px",
      height: "100px",
      transition: "filter 0.3s ease-in-out",
      filter: "brightness(0) invert(1)",
    },
    "& h6": {
      fontSize: "20px",
      fontWeight: 600,
      marginTop: "15px",
      mb: "3px",
    },
    "& body2": {
      marginTop: "12px",
      fontSize: "14px",
    },
  },
};

export default styles;
