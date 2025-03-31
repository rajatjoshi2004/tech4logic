const styles = {
  container: {
    backgroundImage: 'url("/Images/About/aboutusbg.svg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: { xs: "300px", sm: "610px" },
    position: "relative",
    color: "#fff",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-start",
    padding: { xs: "10px", sm: "20px" },
  },
  subConatiner: {
    position: "absolute",
    bottom: { xs: "50px", sm: "100px" },
    left: { xs: "20px", sm: "90px" },
    "& h4": {
      fontWeight: "bold",
      fontSize: { xs: "28px", sm: "55px" },
    },
  },
};

export default styles;
