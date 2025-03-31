const AwsStyles = {
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
    border: "1px solid rgba(255, 153, 0, 1)",
    transition:
      "transform 0.3s ease-in-out, background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
    "&:hover": {
      transform: "translateY(-10px) scale(1.05)",
      background: "rgba(255, 153, 0, 1)",
      boxShadow: "0px 12.97px 83.89px 0px rgba(255, 153, 0, 0.4)",
      filter: "drop-shadow(0 0 5px rgba(255, 153, 0, 0.5))",
    },
    "& img": {
      objectFit: "contain",
      width: "100px",
      height: "100px",
    },
    "& h6": {
      fontSize: "16px",
      fontWeight: 600,
      marginTop: "15px",
    },
    "& body2": {
      marginTop: "10px",
      fontSize: "14px",
    },
  },
  imageCSS: {
    transition: "filter 0.3s ease",
    filter: "brightness(0) invert(1)",
  },
};

export default AwsStyles;
