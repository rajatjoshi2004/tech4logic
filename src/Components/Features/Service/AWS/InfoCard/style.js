const styles = {
  containerCSS: {
    width: "100%",
    margin: "0 auto",
    overflow: "hidden",
    backgroundColor: "#001F3F",
  },
  cardsContainer: {
    display: "flex",
    justifyContent: "space-between",
    padding: "10px 0",
    flexDirection: { xs: "row", md: "row" },
  },
  card: {
    padding: "0",
    borderRadius: "8px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  infoSection: {
    display: "flex",
    padding: { xs: "10px", md: 0 },
    gap: { xs: "10px", md: "20px" },
    mt: { xs: "10px", md: "60px" },
    mb: { xs: "10px", md: "60px" },
    alignItems: { xs: "flex-start", md: "center" },
    flexDirection: { xs: "column", md: "row" },
    textAlign: { xs: "center", md: "left" },
    color: "#fff",
  },
  leftInfo: {
    flex: 1,
    textAlign: "justify",
    fontSize: { xs: "14px", md: "20px" },
    lineHeight: { xs: "1.5", md: "1.8" },
    padding: { xs: "10px", md: "0" },
  },
  rightInfo: {
    flex: 1,
    textAlign: "center",
    fontSize: { xs: "14px", md: "20px" },
    lineHeight: { xs: "1.5", md: "1.8" },
    padding: { xs: "10px", md: "0" },
  },
  divider: {
    border: "2px solid rgba(255, 153, 0, 1)",
    margin: { xs: "10px 0", md: "0 20px" },
    height: { xs: "auto", md: "200px" },
  },
};

export default styles;
