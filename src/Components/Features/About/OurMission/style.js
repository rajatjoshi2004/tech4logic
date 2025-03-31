const ourMissionstyles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: { xs: "center", md: "space-between" },
    width: "100%",
    minHeight: { xs: "auto", md: "250px" },
    backgroundColor: "rgba(0, 57, 203, 1)",
    color: "rgba(255, 255, 255, 1)",
    padding: { xs: "20px", md: "20px" },
    boxSizing: "border-box",
    flexDirection: { xs: "column", md: "row" },
    gap: { xs: "20px", md: "0px" },
    "& h1": {
      fontSize: { xs: "36px", md: "100px" },
      fontWeight: "250",
      color: "rgba(255, 255, 255, 1)",
      ml: { xs: "0", md: "80px" },
      mr: { xs: "0", md: "80px" },
      textAlign: { xs: "center", md: "left" },
    },
    "& body1": {
      fontSize: { xs: "16px", md: "20px" },
      fontWeight: "400",
      textAlign: { xs: "center", md: "left" },
      width: { xs: "100%", md: "50%" },
      overflow: "visible",
      textOverflow: "ellipsis",
      display: "block",
      mr: { xs: "0", md: "80px" },
      padding: { xs: "10px", md: "20px" },
      boxSizing: "border-box",
      borderRadius: "8px",
      lineHeight: "1.5",
    },
  },
};

export default ourMissionstyles;
