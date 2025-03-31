const style = {
  codeCopybtn: {
    color: "white",
    position: "absolute",
    right: "10px",
    top: "-2px",
    fontSize: "1.5em",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
      opacity: "0.9",
    },
  },
  detailsComment: {
    "& h2": {
      marginTop: "30px",
      color: "#183B56",
      fontSize: "24px",
      fontWeight: "600",
    },
    "& p": {
      marginTop: "30px",
      color: "#183B56",
      "@media(max-width:480px)": {
        fontSize: "14px",
        marginTop: "15px",
      },
    },
    "& ul": {
      marginTop: "30px",
      color: "#183B56",
    },
    "& pre": {
      marginTop: "30px",
      // color: "#183B56",
      // background: "#11cad4",
      // borderRadius: "10px",
    },
    "& img": {
      marginTop: "30px",
      width: "100%",
      borderRadius: "10px",
      "@media(max-width:480px)": {
        marginTop: "0px",
      },
    },
  },
};

export default style;
