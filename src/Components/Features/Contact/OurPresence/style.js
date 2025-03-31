const styles = {
  container: {
    paddingX: { xs: "20px", md: "110px" },
    color: "#fff",
    mt: 4,
  },
  header: {
    display: "flex",
    alignItems: "center",
    mb: 3,
  },
  title: {
    fontSize: { xs: "24px", md: "30px" },
    mr: 2,
  },
  divider: {
    flex: 1,
    border: "1px solid gray",
  },
  addressContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: { xs: "20px", md: "40px" },
    justifyContent: { xs: "center", md: "space-between" },
  },
  card: {
    position: "relative",
    borderTop: "1px solid #fff",
    border: "1px solid #fff",
    borderRadius: "20px",
    bgcolor: "#10172A",
    color: "#fff",
    flexBasis: { xs: "100%", md: "calc(50% - 10px)" },
    maxWidth: "650px",
    height: "260px",
    mb: "20px",
    p: "10px",
    overflow: "hidden",
    "&:before": {
      content: '""',
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      width: "5px",
      background: "linear-gradient(90deg, #86CDB6 0%, #3E57A7 100%)",
      zIndex: 1,
    },
  },
  cardContent: {
    padding: 2,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    position: "relative",
    zIndex: 2,
    whiteSpace: "normal",
    wordBreak: "break-word",
    lineHeight: "1.5",
    "& h6": {
      fontSize: { xs: "14px", md: "30px" },
      fontWeight: "600",
    },
    "& body1": {
      fontSize: { xs: "14px", md: "30px" },
      fontWeight: "200",
    },
  },
};

export default styles;
