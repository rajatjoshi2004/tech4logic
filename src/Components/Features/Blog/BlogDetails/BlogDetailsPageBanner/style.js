const styles = {
  container: {
    position: "relative",
    width: "100%",
    height: "60vh",
    overflow: "hidden",
  },
  contentContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)", 
    textAlign: "center",
    color: "#fff",
    zIndex: 1,
    padding: { xs: 0, sm: "0 20px", md: "0 20px" },
    width: "100%",
  },
  contentTitle: {
    fontSize: { xs: "28px", sm: "36px", md: "50px" },
    fontWeight: "700", 
    lineHeight: { xs: "36px", sm: "48px", md: "80px" },
    letterSpacing: "1px",
    textTransform: "uppercase",
    textShadow: "2px 2px 8px rgba(0, 0, 0, 0.7)",
    overflow: "hidden",
    display: "-webkit-box",
    WebkitBoxOrient: "vertical",
    WebkitLineClamp: 2, 
  },
};

export default styles;
