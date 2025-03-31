const styles = {
  containerCSS: {
    padding: "40px",
    maxWidth: "1400px",
    width: "100%",
    margin: "0 auto",
    color: "#fff",
    textAlign: "left",
    background: " linear-gradient(90deg, #FF9900 40%, #995C00 60%)",
    "& h2": {
      fontSize: "60px",
      fontWeight: "bold",
    },
    "& h6": {
      fontSize: "40px",
      marginTop: "20px",
      fontWeight: "700",
    },
  },
  inputConatiner: {
    display: "flex",
    alignItems: "center",
    marginBottom: "20px",
    "& input": {
      borderBottom: "1px solid #FFFFFF66",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        border: "none",
        outline: "none",
      },
    },
  },
  buttonCSS: {
    background: "linear-gradient(90deg, #FFC062 0%, #855000 100%)",
    border: "1px solid #FF9900",
    boxShadow: "0px 0px 81.2px 0px #9E5F00",
    padding: "10px 20px",
    color: "#fff",
    height: "40px",
    width: "150px",
    fontWeight: "bold",
    "&:hover": {
      background: "linear-gradient(90deg, #FFC062 0%, #855000 100%)",
    },
  },
};

export default styles;
