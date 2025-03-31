const styles = {
  containerCSS: {
    "& .MuiDrawer-paper": {
      backgroundColor: "rgba(30, 28, 48, 1)",
      color: "#fff",
      width: "100%",
      transition: "transform 0.5s ease-in-out",
    },
  },
  iconContainerCSS: {
    position: "absolute",
    top: "10px",
    right: "10px",
    color: "#fff",
  },
  ListItemButtonCSS: {
    display: "flex",
    justifyContent: "center",
    mb: "20px",
    "&:hover": { transform: "scale(1.05)", transition: "all 0.3s ease" },
  },
  dividerCSS: {
    border: "1px solid rgba(255, 255, 255, 0.2)",
    mb: "20px",
    mt: "20px",
  },
  menuItemsCSS: {
    display: "flex",
    alignItems: "center",
    padding: "10px 20px",
    borderRadius: "8px",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      transform: "translateX(5px)",
      transition: "all 0.3s ease",
    },
  },
  logoContainerCSS: {
    display: "flex",
    alignItems: "center",
    mr: 2,
    svg: {
      fill: "#fff",
      transition: "fill 0.3s ease",
    },
  },
  buttonContainer: {
    position: "fixed",
    bottom: "20px",
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "center",
    padding: "0 20px",
    "& button": {
      width: "100%",
      background: "linear-gradient(93.53deg, #3E57A7 11.57%, #86CDB6 99.84%)",
      color: "#fff",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "10px",
      borderRadius: "25px",
      transition: "all 0.3s ease",
      "&:hover": {
        backgroundColor: "rgba(110, 180, 158, 1)",
        boxShadow: "0px 6px 16px rgba(233, 30, 99, 0.8)",
      },
    },
  },
};

export default styles;
