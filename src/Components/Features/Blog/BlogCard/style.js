const styles = {
  cardContainer: {
    maxWidth: 1400,
    padding: "120px",
    color: "white",
    position: "relative",
    borderRadius: 4,
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)",
    top: "-80px",
    margin: "0 auto",
    zIndex: 2,
    height: "550px",
  },
  header: {
    padding: "120px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    position: "absolute",
    top: "30px",
    left: "30px",
    fontSize: "18px",
  },
  tag: {
    cursor: "Pointer",
    padding: "2px 8px",
    border: "1px solid #fff",
    borderRadius: "20px",
    background: "transparent",
  },
  title: {
    fontSize: "54px",
    fontWeight: "bold",
    marginTop: "60px",
    padding: "20px",
  },
  description: {
    fontSize: "1rem",
    marginTop: "20px",
  },
  readMoreButton: {
    marginTop: "30px",
    backgroundColor: "#fff",
    color: "#3E57A7",
    borderRadius: "20px",
    padding: "10px 29px",
    textTransform: "none",
    "&:hover": {
      backgroundColor: "#291F65",
      borderColor: "#291F65",
    },
  },
};

export default styles;
