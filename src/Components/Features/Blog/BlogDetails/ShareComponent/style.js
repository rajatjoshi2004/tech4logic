const style = {
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
  },
  copyContainer: {
    border: "1px solid blue",
    background: "rgb(0,0,0,0.7)",
  },
  title: {
    color: "aquamarine",
    fontStyle: "italic",
  },
  ModalShareContainer: {
    position: "relative",
    display: "block",
    width: "100%",
    maxWidth: "640px",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    margin: "auto",
    padding: "40px 40px !important",
    borderRadius: "20px",
    top: "50%",
    "& h1": {
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
      fontSize: "20px",
      fontWeight: "800 !important",
    },
    transform: "translateY(-50%)",
    "@media(max-width:767px)": {
      width: "90%",
      maxHeight: "515px",
      padding: "15px",
    },
  },
};

export default style;
