const styles = {
    container: {
      position: "relative",
      width: "100%",
      height: "70vh",
      overflow: "hidden",
      borderRadius: { xs: 0, sm: "10px", md: "10px" },
    },
    contentContainer: {
      position: "absolute",
      top: "50%",
      left: "40px",
      transform: "translateY(-50%)",
      textAlign: "left",
      color: "#fff",
      zIndex: 1,
      padding: { xs: 0, sm: "0 20px", md: "0 20px" },
      "& h6": {
        fontSize: { xs: "16px", sm: "20px", md: "23px" },
        color: "rgba(221, 204, 248, 1)",
        fontWeight: "600",
        lineHeight: { xs: "20px", md: "27px" },
        mb: 1,
      },
      "& h1": {
        fontSize: { xs: "22px", sm: "36px", md: "44px" },
        fontWeight: "600",
        mb: 2,
        lineHeight: { xs: "34px", sm: "42px", md: "50px" },
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        WebkitLineClamp: 2,
      },
    },
  };
  
  export default styles;
  