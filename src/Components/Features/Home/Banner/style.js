const styles = {
  container: {
    position: "relative",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
  },
  contentContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    textWrap: { xs: "nowrap" },
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
    },
    "& body1": {
      fontSize: { xs: "13px", sm: "14px", md: "15px" },
      fontWeight: "400",
      textWrap: { xs: "balance" },
      mb: 4,
    },
  },
  knowbtnCSS: {
    color: "#fff",
    background: "linear-gradient(93.53deg, #3E57A7 11.57%, #86CDB6 99.84%)",
    textTransform: "none",
    fontSize: { xs: "16px", md: "19px" },
    borderRadius: "10px",
    padding: { xs: "12px 10px", md: "16px 14px" },
    "&:hover": {
      backgroundColor: "rgba(110, 180, 158, 1)",
    },
  },
  getTouchBtnCSS: {
    border: "2px solid rgba(134, 205, 182, 1)",
    color: "#86CDB6",
    lineHeight: "22px",
    background: "#12111D",
    fontSize: { xs: "16px", md: "19px" },
    fontWeight: "500",
    borderRadius: "10px",
    textTransform: "none",
    padding: { xs: "12px 10px", md: "16px 14px" },
    "&:hover": {
      backgroundColor: "#12111D",
    },
  },
};

export default styles;
