const styles = {
  container: {
    padding: { xs: "20px", sm: "30px", md: "50px" },
    maxWidth: "1400px",
    margin: "0 auto",
    rowGap: "20px",
    "& h6": {
      mb: 2,
      color: "rgba(221, 204, 248, 1)",
      textAlign: "left",
      fontSize: { xs: "16px", sm: "20px", md: "23px" },
      fontWeight: "500",
    },
  },
  contentContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: { xs: "center", sm: "space-between" },
    marginBottom: "30px",
    flexDirection: { xs: "column", sm: "row" },
    color: "#fff",
    "& body1": {
      mb: 2,
      color: "#fff",
      textAlign: "center",
      fontWeight: "600",
      fontSize: { xs: "22px", sm: "40px", md: "57px" },
    },
  },
  cardContainer: {
    display: "flex",
    overflowX: "auto",
    gap: { xs: "10px", sm: "15px", md: "20px" },
    scrollBehavior: "smooth",
    padding: { xs: "10px 0", sm: "0" },
    "&::-webkit-scrollbar": { display: "none" },
    msOverflowStyle: "none",
    scrollbarWidth: "none",
  },
  CardCSS: {
    width: { xs: "220px", sm: "260px", md: "280px" },
    height: { xs: "380px", sm: "420px", md: "450px" },
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    flexShrink: 0,
    position: "relative",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
  },
  cardSubCSS: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "40%",
    background: "linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)",
    borderRadius: "0 0 10px 10px",
  },
  CardSubContainer: {
    position: "relative",
    padding: "20px",
    zIndex: 1,
    textWrap: "nowrap",
    "& h6": {
      color: "#fff",
      fontWeight: "700",
      fontSize: { xs: "16px", sm: "19px", md: "20px" },
      lineHeight: { xs: "25px", sm: "28px", md: "30px" },
      textShadow: "0px 2px 4px rgba(0,0,0,0.5)",
      marginBottom: { xs: "5px", md: "0px" },
    },
    "& body2": {
      fontWeight: "400",
      fontSize: { xs: "12px", sm: "12px", md: "12px" },
      lineHeight: { xs: "18px", sm: "18px", md: "18px" },
      color: "rgba(134, 205, 182, 1)",
      textShadow: "0px 2px 4px rgba(0,0,0,0.5)",
    },
  },
  arrowButtons: {
    border: "1px solid rgba(62, 87, 167, 1)",
    background: "rgba(18, 17, 29, 1)",
    boxShadow: "0px 0px 13px 0px rgba(115, 112, 142, 0.3)",
    "&:hover": {
      background: "rgba(28, 27, 41, 1)",
    },
    "& svg": {
      color: "rgba(142, 84, 233, 1)",
    },
  },
};

export default styles;
