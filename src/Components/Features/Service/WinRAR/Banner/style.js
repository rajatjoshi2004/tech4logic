const styles = {
  ContainerCSS: {
    position: "relative",
    width: "100%",
    height: "70vh",
    overflow: "hidden",
    display: "flex",
    alignItems: "flex-end",
    padding: "20px",
    boxSizing: "border-box",
    zIndex: 1,
    "@media (max-width: 600px)": {
      height: "50vh",
    },
    "@media (max-width: 960px)": {
      height: "60vh",
    },
    "@media (max-width: 1280px)": {
      height: "70vh",
    },
    "@media (min-width: 1281px)": {
      height: "80vh",
    },
  },
  videoStyle: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    zIndex: -1,
  },
  contentContainer: {
    position: "relative",
    color: "#fff",
    zIndex: 2,
    maxWidth: "650px",
    marginBottom: "50px",
    // background: "#06060638",
    "@media (max-width: 600px)": {
      maxWidth: "300px",
    },
    "@media (max-width: 960px)": {
      maxWidth: "400px",
    },
    padding: "0 20px",
    "& h2": {
      fontWeight: 500,
      display: "flex",
      alignItems: "center",
      fontSize: "70px",
      flexDirection: "column",
      textAlign: "center",
      "@media (max-width: 600px)": {
        fontSize: "30px",
      },
      "@media (max-width: 960px)": {
        fontSize: "40px",
      },
      "@media (max-width: 1280px)": {
        fontSize: "50px",
      },
      "@media (min-width: 1281px)": {
        fontSize: "60px",
      },
    },
  },
  logoContainer: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20px",
    "@media (max-width: 600px)": {
      marginTop: "10px",
    },
  },
  partnerText: {
    marginLeft: "20px",
    verticalAlign: "middle",
    "@media (max-width: 600px)": {
      marginLeft: "10px",
    },
  },
  buttonContainer: {
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "transparent",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "25px",
    textTransform: "none",
    border: "2px solid rgba(255, 153, 0, 1)",
    "&:hover": {
      backgroundColor: "transparent",
    },
    "@media (max-width: 600px)": {
      padding: "8px 15px",
    },
  },
};

export default styles;
